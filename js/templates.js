define(['handlebars.runtime'], function(Handlebars) {
  Handlebars = Handlebars["default"];  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['cgbg-headers.html'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "    "
    + container.escapeExpression((helpers.showLogos || (depth0 && depth0.showLogos) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.logos : depth0),{"name":"showLogos","hash":{},"data":data}))
    + "\n";
},"3":function(container,depth0,helpers,partials,data) {
    return " property='dc:title'";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "    <h2 "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.doRDFa : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "id='subtitle'>"
    + container.escapeExpression(((helper = (helper = helpers.subtitle || (depth0 != null ? depth0.subtitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"subtitle","hash":{},"data":data}) : helper)))
    + "</h2>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "property='bibo:subtitle' ";
},"8":function(container,depth0,helpers,partials,data) {
    return "property=\"dc:issued\"";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : {}, alias3=helpers.helperMissing, alias4="function";

  return "      <dt>"
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.l10n : depth0)) != null ? stack1.this_version : stack1), depth0))
    + "</dt>\n      <dd><a class='u-url' href='"
    + alias1(((helper = (helper = helpers.thisVersion || (depth0 != null ? depth0.thisVersion : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"thisVersion","hash":{},"data":data}) : helper)))
    + "'>"
    + alias1(((helper = (helper = helpers.thisVersion || (depth0 != null ? depth0.thisVersion : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"thisVersion","hash":{},"data":data}) : helper)))
    + "</a></dd>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : {}, alias3=helpers.helperMissing, alias4="function";

  return "      <dt>"
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.l10n : depth0)) != null ? stack1.latest_published_version : stack1), depth0))
    + "</dt>\n      <dd><a href='"
    + alias1(((helper = (helper = helpers.latestVersion || (depth0 != null ? depth0.latestVersion : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"latestVersion","hash":{},"data":data}) : helper)))
    + "'>"
    + alias1(((helper = (helper = helpers.latestVersion || (depth0 != null ? depth0.latestVersion : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"latestVersion","hash":{},"data":data}) : helper)))
    + "</a></dd>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : {}, alias3=helpers.helperMissing, alias4="function";

  return "      <dt>"
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.l10n : depth0)) != null ? stack1.latest_editors_draft : stack1), depth0))
    + "</dt>\n      <dd><a href='"
    + alias1(((helper = (helper = helpers.edDraftURI || (depth0 != null ? depth0.edDraftURI : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"edDraftURI","hash":{},"data":data}) : helper)))
    + "'>"
    + alias1(((helper = (helper = helpers.edDraftURI || (depth0 != null ? depth0.edDraftURI : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"edDraftURI","hash":{},"data":data}) : helper)))
    + "</a></dd>\n";
},"16":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <dt>Test suite:</dt>\n      <dd><a href='"
    + alias4(((helper = (helper = helpers.testSuiteURI || (depth0 != null ? depth0.testSuiteURI : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"testSuiteURI","hash":{},"data":data}) : helper)))
    + "'>"
    + alias4(((helper = (helper = helpers.testSuiteURI || (depth0 != null ? depth0.testSuiteURI : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"testSuiteURI","hash":{},"data":data}) : helper)))
    + "</a></dd>\n";
},"18":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <dt>Implementation report:</dt>\n      <dd><a href='"
    + alias4(((helper = (helper = helpers.implementationReportURI || (depth0 != null ? depth0.implementationReportURI : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"implementationReportURI","hash":{},"data":data}) : helper)))
    + "'>"
    + alias4(((helper = (helper = helpers.implementationReportURI || (depth0 != null ? depth0.implementationReportURI : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"implementationReportURI","hash":{},"data":data}) : helper)))
    + "</a></dd>\n";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "      <dt>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.l10n : depth0)) != null ? stack1.bug_tracker : stack1), depth0))
    + "</dt>\n      <dd>"
    + ((stack1 = ((helper = (helper = helpers.bugTrackerHTML || (depth0 != null ? depth0.bugTrackerHTML : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"bugTrackerHTML","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</dd>\n";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <dt>Previous version:</dt>\n      <dd><a "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.doRDFa : depth0),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " href='"
    + alias4(((helper = (helper = helpers.prevVersion || (depth0 != null ? depth0.prevVersion : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"prevVersion","hash":{},"data":data}) : helper)))
    + "'>"
    + alias4(((helper = (helper = helpers.prevVersion || (depth0 != null ? depth0.prevVersion : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"prevVersion","hash":{},"data":data}) : helper)))
    + "</a></dd>\n";
},"23":function(container,depth0,helpers,partials,data) {
    return "rel=\"dcterms:replaces\"";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.prevED : depth0),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"26":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <dt>Previous editor's draft:</dt>\n        <dd><a href='"
    + alias4(((helper = (helper = helpers.prevED || (depth0 != null ? depth0.prevED : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"prevED","hash":{},"data":data}) : helper)))
    + "'>"
    + alias4(((helper = (helper = helpers.prevED || (depth0 != null ? depth0.prevED : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"prevED","hash":{},"data":data}) : helper)))
    + "</a></dd>\n";
},"28":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.l10n : depth0)) != null ? stack1.editors : stack1), depth0));
},"30":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.l10n : depth0)) != null ? stack1.editor : stack1), depth0));
},"32":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "      <dt>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.multipleAuthors : depth0),{"name":"if","hash":{},"fn":container.program(33, data, 0),"inverse":container.program(35, data, 0),"data":data})) != null ? stack1 : "")
    + "</dt>\n      "
    + container.escapeExpression((helpers.showPeople || (depth0 && depth0.showPeople) || helpers.helperMissing).call(alias1,"Author",(depth0 != null ? depth0.authors : depth0),{"name":"showPeople","hash":{},"data":data}))
    + "\n";
},"33":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.l10n : depth0)) != null ? stack1.authors : stack1), depth0));
},"35":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.l10n : depth0)) != null ? stack1.author : stack1), depth0));
},"37":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.otherLinks : depth0),{"name":"each","hash":{},"fn":container.program(38, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"38":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.key : depth0),{"name":"if","hash":{},"fn":container.program(39, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"39":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "          <dt "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0["class"] : depth0),{"name":"if","hash":{},"fn":container.program(40, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + ":</dt>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.data : depth0),{"name":"if","hash":{},"fn":container.program(42, data, 0),"inverse":container.program(52, data, 0),"data":data})) != null ? stack1 : "");
},"40":function(container,depth0,helpers,partials,data) {
    var helper;

  return "class=\""
    + container.escapeExpression(((helper = (helper = helpers["class"] || (depth0 != null ? depth0["class"] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"class","hash":{},"data":data}) : helper)))
    + "\"";
},"42":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":container.program(43, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"43":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.value : depth0),{"name":"if","hash":{},"fn":container.program(44, data, 0),"inverse":container.program(49, data, 0),"data":data})) != null ? stack1 : "");
},"44":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "                  <dd "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0["class"] : depth0),{"name":"if","hash":{},"fn":container.program(40, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n                    "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.href : depth0),{"name":"if","hash":{},"fn":container.program(45, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n                      "
    + container.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\n                    "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.href : depth0),{"name":"if","hash":{},"fn":container.program(47, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n                  </dd>\n";
},"45":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<a href=\""
    + container.escapeExpression(((helper = (helper = helpers.href || (depth0 != null ? depth0.href : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"href","hash":{},"data":data}) : helper)))
    + "\">";
},"47":function(container,depth0,helpers,partials,data) {
    return "</a>";
},"49":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.href : depth0),{"name":"if","hash":{},"fn":container.program(50, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"50":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <dd><a href=\""
    + alias4(((helper = (helper = helpers.href || (depth0 != null ? depth0.href : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"href","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.href || (depth0 != null ? depth0.href : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"href","hash":{},"data":data}) : helper)))
    + "</a></dd>\n";
},"52":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.value : depth0),{"name":"if","hash":{},"fn":container.program(53, data, 0),"inverse":container.program(55, data, 0),"data":data})) != null ? stack1 : "");
},"53":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "              <dd "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0["class"] : depth0),{"name":"if","hash":{},"fn":container.program(40, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n                "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.href : depth0),{"name":"if","hash":{},"fn":container.program(45, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n                  "
    + container.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\n                "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.href : depth0),{"name":"if","hash":{},"fn":container.program(47, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n              </dd>\n";
},"55":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.href : depth0),{"name":"if","hash":{},"fn":container.program(56, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"56":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <dd "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0["class"] : depth0),{"name":"if","hash":{},"fn":container.program(40, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n                  <a href=\""
    + alias4(((helper = (helper = helpers.href || (depth0 != null ? depth0.href : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"href","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.href || (depth0 != null ? depth0.href : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"href","hash":{},"data":data}) : helper)))
    + "</a>\n                </dd>\n";
},"58":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "    <p>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.multipleAlternates : depth0),{"name":"if","hash":{},"fn":container.program(59, data, 0),"inverse":container.program(61, data, 0),"data":data})) != null ? stack1 : "")
    + "      "
    + ((stack1 = ((helper = (helper = helpers.alternatesHTML || (depth0 != null ? depth0.alternatesHTML : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"alternatesHTML","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n    </p>\n";
},"59":function(container,depth0,helpers,partials,data) {
    return "        This document is also available in these non-normative formats: \n";
},"61":function(container,depth0,helpers,partials,data) {
    return "        This document is also available in this non-normative format: \n";
},"63":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.copyrightStart || (depth0 != null ? depth0.copyrightStart : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"copyrightStart","hash":{},"data":data}) : helper)))
    + "-";
},"65":function(container,depth0,helpers,partials,data) {
    return "      <a href=\"https://www.w3.org/community/about/agreements/fsa/\">W3C Community Final Specification Agreement (FSA)</a>. \n      A human-readable <a href=\"https://www.w3.org/community/about/agreements/fsa-deed/\">summary</a> is available.\n";
},"67":function(container,depth0,helpers,partials,data) {
    return "      <a href=\"https://www.w3.org/community/about/agreements/cla/\">W3C Community Contributor License Agreement (CLA)</a>.\n      A human-readable <a href=\"https://www.w3.org/community/about/agreements/cla-deed/\">summary</a> is available.\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class='head'>\n  <p>\n    <a class='logo' href='https://www.w3.org/'><img width='72' height='48' src='https://www.w3.org/StyleSheets/TR/2016/logos/W3C' alt='W3C'></a>\n  </p>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.logos : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  <h1 class='title p-name' id='title'"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.doRDFa : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subtitle : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  <h2>"
    + alias4(((helper = (helper = helpers.longStatus || (depth0 != null ? depth0.longStatus : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"longStatus","hash":{},"data":data}) : helper)))
    + " <time "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.doRDFa : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "class='dt-published' datetime='"
    + alias4(((helper = (helper = helpers.dashDate || (depth0 != null ? depth0.dashDate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dashDate","hash":{},"data":data}) : helper)))
    + "'>"
    + alias4(((helper = (helper = helpers.publishHumanDate || (depth0 != null ? depth0.publishHumanDate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"publishHumanDate","hash":{},"data":data}) : helper)))
    + "</time></h2>\n  <dl>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.thisVersion : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.latestVersion : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.edDraftURI : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.testSuiteURI : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.implementationReportURI : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.bugTrackerHTML : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.prevVersion : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.isCGFinal : depth0),{"name":"unless","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <dt>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.multipleEditors : depth0),{"name":"if","hash":{},"fn":container.program(28, data, 0),"inverse":container.program(30, data, 0),"data":data})) != null ? stack1 : "")
    + "</dt>\n    "
    + alias4((helpers.showPeople || (depth0 && depth0.showPeople) || alias2).call(alias1,"Editor",(depth0 != null ? depth0.editors : depth0),{"name":"showPeople","hash":{},"data":data}))
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.authors : depth0),{"name":"if","hash":{},"fn":container.program(32, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.otherLinks : depth0),{"name":"if","hash":{},"fn":container.program(37, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </dl>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.alternateFormats : depth0),{"name":"if","hash":{},"fn":container.program(58, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  <p class='copyright'>\n    <a href='https://www.w3.org/Consortium/Legal/ipr-notice#Copyright'>Copyright</a> &copy;\n    "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.copyrightStart : depth0),{"name":"if","hash":{},"fn":container.program(63, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + alias4(((helper = (helper = helpers.publishYear || (depth0 != null ? depth0.publishYear : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"publishYear","hash":{},"data":data}) : helper)))
    + "\n    the Contributors to the "
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + " Specification, published by the\n    <a href='"
    + alias4(((helper = (helper = helpers.wgURI || (depth0 != null ? depth0.wgURI : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"wgURI","hash":{},"data":data}) : helper)))
    + "'>"
    + alias4(((helper = (helper = helpers.wg || (depth0 != null ? depth0.wg : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"wg","hash":{},"data":data}) : helper)))
    + "</a> under the\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isCGFinal : depth0),{"name":"if","hash":{},"fn":container.program(65, data, 0),"inverse":container.program(67, data, 0),"data":data})) != null ? stack1 : "")
    + "  </p>\n  <hr title=\"Separator for header\">\n</div>\n";
},"useData":true});
templates['cgbg-sotd.html'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "      Please note that under the \n      <a href=\"https://www.w3.org/community/about/agreements/final/\">W3C Community Final Specification Agreement (FSA)</a> \n      other conditions apply.\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "      Please note that under the \n      <a href=\"https://www.w3.org/community/about/agreements/cla/\">W3C Community Contributor License Agreement (CLA)</a>\n      there is a limited opt-out and other conditions apply.\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "  "
    + ((stack1 = ((helper = (helper = helpers.sotdCustomParagraph || (depth0 != null ? depth0.sotdCustomParagraph : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"sotdCustomParagraph","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <p>If you wish to make comments regarding this document, please send them to \n      <a href='mailto:"
    + alias4(((helper = (helper = helpers.wgPublicList || (depth0 != null ? depth0.wgPublicList : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"wgPublicList","hash":{},"data":data}) : helper)))
    + "@w3.org"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subjectPrefix : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "'>"
    + alias4(((helper = (helper = helpers.wgPublicList || (depth0 != null ? depth0.wgPublicList : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"wgPublicList","hash":{},"data":data}) : helper)))
    + "@w3.org</a> \n      (<a href='mailto:"
    + alias4(((helper = (helper = helpers.wgPublicList || (depth0 != null ? depth0.wgPublicList : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"wgPublicList","hash":{},"data":data}) : helper)))
    + "-request@w3.org?subject=subscribe'>subscribe</a>,\n      <a\n        href='https://lists.w3.org/Archives/Public/"
    + alias4(((helper = (helper = helpers.wgPublicList || (depth0 != null ? depth0.wgPublicList : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"wgPublicList","hash":{},"data":data}) : helper)))
    + "/'>archives</a>)"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subjectPrefix : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ".</p>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper;

  return "?subject="
    + container.escapeExpression(((helper = (helper = helpers.subjectPrefixEnc || (depth0 != null ? depth0.subjectPrefixEnc : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"subjectPrefixEnc","hash":{},"data":data}) : helper)));
},"10":function(container,depth0,helpers,partials,data) {
    var helper;

  return "\n      with <code>"
    + container.escapeExpression(((helper = (helper = helpers.subjectPrefix || (depth0 != null ? depth0.subjectPrefix : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"subjectPrefix","hash":{},"data":data}) : helper)))
    + "</code> at the start of your\n      email's subject";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : {}, alias3=helpers.helperMissing, alias4="function";

  return "<section id='sotd' class='introductory'><h2>"
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.l10n : depth0)) != null ? stack1.sotd : stack1), depth0))
    + "</h2>\n  <p>\n    This specification was published by the <a href='"
    + alias1(((helper = (helper = helpers.wgURI || (depth0 != null ? depth0.wgURI : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"wgURI","hash":{},"data":data}) : helper)))
    + "'>"
    + alias1(((helper = (helper = helpers.wg || (depth0 != null ? depth0.wg : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"wg","hash":{},"data":data}) : helper)))
    + "</a>.\n    It is not a W3C Standard nor is it on the W3C Standards Track.\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.isCGFinal : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "    Learn more about \n    <a href=\"https://www.w3.org/community/\">W3C Community and Business Groups</a>.\n  </p>\n"
    + ((stack1 = helpers.unless.call(alias2,(depth0 != null ? depth0.sotdAfterWGinfo : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.wgPublicList : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.sotdAfterWGinfo : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</section>\n";
},"useData":true});
templates['conformance.html'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2>Conformance</h2>\n<p>\n  As well as sections marked as non-normative, all authoring guidelines, diagrams, examples,\n  and notes in this specification are non-normative. Everything else in this specification is\n  normative.\n</p>\n<p id='respecRFC2119'>\n  to be interpreted as described in [[!RFC2119]].\n</p>\n";
},"useData":true});
templates['headers.html'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "      "
    + container.escapeExpression((helpers.showLogos || (depth0 && depth0.showLogos) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.logos : depth0),{"name":"showLogos","hash":{},"data":data}))
    + "\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "        <a class='logo' href='http://www.geonovum.nl/'>\r\n            <img width='157' height='79' src='/media/logos/Geonovum.png' alt='Geonovum'>\r\n        </a>\r\n";
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
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.edDraftURI : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : {}, alias3=helpers.helperMissing, alias4="function";

  return "            <dt>"
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.l10n : depth0)) != null ? stack1.latest_editors_draft : stack1), depth0))
    + "</dt>\r\n            <dd><a href='"
    + alias1(((helper = (helper = helpers.edDraftURI || (depth0 != null ? depth0.edDraftURI : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"edDraftURI","hash":{},"data":data}) : helper)))
    + "'>"
    + alias1(((helper = (helper = helpers.edDraftURI || (depth0 != null ? depth0.edDraftURI : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"edDraftURI","hash":{},"data":data}) : helper)))
    + "</a></dd>\r\n";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.l10n : depth0)) != null ? stack1.editors : stack1), depth0));
},"24":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.l10n : depth0)) != null ? stack1.editor : stack1), depth0));
},"26":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "        <dt>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.multipleAuthors : depth0),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.program(29, data, 0),"data":data})) != null ? stack1 : "")
    + "</dt>\r\n    "
    + container.escapeExpression((helpers.showPeople || (depth0 && depth0.showPeople) || helpers.helperMissing).call(alias1,"Author",(depth0 != null ? depth0.authors : depth0),{"name":"showPeople","hash":{},"data":data}))
    + "\r\n";
},"27":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.l10n : depth0)) != null ? stack1.authors : stack1), depth0));
},"29":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.l10n : depth0)) != null ? stack1.author : stack1), depth0));
},"31":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.github : depth0),{"name":"if","hash":{},"fn":container.program(32, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"32":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <dt>Github:</dt>\r\n            <dd><a href='"
    + alias4(((helper = (helper = helpers.github || (depth0 != null ? depth0.github : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"github","hash":{},"data":data}) : helper)))
    + "'>Repository</a></dd>\r\n            <dd><a href='"
    + alias4(((helper = (helper = helpers.github || (depth0 != null ? depth0.github : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"github","hash":{},"data":data}) : helper)))
    + "/issues'>Issues</a></dd>\r\n";
},"34":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.otherLinks : depth0),{"name":"each","hash":{},"fn":container.program(35, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"35":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.key : depth0),{"name":"if","hash":{},"fn":container.program(36, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"36":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "          <dt "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0["class"] : depth0),{"name":"if","hash":{},"fn":container.program(37, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + ":</dt>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.data : depth0),{"name":"if","hash":{},"fn":container.program(39, data, 0),"inverse":container.program(49, data, 0),"data":data})) != null ? stack1 : "");
},"37":function(container,depth0,helpers,partials,data) {
    var helper;

  return "class=\""
    + container.escapeExpression(((helper = (helper = helpers["class"] || (depth0 != null ? depth0["class"] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"class","hash":{},"data":data}) : helper)))
    + "\"";
},"39":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":container.program(40, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"40":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.value : depth0),{"name":"if","hash":{},"fn":container.program(41, data, 0),"inverse":container.program(46, data, 0),"data":data})) != null ? stack1 : "");
},"41":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "                  <dd "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0["class"] : depth0),{"name":"if","hash":{},"fn":container.program(37, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\r\n                    "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.href : depth0),{"name":"if","hash":{},"fn":container.program(42, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                      "
    + container.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\r\n                    "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.href : depth0),{"name":"if","hash":{},"fn":container.program(44, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                  </dd>\r\n";
},"42":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<a href=\""
    + container.escapeExpression(((helper = (helper = helpers.href || (depth0 != null ? depth0.href : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"href","hash":{},"data":data}) : helper)))
    + "\">";
},"44":function(container,depth0,helpers,partials,data) {
    return "</a>";
},"46":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.href : depth0),{"name":"if","hash":{},"fn":container.program(47, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"47":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <dd><a href=\""
    + alias4(((helper = (helper = helpers.href || (depth0 != null ? depth0.href : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"href","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.href || (depth0 != null ? depth0.href : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"href","hash":{},"data":data}) : helper)))
    + "</a></dd>\r\n";
},"49":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.value : depth0),{"name":"if","hash":{},"fn":container.program(50, data, 0),"inverse":container.program(52, data, 0),"data":data})) != null ? stack1 : "");
},"50":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "              <dd "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0["class"] : depth0),{"name":"if","hash":{},"fn":container.program(37, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\r\n                "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.href : depth0),{"name":"if","hash":{},"fn":container.program(42, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                  "
    + container.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\r\n                "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.href : depth0),{"name":"if","hash":{},"fn":container.program(44, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n              </dd>\r\n";
},"52":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.href : depth0),{"name":"if","hash":{},"fn":container.program(53, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"53":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <dd "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0["class"] : depth0),{"name":"if","hash":{},"fn":container.program(37, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\r\n                  <a href=\""
    + alias4(((helper = (helper = helpers.href || (depth0 != null ? depth0.href : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"href","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.href || (depth0 != null ? depth0.href : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"href","hash":{},"data":data}) : helper)))
    + "</a>\r\n                </dd>\r\n";
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
    + "    <h2>Geonovum "
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
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.isOfficial : depth0),{"name":"unless","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <dt>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.multipleEditors : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.program(24, data, 0),"data":data})) != null ? stack1 : "")
    + "</dt>"
    + alias4((helpers.showPeople || (depth0 && depth0.showPeople) || alias2).call(alias1,"Editor",(depth0 != null ? depth0.editors : depth0),{"name":"showPeople","hash":{},"data":data}))
    + "\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.authors : depth0),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.isOfficial : depth0),{"name":"unless","hash":{},"fn":container.program(31, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.otherLinks : depth0),{"name":"if","hash":{},"fn":container.program(34, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </dl>\r\n  <dt>Rechtenbeleid:</dt>  \r\n  <p class='copyright'>\r\n    <abbr title='Creative Commons Naamsvermelding 3.0 Licentie'>\r\n      <a href='https://creativecommons.org/licenses/by-nd/3.0/nl/'>\r\n        <img src='/media/logos/CC-Licentie.png' alt='Naamsvermelding-GeenAfgeleideWerken 3.0 Nederland' width='588px' height='49px'>\r\n      </a>\r\n    </abbr>\r\n  </p>\r\n  <hr title=\"Separator for header\">\r\n</div>\r\n";
},"useData":true});
templates['sotd.html'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return ((stack1 = (helpers["case"] || (depth0 && depth0["case"]) || alias2).call(alias1,"GEO-DEF",{"name":"case","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers["case"] || (depth0 && depth0["case"]) || alias2).call(alias1,"GEO-ED",{"name":"case","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers["case"] || (depth0 && depth0["case"]) || alias2).call(alias1,"GEO-WD",{"name":"case","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers["case"] || (depth0 && depth0["case"]) || alias2).call(alias1,"GEO-FD",{"name":"case","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "            <p>Geonovum definitieve standaard.</p>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "            <p>Dit is een werkversie die op elk moment kan worden gewijzigd, verwijderd of vervangen \r\n            door andere documenten. Het is geen door de werkgroep goedgekeurde consultatieversie.</p>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "            <p>Dit is een door de werkgroep goedgekeurde consultatieversie. Commentaar over dit \r\n            document kan gestuurd worden naar <a href=\"mailto:geo-standaarden@geonovum.nl\">\r\n            geo-standaarden@geonovum.nl</a>.</p>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "            <p>Dit is een definitief concept van de nieuwe versie van de standaard. Wijzigingen naar \r\n            aanleiding van consultaties zijn doorgevoerd. De programmaraad van Geonovum beoordeelt \r\n            dit definitief concept. Keurt zij het goed, dan is er een nieuwe standaard.</p>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing;

  return "<section id='sotd' class='introductory'><h2>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.l10n : depth0)) != null ? stack1.sotd : stack1), depth0))
    + "</h2>\r\n    <p>\r\n      <em>"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.l10n : depth0)) != null ? stack1.status_at_publication : stack1), depth0)) != null ? stack1 : "")
    + "</em>\r\n    </p>\r\n"
    + ((stack1 = (helpers["switch"] || (depth0 && depth0["switch"]) || alias4).call(alias3,(depth0 != null ? depth0.specStatus : depth0),{"name":"switch","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    "
    + alias2(((helper = (helper = helpers.sotdCustomParagraph || (depth0 != null ? depth0.sotdCustomParagraph : depth0)) != null ? helper : alias4),(typeof helper === "function" ? helper.call(alias3,{"name":"sotdCustomParagraph","hash":{},"data":data}) : helper)))
    + "\r\n</section>\r\n";
},"useData":true});
templates['cgbg-headers.html'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "    "
    + container.escapeExpression((helpers.showLogos || (depth0 && depth0.showLogos) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.logos : depth0),{"name":"showLogos","hash":{},"data":data}))
    + "\n";
},"3":function(container,depth0,helpers,partials,data) {
    return " property='dc:title'";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "    <h2 "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.doRDFa : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "id='subtitle'>"
    + container.escapeExpression(((helper = (helper = helpers.subtitle || (depth0 != null ? depth0.subtitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"subtitle","hash":{},"data":data}) : helper)))
    + "</h2>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "property='bibo:subtitle' ";
},"8":function(container,depth0,helpers,partials,data) {
    return "property=\"dc:issued\"";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : {}, alias3=helpers.helperMissing, alias4="function";

  return "      <dt>"
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.l10n : depth0)) != null ? stack1.this_version : stack1), depth0))
    + "</dt>\n      <dd><a class='u-url' href='"
    + alias1(((helper = (helper = helpers.thisVersion || (depth0 != null ? depth0.thisVersion : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"thisVersion","hash":{},"data":data}) : helper)))
    + "'>"
    + alias1(((helper = (helper = helpers.thisVersion || (depth0 != null ? depth0.thisVersion : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"thisVersion","hash":{},"data":data}) : helper)))
    + "</a></dd>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : {}, alias3=helpers.helperMissing, alias4="function";

  return "      <dt>"
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.l10n : depth0)) != null ? stack1.latest_published_version : stack1), depth0))
    + "</dt>\n      <dd><a href='"
    + alias1(((helper = (helper = helpers.latestVersion || (depth0 != null ? depth0.latestVersion : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"latestVersion","hash":{},"data":data}) : helper)))
    + "'>"
    + alias1(((helper = (helper = helpers.latestVersion || (depth0 != null ? depth0.latestVersion : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"latestVersion","hash":{},"data":data}) : helper)))
    + "</a></dd>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : {}, alias3=helpers.helperMissing, alias4="function";

  return "      <dt>"
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.l10n : depth0)) != null ? stack1.latest_editors_draft : stack1), depth0))
    + "</dt>\n      <dd><a href='"
    + alias1(((helper = (helper = helpers.edDraftURI || (depth0 != null ? depth0.edDraftURI : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"edDraftURI","hash":{},"data":data}) : helper)))
    + "'>"
    + alias1(((helper = (helper = helpers.edDraftURI || (depth0 != null ? depth0.edDraftURI : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"edDraftURI","hash":{},"data":data}) : helper)))
    + "</a></dd>\n";
},"16":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <dt>Test suite:</dt>\n      <dd><a href='"
    + alias4(((helper = (helper = helpers.testSuiteURI || (depth0 != null ? depth0.testSuiteURI : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"testSuiteURI","hash":{},"data":data}) : helper)))
    + "'>"
    + alias4(((helper = (helper = helpers.testSuiteURI || (depth0 != null ? depth0.testSuiteURI : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"testSuiteURI","hash":{},"data":data}) : helper)))
    + "</a></dd>\n";
},"18":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <dt>Implementation report:</dt>\n      <dd><a href='"
    + alias4(((helper = (helper = helpers.implementationReportURI || (depth0 != null ? depth0.implementationReportURI : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"implementationReportURI","hash":{},"data":data}) : helper)))
    + "'>"
    + alias4(((helper = (helper = helpers.implementationReportURI || (depth0 != null ? depth0.implementationReportURI : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"implementationReportURI","hash":{},"data":data}) : helper)))
    + "</a></dd>\n";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "      <dt>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.l10n : depth0)) != null ? stack1.bug_tracker : stack1), depth0))
    + "</dt>\n      <dd>"
    + ((stack1 = ((helper = (helper = helpers.bugTrackerHTML || (depth0 != null ? depth0.bugTrackerHTML : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"bugTrackerHTML","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</dd>\n";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <dt>Previous version:</dt>\n      <dd><a "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.doRDFa : depth0),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " href='"
    + alias4(((helper = (helper = helpers.prevVersion || (depth0 != null ? depth0.prevVersion : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"prevVersion","hash":{},"data":data}) : helper)))
    + "'>"
    + alias4(((helper = (helper = helpers.prevVersion || (depth0 != null ? depth0.prevVersion : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"prevVersion","hash":{},"data":data}) : helper)))
    + "</a></dd>\n";
},"23":function(container,depth0,helpers,partials,data) {
    return "rel=\"dcterms:replaces\"";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.prevED : depth0),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"26":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <dt>Previous editor's draft:</dt>\n        <dd><a href='"
    + alias4(((helper = (helper = helpers.prevED || (depth0 != null ? depth0.prevED : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"prevED","hash":{},"data":data}) : helper)))
    + "'>"
    + alias4(((helper = (helper = helpers.prevED || (depth0 != null ? depth0.prevED : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"prevED","hash":{},"data":data}) : helper)))
    + "</a></dd>\n";
},"28":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.l10n : depth0)) != null ? stack1.editors : stack1), depth0));
},"30":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.l10n : depth0)) != null ? stack1.editor : stack1), depth0));
},"32":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "      <dt>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.multipleAuthors : depth0),{"name":"if","hash":{},"fn":container.program(33, data, 0),"inverse":container.program(35, data, 0),"data":data})) != null ? stack1 : "")
    + "</dt>\n      "
    + container.escapeExpression((helpers.showPeople || (depth0 && depth0.showPeople) || helpers.helperMissing).call(alias1,"Author",(depth0 != null ? depth0.authors : depth0),{"name":"showPeople","hash":{},"data":data}))
    + "\n";
},"33":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.l10n : depth0)) != null ? stack1.authors : stack1), depth0));
},"35":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.l10n : depth0)) != null ? stack1.author : stack1), depth0));
},"37":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.otherLinks : depth0),{"name":"each","hash":{},"fn":container.program(38, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"38":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.key : depth0),{"name":"if","hash":{},"fn":container.program(39, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"39":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "          <dt "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0["class"] : depth0),{"name":"if","hash":{},"fn":container.program(40, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + ":</dt>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.data : depth0),{"name":"if","hash":{},"fn":container.program(42, data, 0),"inverse":container.program(52, data, 0),"data":data})) != null ? stack1 : "");
},"40":function(container,depth0,helpers,partials,data) {
    var helper;

  return "class=\""
    + container.escapeExpression(((helper = (helper = helpers["class"] || (depth0 != null ? depth0["class"] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"class","hash":{},"data":data}) : helper)))
    + "\"";
},"42":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":container.program(43, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"43":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.value : depth0),{"name":"if","hash":{},"fn":container.program(44, data, 0),"inverse":container.program(49, data, 0),"data":data})) != null ? stack1 : "");
},"44":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "                  <dd "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0["class"] : depth0),{"name":"if","hash":{},"fn":container.program(40, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n                    "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.href : depth0),{"name":"if","hash":{},"fn":container.program(45, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n                      "
    + container.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\n                    "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.href : depth0),{"name":"if","hash":{},"fn":container.program(47, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n                  </dd>\n";
},"45":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<a href=\""
    + container.escapeExpression(((helper = (helper = helpers.href || (depth0 != null ? depth0.href : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"href","hash":{},"data":data}) : helper)))
    + "\">";
},"47":function(container,depth0,helpers,partials,data) {
    return "</a>";
},"49":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.href : depth0),{"name":"if","hash":{},"fn":container.program(50, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"50":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <dd><a href=\""
    + alias4(((helper = (helper = helpers.href || (depth0 != null ? depth0.href : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"href","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.href || (depth0 != null ? depth0.href : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"href","hash":{},"data":data}) : helper)))
    + "</a></dd>\n";
},"52":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.value : depth0),{"name":"if","hash":{},"fn":container.program(53, data, 0),"inverse":container.program(55, data, 0),"data":data})) != null ? stack1 : "");
},"53":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "              <dd "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0["class"] : depth0),{"name":"if","hash":{},"fn":container.program(40, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n                "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.href : depth0),{"name":"if","hash":{},"fn":container.program(45, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n                  "
    + container.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\n                "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.href : depth0),{"name":"if","hash":{},"fn":container.program(47, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n              </dd>\n";
},"55":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.href : depth0),{"name":"if","hash":{},"fn":container.program(56, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"56":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <dd "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0["class"] : depth0),{"name":"if","hash":{},"fn":container.program(40, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n                  <a href=\""
    + alias4(((helper = (helper = helpers.href || (depth0 != null ? depth0.href : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"href","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.href || (depth0 != null ? depth0.href : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"href","hash":{},"data":data}) : helper)))
    + "</a>\n                </dd>\n";
},"58":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "    <p>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.multipleAlternates : depth0),{"name":"if","hash":{},"fn":container.program(59, data, 0),"inverse":container.program(61, data, 0),"data":data})) != null ? stack1 : "")
    + "      "
    + ((stack1 = ((helper = (helper = helpers.alternatesHTML || (depth0 != null ? depth0.alternatesHTML : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"alternatesHTML","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n    </p>\n";
},"59":function(container,depth0,helpers,partials,data) {
    return "        This document is also available in these non-normative formats: \n";
},"61":function(container,depth0,helpers,partials,data) {
    return "        This document is also available in this non-normative format: \n";
},"63":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.copyrightStart || (depth0 != null ? depth0.copyrightStart : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"copyrightStart","hash":{},"data":data}) : helper)))
    + "-";
},"65":function(container,depth0,helpers,partials,data) {
    return "      <a href=\"https://www.w3.org/community/about/agreements/fsa/\">W3C Community Final Specification Agreement (FSA)</a>. \n      A human-readable <a href=\"https://www.w3.org/community/about/agreements/fsa-deed/\">summary</a> is available.\n";
},"67":function(container,depth0,helpers,partials,data) {
    return "      <a href=\"https://www.w3.org/community/about/agreements/cla/\">W3C Community Contributor License Agreement (CLA)</a>.\n      A human-readable <a href=\"https://www.w3.org/community/about/agreements/cla-deed/\">summary</a> is available.\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class='head'>\n  <p>\n    <a class='logo' href='https://www.w3.org/'><img width='72' height='48' src='https://www.w3.org/StyleSheets/TR/2016/logos/W3C' alt='W3C'></a>\n  </p>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.logos : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  <h1 class='title p-name' id='title'"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.doRDFa : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subtitle : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  <h2>"
    + alias4(((helper = (helper = helpers.longStatus || (depth0 != null ? depth0.longStatus : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"longStatus","hash":{},"data":data}) : helper)))
    + " <time "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.doRDFa : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "class='dt-published' datetime='"
    + alias4(((helper = (helper = helpers.dashDate || (depth0 != null ? depth0.dashDate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dashDate","hash":{},"data":data}) : helper)))
    + "'>"
    + alias4(((helper = (helper = helpers.publishHumanDate || (depth0 != null ? depth0.publishHumanDate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"publishHumanDate","hash":{},"data":data}) : helper)))
    + "</time></h2>\n  <dl>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.thisVersion : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.latestVersion : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.edDraftURI : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.testSuiteURI : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.implementationReportURI : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.bugTrackerHTML : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.prevVersion : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.isCGFinal : depth0),{"name":"unless","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <dt>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.multipleEditors : depth0),{"name":"if","hash":{},"fn":container.program(28, data, 0),"inverse":container.program(30, data, 0),"data":data})) != null ? stack1 : "")
    + "</dt>\n    "
    + alias4((helpers.showPeople || (depth0 && depth0.showPeople) || alias2).call(alias1,"Editor",(depth0 != null ? depth0.editors : depth0),{"name":"showPeople","hash":{},"data":data}))
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.authors : depth0),{"name":"if","hash":{},"fn":container.program(32, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.otherLinks : depth0),{"name":"if","hash":{},"fn":container.program(37, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </dl>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.alternateFormats : depth0),{"name":"if","hash":{},"fn":container.program(58, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  <p class='copyright'>\n    <a href='https://www.w3.org/Consortium/Legal/ipr-notice#Copyright'>Copyright</a> &copy;\n    "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.copyrightStart : depth0),{"name":"if","hash":{},"fn":container.program(63, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + alias4(((helper = (helper = helpers.publishYear || (depth0 != null ? depth0.publishYear : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"publishYear","hash":{},"data":data}) : helper)))
    + "\n    the Contributors to the "
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + " Specification, published by the\n    <a href='"
    + alias4(((helper = (helper = helpers.wgURI || (depth0 != null ? depth0.wgURI : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"wgURI","hash":{},"data":data}) : helper)))
    + "'>"
    + alias4(((helper = (helper = helpers.wg || (depth0 != null ? depth0.wg : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"wg","hash":{},"data":data}) : helper)))
    + "</a> under the\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isCGFinal : depth0),{"name":"if","hash":{},"fn":container.program(65, data, 0),"inverse":container.program(67, data, 0),"data":data})) != null ? stack1 : "")
    + "  </p>\n  <hr title=\"Separator for header\">\n</div>\n";
},"useData":true});
templates['cgbg-sotd.html'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "      Please note that under the \n      <a href=\"https://www.w3.org/community/about/agreements/final/\">W3C Community Final Specification Agreement (FSA)</a> \n      other conditions apply.\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "      Please note that under the \n      <a href=\"https://www.w3.org/community/about/agreements/cla/\">W3C Community Contributor License Agreement (CLA)</a>\n      there is a limited opt-out and other conditions apply.\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "  "
    + ((stack1 = ((helper = (helper = helpers.sotdCustomParagraph || (depth0 != null ? depth0.sotdCustomParagraph : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"sotdCustomParagraph","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <p>If you wish to make comments regarding this document, please send them to \n      <a href='mailto:"
    + alias4(((helper = (helper = helpers.wgPublicList || (depth0 != null ? depth0.wgPublicList : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"wgPublicList","hash":{},"data":data}) : helper)))
    + "@w3.org"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subjectPrefix : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "'>"
    + alias4(((helper = (helper = helpers.wgPublicList || (depth0 != null ? depth0.wgPublicList : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"wgPublicList","hash":{},"data":data}) : helper)))
    + "@w3.org</a> \n      (<a href='mailto:"
    + alias4(((helper = (helper = helpers.wgPublicList || (depth0 != null ? depth0.wgPublicList : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"wgPublicList","hash":{},"data":data}) : helper)))
    + "-request@w3.org?subject=subscribe'>subscribe</a>,\n      <a\n        href='https://lists.w3.org/Archives/Public/"
    + alias4(((helper = (helper = helpers.wgPublicList || (depth0 != null ? depth0.wgPublicList : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"wgPublicList","hash":{},"data":data}) : helper)))
    + "/'>archives</a>)"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subjectPrefix : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ".</p>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper;

  return "?subject="
    + container.escapeExpression(((helper = (helper = helpers.subjectPrefixEnc || (depth0 != null ? depth0.subjectPrefixEnc : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"subjectPrefixEnc","hash":{},"data":data}) : helper)));
},"10":function(container,depth0,helpers,partials,data) {
    var helper;

  return "\n      with <code>"
    + container.escapeExpression(((helper = (helper = helpers.subjectPrefix || (depth0 != null ? depth0.subjectPrefix : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"subjectPrefix","hash":{},"data":data}) : helper)))
    + "</code> at the start of your\n      email's subject";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : {}, alias3=helpers.helperMissing, alias4="function";

  return "<section id='sotd' class='introductory'><h2>"
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.l10n : depth0)) != null ? stack1.sotd : stack1), depth0))
    + "</h2>\n  <p>\n    This specification was published by the <a href='"
    + alias1(((helper = (helper = helpers.wgURI || (depth0 != null ? depth0.wgURI : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"wgURI","hash":{},"data":data}) : helper)))
    + "'>"
    + alias1(((helper = (helper = helpers.wg || (depth0 != null ? depth0.wg : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"wg","hash":{},"data":data}) : helper)))
    + "</a>.\n    It is not a W3C Standard nor is it on the W3C Standards Track.\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.isCGFinal : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "    Learn more about \n    <a href=\"https://www.w3.org/community/\">W3C Community and Business Groups</a>.\n  </p>\n"
    + ((stack1 = helpers.unless.call(alias2,(depth0 != null ? depth0.sotdAfterWGinfo : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.wgPublicList : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.sotdAfterWGinfo : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</section>\n";
},"useData":true});
templates['conformance.html'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2>Conformance</h2>\n<p>\n  As well as sections marked as non-normative, all authoring guidelines, diagrams, examples,\n  and notes in this specification are non-normative. Everything else in this specification is\n  normative.\n</p>\n<p id='respecRFC2119'>\n  to be interpreted as described in [[!RFC2119]].\n</p>\n";
},"useData":true});
templates['headers.html'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "        "
    + container.escapeExpression((helpers.showLogos || (depth0 && depth0.showLogos) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.logos : depth0),{"name":"showLogos","hash":{},"data":data}))
    + "\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.prependW3C : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "            <a class='logo' href='https://www.w3.org/'><img width='72' height='48' src='https://www.w3.org/StyleSheets/TR/2016/logos/W3C' alt='W3C'></a>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isMemberSubmission : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isTeamSubmission : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    return "            <a href=\"https://www.w3.org/Submission/\"> <img height=\"48\" width=\"211\" alt=\"W3C Member Submission\" src=\"https://www.w3.org/Icons/member_subm\" /></a>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "            <a href=\"https://www.w3.org/TeamSubmission/\"><img height=\"48\" width=\"211\" alt=\"W3C Team Submission\" src=\"https://www.w3.org/Icons/team_subm\"/></a>\n";
},"9":function(container,depth0,helpers,partials,data) {
    return " property='dcterms:title'";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "    <h2 "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.doRDFa : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "id='subtitle'>"
    + container.escapeExpression(((helper = (helper = helpers.subtitle || (depth0 != null ? depth0.subtitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"subtitle","hash":{},"data":data}) : helper)))
    + "</h2>\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "property='bibo:subtitle' ";
},"14":function(container,depth0,helpers,partials,data) {
    return "W3C ";
},"16":function(container,depth0,helpers,partials,data) {
    return "property=\"dcterms:issued\"";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing, alias5="function";

  return "      <dt>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.l10n : depth0)) != null ? stack1.this_version : stack1), depth0))
    + "</dt>\n      <dd><a class='u-url' href='"
    + alias2(((helper = (helper = helpers.thisVersion || (depth0 != null ? depth0.thisVersion : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"thisVersion","hash":{},"data":data}) : helper)))
    + "'>"
    + alias2(((helper = (helper = helpers.thisVersion || (depth0 != null ? depth0.thisVersion : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"thisVersion","hash":{},"data":data}) : helper)))
    + "</a></dd>\n      <dt>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.l10n : depth0)) != null ? stack1.latest_published_version : stack1), depth0))
    + "</dt>\n      <dd>"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.latestVersion : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.program(21, data, 0),"data":data})) != null ? stack1 : "")
    + "</dd>\n";
},"19":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a href='"
    + alias4(((helper = (helper = helpers.latestVersion || (depth0 != null ? depth0.latestVersion : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"latestVersion","hash":{},"data":data}) : helper)))
    + "'>"
    + alias4(((helper = (helper = helpers.latestVersion || (depth0 != null ? depth0.latestVersion : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"latestVersion","hash":{},"data":data}) : helper)))
    + "</a>";
},"21":function(container,depth0,helpers,partials,data) {
    return "none";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : {}, alias3=helpers.helperMissing, alias4="function";

  return "      <dt>"
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.l10n : depth0)) != null ? stack1.latest_editors_draft : stack1), depth0))
    + "</dt>\n      <dd><a href='"
    + alias1(((helper = (helper = helpers.edDraftURI || (depth0 != null ? depth0.edDraftURI : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"edDraftURI","hash":{},"data":data}) : helper)))
    + "'>"
    + alias1(((helper = (helper = helpers.edDraftURI || (depth0 != null ? depth0.edDraftURI : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"edDraftURI","hash":{},"data":data}) : helper)))
    + "</a></dd>\n";
},"25":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <dt>Test suite:</dt>\n      <dd><a href='"
    + alias4(((helper = (helper = helpers.testSuiteURI || (depth0 != null ? depth0.testSuiteURI : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"testSuiteURI","hash":{},"data":data}) : helper)))
    + "'>"
    + alias4(((helper = (helper = helpers.testSuiteURI || (depth0 != null ? depth0.testSuiteURI : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"testSuiteURI","hash":{},"data":data}) : helper)))
    + "</a></dd>\n";
},"27":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <dt>Implementation report:</dt>\n      <dd><a href='"
    + alias4(((helper = (helper = helpers.implementationReportURI || (depth0 != null ? depth0.implementationReportURI : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"implementationReportURI","hash":{},"data":data}) : helper)))
    + "'>"
    + alias4(((helper = (helper = helpers.implementationReportURI || (depth0 != null ? depth0.implementationReportURI : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"implementationReportURI","hash":{},"data":data}) : helper)))
    + "</a></dd>\n";
},"29":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "      <dt>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.l10n : depth0)) != null ? stack1.bug_tracker : stack1), depth0))
    + "</dt>\n      <dd>"
    + ((stack1 = ((helper = (helper = helpers.bugTrackerHTML || (depth0 != null ? depth0.bugTrackerHTML : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"bugTrackerHTML","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</dd>\n";
},"31":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.prevED : depth0),{"name":"if","hash":{},"fn":container.program(32, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"32":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <dt>Previous editor's draft:</dt>\n        <dd><a href='"
    + alias4(((helper = (helper = helpers.prevED || (depth0 != null ? depth0.prevED : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"prevED","hash":{},"data":data}) : helper)))
    + "'>"
    + alias4(((helper = (helper = helpers.prevED || (depth0 != null ? depth0.prevED : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"prevED","hash":{},"data":data}) : helper)))
    + "</a></dd>\n";
},"34":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <dt>Previous version:</dt>\n      <dd><a "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.doRDFa : depth0),{"name":"if","hash":{},"fn":container.program(35, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " href='"
    + alias4(((helper = (helper = helpers.prevVersion || (depth0 != null ? depth0.prevVersion : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"prevVersion","hash":{},"data":data}) : helper)))
    + "'>"
    + alias4(((helper = (helper = helpers.prevVersion || (depth0 != null ? depth0.prevVersion : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"prevVersion","hash":{},"data":data}) : helper)))
    + "</a></dd>\n";
},"35":function(container,depth0,helpers,partials,data) {
    return "rel=\"dcterms:replaces\"";
},"37":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.isRec : depth0),{"name":"if","hash":{},"fn":container.program(38, data, 0),"inverse":container.program(40, data, 0),"data":data})) != null ? stack1 : "");
},"38":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <dt>Previous Recommendation:</dt>\n          <dd><a "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.doRDFa : depth0),{"name":"if","hash":{},"fn":container.program(35, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " href='"
    + alias4(((helper = (helper = helpers.prevRecURI || (depth0 != null ? depth0.prevRecURI : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"prevRecURI","hash":{},"data":data}) : helper)))
    + "'>"
    + alias4(((helper = (helper = helpers.prevRecURI || (depth0 != null ? depth0.prevRecURI : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"prevRecURI","hash":{},"data":data}) : helper)))
    + "</a></dd>\n";
},"40":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <dt>Latest Recommendation:</dt>\n          <dd><a href='"
    + alias4(((helper = (helper = helpers.prevRecURI || (depth0 != null ? depth0.prevRecURI : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"prevRecURI","hash":{},"data":data}) : helper)))
    + "'>"
    + alias4(((helper = (helper = helpers.prevRecURI || (depth0 != null ? depth0.prevRecURI : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"prevRecURI","hash":{},"data":data}) : helper)))
    + "</a></dd>\n";
},"42":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.l10n : depth0)) != null ? stack1.editors : stack1), depth0));
},"44":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.l10n : depth0)) != null ? stack1.editor : stack1), depth0));
},"46":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "      <dt>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.multipleAuthors : depth0),{"name":"if","hash":{},"fn":container.program(47, data, 0),"inverse":container.program(49, data, 0),"data":data})) != null ? stack1 : "")
    + "</dt>\n      "
    + container.escapeExpression((helpers.showPeople || (depth0 && depth0.showPeople) || helpers.helperMissing).call(alias1,"Author",(depth0 != null ? depth0.authors : depth0),{"name":"showPeople","hash":{},"data":data}))
    + "\n";
},"47":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.l10n : depth0)) != null ? stack1.authors : stack1), depth0));
},"49":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.l10n : depth0)) != null ? stack1.author : stack1), depth0));
},"51":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.otherLinks : depth0),{"name":"each","hash":{},"fn":container.program(52, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"52":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.key : depth0),{"name":"if","hash":{},"fn":container.program(53, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"53":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "          <dt "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0["class"] : depth0),{"name":"if","hash":{},"fn":container.program(54, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + ":</dt>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.data : depth0),{"name":"if","hash":{},"fn":container.program(56, data, 0),"inverse":container.program(66, data, 0),"data":data})) != null ? stack1 : "");
},"54":function(container,depth0,helpers,partials,data) {
    var helper;

  return "class=\""
    + container.escapeExpression(((helper = (helper = helpers["class"] || (depth0 != null ? depth0["class"] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"class","hash":{},"data":data}) : helper)))
    + "\"";
},"56":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":container.program(57, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"57":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.value : depth0),{"name":"if","hash":{},"fn":container.program(58, data, 0),"inverse":container.program(63, data, 0),"data":data})) != null ? stack1 : "");
},"58":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "                  <dd "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0["class"] : depth0),{"name":"if","hash":{},"fn":container.program(54, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n                    "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.href : depth0),{"name":"if","hash":{},"fn":container.program(59, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n                      "
    + container.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\n                    "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.href : depth0),{"name":"if","hash":{},"fn":container.program(61, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n                  </dd>\n";
},"59":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<a href=\""
    + container.escapeExpression(((helper = (helper = helpers.href || (depth0 != null ? depth0.href : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"href","hash":{},"data":data}) : helper)))
    + "\">";
},"61":function(container,depth0,helpers,partials,data) {
    return "</a>";
},"63":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.href : depth0),{"name":"if","hash":{},"fn":container.program(64, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"64":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <dd><a href=\""
    + alias4(((helper = (helper = helpers.href || (depth0 != null ? depth0.href : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"href","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.href || (depth0 != null ? depth0.href : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"href","hash":{},"data":data}) : helper)))
    + "</a></dd>\n";
},"66":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.value : depth0),{"name":"if","hash":{},"fn":container.program(67, data, 0),"inverse":container.program(69, data, 0),"data":data})) != null ? stack1 : "");
},"67":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "              <dd "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0["class"] : depth0),{"name":"if","hash":{},"fn":container.program(54, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n                "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.href : depth0),{"name":"if","hash":{},"fn":container.program(59, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n                  "
    + container.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\n                "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.href : depth0),{"name":"if","hash":{},"fn":container.program(61, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n              </dd>\n";
},"69":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.href : depth0),{"name":"if","hash":{},"fn":container.program(70, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"70":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <dd "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0["class"] : depth0),{"name":"if","hash":{},"fn":container.program(54, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n                  <a href=\""
    + alias4(((helper = (helper = helpers.href || (depth0 != null ? depth0.href : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"href","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.href || (depth0 != null ? depth0.href : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"href","hash":{},"data":data}) : helper)))
    + "</a>\n                </dd>\n";
},"72":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <p>\n      Please check the <a href=\""
    + container.escapeExpression(((helper = (helper = helpers.errata || (depth0 != null ? depth0.errata : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"errata","hash":{},"data":data}) : helper)))
    + "\"><strong>errata</strong></a> for any errors or issues\n      reported since publication.\n    </p>\n";
},"74":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "    <p>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.multipleAlternates : depth0),{"name":"if","hash":{},"fn":container.program(75, data, 0),"inverse":container.program(77, data, 0),"data":data})) != null ? stack1 : "")
    + "      "
    + ((stack1 = ((helper = (helper = helpers.alternatesHTML || (depth0 != null ? depth0.alternatesHTML : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"alternatesHTML","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n    </p>\n";
},"75":function(container,depth0,helpers,partials,data) {
    return "        This document is also available in these non-normative formats:\n";
},"77":function(container,depth0,helpers,partials,data) {
    return "        This document is also available in this non-normative format:\n";
},"79":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.additionalCopyrightHolders : depth0),{"name":"if","hash":{},"fn":container.program(80, data, 0),"inverse":container.program(82, data, 0),"data":data})) != null ? stack1 : "");
},"80":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "      <p class='copyright'>"
    + ((stack1 = ((helper = (helper = helpers.additionalCopyrightHolders || (depth0 != null ? depth0.additionalCopyrightHolders : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"additionalCopyrightHolders","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n";
},"82":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.overrideCopyright : depth0),{"name":"if","hash":{},"fn":container.program(83, data, 0),"inverse":container.program(85, data, 0),"data":data})) != null ? stack1 : "");
},"83":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "        "
    + ((stack1 = ((helper = (helper = helpers.overrideCopyright || (depth0 != null ? depth0.overrideCopyright : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"overrideCopyright","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n";
},"85":function(container,depth0,helpers,partials,data) {
    return "        <p class='copyright'>\n          This document is licensed under a\n          <a class='subfoot' href='https://creativecommons.org/licenses/by/3.0/' rel='license'>Creative Commons\n          Attribution 3.0 License</a>.\n        </p>\n";
},"87":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.overrideCopyright : depth0),{"name":"if","hash":{},"fn":container.program(88, data, 0),"inverse":container.program(90, data, 0),"data":data})) != null ? stack1 : "");
},"88":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "      "
    + ((stack1 = ((helper = (helper = helpers.overrideCopyright || (depth0 != null ? depth0.overrideCopyright : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"overrideCopyright","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n";
},"90":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "      <p class='copyright'>\n        <a href='https://www.w3.org/Consortium/Legal/ipr-notice#Copyright'>Copyright</a> &copy;\n        "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.copyrightStart : depth0),{"name":"if","hash":{},"fn":container.program(91, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + container.escapeExpression(((helper = (helper = helpers.publishYear || (depth0 != null ? depth0.publishYear : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"publishYear","hash":{},"data":data}) : helper)))
    + "\n        "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.additionalCopyrightHolders : depth0),{"name":"if","hash":{},"fn":container.program(93, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n        <a href='https://www.w3.org/'><abbr title='World Wide Web Consortium'>W3C</abbr></a><sup>&reg;</sup>\n        (<a href='https://www.csail.mit.edu/'><abbr title='Massachusetts Institute of Technology'>MIT</abbr></a>,\n        <a href='https://www.ercim.eu/'><abbr title='European Research Consortium for Informatics and Mathematics'>ERCIM</abbr></a>,\n        <a href='https://www.keio.ac.jp/'>Keio</a>, <a href=\"http://ev.buaa.edu.cn/\">Beihang</a>).\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isCCBY : depth0),{"name":"if","hash":{},"fn":container.program(95, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        W3C <a href='https://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer'>liability</a>,\n        <a href='https://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks'>trademark</a> and\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isCCBY : depth0),{"name":"if","hash":{},"fn":container.program(97, data, 0),"inverse":container.program(99, data, 0),"data":data})) != null ? stack1 : "")
    + "        rules apply.\n      </p>\n";
},"91":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.copyrightStart || (depth0 != null ? depth0.copyrightStart : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"copyrightStart","hash":{},"data":data}) : helper)))
    + "-";
},"93":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return " "
    + ((stack1 = ((helper = (helper = helpers.additionalCopyrightHolders || (depth0 != null ? depth0.additionalCopyrightHolders : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"additionalCopyrightHolders","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " &amp;";
},"95":function(container,depth0,helpers,partials,data) {
    return "          Some Rights Reserved: this document is dual-licensed,\n          <a rel=\"license\" href=\"https://creativecommons.org/licenses/by/3.0/\">CC-BY</a> and\n          <a rel=\"license\" href=\"https://www.w3.org/Consortium/Legal/copyright-documents\">W3C Document License</a>.\n";
},"97":function(container,depth0,helpers,partials,data) {
    return "          <a rel=\"license\" href='https://www.w3.org/Consortium/Legal/2013/copyright-documents-dual.html'>document use</a>\n";
},"99":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.isW3CSoftAndDocLicense : depth0),{"name":"if","hash":{},"fn":container.program(100, data, 0),"inverse":container.program(102, data, 0),"data":data})) != null ? stack1 : "");
},"100":function(container,depth0,helpers,partials,data) {
    return "            <a rel=\"license\" href='https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document'>permissive document license</a>\n";
},"102":function(container,depth0,helpers,partials,data) {
    return "            <a rel=\"license\" href='https://www.w3.org/Consortium/Legal/copyright-documents'>document use</a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class='head'>\n  <p>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.logos : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "  </p>\n  <h1 class='title p-name' id='title'"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.doRDFa : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subtitle : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  <h2>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.prependW3C : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + alias4(((helper = (helper = helpers.textStatus || (depth0 != null ? depth0.textStatus : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"textStatus","hash":{},"data":data}) : helper)))
    + " <time "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.doRDFa : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "class='dt-published' datetime='"
    + alias4(((helper = (helper = helpers.dashDate || (depth0 != null ? depth0.dashDate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dashDate","hash":{},"data":data}) : helper)))
    + "'>"
    + alias4(((helper = (helper = helpers.publishHumanDate || (depth0 != null ? depth0.publishHumanDate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"publishHumanDate","hash":{},"data":data}) : helper)))
    + "</time></h2>\n  <dl>\n"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.isNoTrack : depth0),{"name":"unless","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.edDraftURI : depth0),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.testSuiteURI : depth0),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.implementationReportURI : depth0),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.bugTrackerHTML : depth0),{"name":"if","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isED : depth0),{"name":"if","hash":{},"fn":container.program(31, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.showPreviousVersion : depth0),{"name":"if","hash":{},"fn":container.program(34, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.prevRecURI : depth0),{"name":"if","hash":{},"fn":container.program(37, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <dt>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.multipleEditors : depth0),{"name":"if","hash":{},"fn":container.program(42, data, 0),"inverse":container.program(44, data, 0),"data":data})) != null ? stack1 : "")
    + "</dt>\n    "
    + alias4((helpers.showPeople || (depth0 && depth0.showPeople) || alias2).call(alias1,"Editor",(depth0 != null ? depth0.editors : depth0),{"name":"showPeople","hash":{},"data":data}))
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.authors : depth0),{"name":"if","hash":{},"fn":container.program(46, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.otherLinks : depth0),{"name":"if","hash":{},"fn":container.program(51, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </dl>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.errata : depth0),{"name":"if","hash":{},"fn":container.program(72, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.alternateFormats : depth0),{"name":"if","hash":{},"fn":container.program(74, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isUnofficial : depth0),{"name":"if","hash":{},"fn":container.program(79, data, 0),"inverse":container.program(87, data, 0),"data":data})) != null ? stack1 : "")
    + "  <hr title=\"Separator for header\">\n</div>\n";
},"useData":true});
templates['sotd.html'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "    <p>\n      This document is merely a public working draft of a potential specification. It has\n      no official standing of any kind and does not represent the support or consensus of any\n      standards organisation.\n    </p>\n    "
    + ((stack1 = ((helper = (helper = helpers.sotdCustomParagraph || (depth0 != null ? depth0.sotdCustomParagraph : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"sotdCustomParagraph","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.isTagFinding : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "      "
    + ((stack1 = ((helper = (helper = helpers.sotdCustomParagraph || (depth0 != null ? depth0.sotdCustomParagraph : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"sotdCustomParagraph","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.isNoTrack : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(10, data, 0),"data":data})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "        <p>\n          This document is merely a W3C-internal "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isMO : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " document. It\n          has no official standing of any kind and does not represent consensus of the W3C\n          Membership.\n        </p>\n        "
    + ((stack1 = ((helper = (helper = helpers.sotdCustomParagraph || (depth0 != null ? depth0.sotdCustomParagraph : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"sotdCustomParagraph","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "member-confidential";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <p>\n          <em>"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0.l10n : depth0)) != null ? stack1.status_at_publication : stack1), depth0)) != null ? stack1 : "")
    + "</em>\n        </p>\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.isSubmission : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(20, data, 0),"data":data})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "          "
    + ((stack1 = ((helper = (helper = helpers.sotdCustomParagraph || (depth0 != null ? depth0.sotdCustomParagraph : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"sotdCustomParagraph","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isMemberSubmission : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(14, data, 0),"data":data})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    return "            <p>By publishing this document, W3C acknowledges that the <a href=\"https://www.w3.org/Submission/@@@submissiondoc@@@\">Submitting Members</a> have made a formal Submission request to W3C for discussion. Publication of this document by W3C indicates no endorsement of its content by W3C, nor that W3C has, is, or will be allocating any resources to the issues addressed by it. This document is not the product of a chartered W3C group, but is published as potential input to the <a href=\"https://www.w3.org/Consortium/Process\">W3C Process</a>. A <a href=\"https://www.w3.org/Submission/@@@teamcomment@@@\">W3C Team Comment</a> has been published in conjunction with this Member Submission. Publication of acknowledged Member Submissions at the W3C site is one of the benefits of <a href=\"https://www.w3.org/Consortium/Prospectus/Joining\">W3C Membership</a>. Please consult the requirements associated with Member Submissions of <a href=\"https://www.w3.org/Consortium/Patent-Policy-20040205/#sec-submissions\">section 3.3 of the W3C Patent Policy</a>. Please consult the complete <a href=\"https://www.w3.org/Submission\">list of acknowledged W3C Member Submissions</a>.</p>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.isTeamSubmission : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "              <p>If you wish to make comments regarding this document, please send them to\n              <a href='mailto:"
    + alias4(((helper = (helper = helpers.wgPublicList || (depth0 != null ? depth0.wgPublicList : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"wgPublicList","hash":{},"data":data}) : helper)))
    + "@w3.org"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subjectPrefix : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "'>"
    + alias4(((helper = (helper = helpers.wgPublicList || (depth0 != null ? depth0.wgPublicList : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"wgPublicList","hash":{},"data":data}) : helper)))
    + "@w3.org</a>\n              (<a href='mailto:"
    + alias4(((helper = (helper = helpers.wgPublicList || (depth0 != null ? depth0.wgPublicList : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"wgPublicList","hash":{},"data":data}) : helper)))
    + "-request@w3.org?subject=subscribe'>subscribe</a>,\n              <a\n                href='https://lists.w3.org/Archives/Public/"
    + alias4(((helper = (helper = helpers.wgPublicList || (depth0 != null ? depth0.wgPublicList : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"wgPublicList","hash":{},"data":data}) : helper)))
    + "/'>archives</a>)"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subjectPrefix : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ".</p>\n              <p>Please consult the complete <a href=\"https://www.w3.org/TeamSubmission/\">list of Team Submissions</a>.</p>\n";
},"16":function(container,depth0,helpers,partials,data) {
    var helper;

  return "?subject="
    + container.escapeExpression(((helper = (helper = helpers.subjectPrefixEnc || (depth0 != null ? depth0.subjectPrefixEnc : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"subjectPrefixEnc","hash":{},"data":data}) : helper)));
},"18":function(container,depth0,helpers,partials,data) {
    var helper;

  return "\n                with <code>"
    + container.escapeExpression(((helper = (helper = helpers.subjectPrefix || (depth0 != null ? depth0.subjectPrefix : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"subjectPrefix","hash":{},"data":data}) : helper)))
    + "</code> at the start of your email's subject";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.sotdAfterWGinfo : depth0),{"name":"unless","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.overrideStatus : depth0),{"name":"unless","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.implementationReportURI : depth0),{"name":"if","hash":{},"fn":container.program(37, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.sotdAfterWGinfo : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.notRec : depth0),{"name":"if","hash":{},"fn":container.program(39, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isRec : depth0),{"name":"if","hash":{},"fn":container.program(41, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          <p>\n"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.isIGNote : depth0),{"name":"unless","hash":{},"fn":container.program(43, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.recNotExpected : depth0),{"name":"if","hash":{},"fn":container.program(50, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.isIGNote : depth0),{"name":"unless","hash":{},"fn":container.program(52, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isIGNote : depth0),{"name":"if","hash":{},"fn":container.program(61, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </p>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isNewProcess : depth0),{"name":"if","hash":{},"fn":container.program(63, data, 0),"inverse":container.program(65, data, 0),"data":data})) != null ? stack1 : "")
    + "          "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.addPatentNote : depth0),{"name":"if","hash":{},"fn":container.program(67, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "          "
    + ((stack1 = ((helper = (helper = helpers.sotdCustomParagraph || (depth0 != null ? depth0.sotdCustomParagraph : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"sotdCustomParagraph","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <p>\n            This document was published by "
    + ((stack1 = ((helper = (helper = helpers.wgHTML || (depth0 != null ? depth0.wgHTML : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"wgHTML","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " as "
    + alias4(((helper = (helper = helpers.anOrA || (depth0 != null ? depth0.anOrA : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"anOrA","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.longStatus || (depth0 != null ? depth0.longStatus : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"longStatus","hash":{},"data":data}) : helper)))
    + ".\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.notYetRec : depth0),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.isPR : depth0),{"name":"unless","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isCR : depth0),{"name":"if","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isPER : depth0),{"name":"if","hash":{},"fn":container.program(30, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isPR : depth0),{"name":"if","hash":{},"fn":container.program(32, data, 0),"inverse":container.program(34, data, 0),"data":data})) != null ? stack1 : "")
    + "          </p>\n";
},"24":function(container,depth0,helpers,partials,data) {
    return "              This document is intended to become a W3C Recommendation.\n";
},"26":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "              If you wish to make comments regarding this document, please send them to\n              <a href='mailto:"
    + alias4(((helper = (helper = helpers.wgPublicList || (depth0 != null ? depth0.wgPublicList : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"wgPublicList","hash":{},"data":data}) : helper)))
    + "@w3.org"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subjectPrefix : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "'>"
    + alias4(((helper = (helper = helpers.wgPublicList || (depth0 != null ? depth0.wgPublicList : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"wgPublicList","hash":{},"data":data}) : helper)))
    + "@w3.org</a>\n              (<a href='mailto:"
    + alias4(((helper = (helper = helpers.wgPublicList || (depth0 != null ? depth0.wgPublicList : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"wgPublicList","hash":{},"data":data}) : helper)))
    + "-request@w3.org?subject=subscribe'>subscribe</a>,\n              <a\n                href='https://lists.w3.org/Archives/Public/"
    + alias4(((helper = (helper = helpers.wgPublicList || (depth0 != null ? depth0.wgPublicList : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"wgPublicList","hash":{},"data":data}) : helper)))
    + "/'>archives</a>)"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subjectPrefix : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ".\n";
},"28":function(container,depth0,helpers,partials,data) {
    var helper;

  return "              W3C publishes a Candidate Recommendation to indicate that the document is believed to be\n              stable and to encourage implementation by the developer community. This Candidate\n              Recommendation is expected to advance to Proposed Recommendation no earlier than\n              "
    + container.escapeExpression(((helper = (helper = helpers.humanCREnd || (depth0 != null ? depth0.humanCREnd : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"humanCREnd","hash":{},"data":data}) : helper)))
    + ".\n";
},"30":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                W3C Advisory Committee Members are invited to\n                send formal review comments on this Proposed\n                Edited Recommendation to the W3C Team until\n                "
    + container.escapeExpression(((helper = (helper = helpers.humanPEREnd || (depth0 != null ? depth0.humanPEREnd : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"humanPEREnd","hash":{},"data":data}) : helper)))
    + ".\n                Members of the Advisory Committee will find the\n                appropriate review form for this document by\n                consulting their list of current\n                <a href='https://www.w3.org/2002/09/wbs/myQuestionnaires'>WBS questionnaires</a>.\n";
},"32":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                The W3C Membership and other interested parties are invited to review the document and\n                send comments to\n                <a rel='discussion' href='mailto:"
    + alias4(((helper = (helper = helpers.wgPublicList || (depth0 != null ? depth0.wgPublicList : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"wgPublicList","hash":{},"data":data}) : helper)))
    + "@w3.org'>"
    + alias4(((helper = (helper = helpers.wgPublicList || (depth0 != null ? depth0.wgPublicList : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"wgPublicList","hash":{},"data":data}) : helper)))
    + "@w3.org</a>\n                (<a href='mailto:"
    + alias4(((helper = (helper = helpers.wgPublicList || (depth0 != null ? depth0.wgPublicList : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"wgPublicList","hash":{},"data":data}) : helper)))
    + "-request@w3.org?subject=subscribe'>subscribe</a>,\n                <a href='https://lists.w3.org/Archives/Public/"
    + alias4(((helper = (helper = helpers.wgPublicList || (depth0 != null ? depth0.wgPublicList : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"wgPublicList","hash":{},"data":data}) : helper)))
    + "/'>archives</a>)\n                through "
    + alias4(((helper = (helper = helpers.humanPREnd || (depth0 != null ? depth0.humanPREnd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"humanPREnd","hash":{},"data":data}) : helper)))
    + ". Advisory Committee Representatives should consult their\n                <a href='https://www.w3.org/2002/09/wbs/myQuestionnaires'>WBS questionnaires</a>.\n                Note that substantive technical comments were expected during the Candidate Recommendation\n                review period that ended "
    + alias4(((helper = (helper = helpers.humanCREnd || (depth0 != null ? depth0.humanCREnd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"humanCREnd","hash":{},"data":data}) : helper)))
    + ".\n";
},"34":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.unless.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.isPER : depth0),{"name":"unless","hash":{},"fn":container.program(35, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"35":function(container,depth0,helpers,partials,data) {
    return "              All comments are welcome.\n";
},"37":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            <p>\n              Please see the Working Group's  <a href='"
    + container.escapeExpression(((helper = (helper = helpers.implementationReportURI || (depth0 != null ? depth0.implementationReportURI : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"implementationReportURI","hash":{},"data":data}) : helper)))
    + "'>implementation\n              report</a>.\n            </p>\n";
},"39":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <p>\n              Publication as "
    + alias4(((helper = (helper = helpers.anOrA || (depth0 != null ? depth0.anOrA : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"anOrA","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.textStatus || (depth0 != null ? depth0.textStatus : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"textStatus","hash":{},"data":data}) : helper)))
    + " does not imply endorsement by the W3C\n              Membership. This is a draft document and may be updated, replaced or obsoleted by other\n              documents at any time. It is inappropriate to cite this document as other than work in\n              progress.\n            </p>\n";
},"41":function(container,depth0,helpers,partials,data) {
    return "            <p>\n              This document has been reviewed by W3C Members, by software developers, and by other W3C\n              groups and interested parties, and is endorsed by the Director as a W3C Recommendation.\n              It is a stable document and may be used as reference material or cited from another\n              document. W3C's role in making the Recommendation is to draw attention to the\n              specification and to promote its widespread deployment. This enhances the functionality\n              and interoperability of the Web.\n            </p>\n";
},"43":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "              This document was produced by\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.multipleWGs : depth0),{"name":"if","hash":{},"fn":container.program(44, data, 0),"inverse":container.program(46, data, 0),"data":data})) != null ? stack1 : "")
    + " operating under the\n              <a"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.doRDFa : depth0),{"name":"if","hash":{},"fn":container.program(48, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n              href='https://www.w3.org/Consortium/Patent-Policy-20040205/'>5 February 2004 W3C Patent\n              Policy</a>.\n";
},"44":function(container,depth0,helpers,partials,data) {
    return "              groups\n";
},"46":function(container,depth0,helpers,partials,data) {
    return "              a group\n              ";
},"48":function(container,depth0,helpers,partials,data) {
    return " id=\"sotd_patent\" property='w3p:patentRules'";
},"50":function(container,depth0,helpers,partials,data) {
    return "              The group does not expect this document to become a W3C Recommendation.\n";
},"52":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.multipleWGs : depth0),{"name":"if","hash":{},"fn":container.program(53, data, 0),"inverse":container.program(55, data, 0),"data":data})) != null ? stack1 : "")
    + "              made in connection with the deliverables of\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.multipleWGs : depth0),{"name":"if","hash":{},"fn":container.program(57, data, 0),"inverse":container.program(59, data, 0),"data":data})) != null ? stack1 : "")
    + "              instructions for disclosing a patent. An individual who has actual knowledge of a patent\n              which the individual believes contains\n              <a href='https://www.w3.org/Consortium/Patent-Policy-20040205/#def-essential'>Essential\n              Claim(s)</a> must disclose the information in accordance with\n              <a href='https://www.w3.org/Consortium/Patent-Policy-20040205/#sec-Disclosure'>section\n              6 of the W3C Patent Policy</a>.\n";
},"53":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "                W3C maintains "
    + ((stack1 = ((helper = (helper = helpers.wgPatentHTML || (depth0 != null ? depth0.wgPatentHTML : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"wgPatentHTML","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n";
},"55":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                W3C maintains a <a href='"
    + container.escapeExpression(((helper = (helper = helpers.wgPatentURI || (depth0 != null ? depth0.wgPatentURI : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"wgPatentURI","hash":{},"data":data}) : helper)))
    + "' rel='disclosure'>public list of any patent\n                disclosures</a>\n";
},"57":function(container,depth0,helpers,partials,data) {
    return "              each group; these pages also include\n";
},"59":function(container,depth0,helpers,partials,data) {
    return "              the group; that page also includes\n";
},"61":function(container,depth0,helpers,partials,data) {
    var helper;

  return "              The disclosure obligations of the Participants of this group are described in the\n              <a href='"
    + container.escapeExpression(((helper = (helper = helpers.charterDisclosureURI || (depth0 != null ? depth0.charterDisclosureURI : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"charterDisclosureURI","hash":{},"data":data}) : helper)))
    + "'>charter</a>.\n";
},"63":function(container,depth0,helpers,partials,data) {
    return "            <p>This document is governed by the <a id=\"w3c_process_revision\"\n              href=\"https://www.w3.org/2017/Process-20170301/\">1 March 2017 W3C Process Document</a>.\n            </p>\n";
},"65":function(container,depth0,helpers,partials,data) {
    return "            <p>\n              This document is governed by the  <a id=\"w3c_process_revision\"\n              href=\"https://www.w3.org/2005/10/Process-20051014/\">14 October 2005 W3C Process Document</a>.\n            </p>\n";
},"67":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<p>"
    + ((stack1 = ((helper = (helper = helpers.addPatentNote || (depth0 != null ? depth0.addPatentNote : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"addPatentNote","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<section id='sotd' class='introductory'><h2>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.l10n : depth0)) != null ? stack1.sotd : stack1), depth0))
    + "</h2>\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.isUnofficial : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</section>\n";
},"useData":true});
templates['permalinks.css'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "section > *:hover > span.permalink { visibility: visible; }\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "	float: right;\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "    visibility: hidden;\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "/* --- PERMALINKS --- */\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.permalinkHide : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n.permalink {\n    width: 1px;\n    height: 1px;\n    overflow: visible;\n    font-size: 10pt;\n    font-style: normal;\n    vertical-align: middle;\n    margin-left: 4px;\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.permalinkEdge : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.permalinkHide : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "}\n\n.permalink a, .permalink a:link, .permalink a:visited, .permalink a:hover, .permalink a:focus, .permalink a:active\n{\n	background:transparent !important;\n	text-decoration:none;\n    font-weight: bold;\n	color:#666 !important;\n}\n\n.permalink abbr {\n	border:0;\n}\n";
},"useData":true});
templates['permalinks.css'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "  section > *:hover > span.permalink { visibility: visible; }\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "  float: right;\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "  visibility: hidden;\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "/* --- PERMALINKS --- */\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.permalinkHide : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n.permalink {\n  width: 1px;\n  height: 1px;\n  overflow: visible;\n  font-size: 10pt;\n  font-style: normal;\n  vertical-align: middle;\n  margin-left: 4px;\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.permalinkEdge : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.permalinkHide : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "}\n\n.permalink a, .permalink a:link, .permalink a:visited, .permalink a:hover, .permalink a:focus, .permalink a:active {\n  background:transparent !important;\n  text-decoration:none;\n  font-weight: bold;\n  color:#666 !important;\n}\n\n.permalink abbr {\n  border:0;\n}\n";
},"useData":true});
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
    + "</span>;</span>\n";
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
    + "</span>;</span>\n";
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
    + ";</span>\n";
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
    + " &#123;\n"
    + ((stack1 = ((helper = (helper = helpers.children || (depth0 != null ? depth0.children : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"children","hash":{},"data":data}) : helper))) != null ? stack1 : "")
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
    + "\n";
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
    + "</span> &#123;\n"
    + ((stack1 = ((helper = (helper = helpers.children || (depth0 != null ? depth0.children : depth0)) != null ? helper : alias4),(typeof helper === "function" ? helper.call(alias3,{"name":"children","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + alias2((helpers.idn || (depth0 && depth0.idn) || alias4).call(alias3,(depth0 != null ? depth0.indent : depth0),{"name":"idn","hash":{},"data":data}))
    + "&#125;;</span>";
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
    + " &#123;\n"
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
    + "</span>;</span>\n";
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
    + " &#123;\n"
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
    + "&gt;;</span>\n";
},"useData":true});
templates['line-comment.html'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<span class='idlSectionComment'>"
    + alias3((helpers.idn || (depth0 && depth0.idn) || alias2).call(alias1,(depth0 != null ? depth0.indent : depth0),{"name":"idn","hash":{},"data":data}))
    + "//"
    + alias3(((helper = (helper = helpers.comment || (depth0 != null ? depth0.comment : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"comment","hash":{},"data":data}) : helper)))
    + "</span>\n";
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
    + "&gt;;</span>\n";
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
    + ");</span>\n";
},"useData":true});
templates['multiline-comment.html'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var alias1=container.escapeExpression;

  return alias1((helpers.idn || (depth0 && depth0.idn) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depths[1] != null ? depths[1].indent : depths[1]),{"name":"idn","hash":{},"data":data}))
    + alias1(container.lambda(depth0, depth0))
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "<span class='idlSectionComment'>"
    + alias3((helpers.idn || (depth0 && depth0.idn) || alias2).call(alias1,(depth0 != null ? depth0.indent : depth0),{"name":"idn","hash":{},"data":data}))
    + "/*"
    + alias3(((helper = (helper = helpers.firstLine || (depth0 != null ? depth0.firstLine : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"firstLine","hash":{},"data":data}) : helper)))
    + "\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.innerLine : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + alias3((helpers.idn || (depth0 && depth0.idn) || alias2).call(alias1,(depth0 != null ? depth0.indent : depth0),{"name":"idn","hash":{},"data":data}))
    + alias3(((helper = (helper = helpers.lastLine || (depth0 != null ? depth0.lastLine : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"lastLine","hash":{},"data":data}) : helper)))
    + "*/</span>\n";
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
    + ";</span>\n";
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
return templates;
});