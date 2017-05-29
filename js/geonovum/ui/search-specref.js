define(["exports", "core/ui", "core/biblio"], function (exports, _ui, _biblio) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.show = undefined;

  var _ui2 = _interopRequireDefault(_ui);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var _templateObject = _taggedTemplateLiteral(["\n      <p class=\"state\">\n        Your search - <strong>", "</strong> -\n        did not match any references.\n      </p>\n    "], ["\n      <p class=\"state\">\n        Your search - <strong>", "</strong> -\n        did not match any references.\n      </p>\n    "]),
      _templateObject2 = _taggedTemplateLiteral(["\n    <p class=\"result-stats\">\n      ", " resultaten (", " seconden).\n      ", "\n    </p>\n    <dl class=\"specref-results\">", "</dl>\n  "], ["\n    <p class=\"result-stats\">\n      ", " resultaten (", " seconden).\n      ", "\n    </p>\n    <dl class=\"specref-results\">", "</dl>\n  "]),
      _templateObject3 = _taggedTemplateLiteral(["\n    <dt>\n      [", "]\n    </dt>\n    <dd>", "</dd>\n  "], ["\n    <dt>\n      [", "]\n    </dt>\n    <dd>", "</dd>\n  "]),
      _templateObject4 = _taggedTemplateLiteral(["\n  <header>\n    <h1>Specref</h1>\n    <p>\n      Een Open-Source, Community-Onderhouden Database van\n      Web Standards & Related References.\n    </p>\n  </header>\n  <div class=\"searchcomponent\">\n    <input\n      name=\"zoekBox\"\n      type=\"zoek\"\n      autocomplete=\"off\"\n      placeholder=\"Keywords, titles, auteurs, urls\u2026\">\n    <button\n      type=\"submit\">\n        Zoek\n    </button>\n    <label>\n      <input type=\"checkbox\" name=\"includeVersions\"> Includeer alle versies.\n    </label>\n  </div>\n"], ["\n  <header>\n    <h1>Specref</h1>\n    <p>\n      Een Open-Source, Community-Onderhouden Database van\n      Web Standards & Related References.\n    </p>\n  </header>\n  <div class=\"searchcomponent\">\n    <input\n      name=\"zoekBox\"\n      type=\"zoek\"\n      autocomplete=\"off\"\n      placeholder=\"Keywords, titles, auteurs, urls\u2026\">\n    <button\n      type=\"submit\">\n        Zoek\n    </button>\n    <label>\n      <input type=\"checkbox\" name=\"includeVersions\"> Includeer alle versies.\n    </label>\n  </div>\n"]),
      _templateObject5 = _taggedTemplateLiteral(["<div>", "</div>"], ["<div>", "</div>"]),
      _templateObject6 = _taggedTemplateLiteral(["\n    <div>", "</div>\n    <p class=\"state\" hidden=\"", "\">\n      ", "\n    </p>\n    <section hidden=\"", "\">", "</section>\n  "], ["\n    <div>", "</div>\n    <p class=\"state\" hidden=\"", "\">\n      ", "\n    </p>\n    <section hidden=\"", "\">", "</section>\n  "]),
      _templateObject7 = _taggedTemplateLiteral([""], [""]);

  function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  var button = _ui2.default.addCommand("Zoek Specref DB", "geonovum/ui/search-specref", "Ctrl+Shift+Alt+space", "🔎");
  var specrefURL = "https://specref.herokuapp.com/";
  var refSearchURL = specrefURL + "search-refs";
  var reveseLookupURL = specrefURL + "reverse-lookup";
  var form = document.createElement("form");
  var renderer = window.hyperHTML.bind(form);
  var resultList = hyperHTML.bind(document.createElement("div"));

  form.id = "specref-ui";

  function renderResults(resultMap, query, timeTaken) {
    if (!resultMap.size) {
      return resultList(_templateObject, query);
    }
    var wires = Array.from(resultMap.entries()).slice(0, 99).map(toDefinitionPair).reduce(function (collector, pair) {
      return collector.concat(pair);
    }, []);
    return resultList(_templateObject2, resultMap.size, timeTaken, resultMap.size > 99 ? "Eerste 100 resultaten." : "", wires);
  }

  function toDefinitionPair(_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        entry = _ref2[1];

    return hyperHTML.wire(entry)(_templateObject3, key, (0, _biblio.wireReference)(entry));
  }

  function resultProcessor() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { includeVersions: false },
        includeVersions = _ref3.includeVersions;

    return function () {
      for (var _len = arguments.length, fetchedData = Array(_len), _key = 0; _key < _len; _key++) {
        fetchedData[_key] = arguments[_key];
      }

      var combinedResults = fetchedData.reduce(function (collector, resultObj) {
        return Object.assign(collector, resultObj);
      }, {});
      var results = new Map(Object.entries(combinedResults));
      // remove aliases
      Array.from(results.entries()).filter(function (_ref4) {
        var _ref5 = _slicedToArray(_ref4, 2),
            entry = _ref5[1];

        return entry.aliasOf;
      }).map(function (_ref6) {
        var _ref7 = _slicedToArray(_ref6, 1),
            key = _ref7[0];

        return key;
      }).reduce(function (results, key) {
        return results.delete(key) && results;
      }, results);
      // Remove versions, if asked to
      if (!includeVersions) {
        Array.from(results.values()).filter(function (entry) {
          return (typeof entry === "undefined" ? "undefined" : _typeof(entry)) === "object" && "versions" in entry;
        }).reduce(function (collector, entry) {
          return collector.concat(entry.versions);
        }, []).forEach(function (version) {
          results.delete(version);
        });
      }
      // Remove legacy string entries
      Array.from(results.entries()).filter(function (_ref8) {
        var _ref9 = _slicedToArray(_ref8, 2),
            entry = _ref9[1];

        return (typeof entry === "undefined" ? "undefined" : _typeof(entry)) !== "object";
      }).reduce(function (result, _ref10) {
        var _ref11 = _slicedToArray(_ref10, 1),
            key = _ref11[0];

        return results.delete(key) && results;
      }, results);
      return results;
    };
  }

  form.addEventListener("submit", function () {
    var _ref12 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ev) {
      var searchBox, query, refSearch, reverseLookup, startTime, jsonData, includeVersions, processResults, results;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              ev.preventDefault();
              searchBox = form.searchBox;
              query = searchBox.value;

              if (query) {
                _context.next = 6;
                break;
              }

              searchBox.focus();
              return _context.abrupt("return");

            case 6:
              render({ state: "Zoeken in Specref…" });
              refSearch = new URL(refSearchURL);

              refSearch.searchParams.set("q", query);
              reverseLookup = new URL(reveseLookupURL);

              reverseLookup.searchParams.set("urls", query);
              _context.prev = 11;
              startTime = performance.now();
              _context.next = 15;
              return Promise.all([fetch(refSearch).then(function (response) {
                return response.json();
              }), fetch(reverseLookup).then(function (response) {
                return response.json();
              })]);

            case 15:
              jsonData = _context.sent;
              includeVersions = form.includeVersions.checked;
              processResults = resultProcessor({ includeVersions: includeVersions });
              results = processResults.apply(undefined, _toConsumableArray(jsonData));

              render({
                query: query,
                results: results,
                state: "",
                timeTaken: Math.round(performance.now() - startTime) / 1000
              });
              _context.next = 26;
              break;

            case 22:
              _context.prev = 22;
              _context.t0 = _context["catch"](11);

              console.error(_context.t0);
              render({ state: "Error! Kon zoekterm niet uitvoeren." });

            case 26:
              _context.prev = 26;

              searchBox.focus();
              return _context.finish(26);

            case 29:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined, [[11, 22, 26, 29]]);
    }));

    return function (_x2) {
      return _ref12.apply(this, arguments);
    };
  }());

  function show() {
    render();
    _ui2.default.freshModal("Zoek naar referenties", form, button);
    form.querySelector("input[type=search]").focus();
  }

  var mast = hyperHTML.wire()(_templateObject4);

  function render() {
    var _ref13 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { state: "" },
        state = _ref13.state,
        results = _ref13.results,
        timeTaken = _ref13.timeTaken,
        query = _ref13.query;

    if (!results) {
      renderer(_templateObject5, mast);
    }
    renderer(_templateObject6, mast, !state, state, !results, results ? renderResults(results, query, timeTaken) : hyperHTML.wire()(_templateObject7));
  }

  exports.show = show;
});
//# sourceMappingURL=search-specref.js.map