var ks = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
};
var p = (t, e, r) => (ks(t, e, "read from private field"), r ? r.call(t) : e.get(t)), I = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, R = (t, e, r, n) => (ks(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r);
var on = (t, e, r, n) => ({
  set _(s) {
    R(t, e, s, r);
  },
  get _() {
    return p(t, e, n);
  }
}), Q = (t, e, r) => (ks(t, e, "access private method"), r);
import * as oe from "react";
import aa, { createContext as ca, isValidElement as It, createElement as me, Fragment as Bt, useEffect as Me, useRef as ke, useLayoutEffect as la, useState as xt, memo as Sl, useContext as ua, useCallback as Je, useMemo as vn, forwardRef as pi, Children as _r, cloneElement as ha } from "react";
import { createPortal as kl } from "react-dom";
var Ot = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Cl(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var $s = { exports: {} }, mr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zi;
function Ol() {
  if (Zi)
    return mr;
  Zi = 1;
  var t = aa, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, s = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(a, c, d) {
    var h, f = {}, u = null, y = null;
    d !== void 0 && (u = "" + d), c.key !== void 0 && (u = "" + c.key), c.ref !== void 0 && (y = c.ref);
    for (h in c)
      n.call(c, h) && !i.hasOwnProperty(h) && (f[h] = c[h]);
    if (a && a.defaultProps)
      for (h in c = a.defaultProps, c)
        f[h] === void 0 && (f[h] = c[h]);
    return { $$typeof: e, type: a, key: u, ref: y, props: f, _owner: s.current };
  }
  return mr.Fragment = r, mr.jsx = o, mr.jsxs = o, mr;
}
var br = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eo;
function _l() {
  return eo || (eo = 1, process.env.NODE_ENV !== "production" && function() {
    var t = aa, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), m = Symbol.iterator, x = "@@iterator";
    function w(l) {
      if (l === null || typeof l != "object")
        return null;
      var E = m && l[m] || l[x];
      return typeof E == "function" ? E : null;
    }
    var O = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function L(l) {
      {
        for (var E = arguments.length, T = new Array(E > 1 ? E - 1 : 0), H = 1; H < E; H++)
          T[H - 1] = arguments[H];
        N("error", l, T);
      }
    }
    function N(l, E, T) {
      {
        var H = O.ReactDebugCurrentFrame, te = H.getStackAddendum();
        te !== "" && (E += "%s", T = T.concat([te]));
        var re = T.map(function(J) {
          return String(J);
        });
        re.unshift("Warning: " + E), Function.prototype.apply.call(console[l], console, re);
      }
    }
    var K = !1, $ = !1, M = !1, X = !1, B = !1, Z;
    Z = Symbol.for("react.module.reference");
    function Y(l) {
      return !!(typeof l == "string" || typeof l == "function" || l === n || l === i || B || l === s || l === d || l === h || X || l === y || K || $ || M || typeof l == "object" && l !== null && (l.$$typeof === u || l.$$typeof === f || l.$$typeof === o || l.$$typeof === a || l.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      l.$$typeof === Z || l.getModuleId !== void 0));
    }
    function U(l, E, T) {
      var H = l.displayName;
      if (H)
        return H;
      var te = E.displayName || E.name || "";
      return te !== "" ? T + "(" + te + ")" : T;
    }
    function g(l) {
      return l.displayName || "Context";
    }
    function P(l) {
      if (l == null)
        return null;
      if (typeof l.tag == "number" && L("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof l == "function")
        return l.displayName || l.name || null;
      if (typeof l == "string")
        return l;
      switch (l) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case s:
          return "StrictMode";
        case d:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case a:
            var E = l;
            return g(E) + ".Consumer";
          case o:
            var T = l;
            return g(T._context) + ".Provider";
          case c:
            return U(l, l.render, "ForwardRef");
          case f:
            var H = l.displayName || null;
            return H !== null ? H : P(l.type) || "Memo";
          case u: {
            var te = l, re = te._payload, J = te._init;
            try {
              return P(J(re));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var C = Object.assign, v = 0, b, S, k, j, D, W, ee;
    function ce() {
    }
    ce.__reactDisabledLog = !0;
    function de() {
      {
        if (v === 0) {
          b = console.log, S = console.info, k = console.warn, j = console.error, D = console.group, W = console.groupCollapsed, ee = console.groupEnd;
          var l = {
            configurable: !0,
            enumerable: !0,
            value: ce,
            writable: !0
          };
          Object.defineProperties(console, {
            info: l,
            log: l,
            warn: l,
            error: l,
            group: l,
            groupCollapsed: l,
            groupEnd: l
          });
        }
        v++;
      }
    }
    function xe() {
      {
        if (v--, v === 0) {
          var l = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: C({}, l, {
              value: b
            }),
            info: C({}, l, {
              value: S
            }),
            warn: C({}, l, {
              value: k
            }),
            error: C({}, l, {
              value: j
            }),
            group: C({}, l, {
              value: D
            }),
            groupCollapsed: C({}, l, {
              value: W
            }),
            groupEnd: C({}, l, {
              value: ee
            })
          });
        }
        v < 0 && L("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var He = O.ReactCurrentDispatcher, je;
    function Ue(l, E, T) {
      {
        if (je === void 0)
          try {
            throw Error();
          } catch (te) {
            var H = te.stack.trim().match(/\n( *(at )?)/);
            je = H && H[1] || "";
          }
        return `
` + je + l;
      }
    }
    var Ie = !1, fe;
    {
      var qe = typeof WeakMap == "function" ? WeakMap : Map;
      fe = new qe();
    }
    function ot(l, E) {
      if (!l || Ie)
        return "";
      {
        var T = fe.get(l);
        if (T !== void 0)
          return T;
      }
      var H;
      Ie = !0;
      var te = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var re;
      re = He.current, He.current = null, de();
      try {
        if (E) {
          var J = function() {
            throw Error();
          };
          if (Object.defineProperty(J.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(J, []);
            } catch (et) {
              H = et;
            }
            Reflect.construct(l, [], J);
          } else {
            try {
              J.call();
            } catch (et) {
              H = et;
            }
            l.call(J.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (et) {
            H = et;
          }
          l();
        }
      } catch (et) {
        if (et && H && typeof et.stack == "string") {
          for (var V = et.stack.split(`
`), be = H.stack.split(`
`), le = V.length - 1, ue = be.length - 1; le >= 1 && ue >= 0 && V[le] !== be[ue]; )
            ue--;
          for (; le >= 1 && ue >= 0; le--, ue--)
            if (V[le] !== be[ue]) {
              if (le !== 1 || ue !== 1)
                do
                  if (le--, ue--, ue < 0 || V[le] !== be[ue]) {
                    var Te = `
` + V[le].replace(" at new ", " at ");
                    return l.displayName && Te.includes("<anonymous>") && (Te = Te.replace("<anonymous>", l.displayName)), typeof l == "function" && fe.set(l, Te), Te;
                  }
                while (le >= 1 && ue >= 0);
              break;
            }
        }
      } finally {
        Ie = !1, He.current = re, xe(), Error.prepareStackTrace = te;
      }
      var zt = l ? l.displayName || l.name : "", Xi = zt ? Ue(zt) : "";
      return typeof l == "function" && fe.set(l, Xi), Xi;
    }
    function Ut(l, E, T) {
      return ot(l, !1);
    }
    function rl(l) {
      var E = l.prototype;
      return !!(E && E.isReactComponent);
    }
    function rn(l, E, T) {
      if (l == null)
        return "";
      if (typeof l == "function")
        return ot(l, rl(l));
      if (typeof l == "string")
        return Ue(l);
      switch (l) {
        case d:
          return Ue("Suspense");
        case h:
          return Ue("SuspenseList");
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case c:
            return Ut(l.render);
          case f:
            return rn(l.type, E, T);
          case u: {
            var H = l, te = H._payload, re = H._init;
            try {
              return rn(re(te), E, T);
            } catch {
            }
          }
        }
      return "";
    }
    var nn = Object.prototype.hasOwnProperty, Fi = {}, Hi = O.ReactDebugCurrentFrame;
    function sn(l) {
      if (l) {
        var E = l._owner, T = rn(l.type, l._source, E ? E.type : null);
        Hi.setExtraStackFrame(T);
      } else
        Hi.setExtraStackFrame(null);
    }
    function nl(l, E, T, H, te) {
      {
        var re = Function.call.bind(nn);
        for (var J in l)
          if (re(l, J)) {
            var V = void 0;
            try {
              if (typeof l[J] != "function") {
                var be = Error((H || "React class") + ": " + T + " type `" + J + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[J] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw be.name = "Invariant Violation", be;
              }
              V = l[J](E, J, H, T, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (le) {
              V = le;
            }
            V && !(V instanceof Error) && (sn(te), L("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", H || "React class", T, J, typeof V), sn(null)), V instanceof Error && !(V.message in Fi) && (Fi[V.message] = !0, sn(te), L("Failed %s type: %s", T, V.message), sn(null));
          }
      }
    }
    var sl = Array.isArray;
    function vs(l) {
      return sl(l);
    }
    function il(l) {
      {
        var E = typeof Symbol == "function" && Symbol.toStringTag, T = E && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return T;
      }
    }
    function ol(l) {
      try {
        return Ui(l), !1;
      } catch {
        return !0;
      }
    }
    function Ui(l) {
      return "" + l;
    }
    function qi(l) {
      if (ol(l))
        return L("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", il(l)), Ui(l);
    }
    var gr = O.ReactCurrentOwner, al = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, zi, Wi, ws;
    ws = {};
    function cl(l) {
      if (nn.call(l, "ref")) {
        var E = Object.getOwnPropertyDescriptor(l, "ref").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return l.ref !== void 0;
    }
    function ll(l) {
      if (nn.call(l, "key")) {
        var E = Object.getOwnPropertyDescriptor(l, "key").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return l.key !== void 0;
    }
    function ul(l, E) {
      if (typeof l.ref == "string" && gr.current && E && gr.current.stateNode !== E) {
        var T = P(gr.current.type);
        ws[T] || (L('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P(gr.current.type), l.ref), ws[T] = !0);
      }
    }
    function hl(l, E) {
      {
        var T = function() {
          zi || (zi = !0, L("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        T.isReactWarning = !0, Object.defineProperty(l, "key", {
          get: T,
          configurable: !0
        });
      }
    }
    function fl(l, E) {
      {
        var T = function() {
          Wi || (Wi = !0, L("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        T.isReactWarning = !0, Object.defineProperty(l, "ref", {
          get: T,
          configurable: !0
        });
      }
    }
    var dl = function(l, E, T, H, te, re, J) {
      var V = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: l,
        key: E,
        ref: T,
        props: J,
        // Record the component responsible for creating this element.
        _owner: re
      };
      return V._store = {}, Object.defineProperty(V._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(V, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: H
      }), Object.defineProperty(V, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: te
      }), Object.freeze && (Object.freeze(V.props), Object.freeze(V)), V;
    };
    function pl(l, E, T, H, te) {
      {
        var re, J = {}, V = null, be = null;
        T !== void 0 && (qi(T), V = "" + T), ll(E) && (qi(E.key), V = "" + E.key), cl(E) && (be = E.ref, ul(E, te));
        for (re in E)
          nn.call(E, re) && !al.hasOwnProperty(re) && (J[re] = E[re]);
        if (l && l.defaultProps) {
          var le = l.defaultProps;
          for (re in le)
            J[re] === void 0 && (J[re] = le[re]);
        }
        if (V || be) {
          var ue = typeof l == "function" ? l.displayName || l.name || "Unknown" : l;
          V && hl(J, ue), be && fl(J, ue);
        }
        return dl(l, V, be, te, H, gr.current, J);
      }
    }
    var Es = O.ReactCurrentOwner, Ki = O.ReactDebugCurrentFrame;
    function qt(l) {
      if (l) {
        var E = l._owner, T = rn(l.type, l._source, E ? E.type : null);
        Ki.setExtraStackFrame(T);
      } else
        Ki.setExtraStackFrame(null);
    }
    var xs;
    xs = !1;
    function Ss(l) {
      return typeof l == "object" && l !== null && l.$$typeof === e;
    }
    function Vi() {
      {
        if (Es.current) {
          var l = P(Es.current.type);
          if (l)
            return `

Check the render method of \`` + l + "`.";
        }
        return "";
      }
    }
    function yl(l) {
      {
        if (l !== void 0) {
          var E = l.fileName.replace(/^.*[\\\/]/, ""), T = l.lineNumber;
          return `

Check your code at ` + E + ":" + T + ".";
        }
        return "";
      }
    }
    var Qi = {};
    function gl(l) {
      {
        var E = Vi();
        if (!E) {
          var T = typeof l == "string" ? l : l.displayName || l.name;
          T && (E = `

Check the top-level render call using <` + T + ">.");
        }
        return E;
      }
    }
    function Gi(l, E) {
      {
        if (!l._store || l._store.validated || l.key != null)
          return;
        l._store.validated = !0;
        var T = gl(E);
        if (Qi[T])
          return;
        Qi[T] = !0;
        var H = "";
        l && l._owner && l._owner !== Es.current && (H = " It was passed a child from " + P(l._owner.type) + "."), qt(l), L('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', T, H), qt(null);
      }
    }
    function Yi(l, E) {
      {
        if (typeof l != "object")
          return;
        if (vs(l))
          for (var T = 0; T < l.length; T++) {
            var H = l[T];
            Ss(H) && Gi(H, E);
          }
        else if (Ss(l))
          l._store && (l._store.validated = !0);
        else if (l) {
          var te = w(l);
          if (typeof te == "function" && te !== l.entries)
            for (var re = te.call(l), J; !(J = re.next()).done; )
              Ss(J.value) && Gi(J.value, E);
        }
      }
    }
    function ml(l) {
      {
        var E = l.type;
        if (E == null || typeof E == "string")
          return;
        var T;
        if (typeof E == "function")
          T = E.propTypes;
        else if (typeof E == "object" && (E.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        E.$$typeof === f))
          T = E.propTypes;
        else
          return;
        if (T) {
          var H = P(E);
          nl(T, l.props, "prop", H, l);
        } else if (E.PropTypes !== void 0 && !xs) {
          xs = !0;
          var te = P(E);
          L("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", te || "Unknown");
        }
        typeof E.getDefaultProps == "function" && !E.getDefaultProps.isReactClassApproved && L("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function bl(l) {
      {
        for (var E = Object.keys(l.props), T = 0; T < E.length; T++) {
          var H = E[T];
          if (H !== "children" && H !== "key") {
            qt(l), L("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", H), qt(null);
            break;
          }
        }
        l.ref !== null && (qt(l), L("Invalid attribute `ref` supplied to `React.Fragment`."), qt(null));
      }
    }
    function Ji(l, E, T, H, te, re) {
      {
        var J = Y(l);
        if (!J) {
          var V = "";
          (l === void 0 || typeof l == "object" && l !== null && Object.keys(l).length === 0) && (V += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var be = yl(te);
          be ? V += be : V += Vi();
          var le;
          l === null ? le = "null" : vs(l) ? le = "array" : l !== void 0 && l.$$typeof === e ? (le = "<" + (P(l.type) || "Unknown") + " />", V = " Did you accidentally export a JSX literal instead of a component?") : le = typeof l, L("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", le, V);
        }
        var ue = pl(l, E, T, te, re);
        if (ue == null)
          return ue;
        if (J) {
          var Te = E.children;
          if (Te !== void 0)
            if (H)
              if (vs(Te)) {
                for (var zt = 0; zt < Te.length; zt++)
                  Yi(Te[zt], l);
                Object.freeze && Object.freeze(Te);
              } else
                L("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Yi(Te, l);
        }
        return l === n ? bl(ue) : ml(ue), ue;
      }
    }
    function vl(l, E, T) {
      return Ji(l, E, T, !0);
    }
    function wl(l, E, T) {
      return Ji(l, E, T, !1);
    }
    var El = wl, xl = vl;
    br.Fragment = n, br.jsx = El, br.jsxs = xl;
  }()), br;
}
process.env.NODE_ENV === "production" ? $s.exports = Ol() : $s.exports = _l();
var A = $s.exports;
const fa = Object, cs = Map, Xr = Set, yi = Xr.prototype.has, Tl = Xr.prototype.add, On = cs.prototype.has, to = cs.prototype.get, ls = cs.prototype.set, Yt = 1, Ms = 2, Tr = 4, _n = 8, Al = 16, Rl = 32, at = "__t", ro = "__p", js = "__e", Ll = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Nl = "http://www.w3.org/1999/xlink", Pl = "http://www.w3.org/2000/xmlns/", $l = 120, Ml = new Xr(["href", "list", "form", "tabIndex", "download"]), jl = new Xr(["area", "base", "basefont", "bgsound", "br", "col", "command", "embed", "frame", "hr", "image", "img", "input", "isindex", "keygen", "link", "menuitem", "meta", "nextid", "param", "source", "track", "wbr"]);
if (typeof window > "u")
  throw new Error(
    "See http://million.dev/docs/install to install the compiler."
  );
const Et = document;
Et.createElement("template");
const da = /* @__PURE__ */ Et.createElement("template"), Il = da.content, no = /* @__PURE__ */ Et.createElementNS(
  "http://www.w3.org/2000/svg",
  "svg"
), Ft = Node.prototype, us = Element.prototype, Dl = CharacterData.prototype, hs = fa.getOwnPropertyDescriptor, wn = Ft.insertBefore, pa = Ft.cloneNode, Bl = Ft.replaceChild, Fl = us.remove, Hl = Ft.addEventListener, Ul = us.removeAttribute, so = us.setAttribute, io = us.setAttributeNS, ql = hs(Ft, "textContent").set, ya = hs(Ft, "firstChild").get, zl = hs(Ft, "nextSibling").get, Wl = hs(
  Dl,
  "data"
).set, Kl = (t, e) => {
  const r = e ? no : da;
  return r.innerHTML = t, (e ? no : Il).firstChild;
};
Et[js] = new Xr();
const oo = (t, e, r) => {
  let n = e.toLowerCase(), s = !1;
  n.endsWith("capture") && (n = n.slice(0, -7), s = !0);
  const i = `$$${n}`;
  yi.call(Et[js], n) || (Hl.call(
    Et,
    n,
    (a) => {
      let c = a.target;
      for (; c; ) {
        const d = c[i];
        d && (fa.defineProperty(a, "currentTarget", {
          configurable: !0,
          get() {
            return c;
          }
        }), d(a)), c = c.parentNode;
      }
    },
    { capture: s }
  ), Tl.call(Et[js], n));
  const o = (a) => {
    var c;
    a ? "key" in a && a.key === ((c = t[i]) == null ? void 0 : c.key) || (t[i] = a) : t[i] = null;
  };
  return o(r), o;
}, Ct = (t, e) => {
  let r = ya.call(t);
  if (e)
    for (let n = 0; n < e && r; ++n)
      r = zl.call(r);
  return r;
}, ao = /* @__PURE__ */ new WeakSet(), ga = (t) => {
  var r;
  if (ao.has(t))
    return;
  t.nodeType === 8 && ((r = t.parentNode) == null || r.removeChild(t));
  let e = ya.call(t);
  for (; e; )
    ga(e), e = e.nextSibling;
  ao.add(t);
}, co = (t, e, r) => {
  const n = Et.createTextNode(e), s = Ct(t, r);
  return wn.call(t, n, s), n;
}, Vl = (t, e) => {
  Wl.call(t, e);
}, an = (t, e, r) => {
  typeof r != "number" || Ll.test(e) ? t.style[e] = r : typeof r == "string" ? t.style.cssText = r : e.startsWith("-") ? t.style.setProperty(e, String(r)) : r == null ? t.style[e] = "" : t.style[e] = `${String(r)}px`;
}, lo = (t, e, r) => {
  e = e.replace(/xlink(?:H|:h)/, "h").replace(/sName$/, "s"), e.startsWith("xmlns") ? io.call(t, Pl, e, String(r)) : e.startsWith("xlink") && io.call(t, Nl, "href", String(r));
}, uo = (t, e, r) => {
  const n = r == null;
  if (r = n ? "" : r, e in t && t[e] !== void 0 && t[e] !== null && !(t instanceof SVGElement) && yi.call(Ml, e))
    try {
      t[e] = r;
    } catch {
    }
  else
    !n && r !== "" && (r !== !1 || e.includes("-")) ? so.call(t, e, String(r)) : Ul.call(t, e);
  const s = t instanceof HTMLInputElement, i = t instanceof HTMLSelectElement, o = t instanceof HTMLTextAreaElement;
  e === "value" && (s || i || o) && (so.call(t, e, String(r)), t.value = r);
};
var Ql = Object.defineProperty, Gl = (t, e, r) => e in t ? Ql(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, tt = (t, e, r) => (Gl(t, typeof e != "symbol" ? e + "" : e, r), r);
class Ar {
  constructor() {
    tt(this, "r"), tt(this, "e"), tt(this, "l"), tt(this, "g"), tt(this, "_u"), tt(this, "_t"), tt(this, "d"), tt(this, "k"), tt(this, "c");
  }
}
const ma = (t, e = [], r = []) => {
  var a, c;
  if (typeof t == "string")
    return t;
  if (typeof t == "number" || typeof t == "bigint" || t === !0)
    return String(t);
  if (t == null || t === !1)
    return "";
  if (typeof t == "object" && "$" in t)
    return e.push({
      p: r,
      e: [
        {
          /* type */
          t: Yt,
          /* name */
          n: null,
          /* value */
          v: null,
          /* hole */
          h: t.$,
          /* index */
          i: 0,
          /* listener */
          l: null,
          /* patch */
          p: null,
          /* block */
          b: null
        }
      ],
      i: []
    }), "<slot/>";
  let n = "", s = "";
  const i = {
    p: r,
    // The location of the edit in in the virtual node tree
    e: [],
    // Occur on mount + patch
    i: []
    // Occur before mount
  };
  for (let d in t.props) {
    const h = t.props[d];
    if (!(d === "key" || d === "ref" || d === "children")) {
      if (d === "className" && (d = "class"), d === "htmlFor" && (d = "for"), d.startsWith("on")) {
        "$" in h ? i.e.push({
          /* type */
          t: Tr,
          /* name */
          n: d.slice(2),
          /* value */
          v: null,
          /* hole */
          h: h.$,
          /* index */
          i: null,
          /* listener */
          l: null,
          /* patch */
          p: null,
          /* block */
          b: null
        }) : i.i.push({
          /* type */
          t: Tr,
          /* name */
          n: d.slice(2),
          /* value */
          v: null,
          /* hole */
          h: null,
          /* index */
          i: null,
          /* listener */
          l: h,
          /* patch */
          p: null,
          /* block */
          b: null
        });
        continue;
      }
      if (h) {
        if (typeof h == "object" && "$" in h) {
          d === "style" ? i.e.push({
            /* type */
            t: _n,
            /* name */
            n: d,
            /* value */
            v: null,
            /* hole */
            h: h.$,
            /* index */
            i: null,
            /* listener */
            l: null,
            /* patch */
            p: null,
            /* block */
            b: null
          }) : d.charCodeAt(0) === $l ? i.e.push({
            /* type */
            t: Al,
            /* name */
            n: d,
            /* value */
            v: null,
            /* hole */
            h: h.$,
            /* index */
            i: null,
            /* listener */
            l: null,
            /* patch */
            p: null,
            /* block */
            b: null
          }) : i.e.push({
            /* type */
            t: Ms,
            /* name */
            n: d,
            /* value */
            v: null,
            /* hole */
            h: h.$,
            /* index */
            i: null,
            /* listener */
            l: null,
            /* patch */
            p: null,
            /* block */
            b: null
          });
          continue;
        }
        if (d === "style" && typeof h == "object") {
          let f = "";
          for (const u in h) {
            if (typeof h[u] == "object") {
              i.e.push({
                /* type */
                t: _n,
                /* name */
                n: u,
                /* value */
                v: null,
                /* hole */
                h: h[u].$,
                /* index */
                i: null,
                /* listener */
                l: null,
                /* patch */
                p: null,
                /* block */
                b: null
              });
              continue;
            }
            let y = "";
            for (let m = 0, x = u.length; m < x; ++m) {
              const w = u.charCodeAt(m);
              w < 97 ? y += `-${String.fromCharCode(w + 32)}` : y += u[m];
            }
            f += `${y}:${String(h[u])};`;
          }
          n += ` style="${f}"`;
          continue;
        }
        n += ` ${d}="${String(h)}"`;
      }
    }
  }
  if (yi.call(jl, t.type))
    return i.e.length && e.push(i), `<${t.type}${n} />`;
  let o = !1;
  for (let d = 0, h = ((a = t.props.children) == null ? void 0 : a.length) || 0, f = 0; d < h; ++d) {
    const u = (c = t.props.children) == null ? void 0 : c[d];
    if (u == null || u === !1)
      continue;
    if (typeof u == "object" && "$" in u) {
      i.e.push({
        /* type */
        t: Yt,
        /* name */
        n: null,
        /* value */
        v: null,
        /* hole */
        h: u.$,
        /* index */
        i: d,
        /* listener */
        l: null,
        /* patch */
        p: null,
        /* block */
        b: null
      });
      continue;
    }
    if (u instanceof Ar) {
      i.i.push({
        /* type */
        t: Rl,
        /* name */
        n: null,
        /* value */
        v: null,
        /* hole */
        h: null,
        /* index */
        i: d,
        /* listener */
        l: null,
        /* patch */
        p: null,
        /* block */
        b: u
      });
      continue;
    }
    if (typeof u == "string" || typeof u == "number" || typeof u == "bigint") {
      const m = typeof u == "number" || typeof u == "bigint" ? String(u) : u;
      if (o) {
        i.i.push({
          /* type */
          t: Yt,
          /* name */
          n: null,
          /* value */
          v: m,
          /* hole */
          h: null,
          /* index */
          i: d,
          /* listener */
          l: null,
          /* patch */
          p: null,
          /* block */
          b: null
        });
        continue;
      }
      o = !0, s += m, f++;
      continue;
    }
    o = !1;
    const y = r.slice();
    y.push(f++), s += ma(u, e, y);
  }
  return (i.i.length || i.e.length) && e.push(i), `<${t.type}${n}>${s}</${t.type}>`;
};
var Yl = Object.defineProperty, Jl = (t, e, r) => e in t ? Yl(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Xl = (t, e, r) => (Jl(t, typeof e != "symbol" ? e + "" : e, r), r);
const ho = (t) => new ba(t);
class ba extends Ar {
  constructor(e) {
    super(), Xl(this, "b"), this.b = e;
  }
  v() {
  }
  p(e) {
    const r = this.b, n = e.b, s = r.length, i = n.length, o = this.t();
    if (this === e || i === 0 && s === 0)
      return o;
    if (this.b = n, i === 0)
      return Zl.call(this), o;
    if (s === 0)
      return va.call(e, o), o;
    let a = 0, c = 0, d = s - 1, h = i - 1, f = r[0], u = n[0], y = r[d], m = n[h], x;
    for (; a <= d && c <= h; ) {
      if (!f) {
        f = r[++a];
        continue;
      }
      if (!y) {
        y = r[--d];
        continue;
      }
      const w = f.k, O = u.k;
      if (w === O) {
        Vt.call(f, u), n[c] = f, f = r[++a], u = n[++c];
        continue;
      }
      const L = y.k, N = m.k;
      if (L === N) {
        Vt.call(y, m), n[h] = y, y = r[--d], m = n[--h];
        continue;
      }
      if (w === N) {
        Vt.call(f, m), n[h] = f;
        const $ = n[h + 1];
        Cs.call(f, $, ($ == null ? void 0 : $.l) || null), f = r[++a], m = n[--h];
        continue;
      }
      if (L === O) {
        Vt.call(y, u), n[c] = y;
        const $ = r[a];
        Cs.call(y, $, ($ == null ? void 0 : $.l) || null), y = r[--d], u = n[++c];
        continue;
      }
      if (!x) {
        x = new cs();
        for (let $ = a; $ <= d; $++)
          ls.call(x, r[$].k, $);
      }
      const K = x.get(O);
      if (K === void 0)
        Jt.call(u, o, f.l || null);
      else {
        const $ = r[K];
        Cs.call($, f, null), Vt.call($, u), n[c] = $, r[K] = null;
      }
      u = n[++c];
    }
    if (a <= d || c <= h)
      if (a > d) {
        const w = n[h + 1];
        for (let O = c; O <= h; ++O)
          Jt.call(n[O], o, w ? w.l : null);
      } else
        for (let w = a; w <= d; ++w)
          Tn.call(r[w]);
    return o;
  }
  m(e, r = null) {
    if (this._t)
      return this._t;
    for (let n = 0, s = this.b.length; n < s; ++n) {
      const i = this.b[n];
      Jt.call(i, e, r);
    }
    return this._t = e, e;
  }
  x() {
    const e = this.t();
    if (e)
      ql.call(e, "");
    else
      for (let r = 0, n = this.b.length; r < n; ++r)
        Tn.call(this.b[r]);
    this.b = [];
  }
  u() {
    return !0;
  }
  s() {
    return this.b.map((e) => e.s()).join("");
  }
  t() {
    return this._t || (this._t = this.b[0].t()), this._t;
  }
}
const gi = ba.prototype, va = gi.m, wa = gi.p, Zl = gi.x, eu = new Proxy(
  {},
  {
    // A universal getter will return a Hole instance if props[any] is accessed
    // Allows code to identify holes in virtual nodes ("digs" them out)
    get(t, e) {
      return { $: e };
    }
  }
), Ea = (t, e, r, n) => {
  const s = t(eu), i = [], o = Kl(
    ma(e ? e(s) : s, i),
    n
  );
  return ga(o), (a, c, d) => new xa(
    o,
    i,
    a,
    c ?? (a == null ? void 0 : a.key) ?? null,
    d ?? r ?? null,
    null
  );
}, tu = (t, e) => {
  if (("b" in t || "b" in e) && wa.call(t, e), t.l || Jt.call(t, void 0, null, null), t.k && t.k === e.k || t.r === e.r)
    return Vt.call(t, e);
  const r = Jt.call(e, t.t(), t.l, null);
  return Tn.call(t), t.k = e.k, r;
};
class xa extends Ar {
  constructor(e, r, n, s, i, o) {
    super(), this.r = e, this.d = n, this.e = r, this.k = s, this.c = Array(r.length), i ? this._u = i : this._u = null, o ? this.g = o : this.g = null;
  }
  m(e, r = null, n) {
    var o, a;
    if (this.l)
      return this.l;
    const s = n ?? pa.call(this.r, !0), i = (o = this.g) == null ? void 0 : o.call(this, s);
    i && (this.c = i);
    for (let c = 0, d = this.e.length; c < d; ++c) {
      const h = this.e[c], f = (i == null ? void 0 : i[c]) ?? fo(h.p, s, this.c, c);
      for (let y = 0, m = h.e.length; y < m; ++y) {
        const x = h.e[y], w = this.d[x.h];
        if (x.t & Yt) {
          if (w instanceof Ar) {
            const O = Ct(f, x.i);
            n ? w.m(f, O, O) : w.m(f, O);
            continue;
          }
          if (f[at] || (f[at] = new Array(m)), w && typeof w == "object" && "foreign" in w) {
            if (n) {
              const L = Ct(f, x.i);
              w.reset(L);
            }
            const O = w.current;
            f[at][y] = O, n || wn.call(f, O, Ct(f, x.i));
            continue;
          }
          if (n) {
            f[at][y] = Ct(f, x.i);
            continue;
          }
          f[at][y] = co(
            f,
            // eslint-disable-next-line eqeqeq
            w == null || w === !1 ? "" : String(w),
            x.i
          );
        } else if (x.t & Tr) {
          const O = oo(f, x.n, w);
          f[ro + x.n] = O;
        } else if (x.t & Ms)
          uo(f, x.n, w);
        else if (x.t & _n)
          if (typeof w == "string" || typeof w == "number")
            an(f, x.n, w);
          else
            for (const O in w)
              an(f, O, w[O]);
        else
          lo(f, x.n, w);
      }
      const u = (a = h.i) == null ? void 0 : a.length;
      if (u)
        for (let y = 0; y < u; ++y) {
          const m = h.i[y];
          if (m.t & Yt)
            m.v && !n && co(f, m.v, m.i);
          else if (m.t & Tr)
            oo(f, m.n, m.l);
          else {
            const x = Ct(f, m.i);
            n ? m.b.m(f, x, x) : m.b.m(f, x);
          }
        }
    }
    return e && !n && wn.call(e, s, r), this.l = s, s;
  }
  p(e) {
    var s, i;
    const r = this.l;
    if (!e.d)
      return r;
    const n = this.d;
    if (!ru.call(this, n, e.d))
      return r;
    this.d = e.d;
    for (let o = 0, a = this.e.length; o < a; ++o) {
      const c = this.e[o], d = this.c[o] ?? fo(c.p, r, this.c, o);
      for (let h = 0, f = c.e.length; h < f; ++h) {
        const u = c.e[h], y = n[u.h], m = e.d[u.h];
        if (m !== y) {
          if (u.t & Tr) {
            d[ro + u.n](m);
            continue;
          }
          if (u.t & Yt) {
            if (y instanceof Ar) {
              const x = (i = (s = e.e) == null ? void 0 : s[o]) == null ? void 0 : i.e[h], w = e.d[x.h];
              y.p(w);
              continue;
            }
            if (m && typeof m == "object" && "foreign" in m) {
              const x = d[at][h];
              if (m.unstable && y !== m) {
                const w = m.current;
                d[at][h] = w, Bl.call(d, w, x);
              } else
                m.current = x;
              continue;
            }
            Vl(
              d[at][h],
              // eslint-disable-next-line eqeqeq
              m == null || m === !1 ? "" : String(m)
            );
          } else if (u.t & Ms)
            uo(d, u.n, m);
          else if (u.t & _n)
            if (typeof m == "string" || typeof m == "number")
              an(d, u.n, m);
            else
              for (const x in m)
                m[x] !== y[x] && an(d, x, m[x]);
          else
            lo(d, u.n, m);
        }
      }
    }
    return r;
  }
  v(e = null, r = null) {
    wn.call(this.t(), this.l, e ? e.l : r);
  }
  x() {
    Fl.call(this.l), this.l = null;
  }
  u(e, r) {
    return this._u ? this._u(e, r) : !0;
  }
  s() {
    var e;
    return String((e = this.l) == null ? void 0 : e.outerHTML);
  }
  t() {
    var e;
    return this._t || (this._t = (e = this.l) == null ? void 0 : e.parentElement), this._t;
  }
}
const fo = (t, e, r, n) => {
  const s = t.length;
  if (!s)
    return e;
  const i = r && n !== void 0;
  if (i && r[n])
    return r[n];
  for (let o = 0; o < s; ++o) {
    const a = t[o];
    e = Ct(e, a);
  }
  return i && (r[n] = e), e;
}, Zr = xa.prototype, Jt = Zr.m, Vt = Zr.p, Cs = Zr.v, Tn = Zr.x, ru = Zr.u, nu = {
  noSlot: !1
}, fs = "slot", Sa = "g", su = ({
  effect: t,
  deps: e
}) => (Me(t, e || []), null), Fe = /* @__PURE__ */ new Map(), iu = ca(!1), ou = (t, e, r) => {
  const n = { ref: e };
  let s = 0;
  for (const i in t) {
    const o = t[i];
    if (It(o) || Array.isArray(o) && o.length && It(o[0])) {
      n[i] = mi(
        o,
        !1,
        r,
        s++
      );
      continue;
    }
    n[i] = t[i];
  }
  return n;
}, Os = (t, e) => me(
  fs,
  { suppressHydrationWarning: !0, id: e },
  t
), mi = (t, e, r, n, s) => {
  var f;
  const i = (f = r == null ? void 0 : r[n]) == null ? void 0 : f.current, o = It(t) && typeof t.type == "function" && "_c" in t.type, a = o && t.type._c;
  if (typeof window > "u")
    return o ? a ? t : Os(Os(t), s) : Os(t, s);
  if (a) {
    const u = t.type(t.props);
    if (Fe.has(u.type)) {
      const y = Fe.get(u.type);
      if (typeof y == "function")
        return y(u.props);
    }
  }
  const c = i ?? (s ? document.getElementById(s) : null) ?? document.createElement(fs), d = kl(
    me(Bt, { children: t }),
    c,
    s
  ), h = {
    foreign: !0,
    current: c,
    portal: d,
    reset: (u) => {
      u.childNodes.forEach((y) => u.removeChild(y));
    },
    unstable: e
  };
  return r && (r[n] = h), h;
}, Is = (t) => {
  var s;
  if (typeof t != "object" || t === null || !("type" in t))
    return typeof t == "number" ? String(t) : t;
  let e = t.type;
  if (typeof e == "function")
    return Is(e(t.props ?? {}));
  if (typeof e == "object" && "$" in e)
    return e;
  const r = { ...t.props };
  "css" in r && "__EMOTION_TYPE_PLEASE_DO_NOT_USE__" in r && (r.style = r.css.styles, e = r.__EMOTION_TYPE_PLEASE_DO_NOT_USE__, delete r.__EMOTION_TYPE_PLEASE_DO_NOT_USE__, delete r.css);
  const n = (s = t.props) == null ? void 0 : s.children;
  return n != null && (r.children = Ds(t.props.children).map(
    (i) => Is(i)
  )), {
    type: e,
    // lets pretend no function go through
    props: r
  };
}, Ds = (t) => {
  if (t == null)
    return [];
  if (typeof t == "object" && "type" in t && t.type === Bt)
    return Ds(t.props.children);
  if (!Array.isArray(t) || typeof t == "object" && "$" in t)
    return [t];
  const e = t.flat(1 / 0), r = [];
  for (let n = 0, s = e.length; n < s; ++n)
    r.push(...Ds(e[n]));
  return r;
}, ka = typeof window > "u" ? Me : la;
function bi(t, e, r) {
  if (!t || e(t))
    return t;
  let n = r ? t.return : t.child;
  for (; n; ) {
    const s = bi(n, e, r);
    if (s)
      return s;
    n = r ? null : n.sibling;
  }
}
function Ca() {
  const t = ke();
  return xt(() => {
    const e = Function.prototype.bind;
    Function.prototype.bind = function(r, n) {
      return r === null && typeof (n == null ? void 0 : n.type) == "function" && (t.current = n, Function.prototype.bind = e), e.apply(this, arguments);
    };
  }), t.current;
}
function au(t) {
  const e = Ca(), r = ke({ el: null, depth: 0 });
  return ka(() => {
    var n;
    r.current.el = (n = bi(
      e,
      (s) => (r.current.depth++, typeof s.type == "string" && (t === void 0 || s.type === t)),
      !0
    )) == null ? void 0 : n.stateNode;
  }, [e]), r;
}
function cu() {
  const t = Ca(), e = ke({ el: null, depth: 0 });
  return ka(() => {
    var r;
    e.current.el = (r = bi(
      t,
      (n) => {
        var s;
        return e.current.depth++, ((s = n.stateNode) == null ? void 0 : s.containerInfo) != null;
      },
      !0
    )) == null ? void 0 : r.stateNode.containerInfo;
  }, [t]), e;
}
const Oa = (t, e = {}) => {
  const r = (e == null ? void 0 : e.experimental_noSlot) ?? nu.noSlot;
  let n = e == null ? void 0 : e.block;
  const s = e != null && e.svg ? Sa : fs;
  t && (n = Ea(
    t,
    Is,
    e == null ? void 0 : e.shouldUpdate,
    e == null ? void 0 : e.svg
  ));
  const i = (o, a) => {
    var N, K;
    const c = cu(), d = au(), h = o._hmr, f = ke(null), u = ke(null), y = ke([]);
    o = ou(o, a, y.current), (N = u.current) == null || N.call(u, o);
    const m = Je(() => {
      var M, X, B;
      if (!f.current && !r)
        return;
      const $ = n(o, o.key);
      return h && ((M = f.current) != null && M.textContent) && (f.current.textContent = ""), r && (f.current = ((X = d.current) == null ? void 0 : X.el) ?? ((B = c.current) == null ? void 0 : B.el), (o.scoped || d.current && c.current && d.current.depth > c.current.depth) && (f.current = c.current.el), f.current.childNodes.length && console.error(
        new Error(`\`experimental_options.noSlot\` does not support having siblings at the moment.
The block element should be the only child of the \`${pa.call(f.current).outerHTML}\` element.
To avoid this error, \`experimental_options.noSlot\` should be false`)
      )), (u.current === null || h) && (Jt.call($, f.current, null), u.current = (Z) => {
        tu(
          $,
          n(
            Z,
            Z.key,
            e == null ? void 0 : e.shouldUpdate
          )
        );
      }), () => {
        Tn.call($);
      };
    }, []), x = vn(() => r ? null : me((e == null ? void 0 : e.as) ?? s, { ref: f }), []), w = y.current.length, O = new Array(w);
    for (let $ = 0; $ < w; ++$)
      O[$] = (K = y.current[$]) == null ? void 0 : K.portal;
    return me(
      Bt,
      {},
      x,
      me(su, {
        effect: m,
        deps: h ? [h] : []
      }),
      O
    );
  };
  return On.call(Fe, i) || ls.call(Fe, i, Oa), e != null && e.name && (t && (t.displayName = `Million(Render(${e.name}))`), i.displayName = `Million(Block(${e.name}))`), i;
}, lu = ({
  each: t,
  children: e,
  memo: r,
  svg: n,
  as: s,
  ...i
}) => {
  const o = ke(null), [a] = xt(() => ({
    current: Array(t.length)
  })), c = ke(null), d = ke({
    each: null,
    children: null,
    mounted: !1
  }), [, h] = xt(!1);
  if (c.current && (t !== d.current.each || !r)) {
    const y = po(t, e, d, a, r);
    wa.call(c.current, ho(y));
  }
  const u = me(
    Bt,
    null,
    me(s ?? (n ? Sa : fs), { ...i, ref: o }),
    ...a.current.map((y) => y.portal)
  );
  return Me(() => {
    if (!o.current || c.current || d.current.mounted)
      return;
    const y = po(t, e, d, a, r);
    c.current = ho(y), On.call(Fe, u) || ls.call(Fe, u, c.current), va.call(c.current, o.current), d.current.mounted = !0, h(!0);
  }, [o.current]), u;
}, uu = Sl;
uu(lu);
const po = (t, e, r, n, s) => {
  var a;
  const i = Array(t.length), o = r.current;
  for (let c = 0, d = t.length; c < d; ++c) {
    if (s && o.each && o.each[c] === t[c]) {
      i[c] = (a = o.children) == null ? void 0 : a[c];
      continue;
    }
    const h = e(t[c], c);
    if (On.call(Fe, h.type)) {
      o.block || (o.block = to.call(Fe, h.type)), i[c] = o.block(h.props, n, c);
      continue;
    }
    if (typeof h.type == "function" && "_c" in h.type) {
      const y = h.type(h.props);
      if (On.call(Fe, y.type)) {
        const m = to.call(Fe, y.type);
        if (typeof m == "function") {
          i[c] = m(y.props);
          continue;
        }
      }
    }
    const f = Ea((y) => y == null ? void 0 : y.scope), u = (y, m, x) => f(
      {
        scope: mi(
          me(h.type, y),
          !1,
          m.current,
          x
        )
      },
      h.key ? String(h.key) : void 0
    );
    ls.call(Fe, h.type, u), o.block = u, i[c] = u(h.props, n, c);
  }
  return o.each = t, o.children = i, i;
};
function hu(t, e) {
  return t === e || t !== t && e !== e;
}
function fu(t, e) {
  for (const r in t)
    if (!hu(t[r], e[r]))
      return !0;
  return !1;
}
function vi(t, { portals: e, ...r }) {
  const n = `CompiledBlock(Inner(${r.name}))`, s = Oa((a) => t(a), {
    ...r,
    scoped: void 0,
    name: n,
    shouldUpdate: fu
  }), i = (e == null ? void 0 : e.length) || 0, o = e && i > 0 ? (a) => {
    const c = ua(iu), [d] = xt(() => []), h = { ...a, scoped: c };
    for (let u = 0; u < i; u++) {
      const y = e[u], m = mi(
        h[y],
        !1,
        d,
        u
      );
      h[y] = m;
    }
    const f = [];
    for (let u = 0, y = d.length; u < y; u++)
      f[u] = d[u].portal;
    return me(
      Bt,
      null,
      me(s, h),
      f
    );
  } : (a) => me(s, a);
  return r.name && (o.displayName = `Million(CompiledBlock(Outer(${r.name})))`), o;
}
typeof window < "u" && (window.__MILLION_DATA__ = {
  version: "3.0.6"
});
const vr = {
  MESSAGE: "message",
  TYPING: "typing",
  STOP_TYPING: "stop-typing",
  AGENT_MESSAGE: "agent-message"
}, yo = "user-bot-id", kr = "https://api.dialoguebot.tech";
console.log("API_URL", kr);
var St = {}, se = {}, ye = {};
Object.defineProperty(ye, "__esModule", { value: !0 });
ye.output = ye.exists = ye.hash = ye.bytes = ye.bool = ye.number = ye.isBytes = void 0;
function An(t) {
  if (!Number.isSafeInteger(t) || t < 0)
    throw new Error(`positive integer expected, not ${t}`);
}
ye.number = An;
function _a(t) {
  if (typeof t != "boolean")
    throw new Error(`boolean expected, not ${t}`);
}
ye.bool = _a;
function Ta(t) {
  return t instanceof Uint8Array || t != null && typeof t == "object" && t.constructor.name === "Uint8Array";
}
ye.isBytes = Ta;
function wi(t, ...e) {
  if (!Ta(t))
    throw new Error("Uint8Array expected");
  if (e.length > 0 && !e.includes(t.length))
    throw new Error(`Uint8Array expected of length ${e}, not of length=${t.length}`);
}
ye.bytes = wi;
function Aa(t) {
  if (typeof t != "function" || typeof t.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  An(t.outputLen), An(t.blockLen);
}
ye.hash = Aa;
function Ra(t, e = !0) {
  if (t.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (e && t.finished)
    throw new Error("Hash#digest() has already been called");
}
ye.exists = Ra;
function La(t, e) {
  wi(t);
  const r = e.outputLen;
  if (t.length < r)
    throw new Error(`digestInto() expects output buffer of length at least ${r}`);
}
ye.output = La;
const du = { number: An, bool: _a, bytes: wi, hash: Aa, exists: Ra, output: La };
ye.default = du;
var F = {};
Object.defineProperty(F, "__esModule", { value: !0 });
F.add5L = F.add5H = F.add4H = F.add4L = F.add3H = F.add3L = F.add = F.rotlBL = F.rotlBH = F.rotlSL = F.rotlSH = F.rotr32L = F.rotr32H = F.rotrBL = F.rotrBH = F.rotrSL = F.rotrSH = F.shrSL = F.shrSH = F.toBig = F.split = F.fromBig = void 0;
const cn = /* @__PURE__ */ BigInt(2 ** 32 - 1), Bs = /* @__PURE__ */ BigInt(32);
function Ei(t, e = !1) {
  return e ? { h: Number(t & cn), l: Number(t >> Bs & cn) } : { h: Number(t >> Bs & cn) | 0, l: Number(t & cn) | 0 };
}
F.fromBig = Ei;
function Na(t, e = !1) {
  let r = new Uint32Array(t.length), n = new Uint32Array(t.length);
  for (let s = 0; s < t.length; s++) {
    const { h: i, l: o } = Ei(t[s], e);
    [r[s], n[s]] = [i, o];
  }
  return [r, n];
}
F.split = Na;
const Pa = (t, e) => BigInt(t >>> 0) << Bs | BigInt(e >>> 0);
F.toBig = Pa;
const $a = (t, e, r) => t >>> r;
F.shrSH = $a;
const Ma = (t, e, r) => t << 32 - r | e >>> r;
F.shrSL = Ma;
const ja = (t, e, r) => t >>> r | e << 32 - r;
F.rotrSH = ja;
const Ia = (t, e, r) => t << 32 - r | e >>> r;
F.rotrSL = Ia;
const Da = (t, e, r) => t << 64 - r | e >>> r - 32;
F.rotrBH = Da;
const Ba = (t, e, r) => t >>> r - 32 | e << 64 - r;
F.rotrBL = Ba;
const Fa = (t, e) => e;
F.rotr32H = Fa;
const Ha = (t, e) => t;
F.rotr32L = Ha;
const Ua = (t, e, r) => t << r | e >>> 32 - r;
F.rotlSH = Ua;
const qa = (t, e, r) => e << r | t >>> 32 - r;
F.rotlSL = qa;
const za = (t, e, r) => e << r - 32 | t >>> 64 - r;
F.rotlBH = za;
const Wa = (t, e, r) => t << r - 32 | e >>> 64 - r;
F.rotlBL = Wa;
function Ka(t, e, r, n) {
  const s = (e >>> 0) + (n >>> 0);
  return { h: t + r + (s / 2 ** 32 | 0) | 0, l: s | 0 };
}
F.add = Ka;
const Va = (t, e, r) => (t >>> 0) + (e >>> 0) + (r >>> 0);
F.add3L = Va;
const Qa = (t, e, r, n) => e + r + n + (t / 2 ** 32 | 0) | 0;
F.add3H = Qa;
const Ga = (t, e, r, n) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0);
F.add4L = Ga;
const Ya = (t, e, r, n, s) => e + r + n + s + (t / 2 ** 32 | 0) | 0;
F.add4H = Ya;
const Ja = (t, e, r, n, s) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0) + (s >>> 0);
F.add5L = Ja;
const Xa = (t, e, r, n, s, i) => e + r + n + s + i + (t / 2 ** 32 | 0) | 0;
F.add5H = Xa;
const pu = {
  fromBig: Ei,
  split: Na,
  toBig: Pa,
  shrSH: $a,
  shrSL: Ma,
  rotrSH: ja,
  rotrSL: Ia,
  rotrBH: Da,
  rotrBL: Ba,
  rotr32H: Fa,
  rotr32L: Ha,
  rotlSH: Ua,
  rotlSL: qa,
  rotlBH: za,
  rotlBL: Wa,
  add: Ka,
  add3L: Va,
  add3H: Qa,
  add4L: Ga,
  add4H: Ya,
  add5H: Xa,
  add5L: Ja
};
F.default = pu;
var Za = {}, ds = {};
Object.defineProperty(ds, "__esModule", { value: !0 });
ds.crypto = void 0;
ds.crypto = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
(function(t) {
  /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
  Object.defineProperty(t, "__esModule", { value: !0 }), t.randomBytes = t.wrapXOFConstructorWithOpts = t.wrapConstructorWithOpts = t.wrapConstructor = t.checkOpts = t.Hash = t.concatBytes = t.toBytes = t.utf8ToBytes = t.asyncLoop = t.nextTick = t.hexToBytes = t.bytesToHex = t.byteSwap32 = t.byteSwapIfBE = t.byteSwap = t.isLE = t.rotl = t.rotr = t.createView = t.u32 = t.u8 = t.isBytes = void 0;
  const e = ds, r = ye;
  function n(g) {
    return g instanceof Uint8Array || g != null && typeof g == "object" && g.constructor.name === "Uint8Array";
  }
  t.isBytes = n;
  const s = (g) => new Uint8Array(g.buffer, g.byteOffset, g.byteLength);
  t.u8 = s;
  const i = (g) => new Uint32Array(g.buffer, g.byteOffset, Math.floor(g.byteLength / 4));
  t.u32 = i;
  const o = (g) => new DataView(g.buffer, g.byteOffset, g.byteLength);
  t.createView = o;
  const a = (g, P) => g << 32 - P | g >>> P;
  t.rotr = a;
  const c = (g, P) => g << P | g >>> 32 - P >>> 0;
  t.rotl = c, t.isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
  const d = (g) => g << 24 & 4278190080 | g << 8 & 16711680 | g >>> 8 & 65280 | g >>> 24 & 255;
  t.byteSwap = d, t.byteSwapIfBE = t.isLE ? (g) => g : (g) => (0, t.byteSwap)(g);
  function h(g) {
    for (let P = 0; P < g.length; P++)
      g[P] = (0, t.byteSwap)(g[P]);
  }
  t.byteSwap32 = h;
  const f = /* @__PURE__ */ Array.from({ length: 256 }, (g, P) => P.toString(16).padStart(2, "0"));
  function u(g) {
    (0, r.bytes)(g);
    let P = "";
    for (let C = 0; C < g.length; C++)
      P += f[g[C]];
    return P;
  }
  t.bytesToHex = u;
  const y = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
  function m(g) {
    if (g >= y._0 && g <= y._9)
      return g - y._0;
    if (g >= y._A && g <= y._F)
      return g - (y._A - 10);
    if (g >= y._a && g <= y._f)
      return g - (y._a - 10);
  }
  function x(g) {
    if (typeof g != "string")
      throw new Error("hex string expected, got " + typeof g);
    const P = g.length, C = P / 2;
    if (P % 2)
      throw new Error("padded hex string expected, got unpadded hex of length " + P);
    const v = new Uint8Array(C);
    for (let b = 0, S = 0; b < C; b++, S += 2) {
      const k = m(g.charCodeAt(S)), j = m(g.charCodeAt(S + 1));
      if (k === void 0 || j === void 0) {
        const D = g[S] + g[S + 1];
        throw new Error('hex string expected, got non-hex character "' + D + '" at index ' + S);
      }
      v[b] = k * 16 + j;
    }
    return v;
  }
  t.hexToBytes = x;
  const w = async () => {
  };
  t.nextTick = w;
  async function O(g, P, C) {
    let v = Date.now();
    for (let b = 0; b < g; b++) {
      C(b);
      const S = Date.now() - v;
      S >= 0 && S < P || (await (0, t.nextTick)(), v += S);
    }
  }
  t.asyncLoop = O;
  function L(g) {
    if (typeof g != "string")
      throw new Error(`utf8ToBytes expected string, got ${typeof g}`);
    return new Uint8Array(new TextEncoder().encode(g));
  }
  t.utf8ToBytes = L;
  function N(g) {
    return typeof g == "string" && (g = L(g)), (0, r.bytes)(g), g;
  }
  t.toBytes = N;
  function K(...g) {
    let P = 0;
    for (let v = 0; v < g.length; v++) {
      const b = g[v];
      (0, r.bytes)(b), P += b.length;
    }
    const C = new Uint8Array(P);
    for (let v = 0, b = 0; v < g.length; v++) {
      const S = g[v];
      C.set(S, b), b += S.length;
    }
    return C;
  }
  t.concatBytes = K;
  class $ {
    // Safe version that clones internal state
    clone() {
      return this._cloneInto();
    }
  }
  t.Hash = $;
  const M = {}.toString;
  function X(g, P) {
    if (P !== void 0 && M.call(P) !== "[object Object]")
      throw new Error("Options should be object or undefined");
    return Object.assign(g, P);
  }
  t.checkOpts = X;
  function B(g) {
    const P = (v) => g().update(N(v)).digest(), C = g();
    return P.outputLen = C.outputLen, P.blockLen = C.blockLen, P.create = () => g(), P;
  }
  t.wrapConstructor = B;
  function Z(g) {
    const P = (v, b) => g(b).update(N(v)).digest(), C = g({});
    return P.outputLen = C.outputLen, P.blockLen = C.blockLen, P.create = (v) => g(v), P;
  }
  t.wrapConstructorWithOpts = Z;
  function Y(g) {
    const P = (v, b) => g(b).update(N(v)).digest(), C = g({});
    return P.outputLen = C.outputLen, P.blockLen = C.blockLen, P.create = (v) => g(v), P;
  }
  t.wrapXOFConstructorWithOpts = Y;
  function U(g = 32) {
    if (e.crypto && typeof e.crypto.getRandomValues == "function")
      return e.crypto.getRandomValues(new Uint8Array(g));
    throw new Error("crypto.getRandomValues must be defined");
  }
  t.randomBytes = U;
})(Za);
Object.defineProperty(se, "__esModule", { value: !0 });
se.shake256 = se.shake128 = se.keccak_512 = se.keccak_384 = se.keccak_256 = se.keccak_224 = se.sha3_512 = se.sha3_384 = se.sha3_256 = se.sha3_224 = se.Keccak = se.keccakP = void 0;
const Wt = ye, $r = F, it = Za, ec = [], tc = [], rc = [], yu = /* @__PURE__ */ BigInt(0), wr = /* @__PURE__ */ BigInt(1), gu = /* @__PURE__ */ BigInt(2), mu = /* @__PURE__ */ BigInt(7), bu = /* @__PURE__ */ BigInt(256), vu = /* @__PURE__ */ BigInt(113);
for (let t = 0, e = wr, r = 1, n = 0; t < 24; t++) {
  [r, n] = [n, (2 * r + 3 * n) % 5], ec.push(2 * (5 * n + r)), tc.push((t + 1) * (t + 2) / 2 % 64);
  let s = yu;
  for (let i = 0; i < 7; i++)
    e = (e << wr ^ (e >> mu) * vu) % bu, e & gu && (s ^= wr << (wr << /* @__PURE__ */ BigInt(i)) - wr);
  rc.push(s);
}
const [wu, Eu] = /* @__PURE__ */ (0, $r.split)(rc, !0), go = (t, e, r) => r > 32 ? (0, $r.rotlBH)(t, e, r) : (0, $r.rotlSH)(t, e, r), mo = (t, e, r) => r > 32 ? (0, $r.rotlBL)(t, e, r) : (0, $r.rotlSL)(t, e, r);
function nc(t, e = 24) {
  const r = new Uint32Array(10);
  for (let n = 24 - e; n < 24; n++) {
    for (let o = 0; o < 10; o++)
      r[o] = t[o] ^ t[o + 10] ^ t[o + 20] ^ t[o + 30] ^ t[o + 40];
    for (let o = 0; o < 10; o += 2) {
      const a = (o + 8) % 10, c = (o + 2) % 10, d = r[c], h = r[c + 1], f = go(d, h, 1) ^ r[a], u = mo(d, h, 1) ^ r[a + 1];
      for (let y = 0; y < 50; y += 10)
        t[o + y] ^= f, t[o + y + 1] ^= u;
    }
    let s = t[2], i = t[3];
    for (let o = 0; o < 24; o++) {
      const a = tc[o], c = go(s, i, a), d = mo(s, i, a), h = ec[o];
      s = t[h], i = t[h + 1], t[h] = c, t[h + 1] = d;
    }
    for (let o = 0; o < 50; o += 10) {
      for (let a = 0; a < 10; a++)
        r[a] = t[o + a];
      for (let a = 0; a < 10; a++)
        t[o + a] ^= ~r[(a + 2) % 10] & r[(a + 4) % 10];
    }
    t[0] ^= wu[n], t[1] ^= Eu[n];
  }
  r.fill(0);
}
se.keccakP = nc;
class en extends it.Hash {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(e, r, n, s = !1, i = 24) {
    if (super(), this.blockLen = e, this.suffix = r, this.outputLen = n, this.enableXOF = s, this.rounds = i, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, (0, Wt.number)(n), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = (0, it.u32)(this.state);
  }
  keccak() {
    it.isLE || (0, it.byteSwap32)(this.state32), nc(this.state32, this.rounds), it.isLE || (0, it.byteSwap32)(this.state32), this.posOut = 0, this.pos = 0;
  }
  update(e) {
    (0, Wt.exists)(this);
    const { blockLen: r, state: n } = this;
    e = (0, it.toBytes)(e);
    const s = e.length;
    for (let i = 0; i < s; ) {
      const o = Math.min(r - this.pos, s - i);
      for (let a = 0; a < o; a++)
        n[this.pos++] ^= e[i++];
      this.pos === r && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = !0;
    const { state: e, suffix: r, pos: n, blockLen: s } = this;
    e[n] ^= r, r & 128 && n === s - 1 && this.keccak(), e[s - 1] ^= 128, this.keccak();
  }
  writeInto(e) {
    (0, Wt.exists)(this, !1), (0, Wt.bytes)(e), this.finish();
    const r = this.state, { blockLen: n } = this;
    for (let s = 0, i = e.length; s < i; ) {
      this.posOut >= n && this.keccak();
      const o = Math.min(n - this.posOut, i - s);
      e.set(r.subarray(this.posOut, this.posOut + o), s), this.posOut += o, s += o;
    }
    return e;
  }
  xofInto(e) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(e);
  }
  xof(e) {
    return (0, Wt.number)(e), this.xofInto(new Uint8Array(e));
  }
  digestInto(e) {
    if ((0, Wt.output)(e, this), this.finished)
      throw new Error("digest() was already called");
    return this.writeInto(e), this.destroy(), e;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = !0, this.state.fill(0);
  }
  _cloneInto(e) {
    const { blockLen: r, suffix: n, outputLen: s, rounds: i, enableXOF: o } = this;
    return e || (e = new en(r, n, s, o, i)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = i, e.suffix = n, e.outputLen = s, e.enableXOF = o, e.destroyed = this.destroyed, e;
  }
}
se.Keccak = en;
const kt = (t, e, r) => (0, it.wrapConstructor)(() => new en(e, t, r));
se.sha3_224 = kt(6, 144, 224 / 8);
se.sha3_256 = kt(6, 136, 256 / 8);
se.sha3_384 = kt(6, 104, 384 / 8);
se.sha3_512 = kt(6, 72, 512 / 8);
se.keccak_224 = kt(1, 144, 224 / 8);
se.keccak_256 = kt(1, 136, 256 / 8);
se.keccak_384 = kt(1, 104, 384 / 8);
se.keccak_512 = kt(1, 72, 512 / 8);
const sc = (t, e, r) => (0, it.wrapXOFConstructorWithOpts)((n = {}) => new en(e, t, n.dkLen === void 0 ? r : n.dkLen, !0));
se.shake128 = sc(31, 168, 128 / 8);
se.shake256 = sc(31, 136, 256 / 8);
const { sha3_512: xu } = se, ic = 24, Rr = 32, Fs = (t = 4, e = Math.random) => {
  let r = "";
  for (; r.length < t; )
    r = r + Math.floor(e() * 36).toString(36);
  return r;
};
function oc(t) {
  let e = 8n, r = 0n;
  for (const n of t.values()) {
    const s = BigInt(n);
    r = (r << e) + s;
  }
  return r;
}
const ac = (t = "") => oc(xu(t)).toString(36).slice(1), bo = Array.from(
  { length: 26 },
  (t, e) => String.fromCharCode(e + 97)
), Su = (t) => bo[Math.floor(t() * bo.length)], cc = ({
  globalObj: t = typeof Ot < "u" ? Ot : typeof window < "u" ? window : {},
  random: e = Math.random
} = {}) => {
  const r = Object.keys(t).toString(), n = r.length ? r + Fs(Rr, e) : Fs(Rr, e);
  return ac(n).substring(0, Rr);
}, lc = (t) => () => t++, ku = 476782367, uc = ({
  // Fallback if the user does not pass in a CSPRNG. This should be OK
  // because we don't rely solely on the random number generator for entropy.
  // We also use the host fingerprint, current time, and a session counter.
  random: t = Math.random,
  counter: e = lc(Math.floor(t() * ku)),
  length: r = ic,
  fingerprint: n = cc({ random: t })
} = {}) => function() {
  const i = Su(t), o = Date.now().toString(36), a = e().toString(36), c = Fs(r, t), d = `${o + c + a + n}`;
  return `${i + ac(d).substring(1, r)}`;
}, Cu = uc(), Ou = (t, { minLength: e = 2, maxLength: r = Rr } = {}) => {
  const n = t.length, s = /^[0-9a-z]+$/;
  try {
    if (typeof t == "string" && n >= e && n <= r && s.test(t))
      return !0;
  } finally {
  }
  return !1;
};
St.getConstants = () => ({ defaultLength: ic, bigLength: Rr });
St.init = uc;
St.createId = Cu;
St.bufToBigInt = oc;
St.createCounter = lc;
St.createFingerprint = cc;
St.isCuid = Ou;
const { createId: _u, init: Ld, getConstants: Nd, isCuid: Pd } = St;
var Tu = _u;
const Ce = () => {
  const t = Tu(), e = localStorage.getItem(yo);
  return e || (localStorage.setItem(yo, t), t);
}, vo = (t, e) => {
  const r = e || Ce();
  return `${t}_${r}`;
}, hc = (t) => {
  var e;
  (e = window.open(t, "_blank")) == null || e.focus();
}, xi = (t) => {
  t = t.replace(/^#/, "");
  const e = parseInt(t, 16);
  let r = e >> 16 & 255, n = e >> 8 & 255, s = e & 255;
  r /= 255, n /= 255, s /= 255;
  const i = Math.max(r, n, s), o = Math.min(r, n, s);
  let a = 0, c;
  const d = (i + o) / 2;
  if (i === o)
    a = c = 0;
  else {
    const h = i - o;
    switch (c = d > 0.5 ? h / (2 - i - o) : h / (i + o), i) {
      case r:
        a = (n - s) / h + (n < s ? 6 : 0);
        break;
      case n:
        a = (s - r) / h + 2;
        break;
      case s:
        a = (r - n) / h + 4;
        break;
    }
    a /= 6;
  }
  return a *= 360, {
    h: Math.round(a),
    s: Math.round(c * 100),
    l: Math.round(d * 100)
  };
};
var tn = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(t) {
    return this.listeners.add(t), this.onSubscribe(), () => {
      this.listeners.delete(t), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}, fr = typeof window > "u" || "Deno" in globalThis;
function Pe() {
}
function Au(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Hs(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function fc(t, e) {
  return Math.max(t + (e || 0) - Date.now(), 0);
}
function wo(t, e) {
  const {
    type: r = "all",
    exact: n,
    fetchStatus: s,
    predicate: i,
    queryKey: o,
    stale: a
  } = t;
  if (o) {
    if (n) {
      if (e.queryHash !== Si(o, e.options))
        return !1;
    } else if (!jr(e.queryKey, o))
      return !1;
  }
  if (r !== "all") {
    const c = e.isActive();
    if (r === "active" && !c || r === "inactive" && c)
      return !1;
  }
  return !(typeof a == "boolean" && e.isStale() !== a || s && s !== e.state.fetchStatus || i && !i(e));
}
function Eo(t, e) {
  const { exact: r, status: n, predicate: s, mutationKey: i } = t;
  if (i) {
    if (!e.options.mutationKey)
      return !1;
    if (r) {
      if (Mr(e.options.mutationKey) !== Mr(i))
        return !1;
    } else if (!jr(e.options.mutationKey, i))
      return !1;
  }
  return !(n && e.state.status !== n || s && !s(e));
}
function Si(t, e) {
  return ((e == null ? void 0 : e.queryKeyHashFn) || Mr)(t);
}
function Mr(t) {
  return JSON.stringify(
    t,
    (e, r) => qs(r) ? Object.keys(r).sort().reduce((n, s) => (n[s] = r[s], n), {}) : r
  );
}
function jr(t, e) {
  return t === e ? !0 : typeof t != typeof e ? !1 : t && e && typeof t == "object" && typeof e == "object" ? !Object.keys(e).some((r) => !jr(t[r], e[r])) : !1;
}
function dc(t, e) {
  if (t === e)
    return t;
  const r = xo(t) && xo(e);
  if (r || qs(t) && qs(e)) {
    const n = r ? t : Object.keys(t), s = n.length, i = r ? e : Object.keys(e), o = i.length, a = r ? [] : {};
    let c = 0;
    for (let d = 0; d < o; d++) {
      const h = r ? d : i[d];
      !r && t[h] === void 0 && e[h] === void 0 && n.includes(h) ? (a[h] = void 0, c++) : (a[h] = dc(t[h], e[h]), a[h] === t[h] && t[h] !== void 0 && c++);
    }
    return s === o && c === s ? t : a;
  }
  return e;
}
function Us(t, e) {
  if (!e || Object.keys(t).length !== Object.keys(e).length)
    return !1;
  for (const r in t)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
function xo(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function qs(t) {
  if (!So(t))
    return !1;
  const e = t.constructor;
  if (e === void 0)
    return !0;
  const r = e.prototype;
  return !(!So(r) || !r.hasOwnProperty("isPrototypeOf"));
}
function So(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function Ru(t) {
  return new Promise((e) => {
    setTimeout(e, t);
  });
}
function zs(t, e, r) {
  return typeof r.structuralSharing == "function" ? r.structuralSharing(t, e) : r.structuralSharing !== !1 ? dc(t, e) : e;
}
function Lu(t, e, r = 0) {
  const n = [...t, e];
  return r && n.length > r ? n.slice(1) : n;
}
function Nu(t, e, r = 0) {
  const n = [e, ...t];
  return r && n.length > r ? n.slice(0, -1) : n;
}
var Ir = Symbol(), At, yt, Xt, Xo, Pu = (Xo = class extends tn {
  constructor() {
    super();
    I(this, At, void 0);
    I(this, yt, void 0);
    I(this, Xt, void 0);
    R(this, Xt, (e) => {
      if (!fr && window.addEventListener) {
        const r = () => e();
        return window.addEventListener("visibilitychange", r, !1), () => {
          window.removeEventListener("visibilitychange", r);
        };
      }
    });
  }
  onSubscribe() {
    p(this, yt) || this.setEventListener(p(this, Xt));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = p(this, yt)) == null || e.call(this), R(this, yt, void 0));
  }
  setEventListener(e) {
    var r;
    R(this, Xt, e), (r = p(this, yt)) == null || r.call(this), R(this, yt, e((n) => {
      typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
    }));
  }
  setFocused(e) {
    p(this, At) !== e && (R(this, At, e), this.onFocus());
  }
  onFocus() {
    const e = this.isFocused();
    this.listeners.forEach((r) => {
      r(e);
    });
  }
  isFocused() {
    var e;
    return typeof p(this, At) == "boolean" ? p(this, At) : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !== "hidden";
  }
}, At = new WeakMap(), yt = new WeakMap(), Xt = new WeakMap(), Xo), ki = new Pu(), Zt, gt, er, Zo, $u = (Zo = class extends tn {
  constructor() {
    super();
    I(this, Zt, !0);
    I(this, gt, void 0);
    I(this, er, void 0);
    R(this, er, (e) => {
      if (!fr && window.addEventListener) {
        const r = () => e(!0), n = () => e(!1);
        return window.addEventListener("online", r, !1), window.addEventListener("offline", n, !1), () => {
          window.removeEventListener("online", r), window.removeEventListener("offline", n);
        };
      }
    });
  }
  onSubscribe() {
    p(this, gt) || this.setEventListener(p(this, er));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = p(this, gt)) == null || e.call(this), R(this, gt, void 0));
  }
  setEventListener(e) {
    var r;
    R(this, er, e), (r = p(this, gt)) == null || r.call(this), R(this, gt, e(this.setOnline.bind(this)));
  }
  setOnline(e) {
    p(this, Zt) !== e && (R(this, Zt, e), this.listeners.forEach((n) => {
      n(e);
    }));
  }
  isOnline() {
    return p(this, Zt);
  }
}, Zt = new WeakMap(), gt = new WeakMap(), er = new WeakMap(), Zo), Rn = new $u();
function Mu(t) {
  return Math.min(1e3 * 2 ** t, 3e4);
}
function Ci(t) {
  return (t ?? "online") === "online" ? Rn.isOnline() : !0;
}
var pc = class {
  constructor(t) {
    this.revert = t == null ? void 0 : t.revert, this.silent = t == null ? void 0 : t.silent;
  }
};
function _s(t) {
  return t instanceof pc;
}
function yc(t) {
  let e = !1, r = 0, n = !1, s, i, o;
  const a = new Promise((w, O) => {
    i = w, o = O;
  }), c = (w) => {
    var O;
    n || (y(new pc(w)), (O = t.abort) == null || O.call(t));
  }, d = () => {
    e = !0;
  }, h = () => {
    e = !1;
  }, f = () => !ki.isFocused() || t.networkMode !== "always" && !Rn.isOnline(), u = (w) => {
    var O;
    n || (n = !0, (O = t.onSuccess) == null || O.call(t, w), s == null || s(), i(w));
  }, y = (w) => {
    var O;
    n || (n = !0, (O = t.onError) == null || O.call(t, w), s == null || s(), o(w));
  }, m = () => new Promise((w) => {
    var O;
    s = (L) => {
      const N = n || !f();
      return N && w(L), N;
    }, (O = t.onPause) == null || O.call(t);
  }).then(() => {
    var w;
    s = void 0, n || (w = t.onContinue) == null || w.call(t);
  }), x = () => {
    if (n)
      return;
    let w;
    try {
      w = t.fn();
    } catch (O) {
      w = Promise.reject(O);
    }
    Promise.resolve(w).then(u).catch((O) => {
      var M;
      if (n)
        return;
      const L = t.retry ?? (fr ? 0 : 3), N = t.retryDelay ?? Mu, K = typeof N == "function" ? N(r, O) : N, $ = L === !0 || typeof L == "number" && r < L || typeof L == "function" && L(r, O);
      if (e || !$) {
        y(O);
        return;
      }
      r++, (M = t.onFail) == null || M.call(t, r, O), Ru(K).then(() => {
        if (f())
          return m();
      }).then(() => {
        e ? y(O) : x();
      });
    });
  };
  return Ci(t.networkMode) ? x() : m().then(x), {
    promise: a,
    cancel: c,
    continue: () => (s == null ? void 0 : s()) ? a : Promise.resolve(),
    cancelRetry: d,
    continueRetry: h
  };
}
function ju() {
  let t = [], e = 0, r = (u) => {
    u();
  }, n = (u) => {
    u();
  }, s = (u) => setTimeout(u, 0);
  const i = (u) => {
    s = u;
  }, o = (u) => {
    let y;
    e++;
    try {
      y = u();
    } finally {
      e--, e || d();
    }
    return y;
  }, a = (u) => {
    e ? t.push(u) : s(() => {
      r(u);
    });
  }, c = (u) => (...y) => {
    a(() => {
      u(...y);
    });
  }, d = () => {
    const u = t;
    t = [], u.length && s(() => {
      n(() => {
        u.forEach((y) => {
          r(y);
        });
      });
    });
  };
  return {
    batch: o,
    batchCalls: c,
    schedule: a,
    setNotifyFunction: (u) => {
      r = u;
    },
    setBatchNotifyFunction: (u) => {
      n = u;
    },
    setScheduler: i
  };
}
var ge = ju(), Rt, ea, gc = (ea = class {
  constructor() {
    I(this, Rt, void 0);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), Hs(this.gcTime) && R(this, Rt, setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(t) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      t ?? (fr ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    p(this, Rt) && (clearTimeout(p(this, Rt)), R(this, Rt, void 0));
  }
}, Rt = new WeakMap(), ea), tr, rr, Le, we, pe, Fr, Lt, De, nt, ta, Iu = (ta = class extends gc {
  constructor(e) {
    super();
    I(this, De);
    I(this, tr, void 0);
    I(this, rr, void 0);
    I(this, Le, void 0);
    I(this, we, void 0);
    I(this, pe, void 0);
    I(this, Fr, void 0);
    I(this, Lt, void 0);
    R(this, Lt, !1), R(this, Fr, e.defaultOptions), this.setOptions(e.options), R(this, pe, []), R(this, Le, e.cache), this.queryKey = e.queryKey, this.queryHash = e.queryHash, R(this, tr, e.state || Du(this.options)), this.state = p(this, tr), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  setOptions(e) {
    this.options = { ...p(this, Fr), ...e }, this.updateGcTime(this.options.gcTime);
  }
  optionalRemove() {
    !p(this, pe).length && this.state.fetchStatus === "idle" && p(this, Le).remove(this);
  }
  setData(e, r) {
    const n = zs(this.state.data, e, this.options);
    return Q(this, De, nt).call(this, {
      data: n,
      type: "success",
      dataUpdatedAt: r == null ? void 0 : r.updatedAt,
      manual: r == null ? void 0 : r.manual
    }), n;
  }
  setState(e, r) {
    Q(this, De, nt).call(this, { type: "setState", state: e, setStateOptions: r });
  }
  cancel(e) {
    var n, s;
    const r = (n = p(this, we)) == null ? void 0 : n.promise;
    return (s = p(this, we)) == null || s.cancel(e), r ? r.then(Pe).catch(Pe) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(p(this, tr));
  }
  isActive() {
    return p(this, pe).some(
      (e) => e.options.enabled !== !1
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 && !this.isActive();
  }
  isStale() {
    return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? p(this, pe).some(
      (e) => e.getCurrentResult().isStale
    ) : this.state.data === void 0;
  }
  isStaleByTime(e = 0) {
    return this.state.isInvalidated || this.state.data === void 0 || !fc(this.state.dataUpdatedAt, e);
  }
  onFocus() {
    var r;
    const e = p(this, pe).find((n) => n.shouldFetchOnWindowFocus());
    e == null || e.refetch({ cancelRefetch: !1 }), (r = p(this, we)) == null || r.continue();
  }
  onOnline() {
    var r;
    const e = p(this, pe).find((n) => n.shouldFetchOnReconnect());
    e == null || e.refetch({ cancelRefetch: !1 }), (r = p(this, we)) == null || r.continue();
  }
  addObserver(e) {
    p(this, pe).includes(e) || (p(this, pe).push(e), this.clearGcTimeout(), p(this, Le).notify({ type: "observerAdded", query: this, observer: e }));
  }
  removeObserver(e) {
    p(this, pe).includes(e) && (R(this, pe, p(this, pe).filter((r) => r !== e)), p(this, pe).length || (p(this, we) && (p(this, Lt) ? p(this, we).cancel({ revert: !0 }) : p(this, we).cancelRetry()), this.scheduleGc()), p(this, Le).notify({ type: "observerRemoved", query: this, observer: e }));
  }
  getObserversCount() {
    return p(this, pe).length;
  }
  invalidate() {
    this.state.isInvalidated || Q(this, De, nt).call(this, { type: "invalidate" });
  }
  fetch(e, r) {
    var d, h, f;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.data !== void 0 && (r != null && r.cancelRefetch))
        this.cancel({ silent: !0 });
      else if (p(this, we))
        return p(this, we).continueRetry(), p(this, we).promise;
    }
    if (e && this.setOptions(e), !this.options.queryFn) {
      const u = p(this, pe).find((y) => y.options.queryFn);
      u && this.setOptions(u.options);
    }
    process.env.NODE_ENV !== "production" && (Array.isArray(this.options.queryKey) || console.error(
      "As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']"
    ));
    const n = new AbortController(), s = {
      queryKey: this.queryKey,
      meta: this.meta
    }, i = (u) => {
      Object.defineProperty(u, "signal", {
        enumerable: !0,
        get: () => (R(this, Lt, !0), n.signal)
      });
    };
    i(s);
    const o = () => (process.env.NODE_ENV !== "production" && this.options.queryFn === Ir && console.error(
      `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${this.options.queryHash}'`
    ), !this.options.queryFn || this.options.queryFn === Ir ? Promise.reject(
      new Error(`Missing queryFn: '${this.options.queryHash}'`)
    ) : (R(this, Lt, !1), this.options.persister ? this.options.persister(
      this.options.queryFn,
      s,
      this
    ) : this.options.queryFn(
      s
    ))), a = {
      fetchOptions: r,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn: o
    };
    i(a), (d = this.options.behavior) == null || d.onFetch(
      a,
      this
    ), R(this, rr, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((h = a.fetchOptions) == null ? void 0 : h.meta)) && Q(this, De, nt).call(this, { type: "fetch", meta: (f = a.fetchOptions) == null ? void 0 : f.meta });
    const c = (u) => {
      var y, m, x, w;
      _s(u) && u.silent || Q(this, De, nt).call(this, {
        type: "error",
        error: u
      }), _s(u) || ((m = (y = p(this, Le).config).onError) == null || m.call(
        y,
        u,
        this
      ), (w = (x = p(this, Le).config).onSettled) == null || w.call(
        x,
        this.state.data,
        u,
        this
      )), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
    };
    return R(this, we, yc({
      fn: a.fetchFn,
      abort: n.abort.bind(n),
      onSuccess: (u) => {
        var y, m, x, w;
        if (u === void 0) {
          process.env.NODE_ENV !== "production" && console.error(
            `Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`
          ), c(new Error(`${this.queryHash} data is undefined`));
          return;
        }
        this.setData(u), (m = (y = p(this, Le).config).onSuccess) == null || m.call(y, u, this), (w = (x = p(this, Le).config).onSettled) == null || w.call(
          x,
          u,
          this.state.error,
          this
        ), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
      },
      onError: c,
      onFail: (u, y) => {
        Q(this, De, nt).call(this, { type: "failed", failureCount: u, error: y });
      },
      onPause: () => {
        Q(this, De, nt).call(this, { type: "pause" });
      },
      onContinue: () => {
        Q(this, De, nt).call(this, { type: "continue" });
      },
      retry: a.options.retry,
      retryDelay: a.options.retryDelay,
      networkMode: a.options.networkMode
    })), p(this, we).promise;
  }
}, tr = new WeakMap(), rr = new WeakMap(), Le = new WeakMap(), we = new WeakMap(), pe = new WeakMap(), Fr = new WeakMap(), Lt = new WeakMap(), De = new WeakSet(), nt = function(e) {
  const r = (n) => {
    switch (e.type) {
      case "failed":
        return {
          ...n,
          fetchFailureCount: e.failureCount,
          fetchFailureReason: e.error
        };
      case "pause":
        return {
          ...n,
          fetchStatus: "paused"
        };
      case "continue":
        return {
          ...n,
          fetchStatus: "fetching"
        };
      case "fetch":
        return {
          ...n,
          ...mc(n.data, this.options),
          fetchMeta: e.meta ?? null
        };
      case "success":
        return {
          ...n,
          data: e.data,
          dataUpdateCount: n.dataUpdateCount + 1,
          dataUpdatedAt: e.dataUpdatedAt ?? Date.now(),
          error: null,
          isInvalidated: !1,
          status: "success",
          ...!e.manual && {
            fetchStatus: "idle",
            fetchFailureCount: 0,
            fetchFailureReason: null
          }
        };
      case "error":
        const s = e.error;
        return _s(s) && s.revert && p(this, rr) ? { ...p(this, rr), fetchStatus: "idle" } : {
          ...n,
          error: s,
          errorUpdateCount: n.errorUpdateCount + 1,
          errorUpdatedAt: Date.now(),
          fetchFailureCount: n.fetchFailureCount + 1,
          fetchFailureReason: s,
          fetchStatus: "idle",
          status: "error"
        };
      case "invalidate":
        return {
          ...n,
          isInvalidated: !0
        };
      case "setState":
        return {
          ...n,
          ...e.state
        };
    }
  };
  this.state = r(this.state), ge.batch(() => {
    p(this, pe).forEach((n) => {
      n.onQueryUpdate();
    }), p(this, Le).notify({ query: this, type: "updated", action: e });
  });
}, ta);
function mc(t, e) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Ci(e.networkMode) ? "fetching" : "paused",
    ...t === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function Du(t) {
  const e = typeof t.initialData == "function" ? t.initialData() : t.initialData, r = e !== void 0, n = r ? typeof t.initialDataUpdatedAt == "function" ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
  return {
    data: e,
    dataUpdateCount: 0,
    dataUpdatedAt: r ? n ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: r ? "success" : "pending",
    fetchStatus: "idle"
  };
}
var Ve, ra, Bu = (ra = class extends tn {
  constructor(e = {}) {
    super();
    I(this, Ve, void 0);
    this.config = e, R(this, Ve, /* @__PURE__ */ new Map());
  }
  build(e, r, n) {
    const s = r.queryKey, i = r.queryHash ?? Si(s, r);
    let o = this.get(i);
    return o || (o = new Iu({
      cache: this,
      queryKey: s,
      queryHash: i,
      options: e.defaultQueryOptions(r),
      state: n,
      defaultOptions: e.getQueryDefaults(s)
    }), this.add(o)), o;
  }
  add(e) {
    p(this, Ve).has(e.queryHash) || (p(this, Ve).set(e.queryHash, e), this.notify({
      type: "added",
      query: e
    }));
  }
  remove(e) {
    const r = p(this, Ve).get(e.queryHash);
    r && (e.destroy(), r === e && p(this, Ve).delete(e.queryHash), this.notify({ type: "removed", query: e }));
  }
  clear() {
    ge.batch(() => {
      this.getAll().forEach((e) => {
        this.remove(e);
      });
    });
  }
  get(e) {
    return p(this, Ve).get(e);
  }
  getAll() {
    return [...p(this, Ve).values()];
  }
  find(e) {
    const r = { exact: !0, ...e };
    return this.getAll().find(
      (n) => wo(r, n)
    );
  }
  findAll(e = {}) {
    const r = this.getAll();
    return Object.keys(e).length > 0 ? r.filter((n) => wo(e, n)) : r;
  }
  notify(e) {
    ge.batch(() => {
      this.listeners.forEach((r) => {
        r(e);
      });
    });
  }
  onFocus() {
    ge.batch(() => {
      this.getAll().forEach((e) => {
        e.onFocus();
      });
    });
  }
  onOnline() {
    ge.batch(() => {
      this.getAll().forEach((e) => {
        e.onOnline();
      });
    });
  }
}, Ve = new WeakMap(), ra), Qe, Hr, Oe, nr, Ge, ht, na, Fu = (na = class extends gc {
  constructor(e) {
    super();
    I(this, Ge);
    I(this, Qe, void 0);
    I(this, Hr, void 0);
    I(this, Oe, void 0);
    I(this, nr, void 0);
    this.mutationId = e.mutationId, R(this, Hr, e.defaultOptions), R(this, Oe, e.mutationCache), R(this, Qe, []), this.state = e.state || Hu(), this.setOptions(e.options), this.scheduleGc();
  }
  setOptions(e) {
    this.options = { ...p(this, Hr), ...e }, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(e) {
    p(this, Qe).includes(e) || (p(this, Qe).push(e), this.clearGcTimeout(), p(this, Oe).notify({
      type: "observerAdded",
      mutation: this,
      observer: e
    }));
  }
  removeObserver(e) {
    R(this, Qe, p(this, Qe).filter((r) => r !== e)), this.scheduleGc(), p(this, Oe).notify({
      type: "observerRemoved",
      mutation: this,
      observer: e
    });
  }
  optionalRemove() {
    p(this, Qe).length || (this.state.status === "pending" ? this.scheduleGc() : p(this, Oe).remove(this));
  }
  continue() {
    var e;
    return ((e = p(this, nr)) == null ? void 0 : e.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(e) {
    var s, i, o, a, c, d, h, f, u, y, m, x, w, O, L, N, K, $, M, X;
    const r = () => (R(this, nr, yc({
      fn: () => this.options.mutationFn ? this.options.mutationFn(e) : Promise.reject(new Error("No mutationFn found")),
      onFail: (B, Z) => {
        Q(this, Ge, ht).call(this, { type: "failed", failureCount: B, error: Z });
      },
      onPause: () => {
        Q(this, Ge, ht).call(this, { type: "pause" });
      },
      onContinue: () => {
        Q(this, Ge, ht).call(this, { type: "continue" });
      },
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode
    })), p(this, nr).promise), n = this.state.status === "pending";
    try {
      if (!n) {
        Q(this, Ge, ht).call(this, { type: "pending", variables: e }), await ((i = (s = p(this, Oe).config).onMutate) == null ? void 0 : i.call(
          s,
          e,
          this
        ));
        const Z = await ((a = (o = this.options).onMutate) == null ? void 0 : a.call(o, e));
        Z !== this.state.context && Q(this, Ge, ht).call(this, {
          type: "pending",
          context: Z,
          variables: e
        });
      }
      const B = await r();
      return await ((d = (c = p(this, Oe).config).onSuccess) == null ? void 0 : d.call(
        c,
        B,
        e,
        this.state.context,
        this
      )), await ((f = (h = this.options).onSuccess) == null ? void 0 : f.call(h, B, e, this.state.context)), await ((y = (u = p(this, Oe).config).onSettled) == null ? void 0 : y.call(
        u,
        B,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((x = (m = this.options).onSettled) == null ? void 0 : x.call(m, B, null, e, this.state.context)), Q(this, Ge, ht).call(this, { type: "success", data: B }), B;
    } catch (B) {
      try {
        throw await ((O = (w = p(this, Oe).config).onError) == null ? void 0 : O.call(
          w,
          B,
          e,
          this.state.context,
          this
        )), await ((N = (L = this.options).onError) == null ? void 0 : N.call(
          L,
          B,
          e,
          this.state.context
        )), await (($ = (K = p(this, Oe).config).onSettled) == null ? void 0 : $.call(
          K,
          void 0,
          B,
          this.state.variables,
          this.state.context,
          this
        )), await ((X = (M = this.options).onSettled) == null ? void 0 : X.call(
          M,
          void 0,
          B,
          e,
          this.state.context
        )), B;
      } finally {
        Q(this, Ge, ht).call(this, { type: "error", error: B });
      }
    }
  }
}, Qe = new WeakMap(), Hr = new WeakMap(), Oe = new WeakMap(), nr = new WeakMap(), Ge = new WeakSet(), ht = function(e) {
  const r = (n) => {
    switch (e.type) {
      case "failed":
        return {
          ...n,
          failureCount: e.failureCount,
          failureReason: e.error
        };
      case "pause":
        return {
          ...n,
          isPaused: !0
        };
      case "continue":
        return {
          ...n,
          isPaused: !1
        };
      case "pending":
        return {
          ...n,
          context: e.context,
          data: void 0,
          failureCount: 0,
          failureReason: null,
          error: null,
          isPaused: !Ci(this.options.networkMode),
          status: "pending",
          variables: e.variables,
          submittedAt: Date.now()
        };
      case "success":
        return {
          ...n,
          data: e.data,
          failureCount: 0,
          failureReason: null,
          error: null,
          status: "success",
          isPaused: !1
        };
      case "error":
        return {
          ...n,
          data: void 0,
          error: e.error,
          failureCount: n.failureCount + 1,
          failureReason: e.error,
          isPaused: !1,
          status: "error"
        };
    }
  };
  this.state = r(this.state), ge.batch(() => {
    p(this, Qe).forEach((n) => {
      n.onMutationUpdate(e);
    }), p(this, Oe).notify({
      mutation: this,
      type: "updated",
      action: e
    });
  });
}, na);
function Hu() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0
  };
}
var Ne, Ur, Nt, sa, Uu = (sa = class extends tn {
  constructor(e = {}) {
    super();
    I(this, Ne, void 0);
    I(this, Ur, void 0);
    I(this, Nt, void 0);
    this.config = e, R(this, Ne, []), R(this, Ur, 0);
  }
  build(e, r, n) {
    const s = new Fu({
      mutationCache: this,
      mutationId: ++on(this, Ur)._,
      options: e.defaultMutationOptions(r),
      state: n
    });
    return this.add(s), s;
  }
  add(e) {
    p(this, Ne).push(e), this.notify({ type: "added", mutation: e });
  }
  remove(e) {
    R(this, Ne, p(this, Ne).filter((r) => r !== e)), this.notify({ type: "removed", mutation: e });
  }
  clear() {
    ge.batch(() => {
      p(this, Ne).forEach((e) => {
        this.remove(e);
      });
    });
  }
  getAll() {
    return p(this, Ne);
  }
  find(e) {
    const r = { exact: !0, ...e };
    return p(this, Ne).find(
      (n) => Eo(r, n)
    );
  }
  findAll(e = {}) {
    return p(this, Ne).filter(
      (r) => Eo(e, r)
    );
  }
  notify(e) {
    ge.batch(() => {
      this.listeners.forEach((r) => {
        r(e);
      });
    });
  }
  resumePausedMutations() {
    return R(this, Nt, (p(this, Nt) ?? Promise.resolve()).then(() => {
      const e = p(this, Ne).filter((r) => r.state.isPaused);
      return ge.batch(
        () => e.reduce(
          (r, n) => r.then(() => n.continue().catch(Pe)),
          Promise.resolve()
        )
      );
    }).then(() => {
      R(this, Nt, void 0);
    })), p(this, Nt);
  }
}, Ne = new WeakMap(), Ur = new WeakMap(), Nt = new WeakMap(), sa);
function qu(t) {
  return {
    onFetch: (e, r) => {
      const n = async () => {
        var m, x, w, O, L;
        const s = e.options, i = (w = (x = (m = e.fetchOptions) == null ? void 0 : m.meta) == null ? void 0 : x.fetchMore) == null ? void 0 : w.direction, o = ((O = e.state.data) == null ? void 0 : O.pages) || [], a = ((L = e.state.data) == null ? void 0 : L.pageParams) || [], c = { pages: [], pageParams: [] };
        let d = !1;
        const h = (N) => {
          Object.defineProperty(N, "signal", {
            enumerable: !0,
            get: () => (e.signal.aborted ? d = !0 : e.signal.addEventListener("abort", () => {
              d = !0;
            }), e.signal)
          });
        }, f = e.options.queryFn && e.options.queryFn !== Ir ? e.options.queryFn : () => (process.env.NODE_ENV !== "production" && e.options.queryFn === Ir && console.error(
          `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${e.options.queryHash}'`
        ), Promise.reject(
          new Error(`Missing queryFn: '${e.options.queryHash}'`)
        )), u = async (N, K, $) => {
          if (d)
            return Promise.reject();
          if (K == null && N.pages.length)
            return Promise.resolve(N);
          const M = {
            queryKey: e.queryKey,
            pageParam: K,
            direction: $ ? "backward" : "forward",
            meta: e.options.meta
          };
          h(M);
          const X = await f(
            M
          ), { maxPages: B } = e.options, Z = $ ? Nu : Lu;
          return {
            pages: Z(N.pages, X, B),
            pageParams: Z(N.pageParams, K, B)
          };
        };
        let y;
        if (i && o.length) {
          const N = i === "backward", K = N ? zu : ko, $ = {
            pages: o,
            pageParams: a
          }, M = K(s, $);
          y = await u($, M, N);
        } else {
          y = await u(
            c,
            a[0] ?? s.initialPageParam
          );
          const N = t ?? o.length;
          for (let K = 1; K < N; K++) {
            const $ = ko(s, y);
            y = await u(y, $);
          }
        }
        return y;
      };
      e.options.persister ? e.fetchFn = () => {
        var s, i;
        return (i = (s = e.options).persister) == null ? void 0 : i.call(
          s,
          n,
          {
            queryKey: e.queryKey,
            meta: e.options.meta,
            signal: e.signal
          },
          r
        );
      } : e.fetchFn = n;
    }
  };
}
function ko(t, { pages: e, pageParams: r }) {
  const n = e.length - 1;
  return t.getNextPageParam(
    e[n],
    e,
    r[n],
    r
  );
}
function zu(t, { pages: e, pageParams: r }) {
  var n;
  return (n = t.getPreviousPageParam) == null ? void 0 : n.call(
    t,
    e[0],
    e,
    r[0],
    r
  );
}
var ae, mt, bt, sr, ir, vt, or, ar, ia, Wu = (ia = class {
  constructor(t = {}) {
    I(this, ae, void 0);
    I(this, mt, void 0);
    I(this, bt, void 0);
    I(this, sr, void 0);
    I(this, ir, void 0);
    I(this, vt, void 0);
    I(this, or, void 0);
    I(this, ar, void 0);
    R(this, ae, t.queryCache || new Bu()), R(this, mt, t.mutationCache || new Uu()), R(this, bt, t.defaultOptions || {}), R(this, sr, /* @__PURE__ */ new Map()), R(this, ir, /* @__PURE__ */ new Map()), R(this, vt, 0);
  }
  mount() {
    on(this, vt)._++, p(this, vt) === 1 && (R(this, or, ki.subscribe(async (t) => {
      t && (await this.resumePausedMutations(), p(this, ae).onFocus());
    })), R(this, ar, Rn.subscribe(async (t) => {
      t && (await this.resumePausedMutations(), p(this, ae).onOnline());
    })));
  }
  unmount() {
    var t, e;
    on(this, vt)._--, p(this, vt) === 0 && ((t = p(this, or)) == null || t.call(this), R(this, or, void 0), (e = p(this, ar)) == null || e.call(this), R(this, ar, void 0));
  }
  isFetching(t) {
    return p(this, ae).findAll({ ...t, fetchStatus: "fetching" }).length;
  }
  isMutating(t) {
    return p(this, mt).findAll({ ...t, status: "pending" }).length;
  }
  getQueryData(t) {
    var r;
    const e = this.defaultQueryOptions({ queryKey: t });
    return (r = p(this, ae).get(e.queryHash)) == null ? void 0 : r.state.data;
  }
  ensureQueryData(t) {
    const e = this.getQueryData(t.queryKey);
    if (e === void 0)
      return this.fetchQuery(t);
    {
      const r = this.defaultQueryOptions(t), n = p(this, ae).build(this, r);
      return t.revalidateIfStale && n.isStaleByTime(r.staleTime) && this.prefetchQuery(r), Promise.resolve(e);
    }
  }
  getQueriesData(t) {
    return p(this, ae).findAll(t).map(({ queryKey: e, state: r }) => {
      const n = r.data;
      return [e, n];
    });
  }
  setQueryData(t, e, r) {
    const n = this.defaultQueryOptions({ queryKey: t }), s = p(this, ae).get(
      n.queryHash
    ), i = s == null ? void 0 : s.state.data, o = Au(e, i);
    if (o !== void 0)
      return p(this, ae).build(this, n).setData(o, { ...r, manual: !0 });
  }
  setQueriesData(t, e, r) {
    return ge.batch(
      () => p(this, ae).findAll(t).map(({ queryKey: n }) => [
        n,
        this.setQueryData(n, e, r)
      ])
    );
  }
  getQueryState(t) {
    var r;
    const e = this.defaultQueryOptions({ queryKey: t });
    return (r = p(this, ae).get(e.queryHash)) == null ? void 0 : r.state;
  }
  removeQueries(t) {
    const e = p(this, ae);
    ge.batch(() => {
      e.findAll(t).forEach((r) => {
        e.remove(r);
      });
    });
  }
  resetQueries(t, e) {
    const r = p(this, ae), n = {
      type: "active",
      ...t
    };
    return ge.batch(() => (r.findAll(t).forEach((s) => {
      s.reset();
    }), this.refetchQueries(n, e)));
  }
  cancelQueries(t = {}, e = {}) {
    const r = { revert: !0, ...e }, n = ge.batch(
      () => p(this, ae).findAll(t).map((s) => s.cancel(r))
    );
    return Promise.all(n).then(Pe).catch(Pe);
  }
  invalidateQueries(t = {}, e = {}) {
    return ge.batch(() => {
      if (p(this, ae).findAll(t).forEach((n) => {
        n.invalidate();
      }), t.refetchType === "none")
        return Promise.resolve();
      const r = {
        ...t,
        type: t.refetchType ?? t.type ?? "active"
      };
      return this.refetchQueries(r, e);
    });
  }
  refetchQueries(t = {}, e) {
    const r = {
      ...e,
      cancelRefetch: (e == null ? void 0 : e.cancelRefetch) ?? !0
    }, n = ge.batch(
      () => p(this, ae).findAll(t).filter((s) => !s.isDisabled()).map((s) => {
        let i = s.fetch(void 0, r);
        return r.throwOnError || (i = i.catch(Pe)), s.state.fetchStatus === "paused" ? Promise.resolve() : i;
      })
    );
    return Promise.all(n).then(Pe);
  }
  fetchQuery(t) {
    const e = this.defaultQueryOptions(t);
    e.retry === void 0 && (e.retry = !1);
    const r = p(this, ae).build(this, e);
    return r.isStaleByTime(e.staleTime) ? r.fetch(e) : Promise.resolve(r.state.data);
  }
  prefetchQuery(t) {
    return this.fetchQuery(t).then(Pe).catch(Pe);
  }
  fetchInfiniteQuery(t) {
    return t.behavior = qu(t.pages), this.fetchQuery(t);
  }
  prefetchInfiniteQuery(t) {
    return this.fetchInfiniteQuery(t).then(Pe).catch(Pe);
  }
  resumePausedMutations() {
    return Rn.isOnline() ? p(this, mt).resumePausedMutations() : Promise.resolve();
  }
  getQueryCache() {
    return p(this, ae);
  }
  getMutationCache() {
    return p(this, mt);
  }
  getDefaultOptions() {
    return p(this, bt);
  }
  setDefaultOptions(t) {
    R(this, bt, t);
  }
  setQueryDefaults(t, e) {
    p(this, sr).set(Mr(t), {
      queryKey: t,
      defaultOptions: e
    });
  }
  getQueryDefaults(t) {
    const e = [...p(this, sr).values()];
    let r = {};
    return e.forEach((n) => {
      jr(t, n.queryKey) && (r = { ...r, ...n.defaultOptions });
    }), r;
  }
  setMutationDefaults(t, e) {
    p(this, ir).set(Mr(t), {
      mutationKey: t,
      defaultOptions: e
    });
  }
  getMutationDefaults(t) {
    const e = [...p(this, ir).values()];
    let r = {};
    return e.forEach((n) => {
      jr(t, n.mutationKey) && (r = { ...r, ...n.defaultOptions });
    }), r;
  }
  defaultQueryOptions(t) {
    if (t._defaulted)
      return t;
    const e = {
      ...p(this, bt).queries,
      ...this.getQueryDefaults(t.queryKey),
      ...t,
      _defaulted: !0
    };
    return e.queryHash || (e.queryHash = Si(
      e.queryKey,
      e
    )), e.refetchOnReconnect === void 0 && (e.refetchOnReconnect = e.networkMode !== "always"), e.throwOnError === void 0 && (e.throwOnError = !!e.suspense), !e.networkMode && e.persister && (e.networkMode = "offlineFirst"), e.enabled !== !0 && e.queryFn === Ir && (e.enabled = !1), e;
  }
  defaultMutationOptions(t) {
    return t != null && t._defaulted ? t : {
      ...p(this, bt).mutations,
      ...(t == null ? void 0 : t.mutationKey) && this.getMutationDefaults(t.mutationKey),
      ...t,
      _defaulted: !0
    };
  }
  clear() {
    p(this, ae).clear(), p(this, mt).clear();
  }
}, ae = new WeakMap(), mt = new WeakMap(), bt = new WeakMap(), sr = new WeakMap(), ir = new WeakMap(), vt = new WeakMap(), or = new WeakMap(), ar = new WeakMap(), ia), Se, ne, qr, Ee, Pt, cr, Ye, zr, lr, ur, $t, Mt, wt, hr, jt, Cr, Wr, Ws, Kr, Ks, Vr, Vs, Qr, Qs, Gr, Gs, Yr, Ys, Jr, Js, as, bc, oa, Ku = (oa = class extends tn {
  constructor(e, r) {
    super();
    I(this, jt);
    I(this, Wr);
    I(this, Kr);
    I(this, Vr);
    I(this, Qr);
    I(this, Gr);
    I(this, Yr);
    I(this, Jr);
    I(this, as);
    I(this, Se, void 0);
    I(this, ne, void 0);
    I(this, qr, void 0);
    I(this, Ee, void 0);
    I(this, Pt, void 0);
    I(this, cr, void 0);
    I(this, Ye, void 0);
    I(this, zr, void 0);
    I(this, lr, void 0);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    I(this, ur, void 0);
    I(this, $t, void 0);
    I(this, Mt, void 0);
    I(this, wt, void 0);
    I(this, hr, /* @__PURE__ */ new Set());
    this.options = r, R(this, Se, e), R(this, Ye, null), this.bindMethods(), this.setOptions(r);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (p(this, ne).addObserver(this), Co(p(this, ne), this.options) ? Q(this, jt, Cr).call(this) : this.updateResult(), Q(this, Qr, Qs).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Xs(
      p(this, ne),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return Xs(
      p(this, ne),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), Q(this, Gr, Gs).call(this), Q(this, Yr, Ys).call(this), p(this, ne).removeObserver(this);
  }
  setOptions(e, r) {
    const n = this.options, s = p(this, ne);
    if (this.options = p(this, Se).defaultQueryOptions(e), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean")
      throw new Error("Expected enabled to be a boolean");
    Q(this, Jr, Js).call(this), p(this, ne).setOptions(this.options), n._defaulted && !Us(this.options, n) && p(this, Se).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: p(this, ne),
      observer: this
    });
    const i = this.hasListeners();
    i && Oo(
      p(this, ne),
      s,
      this.options,
      n
    ) && Q(this, jt, Cr).call(this), this.updateResult(r), i && (p(this, ne) !== s || this.options.enabled !== n.enabled || this.options.staleTime !== n.staleTime) && Q(this, Wr, Ws).call(this);
    const o = Q(this, Kr, Ks).call(this);
    i && (p(this, ne) !== s || this.options.enabled !== n.enabled || o !== p(this, wt)) && Q(this, Vr, Vs).call(this, o);
  }
  getOptimisticResult(e) {
    const r = p(this, Se).getQueryCache().build(p(this, Se), e), n = this.createResult(r, e);
    return Qu(this, n) && (R(this, Ee, n), R(this, cr, this.options), R(this, Pt, p(this, ne).state)), n;
  }
  getCurrentResult() {
    return p(this, Ee);
  }
  trackResult(e, r) {
    const n = {};
    return Object.keys(e).forEach((s) => {
      Object.defineProperty(n, s, {
        configurable: !1,
        enumerable: !0,
        get: () => (this.trackProp(s), r == null || r(s), e[s])
      });
    }), n;
  }
  trackProp(e) {
    p(this, hr).add(e);
  }
  getCurrentQuery() {
    return p(this, ne);
  }
  refetch({ ...e } = {}) {
    return this.fetch({
      ...e
    });
  }
  fetchOptimistic(e) {
    const r = p(this, Se).defaultQueryOptions(e), n = p(this, Se).getQueryCache().build(p(this, Se), r);
    return n.isFetchingOptimistic = !0, n.fetch().then(() => this.createResult(n, r));
  }
  fetch(e) {
    return Q(this, jt, Cr).call(this, {
      ...e,
      cancelRefetch: e.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), p(this, Ee)));
  }
  createResult(e, r) {
    var X;
    const n = p(this, ne), s = this.options, i = p(this, Ee), o = p(this, Pt), a = p(this, cr), d = e !== n ? e.state : p(this, qr), { state: h } = e;
    let f = { ...h }, u = !1, y;
    if (r._optimisticResults) {
      const B = this.hasListeners(), Z = !B && Co(e, r), Y = B && Oo(e, n, r, s);
      (Z || Y) && (f = {
        ...f,
        ...mc(h.data, e.options)
      }), r._optimisticResults === "isRestoring" && (f.fetchStatus = "idle");
    }
    let { error: m, errorUpdatedAt: x, status: w } = f;
    if (r.select && f.data !== void 0)
      if (i && f.data === (o == null ? void 0 : o.data) && r.select === p(this, zr))
        y = p(this, lr);
      else
        try {
          R(this, zr, r.select), y = r.select(f.data), y = zs(i == null ? void 0 : i.data, y, r), R(this, lr, y), R(this, Ye, null);
        } catch (B) {
          R(this, Ye, B);
        }
    else
      y = f.data;
    if (r.placeholderData !== void 0 && y === void 0 && w === "pending") {
      let B;
      if (i != null && i.isPlaceholderData && r.placeholderData === (a == null ? void 0 : a.placeholderData))
        B = i.data;
      else if (B = typeof r.placeholderData == "function" ? r.placeholderData(
        (X = p(this, ur)) == null ? void 0 : X.state.data,
        p(this, ur)
      ) : r.placeholderData, r.select && B !== void 0)
        try {
          B = r.select(B), R(this, Ye, null);
        } catch (Z) {
          R(this, Ye, Z);
        }
      B !== void 0 && (w = "success", y = zs(
        i == null ? void 0 : i.data,
        B,
        r
      ), u = !0);
    }
    p(this, Ye) && (m = p(this, Ye), y = p(this, lr), x = Date.now(), w = "error");
    const O = f.fetchStatus === "fetching", L = w === "pending", N = w === "error", K = L && O, $ = y !== void 0;
    return {
      status: w,
      fetchStatus: f.fetchStatus,
      isPending: L,
      isSuccess: w === "success",
      isError: N,
      isInitialLoading: K,
      isLoading: K,
      data: y,
      dataUpdatedAt: f.dataUpdatedAt,
      error: m,
      errorUpdatedAt: x,
      failureCount: f.fetchFailureCount,
      failureReason: f.fetchFailureReason,
      errorUpdateCount: f.errorUpdateCount,
      isFetched: f.dataUpdateCount > 0 || f.errorUpdateCount > 0,
      isFetchedAfterMount: f.dataUpdateCount > d.dataUpdateCount || f.errorUpdateCount > d.errorUpdateCount,
      isFetching: O,
      isRefetching: O && !L,
      isLoadingError: N && !$,
      isPaused: f.fetchStatus === "paused",
      isPlaceholderData: u,
      isRefetchError: N && $,
      isStale: Oi(e, r),
      refetch: this.refetch
    };
  }
  updateResult(e) {
    const r = p(this, Ee), n = this.createResult(p(this, ne), this.options);
    if (R(this, Pt, p(this, ne).state), R(this, cr, this.options), p(this, Pt).data !== void 0 && R(this, ur, p(this, ne)), Us(n, r))
      return;
    R(this, Ee, n);
    const s = {}, i = () => {
      if (!r)
        return !0;
      const { notifyOnChangeProps: o } = this.options, a = typeof o == "function" ? o() : o;
      if (a === "all" || !a && !p(this, hr).size)
        return !0;
      const c = new Set(
        a ?? p(this, hr)
      );
      return this.options.throwOnError && c.add("error"), Object.keys(p(this, Ee)).some((d) => {
        const h = d;
        return p(this, Ee)[h] !== r[h] && c.has(h);
      });
    };
    (e == null ? void 0 : e.listeners) !== !1 && i() && (s.listeners = !0), Q(this, as, bc).call(this, { ...s, ...e });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && Q(this, Qr, Qs).call(this);
  }
}, Se = new WeakMap(), ne = new WeakMap(), qr = new WeakMap(), Ee = new WeakMap(), Pt = new WeakMap(), cr = new WeakMap(), Ye = new WeakMap(), zr = new WeakMap(), lr = new WeakMap(), ur = new WeakMap(), $t = new WeakMap(), Mt = new WeakMap(), wt = new WeakMap(), hr = new WeakMap(), jt = new WeakSet(), Cr = function(e) {
  Q(this, Jr, Js).call(this);
  let r = p(this, ne).fetch(
    this.options,
    e
  );
  return e != null && e.throwOnError || (r = r.catch(Pe)), r;
}, Wr = new WeakSet(), Ws = function() {
  if (Q(this, Gr, Gs).call(this), fr || p(this, Ee).isStale || !Hs(this.options.staleTime))
    return;
  const r = fc(
    p(this, Ee).dataUpdatedAt,
    this.options.staleTime
  ) + 1;
  R(this, $t, setTimeout(() => {
    p(this, Ee).isStale || this.updateResult();
  }, r));
}, Kr = new WeakSet(), Ks = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(p(this, ne)) : this.options.refetchInterval) ?? !1;
}, Vr = new WeakSet(), Vs = function(e) {
  Q(this, Yr, Ys).call(this), R(this, wt, e), !(fr || this.options.enabled === !1 || !Hs(p(this, wt)) || p(this, wt) === 0) && R(this, Mt, setInterval(() => {
    (this.options.refetchIntervalInBackground || ki.isFocused()) && Q(this, jt, Cr).call(this);
  }, p(this, wt)));
}, Qr = new WeakSet(), Qs = function() {
  Q(this, Wr, Ws).call(this), Q(this, Vr, Vs).call(this, Q(this, Kr, Ks).call(this));
}, Gr = new WeakSet(), Gs = function() {
  p(this, $t) && (clearTimeout(p(this, $t)), R(this, $t, void 0));
}, Yr = new WeakSet(), Ys = function() {
  p(this, Mt) && (clearInterval(p(this, Mt)), R(this, Mt, void 0));
}, Jr = new WeakSet(), Js = function() {
  const e = p(this, Se).getQueryCache().build(p(this, Se), this.options);
  if (e === p(this, ne))
    return;
  const r = p(this, ne);
  R(this, ne, e), R(this, qr, e.state), this.hasListeners() && (r == null || r.removeObserver(this), e.addObserver(this));
}, as = new WeakSet(), bc = function(e) {
  ge.batch(() => {
    e.listeners && this.listeners.forEach((r) => {
      r(p(this, Ee));
    }), p(this, Se).getQueryCache().notify({
      query: p(this, ne),
      type: "observerResultsUpdated"
    });
  });
}, oa);
function Vu(t, e) {
  return e.enabled !== !1 && t.state.data === void 0 && !(t.state.status === "error" && e.retryOnMount === !1);
}
function Co(t, e) {
  return Vu(t, e) || t.state.data !== void 0 && Xs(t, e, e.refetchOnMount);
}
function Xs(t, e, r) {
  if (e.enabled !== !1) {
    const n = typeof r == "function" ? r(t) : r;
    return n === "always" || n !== !1 && Oi(t, e);
  }
  return !1;
}
function Oo(t, e, r, n) {
  return (t !== e || n.enabled === !1) && (!r.suspense || t.state.status !== "error") && Oi(t, r);
}
function Oi(t, e) {
  return e.enabled !== !1 && t.isStaleByTime(e.staleTime);
}
function Qu(t, e) {
  return !Us(t.getCurrentResult(), e);
}
var vc = oe.createContext(
  void 0
), wc = (t) => {
  const e = oe.useContext(vc);
  if (t)
    return t;
  if (!e)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return e;
}, Gu = ({
  client: t,
  children: e
}) => (oe.useEffect(() => (t.mount(), () => {
  t.unmount();
}), [t]), /* @__PURE__ */ A.jsx(vc.Provider, { value: t, children: e })), Ec = oe.createContext(!1), Yu = () => oe.useContext(Ec);
Ec.Provider;
function Ju() {
  let t = !1;
  return {
    clearReset: () => {
      t = !1;
    },
    reset: () => {
      t = !0;
    },
    isReset: () => t
  };
}
var Xu = oe.createContext(Ju()), Zu = () => oe.useContext(Xu);
function eh(t, e) {
  return typeof t == "function" ? t(...e) : !!t;
}
var th = (t, e) => {
  (t.suspense || t.throwOnError) && (e.isReset() || (t.retryOnMount = !1));
}, rh = (t) => {
  oe.useEffect(() => {
    t.clearReset();
  }, [t]);
}, nh = ({
  result: t,
  errorResetBoundary: e,
  throwOnError: r,
  query: n
}) => t.isError && !e.isReset() && !t.isFetching && n && eh(r, [t.error, n]), sh = (t) => {
  t.suspense && typeof t.staleTime != "number" && (t.staleTime = 1e3);
}, ih = (t, e) => (t == null ? void 0 : t.suspense) && e.isPending, oh = (t, e, r) => e.fetchOptimistic(t).catch(() => {
  r.clearReset();
});
function ah(t, e, r) {
  if (process.env.NODE_ENV !== "production" && (typeof t != "object" || Array.isArray(t)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const n = wc(r), s = Yu(), i = Zu(), o = n.defaultQueryOptions(t);
  o._optimisticResults = s ? "isRestoring" : "optimistic", sh(o), th(o, i), rh(i);
  const [a] = oe.useState(
    () => new e(
      n,
      o
    )
  ), c = a.getOptimisticResult(o);
  if (oe.useSyncExternalStore(
    oe.useCallback(
      (d) => {
        const h = s ? () => {
        } : a.subscribe(ge.batchCalls(d));
        return a.updateResult(), h;
      },
      [a, s]
    ),
    () => a.getCurrentResult(),
    () => a.getCurrentResult()
  ), oe.useEffect(() => {
    a.setOptions(o, { listeners: !1 });
  }, [o, a]), ih(o, c))
    throw oh(o, a, i);
  if (nh({
    result: c,
    errorResetBoundary: i,
    throwOnError: o.throwOnError,
    query: n.getQueryCache().get(o.queryHash)
  }))
    throw c.error;
  return o.notifyOnChangeProps ? c : a.trackResult(c);
}
function _o(t, e) {
  return ah(t, Ku, e);
}
const Ze = /* @__PURE__ */ Object.create(null);
Ze.open = "0";
Ze.close = "1";
Ze.ping = "2";
Ze.pong = "3";
Ze.message = "4";
Ze.upgrade = "5";
Ze.noop = "6";
const En = /* @__PURE__ */ Object.create(null);
Object.keys(Ze).forEach((t) => {
  En[Ze[t]] = t;
});
const Zs = { type: "error", data: "parser error" }, xc = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Sc = typeof ArrayBuffer == "function", kc = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer, _i = ({ type: t, data: e }, r, n) => xc && e instanceof Blob ? r ? n(e) : To(e, n) : Sc && (e instanceof ArrayBuffer || kc(e)) ? r ? n(e) : To(new Blob([e]), n) : n(Ze[t] + (e || "")), To = (t, e) => {
  const r = new FileReader();
  return r.onload = function() {
    const n = r.result.split(",")[1];
    e("b" + (n || ""));
  }, r.readAsDataURL(t);
};
function Ao(t) {
  return t instanceof Uint8Array ? t : t instanceof ArrayBuffer ? new Uint8Array(t) : new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
}
let Ts;
function ch(t, e) {
  if (xc && t.data instanceof Blob)
    return t.data.arrayBuffer().then(Ao).then(e);
  if (Sc && (t.data instanceof ArrayBuffer || kc(t.data)))
    return e(Ao(t.data));
  _i(t, !1, (r) => {
    Ts || (Ts = new TextEncoder()), e(Ts.encode(r));
  });
}
const Ro = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Or = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let t = 0; t < Ro.length; t++)
  Or[Ro.charCodeAt(t)] = t;
const lh = (t) => {
  let e = t.length * 0.75, r = t.length, n, s = 0, i, o, a, c;
  t[t.length - 1] === "=" && (e--, t[t.length - 2] === "=" && e--);
  const d = new ArrayBuffer(e), h = new Uint8Array(d);
  for (n = 0; n < r; n += 4)
    i = Or[t.charCodeAt(n)], o = Or[t.charCodeAt(n + 1)], a = Or[t.charCodeAt(n + 2)], c = Or[t.charCodeAt(n + 3)], h[s++] = i << 2 | o >> 4, h[s++] = (o & 15) << 4 | a >> 2, h[s++] = (a & 3) << 6 | c & 63;
  return d;
}, uh = typeof ArrayBuffer == "function", Ti = (t, e) => {
  if (typeof t != "string")
    return {
      type: "message",
      data: Cc(t, e)
    };
  const r = t.charAt(0);
  return r === "b" ? {
    type: "message",
    data: hh(t.substring(1), e)
  } : En[r] ? t.length > 1 ? {
    type: En[r],
    data: t.substring(1)
  } : {
    type: En[r]
  } : Zs;
}, hh = (t, e) => {
  if (uh) {
    const r = lh(t);
    return Cc(r, e);
  } else
    return { base64: !0, data: t };
}, Cc = (t, e) => {
  switch (e) {
    case "blob":
      return t instanceof Blob ? t : new Blob([t]);
    case "arraybuffer":
    default:
      return t instanceof ArrayBuffer ? t : t.buffer;
  }
}, Oc = "", fh = (t, e) => {
  const r = t.length, n = new Array(r);
  let s = 0;
  t.forEach((i, o) => {
    _i(i, !1, (a) => {
      n[o] = a, ++s === r && e(n.join(Oc));
    });
  });
}, dh = (t, e) => {
  const r = t.split(Oc), n = [];
  for (let s = 0; s < r.length; s++) {
    const i = Ti(r[s], e);
    if (n.push(i), i.type === "error")
      break;
  }
  return n;
};
function ph() {
  return new TransformStream({
    transform(t, e) {
      ch(t, (r) => {
        const n = r.length;
        let s;
        if (n < 126)
          s = new Uint8Array(1), new DataView(s.buffer).setUint8(0, n);
        else if (n < 65536) {
          s = new Uint8Array(3);
          const i = new DataView(s.buffer);
          i.setUint8(0, 126), i.setUint16(1, n);
        } else {
          s = new Uint8Array(9);
          const i = new DataView(s.buffer);
          i.setUint8(0, 127), i.setBigUint64(1, BigInt(n));
        }
        t.data && typeof t.data != "string" && (s[0] |= 128), e.enqueue(s), e.enqueue(r);
      });
    }
  });
}
let As;
function ln(t) {
  return t.reduce((e, r) => e + r.length, 0);
}
function un(t, e) {
  if (t[0].length === e)
    return t.shift();
  const r = new Uint8Array(e);
  let n = 0;
  for (let s = 0; s < e; s++)
    r[s] = t[0][n++], n === t[0].length && (t.shift(), n = 0);
  return t.length && n < t[0].length && (t[0] = t[0].slice(n)), r;
}
function yh(t, e) {
  As || (As = new TextDecoder());
  const r = [];
  let n = 0, s = -1, i = !1;
  return new TransformStream({
    transform(o, a) {
      for (r.push(o); ; ) {
        if (n === 0) {
          if (ln(r) < 1)
            break;
          const c = un(r, 1);
          i = (c[0] & 128) === 128, s = c[0] & 127, s < 126 ? n = 3 : s === 126 ? n = 1 : n = 2;
        } else if (n === 1) {
          if (ln(r) < 2)
            break;
          const c = un(r, 2);
          s = new DataView(c.buffer, c.byteOffset, c.length).getUint16(0), n = 3;
        } else if (n === 2) {
          if (ln(r) < 8)
            break;
          const c = un(r, 8), d = new DataView(c.buffer, c.byteOffset, c.length), h = d.getUint32(0);
          if (h > Math.pow(2, 21) - 1) {
            a.enqueue(Zs);
            break;
          }
          s = h * Math.pow(2, 32) + d.getUint32(4), n = 3;
        } else {
          if (ln(r) < s)
            break;
          const c = un(r, s);
          a.enqueue(Ti(i ? c : As.decode(c), e)), n = 0;
        }
        if (s === 0 || s > t) {
          a.enqueue(Zs);
          break;
        }
      }
    }
  });
}
const _c = 4;
function he(t) {
  if (t)
    return gh(t);
}
function gh(t) {
  for (var e in he.prototype)
    t[e] = he.prototype[e];
  return t;
}
he.prototype.on = he.prototype.addEventListener = function(t, e) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this;
};
he.prototype.once = function(t, e) {
  function r() {
    this.off(t, r), e.apply(this, arguments);
  }
  return r.fn = e, this.on(t, r), this;
};
he.prototype.off = he.prototype.removeListener = he.prototype.removeAllListeners = he.prototype.removeEventListener = function(t, e) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var r = this._callbacks["$" + t];
  if (!r)
    return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + t], this;
  for (var n, s = 0; s < r.length; s++)
    if (n = r[s], n === e || n.fn === e) {
      r.splice(s, 1);
      break;
    }
  return r.length === 0 && delete this._callbacks["$" + t], this;
};
he.prototype.emit = function(t) {
  this._callbacks = this._callbacks || {};
  for (var e = new Array(arguments.length - 1), r = this._callbacks["$" + t], n = 1; n < arguments.length; n++)
    e[n - 1] = arguments[n];
  if (r) {
    r = r.slice(0);
    for (var n = 0, s = r.length; n < s; ++n)
      r[n].apply(this, e);
  }
  return this;
};
he.prototype.emitReserved = he.prototype.emit;
he.prototype.listeners = function(t) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];
};
he.prototype.hasListeners = function(t) {
  return !!this.listeners(t).length;
};
const $e = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
function Tc(t, ...e) {
  return e.reduce((r, n) => (t.hasOwnProperty(n) && (r[n] = t[n]), r), {});
}
const mh = $e.setTimeout, bh = $e.clearTimeout;
function ps(t, e) {
  e.useNativeTimers ? (t.setTimeoutFn = mh.bind($e), t.clearTimeoutFn = bh.bind($e)) : (t.setTimeoutFn = $e.setTimeout.bind($e), t.clearTimeoutFn = $e.clearTimeout.bind($e));
}
const vh = 1.33;
function wh(t) {
  return typeof t == "string" ? Eh(t) : Math.ceil((t.byteLength || t.size) * vh);
}
function Eh(t) {
  let e = 0, r = 0;
  for (let n = 0, s = t.length; n < s; n++)
    e = t.charCodeAt(n), e < 128 ? r += 1 : e < 2048 ? r += 2 : e < 55296 || e >= 57344 ? r += 3 : (n++, r += 4);
  return r;
}
function xh(t) {
  let e = "";
  for (let r in t)
    t.hasOwnProperty(r) && (e.length && (e += "&"), e += encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));
  return e;
}
function Sh(t) {
  let e = {}, r = t.split("&");
  for (let n = 0, s = r.length; n < s; n++) {
    let i = r[n].split("=");
    e[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
  }
  return e;
}
class kh extends Error {
  constructor(e, r, n) {
    super(e), this.description = r, this.context = n, this.type = "TransportError";
  }
}
class Ai extends he {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(e) {
    super(), this.writable = !1, ps(this, e), this.opts = e, this.query = e.query, this.socket = e.socket;
  }
  /**
   * Emits an error.
   *
   * @param {String} reason
   * @param description
   * @param context - the error context
   * @return {Transport} for chaining
   * @protected
   */
  onError(e, r, n) {
    return super.emitReserved("error", new kh(e, r, n)), this;
  }
  /**
   * Opens the transport.
   */
  open() {
    return this.readyState = "opening", this.doOpen(), this;
  }
  /**
   * Closes the transport.
   */
  close() {
    return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this;
  }
  /**
   * Sends multiple packets.
   *
   * @param {Array} packets
   */
  send(e) {
    this.readyState === "open" && this.write(e);
  }
  /**
   * Called upon open
   *
   * @protected
   */
  onOpen() {
    this.readyState = "open", this.writable = !0, super.emitReserved("open");
  }
  /**
   * Called with data.
   *
   * @param {String} data
   * @protected
   */
  onData(e) {
    const r = Ti(e, this.socket.binaryType);
    this.onPacket(r);
  }
  /**
   * Called with a decoded packet.
   *
   * @protected
   */
  onPacket(e) {
    super.emitReserved("packet", e);
  }
  /**
   * Called upon close.
   *
   * @protected
   */
  onClose(e) {
    this.readyState = "closed", super.emitReserved("close", e);
  }
  /**
   * Pauses the transport, in order not to lose packets during an upgrade.
   *
   * @param onPause
   */
  pause(e) {
  }
  createUri(e, r = {}) {
    return e + "://" + this._hostname() + this._port() + this.opts.path + this._query(r);
  }
  _hostname() {
    const e = this.opts.hostname;
    return e.indexOf(":") === -1 ? e : "[" + e + "]";
  }
  _port() {
    return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : "";
  }
  _query(e) {
    const r = xh(e);
    return r.length ? "?" + r : "";
  }
}
const Ac = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), ei = 64, Ch = {};
let Lo = 0, hn = 0, No;
function Po(t) {
  let e = "";
  do
    e = Ac[t % ei] + e, t = Math.floor(t / ei);
  while (t > 0);
  return e;
}
function Rc() {
  const t = Po(+/* @__PURE__ */ new Date());
  return t !== No ? (Lo = 0, No = t) : t + "." + Po(Lo++);
}
for (; hn < ei; hn++)
  Ch[Ac[hn]] = hn;
let Lc = !1;
try {
  Lc = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const Oh = Lc;
function Nc(t) {
  const e = t.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!e || Oh))
      return new XMLHttpRequest();
  } catch {
  }
  if (!e)
    try {
      return new $e[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
function _h() {
}
const Th = function() {
  return new Nc({
    xdomain: !1
  }).responseType != null;
}();
class Ah extends Ai {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(e) {
    if (super(e), this.polling = !1, typeof location < "u") {
      const n = location.protocol === "https:";
      let s = location.port;
      s || (s = n ? "443" : "80"), this.xd = typeof location < "u" && e.hostname !== location.hostname || s !== e.port;
    }
    const r = e && e.forceBase64;
    this.supportsBinary = Th && !r, this.opts.withCredentials && (this.cookieJar = void 0);
  }
  get name() {
    return "polling";
  }
  /**
   * Opens the socket (triggers polling). We write a PING message to determine
   * when the transport is open.
   *
   * @protected
   */
  doOpen() {
    this.poll();
  }
  /**
   * Pauses polling.
   *
   * @param {Function} onPause - callback upon buffers are flushed and transport is paused
   * @package
   */
  pause(e) {
    this.readyState = "pausing";
    const r = () => {
      this.readyState = "paused", e();
    };
    if (this.polling || !this.writable) {
      let n = 0;
      this.polling && (n++, this.once("pollComplete", function() {
        --n || r();
      })), this.writable || (n++, this.once("drain", function() {
        --n || r();
      }));
    } else
      r();
  }
  /**
   * Starts polling cycle.
   *
   * @private
   */
  poll() {
    this.polling = !0, this.doPoll(), this.emitReserved("poll");
  }
  /**
   * Overloads onData to detect payloads.
   *
   * @protected
   */
  onData(e) {
    const r = (n) => {
      if (this.readyState === "opening" && n.type === "open" && this.onOpen(), n.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(n);
    };
    dh(e, this.socket.binaryType).forEach(r), this.readyState !== "closed" && (this.polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this.poll());
  }
  /**
   * For polling, send a close packet.
   *
   * @protected
   */
  doClose() {
    const e = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? e() : this.once("open", e);
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} packets - data packets
   * @protected
   */
  write(e) {
    this.writable = !1, fh(e, (r) => {
      this.doWrite(r, () => {
        this.writable = !0, this.emitReserved("drain");
      });
    });
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const e = this.opts.secure ? "https" : "http", r = this.query || {};
    return this.opts.timestampRequests !== !1 && (r[this.opts.timestampParam] = Rc()), !this.supportsBinary && !r.sid && (r.b64 = 1), this.createUri(e, r);
  }
  /**
   * Creates a request.
   *
   * @param {String} method
   * @private
   */
  request(e = {}) {
    return Object.assign(e, { xd: this.xd, cookieJar: this.cookieJar }, this.opts), new Xe(this.uri(), e);
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(e, r) {
    const n = this.request({
      method: "POST",
      data: e
    });
    n.on("success", r), n.on("error", (s, i) => {
      this.onError("xhr post error", s, i);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const e = this.request();
    e.on("data", this.onData.bind(this)), e.on("error", (r, n) => {
      this.onError("xhr poll error", r, n);
    }), this.pollXhr = e;
  }
}
class Xe extends he {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(e, r) {
    super(), ps(this, r), this.opts = r, this.method = r.method || "GET", this.uri = e, this.data = r.data !== void 0 ? r.data : null, this.create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  create() {
    var e;
    const r = Tc(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    r.xdomain = !!this.opts.xd;
    const n = this.xhr = new Nc(r);
    try {
      n.open(this.method, this.uri, !0);
      try {
        if (this.opts.extraHeaders) {
          n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0);
          for (let s in this.opts.extraHeaders)
            this.opts.extraHeaders.hasOwnProperty(s) && n.setRequestHeader(s, this.opts.extraHeaders[s]);
        }
      } catch {
      }
      if (this.method === "POST")
        try {
          n.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {
        }
      try {
        n.setRequestHeader("Accept", "*/*");
      } catch {
      }
      (e = this.opts.cookieJar) === null || e === void 0 || e.addCookies(n), "withCredentials" in n && (n.withCredentials = this.opts.withCredentials), this.opts.requestTimeout && (n.timeout = this.opts.requestTimeout), n.onreadystatechange = () => {
        var s;
        n.readyState === 3 && ((s = this.opts.cookieJar) === null || s === void 0 || s.parseCookies(n)), n.readyState === 4 && (n.status === 200 || n.status === 1223 ? this.onLoad() : this.setTimeoutFn(() => {
          this.onError(typeof n.status == "number" ? n.status : 0);
        }, 0));
      }, n.send(this.data);
    } catch (s) {
      this.setTimeoutFn(() => {
        this.onError(s);
      }, 0);
      return;
    }
    typeof document < "u" && (this.index = Xe.requestsCount++, Xe.requests[this.index] = this);
  }
  /**
   * Called upon error.
   *
   * @private
   */
  onError(e) {
    this.emitReserved("error", e, this.xhr), this.cleanup(!0);
  }
  /**
   * Cleans up house.
   *
   * @private
   */
  cleanup(e) {
    if (!(typeof this.xhr > "u" || this.xhr === null)) {
      if (this.xhr.onreadystatechange = _h, e)
        try {
          this.xhr.abort();
        } catch {
        }
      typeof document < "u" && delete Xe.requests[this.index], this.xhr = null;
    }
  }
  /**
   * Called upon load.
   *
   * @private
   */
  onLoad() {
    const e = this.xhr.responseText;
    e !== null && (this.emitReserved("data", e), this.emitReserved("success"), this.cleanup());
  }
  /**
   * Aborts the request.
   *
   * @package
   */
  abort() {
    this.cleanup();
  }
}
Xe.requestsCount = 0;
Xe.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", $o);
  else if (typeof addEventListener == "function") {
    const t = "onpagehide" in $e ? "pagehide" : "unload";
    addEventListener(t, $o, !1);
  }
}
function $o() {
  for (let t in Xe.requests)
    Xe.requests.hasOwnProperty(t) && Xe.requests[t].abort();
}
const Ri = typeof Promise == "function" && typeof Promise.resolve == "function" ? (e) => Promise.resolve().then(e) : (e, r) => r(e, 0), fn = $e.WebSocket || $e.MozWebSocket, Mo = !0, Rh = "arraybuffer", jo = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
let Lh = class extends Ai {
  /**
   * WebSocket transport constructor.
   *
   * @param {Object} opts - connection options
   * @protected
   */
  constructor(e) {
    super(e), this.supportsBinary = !e.forceBase64;
  }
  get name() {
    return "websocket";
  }
  doOpen() {
    if (!this.check())
      return;
    const e = this.uri(), r = this.opts.protocols, n = jo ? {} : Tc(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
    try {
      this.ws = Mo && !jo ? r ? new fn(e, r) : new fn(e) : new fn(e, r, n);
    } catch (s) {
      return this.emitReserved("error", s);
    }
    this.ws.binaryType = this.socket.binaryType, this.addEventListeners();
  }
  /**
   * Adds event listeners to the socket
   *
   * @private
   */
  addEventListeners() {
    this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }, this.ws.onclose = (e) => this.onClose({
      description: "websocket connection closed",
      context: e
    }), this.ws.onmessage = (e) => this.onData(e.data), this.ws.onerror = (e) => this.onError("websocket error", e);
  }
  write(e) {
    this.writable = !1;
    for (let r = 0; r < e.length; r++) {
      const n = e[r], s = r === e.length - 1;
      _i(n, this.supportsBinary, (i) => {
        const o = {};
        try {
          Mo && this.ws.send(i);
        } catch {
        }
        s && Ri(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    typeof this.ws < "u" && (this.ws.close(), this.ws = null);
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const e = this.opts.secure ? "wss" : "ws", r = this.query || {};
    return this.opts.timestampRequests && (r[this.opts.timestampParam] = Rc()), this.supportsBinary || (r.b64 = 1), this.createUri(e, r);
  }
  /**
   * Feature detection for WebSocket.
   *
   * @return {Boolean} whether this transport is available.
   * @private
   */
  check() {
    return !!fn;
  }
};
class Nh extends Ai {
  get name() {
    return "webtransport";
  }
  doOpen() {
    typeof WebTransport == "function" && (this.transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]), this.transport.closed.then(() => {
      this.onClose();
    }).catch((e) => {
      this.onError("webtransport error", e);
    }), this.transport.ready.then(() => {
      this.transport.createBidirectionalStream().then((e) => {
        const r = yh(Number.MAX_SAFE_INTEGER, this.socket.binaryType), n = e.readable.pipeThrough(r).getReader(), s = ph();
        s.readable.pipeTo(e.writable), this.writer = s.writable.getWriter();
        const i = () => {
          n.read().then(({ done: a, value: c }) => {
            a || (this.onPacket(c), i());
          }).catch((a) => {
          });
        };
        i();
        const o = { type: "open" };
        this.query.sid && (o.data = `{"sid":"${this.query.sid}"}`), this.writer.write(o).then(() => this.onOpen());
      });
    }));
  }
  write(e) {
    this.writable = !1;
    for (let r = 0; r < e.length; r++) {
      const n = e[r], s = r === e.length - 1;
      this.writer.write(n).then(() => {
        s && Ri(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var e;
    (e = this.transport) === null || e === void 0 || e.close();
  }
}
const Ph = {
  websocket: Lh,
  webtransport: Nh,
  polling: Ah
}, $h = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, Mh = [
  "source",
  "protocol",
  "authority",
  "userInfo",
  "user",
  "password",
  "host",
  "port",
  "relative",
  "path",
  "directory",
  "file",
  "query",
  "anchor"
];
function ti(t) {
  if (t.length > 2e3)
    throw "URI too long";
  const e = t, r = t.indexOf("["), n = t.indexOf("]");
  r != -1 && n != -1 && (t = t.substring(0, r) + t.substring(r, n).replace(/:/g, ";") + t.substring(n, t.length));
  let s = $h.exec(t || ""), i = {}, o = 14;
  for (; o--; )
    i[Mh[o]] = s[o] || "";
  return r != -1 && n != -1 && (i.source = e, i.host = i.host.substring(1, i.host.length - 1).replace(/;/g, ":"), i.authority = i.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), i.ipv6uri = !0), i.pathNames = jh(i, i.path), i.queryKey = Ih(i, i.query), i;
}
function jh(t, e) {
  const r = /\/{2,9}/g, n = e.replace(r, "/").split("/");
  return (e.slice(0, 1) == "/" || e.length === 0) && n.splice(0, 1), e.slice(-1) == "/" && n.splice(n.length - 1, 1), n;
}
function Ih(t, e) {
  const r = {};
  return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(n, s, i) {
    s && (r[s] = i);
  }), r;
}
let Pc = class Qt extends he {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(e, r = {}) {
    super(), this.binaryType = Rh, this.writeBuffer = [], e && typeof e == "object" && (r = e, e = null), e ? (e = ti(e), r.hostname = e.host, r.secure = e.protocol === "https" || e.protocol === "wss", r.port = e.port, e.query && (r.query = e.query)) : r.host && (r.hostname = ti(r.host).host), ps(this, r), this.secure = r.secure != null ? r.secure : typeof location < "u" && location.protocol === "https:", r.hostname && !r.port && (r.port = this.secure ? "443" : "80"), this.hostname = r.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = r.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = r.transports || [
      "polling",
      "websocket",
      "webtransport"
    ], this.writeBuffer = [], this.prevBufferLen = 0, this.opts = Object.assign({
      path: "/engine.io",
      agent: !1,
      withCredentials: !1,
      upgrade: !0,
      timestampParam: "t",
      rememberUpgrade: !1,
      addTrailingSlash: !0,
      rejectUnauthorized: !0,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: !1
    }, r), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = Sh(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, typeof addEventListener == "function" && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this.beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this.offlineEventListener = () => {
      this.onClose("transport close", {
        description: "network connection lost"
      });
    }, addEventListener("offline", this.offlineEventListener, !1))), this.open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(e) {
    const r = Object.assign({}, this.opts.query);
    r.EIO = _c, r.transport = e, this.id && (r.sid = this.id);
    const n = Object.assign({}, this.opts, {
      query: r,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[e]);
    return new Ph[e](n);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  open() {
    let e;
    if (this.opts.rememberUpgrade && Qt.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1)
      e = "websocket";
    else if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    } else
      e = this.transports[0];
    this.readyState = "opening";
    try {
      e = this.createTransport(e);
    } catch {
      this.transports.shift(), this.open();
      return;
    }
    e.open(), this.setTransport(e);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(e) {
    this.transport && this.transport.removeAllListeners(), this.transport = e, e.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", (r) => this.onClose("transport close", r));
  }
  /**
   * Probes a transport.
   *
   * @param {String} name - transport name
   * @private
   */
  probe(e) {
    let r = this.createTransport(e), n = !1;
    Qt.priorWebsocketSuccess = !1;
    const s = () => {
      n || (r.send([{ type: "ping", data: "probe" }]), r.once("packet", (f) => {
        if (!n)
          if (f.type === "pong" && f.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", r), !r)
              return;
            Qt.priorWebsocketSuccess = r.name === "websocket", this.transport.pause(() => {
              n || this.readyState !== "closed" && (h(), this.setTransport(r), r.send([{ type: "upgrade" }]), this.emitReserved("upgrade", r), r = null, this.upgrading = !1, this.flush());
            });
          } else {
            const u = new Error("probe error");
            u.transport = r.name, this.emitReserved("upgradeError", u);
          }
      }));
    };
    function i() {
      n || (n = !0, h(), r.close(), r = null);
    }
    const o = (f) => {
      const u = new Error("probe error: " + f);
      u.transport = r.name, i(), this.emitReserved("upgradeError", u);
    };
    function a() {
      o("transport closed");
    }
    function c() {
      o("socket closed");
    }
    function d(f) {
      r && f.name !== r.name && i();
    }
    const h = () => {
      r.removeListener("open", s), r.removeListener("error", o), r.removeListener("close", a), this.off("close", c), this.off("upgrading", d);
    };
    r.once("open", s), r.once("error", o), r.once("close", a), this.once("close", c), this.once("upgrading", d), this.upgrades.indexOf("webtransport") !== -1 && e !== "webtransport" ? this.setTimeoutFn(() => {
      n || r.open();
    }, 200) : r.open();
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    if (this.readyState = "open", Qt.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush(), this.readyState === "open" && this.opts.upgrade) {
      let e = 0;
      const r = this.upgrades.length;
      for (; e < r; e++)
        this.probe(this.upgrades[e]);
    }
  }
  /**
   * Handles a packet.
   *
   * @private
   */
  onPacket(e) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
      switch (this.emitReserved("packet", e), this.emitReserved("heartbeat"), this.resetPingTimeout(), e.type) {
        case "open":
          this.onHandshake(JSON.parse(e.data));
          break;
        case "ping":
          this.sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong");
          break;
        case "error":
          const r = new Error("server error");
          r.code = e.data, this.onError(r);
          break;
        case "message":
          this.emitReserved("data", e.data), this.emitReserved("message", e.data);
          break;
      }
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @private
   */
  onHandshake(e) {
    this.emitReserved("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this.upgrades = this.filterUpgrades(e.upgrades), this.pingInterval = e.pingInterval, this.pingTimeout = e.pingTimeout, this.maxPayload = e.maxPayload, this.onOpen(), this.readyState !== "closed" && this.resetPingTimeout();
  }
  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @private
   */
  resetPingTimeout() {
    this.clearTimeoutFn(this.pingTimeoutTimer), this.pingTimeoutTimer = this.setTimeoutFn(() => {
      this.onClose("ping timeout");
    }, this.pingInterval + this.pingTimeout), this.opts.autoUnref && this.pingTimeoutTimer.unref();
  }
  /**
   * Called on `drain` event
   *
   * @private
   */
  onDrain() {
    this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush();
  }
  /**
   * Flush write buffers.
   *
   * @private
   */
  flush() {
    if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const e = this.getWritablePackets();
      this.transport.send(e), this.prevBufferLen = e.length, this.emitReserved("flush");
    }
  }
  /**
   * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
   * long-polling)
   *
   * @private
   */
  getWritablePackets() {
    if (!(this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1))
      return this.writeBuffer;
    let r = 1;
    for (let n = 0; n < this.writeBuffer.length; n++) {
      const s = this.writeBuffer[n].data;
      if (s && (r += wh(s)), n > 0 && r > this.maxPayload)
        return this.writeBuffer.slice(0, n);
      r += 2;
    }
    return this.writeBuffer;
  }
  /**
   * Sends a message.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} callback function.
   * @return {Socket} for chaining.
   */
  write(e, r, n) {
    return this.sendPacket("message", e, r, n), this;
  }
  send(e, r, n) {
    return this.sendPacket("message", e, r, n), this;
  }
  /**
   * Sends a packet.
   *
   * @param {String} type: packet type.
   * @param {String} data.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @private
   */
  sendPacket(e, r, n, s) {
    if (typeof r == "function" && (s = r, r = void 0), typeof n == "function" && (s = n, n = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    n = n || {}, n.compress = n.compress !== !1;
    const i = {
      type: e,
      data: r,
      options: n
    };
    this.emitReserved("packetCreate", i), this.writeBuffer.push(i), s && this.once("flush", s), this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const e = () => {
      this.onClose("forced close"), this.transport.close();
    }, r = () => {
      this.off("upgrade", r), this.off("upgradeError", r), e();
    }, n = () => {
      this.once("upgrade", r), this.once("upgradeError", r);
    };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? n() : e();
    }) : this.upgrading ? n() : e()), this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  onError(e) {
    Qt.priorWebsocketSuccess = !1, this.emitReserved("error", e), this.onClose("transport error", e);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  onClose(e, r) {
    (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") && (this.clearTimeoutFn(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), typeof removeEventListener == "function" && (removeEventListener("beforeunload", this.beforeunloadEventListener, !1), removeEventListener("offline", this.offlineEventListener, !1)), this.readyState = "closed", this.id = null, this.emitReserved("close", e, r), this.writeBuffer = [], this.prevBufferLen = 0);
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} upgrades - server upgrades
   * @private
   */
  filterUpgrades(e) {
    const r = [];
    let n = 0;
    const s = e.length;
    for (; n < s; n++)
      ~this.transports.indexOf(e[n]) && r.push(e[n]);
    return r;
  }
};
Pc.protocol = _c;
function Dh(t, e = "", r) {
  let n = t;
  r = r || typeof location < "u" && location, t == null && (t = r.protocol + "//" + r.host), typeof t == "string" && (t.charAt(0) === "/" && (t.charAt(1) === "/" ? t = r.protocol + t : t = r.host + t), /^(https?|wss?):\/\//.test(t) || (typeof r < "u" ? t = r.protocol + "//" + t : t = "https://" + t), n = ti(t)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), n.path = n.path || "/";
  const i = n.host.indexOf(":") !== -1 ? "[" + n.host + "]" : n.host;
  return n.id = n.protocol + "://" + i + ":" + n.port + e, n.href = n.protocol + "://" + i + (r && r.port === n.port ? "" : ":" + n.port), n;
}
const Bh = typeof ArrayBuffer == "function", Fh = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer, $c = Object.prototype.toString, Hh = typeof Blob == "function" || typeof Blob < "u" && $c.call(Blob) === "[object BlobConstructor]", Uh = typeof File == "function" || typeof File < "u" && $c.call(File) === "[object FileConstructor]";
function Li(t) {
  return Bh && (t instanceof ArrayBuffer || Fh(t)) || Hh && t instanceof Blob || Uh && t instanceof File;
}
function xn(t, e) {
  if (!t || typeof t != "object")
    return !1;
  if (Array.isArray(t)) {
    for (let r = 0, n = t.length; r < n; r++)
      if (xn(t[r]))
        return !0;
    return !1;
  }
  if (Li(t))
    return !0;
  if (t.toJSON && typeof t.toJSON == "function" && arguments.length === 1)
    return xn(t.toJSON(), !0);
  for (const r in t)
    if (Object.prototype.hasOwnProperty.call(t, r) && xn(t[r]))
      return !0;
  return !1;
}
function qh(t) {
  const e = [], r = t.data, n = t;
  return n.data = ri(r, e), n.attachments = e.length, { packet: n, buffers: e };
}
function ri(t, e) {
  if (!t)
    return t;
  if (Li(t)) {
    const r = { _placeholder: !0, num: e.length };
    return e.push(t), r;
  } else if (Array.isArray(t)) {
    const r = new Array(t.length);
    for (let n = 0; n < t.length; n++)
      r[n] = ri(t[n], e);
    return r;
  } else if (typeof t == "object" && !(t instanceof Date)) {
    const r = {};
    for (const n in t)
      Object.prototype.hasOwnProperty.call(t, n) && (r[n] = ri(t[n], e));
    return r;
  }
  return t;
}
function zh(t, e) {
  return t.data = ni(t.data, e), delete t.attachments, t;
}
function ni(t, e) {
  if (!t)
    return t;
  if (t && t._placeholder === !0) {
    if (typeof t.num == "number" && t.num >= 0 && t.num < e.length)
      return e[t.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(t))
    for (let r = 0; r < t.length; r++)
      t[r] = ni(t[r], e);
  else if (typeof t == "object")
    for (const r in t)
      Object.prototype.hasOwnProperty.call(t, r) && (t[r] = ni(t[r], e));
  return t;
}
const Wh = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], Kh = 5;
var G;
(function(t) {
  t[t.CONNECT = 0] = "CONNECT", t[t.DISCONNECT = 1] = "DISCONNECT", t[t.EVENT = 2] = "EVENT", t[t.ACK = 3] = "ACK", t[t.CONNECT_ERROR = 4] = "CONNECT_ERROR", t[t.BINARY_EVENT = 5] = "BINARY_EVENT", t[t.BINARY_ACK = 6] = "BINARY_ACK";
})(G || (G = {}));
class Vh {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  constructor(e) {
    this.replacer = e;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */
  encode(e) {
    return (e.type === G.EVENT || e.type === G.ACK) && xn(e) ? this.encodeAsBinary({
      type: e.type === G.EVENT ? G.BINARY_EVENT : G.BINARY_ACK,
      nsp: e.nsp,
      data: e.data,
      id: e.id
    }) : [this.encodeAsString(e)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(e) {
    let r = "" + e.type;
    return (e.type === G.BINARY_EVENT || e.type === G.BINARY_ACK) && (r += e.attachments + "-"), e.nsp && e.nsp !== "/" && (r += e.nsp + ","), e.id != null && (r += e.id), e.data != null && (r += JSON.stringify(e.data, this.replacer)), r;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(e) {
    const r = qh(e), n = this.encodeAsString(r.packet), s = r.buffers;
    return s.unshift(n), s;
  }
}
function Io(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
class Ni extends he {
  /**
   * Decoder constructor
   *
   * @param {function} reviver - custom reviver to pass down to JSON.stringify
   */
  constructor(e) {
    super(), this.reviver = e;
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */
  add(e) {
    let r;
    if (typeof e == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      r = this.decodeString(e);
      const n = r.type === G.BINARY_EVENT;
      n || r.type === G.BINARY_ACK ? (r.type = n ? G.EVENT : G.ACK, this.reconstructor = new Qh(r), r.attachments === 0 && super.emitReserved("decoded", r)) : super.emitReserved("decoded", r);
    } else if (Li(e) || e.base64)
      if (this.reconstructor)
        r = this.reconstructor.takeBinaryData(e), r && (this.reconstructor = null, super.emitReserved("decoded", r));
      else
        throw new Error("got binary data when not reconstructing a packet");
    else
      throw new Error("Unknown type: " + e);
  }
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   */
  decodeString(e) {
    let r = 0;
    const n = {
      type: Number(e.charAt(0))
    };
    if (G[n.type] === void 0)
      throw new Error("unknown packet type " + n.type);
    if (n.type === G.BINARY_EVENT || n.type === G.BINARY_ACK) {
      const i = r + 1;
      for (; e.charAt(++r) !== "-" && r != e.length; )
        ;
      const o = e.substring(i, r);
      if (o != Number(o) || e.charAt(r) !== "-")
        throw new Error("Illegal attachments");
      n.attachments = Number(o);
    }
    if (e.charAt(r + 1) === "/") {
      const i = r + 1;
      for (; ++r && !(e.charAt(r) === "," || r === e.length); )
        ;
      n.nsp = e.substring(i, r);
    } else
      n.nsp = "/";
    const s = e.charAt(r + 1);
    if (s !== "" && Number(s) == s) {
      const i = r + 1;
      for (; ++r; ) {
        const o = e.charAt(r);
        if (o == null || Number(o) != o) {
          --r;
          break;
        }
        if (r === e.length)
          break;
      }
      n.id = Number(e.substring(i, r + 1));
    }
    if (e.charAt(++r)) {
      const i = this.tryParse(e.substr(r));
      if (Ni.isPayloadValid(n.type, i))
        n.data = i;
      else
        throw new Error("invalid payload");
    }
    return n;
  }
  tryParse(e) {
    try {
      return JSON.parse(e, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(e, r) {
    switch (e) {
      case G.CONNECT:
        return Io(r);
      case G.DISCONNECT:
        return r === void 0;
      case G.CONNECT_ERROR:
        return typeof r == "string" || Io(r);
      case G.EVENT:
      case G.BINARY_EVENT:
        return Array.isArray(r) && (typeof r[0] == "number" || typeof r[0] == "string" && Wh.indexOf(r[0]) === -1);
      case G.ACK:
      case G.BINARY_ACK:
        return Array.isArray(r);
    }
  }
  /**
   * Deallocates a parser's resources
   */
  destroy() {
    this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
  }
}
class Qh {
  constructor(e) {
    this.packet = e, this.buffers = [], this.reconPack = e;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */
  takeBinaryData(e) {
    if (this.buffers.push(e), this.buffers.length === this.reconPack.attachments) {
      const r = zh(this.reconPack, this.buffers);
      return this.finishedReconstruction(), r;
    }
    return null;
  }
  /**
   * Cleans up binary packet reconstruction variables.
   */
  finishedReconstruction() {
    this.reconPack = null, this.buffers = [];
  }
}
const Gh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: Ni,
  Encoder: Vh,
  get PacketType() {
    return G;
  },
  protocol: Kh
}, Symbol.toStringTag, { value: "Module" }));
function Be(t, e, r) {
  return t.on(e, r), function() {
    t.off(e, r);
  };
}
const Yh = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class Mc extends he {
  /**
   * `Socket` constructor.
   */
  constructor(e, r, n) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = e, this.nsp = r, n && n.auth && (this.auth = n.auth), this._opts = Object.assign({}, n), this.io._autoConnect && this.open();
  }
  /**
   * Whether the socket is currently disconnected
   *
   * @example
   * const socket = io();
   *
   * socket.on("connect", () => {
   *   console.log(socket.disconnected); // false
   * });
   *
   * socket.on("disconnect", () => {
   *   console.log(socket.disconnected); // true
   * });
   */
  get disconnected() {
    return !this.connected;
  }
  /**
   * Subscribe to open, close and packet events
   *
   * @private
   */
  subEvents() {
    if (this.subs)
      return;
    const e = this.io;
    this.subs = [
      Be(e, "open", this.onopen.bind(this)),
      Be(e, "packet", this.onpacket.bind(this)),
      Be(e, "error", this.onerror.bind(this)),
      Be(e, "close", this.onclose.bind(this))
    ];
  }
  /**
   * Whether the Socket will try to reconnect when its Manager connects or reconnects.
   *
   * @example
   * const socket = io();
   *
   * console.log(socket.active); // true
   *
   * socket.on("disconnect", (reason) => {
   *   if (reason === "io server disconnect") {
   *     // the disconnection was initiated by the server, you need to manually reconnect
   *     console.log(socket.active); // false
   *   }
   *   // else the socket will automatically try to reconnect
   *   console.log(socket.active); // true
   * });
   */
  get active() {
    return !!this.subs;
  }
  /**
   * "Opens" the socket.
   *
   * @example
   * const socket = io({
   *   autoConnect: false
   * });
   *
   * socket.connect();
   */
  connect() {
    return this.connected ? this : (this.subEvents(), this.io._reconnecting || this.io.open(), this.io._readyState === "open" && this.onopen(), this);
  }
  /**
   * Alias for {@link connect()}.
   */
  open() {
    return this.connect();
  }
  /**
   * Sends a `message` event.
   *
   * This method mimics the WebSocket.send() method.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
   *
   * @example
   * socket.send("hello");
   *
   * // this is equivalent to
   * socket.emit("message", "hello");
   *
   * @return self
   */
  send(...e) {
    return e.unshift("message"), this.emit.apply(this, e), this;
  }
  /**
   * Override `emit`.
   * If the event is in `events`, it's emitted normally.
   *
   * @example
   * socket.emit("hello", "world");
   *
   * // all serializable datastructures are supported (no need to call JSON.stringify)
   * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
   *
   * // with an acknowledgement from the server
   * socket.emit("hello", "world", (val) => {
   *   // ...
   * });
   *
   * @return self
   */
  emit(e, ...r) {
    if (Yh.hasOwnProperty(e))
      throw new Error('"' + e.toString() + '" is a reserved event name');
    if (r.unshift(e), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(r), this;
    const n = {
      type: G.EVENT,
      data: r
    };
    if (n.options = {}, n.options.compress = this.flags.compress !== !1, typeof r[r.length - 1] == "function") {
      const o = this.ids++, a = r.pop();
      this._registerAckCallback(o, a), n.id = o;
    }
    const s = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
    return this.flags.volatile && (!s || !this.connected) || (this.connected ? (this.notifyOutgoingListeners(n), this.packet(n)) : this.sendBuffer.push(n)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(e, r) {
    var n;
    const s = (n = this.flags.timeout) !== null && n !== void 0 ? n : this._opts.ackTimeout;
    if (s === void 0) {
      this.acks[e] = r;
      return;
    }
    const i = this.io.setTimeoutFn(() => {
      delete this.acks[e];
      for (let a = 0; a < this.sendBuffer.length; a++)
        this.sendBuffer[a].id === e && this.sendBuffer.splice(a, 1);
      r.call(this, new Error("operation has timed out"));
    }, s), o = (...a) => {
      this.io.clearTimeoutFn(i), r.apply(this, a);
    };
    o.withError = !0, this.acks[e] = o;
  }
  /**
   * Emits an event and waits for an acknowledgement
   *
   * @example
   * // without timeout
   * const response = await socket.emitWithAck("hello", "world");
   *
   * // with a specific timeout
   * try {
   *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
   * } catch (err) {
   *   // the server did not acknowledge the event in the given delay
   * }
   *
   * @return a Promise that will be fulfilled when the server acknowledges the event
   */
  emitWithAck(e, ...r) {
    return new Promise((n, s) => {
      const i = (o, a) => o ? s(o) : n(a);
      i.withError = !0, r.push(i), this.emit(e, ...r);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(e) {
    let r;
    typeof e[e.length - 1] == "function" && (r = e.pop());
    const n = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: e,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    e.push((s, ...i) => n !== this._queue[0] ? void 0 : (s !== null ? n.tryCount > this._opts.retries && (this._queue.shift(), r && r(s)) : (this._queue.shift(), r && r(null, ...i)), n.pending = !1, this._drainQueue())), this._queue.push(n), this._drainQueue();
  }
  /**
   * Send the first packet of the queue, and wait for an acknowledgement from the server.
   * @param force - whether to resend a packet that has not been acknowledged yet
   *
   * @private
   */
  _drainQueue(e = !1) {
    if (!this.connected || this._queue.length === 0)
      return;
    const r = this._queue[0];
    r.pending && !e || (r.pending = !0, r.tryCount++, this.flags = r.flags, this.emit.apply(this, r.args));
  }
  /**
   * Sends a packet.
   *
   * @param packet
   * @private
   */
  packet(e) {
    e.nsp = this.nsp, this.io._packet(e);
  }
  /**
   * Called upon engine `open`.
   *
   * @private
   */
  onopen() {
    typeof this.auth == "function" ? this.auth((e) => {
      this._sendConnectPacket(e);
    }) : this._sendConnectPacket(this.auth);
  }
  /**
   * Sends a CONNECT packet to initiate the Socket.IO session.
   *
   * @param data
   * @private
   */
  _sendConnectPacket(e) {
    this.packet({
      type: G.CONNECT,
      data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, e) : e
    });
  }
  /**
   * Called upon engine or manager `error`.
   *
   * @param err
   * @private
   */
  onerror(e) {
    this.connected || this.emitReserved("connect_error", e);
  }
  /**
   * Called upon engine `close`.
   *
   * @param reason
   * @param description
   * @private
   */
  onclose(e, r) {
    this.connected = !1, delete this.id, this.emitReserved("disconnect", e, r), this._clearAcks();
  }
  /**
   * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
   * the server.
   *
   * @private
   */
  _clearAcks() {
    Object.keys(this.acks).forEach((e) => {
      if (!this.sendBuffer.some((n) => String(n.id) === e)) {
        const n = this.acks[e];
        delete this.acks[e], n.withError && n.call(this, new Error("socket has been disconnected"));
      }
    });
  }
  /**
   * Called with socket packet.
   *
   * @param packet
   * @private
   */
  onpacket(e) {
    if (e.nsp === this.nsp)
      switch (e.type) {
        case G.CONNECT:
          e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case G.EVENT:
        case G.BINARY_EVENT:
          this.onevent(e);
          break;
        case G.ACK:
        case G.BINARY_ACK:
          this.onack(e);
          break;
        case G.DISCONNECT:
          this.ondisconnect();
          break;
        case G.CONNECT_ERROR:
          this.destroy();
          const n = new Error(e.data.message);
          n.data = e.data.data, this.emitReserved("connect_error", n);
          break;
      }
  }
  /**
   * Called upon a server event.
   *
   * @param packet
   * @private
   */
  onevent(e) {
    const r = e.data || [];
    e.id != null && r.push(this.ack(e.id)), this.connected ? this.emitEvent(r) : this.receiveBuffer.push(Object.freeze(r));
  }
  emitEvent(e) {
    if (this._anyListeners && this._anyListeners.length) {
      const r = this._anyListeners.slice();
      for (const n of r)
        n.apply(this, e);
    }
    super.emit.apply(this, e), this._pid && e.length && typeof e[e.length - 1] == "string" && (this._lastOffset = e[e.length - 1]);
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(e) {
    const r = this;
    let n = !1;
    return function(...s) {
      n || (n = !0, r.packet({
        type: G.ACK,
        id: e,
        data: s
      }));
    };
  }
  /**
   * Called upon a server acknowledgement.
   *
   * @param packet
   * @private
   */
  onack(e) {
    const r = this.acks[e.id];
    typeof r == "function" && (delete this.acks[e.id], r.withError && e.data.unshift(null), r.apply(this, e.data));
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(e, r) {
    this.id = e, this.recovered = r && this._pid === r, this._pid = r, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0);
  }
  /**
   * Emit buffered events (received and emitted).
   *
   * @private
   */
  emitBuffered() {
    this.receiveBuffer.forEach((e) => this.emitEvent(e)), this.receiveBuffer = [], this.sendBuffer.forEach((e) => {
      this.notifyOutgoingListeners(e), this.packet(e);
    }), this.sendBuffer = [];
  }
  /**
   * Called upon server disconnect.
   *
   * @private
   */
  ondisconnect() {
    this.destroy(), this.onclose("io server disconnect");
  }
  /**
   * Called upon forced client/server side disconnections,
   * this method ensures the manager stops tracking us and
   * that reconnections don't get triggered for this.
   *
   * @private
   */
  destroy() {
    this.subs && (this.subs.forEach((e) => e()), this.subs = void 0), this.io._destroy(this);
  }
  /**
   * Disconnects the socket manually. In that case, the socket will not try to reconnect.
   *
   * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
   *
   * @example
   * const socket = io();
   *
   * socket.on("disconnect", (reason) => {
   *   // console.log(reason); prints "io client disconnect"
   * });
   *
   * socket.disconnect();
   *
   * @return self
   */
  disconnect() {
    return this.connected && this.packet({ type: G.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
  }
  /**
   * Alias for {@link disconnect()}.
   *
   * @return self
   */
  close() {
    return this.disconnect();
  }
  /**
   * Sets the compress flag.
   *
   * @example
   * socket.compress(false).emit("hello");
   *
   * @param compress - if `true`, compresses the sending data
   * @return self
   */
  compress(e) {
    return this.flags.compress = e, this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
   * ready to send messages.
   *
   * @example
   * socket.volatile.emit("hello"); // the server may or may not receive it
   *
   * @returns self
   */
  get volatile() {
    return this.flags.volatile = !0, this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
   * given number of milliseconds have elapsed without an acknowledgement from the server:
   *
   * @example
   * socket.timeout(5000).emit("my-event", (err) => {
   *   if (err) {
   *     // the server did not acknowledge the event in the given delay
   *   }
   * });
   *
   * @returns self
   */
  timeout(e) {
    return this.flags.timeout = e, this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * @example
   * socket.onAny((event, ...args) => {
   *   console.log(`got ${event}`);
   * });
   *
   * @param listener
   */
  onAny(e) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.push(e), this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * @example
   * socket.prependAny((event, ...args) => {
   *   console.log(`got event ${event}`);
   * });
   *
   * @param listener
   */
  prependAny(e) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(e), this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`got event ${event}`);
   * }
   *
   * socket.onAny(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAny(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAny();
   *
   * @param listener
   */
  offAny(e) {
    if (!this._anyListeners)
      return this;
    if (e) {
      const r = this._anyListeners;
      for (let n = 0; n < r.length; n++)
        if (e === r[n])
          return r.splice(n, 1), this;
    } else
      this._anyListeners = [];
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAny() {
    return this._anyListeners || [];
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.onAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  onAnyOutgoing(e) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(e), this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.prependAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  prependAnyOutgoing(e) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(e), this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`sent event ${event}`);
   * }
   *
   * socket.onAnyOutgoing(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAnyOutgoing(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAnyOutgoing();
   *
   * @param [listener] - the catch-all listener (optional)
   */
  offAnyOutgoing(e) {
    if (!this._anyOutgoingListeners)
      return this;
    if (e) {
      const r = this._anyOutgoingListeners;
      for (let n = 0; n < r.length; n++)
        if (e === r[n])
          return r.splice(n, 1), this;
    } else
      this._anyOutgoingListeners = [];
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  /**
   * Notify the listeners for each packet sent
   *
   * @param packet
   *
   * @private
   */
  notifyOutgoingListeners(e) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const r = this._anyOutgoingListeners.slice();
      for (const n of r)
        n.apply(this, e.data);
    }
  }
}
function pr(t) {
  t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0;
}
pr.prototype.duration = function() {
  var t = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var e = Math.random(), r = Math.floor(e * this.jitter * t);
    t = Math.floor(e * 10) & 1 ? t + r : t - r;
  }
  return Math.min(t, this.max) | 0;
};
pr.prototype.reset = function() {
  this.attempts = 0;
};
pr.prototype.setMin = function(t) {
  this.ms = t;
};
pr.prototype.setMax = function(t) {
  this.max = t;
};
pr.prototype.setJitter = function(t) {
  this.jitter = t;
};
class si extends he {
  constructor(e, r) {
    var n;
    super(), this.nsps = {}, this.subs = [], e && typeof e == "object" && (r = e, e = void 0), r = r || {}, r.path = r.path || "/socket.io", this.opts = r, ps(this, r), this.reconnection(r.reconnection !== !1), this.reconnectionAttempts(r.reconnectionAttempts || 1 / 0), this.reconnectionDelay(r.reconnectionDelay || 1e3), this.reconnectionDelayMax(r.reconnectionDelayMax || 5e3), this.randomizationFactor((n = r.randomizationFactor) !== null && n !== void 0 ? n : 0.5), this.backoff = new pr({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(r.timeout == null ? 2e4 : r.timeout), this._readyState = "closed", this.uri = e;
    const s = r.parser || Gh;
    this.encoder = new s.Encoder(), this.decoder = new s.Decoder(), this._autoConnect = r.autoConnect !== !1, this._autoConnect && this.open();
  }
  reconnection(e) {
    return arguments.length ? (this._reconnection = !!e, this) : this._reconnection;
  }
  reconnectionAttempts(e) {
    return e === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = e, this);
  }
  reconnectionDelay(e) {
    var r;
    return e === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = e, (r = this.backoff) === null || r === void 0 || r.setMin(e), this);
  }
  randomizationFactor(e) {
    var r;
    return e === void 0 ? this._randomizationFactor : (this._randomizationFactor = e, (r = this.backoff) === null || r === void 0 || r.setJitter(e), this);
  }
  reconnectionDelayMax(e) {
    var r;
    return e === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = e, (r = this.backoff) === null || r === void 0 || r.setMax(e), this);
  }
  timeout(e) {
    return arguments.length ? (this._timeout = e, this) : this._timeout;
  }
  /**
   * Starts trying to reconnect if reconnection is enabled and we have not
   * started reconnecting yet
   *
   * @private
   */
  maybeReconnectOnOpen() {
    !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect();
  }
  /**
   * Sets the current transport `socket`.
   *
   * @param {Function} fn - optional, callback
   * @return self
   * @public
   */
  open(e) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new Pc(this.uri, this.opts);
    const r = this.engine, n = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const s = Be(r, "open", function() {
      n.onopen(), e && e();
    }), i = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), e ? e(a) : this.maybeReconnectOnOpen();
    }, o = Be(r, "error", i);
    if (this._timeout !== !1) {
      const a = this._timeout, c = this.setTimeoutFn(() => {
        s(), i(new Error("timeout")), r.close();
      }, a);
      this.opts.autoUnref && c.unref(), this.subs.push(() => {
        this.clearTimeoutFn(c);
      });
    }
    return this.subs.push(s), this.subs.push(o), this;
  }
  /**
   * Alias for open()
   *
   * @return self
   * @public
   */
  connect(e) {
    return this.open(e);
  }
  /**
   * Called upon transport open.
   *
   * @private
   */
  onopen() {
    this.cleanup(), this._readyState = "open", this.emitReserved("open");
    const e = this.engine;
    this.subs.push(Be(e, "ping", this.onping.bind(this)), Be(e, "data", this.ondata.bind(this)), Be(e, "error", this.onerror.bind(this)), Be(e, "close", this.onclose.bind(this)), Be(this.decoder, "decoded", this.ondecoded.bind(this)));
  }
  /**
   * Called upon a ping.
   *
   * @private
   */
  onping() {
    this.emitReserved("ping");
  }
  /**
   * Called with data.
   *
   * @private
   */
  ondata(e) {
    try {
      this.decoder.add(e);
    } catch (r) {
      this.onclose("parse error", r);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(e) {
    Ri(() => {
      this.emitReserved("packet", e);
    }, this.setTimeoutFn);
  }
  /**
   * Called upon socket error.
   *
   * @private
   */
  onerror(e) {
    this.emitReserved("error", e);
  }
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @public
   */
  socket(e, r) {
    let n = this.nsps[e];
    return n ? this._autoConnect && !n.active && n.connect() : (n = new Mc(this, e, r), this.nsps[e] = n), n;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(e) {
    const r = Object.keys(this.nsps);
    for (const n of r)
      if (this.nsps[n].active)
        return;
    this._close();
  }
  /**
   * Writes a packet.
   *
   * @param packet
   * @private
   */
  _packet(e) {
    const r = this.encoder.encode(e);
    for (let n = 0; n < r.length; n++)
      this.engine.write(r[n], e.options);
  }
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @private
   */
  cleanup() {
    this.subs.forEach((e) => e()), this.subs.length = 0, this.decoder.destroy();
  }
  /**
   * Close the current socket.
   *
   * @private
   */
  _close() {
    this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close"), this.engine && this.engine.close();
  }
  /**
   * Alias for close()
   *
   * @private
   */
  disconnect() {
    return this._close();
  }
  /**
   * Called upon engine close.
   *
   * @private
   */
  onclose(e, r) {
    this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", e, r), this._reconnection && !this.skipReconnect && this.reconnect();
  }
  /**
   * Attempt a reconnection.
   *
   * @private
   */
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const e = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
    else {
      const r = this.backoff.duration();
      this._reconnecting = !0;
      const n = this.setTimeoutFn(() => {
        e.skipReconnect || (this.emitReserved("reconnect_attempt", e.backoff.attempts), !e.skipReconnect && e.open((s) => {
          s ? (e._reconnecting = !1, e.reconnect(), this.emitReserved("reconnect_error", s)) : e.onreconnect();
        }));
      }, r);
      this.opts.autoUnref && n.unref(), this.subs.push(() => {
        this.clearTimeoutFn(n);
      });
    }
  }
  /**
   * Called upon successful reconnect.
   *
   * @private
   */
  onreconnect() {
    const e = this.backoff.attempts;
    this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", e);
  }
}
const Er = {};
function Sn(t, e) {
  typeof t == "object" && (e = t, t = void 0), e = e || {};
  const r = Dh(t, e.path || "/socket.io"), n = r.source, s = r.id, i = r.path, o = Er[s] && i in Er[s].nsps, a = e.forceNew || e["force new connection"] || e.multiplex === !1 || o;
  let c;
  return a ? c = new si(n, e) : (Er[s] || (Er[s] = new si(n, e)), c = Er[s]), r.query && !e.query && (e.query = r.queryKey), c.socket(r.path, e);
}
Object.assign(Sn, {
  Manager: si,
  Socket: Mc,
  io: Sn,
  connect: Sn
});
var Jh = typeof Ot == "object" && Ot && Ot.Object === Object && Ot, Xh = typeof self == "object" && self && self.Object === Object && self;
Jh || Xh || Function("return this")();
var jc = typeof window < "u" ? la : Me;
function Do(t, e, r, n) {
  const s = ke(e);
  jc(() => {
    s.current = e;
  }, [e]), Me(() => {
    const i = (r == null ? void 0 : r.current) ?? window;
    if (!(i && i.addEventListener))
      return;
    const o = (a) => {
      s.current(a);
    };
    return i.addEventListener(t, o, n), () => {
      i.removeEventListener(t, o, n);
    };
  }, [t, r, n]);
}
function Zh(t) {
  const e = ke(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return jc(() => {
    e.current = t;
  }, [t]), Je((...r) => {
    var n;
    return (n = e.current) == null ? void 0 : n.call(e, ...r);
  }, [e]);
}
var Bo = typeof window > "u";
function ef(t, e, r = {}) {
  const { initializeWithValue: n = !0 } = r, s = Je(
    (f) => r.serializer ? r.serializer(f) : JSON.stringify(f),
    [r]
  ), i = Je(
    (f) => {
      if (r.deserializer)
        return r.deserializer(f);
      if (f === "undefined")
        return;
      const u = e instanceof Function ? e() : e;
      let y;
      try {
        y = JSON.parse(f);
      } catch (m) {
        return console.error("Error parsing JSON:", m), u;
      }
      return y;
    },
    [r, e]
  ), o = Je(() => {
    const f = e instanceof Function ? e() : e;
    if (Bo)
      return f;
    try {
      const u = window.localStorage.getItem(t);
      return u ? i(u) : f;
    } catch (u) {
      return console.warn(`Error reading localStorage key “${t}”:`, u), f;
    }
  }, [e, t, i]), [a, c] = xt(() => n ? o() : e instanceof Function ? e() : e), d = Zh((f) => {
    Bo && console.warn(
      `Tried setting localStorage key “${t}” even though environment is not a client`
    );
    try {
      const u = f instanceof Function ? f(o()) : f;
      window.localStorage.setItem(t, s(u)), c(u), window.dispatchEvent(new StorageEvent("local-storage", { key: t }));
    } catch (u) {
      console.warn(`Error setting localStorage key “${t}”:`, u);
    }
  });
  Me(() => {
    c(o());
  }, [t]);
  const h = Je(
    (f) => {
      f.key && f.key !== t || c(o());
    },
    [t, o]
  );
  return Do("storage", h), Do("local-storage", h), [a, d];
}
function Ic(t) {
  const e = ke(t);
  e.current = t, Me(
    () => () => {
      e.current();
    },
    []
  );
}
const Dc = ca({}), tf = ({
  children: t,
  channelId: e,
  onEndBot: r,
  isTest: n = !1,
  onClose: s,
  isShowClose: i = !0,
  isForLiveChat: o,
  userId: a,
  customStyles: c,
  isForPreview: d,
  isForManager: h,
  adminId: f,
  ...u
}) => {
  const [y, m] = xt(!1), [x, w] = xt(h ? void 0 : c), [O, L] = ef("disabled-buttons", []), N = wc(), K = vn(() => new URLSearchParams(window.location.search), []), $ = vn(() => a || Ce(), [a]), M = vn(() => e || K.get("channelId") || "", [e, K]), X = ke(Sn(u.API_URL || kr, {
    autoConnect: !1,
    transports: ["websocket"],
    query: {
      userId: f ? `${$}_${f}` : $
    }
  }));
  console.log(`${u.API_URL || kr}/api/conversation-live-chat/${a || Ce()}/${M}`);
  const {
    data: B,
    isLoading: Z
  } = _o({
    queryKey: ["messages", M, a || Ce()],
    queryFn: async () => {
      try {
        return d ? [{
          isBot: !0,
          message: "Hello, how can I help you?",
          createdAt: (/* @__PURE__ */ new Date()).toISOString()
        }, {
          isBot: !1,
          message: "I want to know more about your product",
          userId: Ce(),
          createdAt: (/* @__PURE__ */ new Date()).toISOString()
        }] : (await (await fetch(`${u.API_URL || kr}/api/conversation-live-chat/${a || Ce()}/${M}`)).json()).data;
      } catch {
        return [];
      }
    },
    initialData: [],
    refetchOnWindowFocus: !1,
    refetchOnReconnect: !1
  }), {
    data: Y
  } = _o({
    queryKey: ["custom-style", M, a || Ce()],
    queryFn: async () => {
      try {
        return (await (await fetch(`${u.API_URL || kr}/api/custom-chatbox/${M}`)).json()).data;
      } catch {
        return;
      }
    },
    enabled: !n && !d && !h
  }), U = Je(({
    message: v,
    cb: b,
    extraData: S,
    type: k
  }) => {
    if (h)
      return;
    const j = v.trim();
    if (j.length === 0)
      return;
    const D = vo(M, a), W = {
      message: k === "list-button" ? S || "" : j,
      userId: f || a || Ce(),
      template: {},
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      isTest: n
    };
    X.current.emit(vr.MESSAGE, {
      message: j,
      address: D,
      isTest: n,
      createdAt: W.createdAt
    }), N.setQueryData(["messages", M, a || Ce()], (ee) => [...ee, W]), b && b(W);
  }, [M, f, h, n, N, a]), g = Je(() => {
    window.parent && window.parent.postMessage({
      type: "TOGGLE_CHAT"
    }, "*"), s == null || s();
  }, [s]), P = Je(() => {
    d || (L([]), X.current.emit(vr.MESSAGE, {
      type: "event",
      typeName: "endConversation",
      address: vo(M, a),
      isTest: n,
      message: ""
    }), m(!1), N.setQueryData(["messages", M, a || Ce()], () => []));
  }, [M, d, n, N, L, a]), C = Je((v) => {
    L((b) => [...b, v]);
  }, [L]);
  return Ic(() => {
    X.current.disconnect();
  }), Me(() => {
    if (d)
      return;
    const v = X.current;
    return v.connect(), v.on(vr.MESSAGE, (b) => {
      var S;
      ((S = b.template) == null ? void 0 : S.type) === "list-button" ? m(!0) : m(!1), N.setQueryData(["messages", M, a || Ce()], (k) => [...k, b].filter((j) => j.userId !== "typing"));
    }), v.on(vr.TYPING, () => {
      N.setQueryData(["messages", M, a || Ce()], (b) => [...b, {
        userId: "typing"
      }]);
    }), v.on(vr.STOP_TYPING, () => {
      N.setQueryData(["messages", M, a || Ce()], (b) => b.filter((S) => S.userId !== "typing"));
    }), () => {
      v.disconnect();
    };
  }, [M, N, a, d]), Me(() => {
    d && m(!0);
  }, [d]), Me(() => {
    Y && !h && w(Y);
  }, [Y, h]), Me(() => {
    c && !h && w(c);
  }, [c, h]), /* @__PURE__ */ A.jsx(Dc.Provider, { value: {
    socket: X.current,
    messages: B,
    channelId: M,
    onEndBot: r,
    isTest: n,
    handleSendMessage: U,
    handleClose: g,
    disableInput: y,
    isShowClose: i,
    isLoadingMessages: Z,
    isForLiveChat: o,
    userId: a,
    handleReload: P,
    customStyles: x,
    adminId: f,
    isForManager: h,
    disabledButtons: O,
    handleClickButton: C
  }, children: t });
}, Ht = () => {
  const t = ua(Dc);
  if (!t)
    throw new Error("useSocket must be used within SocketProvider");
  return t;
};
function Bc(t) {
  var e, r, n = "";
  if (typeof t == "string" || typeof t == "number")
    n += t;
  else if (typeof t == "object")
    if (Array.isArray(t)) {
      var s = t.length;
      for (e = 0; e < s; e++)
        t[e] && (r = Bc(t[e])) && (n && (n += " "), n += r);
    } else
      for (r in t)
        t[r] && (n && (n += " "), n += r);
  return n;
}
function rf() {
  for (var t, e, r = 0, n = "", s = arguments.length; r < s; r++)
    (t = arguments[r]) && (e = Bc(t)) && (n && (n += " "), n += e);
  return n;
}
const Pi = "-";
function nf(t) {
  const e = of(t), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = t;
  function s(o) {
    const a = o.split(Pi);
    return a[0] === "" && a.length !== 1 && a.shift(), Fc(a, e) || sf(o);
  }
  function i(o, a) {
    const c = r[o] || [];
    return a && n[o] ? [...c, ...n[o]] : c;
  }
  return {
    getClassGroupId: s,
    getConflictingClassGroupIds: i
  };
}
function Fc(t, e) {
  var o;
  if (t.length === 0)
    return e.classGroupId;
  const r = t[0], n = e.nextPart.get(r), s = n ? Fc(t.slice(1), n) : void 0;
  if (s)
    return s;
  if (e.validators.length === 0)
    return;
  const i = t.join(Pi);
  return (o = e.validators.find(({
    validator: a
  }) => a(i))) == null ? void 0 : o.classGroupId;
}
const Fo = /^\[(.+)\]$/;
function sf(t) {
  if (Fo.test(t)) {
    const e = Fo.exec(t)[1], r = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}
function of(t) {
  const {
    theme: e,
    prefix: r
  } = t, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return cf(Object.entries(t.classGroups), r).forEach(([i, o]) => {
    ii(o, n, i, e);
  }), n;
}
function ii(t, e, r, n) {
  t.forEach((s) => {
    if (typeof s == "string") {
      const i = s === "" ? e : Ho(e, s);
      i.classGroupId = r;
      return;
    }
    if (typeof s == "function") {
      if (af(s)) {
        ii(s(n), e, r, n);
        return;
      }
      e.validators.push({
        validator: s,
        classGroupId: r
      });
      return;
    }
    Object.entries(s).forEach(([i, o]) => {
      ii(o, Ho(e, i), r, n);
    });
  });
}
function Ho(t, e) {
  let r = t;
  return e.split(Pi).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}
function af(t) {
  return t.isThemeGetter;
}
function cf(t, e) {
  return e ? t.map(([r, n]) => {
    const s = n.map((i) => typeof i == "string" ? e + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([o, a]) => [e + o, a])) : i);
    return [r, s];
  }) : t;
}
function lf(t) {
  if (t < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let e = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  function s(i, o) {
    r.set(i, o), e++, e > t && (e = 0, n = r, r = /* @__PURE__ */ new Map());
  }
  return {
    get(i) {
      let o = r.get(i);
      if (o !== void 0)
        return o;
      if ((o = n.get(i)) !== void 0)
        return s(i, o), o;
    },
    set(i, o) {
      r.has(i) ? r.set(i, o) : s(i, o);
    }
  };
}
const Hc = "!";
function uf(t) {
  const e = t.separator, r = e.length === 1, n = e[0], s = e.length;
  return function(o) {
    const a = [];
    let c = 0, d = 0, h;
    for (let x = 0; x < o.length; x++) {
      let w = o[x];
      if (c === 0) {
        if (w === n && (r || o.slice(x, x + s) === e)) {
          a.push(o.slice(d, x)), d = x + s;
          continue;
        }
        if (w === "/") {
          h = x;
          continue;
        }
      }
      w === "[" ? c++ : w === "]" && c--;
    }
    const f = a.length === 0 ? o : o.substring(d), u = f.startsWith(Hc), y = u ? f.substring(1) : f, m = h && h > d ? h - d : void 0;
    return {
      modifiers: a,
      hasImportantModifier: u,
      baseClassName: y,
      maybePostfixModifierPosition: m
    };
  };
}
function hf(t) {
  if (t.length <= 1)
    return t;
  const e = [];
  let r = [];
  return t.forEach((n) => {
    n[0] === "[" ? (e.push(...r.sort(), n), r = []) : r.push(n);
  }), e.push(...r.sort()), e;
}
function ff(t) {
  return {
    cache: lf(t.cacheSize),
    splitModifiers: uf(t),
    ...nf(t)
  };
}
const df = /\s+/;
function pf(t, e) {
  const {
    splitModifiers: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: s
  } = e, i = /* @__PURE__ */ new Set();
  return t.trim().split(df).map((o) => {
    const {
      modifiers: a,
      hasImportantModifier: c,
      baseClassName: d,
      maybePostfixModifierPosition: h
    } = r(o);
    let f = n(h ? d.substring(0, h) : d), u = !!h;
    if (!f) {
      if (!h)
        return {
          isTailwindClass: !1,
          originalClassName: o
        };
      if (f = n(d), !f)
        return {
          isTailwindClass: !1,
          originalClassName: o
        };
      u = !1;
    }
    const y = hf(a).join(":");
    return {
      isTailwindClass: !0,
      modifierId: c ? y + Hc : y,
      classGroupId: f,
      originalClassName: o,
      hasPostfixModifier: u
    };
  }).reverse().filter((o) => {
    if (!o.isTailwindClass)
      return !0;
    const {
      modifierId: a,
      classGroupId: c,
      hasPostfixModifier: d
    } = o, h = a + c;
    return i.has(h) ? !1 : (i.add(h), s(c, d).forEach((f) => i.add(a + f)), !0);
  }).reverse().map((o) => o.originalClassName).join(" ");
}
function yf() {
  let t = 0, e, r, n = "";
  for (; t < arguments.length; )
    (e = arguments[t++]) && (r = Uc(e)) && (n && (n += " "), n += r);
  return n;
}
function Uc(t) {
  if (typeof t == "string")
    return t;
  let e, r = "";
  for (let n = 0; n < t.length; n++)
    t[n] && (e = Uc(t[n])) && (r && (r += " "), r += e);
  return r;
}
function gf(t, ...e) {
  let r, n, s, i = o;
  function o(c) {
    const d = e.reduce((h, f) => f(h), t());
    return r = ff(d), n = r.cache.get, s = r.cache.set, i = a, a(c);
  }
  function a(c) {
    const d = n(c);
    if (d)
      return d;
    const h = pf(c, r);
    return s(c, h), h;
  }
  return function() {
    return i(yf.apply(null, arguments));
  };
}
function ie(t) {
  const e = (r) => r[t] || [];
  return e.isThemeGetter = !0, e;
}
const qc = /^\[(?:([a-z-]+):)?(.+)\]$/i, mf = /^\d+\/\d+$/, bf = /* @__PURE__ */ new Set(["px", "full", "screen"]), vf = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, wf = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ef = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, xf = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Sf = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function rt(t) {
  return _t(t) || bf.has(t) || mf.test(t);
}
function ct(t) {
  return yr(t, "length", Lf);
}
function _t(t) {
  return !!t && !Number.isNaN(Number(t));
}
function dn(t) {
  return yr(t, "number", _t);
}
function xr(t) {
  return !!t && Number.isInteger(Number(t));
}
function kf(t) {
  return t.endsWith("%") && _t(t.slice(0, -1));
}
function q(t) {
  return qc.test(t);
}
function lt(t) {
  return vf.test(t);
}
const Cf = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function Of(t) {
  return yr(t, Cf, zc);
}
function _f(t) {
  return yr(t, "position", zc);
}
const Tf = /* @__PURE__ */ new Set(["image", "url"]);
function Af(t) {
  return yr(t, Tf, Pf);
}
function Rf(t) {
  return yr(t, "", Nf);
}
function Sr() {
  return !0;
}
function yr(t, e, r) {
  const n = qc.exec(t);
  return n ? n[1] ? typeof e == "string" ? n[1] === e : e.has(n[1]) : r(n[2]) : !1;
}
function Lf(t) {
  return wf.test(t) && !Ef.test(t);
}
function zc() {
  return !1;
}
function Nf(t) {
  return xf.test(t);
}
function Pf(t) {
  return Sf.test(t);
}
function $f() {
  const t = ie("colors"), e = ie("spacing"), r = ie("blur"), n = ie("brightness"), s = ie("borderColor"), i = ie("borderRadius"), o = ie("borderSpacing"), a = ie("borderWidth"), c = ie("contrast"), d = ie("grayscale"), h = ie("hueRotate"), f = ie("invert"), u = ie("gap"), y = ie("gradientColorStops"), m = ie("gradientColorStopPositions"), x = ie("inset"), w = ie("margin"), O = ie("opacity"), L = ie("padding"), N = ie("saturate"), K = ie("scale"), $ = ie("sepia"), M = ie("skew"), X = ie("space"), B = ie("translate"), Z = () => ["auto", "contain", "none"], Y = () => ["auto", "hidden", "clip", "visible", "scroll"], U = () => ["auto", q, e], g = () => [q, e], P = () => ["", rt, ct], C = () => ["auto", _t, q], v = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], b = () => ["solid", "dashed", "dotted", "double", "none"], S = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"], k = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], j = () => ["", "0", q], D = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], W = () => [_t, dn], ee = () => [_t, q];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Sr],
      spacing: [rt, ct],
      blur: ["none", "", lt, q],
      brightness: W(),
      borderColor: [t],
      borderRadius: ["none", "", "full", lt, q],
      borderSpacing: g(),
      borderWidth: P(),
      contrast: W(),
      grayscale: j(),
      hueRotate: ee(),
      invert: j(),
      gap: g(),
      gradientColorStops: [t],
      gradientColorStopPositions: [kf, ct],
      inset: U(),
      margin: U(),
      opacity: W(),
      padding: g(),
      saturate: W(),
      scale: W(),
      sepia: j(),
      skew: ee(),
      space: g(),
      translate: g()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", q]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [lt]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": D()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": D()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...v(), q]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: Y()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": Y()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": Y()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: Z()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": Z()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": Z()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [x]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [x]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [x]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [x]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [x]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [x]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [x]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [x]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [x]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", xr, q]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: U()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", q]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: j()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: j()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", xr, q]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Sr]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", xr, q]
        }, q]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": C()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": C()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Sr]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [xr, q]
        }, q]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": C()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": C()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", q]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", q]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [u]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [u]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [u]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...k()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...k(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...k(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [L]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [L]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [L]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [L]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [L]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [L]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [L]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [L]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [L]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [w]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [w]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [w]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [w]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [w]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [w]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [w]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [w]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [w]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [X]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [X]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", q, e]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [q, e, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [q, e, "none", "full", "min", "max", "fit", "prose", {
          screen: [lt]
        }, lt]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [q, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [q, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [q, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [q, e, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", lt, ct]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", dn]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Sr]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", q]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", _t, dn]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", rt, q]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", q]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", q]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [t]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [O]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [t]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [O]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...b(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", rt, ct]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", rt, q]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [t]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: g()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", q]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", q]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [O]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...v(), _f]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", Of]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Af]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [t]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [m]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [m]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [m]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [y]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [y]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [y]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [i]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [i]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [i]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [i]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [i]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [i]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [i]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [i]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [i]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [i]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [i]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [i]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [i]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [i]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [i]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [a]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [a]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [a]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [a]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [a]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [a]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [a]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [a]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [a]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [O]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...b(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [a]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [a]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [O]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: b()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [s]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [s]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [s]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [s]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [s]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [s]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [s]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [s]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...b()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [rt, q]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [rt, ct]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [t]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: P()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [t]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [O]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [rt, ct]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [t]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", lt, Rf]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Sr]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [O]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": S()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": S()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [n]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [c]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", lt, q]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [d]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [h]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [f]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [N]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [$]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [c]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [d]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [h]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [f]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [O]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [N]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [$]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [o]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [o]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [o]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", q]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: ee()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", q]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: ee()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", q]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [K]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [K]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [K]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [xr, q]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [B]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [B]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [M]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [M]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", q]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", t]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", q]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [t]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": g()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": g()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": g()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": g()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": g()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": g()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": g()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": g()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": g()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": g()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": g()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": g()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": g()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": g()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": g()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": g()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": g()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": g()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", q]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [t, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [rt, ct, dn]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [t, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
const Mf = /* @__PURE__ */ gf($f);
function dt(...t) {
  return Mf(rf(t));
}
var Wc = { exports: {} };
(function(t, e) {
  (function(r, n) {
    t.exports = n();
  })(Ot, function() {
    var r = 1e3, n = 6e4, s = 36e5, i = "millisecond", o = "second", a = "minute", c = "hour", d = "day", h = "week", f = "month", u = "quarter", y = "year", m = "date", x = "Invalid Date", w = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, O = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, L = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(C) {
      var v = ["th", "st", "nd", "rd"], b = C % 100;
      return "[" + C + (v[(b - 20) % 10] || v[b] || v[0]) + "]";
    } }, N = function(C, v, b) {
      var S = String(C);
      return !S || S.length >= v ? C : "" + Array(v + 1 - S.length).join(b) + C;
    }, K = { s: N, z: function(C) {
      var v = -C.utcOffset(), b = Math.abs(v), S = Math.floor(b / 60), k = b % 60;
      return (v <= 0 ? "+" : "-") + N(S, 2, "0") + ":" + N(k, 2, "0");
    }, m: function C(v, b) {
      if (v.date() < b.date())
        return -C(b, v);
      var S = 12 * (b.year() - v.year()) + (b.month() - v.month()), k = v.clone().add(S, f), j = b - k < 0, D = v.clone().add(S + (j ? -1 : 1), f);
      return +(-(S + (b - k) / (j ? k - D : D - k)) || 0);
    }, a: function(C) {
      return C < 0 ? Math.ceil(C) || 0 : Math.floor(C);
    }, p: function(C) {
      return { M: f, y, w: h, d, D: m, h: c, m: a, s: o, ms: i, Q: u }[C] || String(C || "").toLowerCase().replace(/s$/, "");
    }, u: function(C) {
      return C === void 0;
    } }, $ = "en", M = {};
    M[$] = L;
    var X = "$isDayjsObject", B = function(C) {
      return C instanceof g || !(!C || !C[X]);
    }, Z = function C(v, b, S) {
      var k;
      if (!v)
        return $;
      if (typeof v == "string") {
        var j = v.toLowerCase();
        M[j] && (k = j), b && (M[j] = b, k = j);
        var D = v.split("-");
        if (!k && D.length > 1)
          return C(D[0]);
      } else {
        var W = v.name;
        M[W] = v, k = W;
      }
      return !S && k && ($ = k), k || !S && $;
    }, Y = function(C, v) {
      if (B(C))
        return C.clone();
      var b = typeof v == "object" ? v : {};
      return b.date = C, b.args = arguments, new g(b);
    }, U = K;
    U.l = Z, U.i = B, U.w = function(C, v) {
      return Y(C, { locale: v.$L, utc: v.$u, x: v.$x, $offset: v.$offset });
    };
    var g = function() {
      function C(b) {
        this.$L = Z(b.locale, null, !0), this.parse(b), this.$x = this.$x || b.x || {}, this[X] = !0;
      }
      var v = C.prototype;
      return v.parse = function(b) {
        this.$d = function(S) {
          var k = S.date, j = S.utc;
          if (k === null)
            return /* @__PURE__ */ new Date(NaN);
          if (U.u(k))
            return /* @__PURE__ */ new Date();
          if (k instanceof Date)
            return new Date(k);
          if (typeof k == "string" && !/Z$/i.test(k)) {
            var D = k.match(w);
            if (D) {
              var W = D[2] - 1 || 0, ee = (D[7] || "0").substring(0, 3);
              return j ? new Date(Date.UTC(D[1], W, D[3] || 1, D[4] || 0, D[5] || 0, D[6] || 0, ee)) : new Date(D[1], W, D[3] || 1, D[4] || 0, D[5] || 0, D[6] || 0, ee);
            }
          }
          return new Date(k);
        }(b), this.init();
      }, v.init = function() {
        var b = this.$d;
        this.$y = b.getFullYear(), this.$M = b.getMonth(), this.$D = b.getDate(), this.$W = b.getDay(), this.$H = b.getHours(), this.$m = b.getMinutes(), this.$s = b.getSeconds(), this.$ms = b.getMilliseconds();
      }, v.$utils = function() {
        return U;
      }, v.isValid = function() {
        return this.$d.toString() !== x;
      }, v.isSame = function(b, S) {
        var k = Y(b);
        return this.startOf(S) <= k && k <= this.endOf(S);
      }, v.isAfter = function(b, S) {
        return Y(b) < this.startOf(S);
      }, v.isBefore = function(b, S) {
        return this.endOf(S) < Y(b);
      }, v.$g = function(b, S, k) {
        return U.u(b) ? this[S] : this.set(k, b);
      }, v.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, v.valueOf = function() {
        return this.$d.getTime();
      }, v.startOf = function(b, S) {
        var k = this, j = !!U.u(S) || S, D = U.p(b), W = function(Ie, fe) {
          var qe = U.w(k.$u ? Date.UTC(k.$y, fe, Ie) : new Date(k.$y, fe, Ie), k);
          return j ? qe : qe.endOf(d);
        }, ee = function(Ie, fe) {
          return U.w(k.toDate()[Ie].apply(k.toDate("s"), (j ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(fe)), k);
        }, ce = this.$W, de = this.$M, xe = this.$D, He = "set" + (this.$u ? "UTC" : "");
        switch (D) {
          case y:
            return j ? W(1, 0) : W(31, 11);
          case f:
            return j ? W(1, de) : W(0, de + 1);
          case h:
            var je = this.$locale().weekStart || 0, Ue = (ce < je ? ce + 7 : ce) - je;
            return W(j ? xe - Ue : xe + (6 - Ue), de);
          case d:
          case m:
            return ee(He + "Hours", 0);
          case c:
            return ee(He + "Minutes", 1);
          case a:
            return ee(He + "Seconds", 2);
          case o:
            return ee(He + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, v.endOf = function(b) {
        return this.startOf(b, !1);
      }, v.$set = function(b, S) {
        var k, j = U.p(b), D = "set" + (this.$u ? "UTC" : ""), W = (k = {}, k[d] = D + "Date", k[m] = D + "Date", k[f] = D + "Month", k[y] = D + "FullYear", k[c] = D + "Hours", k[a] = D + "Minutes", k[o] = D + "Seconds", k[i] = D + "Milliseconds", k)[j], ee = j === d ? this.$D + (S - this.$W) : S;
        if (j === f || j === y) {
          var ce = this.clone().set(m, 1);
          ce.$d[W](ee), ce.init(), this.$d = ce.set(m, Math.min(this.$D, ce.daysInMonth())).$d;
        } else
          W && this.$d[W](ee);
        return this.init(), this;
      }, v.set = function(b, S) {
        return this.clone().$set(b, S);
      }, v.get = function(b) {
        return this[U.p(b)]();
      }, v.add = function(b, S) {
        var k, j = this;
        b = Number(b);
        var D = U.p(S), W = function(de) {
          var xe = Y(j);
          return U.w(xe.date(xe.date() + Math.round(de * b)), j);
        };
        if (D === f)
          return this.set(f, this.$M + b);
        if (D === y)
          return this.set(y, this.$y + b);
        if (D === d)
          return W(1);
        if (D === h)
          return W(7);
        var ee = (k = {}, k[a] = n, k[c] = s, k[o] = r, k)[D] || 1, ce = this.$d.getTime() + b * ee;
        return U.w(ce, this);
      }, v.subtract = function(b, S) {
        return this.add(-1 * b, S);
      }, v.format = function(b) {
        var S = this, k = this.$locale();
        if (!this.isValid())
          return k.invalidDate || x;
        var j = b || "YYYY-MM-DDTHH:mm:ssZ", D = U.z(this), W = this.$H, ee = this.$m, ce = this.$M, de = k.weekdays, xe = k.months, He = k.meridiem, je = function(fe, qe, ot, Ut) {
          return fe && (fe[qe] || fe(S, j)) || ot[qe].slice(0, Ut);
        }, Ue = function(fe) {
          return U.s(W % 12 || 12, fe, "0");
        }, Ie = He || function(fe, qe, ot) {
          var Ut = fe < 12 ? "AM" : "PM";
          return ot ? Ut.toLowerCase() : Ut;
        };
        return j.replace(O, function(fe, qe) {
          return qe || function(ot) {
            switch (ot) {
              case "YY":
                return String(S.$y).slice(-2);
              case "YYYY":
                return U.s(S.$y, 4, "0");
              case "M":
                return ce + 1;
              case "MM":
                return U.s(ce + 1, 2, "0");
              case "MMM":
                return je(k.monthsShort, ce, xe, 3);
              case "MMMM":
                return je(xe, ce);
              case "D":
                return S.$D;
              case "DD":
                return U.s(S.$D, 2, "0");
              case "d":
                return String(S.$W);
              case "dd":
                return je(k.weekdaysMin, S.$W, de, 2);
              case "ddd":
                return je(k.weekdaysShort, S.$W, de, 3);
              case "dddd":
                return de[S.$W];
              case "H":
                return String(W);
              case "HH":
                return U.s(W, 2, "0");
              case "h":
                return Ue(1);
              case "hh":
                return Ue(2);
              case "a":
                return Ie(W, ee, !0);
              case "A":
                return Ie(W, ee, !1);
              case "m":
                return String(ee);
              case "mm":
                return U.s(ee, 2, "0");
              case "s":
                return String(S.$s);
              case "ss":
                return U.s(S.$s, 2, "0");
              case "SSS":
                return U.s(S.$ms, 3, "0");
              case "Z":
                return D;
            }
            return null;
          }(fe) || D.replace(":", "");
        });
      }, v.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, v.diff = function(b, S, k) {
        var j, D = this, W = U.p(S), ee = Y(b), ce = (ee.utcOffset() - this.utcOffset()) * n, de = this - ee, xe = function() {
          return U.m(D, ee);
        };
        switch (W) {
          case y:
            j = xe() / 12;
            break;
          case f:
            j = xe();
            break;
          case u:
            j = xe() / 3;
            break;
          case h:
            j = (de - ce) / 6048e5;
            break;
          case d:
            j = (de - ce) / 864e5;
            break;
          case c:
            j = de / s;
            break;
          case a:
            j = de / n;
            break;
          case o:
            j = de / r;
            break;
          default:
            j = de;
        }
        return k ? j : U.a(j);
      }, v.daysInMonth = function() {
        return this.endOf(f).$D;
      }, v.$locale = function() {
        return M[this.$L];
      }, v.locale = function(b, S) {
        if (!b)
          return this.$L;
        var k = this.clone(), j = Z(b, S, !0);
        return j && (k.$L = j), k;
      }, v.clone = function() {
        return U.w(this.$d, this);
      }, v.toDate = function() {
        return new Date(this.valueOf());
      }, v.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, v.toISOString = function() {
        return this.$d.toISOString();
      }, v.toString = function() {
        return this.$d.toUTCString();
      }, C;
    }(), P = g.prototype;
    return Y.prototype = P, [["$ms", i], ["$s", o], ["$m", a], ["$H", c], ["$W", d], ["$M", f], ["$y", y], ["$D", m]].forEach(function(C) {
      P[C[1]] = function(v) {
        return this.$g(v, C[0], C[1]);
      };
    }), Y.extend = function(C, v) {
      return C.$i || (C(v, g, Y), C.$i = !0), Y;
    }, Y.locale = Z, Y.isDayjs = B, Y.unix = function(C) {
      return Y(1e3 * C);
    }, Y.en = M[$], Y.Ls = M, Y.p = {}, Y;
  });
})(Wc);
var jf = Wc.exports;
const pn = /* @__PURE__ */ Cl(jf);
/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var If = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Df = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ys = (t, e) => {
  const r = pi(
    ({
      color: n = "currentColor",
      size: s = 24,
      strokeWidth: i = 2,
      absoluteStrokeWidth: o,
      className: a = "",
      children: c,
      ...d
    }, h) => me(
      "svg",
      {
        ref: h,
        ...If,
        width: s,
        height: s,
        stroke: n,
        strokeWidth: o ? Number(i) * 24 / Number(s) : i,
        className: ["lucide", `lucide-${Df(t)}`, a].join(" "),
        ...d
      },
      [
        ...e.map(([f, u]) => me(f, u)),
        ...Array.isArray(c) ? c : [c]
      ]
    )
  );
  return r.displayName = `${t}`, r;
};
/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bf = ys("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ff = ys("RefreshCcw", [
  ["path", { d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "14sxne" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16", key: "1hlbsb" }],
  ["path", { d: "M16 16h5v5", key: "ccwih5" }]
]);
/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hf = ys("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }]
]);
/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uf = ys("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), qf = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4vianca6w0s2x0a2z0ure5ba0by2idu3namex3narepublic11d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2ntley5rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0cast4mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dabur3d1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0ardian6cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6logistics9properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3ncaster6d0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2psy3ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2tura4vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9dnavy5lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0america6xi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0a1b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp2w2ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4finity6ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", zf = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", Dt = (t, e) => {
  for (const r in e)
    t[r] = e[r];
  return t;
}, oi = "numeric", ai = "ascii", ci = "alpha", kn = "asciinumeric", yn = "alphanumeric", li = "domain", Kc = "emoji", Wf = "scheme", Kf = "slashscheme", Uo = "whitespace";
function Vf(t, e) {
  return t in e || (e[t] = []), e[t];
}
function Tt(t, e, r) {
  e[oi] && (e[kn] = !0, e[yn] = !0), e[ai] && (e[kn] = !0, e[ci] = !0), e[kn] && (e[yn] = !0), e[ci] && (e[yn] = !0), e[yn] && (e[li] = !0), e[Kc] && (e[li] = !0);
  for (const n in e) {
    const s = Vf(n, r);
    s.indexOf(t) < 0 && s.push(t);
  }
}
function Qf(t, e) {
  const r = {};
  for (const n in e)
    e[n].indexOf(t) >= 0 && (r[n] = !0);
  return r;
}
function _e(t) {
  t === void 0 && (t = null), this.j = {}, this.jr = [], this.jd = null, this.t = t;
}
_e.groups = {};
_e.prototype = {
  accepts() {
    return !!this.t;
  },
  /**
   * Follow an existing transition from the given input to the next state.
   * Does not mutate.
   * @param {string} input character or token type to transition on
   * @returns {?State<T>} the next state, if any
   */
  go(t) {
    const e = this, r = e.j[t];
    if (r)
      return r;
    for (let n = 0; n < e.jr.length; n++) {
      const s = e.jr[n][0], i = e.jr[n][1];
      if (i && s.test(t))
        return i;
    }
    return e.jd;
  },
  /**
   * Whether the state has a transition for the given input. Set the second
   * argument to true to only look for an exact match (and not a default or
   * regular-expression-based transition)
   * @param {string} input
   * @param {boolean} exactOnly
   */
  has(t, e) {
    return e === void 0 && (e = !1), e ? t in this.j : !!this.go(t);
  },
  /**
   * Short for "transition all"; create a transition from the array of items
   * in the given list to the same final resulting state.
   * @param {string | string[]} inputs Group of inputs to transition on
   * @param {Transition<T> | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   */
  ta(t, e, r, n) {
    for (let s = 0; s < t.length; s++)
      this.tt(t[s], e, r, n);
  },
  /**
   * Short for "take regexp transition"; defines a transition for this state
   * when it encounters a token which matches the given regular expression
   * @param {RegExp} regexp Regular expression transition (populate first)
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  tr(t, e, r, n) {
    n = n || _e.groups;
    let s;
    return e && e.j ? s = e : (s = new _e(e), r && n && Tt(e, r, n)), this.jr.push([t, s]), s;
  },
  /**
   * Short for "take transitions", will take as many sequential transitions as
   * the length of the given input and returns the
   * resulting final state.
   * @param {string | string[]} input
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  ts(t, e, r, n) {
    let s = this;
    const i = t.length;
    if (!i)
      return s;
    for (let o = 0; o < i - 1; o++)
      s = s.tt(t[o]);
    return s.tt(t[i - 1], e, r, n);
  },
  /**
   * Short for "take transition", this is a method for building/working with
   * state machines.
   *
   * If a state already exists for the given input, returns it.
   *
   * If a token is specified, that state will emit that token when reached by
   * the linkify engine.
   *
   * If no state exists, it will be initialized with some default transitions
   * that resemble existing default transitions.
   *
   * If a state is given for the second argument, that state will be
   * transitioned to on the given input regardless of what that input
   * previously did.
   *
   * Specify a token group flags to define groups that this token belongs to.
   * The token will be added to corresponding entires in the given groups
   * object.
   *
   * @param {string} input character, token type to transition on
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of groups
   * @returns {State<T>} taken after the given input
   */
  tt(t, e, r, n) {
    n = n || _e.groups;
    const s = this;
    if (e && e.j)
      return s.j[t] = e, e;
    const i = e;
    let o, a = s.go(t);
    if (a ? (o = new _e(), Dt(o.j, a.j), o.jr.push.apply(o.jr, a.jr), o.jd = a.jd, o.t = a.t) : o = new _e(), i) {
      if (n)
        if (o.t && typeof o.t == "string") {
          const c = Dt(Qf(o.t, n), r);
          Tt(i, c, n);
        } else
          r && Tt(i, r, n);
      o.t = i;
    }
    return s.j[t] = o, o;
  }
};
const z = (t, e, r, n, s) => t.ta(e, r, n, s), Ae = (t, e, r, n, s) => t.tr(e, r, n, s), qo = (t, e, r, n, s) => t.ts(e, r, n, s), _ = (t, e, r, n, s) => t.tt(e, r, n, s), st = "WORD", ui = "UWORD", Dr = "LOCALHOST", hi = "TLD", fi = "UTLD", Cn = "SCHEME", Gt = "SLASH_SCHEME", $i = "NUM", Vc = "WS", Mi = "NL", Lr = "OPENBRACE", Nr = "CLOSEBRACE", Ln = "OPENBRACKET", Nn = "CLOSEBRACKET", Pn = "OPENPAREN", $n = "CLOSEPAREN", Mn = "OPENANGLEBRACKET", jn = "CLOSEANGLEBRACKET", In = "FULLWIDTHLEFTPAREN", Dn = "FULLWIDTHRIGHTPAREN", Bn = "LEFTCORNERBRACKET", Fn = "RIGHTCORNERBRACKET", Hn = "LEFTWHITECORNERBRACKET", Un = "RIGHTWHITECORNERBRACKET", qn = "FULLWIDTHLESSTHAN", zn = "FULLWIDTHGREATERTHAN", Wn = "AMPERSAND", Kn = "APOSTROPHE", Vn = "ASTERISK", ft = "AT", Qn = "BACKSLASH", Gn = "BACKTICK", Yn = "CARET", pt = "COLON", ji = "COMMA", Jn = "DOLLAR", ze = "DOT", Xn = "EQUALS", Ii = "EXCLAMATION", We = "HYPHEN", Zn = "PERCENT", es = "PIPE", ts = "PLUS", rs = "POUND", ns = "QUERY", Di = "QUOTE", Bi = "SEMI", Ke = "SLASH", Pr = "TILDE", ss = "UNDERSCORE", Qc = "EMOJI", is = "SYM";
var Gc = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  WORD: st,
  UWORD: ui,
  LOCALHOST: Dr,
  TLD: hi,
  UTLD: fi,
  SCHEME: Cn,
  SLASH_SCHEME: Gt,
  NUM: $i,
  WS: Vc,
  NL: Mi,
  OPENBRACE: Lr,
  CLOSEBRACE: Nr,
  OPENBRACKET: Ln,
  CLOSEBRACKET: Nn,
  OPENPAREN: Pn,
  CLOSEPAREN: $n,
  OPENANGLEBRACKET: Mn,
  CLOSEANGLEBRACKET: jn,
  FULLWIDTHLEFTPAREN: In,
  FULLWIDTHRIGHTPAREN: Dn,
  LEFTCORNERBRACKET: Bn,
  RIGHTCORNERBRACKET: Fn,
  LEFTWHITECORNERBRACKET: Hn,
  RIGHTWHITECORNERBRACKET: Un,
  FULLWIDTHLESSTHAN: qn,
  FULLWIDTHGREATERTHAN: zn,
  AMPERSAND: Wn,
  APOSTROPHE: Kn,
  ASTERISK: Vn,
  AT: ft,
  BACKSLASH: Qn,
  BACKTICK: Gn,
  CARET: Yn,
  COLON: pt,
  COMMA: ji,
  DOLLAR: Jn,
  DOT: ze,
  EQUALS: Xn,
  EXCLAMATION: Ii,
  HYPHEN: We,
  PERCENT: Zn,
  PIPE: es,
  PLUS: ts,
  POUND: rs,
  QUERY: ns,
  QUOTE: Di,
  SEMI: Bi,
  SLASH: Ke,
  TILDE: Pr,
  UNDERSCORE: ss,
  EMOJI: Qc,
  SYM: is
});
const Kt = /[a-z]/, Rs = new RegExp("\\p{L}", "u"), Ls = new RegExp("\\p{Emoji}", "u"), Ns = /\d/, zo = /\s/, Wo = `
`, Gf = "️", Yf = "‍";
let gn = null, mn = null;
function Jf(t) {
  t === void 0 && (t = []);
  const e = {};
  _e.groups = e;
  const r = new _e();
  gn == null && (gn = Ko(qf)), mn == null && (mn = Ko(zf)), _(r, "'", Kn), _(r, "{", Lr), _(r, "}", Nr), _(r, "[", Ln), _(r, "]", Nn), _(r, "(", Pn), _(r, ")", $n), _(r, "<", Mn), _(r, ">", jn), _(r, "（", In), _(r, "）", Dn), _(r, "「", Bn), _(r, "」", Fn), _(r, "『", Hn), _(r, "』", Un), _(r, "＜", qn), _(r, "＞", zn), _(r, "&", Wn), _(r, "*", Vn), _(r, "@", ft), _(r, "`", Gn), _(r, "^", Yn), _(r, ":", pt), _(r, ",", ji), _(r, "$", Jn), _(r, ".", ze), _(r, "=", Xn), _(r, "!", Ii), _(r, "-", We), _(r, "%", Zn), _(r, "|", es), _(r, "+", ts), _(r, "#", rs), _(r, "?", ns), _(r, '"', Di), _(r, "/", Ke), _(r, ";", Bi), _(r, "~", Pr), _(r, "_", ss), _(r, "\\", Qn);
  const n = Ae(r, Ns, $i, {
    [oi]: !0
  });
  Ae(n, Ns, n);
  const s = Ae(r, Kt, st, {
    [ai]: !0
  });
  Ae(s, Kt, s);
  const i = Ae(r, Rs, ui, {
    [ci]: !0
  });
  Ae(i, Kt), Ae(i, Rs, i);
  const o = Ae(r, zo, Vc, {
    [Uo]: !0
  });
  _(r, Wo, Mi, {
    [Uo]: !0
  }), _(o, Wo), Ae(o, zo, o);
  const a = Ae(r, Ls, Qc, {
    [Kc]: !0
  });
  Ae(a, Ls, a), _(a, Gf, a);
  const c = _(a, Yf);
  Ae(c, Ls, a);
  const d = [[Kt, s]], h = [[Kt, null], [Rs, i]];
  for (let f = 0; f < gn.length; f++)
    ut(r, gn[f], hi, st, d);
  for (let f = 0; f < mn.length; f++)
    ut(r, mn[f], fi, ui, h);
  Tt(hi, {
    tld: !0,
    ascii: !0
  }, e), Tt(fi, {
    utld: !0,
    alpha: !0
  }, e), ut(r, "file", Cn, st, d), ut(r, "mailto", Cn, st, d), ut(r, "http", Gt, st, d), ut(r, "https", Gt, st, d), ut(r, "ftp", Gt, st, d), ut(r, "ftps", Gt, st, d), Tt(Cn, {
    scheme: !0,
    ascii: !0
  }, e), Tt(Gt, {
    slashscheme: !0,
    ascii: !0
  }, e), t = t.sort((f, u) => f[0] > u[0] ? 1 : -1);
  for (let f = 0; f < t.length; f++) {
    const u = t[f][0], m = t[f][1] ? {
      [Wf]: !0
    } : {
      [Kf]: !0
    };
    u.indexOf("-") >= 0 ? m[li] = !0 : Kt.test(u) ? Ns.test(u) ? m[kn] = !0 : m[ai] = !0 : m[oi] = !0, qo(r, u, u, m);
  }
  return qo(r, "localhost", Dr, {
    ascii: !0
  }), r.jd = new _e(is), {
    start: r,
    tokens: Dt({
      groups: e
    }, Gc)
  };
}
function Xf(t, e) {
  const r = Zf(e.replace(/[A-Z]/g, (a) => a.toLowerCase())), n = r.length, s = [];
  let i = 0, o = 0;
  for (; o < n; ) {
    let a = t, c = null, d = 0, h = null, f = -1, u = -1;
    for (; o < n && (c = a.go(r[o])); )
      a = c, a.accepts() ? (f = 0, u = 0, h = a) : f >= 0 && (f += r[o].length, u++), d += r[o].length, i += r[o].length, o++;
    i -= f, o -= u, d -= f, s.push({
      t: h.t,
      // token type/name
      v: e.slice(i - d, i),
      // string value
      s: i - d,
      // start index
      e: i
      // end index (excluding)
    });
  }
  return s;
}
function Zf(t) {
  const e = [], r = t.length;
  let n = 0;
  for (; n < r; ) {
    let s = t.charCodeAt(n), i, o = s < 55296 || s > 56319 || n + 1 === r || (i = t.charCodeAt(n + 1)) < 56320 || i > 57343 ? t[n] : t.slice(n, n + 2);
    e.push(o), n += o.length;
  }
  return e;
}
function ut(t, e, r, n, s) {
  let i;
  const o = e.length;
  for (let a = 0; a < o - 1; a++) {
    const c = e[a];
    t.j[c] ? i = t.j[c] : (i = new _e(n), i.jr = s.slice(), t.j[c] = i), t = i;
  }
  return i = new _e(r), i.jr = s.slice(), t.j[e[o - 1]] = i, i;
}
function Ko(t) {
  const e = [], r = [];
  let n = 0, s = "0123456789";
  for (; n < t.length; ) {
    let i = 0;
    for (; s.indexOf(t[n + i]) >= 0; )
      i++;
    if (i > 0) {
      e.push(r.join(""));
      for (let o = parseInt(t.substring(n, n + i), 10); o > 0; o--)
        r.pop();
      n += i;
    } else
      r.push(t[n]), n++;
  }
  return e;
}
const dr = {
  defaultProtocol: "http",
  events: null,
  format: Vo,
  formatHref: Vo,
  nl2br: !1,
  tagName: "a",
  target: null,
  rel: null,
  validate: !0,
  truncate: 1 / 0,
  className: null,
  attributes: null,
  ignoreTags: [],
  render: null
};
function gs(t, e) {
  e === void 0 && (e = null);
  let r = Dt({}, dr);
  t && (r = Dt(r, t instanceof gs ? t.o : t));
  const n = r.ignoreTags, s = [];
  for (let i = 0; i < n.length; i++)
    s.push(n[i].toUpperCase());
  this.o = r, e && (this.defaultRender = e), this.ignoreTags = s;
}
gs.prototype = {
  o: dr,
  /**
   * @type string[]
   */
  ignoreTags: [],
  /**
   * @param {IntermediateRepresentation} ir
   * @returns {any}
   */
  defaultRender(t) {
    return t;
  },
  /**
   * Returns true or false based on whether a token should be displayed as a
   * link based on the user options.
   * @param {MultiToken} token
   * @returns {boolean}
   */
  check(t) {
    return this.get("validate", t.toString(), t);
  },
  // Private methods
  /**
   * Resolve an option's value based on the value of the option and the given
   * params. If operator and token are specified and the target option is
   * callable, automatically calls the function with the given argument.
   * @template {keyof Opts} K
   * @param {K} key Name of option to use
   * @param {string} [operator] will be passed to the target option if it's a
   * function. If not specified, RAW function value gets returned
   * @param {MultiToken} [token] The token from linkify.tokenize
   * @returns {Opts[K] | any}
   */
  get(t, e, r) {
    const n = e != null;
    let s = this.o[t];
    return s && (typeof s == "object" ? (s = r.t in s ? s[r.t] : dr[t], typeof s == "function" && n && (s = s(e, r))) : typeof s == "function" && n && (s = s(e, r.t, r)), s);
  },
  /**
   * @template {keyof Opts} L
   * @param {L} key Name of options object to use
   * @param {string} [operator]
   * @param {MultiToken} [token]
   * @returns {Opts[L] | any}
   */
  getObj(t, e, r) {
    let n = this.o[t];
    return typeof n == "function" && e != null && (n = n(e, r.t, r)), n;
  },
  /**
   * Convert the given token to a rendered element that may be added to the
   * calling-interface's DOM
   * @param {MultiToken} token Token to render to an HTML element
   * @returns {any} Render result; e.g., HTML string, DOM element, React
   *   Component, etc.
   */
  render(t) {
    const e = t.render(this);
    return (this.get("render", null, t) || this.defaultRender)(e, t.t, t);
  }
};
function Vo(t) {
  return t;
}
var Yc = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaults: dr,
  Options: gs,
  assign: Dt
});
function Jc(t, e) {
  this.t = "token", this.v = t, this.tk = e;
}
Jc.prototype = {
  isLink: !1,
  /**
   * Return the string this token represents.
   * @return {string}
   */
  toString() {
    return this.v;
  },
  /**
   * What should the value for this token be in the `href` HTML attribute?
   * Returns the `.toString` value by default.
   * @param {string} [scheme]
   * @return {string}
  */
  toHref(t) {
    return this.toString();
  },
  /**
   * @param {Options} options Formatting options
   * @returns {string}
   */
  toFormattedString(t) {
    const e = this.toString(), r = t.get("truncate", e, this), n = t.get("format", e, this);
    return r && n.length > r ? n.substring(0, r) + "…" : n;
  },
  /**
   *
   * @param {Options} options
   * @returns {string}
   */
  toFormattedHref(t) {
    return t.get("formatHref", this.toHref(t.get("defaultProtocol")), this);
  },
  /**
   * The start index of this token in the original input string
   * @returns {number}
   */
  startIndex() {
    return this.tk[0].s;
  },
  /**
   * The end index of this token in the original input string (up to this
   * index but not including it)
   * @returns {number}
   */
  endIndex() {
    return this.tk[this.tk.length - 1].e;
  },
  /**
  	Returns an object  of relevant values for this token, which includes keys
  	* type - Kind of token ('url', 'email', etc.)
  	* value - Original text
  	* href - The value that should be added to the anchor tag's href
  		attribute
  		@method toObject
  	@param {string} [protocol] `'http'` by default
  */
  toObject(t) {
    return t === void 0 && (t = dr.defaultProtocol), {
      type: this.t,
      value: this.toString(),
      isLink: this.isLink,
      href: this.toHref(t),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   *
   * @param {Options} options Formatting option
   */
  toFormattedObject(t) {
    return {
      type: this.t,
      value: this.toFormattedString(t),
      isLink: this.isLink,
      href: this.toFormattedHref(t),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   * Whether this token should be rendered as a link according to the given options
   * @param {Options} options
   * @returns {boolean}
   */
  validate(t) {
    return t.get("validate", this.toString(), this);
  },
  /**
   * Return an object that represents how this link should be rendered.
   * @param {Options} options Formattinng options
   */
  render(t) {
    const e = this, r = this.toHref(t.get("defaultProtocol")), n = t.get("formatHref", r, this), s = t.get("tagName", r, e), i = this.toFormattedString(t), o = {}, a = t.get("className", r, e), c = t.get("target", r, e), d = t.get("rel", r, e), h = t.getObj("attributes", r, e), f = t.getObj("events", r, e);
    return o.href = n, a && (o.class = a), c && (o.target = c), d && (o.rel = d), h && Dt(o, h), {
      tagName: s,
      attributes: o,
      content: i,
      eventListeners: f
    };
  }
};
function ms(t, e) {
  class r extends Jc {
    constructor(s, i) {
      super(s, i), this.t = t;
    }
  }
  for (const n in e)
    r.prototype[n] = e[n];
  return r.t = t, r;
}
const Qo = ms("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), Go = ms("text"), ed = ms("nl"), bn = ms("url", {
  isLink: !0,
  /**
  	Lowercases relevant parts of the domain and adds the protocol if
  	required. Note that this will not escape unsafe HTML characters in the
  	URL.
  		@param {string} [scheme] default scheme (e.g., 'https')
  	@return {string} the full href
  */
  toHref(t) {
    return t === void 0 && (t = dr.defaultProtocol), this.hasProtocol() ? this.v : `${t}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const t = this.tk;
    return t.length >= 2 && t[0].t !== Dr && t[1].t === pt;
  }
}), Re = (t) => new _e(t);
function td(t) {
  let {
    groups: e
  } = t;
  const r = e.domain.concat([Wn, Vn, ft, Qn, Gn, Yn, Jn, Xn, We, $i, Zn, es, ts, rs, Ke, is, Pr, ss]), n = [Kn, pt, ji, ze, Ii, ns, Di, Bi, Mn, jn, Lr, Nr, Nn, Ln, Pn, $n, In, Dn, Bn, Fn, Hn, Un, qn, zn], s = [Wn, Kn, Vn, Qn, Gn, Yn, Jn, Xn, We, Lr, Nr, Zn, es, ts, rs, ns, Ke, is, Pr, ss], i = Re(), o = _(i, Pr);
  z(o, s, o), z(o, e.domain, o);
  const a = Re(), c = Re(), d = Re();
  z(i, e.domain, a), z(i, e.scheme, c), z(i, e.slashscheme, d), z(a, s, o), z(a, e.domain, a);
  const h = _(a, ft);
  _(o, ft, h), _(c, ft, h), _(d, ft, h);
  const f = _(o, ze);
  z(f, s, o), z(f, e.domain, o);
  const u = Re();
  z(h, e.domain, u), z(u, e.domain, u);
  const y = _(u, ze);
  z(y, e.domain, u);
  const m = Re(Qo);
  z(y, e.tld, m), z(y, e.utld, m), _(h, Dr, m);
  const x = _(u, We);
  z(x, e.domain, u), z(m, e.domain, u), _(m, ze, y), _(m, We, x);
  const w = _(m, pt);
  z(w, e.numeric, Qo);
  const O = _(a, We), L = _(a, ze);
  z(O, e.domain, a), z(L, s, o), z(L, e.domain, a);
  const N = Re(bn);
  z(L, e.tld, N), z(L, e.utld, N), z(N, e.domain, a), z(N, s, o), _(N, ze, L), _(N, We, O), _(N, ft, h);
  const K = _(N, pt), $ = Re(bn);
  z(K, e.numeric, $);
  const M = Re(bn), X = Re();
  z(M, r, M), z(M, n, X), z(X, r, M), z(X, n, X), _(N, Ke, M), _($, Ke, M);
  const B = _(c, pt), Z = _(d, pt), Y = _(Z, Ke), U = _(Y, Ke);
  z(c, e.domain, a), _(c, ze, L), _(c, We, O), z(d, e.domain, a), _(d, ze, L), _(d, We, O), z(B, e.domain, M), _(B, Ke, M), z(U, e.domain, M), z(U, r, M), _(U, Ke, M);
  const g = [
    [Lr, Nr],
    // {}
    [Ln, Nn],
    // []
    [Pn, $n],
    // ()
    [Mn, jn],
    // <>
    [In, Dn],
    // （）
    [Bn, Fn],
    // 「」
    [Hn, Un],
    // 『』
    [qn, zn]
    // ＜＞
  ];
  for (let P = 0; P < g.length; P++) {
    const [C, v] = g[P], b = _(M, C);
    _(X, C, b), _(b, v, M);
    const S = Re(bn);
    z(b, r, S);
    const k = Re();
    z(b, n), z(S, r, S), z(S, n, k), z(k, r, S), z(k, n, k), _(S, v, M), _(k, v, M);
  }
  return _(i, Dr, N), _(i, Mi, ed), {
    start: i,
    tokens: Gc
  };
}
function rd(t, e, r) {
  let n = r.length, s = 0, i = [], o = [];
  for (; s < n; ) {
    let a = t, c = null, d = null, h = 0, f = null, u = -1;
    for (; s < n && !(c = a.go(r[s].t)); )
      o.push(r[s++]);
    for (; s < n && (d = c || a.go(r[s].t)); )
      c = null, a = d, a.accepts() ? (u = 0, f = a) : u >= 0 && u++, s++, h++;
    if (u < 0)
      s -= h, s < n && (o.push(r[s]), s++);
    else {
      o.length > 0 && (i.push(Ps(Go, e, o)), o = []), s -= u, h -= u;
      const y = f.t, m = r.slice(s - h, s);
      i.push(Ps(y, e, m));
    }
  }
  return o.length > 0 && i.push(Ps(Go, e, o)), i;
}
function Ps(t, e, r) {
  const n = r[0].s, s = r[r.length - 1].e, i = e.slice(n, s);
  return new t(i, r);
}
const ve = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function nd() {
  ve.scanner = Jf(ve.customSchemes);
  for (let t = 0; t < ve.tokenQueue.length; t++)
    ve.tokenQueue[t][1]({
      scanner: ve.scanner
    });
  ve.parser = td(ve.scanner.tokens);
  for (let t = 0; t < ve.pluginQueue.length; t++)
    ve.pluginQueue[t][1]({
      scanner: ve.scanner,
      parser: ve.parser
    });
  ve.initialized = !0;
}
function sd(t) {
  return ve.initialized || nd(), rd(ve.parser.start, t, Xf(ve.scanner.start, t));
}
function id(t, e, r) {
  const n = sd(t), s = [];
  for (let i = 0; i < n.length; i++) {
    const o = n[i];
    if (o.t === "nl" && e.get("nl2br")) {
      const a = `__linkify-el-${r.elementId++}`;
      s.push(oe.createElement("br", {
        key: a
      }));
    } else if (!o.isLink || !e.check(o))
      s.push(o.toString());
    else {
      let a = e.render(o);
      if (!("key" in a.props)) {
        const c = `__linkify-el-${r.elementId++}`, d = Yc.assign({
          key: c
        }, a.props);
        a = oe.cloneElement(a, d);
      }
      s.push(a);
    }
  }
  return s;
}
function Xc(t, e, r) {
  if (oe.Children.count(t.props.children) === 0)
    return t;
  const n = [];
  oe.Children.forEach(t.props.children, (o) => {
    typeof o == "string" ? n.push.apply(n, id(o, e, r)) : oe.isValidElement(o) ? typeof o.type == "string" && e.ignoreTags.indexOf(o.type.toUpperCase()) >= 0 ? n.push(o) : n.push(Xc(o, e, r)) : n.push(o);
  });
  const s = `__linkify-el-${r.elementId++}`, i = Yc.assign({
    key: s
  }, t.props);
  return oe.cloneElement(t, i, n);
}
const od = (t) => {
  let e = 0;
  const r = (c) => {
    let {
      tagName: d,
      attributes: h,
      content: f
    } = c;
    return h.key = `__linkify-lnk-${e++}`, h.class && (h.className = h.class, delete h.class), oe.createElement(d, h, f);
  }, n = {
    key: "__linkify-wrapper"
  };
  for (const c in t)
    c !== "options" && c !== "as" && c !== "tagName" && c !== "children" && (n[c] = t[c]);
  const s = new gs(t.options, r), i = t.as || t.tagName || oe.Fragment || "span", o = t.children, a = oe.createElement(i, n, o);
  return Xc(a, s, {
    elementId: 0
  });
}, ad = ({
  attributes: t,
  content: e
}) => {
  const {
    href: r,
    ...n
  } = t;
  return /* @__PURE__ */ A.jsx("a", { href: r, ...n, className: "underline", children: e });
}, Br = ({
  message: t,
  children: e
}) => {
  const {
    customStyles: r,
    adminId: n,
    isForManager: s
  } = Ht(), i = t.isBot;
  return /* @__PURE__ */ A.jsx(A.Fragment, { children: /* @__PURE__ */ A.jsx("div", { className: dt("flex min-h-9 justify-end pl-8", {
    "justify-start pr-8 pl-0": i
  }), children: /* @__PURE__ */ A.jsxs("div", { className: dt("flex flex-col gap-1 w-full items-end", {
    "items-start": i
  }), children: [
    s && /* @__PURE__ */ A.jsx("span", { className: dt("flex items-center text-xs text-muted-foreground", {
      "justify-end": !i
    }), children: s ? t.isBot ? "From bot" : "From user" : null }),
    /* @__PURE__ */ A.jsxs(od, { as: "div", options: {
      render: ad,
      className: dt("underline", {
        "text-primary": !i
      })
    }, className: dt("bg-primary rounded-md text-white flex items-center justify-end w-max p-2 max-w-72 text-wrap whitespace-pre-line", {
      "bg-muted text-neutral-900 justify-start": i
    }), style: {
      wordBreak: "break-word",
      backgroundColor: i || r == null ? void 0 : r.color
    }, children: [
      t.message.trim().length ? t.message : null,
      e
    ] })
  ] }) }) });
};
function os() {
  return os = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }, os.apply(this, arguments);
}
function cd(t, e) {
  typeof t == "function" ? t(e) : t != null && (t.current = e);
}
function ld(...t) {
  return (e) => t.forEach(
    (r) => cd(r, e)
  );
}
const Zc = /* @__PURE__ */ pi((t, e) => {
  const { children: r, ...n } = t, s = _r.toArray(r), i = s.find(hd);
  if (i) {
    const o = i.props.children, a = s.map((c) => c === i ? _r.count(o) > 1 ? _r.only(null) : /* @__PURE__ */ It(o) ? o.props.children : null : c);
    return /* @__PURE__ */ me(di, os({}, n, {
      ref: e
    }), /* @__PURE__ */ It(o) ? /* @__PURE__ */ ha(o, void 0, a) : null);
  }
  return /* @__PURE__ */ me(di, os({}, n, {
    ref: e
  }), r);
});
Zc.displayName = "Slot";
const di = /* @__PURE__ */ pi((t, e) => {
  const { children: r, ...n } = t;
  return /* @__PURE__ */ It(r) ? /* @__PURE__ */ ha(r, {
    ...fd(n, r.props),
    ref: e ? ld(e, r.ref) : r.ref
  }) : _r.count(r) > 1 ? _r.only(null) : null;
});
di.displayName = "SlotClone";
const ud = ({ children: t }) => /* @__PURE__ */ me(Bt, null, t);
function hd(t) {
  return /* @__PURE__ */ It(t) && t.type === ud;
}
function fd(t, e) {
  const r = {
    ...e
  };
  for (const n in e) {
    const s = t[n], i = e[n];
    /^on[A-Z]/.test(n) ? s && i ? r[n] = (...a) => {
      i(...a), s(...a);
    } : s && (r[n] = s) : n === "style" ? r[n] = {
      ...s,
      ...i
    } : n === "className" && (r[n] = [
      s,
      i
    ].filter(Boolean).join(" "));
  }
  return {
    ...t,
    ...r
  };
}
function el(t) {
  var e, r, n = "";
  if (typeof t == "string" || typeof t == "number")
    n += t;
  else if (typeof t == "object")
    if (Array.isArray(t))
      for (e = 0; e < t.length; e++)
        t[e] && (r = el(t[e])) && (n && (n += " "), n += r);
    else
      for (e in t)
        t[e] && (n && (n += " "), n += e);
  return n;
}
function dd() {
  for (var t, e, r = 0, n = ""; r < arguments.length; )
    (t = arguments[r++]) && (e = el(t)) && (n && (n += " "), n += e);
  return n;
}
const Yo = (t) => typeof t == "boolean" ? "".concat(t) : t === 0 ? "0" : t, Jo = dd, pd = (t, e) => (r) => {
  var n;
  if ((e == null ? void 0 : e.variants) == null)
    return Jo(t, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: s, defaultVariants: i } = e, o = Object.keys(s).map((d) => {
    const h = r == null ? void 0 : r[d], f = i == null ? void 0 : i[d];
    if (h === null)
      return null;
    const u = Yo(h) || Yo(f);
    return s[d][u];
  }), a = r && Object.entries(r).reduce((d, h) => {
    let [f, u] = h;
    return u === void 0 || (d[f] = u), d;
  }, {}), c = e == null || (n = e.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((d, h) => {
    let { class: f, className: u, ...y } = h;
    return Object.entries(y).every((m) => {
      let [x, w] = m;
      return Array.isArray(w) ? w.includes({
        ...i,
        ...a
      }[x]) : {
        ...i,
        ...a
      }[x] === w;
    }) ? [
      ...d,
      f,
      u
    ] : d;
  }, []);
  return Jo(t, o, c, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, yd = pd("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
      destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
      outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
      message: "bg-background shadow-sm border  text-primary border-primary hover:bg-primary/10 !rounded-full"
    },
    size: {
      default: "h-9 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-10 rounded-md px-8",
      icon: "h-9 w-9"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
}), bs = oe.forwardRef(({
  className: t,
  variant: e,
  size: r,
  asChild: n = !1,
  ...s
}, i) => {
  const o = n ? Zc : "button";
  return /* @__PURE__ */ A.jsx(o, { className: dt(yd({
    variant: e,
    size: r,
    className: t
  })), ref: i, ...s });
});
bs.displayName = "Button";
const gd = ({
  message: t
}) => {
  const {
    handleSendMessage: e,
    customStyles: r,
    handleClickButton: n,
    disabledButtons: s
  } = Ht(), i = r != null && r.color ? xi(r.color) : null;
  return /* @__PURE__ */ A.jsxs("div", { className: "space-y-2", "data-buttons": !0, children: [
    /* @__PURE__ */ A.jsx(Br, { message: t }),
    /* @__PURE__ */ A.jsx("div", { className: "flex gap-1 items-center w-[80%] justify-center flex-wrap mx-auto", children: t.template.data.map((o) => /* @__PURE__ */ A.jsx(bs, { disabled: !!(s != null && s.find((a) => a === t.createdAt)), variant: "message", size: "sm", onClick: () => {
      if (o.type === "postback") {
        if (!o.payload)
          return;
        e({
          message: o.payload,
          extraData: o.title,
          type: "list-button"
        });
      }
      if (o.type === "web_url") {
        if (!o.url)
          return;
        hc(o.url);
      }
      n == null || n(t.createdAt);
    }, style: {
      "--primary": i ? `${i.h} ${i.s}% ${i.l}%` : void 0
    }, children: o.title }, `${o.title}-${o.type}`)) })
  ] });
}, md = vi((t) => /* @__PURE__ */ A.jsxs("div", { className: "w-full space-y-1 text-center", children: [
  /* @__PURE__ */ A.jsx("img", { src: t.v0, alt: t.v1, className: "rounded-md object-cover h-full w-full" }),
  /* @__PURE__ */ A.jsx("h3", { className: "font-semibold", children: t.v2 }),
  /* @__PURE__ */ A.jsx("p", { className: "text-sm", children: t.v3 }),
  t.v4
] }), {
  name: "Card_1",
  portals: ["v2", "v3", "v4"]
}), bd = ({
  card: t
}) => {
  const {
    handleSendMessage: e,
    customStyles: r
  } = Ht(), n = r != null && r.color ? xi(r.color) : null;
  return (
    /*@million jsx-skip*/
    /* @__PURE__ */ A.jsx(md, { v0: t.image_url, v1: t.title, v2: t.title, v3: t.subtitle, v4: t.buttons && t.buttons.length > 0 && /* @__PURE__ */ A.jsx("div", { className: "w-full mt-2", children: t.buttons.map((s, i) => /* @__PURE__ */ A.jsx(bs, { variant: "message", className: "!rounded-md w-full", onClick: () => {
      if (s.type === "postback") {
        if (!s.payload)
          return;
        e({
          message: s.payload,
          extraData: s.title,
          type: "list-button"
        });
      }
      if (s.type === "web_url") {
        if (!s.url)
          return;
        hc(s.url);
      }
    }, style: {
      "--primary": n ? `${n.h} ${n.s}% ${n.l}%` : void 0
    }, children: s.title }, i)) }) })
  );
}, vd = ({
  message: t
}) => /* @__PURE__ */ A.jsx("div", { className: "flex flex-col space-y-2 gap-1", children: t.template.data.map((e, r) => /* @__PURE__ */ A.jsx(Br, { message: t, children: /* @__PURE__ */ A.jsx(bd, { card: e }) }, r)) }), wd = () => /* @__PURE__ */ A.jsx(Br, { message: {
  isBot: !0,
  message: "",
  template: {},
  userId: "typing",
  createdAt: (/* @__PURE__ */ new Date()).toISOString()
}, children: /* @__PURE__ */ A.jsxs("div", { className: "flex space-x-1 h-full flex-1 items-center", children: [
  /* @__PURE__ */ A.jsx("div", { className: "w-1 h-1 bg-neutral-800 rounded-full animate-bounce [animation-delay:-0.3s]" }),
  /* @__PURE__ */ A.jsx("div", { className: "w-1 h-1 bg-neutral-800 rounded-full animate-bounce [animation-delay:-0.15s]" }),
  /* @__PURE__ */ A.jsx("div", { className: "w-1 h-1 bg-neutral-800 rounded-full animate-bounce" })
] }) }), Ed = () => {
  const t = ke(null), {
    messages: e,
    isLoadingMessages: r
  } = Ht();
  Me(() => {
    t.current && t.current.scrollIntoView({
      behavior: "smooth"
    });
  }, [e]);
  const n = (s, i) => {
    var o, a;
    return (s == null ? void 0 : s.userId) === "typing" ? /* @__PURE__ */ A.jsx(wd, {}) : ((o = s == null ? void 0 : s.template) == null ? void 0 : o.type) === "list-button" ? /* @__PURE__ */ A.jsx(gd, { message: s }, `${s.createdAt}+${i}`) : ((a = s == null ? void 0 : s.template) == null ? void 0 : a.type) === "list-card" ? /* @__PURE__ */ A.jsx(vd, { message: s }, `${s.createdAt}+${i}`) : s.type === "image" ? /* @__PURE__ */ A.jsx(Br, { message: s, children: /* @__PURE__ */ A.jsx("img", { src: s.url, alt: "", className: "rounded-md object-cover h-full w-full" }) }) : /* @__PURE__ */ A.jsx(Br, { message: s }, `${s.createdAt}+${i}`);
  };
  return /* @__PURE__ */ A.jsx("div", { className: "p-2 flex-1 pr-3 overflow-y-auto", children: r ? /* @__PURE__ */ A.jsx("div", { children: /* @__PURE__ */ A.jsx(Bf, { className: "animate-spin w-4 h-4" }) }) : /* @__PURE__ */ A.jsxs("div", { className: "flex flex-col gap-1", children: [
    e.length > 0 && /* @__PURE__ */ A.jsx("div", { className: "text-center text-xs text-neutral-500 py-2", children: pn(e[0].createdAt).format("DD/MM/YYYY HH:mm") }),
    e.map((s, i) => /* @__PURE__ */ A.jsxs(Bt, { children: [
      i > 0 && pn(s.createdAt).diff(pn(e[i - 1].createdAt), "minutes") > 10 && /* @__PURE__ */ A.jsx("div", { className: "text-center text-xs text-neutral-500 py-2", children: pn(s.createdAt).format("DD/MM/YYYY HH:mm") }),
      n(s, i)
    ] }, i)),
    /* @__PURE__ */ A.jsx("div", { ref: t })
  ] }) });
}, xd = vi((t) => /* @__PURE__ */ A.jsx("header", { className: "flex items-center bg-primary h-[3.75rem]", style: t.v0, children: /* @__PURE__ */ A.jsxs("div", { className: "flex items-center  px-2 gap-2 justify-between w-full", children: [
  /* @__PURE__ */ A.jsxs("div", { className: "flex items-center p-2 gap-2", children: [
    t.v1,
    /* @__PURE__ */ A.jsx("span", { className: "font-medium text-white", children: t.v2 })
  ] }),
  /* @__PURE__ */ A.jsxs("div", { className: "flex items-center gap-3", children: [
    t.v3,
    t.v4
  ] })
] }) }), {
  name: "Header_1",
  portals: ["v1", "v2", "v3", "v4"]
}), Sd = () => {
  const {
    handleClose: t,
    isShowClose: e,
    handleReload: r,
    customStyles: n,
    isForManager: s
  } = Ht();
  return (
    /*@million jsx-skip*/
    /* @__PURE__ */ A.jsx(xd, { v0: {
      backgroundColor: n == null ? void 0 : n.color
    }, v1: n != null && n.logoUrl ? /* @__PURE__ */ A.jsx("img", { src: n == null ? void 0 : n.logoUrl, alt: "logo", className: "w-8 h-8 rounded-full overflow-hidden object-cover" }) : /* @__PURE__ */ A.jsx("svg", { width: "32", height: "32", className: "text-neutral-700 fill-neutral-700 bg-neutral-700 rounded-full", children: /* @__PURE__ */ A.jsx("text", { "text-anchor": "middle", x: "50%", y: "50%", dy: "0.35em", fill: "#ffffff", "font-size": "1rem", children: "B" }) }), v2: (n == null ? void 0 : n.name) || "DialogueBot", v3: !s && /* @__PURE__ */ A.jsx("div", { className: "w-6 h-6 flex items-center justify-center cursor-pointer", onClick: r, children: /* @__PURE__ */ A.jsx(Ff, { className: "w-4 h-4 text-white" }) }), v4: e && /* @__PURE__ */ A.jsx("div", { className: "w-6 h-6 flex items-center justify-center cursor-pointer", onClick: t, children: /* @__PURE__ */ A.jsx(Uf, { className: "w-4 h-4 text-white" }) }) })
  );
}, tl = oe.forwardRef(({
  className: t,
  type: e,
  ...r
}, n) => /* @__PURE__ */ A.jsx("input", { type: e, className: dt("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", t), ref: n, ...r }));
tl.displayName = "Input";
const kd = () => {
  const {
    handleSendMessage: t,
    disableInput: e,
    customStyles: r
  } = Ht(), [n, s] = xt(""), i = (a) => {
    a.key === "Enter" && (a.preventDefault(), t({
      message: n
    }), s(""));
  }, o = r != null && r.color ? xi(r.color) : null;
  return /* @__PURE__ */ A.jsxs("div", { className: "flex items-center py-2 px-3 gap-2 border-input border-t", children: [
    /* @__PURE__ */ A.jsx(tl, { className: "flex-1", placeholder: "Type a message...", value: n, onChange: (a) => s(a.target.value), onKeyDown: i, disabled: e, style: {
      "--primary": o ? `${o.h} ${o.s}% ${o.l}%` : void 0,
      "--ring": o ? `${o.h} ${o.s}% ${o.l}%` : void 0
    } }),
    /* @__PURE__ */ A.jsx(bs, { size: "icon", className: "flex-shrink-0", onClick: () => {
      t({
        message: n,
        cb: () => s("")
      });
    }, disabled: e, style: {
      "--primary": o ? `${o.h} ${o.s}% ${o.l}%` : void 0
    }, children: /* @__PURE__ */ A.jsx(Hf, { className: "w-4 h-4" }) })
  ] });
}, Cd = new Wu(), Od = vi((t) => /* @__PURE__ */ A.jsx("div", { className: t.v0, style: t.v1, children: /* @__PURE__ */ A.jsxs("div", { className: "flex flex-col h-full overflow-hidden w-full flex-1", children: [
  t.v2,
  /* @__PURE__ */ A.jsxs("div", { className: "flex-1 flex flex-col min-h-[1px]", children: [
    t.v3,
    t.v4
  ] })
] }) }), {
  name: "ChatBox_1",
  portals: ["v2", "v3", "v4"]
}), _d = ({
  className: t
}) => {
  const {
    customStyles: e,
    isForManager: r,
    onEndBot: n
  } = Ht();
  return Ic(() => {
    n && n();
  }), /*@million jsx-skip*/
  /* @__PURE__ */ A.jsx(Od, { v0: dt("w-full h-screen flex flex-col shadow chatbox", t), v1: {
    width: e == null ? void 0 : e.windowSize.width,
    height: e == null ? void 0 : e.windowSize.height
  }, v2: /* @__PURE__ */ A.jsx(Sd, {}), v3: /* @__PURE__ */ A.jsx(Ed, {}), v4: !r && /* @__PURE__ */ A.jsx(kd, {}) });
}, Md = (t) => /* @__PURE__ */ A.jsx(Gu, { client: Cd, children: /* @__PURE__ */ A.jsx(tf, { ...t, children: /* @__PURE__ */ A.jsx(_d, { className: t.className }) }) });
export {
  Md as ChatBox
};
//# sourceMappingURL=index.es.js.map
