define(['handlebars.runtime'], function(Handlebars) {
  Handlebars = Handlebars["default"];  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['attribute.html'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression((helpers.escapeAttributeName || (depth0 && depth0.escapeAttributeName) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.name : stack1),{"name":"escapeAttributeName","hash":{},"data":data}));
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing;

  return "<span class='idlAttribute' id=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.idlId : stack1), depth0))
    + "\" data-idl data-title='"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.name : stack1), depth0))
    + "'>"
    + alias2((helpers.extAttr || (depth0 && depth0.extAttr) || alias4).call(alias3,(depth0 != null ? depth0.obj : depth0),(depth0 != null ? depth0.indent : depth0),{"name":"extAttr","hash":{},"data":data}))
    + alias2((helpers.idn || (depth0 && depth0.idn) || alias4).call(alias3,(depth0 != null ? depth0.indent : depth0),{"name":"idn","hash":{},"data":data}))
    + alias2(((helper = (helper = helpers.qualifiers || (depth0 != null ? depth0.qualifiers : depth0)) != null ? helper : alias4),(typeof helper === "function" ? helper.call(alias3,{"name":"qualifiers","hash":{},"data":data}) : helper)))
    + "attribute <span class='idlAttrType'>"
    + alias2((helpers.idlType || (depth0 && depth0.idlType) || alias4).call(alias3,(depth0 != null ? depth0.obj : depth0),{"name":"idlType","hash":{},"data":data}))
    + "</span> "
    + alias2((helpers.pads || (depth0 && depth0.pads) || alias4).call(alias3,(depth0 != null ? depth0.pad : depth0),{"name":"pads","hash":{},"data":data}))
    + "<span class='idlAttrName'>"
    + ((stack1 = (helpers.tryLink || (depth0 && depth0.tryLink) || alias4).call(alias3,(depth0 != null ? depth0.obj : depth0),{"name":"tryLink","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</span>;</span>\r\n";
},"useData":true});
templates['callback.html'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.name : stack1), depth0));
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing;

  return "<span class='idlCallback' id='"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.idlId : stack1), depth0))
    + "' data-idl data-title='"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.name : stack1), depth0))
    + "'>"
    + alias2((helpers.extAttr || (depth0 && depth0.extAttr) || alias4).call(alias3,(depth0 != null ? depth0.obj : depth0),(depth0 != null ? depth0.indent : depth0),{"name":"extAttr","hash":{},"data":data}))
    + alias2((helpers.idn || (depth0 && depth0.idn) || alias4).call(alias3,(depth0 != null ? depth0.indent : depth0),{"name":"idn","hash":{},"data":data}))
    + "callback <span class='idlCallbackID'>"
    + ((stack1 = (helpers.tryLink || (depth0 && depth0.tryLink) || alias4).call(alias3,(depth0 != null ? depth0.obj : depth0),{"name":"tryLink","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</span> = <span class='idlCallbackType'>"
    + alias2((helpers.idlType || (depth0 && depth0.idlType) || alias4).call(alias3,(depth0 != null ? depth0.obj : depth0),{"name":"idlType","hash":{},"data":data}))
    + "</span> ("
    + ((stack1 = ((helper = (helper = helpers.children || (depth0 != null ? depth0.children : depth0)) != null ? helper : alias4),(typeof helper === "function" ? helper.call(alias3,{"name":"children","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ");</span>";
},"useData":true});
templates['const.html'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.name : stack1), depth0));
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing;

  return "<span class='idlConst' id=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.idlId : stack1), depth0))
    + "\" data-idl data-title='"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.name : stack1), depth0))
    + "'>"
    + alias2((helpers.extAttr || (depth0 && depth0.extAttr) || alias4).call(alias3,(depth0 != null ? depth0.obj : depth0),(depth0 != null ? depth0.indent : depth0),{"name":"extAttr","hash":{},"data":data}))
    + alias2((helpers.idn || (depth0 && depth0.idn) || alias4).call(alias3,(depth0 != null ? depth0.indent : depth0),{"name":"idn","hash":{},"data":data}))
    + "const <span class='idlConstType'>"
    + alias2((helpers.idlType || (depth0 && depth0.idlType) || alias4).call(alias3,(depth0 != null ? depth0.obj : depth0),{"name":"idlType","hash":{},"data":data}))
    + "</span>"
    + alias2(((helper = (helper = helpers.nullable || (depth0 != null ? depth0.nullable : depth0)) != null ? helper : alias4),(typeof helper === "function" ? helper.call(alias3,{"name":"nullable","hash":{},"data":data}) : helper)))
    + " "
    + alias2((helpers.pads || (depth0 && depth0.pads) || alias4).call(alias3,(depth0 != null ? depth0.pad : depth0),{"name":"pads","hash":{},"data":data}))
    + "<span class='idlConstName'>"
    + ((stack1 = (helpers.tryLink || (depth0 && depth0.tryLink) || alias4).call(alias3,(depth0 != null ? depth0.obj : depth0),{"name":"tryLink","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</span> = <span class='idlConstValue'>"
    + alias2((helpers.stringifyIdlConst || (depth0 && depth0.stringifyIdlConst) || alias4).call(alias3,((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.value : stack1),{"name":"stringifyIdlConst","hash":{},"data":data}))
    + "</span>;</span>\r\n";
},"useData":true});
templates['dictionary.html'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.name : stack1), depth0));
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " : <span class='idlSuperclass'><a>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.inheritance : stack1), depth0))
    + "</a></span>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing, alias5="function";

  return "<span class='idlDictionary' id='"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.idlId : stack1), depth0))
    + "' data-idl data-title='"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.name : stack1), depth0))
    + "'>"
    + alias2((helpers.extAttr || (depth0 && depth0.extAttr) || alias4).call(alias3,(depth0 != null ? depth0.obj : depth0),(depth0 != null ? depth0.indent : depth0),{"name":"extAttr","hash":{},"data":data}))
    + alias2((helpers.idn || (depth0 && depth0.idn) || alias4).call(alias3,(depth0 != null ? depth0.indent : depth0),{"name":"idn","hash":{},"data":data}))
    + alias2(((helper = (helper = helpers.partial || (depth0 != null ? depth0.partial : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"partial","hash":{},"data":data}) : helper)))
    + "dictionary <span class='idlDictionaryID'>"
    + ((stack1 = (helpers.tryLink || (depth0 && depth0.tryLink) || alias4).call(alias3,(depth0 != null ? depth0.obj : depth0),{"name":"tryLink","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</span>"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.inheritance : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " &#123;\r\n"
    + ((stack1 = ((helper = (helper = helpers.children || (depth0 != null ? depth0.children : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"children","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "&#125;;</span>";
},"useData":true});
templates['dict-member.html'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.name : stack1), depth0));
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " = <span class='idlMemberValue'>"
    + container.escapeExpression((helpers.stringifyIdlConst || (depth0 && depth0.stringifyIdlConst) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1["default"] : stack1),{"name":"stringifyIdlConst","hash":{},"data":data}))
    + "</span>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing;

  return "<span class='idlMember' id=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.idlId : stack1), depth0))
    + "\" data-idl data-title='"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.name : stack1), depth0))
    + "'>"
    + alias2((helpers.extAttr || (depth0 && depth0.extAttr) || alias4).call(alias3,(depth0 != null ? depth0.obj : depth0),(depth0 != null ? depth0.indent : depth0),{"name":"extAttr","hash":{},"data":data}))
    + alias2((helpers.idn || (depth0 && depth0.idn) || alias4).call(alias3,(depth0 != null ? depth0.indent : depth0),{"name":"idn","hash":{},"data":data}))
    + alias2(((helper = (helper = helpers.qualifiers || (depth0 != null ? depth0.qualifiers : depth0)) != null ? helper : alias4),(typeof helper === "function" ? helper.call(alias3,{"name":"qualifiers","hash":{},"data":data}) : helper)))
    + "<span class='idlMemberType'>"
    + alias2((helpers.idlType || (depth0 && depth0.idlType) || alias4).call(alias3,(depth0 != null ? depth0.obj : depth0),{"name":"idlType","hash":{},"data":data}))
    + "</span> "
    + alias2((helpers.pads || (depth0 && depth0.pads) || alias4).call(alias3,(depth0 != null ? depth0.typePad : depth0),{"name":"pads","hash":{},"data":data}))
    + "<span class='idlMemberName'>"
    + ((stack1 = (helpers.tryLink || (depth0 && depth0.tryLink) || alias4).call(alias3,(depth0 != null ? depth0.obj : depth0),{"name":"tryLink","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</span>"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1["default"] : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ";</span>\r\n";
},"useData":true});
templates['enum.html'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.name : stack1), depth0));
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing;

  return "<span class='idlEnum' id='"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.idlId : stack1), depth0))
    + "' data-idl data-title='"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.name : stack1), depth0))
    + "'>"
    + alias2((helpers.extAttr || (depth0 && depth0.extAttr) || alias4).call(alias3,(depth0 != null ? depth0.obj : depth0),(depth0 != null ? depth0.indent : depth0),{"name":"extAttr","hash":{},"data":data}))
    + alias2((helpers.idn || (depth0 && depth0.idn) || alias4).call(alias3,(depth0 != null ? depth0.indent : depth0),{"name":"idn","hash":{},"data":data}))
    + "enum <span class='idlEnumID'>"
    + ((stack1 = (helpers.tryLink || (depth0 && depth0.tryLink) || alias4).call(alias3,(depth0 != null ? depth0.obj : depth0),{"name":"tryLink","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</span> &#123;\r\n"
    + ((stack1 = ((helper = (helper = helpers.children || (depth0 != null ? depth0.children : depth0)) != null ? helper : alias4),(typeof helper === "function" ? helper.call(alias3,{"name":"children","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + alias2((helpers.idn || (depth0 && depth0.idn) || alias4).call(alias3,(depth0 != null ? depth0.indent : depth0),{"name":"idn","hash":{},"data":data}))
    + "&#125;;</span>";
},"useData":true});
templates['enum-item.html'] = template({"1":function(container,depth0,helpers,partials,data) {
    return ",";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return alias3((helpers.idn || (depth0 && depth0.idn) || alias2).call(alias1,(depth0 != null ? depth0.indent : depth0),{"name":"idn","hash":{},"data":data}))
    + "<a href=\"#dom-"
    + alias3(((helper = (helper = helpers.parentID || (depth0 != null ? depth0.parentID : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"parentID","hash":{},"data":data}) : helper)))
    + "-"
    + alias3(((helper = (helper = helpers.lname || (depth0 != null ? depth0.lname : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"lname","hash":{},"data":data}) : helper)))
    + "\" class=\"idlEnumItem\">\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\"</a>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.needsComma : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n";
},"useData":true});
templates['exception.html'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.name : stack1), depth0));
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " : <span class='idlSuperclass'><a>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.inheritance : stack1), depth0))
    + "</a></span>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing;

  return "<span class='idlException' id='"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.idlId : stack1), depth0))
    + "' data-idl data-title='"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.name : stack1), depth0))
    + "'>"
    + alias2((helpers.extAttr || (depth0 && depth0.extAttr) || alias4).call(alias3,(depth0 != null ? depth0.obj : depth0),(depth0 != null ? depth0.indent : depth0),{"name":"extAttr","hash":{},"data":data}))
    + alias2((helpers.idn || (depth0 && depth0.idn) || alias4).call(alias3,(depth0 != null ? depth0.indent : depth0),{"name":"idn","hash":{},"data":data}))
    + "exception <span class='idlExceptionID'>"
    + ((stack1 = (helpers.tryLink || (depth0 && depth0.tryLink) || alias4).call(alias3,(depth0 != null ? depth0.obj : depth0),{"name":"tryLink","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</span>"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.inheritance : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " &#123;\r\n"
    + ((stack1 = ((helper = (helper = helpers.children || (depth0 != null ? depth0.children : depth0)) != null ? helper : alias4),(typeof helper === "function" ? helper.call(alias3,{"name":"children","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + alias2((helpers.idn || (depth0 && depth0.idn) || alias4).call(alias3,(depth0 != null ? depth0.indent : depth0),{"name":"idn","hash":{},"data":data}))
    + "&#125;;</span>";
},"useData":true});
templates['extended-attribute.html'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<span class='"
    + alias4(((helper = (helper = helpers.extAttrClassName || (depth0 != null ? depth0.extAttrClassName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"extAttrClassName","hash":{},"data":data}) : helper)))
    + "'><span class=\"extAttrName\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.rhs : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.jsIf || (depth0 && depth0.jsIf) || alias2).call(alias1,(depth0 != null ? depth0.arguments : depth0),{"name":"jsIf","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</span>";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "=<span class=\"extAttrRhs\">"
    + ((stack1 = (helpers.extAttrRhs || (depth0 && depth0.extAttrRhs) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.rhs : depth0),{"name":"extAttrRhs","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</span>";
},"3":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression(container.lambda(depth0, depth0));
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "("
    + ((stack1 = (helpers.joinNonWhitespace || (depth0 && depth0.joinNonWhitespace) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.arguments : depth0),", ",{"name":"joinNonWhitespace","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ")";
},"6":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.param || (depth0 && depth0.param) || helpers.helperMissing).call(depth0 != null ? depth0 : {},depth0,{"name":"param","hash":{},"data":data}));
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return alias3((helpers.idn || (depth0 && depth0.idn) || alias2).call(alias1,(depth0 != null ? depth0.indent : depth0),{"name":"idn","hash":{},"data":data}))
    + "["
    + ((stack1 = (helpers.join || (depth0 && depth0.join) || alias2).call(alias1,(depth0 != null ? depth0.extAttrs : depth0),(depth0 != null ? depth0.sep : depth0),{"name":"join","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "]"
    + alias3(((helper = (helper = helpers.end || (depth0 != null ? depth0.end : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"end","hash":{},"data":data}) : helper)));
},"useData":true});
templates['field.html'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.name : stack1), depth0));
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing;

  return "<span class='idlField' id=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.idlId : stack1), depth0))
    + "\" data-idl data-title='"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.name : stack1), depth0))
    + "'>"
    + alias2((helpers.extAttr || (depth0 && depth0.extAttr) || alias4).call(alias3,(depth0 != null ? depth0.obj : depth0),(depth0 != null ? depth0.indent : depth0),{"name":"extAttr","hash":{},"data":data}))
    + alias2((helpers.idn || (depth0 && depth0.idn) || alias4).call(alias3,(depth0 != null ? depth0.indent : depth0),{"name":"idn","hash":{},"data":data}))
    + "<span class='idlFieldType'>"
    + alias2((helpers.idlType || (depth0 && depth0.idlType) || alias4).call(alias3,(depth0 != null ? depth0.obj : depth0),{"name":"idlType","hash":{},"data":data}))
    + "</span> "
    + alias2((helpers.pads || (depth0 && depth0.pads) || alias4).call(alias3,(depth0 != null ? depth0.pad : depth0),{"name":"pads","hash":{},"data":data}))
    + "<span class='idlFieldName'>"
    + ((stack1 = (helpers.tryLink || (depth0 && depth0.tryLink) || alias4).call(alias3,(depth0 != null ? depth0.obj : depth0),{"name":"tryLink","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</span>;</span>\r\n";
},"useData":true});
templates['implements.html'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4=container.lambda;

  return "<span class='idlImplements'>"
    + alias3((helpers.extAttr || (depth0 && depth0.extAttr) || alias2).call(alias1,(depth0 != null ? depth0.obj : depth0),(depth0 != null ? depth0.indent : depth0),{"name":"extAttr","hash":{},"data":data}))
    + alias3((helpers.idn || (depth0 && depth0.idn) || alias2).call(alias1,(depth0 != null ? depth0.indent : depth0),{"name":"idn","hash":{},"data":data}))
    + "<a>"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.target : stack1), depth0))
    + "</a> implements <a>"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1["implements"] : stack1), depth0))
    + "</a>;</span>";
},"useData":true});
templates['interface.html'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.name : stack1), depth0));
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " : <span class='idlSuperclass'><a>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.inheritance : stack1), depth0))
    + "</a></span>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing, alias5="function";

  return "<span class='idlInterface' id='"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.idlId : stack1), depth0))
    + "' data-idl data-title='"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.name : stack1), depth0))
    + "'>"
    + alias2((helpers.extAttr || (depth0 && depth0.extAttr) || alias4).call(alias3,(depth0 != null ? depth0.obj : depth0),(depth0 != null ? depth0.indent : depth0),{"name":"extAttr","hash":{},"data":data}))
    + alias2((helpers.idn || (depth0 && depth0.idn) || alias4).call(alias3,(depth0 != null ? depth0.indent : depth0),{"name":"idn","hash":{},"data":data}))
    + alias2(((helper = (helper = helpers.partial || (depth0 != null ? depth0.partial : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"partial","hash":{},"data":data}) : helper)))
    + alias2(((helper = (helper = helpers.callback || (depth0 != null ? depth0.callback : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"callback","hash":{},"data":data}) : helper)))
    + "interface <span class='idlInterfaceID'>"
    + ((stack1 = (helpers.tryLink || (depth0 && depth0.tryLink) || alias4).call(alias3,(depth0 != null ? depth0.obj : depth0),{"name":"tryLink","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</span>"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.inheritance : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " &#123;\r\n"
    + ((stack1 = ((helper = (helper = helpers.children || (depth0 != null ? depth0.children : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"children","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + alias2((helpers.idn || (depth0 && depth0.idn) || alias4).call(alias3,(depth0 != null ? depth0.indent : depth0),{"name":"idn","hash":{},"data":data}))
    + "&#125;;</span>";
},"useData":true});
templates['iterable.html'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "iterable";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : {}, alias3=helpers.helperMissing;

  return "<span class='idlIterable' id=\""
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.idlId : stack1), depth0))
    + "\" data-idl data-title='iterable'>"
    + alias1((helpers.extAttr || (depth0 && depth0.extAttr) || alias3).call(alias2,(depth0 != null ? depth0.obj : depth0),(depth0 != null ? depth0.indent : depth0),{"name":"extAttr","hash":{},"data":data}))
    + alias1((helpers.idn || (depth0 && depth0.idn) || alias3).call(alias2,(depth0 != null ? depth0.indent : depth0),{"name":"idn","hash":{},"data":data}))
    + alias1(((helper = (helper = helpers.qualifiers || (depth0 != null ? depth0.qualifiers : depth0)) != null ? helper : alias3),(typeof helper === "function" ? helper.call(alias2,{"name":"qualifiers","hash":{},"data":data}) : helper)))
    + ((stack1 = (helpers.tryLink || (depth0 && depth0.tryLink) || alias3).call(alias2,(depth0 != null ? depth0.obj : depth0),{"name":"tryLink","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "&lt;"
    + alias1((helpers.idlType || (depth0 && depth0.idlType) || alias3).call(alias2,(depth0 != null ? depth0.obj : depth0),{"name":"idlType","hash":{},"data":data}))
    + "&gt;;</span>\r\n";
},"useData":true});
templates['line-comment.html'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<span class='idlSectionComment'>"
    + alias3((helpers.idn || (depth0 && depth0.idn) || alias2).call(alias1,(depth0 != null ? depth0.indent : depth0),{"name":"idn","hash":{},"data":data}))
    + "//"
    + alias3(((helper = (helper = helpers.comment || (depth0 != null ? depth0.comment : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"comment","hash":{},"data":data}) : helper)))
    + "</span>\r\n";
},"useData":true});
templates['maplike.html'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "maplike";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : {}, alias3=helpers.helperMissing;

  return "<span class='idlMaplike' id=\""
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.idlId : stack1), depth0))
    + "\" data-idl data-title='maplike'>"
    + alias1((helpers.extAttr || (depth0 && depth0.extAttr) || alias3).call(alias2,(depth0 != null ? depth0.obj : depth0),(depth0 != null ? depth0.indent : depth0),{"name":"extAttr","hash":{},"data":data}))
    + alias1((helpers.idn || (depth0 && depth0.idn) || alias3).call(alias2,(depth0 != null ? depth0.indent : depth0),{"name":"idn","hash":{},"data":data}))
    + alias1(((helper = (helper = helpers.qualifiers || (depth0 != null ? depth0.qualifiers : depth0)) != null ? helper : alias3),(typeof helper === "function" ? helper.call(alias2,{"name":"qualifiers","hash":{},"data":data}) : helper)))
    + ((stack1 = (helpers.tryLink || (depth0 && depth0.tryLink) || alias3).call(alias2,(depth0 != null ? depth0.obj : depth0),{"name":"tryLink","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "&lt;"
    + alias1((helpers.idlType || (depth0 && depth0.idlType) || alias3).call(alias2,(depth0 != null ? depth0.obj : depth0),{"name":"idlType","hash":{},"data":data}))
    + "&gt;;</span>\r\n";
},"useData":true});
templates['method.html'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.name : stack1), depth0));
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing, alias5="function";

  return "<span class='idlMethod' id=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.idlId : stack1), depth0))
    + "\" data-idl data-title='"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.name : stack1), depth0))
    + "'>"
    + alias2((helpers.extAttr || (depth0 && depth0.extAttr) || alias4).call(alias3,(depth0 != null ? depth0.obj : depth0),(depth0 != null ? depth0.indent : depth0),{"name":"extAttr","hash":{},"data":data}))
    + alias2((helpers.idn || (depth0 && depth0.idn) || alias4).call(alias3,(depth0 != null ? depth0.indent : depth0),{"name":"idn","hash":{},"data":data}))
    + alias2(((helper = (helper = helpers["static"] || (depth0 != null ? depth0["static"] : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"static","hash":{},"data":data}) : helper)))
    + alias2(((helper = (helper = helpers.special || (depth0 != null ? depth0.special : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"special","hash":{},"data":data}) : helper)))
    + "<span class='idlMethType'>"
    + alias2((helpers.idlType || (depth0 && depth0.idlType) || alias4).call(alias3,(depth0 != null ? depth0.obj : depth0),{"name":"idlType","hash":{},"data":data}))
    + "</span> "
    + alias2((helpers.pads || (depth0 && depth0.pads) || alias4).call(alias3,(depth0 != null ? depth0.pad : depth0),{"name":"pads","hash":{},"data":data}))
    + "<span class='idlMethName'>"
    + ((stack1 = (helpers.tryLink || (depth0 && depth0.tryLink) || alias4).call(alias3,(depth0 != null ? depth0.obj : depth0),{"name":"tryLink","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</span>("
    + ((stack1 = ((helper = (helper = helpers.children || (depth0 != null ? depth0.children : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"children","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ");</span>\r\n";
},"useData":true});
templates['multiline-comment.html'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var alias1=container.escapeExpression;

  return alias1((helpers.idn || (depth0 && depth0.idn) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depths[1] != null ? depths[1].indent : depths[1]),{"name":"idn","hash":{},"data":data}))
    + alias1(container.lambda(depth0, depth0))
    + "\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "<span class='idlSectionComment'>"
    + alias3((helpers.idn || (depth0 && depth0.idn) || alias2).call(alias1,(depth0 != null ? depth0.indent : depth0),{"name":"idn","hash":{},"data":data}))
    + "/*"
    + alias3(((helper = (helper = helpers.firstLine || (depth0 != null ? depth0.firstLine : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"firstLine","hash":{},"data":data}) : helper)))
    + "\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.innerLine : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + alias3((helpers.idn || (depth0 && depth0.idn) || alias2).call(alias1,(depth0 != null ? depth0.indent : depth0),{"name":"idn","hash":{},"data":data}))
    + alias3(((helper = (helper = helpers.lastLine || (depth0 != null ? depth0.lastLine : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"lastLine","hash":{},"data":data}) : helper)))
    + "*/</span>\r\n";
},"useData":true,"useDepths":true});
templates['param.html'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " = <span class='idlDefaultValue'>"
    + container.escapeExpression((helpers.stringifyIdlConst || (depth0 && depth0.stringifyIdlConst) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1["default"] : stack1),{"name":"stringifyIdlConst","hash":{},"data":data}))
    + "</span>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "<span class='idlParam'>"
    + alias3((helpers.extAttrInline || (depth0 && depth0.extAttrInline) || alias2).call(alias1,(depth0 != null ? depth0.obj : depth0),{"name":"extAttrInline","hash":{},"data":data}))
    + alias3(((helper = (helper = helpers.optional || (depth0 != null ? depth0.optional : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"optional","hash":{},"data":data}) : helper)))
    + "<span class='idlParamType'>"
    + alias3((helpers.idlType || (depth0 && depth0.idlType) || alias2).call(alias1,(depth0 != null ? depth0.obj : depth0),{"name":"idlType","hash":{},"data":data}))
    + alias3(((helper = (helper = helpers.variadic || (depth0 != null ? depth0.variadic : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"variadic","hash":{},"data":data}) : helper)))
    + "</span> <span class='idlParamName'>"
    + alias3(container.lambda(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.name : stack1), depth0))
    + "</span>"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1["default"] : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</span>";
},"useData":true});
templates['serializer.html'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "serializer";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return " = <span class='idlSerializerValues'>"
    + container.escapeExpression(((helper = (helper = helpers.values || (depth0 != null ? depth0.values : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"values","hash":{},"data":data}) : helper)))
    + "</span>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : {}, alias3=helpers.helperMissing;

  return "<span class='idlSerializer' id=\""
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.idlId : stack1), depth0))
    + "\" data-idl data-title='serializer'>"
    + alias1((helpers.extAttr || (depth0 && depth0.extAttr) || alias3).call(alias2,(depth0 != null ? depth0.obj : depth0),(depth0 != null ? depth0.indent : depth0),{"name":"extAttr","hash":{},"data":data}))
    + alias1((helpers.idn || (depth0 && depth0.idn) || alias3).call(alias2,(depth0 != null ? depth0.indent : depth0),{"name":"idn","hash":{},"data":data}))
    + ((stack1 = (helpers.tryLink || (depth0 && depth0.tryLink) || alias3).call(alias2,(depth0 != null ? depth0.obj : depth0),{"name":"tryLink","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.values : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ";</span>\r\n";
},"useData":true});
templates['typedef.html'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.name : stack1), depth0));
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing;

  return "<span class='idlTypedef' id='"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.idlId : stack1), depth0))
    + "' data-idl data-title='"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.obj : depth0)) != null ? stack1.name : stack1), depth0))
    + "'>typedef "
    + alias2((helpers.typeExtAttrs || (depth0 && depth0.typeExtAttrs) || alias4).call(alias3,(depth0 != null ? depth0.obj : depth0),{"name":"typeExtAttrs","hash":{},"data":data}))
    + "<span class='idlTypedefType'>"
    + alias2((helpers.idlType || (depth0 && depth0.idlType) || alias4).call(alias3,(depth0 != null ? depth0.obj : depth0),{"name":"idlType","hash":{},"data":data}))
    + "</span> <span class='idlTypedefID'>"
    + ((stack1 = (helpers.tryLink || (depth0 && depth0.tryLink) || alias4).call(alias3,(depth0 != null ? depth0.obj : depth0),{"name":"tryLink","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</span>;</span>";
},"useData":true});
templates['conformance.html'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2>Conformance</h2>\r\n<p>\r\n  As well as sections marked as non-normative, all authoring guidelines, diagrams, examples,\r\n  and notes in this specification are non-normative. Everything else in this specification is\r\n  normative.\r\n</p>\r\n<p id='respecRFC2119'>\r\n  to be interpreted as described in [[!RFC2119]].\r\n</p>\r\n";
},"useData":true});
templates['headers.html'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "      "
    + container.escapeExpression((helpers.showLogos || (depth0 && depth0.showLogos) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.logos : depth0),{"name":"showLogos","hash":{},"data":data}))
    + "\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "        <a class='logo' href='http://www.geonovum.nl/'>\r\n            <img width='157' height='79' src='http://www.geonovum.nl/sites/all/themes/insiders/logo.png' alt='Geonovum'>\r\n        </a>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return " property='dcterms:title'";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "        <h2 "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.doRDFa : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "id='subtitle'>"
    + container.escapeExpression(((helper = (helper = helpers.subtitle || (depth0 != null ? depth0.subtitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"subtitle","hash":{},"data":data}) : helper)))
    + "</h2>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "property='bibo:subtitle' ";
},"10":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.typeStatus || (depth0 != null ? depth0.typeStatus : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"typeStatus","hash":{},"data":data}) : helper)))
    + " ";
},"12":function(container,depth0,helpers,partials,data) {
    return "property=\"dcterms:issued\"";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing, alias5="function";

  return "        <dt>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.l10n : depth0)) != null ? stack1.this_version : stack1), depth0))
    + "</dt>\r\n        <dd><a class='u-url' href='"
    + alias2(((helper = (helper = helpers.thisVersion || (depth0 != null ? depth0.thisVersion : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"thisVersion","hash":{},"data":data}) : helper)))
    + "'>"
    + alias2(((helper = (helper = helpers.thisVersion || (depth0 != null ? depth0.thisVersion : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"thisVersion","hash":{},"data":data}) : helper)))
    + "</a></dd>\r\n        <dt>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.l10n : depth0)) != null ? stack1.latest_published_version : stack1), depth0))
    + "</dt>\r\n        <dd>"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.latestVersion : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(17, data, 0),"data":data})) != null ? stack1 : "")
    + "</dd>\r\n";
},"15":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a href='"
    + alias4(((helper = (helper = helpers.latestVersion || (depth0 != null ? depth0.latestVersion : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"latestVersion","hash":{},"data":data}) : helper)))
    + "'>"
    + alias4(((helper = (helper = helpers.latestVersion || (depth0 != null ? depth0.latestVersion : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"latestVersion","hash":{},"data":data}) : helper)))
    + "</a>";
},"17":function(container,depth0,helpers,partials,data) {
    return "none";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : {}, alias3=helpers.helperMissing, alias4="function";

  return "        <dt>"
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.l10n : depth0)) != null ? stack1.latest_editors_draft : stack1), depth0))
    + "</dt>\r\n        <dd><a href='"
    + alias1(((helper = (helper = helpers.edDraftURI || (depth0 != null ? depth0.edDraftURI : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"edDraftURI","hash":{},"data":data}) : helper)))
    + "'>"
    + alias1(((helper = (helper = helpers.edDraftURI || (depth0 != null ? depth0.edDraftURI : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"edDraftURI","hash":{},"data":data}) : helper)))
    + "</a></dd>\r\n";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.l10n : depth0)) != null ? stack1.editors : stack1), depth0));
},"23":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.l10n : depth0)) != null ? stack1.editor : stack1), depth0));
},"25":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "        <dt>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.multipleAuthors : depth0),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.program(28, data, 0),"data":data})) != null ? stack1 : "")
    + "</dt>\r\n    "
    + container.escapeExpression((helpers.showPeople || (depth0 && depth0.showPeople) || helpers.helperMissing).call(alias1,"Author",(depth0 != null ? depth0.authors : depth0),{"name":"showPeople","hash":{},"data":data}))
    + "\r\n";
},"26":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.l10n : depth0)) != null ? stack1.authors : stack1), depth0));
},"28":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.l10n : depth0)) != null ? stack1.author : stack1), depth0));
},"30":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <dt>Github:</dt>\r\n        <dd><a href='"
    + alias4(((helper = (helper = helpers.github || (depth0 != null ? depth0.github : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"github","hash":{},"data":data}) : helper)))
    + "'>Repository</a></dd>\r\n        <dd><a href='"
    + alias4(((helper = (helper = helpers.github || (depth0 != null ? depth0.github : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"github","hash":{},"data":data}) : helper)))
    + "/issues'>Issues</a></dd>\r\n";
},"32":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.otherLinks : depth0),{"name":"each","hash":{},"fn":container.program(33, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"33":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.key : depth0),{"name":"if","hash":{},"fn":container.program(34, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"34":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "          <dt "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0["class"] : depth0),{"name":"if","hash":{},"fn":container.program(35, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + ":</dt>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.data : depth0),{"name":"if","hash":{},"fn":container.program(37, data, 0),"inverse":container.program(47, data, 0),"data":data})) != null ? stack1 : "");
},"35":function(container,depth0,helpers,partials,data) {
    var helper;

  return "class=\""
    + container.escapeExpression(((helper = (helper = helpers["class"] || (depth0 != null ? depth0["class"] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"class","hash":{},"data":data}) : helper)))
    + "\"";
},"37":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":container.program(38, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"38":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.value : depth0),{"name":"if","hash":{},"fn":container.program(39, data, 0),"inverse":container.program(44, data, 0),"data":data})) != null ? stack1 : "");
},"39":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "                  <dd "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0["class"] : depth0),{"name":"if","hash":{},"fn":container.program(35, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\r\n                    "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.href : depth0),{"name":"if","hash":{},"fn":container.program(40, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                      "
    + container.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\r\n                    "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.href : depth0),{"name":"if","hash":{},"fn":container.program(42, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                  </dd>\r\n";
},"40":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<a href=\""
    + container.escapeExpression(((helper = (helper = helpers.href || (depth0 != null ? depth0.href : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"href","hash":{},"data":data}) : helper)))
    + "\">";
},"42":function(container,depth0,helpers,partials,data) {
    return "</a>";
},"44":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.href : depth0),{"name":"if","hash":{},"fn":container.program(45, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"45":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <dd><a href=\""
    + alias4(((helper = (helper = helpers.href || (depth0 != null ? depth0.href : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"href","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.href || (depth0 != null ? depth0.href : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"href","hash":{},"data":data}) : helper)))
    + "</a></dd>\r\n";
},"47":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.value : depth0),{"name":"if","hash":{},"fn":container.program(48, data, 0),"inverse":container.program(50, data, 0),"data":data})) != null ? stack1 : "");
},"48":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "              <dd "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0["class"] : depth0),{"name":"if","hash":{},"fn":container.program(35, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\r\n                "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.href : depth0),{"name":"if","hash":{},"fn":container.program(40, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                  "
    + container.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\r\n                "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.href : depth0),{"name":"if","hash":{},"fn":container.program(42, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n              </dd>\r\n";
},"50":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.href : depth0),{"name":"if","hash":{},"fn":container.program(51, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"51":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <dd "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0["class"] : depth0),{"name":"if","hash":{},"fn":container.program(35, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\r\n                  <a href=\""
    + alias4(((helper = (helper = helpers.href || (depth0 != null ? depth0.href : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"href","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.href || (depth0 != null ? depth0.href : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"href","hash":{},"data":data}) : helper)))
    + "</a>\r\n                </dd>\r\n";
},"53":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "    "
    + ((stack1 = ((helper = (helper = helpers.overrideCopyright || (depth0 != null ? depth0.overrideCopyright : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"overrideCopyright","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n";
},"55":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <dd class='copyright'>\r\n      <abbr title='Creative Commons Naamsvermelding 3.0 Licentie'>\r\n        <a href='https://creativecommons.org/licenses/by-nd/3.0/nl/'>\r\n            <img src='/media/logos/CreativeCommons3.0.png' alt='CreativeCommons' width='588px' height='49px'>\r\n        </a>\r\n      </abbr>\r\n    </dd>\r\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.additionalCopyrightHolders : depth0),{"name":"if","hash":{},"fn":container.program(56, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"56":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "        <p class='copyright'>"
    + ((stack1 = ((helper = (helper = helpers.additionalCopyrightHolders || (depth0 != null ? depth0.additionalCopyrightHolders : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"additionalCopyrightHolders","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class='head'>\r\n  <p>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.logos : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "    </p>\r\n    <h1 class='title p-name' id='title'"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.doRDFa : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subtitle : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <h2><abbr title=\"Geonovum\">Geonovum</abbr> "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isRegular : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + alias4(((helper = (helper = helpers.textStatus || (depth0 != null ? depth0.textStatus : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"textStatus","hash":{},"data":data}) : helper)))
    + " \r\n    <time "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.doRDFa : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "class='dt-published' datetime='"
    + alias4(((helper = (helper = helpers.dashDate || (depth0 != null ? depth0.dashDate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dashDate","hash":{},"data":data}) : helper)))
    + "'>"
    + alias4(((helper = (helper = helpers.publishHumanDate || (depth0 != null ? depth0.publishHumanDate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"publishHumanDate","hash":{},"data":data}) : helper)))
    + "</time></h2>\r\n    <dl>\r\n"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.isNoTrack : depth0),{"name":"unless","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.edDraftURI : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <dt>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.multipleEditors : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.program(23, data, 0),"data":data})) != null ? stack1 : "")
    + "</dt>"
    + alias4((helpers.showPeople || (depth0 && depth0.showPeople) || alias2).call(alias1,"Editor",(depth0 != null ? depth0.editors : depth0),{"name":"showPeople","hash":{},"data":data}))
    + "\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.authors : depth0),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.github : depth0),{"name":"if","hash":{},"fn":container.program(30, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.otherLinks : depth0),{"name":"if","hash":{},"fn":container.program(32, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </dl>\r\n  <dt>Rechtenbeleid:</dt>  \r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.overrideCopyright : depth0),{"name":"if","hash":{},"fn":container.program(53, data, 0),"inverse":container.program(55, data, 0),"data":data})) != null ? stack1 : "")
    + "  <hr title=\"Separator for header\">\r\n</div>\r\n";
},"useData":true});
templates['permalinks.css'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "section > *:hover > span.permalink { visibility: visible; }\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "	float: right;\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "    visibility: hidden;\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "/* --- PERMALINKS --- */\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.permalinkHide : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n.permalink {\r\n    width: 1px;\r\n    height: 1px;\r\n    overflow: visible;\r\n    font-size: 10pt;\r\n    font-style: normal;\r\n    vertical-align: middle;\r\n    margin-left: 4px;\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.permalinkEdge : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.permalinkHide : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "}\r\n\r\n.permalink a, .permalink a:link, .permalink a:visited, .permalink a:hover, .permalink a:focus, .permalink a:active\r\n{\r\n	background:transparent !important;\r\n	text-decoration:none;\r\n    font-weight: bold;\r\n	color:#666 !important;\r\n}\r\n\r\n.permalink abbr {\r\n	border:0;\r\n}\r\n";
},"useData":true});
templates['sotd.html'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, buffer = 
  ((stack1 = (helpers["case"] || (depth0 && depth0["case"]) || alias2).call(alias1,"GEO-OFF",{"name":"case","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers["case"] || (depth0 && depth0["case"]) || alias2).call(alias1,"GEO-ED",{"name":"case","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers["case"] || (depth0 && depth0["case"]) || alias2).call(alias1,"GEO-WD",{"name":"case","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers["case"] || (depth0 && depth0["case"]) || alias2).call(alias1,"GEO-FD",{"name":"case","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
  stack1 = ((helper = (helper = helpers["default"] || (depth0 != null ? depth0["default"] : depth0)) != null ? helper : alias2),(options={"name":"default","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(alias1,options) : helper));
  if (!helpers["default"]) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(container,depth0,helpers,partials,data) {
    return "        <p>Geonovum officiële standaard.<p>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "        <p>Dit is een werkversie die op elk moment kan worden gewijzigd, verwijderd of vervangen \r\n        door andere documenten. Het is geen door de werkgroep goedgekeurde consultatieversie.<p>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "        <p>Dit is een door de werkgroep goedgekeurde consultatieversie. Commentaar over dit \r\n        document kan gestuurd worden naar <a href=\"mailto:geo-standaarden@geonovum.nl\">\r\n        geo-standaarden@geonovum.nl</a>.</p>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "        <p>Dit is een definitief concept van de nieuwe versie van de standaard. Wijzigingen naar \r\n        aanleiding van consultaties zijn doorgevoerd. De programmaraad van Geonovum beoordeelt \r\n        dit definitief concept. Keurt zij het goed, dan is er een nieuwe standaard.</p>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "        <p>Geonovum basis</p>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "<section id='sotd' class='introductory'><h2>"
    + container.escapeExpression(alias1(((stack1 = (depth0 != null ? depth0.l10n : depth0)) != null ? stack1.sotd : stack1), depth0))
    + "</h2>\r\n    <p>\r\n      <em>"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.l10n : depth0)) != null ? stack1.status_at_publication : stack1), depth0)) != null ? stack1 : "")
    + "</em>\r\n    </p>\r\n"
    + ((stack1 = (helpers["switch"] || (depth0 && depth0["switch"]) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.specStatus : depth0),{"name":"switch","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</section>\r\n";
},"useData":true});
return templates;
});