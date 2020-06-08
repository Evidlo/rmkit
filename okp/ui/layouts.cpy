#include "base.h"

namespace ui:
  class Layout: public Widget:
    public:
    Scene scene
    int x, y, w, h
    vector<shared_ptr<Widget>> children
    int padding = 0

    Layout(int x, y, w, h, Scene s): Widget(x,y,w,h), scene(s), x(x), y(y), w(w), h(h):
      pass

    void add(Widget *w):
      children.push_back(shared_ptr<Widget>(w))
      scene->add(w)

    void redraw():
      for auto c: children:
        c->redraw()

  class AbsLayout: public Layout:
    public:
    AbsLayout(int x, y, w, h, Scene s): Layout(x,y,w,h,s):
      pass

  class AutoLayout: public Layout:
    public:
    int start = 0, end = 0
    AutoLayout(int x, y, w, h, Scene s): Layout(x,y,w,h,s):
      pass

    virtual void pack_start(Widget *w, int padding=0):
      pass
    virtual void pack_end(Widget *w, int padding=0):
      pass

  class VerticalLayout: public AutoLayout:
    public:
    VerticalLayout(int x, y, w, h, Scene s): AutoLayout(x,y,w,h,s):
      self.start = 0
      self.end = h

    void pack_start(Widget *w, int padding=0):
      w->y += self.start + self.y + padding
      w->x += self.x
      self.start += w->h + padding
      self.add(w)

    void pack_end(Widget *w, int padding=0):
      w->y = self.y + self.end - w->h - padding
      w->x += self.x
      self.end -= w->h + padding
      self.add(w)

  class HorizontalLayout: public AutoLayout:
    public:
    HorizontalLayout(int x, y, w, h, Scene s): AutoLayout(x,y,w,h,s):
      start = 0
      end = w

    void pack_start(Widget *w, int padding=0):
      w->x += self.start + self.x + padding
      w->y += self.y
      self.start += w->w + padding
      self.add(w)

    void pack_end(Widget *w, int padding=0):
      w->x = self.x + self.end - w->w - padding
      w->y += self.y
      self.end -= w->w + padding
      self.add(w)