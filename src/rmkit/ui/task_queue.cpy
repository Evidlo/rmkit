#include <functional>
#include <thread>
#include <mutex>

#include "../input/input.h"


namespace ui:
  // class: ui::TaskQueue
  // The task queue is a way of scheduling tasks from the main thread to be run
  // in a side thread. After the side thread is finished, the task queue will
  // wake up the main thread
  class TaskQueue:
    public:
    static deque<std::function<void()>> tasks
    static std::mutex task_m

    static void wakeup():
      _ := write(input::ipc_fd[1], "WAKEUP", sizeof("WAKEUP"));

    // function: add_task
    //
    // Parameters:
    //
    // t - an anonymous function to run as a task
    static void add_task(std::function<void()> t):
      TaskQueue::tasks.push_back(t)
      TaskQueue::wakeup()

    static void run_task():
      if TaskQueue::tasks.size() == 0:
        return

      t := TaskQueue::tasks.front()
      TaskQueue::tasks.pop_front()
      try:
        thread *th = new thread([=]() {
          lock_guard<mutex> guard(task_m)
          t()
          TaskQueue::wakeup()
        })
        th->detach()
      catch (const std::exception& e):
        debug "NEW THREAD EXC", e.what()
        TaskQueue::wakeup()
