NDSummary.OnToolTipsLoaded("okpClass:ui.Widget",{30:"<div class=\"NDToolTip TClass Lokp\"><div class=\"TTSummary\">The widget class is the base of all other widgets. A widget is typically a piece of UI that can receive inputs and draw to screen through the frame buffer</div></div>",32:"<div class=\"NDToolTip TVariable Lokp\"><div id=\"NDPrototype32\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> framebuffer::FB *fb</div><div class=\"TTSummary\">every widget has access to fb through self.fb and therefore can (and should) draw directly to the framebuffer</div></div>",33:"<div class=\"NDToolTip TVariable Lokp\"><div id=\"NDPrototype33\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int</span> x, y, w, h</div></div>",39:"<div class=\"NDToolTip TFunction Lokp\"><div class=\"TTSummary\">parameters:</div></div>",40:"<div class=\"NDToolTip TFunction Lokp\"><div id=\"NDPrototype40\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual void</span> mark_redraw():</div><div class=\"TTSummary\">marks this widget as needing to be redrawn during the next redraw cycle of the main loop</div></div>",41:"<div class=\"NDToolTip TFunction Lokp\"><div id=\"NDPrototype41\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual void</span> before_redraw():</div><div class=\"TTSummary\">before_redraw is called on a widget before it is redrawn.</div></div>",42:"<div class=\"NDToolTip TFunction Lokp\"><div id=\"NDPrototype42\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual void</span> redraw():</div><div class=\"TTSummary\">redraws the widget.</div></div>",43:"<div class=\"NDToolTip TFunction Lokp\"><div id=\"NDPrototype43\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual void</span> hide():</div><div class=\"TTSummary\">hides the widget</div></div>",44:"<div class=\"NDToolTip TFunction Lokp\"><div id=\"NDPrototype44\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual void</span> show():</div><div class=\"TTSummary\">shows the widget</div></div>",45:"<div class=\"NDToolTip TFunction Lokp\"><div id=\"NDPrototype45\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> on_mouse_enter(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">input::</td><td class=\"PType\">SynMouseEvent&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">ev</td></tr></table></td><td class=\"PAfterParameters\">):</td></tr></table></div><div class=\"TTSummary\">called when the motion device enters the widget\'s bounding box</div></div>",46:"<div class=\"NDToolTip TFunction Lokp\"><div id=\"NDPrototype46\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> on_mouse_leave(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">input::</td><td class=\"PType\">SynMouseEvent&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">ev</td></tr></table></td><td class=\"PAfterParameters\">):</td></tr></table></div><div class=\"TTSummary\">calls when the motion device leaves the widget\'s bounding box</div></div>",47:"<div class=\"NDToolTip TFunction Lokp\"><div id=\"NDPrototype47\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> on_mouse_click(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">input::</td><td class=\"PType\">SynMouseEvent&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">ev</td></tr></table></td><td class=\"PAfterParameters\">):</td></tr></table></div><div class=\"TTSummary\">called when the motion device is activated, either by finger press or stylus press</div></div>",48:"<div class=\"NDToolTip TFunction Lokp\"><div id=\"NDPrototype48\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> on_mouse_down(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">input::</td><td class=\"PType\">SynMouseEvent&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">ev</td></tr></table></td><td class=\"PAfterParameters\">):</td></tr></table></div><div class=\"TTSummary\">called when the mouse is pressed down inside a widget</div></div>",49:"<div class=\"NDToolTip TFunction Lokp\"><div id=\"NDPrototype49\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> on_mouse_up(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">input::</td><td class=\"PType\">SynMouseEvent&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">ev</td></tr></table></td><td class=\"PAfterParameters\">):</td></tr></table></div><div class=\"TTSummary\">called when the mouse is unpressed inside a widget</div></div>",50:"<div class=\"NDToolTip TFunction Lokp\"><div id=\"NDPrototype50\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> on_mouse_move(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">input::</td><td class=\"PType\">SynMouseEvent&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">ev</td></tr></table></td><td class=\"PAfterParameters\">):</td></tr></table></div><div class=\"TTSummary\">called when the mouse is moving inside the widget\'s area</div></div>",51:"<div class=\"NDToolTip TFunction Lokp\"><div id=\"NDPrototype51\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> tuple&lt;<span class=\"SHKeyword\">int</span>, <span class=\"SHKeyword\">int</span>&gt; get_render_size():</div><div class=\"TTSummary\">gets the size of the rendered widget. this is for variable sized widgets like text widgets which might have different sizes depending on the supplied text</div></div>"});