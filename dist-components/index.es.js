var vn = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
};
var u = (t, e, r) => (vn(t, e, "read from private field"), r ? r.call(t) : e.get(t)), L = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, T = (t, e, r, n) => (vn(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r);
var Lr = (t, e, r, n) => ({
  set _(s) {
    T(t, e, s, r);
  },
  get _() {
    return u(t, e, n);
  }
}), Q = (t, e, r) => (vn(t, e, "access private method"), r);
import * as we from "react";
import Ai, { createContext as Ti, isValidElement as xt, createElement as pe, Fragment as Et, useEffect as Ye, useRef as Ae, useLayoutEffect as Na, useState as _t, memo as ja, useContext as Ri, useCallback as Hr, useMemo as Vr, forwardRef as Zn, Children as ar, cloneElement as Pi } from "react";
import { createPortal as Da } from "react-dom";
var ut = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ba(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var kn = { exports: {} }, Jt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ps;
function Ia() {
  if (Ps)
    return Jt;
  Ps = 1;
  var t = Ai, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, s = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(a, l, f) {
    var h, p = {}, d = null, y = null;
    f !== void 0 && (d = "" + f), l.key !== void 0 && (d = "" + l.key), l.ref !== void 0 && (y = l.ref);
    for (h in l)
      n.call(l, h) && !i.hasOwnProperty(h) && (p[h] = l[h]);
    if (a && a.defaultProps)
      for (h in l = a.defaultProps, l)
        p[h] === void 0 && (p[h] = l[h]);
    return { $$typeof: e, type: a, key: d, ref: y, props: p, _owner: s.current };
  }
  return Jt.Fragment = r, Jt.jsx = o, Jt.jsxs = o, Jt;
}
var Zt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $s;
function Fa() {
  return $s || ($s = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Ai, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), v = Symbol.iterator, _ = "@@iterator";
    function m(c) {
      if (c === null || typeof c != "object")
        return null;
      var x = v && c[v] || c[_];
      return typeof x == "function" ? x : null;
    }
    var k = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function M(c) {
      {
        for (var x = arguments.length, O = new Array(x > 1 ? x - 1 : 0), F = 1; F < x; F++)
          O[F - 1] = arguments[F];
        P("error", c, O);
      }
    }
    function P(c, x, O) {
      {
        var F = k.ReactDebugCurrentFrame, K = F.getStackAddendum();
        K !== "" && (x += "%s", O = O.concat([K]));
        var Z = O.map(function(W) {
          return String(W);
        });
        Z.unshift("Warning: " + x), Function.prototype.apply.call(console[c], console, Z);
      }
    }
    var q = !1, $ = !1, Y = !1, ne = !1, B = !1, G;
    G = Symbol.for("react.module.reference");
    function X(c) {
      return !!(typeof c == "string" || typeof c == "function" || c === n || c === i || B || c === s || c === f || c === h || ne || c === y || q || $ || Y || typeof c == "object" && c !== null && (c.$$typeof === d || c.$$typeof === p || c.$$typeof === o || c.$$typeof === a || c.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      c.$$typeof === G || c.getModuleId !== void 0));
    }
    function D(c, x, O) {
      var F = c.displayName;
      if (F)
        return F;
      var K = x.displayName || x.name || "";
      return K !== "" ? O + "(" + K + ")" : O;
    }
    function g(c) {
      return c.displayName || "Context";
    }
    function A(c) {
      if (c == null)
        return null;
      if (typeof c.tag == "number" && M("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof c == "function")
        return c.displayName || c.name || null;
      if (typeof c == "string")
        return c;
      switch (c) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case s:
          return "StrictMode";
        case f:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case a:
            var x = c;
            return g(x) + ".Consumer";
          case o:
            var O = c;
            return g(O._context) + ".Provider";
          case l:
            return D(c, c.render, "ForwardRef");
          case p:
            var F = c.displayName || null;
            return F !== null ? F : A(c.type) || "Memo";
          case d: {
            var K = c, Z = K._payload, W = K._init;
            try {
              return A(W(Z));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var E = Object.assign, b = 0, w, C, S, N, j, V, J;
    function ie() {
    }
    ie.__reactDisabledLog = !0;
    function ue() {
      {
        if (b === 0) {
          w = console.log, C = console.info, S = console.warn, N = console.error, j = console.group, V = console.groupCollapsed, J = console.groupEnd;
          var c = {
            configurable: !0,
            enumerable: !0,
            value: ie,
            writable: !0
          };
          Object.defineProperties(console, {
            info: c,
            log: c,
            warn: c,
            error: c,
            group: c,
            groupCollapsed: c,
            groupEnd: c
          });
        }
        b++;
      }
    }
    function be() {
      {
        if (b--, b === 0) {
          var c = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: E({}, c, {
              value: w
            }),
            info: E({}, c, {
              value: C
            }),
            warn: E({}, c, {
              value: S
            }),
            error: E({}, c, {
              value: N
            }),
            group: E({}, c, {
              value: j
            }),
            groupCollapsed: E({}, c, {
              value: V
            }),
            groupEnd: E({}, c, {
              value: J
            })
          });
        }
        b < 0 && M("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Le = k.ReactCurrentDispatcher, Te;
    function Ne(c, x, O) {
      {
        if (Te === void 0)
          try {
            throw Error();
          } catch (K) {
            var F = K.stack.trim().match(/\n( *(at )?)/);
            Te = F && F[1] || "";
          }
        return `
` + Te + c;
      }
    }
    var Re = !1, le;
    {
      var je = typeof WeakMap == "function" ? WeakMap : Map;
      le = new je();
    }
    function Ke(c, x) {
      if (!c || Re)
        return "";
      {
        var O = le.get(c);
        if (O !== void 0)
          return O;
      }
      var F;
      Re = !0;
      var K = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Z;
      Z = Le.current, Le.current = null, ue();
      try {
        if (x) {
          var W = function() {
            throw Error();
          };
          if (Object.defineProperty(W.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(W, []);
            } catch (He) {
              F = He;
            }
            Reflect.construct(c, [], W);
          } else {
            try {
              W.call();
            } catch (He) {
              F = He;
            }
            c.call(W.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (He) {
            F = He;
          }
          c();
        }
      } catch (He) {
        if (He && F && typeof He.stack == "string") {
          for (var H = He.stack.split(`
`), ye = F.stack.split(`
`), oe = H.length - 1, ae = ye.length - 1; oe >= 1 && ae >= 0 && H[oe] !== ye[ae]; )
            ae--;
          for (; oe >= 1 && ae >= 0; oe--, ae--)
            if (H[oe] !== ye[ae]) {
              if (oe !== 1 || ae !== 1)
                do
                  if (oe--, ae--, ae < 0 || H[oe] !== ye[ae]) {
                    var _e = `
` + H[oe].replace(" at new ", " at ");
                    return c.displayName && _e.includes("<anonymous>") && (_e = _e.replace("<anonymous>", c.displayName)), typeof c == "function" && le.set(c, _e), _e;
                  }
                while (oe >= 1 && ae >= 0);
              break;
            }
        }
      } finally {
        Re = !1, Le.current = Z, be(), Error.prepareStackTrace = K;
      }
      var At = c ? c.displayName || c.name : "", Rs = At ? Ne(At) : "";
      return typeof c == "function" && le.set(c, Rs), Rs;
    }
    function Ct(c, x, O) {
      return Ke(c, !1);
    }
    function pa(c) {
      var x = c.prototype;
      return !!(x && x.isReactComponent);
    }
    function Pr(c, x, O) {
      if (c == null)
        return "";
      if (typeof c == "function")
        return Ke(c, pa(c));
      if (typeof c == "string")
        return Ne(c);
      switch (c) {
        case f:
          return Ne("Suspense");
        case h:
          return Ne("SuspenseList");
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case l:
            return Ct(c.render);
          case p:
            return Pr(c.type, x, O);
          case d: {
            var F = c, K = F._payload, Z = F._init;
            try {
              return Pr(Z(K), x, O);
            } catch {
            }
          }
        }
      return "";
    }
    var $r = Object.prototype.hasOwnProperty, bs = {}, vs = k.ReactDebugCurrentFrame;
    function Mr(c) {
      if (c) {
        var x = c._owner, O = Pr(c.type, c._source, x ? x.type : null);
        vs.setExtraStackFrame(O);
      } else
        vs.setExtraStackFrame(null);
    }
    function ya(c, x, O, F, K) {
      {
        var Z = Function.call.bind($r);
        for (var W in c)
          if (Z(c, W)) {
            var H = void 0;
            try {
              if (typeof c[W] != "function") {
                var ye = Error((F || "React class") + ": " + O + " type `" + W + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[W] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ye.name = "Invariant Violation", ye;
              }
              H = c[W](x, W, F, O, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (oe) {
              H = oe;
            }
            H && !(H instanceof Error) && (Mr(K), M("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", F || "React class", O, W, typeof H), Mr(null)), H instanceof Error && !(H.message in bs) && (bs[H.message] = !0, Mr(K), M("Failed %s type: %s", O, H.message), Mr(null));
          }
      }
    }
    var ga = Array.isArray;
    function pn(c) {
      return ga(c);
    }
    function ma(c) {
      {
        var x = typeof Symbol == "function" && Symbol.toStringTag, O = x && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return O;
      }
    }
    function ba(c) {
      try {
        return ws(c), !1;
      } catch {
        return !0;
      }
    }
    function ws(c) {
      return "" + c;
    }
    function xs(c) {
      if (ba(c))
        return M("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ma(c)), ws(c);
    }
    var Xt = k.ReactCurrentOwner, va = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _s, Es, yn;
    yn = {};
    function wa(c) {
      if ($r.call(c, "ref")) {
        var x = Object.getOwnPropertyDescriptor(c, "ref").get;
        if (x && x.isReactWarning)
          return !1;
      }
      return c.ref !== void 0;
    }
    function xa(c) {
      if ($r.call(c, "key")) {
        var x = Object.getOwnPropertyDescriptor(c, "key").get;
        if (x && x.isReactWarning)
          return !1;
      }
      return c.key !== void 0;
    }
    function _a(c, x) {
      if (typeof c.ref == "string" && Xt.current && x && Xt.current.stateNode !== x) {
        var O = A(Xt.current.type);
        yn[O] || (M('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', A(Xt.current.type), c.ref), yn[O] = !0);
      }
    }
    function Ea(c, x) {
      {
        var O = function() {
          _s || (_s = !0, M("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", x));
        };
        O.isReactWarning = !0, Object.defineProperty(c, "key", {
          get: O,
          configurable: !0
        });
      }
    }
    function Sa(c, x) {
      {
        var O = function() {
          Es || (Es = !0, M("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", x));
        };
        O.isReactWarning = !0, Object.defineProperty(c, "ref", {
          get: O,
          configurable: !0
        });
      }
    }
    var ka = function(c, x, O, F, K, Z, W) {
      var H = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: c,
        key: x,
        ref: O,
        props: W,
        // Record the component responsible for creating this element.
        _owner: Z
      };
      return H._store = {}, Object.defineProperty(H._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(H, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: F
      }), Object.defineProperty(H, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: K
      }), Object.freeze && (Object.freeze(H.props), Object.freeze(H)), H;
    };
    function Ca(c, x, O, F, K) {
      {
        var Z, W = {}, H = null, ye = null;
        O !== void 0 && (xs(O), H = "" + O), xa(x) && (xs(x.key), H = "" + x.key), wa(x) && (ye = x.ref, _a(x, K));
        for (Z in x)
          $r.call(x, Z) && !va.hasOwnProperty(Z) && (W[Z] = x[Z]);
        if (c && c.defaultProps) {
          var oe = c.defaultProps;
          for (Z in oe)
            W[Z] === void 0 && (W[Z] = oe[Z]);
        }
        if (H || ye) {
          var ae = typeof c == "function" ? c.displayName || c.name || "Unknown" : c;
          H && Ea(W, ae), ye && Sa(W, ae);
        }
        return ka(c, H, ye, K, F, Xt.current, W);
      }
    }
    var gn = k.ReactCurrentOwner, Ss = k.ReactDebugCurrentFrame;
    function Ot(c) {
      if (c) {
        var x = c._owner, O = Pr(c.type, c._source, x ? x.type : null);
        Ss.setExtraStackFrame(O);
      } else
        Ss.setExtraStackFrame(null);
    }
    var mn;
    mn = !1;
    function bn(c) {
      return typeof c == "object" && c !== null && c.$$typeof === e;
    }
    function ks() {
      {
        if (gn.current) {
          var c = A(gn.current.type);
          if (c)
            return `

Check the render method of \`` + c + "`.";
        }
        return "";
      }
    }
    function Oa(c) {
      {
        if (c !== void 0) {
          var x = c.fileName.replace(/^.*[\\\/]/, ""), O = c.lineNumber;
          return `

Check your code at ` + x + ":" + O + ".";
        }
        return "";
      }
    }
    var Cs = {};
    function Aa(c) {
      {
        var x = ks();
        if (!x) {
          var O = typeof c == "string" ? c : c.displayName || c.name;
          O && (x = `

Check the top-level render call using <` + O + ">.");
        }
        return x;
      }
    }
    function Os(c, x) {
      {
        if (!c._store || c._store.validated || c.key != null)
          return;
        c._store.validated = !0;
        var O = Aa(x);
        if (Cs[O])
          return;
        Cs[O] = !0;
        var F = "";
        c && c._owner && c._owner !== gn.current && (F = " It was passed a child from " + A(c._owner.type) + "."), Ot(c), M('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', O, F), Ot(null);
      }
    }
    function As(c, x) {
      {
        if (typeof c != "object")
          return;
        if (pn(c))
          for (var O = 0; O < c.length; O++) {
            var F = c[O];
            bn(F) && Os(F, x);
          }
        else if (bn(c))
          c._store && (c._store.validated = !0);
        else if (c) {
          var K = m(c);
          if (typeof K == "function" && K !== c.entries)
            for (var Z = K.call(c), W; !(W = Z.next()).done; )
              bn(W.value) && Os(W.value, x);
        }
      }
    }
    function Ta(c) {
      {
        var x = c.type;
        if (x == null || typeof x == "string")
          return;
        var O;
        if (typeof x == "function")
          O = x.propTypes;
        else if (typeof x == "object" && (x.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        x.$$typeof === p))
          O = x.propTypes;
        else
          return;
        if (O) {
          var F = A(x);
          ya(O, c.props, "prop", F, c);
        } else if (x.PropTypes !== void 0 && !mn) {
          mn = !0;
          var K = A(x);
          M("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", K || "Unknown");
        }
        typeof x.getDefaultProps == "function" && !x.getDefaultProps.isReactClassApproved && M("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ra(c) {
      {
        for (var x = Object.keys(c.props), O = 0; O < x.length; O++) {
          var F = x[O];
          if (F !== "children" && F !== "key") {
            Ot(c), M("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", F), Ot(null);
            break;
          }
        }
        c.ref !== null && (Ot(c), M("Invalid attribute `ref` supplied to `React.Fragment`."), Ot(null));
      }
    }
    function Ts(c, x, O, F, K, Z) {
      {
        var W = X(c);
        if (!W) {
          var H = "";
          (c === void 0 || typeof c == "object" && c !== null && Object.keys(c).length === 0) && (H += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ye = Oa(K);
          ye ? H += ye : H += ks();
          var oe;
          c === null ? oe = "null" : pn(c) ? oe = "array" : c !== void 0 && c.$$typeof === e ? (oe = "<" + (A(c.type) || "Unknown") + " />", H = " Did you accidentally export a JSX literal instead of a component?") : oe = typeof c, M("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", oe, H);
        }
        var ae = Ca(c, x, O, K, Z);
        if (ae == null)
          return ae;
        if (W) {
          var _e = x.children;
          if (_e !== void 0)
            if (F)
              if (pn(_e)) {
                for (var At = 0; At < _e.length; At++)
                  As(_e[At], c);
                Object.freeze && Object.freeze(_e);
              } else
                M("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              As(_e, c);
        }
        return c === n ? Ra(ae) : Ta(ae), ae;
      }
    }
    function Pa(c, x, O) {
      return Ts(c, x, O, !0);
    }
    function $a(c, x, O) {
      return Ts(c, x, O, !1);
    }
    var Ma = $a, La = Pa;
    Zt.Fragment = n, Zt.jsx = Ma, Zt.jsxs = La;
  }()), Zt;
}
process.env.NODE_ENV === "production" ? kn.exports = Ia() : kn.exports = Fa();
var R = kn.exports;
const $i = Object, rn = Map, Or = Set, es = Or.prototype.has, Ua = Or.prototype.add, Kr = rn.prototype.has, Ms = rn.prototype.get, nn = rn.prototype.set, $t = 1, Cn = 2, cr = 4, Gr = 8, qa = 16, Ha = 32, Ge = "__t", Ls = "__p", On = "__e", Va = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Qa = "http://www.w3.org/1999/xlink", za = "http://www.w3.org/2000/xmlns/", Wa = 120, Ya = new Or(["href", "list", "form", "tabIndex", "download"]), Ka = new Or(["area", "base", "basefont", "bgsound", "br", "col", "command", "embed", "frame", "hr", "image", "img", "input", "isindex", "keygen", "link", "menuitem", "meta", "nextid", "param", "source", "track", "wbr"]);
if (typeof window > "u")
  throw new Error(
    "See http://million.dev/docs/install to install the compiler."
  );
const ot = document;
ot.createElement("template");
const Mi = /* @__PURE__ */ ot.createElement("template"), Ga = Mi.content, Ns = /* @__PURE__ */ ot.createElementNS(
  "http://www.w3.org/2000/svg",
  "svg"
), St = Node.prototype, sn = Element.prototype, Xa = CharacterData.prototype, on = $i.getOwnPropertyDescriptor, Qr = St.insertBefore, Li = St.cloneNode, Ja = St.replaceChild, Za = sn.remove, ec = St.addEventListener, tc = sn.removeAttribute, js = sn.setAttribute, Ds = sn.setAttributeNS, rc = on(St, "textContent").set, Ni = on(St, "firstChild").get, nc = on(St, "nextSibling").get, sc = on(
  Xa,
  "data"
).set, ic = (t, e) => {
  const r = e ? Ns : Mi;
  return r.innerHTML = t, (e ? Ns : Ga).firstChild;
};
ot[On] = new Or();
const Bs = (t, e, r) => {
  let n = e.toLowerCase(), s = !1;
  n.endsWith("capture") && (n = n.slice(0, -7), s = !0);
  const i = `$$${n}`;
  es.call(ot[On], n) || (ec.call(
    ot,
    n,
    (a) => {
      let l = a.target;
      for (; l; ) {
        const f = l[i];
        f && ($i.defineProperty(a, "currentTarget", {
          configurable: !0,
          get() {
            return l;
          }
        }), f(a)), l = l.parentNode;
      }
    },
    { capture: s }
  ), Ua.call(ot[On], n));
  const o = (a) => {
    var l;
    a ? "key" in a && a.key === ((l = t[i]) == null ? void 0 : l.key) || (t[i] = a) : t[i] = null;
  };
  return o(r), o;
}, lt = (t, e) => {
  let r = Ni.call(t);
  if (e)
    for (let n = 0; n < e && r; ++n)
      r = nc.call(r);
  return r;
}, Is = /* @__PURE__ */ new WeakSet(), ji = (t) => {
  var r;
  if (Is.has(t))
    return;
  t.nodeType === 8 && ((r = t.parentNode) == null || r.removeChild(t));
  let e = Ni.call(t);
  for (; e; )
    ji(e), e = e.nextSibling;
  Is.add(t);
}, Fs = (t, e, r) => {
  const n = ot.createTextNode(e), s = lt(t, r);
  return Qr.call(t, n, s), n;
}, oc = (t, e) => {
  sc.call(t, e);
}, Nr = (t, e, r) => {
  typeof r != "number" || Va.test(e) ? t.style[e] = r : typeof r == "string" ? t.style.cssText = r : e.startsWith("-") ? t.style.setProperty(e, String(r)) : r == null ? t.style[e] = "" : t.style[e] = `${String(r)}px`;
}, Us = (t, e, r) => {
  e = e.replace(/xlink(?:H|:h)/, "h").replace(/sName$/, "s"), e.startsWith("xmlns") ? Ds.call(t, za, e, String(r)) : e.startsWith("xlink") && Ds.call(t, Qa, "href", String(r));
}, qs = (t, e, r) => {
  const n = r == null;
  if (r = n ? "" : r, e in t && t[e] !== void 0 && t[e] !== null && !(t instanceof SVGElement) && es.call(Ya, e))
    try {
      t[e] = r;
    } catch {
    }
  else
    !n && r !== "" && (r !== !1 || e.includes("-")) ? js.call(t, e, String(r)) : tc.call(t, e);
  const s = t instanceof HTMLInputElement, i = t instanceof HTMLSelectElement, o = t instanceof HTMLTextAreaElement;
  e === "value" && (s || i || o) && (js.call(t, e, String(r)), t.value = r);
};
var ac = Object.defineProperty, cc = (t, e, r) => e in t ? ac(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Ve = (t, e, r) => (cc(t, typeof e != "symbol" ? e + "" : e, r), r);
class lr {
  constructor() {
    Ve(this, "r"), Ve(this, "e"), Ve(this, "l"), Ve(this, "g"), Ve(this, "_u"), Ve(this, "_t"), Ve(this, "d"), Ve(this, "k"), Ve(this, "c");
  }
}
const Di = (t, e = [], r = []) => {
  var a, l;
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
          t: $t,
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
  for (let f in t.props) {
    const h = t.props[f];
    if (!(f === "key" || f === "ref" || f === "children")) {
      if (f === "className" && (f = "class"), f === "htmlFor" && (f = "for"), f.startsWith("on")) {
        "$" in h ? i.e.push({
          /* type */
          t: cr,
          /* name */
          n: f.slice(2),
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
          t: cr,
          /* name */
          n: f.slice(2),
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
          f === "style" ? i.e.push({
            /* type */
            t: Gr,
            /* name */
            n: f,
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
          }) : f.charCodeAt(0) === Wa ? i.e.push({
            /* type */
            t: qa,
            /* name */
            n: f,
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
            t: Cn,
            /* name */
            n: f,
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
        if (f === "style" && typeof h == "object") {
          let p = "";
          for (const d in h) {
            if (typeof h[d] == "object") {
              i.e.push({
                /* type */
                t: Gr,
                /* name */
                n: d,
                /* value */
                v: null,
                /* hole */
                h: h[d].$,
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
            for (let v = 0, _ = d.length; v < _; ++v) {
              const m = d.charCodeAt(v);
              m < 97 ? y += `-${String.fromCharCode(m + 32)}` : y += d[v];
            }
            p += `${y}:${String(h[d])};`;
          }
          n += ` style="${p}"`;
          continue;
        }
        n += ` ${f}="${String(h)}"`;
      }
    }
  }
  if (es.call(Ka, t.type))
    return i.e.length && e.push(i), `<${t.type}${n} />`;
  let o = !1;
  for (let f = 0, h = ((a = t.props.children) == null ? void 0 : a.length) || 0, p = 0; f < h; ++f) {
    const d = (l = t.props.children) == null ? void 0 : l[f];
    if (d == null || d === !1)
      continue;
    if (typeof d == "object" && "$" in d) {
      i.e.push({
        /* type */
        t: $t,
        /* name */
        n: null,
        /* value */
        v: null,
        /* hole */
        h: d.$,
        /* index */
        i: f,
        /* listener */
        l: null,
        /* patch */
        p: null,
        /* block */
        b: null
      });
      continue;
    }
    if (d instanceof lr) {
      i.i.push({
        /* type */
        t: Ha,
        /* name */
        n: null,
        /* value */
        v: null,
        /* hole */
        h: null,
        /* index */
        i: f,
        /* listener */
        l: null,
        /* patch */
        p: null,
        /* block */
        b: d
      });
      continue;
    }
    if (typeof d == "string" || typeof d == "number" || typeof d == "bigint") {
      const v = typeof d == "number" || typeof d == "bigint" ? String(d) : d;
      if (o) {
        i.i.push({
          /* type */
          t: $t,
          /* name */
          n: null,
          /* value */
          v,
          /* hole */
          h: null,
          /* index */
          i: f,
          /* listener */
          l: null,
          /* patch */
          p: null,
          /* block */
          b: null
        });
        continue;
      }
      o = !0, s += v, p++;
      continue;
    }
    o = !1;
    const y = r.slice();
    y.push(p++), s += Di(d, e, y);
  }
  return (i.i.length || i.e.length) && e.push(i), `<${t.type}${n}>${s}</${t.type}>`;
};
var lc = Object.defineProperty, uc = (t, e, r) => e in t ? lc(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, hc = (t, e, r) => (uc(t, typeof e != "symbol" ? e + "" : e, r), r);
const Hs = (t) => new Bi(t);
class Bi extends lr {
  constructor(e) {
    super(), hc(this, "b"), this.b = e;
  }
  v() {
  }
  p(e) {
    const r = this.b, n = e.b, s = r.length, i = n.length, o = this.t();
    if (this === e || i === 0 && s === 0)
      return o;
    if (this.b = n, i === 0)
      return fc.call(this), o;
    if (s === 0)
      return Ii.call(e, o), o;
    let a = 0, l = 0, f = s - 1, h = i - 1, p = r[0], d = n[0], y = r[f], v = n[h], _;
    for (; a <= f && l <= h; ) {
      if (!p) {
        p = r[++a];
        continue;
      }
      if (!y) {
        y = r[--f];
        continue;
      }
      const m = p.k, k = d.k;
      if (m === k) {
        Rt.call(p, d), n[l] = p, p = r[++a], d = n[++l];
        continue;
      }
      const M = y.k, P = v.k;
      if (M === P) {
        Rt.call(y, v), n[h] = y, y = r[--f], v = n[--h];
        continue;
      }
      if (m === P) {
        Rt.call(p, v), n[h] = p;
        const $ = n[h + 1];
        wn.call(p, $, ($ == null ? void 0 : $.l) || null), p = r[++a], v = n[--h];
        continue;
      }
      if (M === k) {
        Rt.call(y, d), n[l] = y;
        const $ = r[a];
        wn.call(y, $, ($ == null ? void 0 : $.l) || null), y = r[--f], d = n[++l];
        continue;
      }
      if (!_) {
        _ = new rn();
        for (let $ = a; $ <= f; $++)
          nn.call(_, r[$].k, $);
      }
      const q = _.get(k);
      if (q === void 0)
        Mt.call(d, o, p.l || null);
      else {
        const $ = r[q];
        wn.call($, p, null), Rt.call($, d), n[l] = $, r[q] = null;
      }
      d = n[++l];
    }
    if (a <= f || l <= h)
      if (a > f) {
        const m = n[h + 1];
        for (let k = l; k <= h; ++k)
          Mt.call(n[k], o, m ? m.l : null);
      } else
        for (let m = a; m <= f; ++m)
          Xr.call(r[m]);
    return o;
  }
  m(e, r = null) {
    if (this._t)
      return this._t;
    for (let n = 0, s = this.b.length; n < s; ++n) {
      const i = this.b[n];
      Mt.call(i, e, r);
    }
    return this._t = e, e;
  }
  x() {
    const e = this.t();
    if (e)
      rc.call(e, "");
    else
      for (let r = 0, n = this.b.length; r < n; ++r)
        Xr.call(this.b[r]);
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
const ts = Bi.prototype, Ii = ts.m, Fi = ts.p, fc = ts.x, dc = new Proxy(
  {},
  {
    // A universal getter will return a Hole instance if props[any] is accessed
    // Allows code to identify holes in virtual nodes ("digs" them out)
    get(t, e) {
      return { $: e };
    }
  }
), Ui = (t, e, r, n) => {
  const s = t(dc), i = [], o = ic(
    Di(e ? e(s) : s, i),
    n
  );
  return ji(o), (a, l, f) => new qi(
    o,
    i,
    a,
    l ?? (a == null ? void 0 : a.key) ?? null,
    f ?? r ?? null,
    null
  );
}, pc = (t, e) => {
  if (("b" in t || "b" in e) && Fi.call(t, e), t.l || Mt.call(t, void 0, null, null), t.k && t.k === e.k || t.r === e.r)
    return Rt.call(t, e);
  const r = Mt.call(e, t.t(), t.l, null);
  return Xr.call(t), t.k = e.k, r;
};
class qi extends lr {
  constructor(e, r, n, s, i, o) {
    super(), this.r = e, this.d = n, this.e = r, this.k = s, this.c = Array(r.length), i ? this._u = i : this._u = null, o ? this.g = o : this.g = null;
  }
  m(e, r = null, n) {
    var o, a;
    if (this.l)
      return this.l;
    const s = n ?? Li.call(this.r, !0), i = (o = this.g) == null ? void 0 : o.call(this, s);
    i && (this.c = i);
    for (let l = 0, f = this.e.length; l < f; ++l) {
      const h = this.e[l], p = (i == null ? void 0 : i[l]) ?? Vs(h.p, s, this.c, l);
      for (let y = 0, v = h.e.length; y < v; ++y) {
        const _ = h.e[y], m = this.d[_.h];
        if (_.t & $t) {
          if (m instanceof lr) {
            const k = lt(p, _.i);
            n ? m.m(p, k, k) : m.m(p, k);
            continue;
          }
          if (p[Ge] || (p[Ge] = new Array(v)), m && typeof m == "object" && "foreign" in m) {
            if (n) {
              const M = lt(p, _.i);
              m.reset(M);
            }
            const k = m.current;
            p[Ge][y] = k, n || Qr.call(p, k, lt(p, _.i));
            continue;
          }
          if (n) {
            p[Ge][y] = lt(p, _.i);
            continue;
          }
          p[Ge][y] = Fs(
            p,
            // eslint-disable-next-line eqeqeq
            m == null || m === !1 ? "" : String(m),
            _.i
          );
        } else if (_.t & cr) {
          const k = Bs(p, _.n, m);
          p[Ls + _.n] = k;
        } else if (_.t & Cn)
          qs(p, _.n, m);
        else if (_.t & Gr)
          if (typeof m == "string" || typeof m == "number")
            Nr(p, _.n, m);
          else
            for (const k in m)
              Nr(p, k, m[k]);
        else
          Us(p, _.n, m);
      }
      const d = (a = h.i) == null ? void 0 : a.length;
      if (d)
        for (let y = 0; y < d; ++y) {
          const v = h.i[y];
          if (v.t & $t)
            v.v && !n && Fs(p, v.v, v.i);
          else if (v.t & cr)
            Bs(p, v.n, v.l);
          else {
            const _ = lt(p, v.i);
            n ? v.b.m(p, _, _) : v.b.m(p, _);
          }
        }
    }
    return e && !n && Qr.call(e, s, r), this.l = s, s;
  }
  p(e) {
    var s, i;
    const r = this.l;
    if (!e.d)
      return r;
    const n = this.d;
    if (!yc.call(this, n, e.d))
      return r;
    this.d = e.d;
    for (let o = 0, a = this.e.length; o < a; ++o) {
      const l = this.e[o], f = this.c[o] ?? Vs(l.p, r, this.c, o);
      for (let h = 0, p = l.e.length; h < p; ++h) {
        const d = l.e[h], y = n[d.h], v = e.d[d.h];
        if (v !== y) {
          if (d.t & cr) {
            f[Ls + d.n](v);
            continue;
          }
          if (d.t & $t) {
            if (y instanceof lr) {
              const _ = (i = (s = e.e) == null ? void 0 : s[o]) == null ? void 0 : i.e[h], m = e.d[_.h];
              y.p(m);
              continue;
            }
            if (v && typeof v == "object" && "foreign" in v) {
              const _ = f[Ge][h];
              if (v.unstable && y !== v) {
                const m = v.current;
                f[Ge][h] = m, Ja.call(f, m, _);
              } else
                v.current = _;
              continue;
            }
            oc(
              f[Ge][h],
              // eslint-disable-next-line eqeqeq
              v == null || v === !1 ? "" : String(v)
            );
          } else if (d.t & Cn)
            qs(f, d.n, v);
          else if (d.t & Gr)
            if (typeof v == "string" || typeof v == "number")
              Nr(f, d.n, v);
            else
              for (const _ in v)
                v[_] !== y[_] && Nr(f, _, v[_]);
          else
            Us(f, d.n, v);
        }
      }
    }
    return r;
  }
  v(e = null, r = null) {
    Qr.call(this.t(), this.l, e ? e.l : r);
  }
  x() {
    Za.call(this.l), this.l = null;
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
const Vs = (t, e, r, n) => {
  const s = t.length;
  if (!s)
    return e;
  const i = r && n !== void 0;
  if (i && r[n])
    return r[n];
  for (let o = 0; o < s; ++o) {
    const a = t[o];
    e = lt(e, a);
  }
  return i && (r[n] = e), e;
}, Ar = qi.prototype, Mt = Ar.m, Rt = Ar.p, wn = Ar.v, Xr = Ar.x, yc = Ar.u, gc = {
  noSlot: !1
}, an = "slot", Hi = "g", mc = ({
  effect: t,
  deps: e
}) => (Ye(t, e || []), null), Me = /* @__PURE__ */ new Map(), bc = Ti(!1), vc = (t, e, r) => {
  const n = { ref: e };
  let s = 0;
  for (const i in t) {
    const o = t[i];
    if (xt(o) || Array.isArray(o) && o.length && xt(o[0])) {
      n[i] = rs(
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
}, xn = (t, e) => pe(
  an,
  { suppressHydrationWarning: !0, id: e },
  t
), rs = (t, e, r, n, s) => {
  var p;
  const i = (p = r == null ? void 0 : r[n]) == null ? void 0 : p.current, o = xt(t) && typeof t.type == "function" && "_c" in t.type, a = o && t.type._c;
  if (typeof window > "u")
    return o ? a ? t : xn(xn(t), s) : xn(t, s);
  if (a) {
    const d = t.type(t.props);
    if (Me.has(d.type)) {
      const y = Me.get(d.type);
      if (typeof y == "function")
        return y(d.props);
    }
  }
  const l = i ?? (s ? document.getElementById(s) : null) ?? document.createElement(an), f = Da(
    pe(Et, { children: t }),
    l,
    s
  ), h = {
    foreign: !0,
    current: l,
    portal: f,
    reset: (d) => {
      d.childNodes.forEach((y) => d.removeChild(y));
    },
    unstable: e
  };
  return r && (r[n] = h), h;
}, An = (t) => {
  var s;
  if (typeof t != "object" || t === null || !("type" in t))
    return typeof t == "number" ? String(t) : t;
  let e = t.type;
  if (typeof e == "function")
    return An(e(t.props ?? {}));
  if (typeof e == "object" && "$" in e)
    return e;
  const r = { ...t.props };
  "css" in r && "__EMOTION_TYPE_PLEASE_DO_NOT_USE__" in r && (r.style = r.css.styles, e = r.__EMOTION_TYPE_PLEASE_DO_NOT_USE__, delete r.__EMOTION_TYPE_PLEASE_DO_NOT_USE__, delete r.css);
  const n = (s = t.props) == null ? void 0 : s.children;
  return n != null && (r.children = Tn(t.props.children).map(
    (i) => An(i)
  )), {
    type: e,
    // lets pretend no function go through
    props: r
  };
}, Tn = (t) => {
  if (t == null)
    return [];
  if (typeof t == "object" && "type" in t && t.type === Et)
    return Tn(t.props.children);
  if (!Array.isArray(t) || typeof t == "object" && "$" in t)
    return [t];
  const e = t.flat(1 / 0), r = [];
  for (let n = 0, s = e.length; n < s; ++n)
    r.push(...Tn(e[n]));
  return r;
}, Vi = typeof window > "u" ? Ye : Na;
function ns(t, e, r) {
  if (!t || e(t))
    return t;
  let n = r ? t.return : t.child;
  for (; n; ) {
    const s = ns(n, e, r);
    if (s)
      return s;
    n = r ? null : n.sibling;
  }
}
function Qi() {
  const t = Ae();
  return _t(() => {
    const e = Function.prototype.bind;
    Function.prototype.bind = function(r, n) {
      return r === null && typeof (n == null ? void 0 : n.type) == "function" && (t.current = n, Function.prototype.bind = e), e.apply(this, arguments);
    };
  }), t.current;
}
function wc(t) {
  const e = Qi(), r = Ae({ el: null, depth: 0 });
  return Vi(() => {
    var n;
    r.current.el = (n = ns(
      e,
      (s) => (r.current.depth++, typeof s.type == "string" && (t === void 0 || s.type === t)),
      !0
    )) == null ? void 0 : n.stateNode;
  }, [e]), r;
}
function xc() {
  const t = Qi(), e = Ae({ el: null, depth: 0 });
  return Vi(() => {
    var r;
    e.current.el = (r = ns(
      t,
      (n) => {
        var s;
        return e.current.depth++, ((s = n.stateNode) == null ? void 0 : s.containerInfo) != null;
      },
      !0
    )) == null ? void 0 : r.stateNode.containerInfo;
  }, [t]), e;
}
const zi = (t, e = {}) => {
  const r = (e == null ? void 0 : e.experimental_noSlot) ?? gc.noSlot;
  let n = e == null ? void 0 : e.block;
  const s = e != null && e.svg ? Hi : an;
  t && (n = Ui(
    t,
    An,
    e == null ? void 0 : e.shouldUpdate,
    e == null ? void 0 : e.svg
  ));
  const i = (o, a) => {
    var P, q;
    const l = xc(), f = wc(), h = o._hmr, p = Ae(null), d = Ae(null), y = Ae([]);
    o = vc(o, a, y.current), (P = d.current) == null || P.call(d, o);
    const v = Hr(() => {
      var Y, ne, B;
      if (!p.current && !r)
        return;
      const $ = n(o, o.key);
      return h && ((Y = p.current) != null && Y.textContent) && (p.current.textContent = ""), r && (p.current = ((ne = f.current) == null ? void 0 : ne.el) ?? ((B = l.current) == null ? void 0 : B.el), (o.scoped || f.current && l.current && f.current.depth > l.current.depth) && (p.current = l.current.el), p.current.childNodes.length && console.error(
        new Error(`\`experimental_options.noSlot\` does not support having siblings at the moment.
The block element should be the only child of the \`${Li.call(p.current).outerHTML}\` element.
To avoid this error, \`experimental_options.noSlot\` should be false`)
      )), (d.current === null || h) && (Mt.call($, p.current, null), d.current = (G) => {
        pc(
          $,
          n(
            G,
            G.key,
            e == null ? void 0 : e.shouldUpdate
          )
        );
      }), () => {
        Xr.call($);
      };
    }, []), _ = Vr(() => r ? null : pe((e == null ? void 0 : e.as) ?? s, { ref: p }), []), m = y.current.length, k = new Array(m);
    for (let $ = 0; $ < m; ++$)
      k[$] = (q = y.current[$]) == null ? void 0 : q.portal;
    return pe(
      Et,
      {},
      _,
      pe(mc, {
        effect: v,
        deps: h ? [h] : []
      }),
      k
    );
  };
  return Kr.call(Me, i) || nn.call(Me, i, zi), e != null && e.name && (t && (t.displayName = `Million(Render(${e.name}))`), i.displayName = `Million(Block(${e.name}))`), i;
}, _c = ({
  each: t,
  children: e,
  memo: r,
  svg: n,
  as: s,
  ...i
}) => {
  const o = Ae(null), [a] = _t(() => ({
    current: Array(t.length)
  })), l = Ae(null), f = Ae({
    each: null,
    children: null,
    mounted: !1
  }), [, h] = _t(!1);
  if (l.current && (t !== f.current.each || !r)) {
    const y = Qs(t, e, f, a, r);
    Fi.call(l.current, Hs(y));
  }
  const d = pe(
    Et,
    null,
    pe(s ?? (n ? Hi : an), { ...i, ref: o }),
    ...a.current.map((y) => y.portal)
  );
  return Ye(() => {
    if (!o.current || l.current || f.current.mounted)
      return;
    const y = Qs(t, e, f, a, r);
    l.current = Hs(y), Kr.call(Me, d) || nn.call(Me, d, l.current), Ii.call(l.current, o.current), f.current.mounted = !0, h(!0);
  }, [o.current]), d;
}, Ec = ja;
Ec(_c);
const Qs = (t, e, r, n, s) => {
  var a;
  const i = Array(t.length), o = r.current;
  for (let l = 0, f = t.length; l < f; ++l) {
    if (s && o.each && o.each[l] === t[l]) {
      i[l] = (a = o.children) == null ? void 0 : a[l];
      continue;
    }
    const h = e(t[l], l);
    if (Kr.call(Me, h.type)) {
      o.block || (o.block = Ms.call(Me, h.type)), i[l] = o.block(h.props, n, l);
      continue;
    }
    if (typeof h.type == "function" && "_c" in h.type) {
      const y = h.type(h.props);
      if (Kr.call(Me, y.type)) {
        const v = Ms.call(Me, y.type);
        if (typeof v == "function") {
          i[l] = v(y.props);
          continue;
        }
      }
    }
    const p = Ui((y) => y == null ? void 0 : y.scope), d = (y, v, _) => p(
      {
        scope: rs(
          pe(h.type, y),
          !1,
          v.current,
          _
        )
      },
      h.key ? String(h.key) : void 0
    );
    nn.call(Me, h.type, d), o.block = d, i[l] = d(h.props, n, l);
  }
  return o.each = t, o.children = i, i;
};
function Sc(t, e) {
  return t === e || t !== t && e !== e;
}
function kc(t, e) {
  for (const r in t)
    if (!Sc(t[r], e[r]))
      return !0;
  return !1;
}
function cn(t, { portals: e, ...r }) {
  const n = `CompiledBlock(Inner(${r.name}))`, s = zi((a) => t(a), {
    ...r,
    scoped: void 0,
    name: n,
    shouldUpdate: kc
  }), i = (e == null ? void 0 : e.length) || 0, o = e && i > 0 ? (a) => {
    const l = Ri(bc), [f] = _t(() => []), h = { ...a, scoped: l };
    for (let d = 0; d < i; d++) {
      const y = e[d], v = rs(
        h[y],
        !1,
        f,
        d
      );
      h[y] = v;
    }
    const p = [];
    for (let d = 0, y = f.length; d < y; d++)
      p[d] = f[d].portal;
    return pe(
      Et,
      null,
      pe(s, h),
      p
    );
  } : (a) => pe(s, a);
  return r.name && (o.displayName = `Million(CompiledBlock(Outer(${r.name})))`), o;
}
typeof window < "u" && (window.__MILLION_DATA__ = {
  version: "3.0.6"
});
const er = {
  MESSAGE: "message",
  TYPING: "typing",
  STOP_TYPING: "stop-typing",
  AGENT_MESSAGE: "agent-message"
}, zs = "user-bot-id", Rn = "https://api.dialoguebot.tech";
console.log("API_URL", Rn);
var at = {}, te = {}, fe = {};
Object.defineProperty(fe, "__esModule", { value: !0 });
fe.output = fe.exists = fe.hash = fe.bytes = fe.bool = fe.number = fe.isBytes = void 0;
function Jr(t) {
  if (!Number.isSafeInteger(t) || t < 0)
    throw new Error(`positive integer expected, not ${t}`);
}
fe.number = Jr;
function Wi(t) {
  if (typeof t != "boolean")
    throw new Error(`boolean expected, not ${t}`);
}
fe.bool = Wi;
function Yi(t) {
  return t instanceof Uint8Array || t != null && typeof t == "object" && t.constructor.name === "Uint8Array";
}
fe.isBytes = Yi;
function ss(t, ...e) {
  if (!Yi(t))
    throw new Error("Uint8Array expected");
  if (e.length > 0 && !e.includes(t.length))
    throw new Error(`Uint8Array expected of length ${e}, not of length=${t.length}`);
}
fe.bytes = ss;
function Ki(t) {
  if (typeof t != "function" || typeof t.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  Jr(t.outputLen), Jr(t.blockLen);
}
fe.hash = Ki;
function Gi(t, e = !0) {
  if (t.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (e && t.finished)
    throw new Error("Hash#digest() has already been called");
}
fe.exists = Gi;
function Xi(t, e) {
  ss(t);
  const r = e.outputLen;
  if (t.length < r)
    throw new Error(`digestInto() expects output buffer of length at least ${r}`);
}
fe.output = Xi;
const Cc = { number: Jr, bool: Wi, bytes: ss, hash: Ki, exists: Gi, output: Xi };
fe.default = Cc;
var I = {};
Object.defineProperty(I, "__esModule", { value: !0 });
I.add5L = I.add5H = I.add4H = I.add4L = I.add3H = I.add3L = I.add = I.rotlBL = I.rotlBH = I.rotlSL = I.rotlSH = I.rotr32L = I.rotr32H = I.rotrBL = I.rotrBH = I.rotrSL = I.rotrSH = I.shrSL = I.shrSH = I.toBig = I.split = I.fromBig = void 0;
const jr = /* @__PURE__ */ BigInt(2 ** 32 - 1), Pn = /* @__PURE__ */ BigInt(32);
function is(t, e = !1) {
  return e ? { h: Number(t & jr), l: Number(t >> Pn & jr) } : { h: Number(t >> Pn & jr) | 0, l: Number(t & jr) | 0 };
}
I.fromBig = is;
function Ji(t, e = !1) {
  let r = new Uint32Array(t.length), n = new Uint32Array(t.length);
  for (let s = 0; s < t.length; s++) {
    const { h: i, l: o } = is(t[s], e);
    [r[s], n[s]] = [i, o];
  }
  return [r, n];
}
I.split = Ji;
const Zi = (t, e) => BigInt(t >>> 0) << Pn | BigInt(e >>> 0);
I.toBig = Zi;
const eo = (t, e, r) => t >>> r;
I.shrSH = eo;
const to = (t, e, r) => t << 32 - r | e >>> r;
I.shrSL = to;
const ro = (t, e, r) => t >>> r | e << 32 - r;
I.rotrSH = ro;
const no = (t, e, r) => t << 32 - r | e >>> r;
I.rotrSL = no;
const so = (t, e, r) => t << 64 - r | e >>> r - 32;
I.rotrBH = so;
const io = (t, e, r) => t >>> r - 32 | e << 64 - r;
I.rotrBL = io;
const oo = (t, e) => e;
I.rotr32H = oo;
const ao = (t, e) => t;
I.rotr32L = ao;
const co = (t, e, r) => t << r | e >>> 32 - r;
I.rotlSH = co;
const lo = (t, e, r) => e << r | t >>> 32 - r;
I.rotlSL = lo;
const uo = (t, e, r) => e << r - 32 | t >>> 64 - r;
I.rotlBH = uo;
const ho = (t, e, r) => t << r - 32 | e >>> 64 - r;
I.rotlBL = ho;
function fo(t, e, r, n) {
  const s = (e >>> 0) + (n >>> 0);
  return { h: t + r + (s / 2 ** 32 | 0) | 0, l: s | 0 };
}
I.add = fo;
const po = (t, e, r) => (t >>> 0) + (e >>> 0) + (r >>> 0);
I.add3L = po;
const yo = (t, e, r, n) => e + r + n + (t / 2 ** 32 | 0) | 0;
I.add3H = yo;
const go = (t, e, r, n) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0);
I.add4L = go;
const mo = (t, e, r, n, s) => e + r + n + s + (t / 2 ** 32 | 0) | 0;
I.add4H = mo;
const bo = (t, e, r, n, s) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0) + (s >>> 0);
I.add5L = bo;
const vo = (t, e, r, n, s, i) => e + r + n + s + i + (t / 2 ** 32 | 0) | 0;
I.add5H = vo;
const Oc = {
  fromBig: is,
  split: Ji,
  toBig: Zi,
  shrSH: eo,
  shrSL: to,
  rotrSH: ro,
  rotrSL: no,
  rotrBH: so,
  rotrBL: io,
  rotr32H: oo,
  rotr32L: ao,
  rotlSH: co,
  rotlSL: lo,
  rotlBH: uo,
  rotlBL: ho,
  add: fo,
  add3L: po,
  add3H: yo,
  add4L: go,
  add4H: mo,
  add5H: vo,
  add5L: bo
};
I.default = Oc;
var wo = {}, ln = {};
Object.defineProperty(ln, "__esModule", { value: !0 });
ln.crypto = void 0;
ln.crypto = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
(function(t) {
  /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
  Object.defineProperty(t, "__esModule", { value: !0 }), t.randomBytes = t.wrapXOFConstructorWithOpts = t.wrapConstructorWithOpts = t.wrapConstructor = t.checkOpts = t.Hash = t.concatBytes = t.toBytes = t.utf8ToBytes = t.asyncLoop = t.nextTick = t.hexToBytes = t.bytesToHex = t.byteSwap32 = t.byteSwapIfBE = t.byteSwap = t.isLE = t.rotl = t.rotr = t.createView = t.u32 = t.u8 = t.isBytes = void 0;
  const e = ln, r = fe;
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
  const a = (g, A) => g << 32 - A | g >>> A;
  t.rotr = a;
  const l = (g, A) => g << A | g >>> 32 - A >>> 0;
  t.rotl = l, t.isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
  const f = (g) => g << 24 & 4278190080 | g << 8 & 16711680 | g >>> 8 & 65280 | g >>> 24 & 255;
  t.byteSwap = f, t.byteSwapIfBE = t.isLE ? (g) => g : (g) => (0, t.byteSwap)(g);
  function h(g) {
    for (let A = 0; A < g.length; A++)
      g[A] = (0, t.byteSwap)(g[A]);
  }
  t.byteSwap32 = h;
  const p = /* @__PURE__ */ Array.from({ length: 256 }, (g, A) => A.toString(16).padStart(2, "0"));
  function d(g) {
    (0, r.bytes)(g);
    let A = "";
    for (let E = 0; E < g.length; E++)
      A += p[g[E]];
    return A;
  }
  t.bytesToHex = d;
  const y = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
  function v(g) {
    if (g >= y._0 && g <= y._9)
      return g - y._0;
    if (g >= y._A && g <= y._F)
      return g - (y._A - 10);
    if (g >= y._a && g <= y._f)
      return g - (y._a - 10);
  }
  function _(g) {
    if (typeof g != "string")
      throw new Error("hex string expected, got " + typeof g);
    const A = g.length, E = A / 2;
    if (A % 2)
      throw new Error("padded hex string expected, got unpadded hex of length " + A);
    const b = new Uint8Array(E);
    for (let w = 0, C = 0; w < E; w++, C += 2) {
      const S = v(g.charCodeAt(C)), N = v(g.charCodeAt(C + 1));
      if (S === void 0 || N === void 0) {
        const j = g[C] + g[C + 1];
        throw new Error('hex string expected, got non-hex character "' + j + '" at index ' + C);
      }
      b[w] = S * 16 + N;
    }
    return b;
  }
  t.hexToBytes = _;
  const m = async () => {
  };
  t.nextTick = m;
  async function k(g, A, E) {
    let b = Date.now();
    for (let w = 0; w < g; w++) {
      E(w);
      const C = Date.now() - b;
      C >= 0 && C < A || (await (0, t.nextTick)(), b += C);
    }
  }
  t.asyncLoop = k;
  function M(g) {
    if (typeof g != "string")
      throw new Error(`utf8ToBytes expected string, got ${typeof g}`);
    return new Uint8Array(new TextEncoder().encode(g));
  }
  t.utf8ToBytes = M;
  function P(g) {
    return typeof g == "string" && (g = M(g)), (0, r.bytes)(g), g;
  }
  t.toBytes = P;
  function q(...g) {
    let A = 0;
    for (let b = 0; b < g.length; b++) {
      const w = g[b];
      (0, r.bytes)(w), A += w.length;
    }
    const E = new Uint8Array(A);
    for (let b = 0, w = 0; b < g.length; b++) {
      const C = g[b];
      E.set(C, w), w += C.length;
    }
    return E;
  }
  t.concatBytes = q;
  class $ {
    // Safe version that clones internal state
    clone() {
      return this._cloneInto();
    }
  }
  t.Hash = $;
  const Y = {}.toString;
  function ne(g, A) {
    if (A !== void 0 && Y.call(A) !== "[object Object]")
      throw new Error("Options should be object or undefined");
    return Object.assign(g, A);
  }
  t.checkOpts = ne;
  function B(g) {
    const A = (b) => g().update(P(b)).digest(), E = g();
    return A.outputLen = E.outputLen, A.blockLen = E.blockLen, A.create = () => g(), A;
  }
  t.wrapConstructor = B;
  function G(g) {
    const A = (b, w) => g(w).update(P(b)).digest(), E = g({});
    return A.outputLen = E.outputLen, A.blockLen = E.blockLen, A.create = (b) => g(b), A;
  }
  t.wrapConstructorWithOpts = G;
  function X(g) {
    const A = (b, w) => g(w).update(P(b)).digest(), E = g({});
    return A.outputLen = E.outputLen, A.blockLen = E.blockLen, A.create = (b) => g(b), A;
  }
  t.wrapXOFConstructorWithOpts = X;
  function D(g = 32) {
    if (e.crypto && typeof e.crypto.getRandomValues == "function")
      return e.crypto.getRandomValues(new Uint8Array(g));
    throw new Error("crypto.getRandomValues must be defined");
  }
  t.randomBytes = D;
})(wo);
Object.defineProperty(te, "__esModule", { value: !0 });
te.shake256 = te.shake128 = te.keccak_512 = te.keccak_384 = te.keccak_256 = te.keccak_224 = te.sha3_512 = te.sha3_384 = te.sha3_256 = te.sha3_224 = te.Keccak = te.keccakP = void 0;
const Tt = fe, hr = I, We = wo, xo = [], _o = [], Eo = [], Ac = /* @__PURE__ */ BigInt(0), tr = /* @__PURE__ */ BigInt(1), Tc = /* @__PURE__ */ BigInt(2), Rc = /* @__PURE__ */ BigInt(7), Pc = /* @__PURE__ */ BigInt(256), $c = /* @__PURE__ */ BigInt(113);
for (let t = 0, e = tr, r = 1, n = 0; t < 24; t++) {
  [r, n] = [n, (2 * r + 3 * n) % 5], xo.push(2 * (5 * n + r)), _o.push((t + 1) * (t + 2) / 2 % 64);
  let s = Ac;
  for (let i = 0; i < 7; i++)
    e = (e << tr ^ (e >> Rc) * $c) % Pc, e & Tc && (s ^= tr << (tr << /* @__PURE__ */ BigInt(i)) - tr);
  Eo.push(s);
}
const [Mc, Lc] = /* @__PURE__ */ (0, hr.split)(Eo, !0), Ws = (t, e, r) => r > 32 ? (0, hr.rotlBH)(t, e, r) : (0, hr.rotlSH)(t, e, r), Ys = (t, e, r) => r > 32 ? (0, hr.rotlBL)(t, e, r) : (0, hr.rotlSL)(t, e, r);
function So(t, e = 24) {
  const r = new Uint32Array(10);
  for (let n = 24 - e; n < 24; n++) {
    for (let o = 0; o < 10; o++)
      r[o] = t[o] ^ t[o + 10] ^ t[o + 20] ^ t[o + 30] ^ t[o + 40];
    for (let o = 0; o < 10; o += 2) {
      const a = (o + 8) % 10, l = (o + 2) % 10, f = r[l], h = r[l + 1], p = Ws(f, h, 1) ^ r[a], d = Ys(f, h, 1) ^ r[a + 1];
      for (let y = 0; y < 50; y += 10)
        t[o + y] ^= p, t[o + y + 1] ^= d;
    }
    let s = t[2], i = t[3];
    for (let o = 0; o < 24; o++) {
      const a = _o[o], l = Ws(s, i, a), f = Ys(s, i, a), h = xo[o];
      s = t[h], i = t[h + 1], t[h] = l, t[h + 1] = f;
    }
    for (let o = 0; o < 50; o += 10) {
      for (let a = 0; a < 10; a++)
        r[a] = t[o + a];
      for (let a = 0; a < 10; a++)
        t[o + a] ^= ~r[(a + 2) % 10] & r[(a + 4) % 10];
    }
    t[0] ^= Mc[n], t[1] ^= Lc[n];
  }
  r.fill(0);
}
te.keccakP = So;
class Tr extends We.Hash {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(e, r, n, s = !1, i = 24) {
    if (super(), this.blockLen = e, this.suffix = r, this.outputLen = n, this.enableXOF = s, this.rounds = i, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, (0, Tt.number)(n), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = (0, We.u32)(this.state);
  }
  keccak() {
    We.isLE || (0, We.byteSwap32)(this.state32), So(this.state32, this.rounds), We.isLE || (0, We.byteSwap32)(this.state32), this.posOut = 0, this.pos = 0;
  }
  update(e) {
    (0, Tt.exists)(this);
    const { blockLen: r, state: n } = this;
    e = (0, We.toBytes)(e);
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
    (0, Tt.exists)(this, !1), (0, Tt.bytes)(e), this.finish();
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
    return (0, Tt.number)(e), this.xofInto(new Uint8Array(e));
  }
  digestInto(e) {
    if ((0, Tt.output)(e, this), this.finished)
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
    return e || (e = new Tr(r, n, s, o, i)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = i, e.suffix = n, e.outputLen = s, e.enableXOF = o, e.destroyed = this.destroyed, e;
  }
}
te.Keccak = Tr;
const ct = (t, e, r) => (0, We.wrapConstructor)(() => new Tr(e, t, r));
te.sha3_224 = ct(6, 144, 224 / 8);
te.sha3_256 = ct(6, 136, 256 / 8);
te.sha3_384 = ct(6, 104, 384 / 8);
te.sha3_512 = ct(6, 72, 512 / 8);
te.keccak_224 = ct(1, 144, 224 / 8);
te.keccak_256 = ct(1, 136, 256 / 8);
te.keccak_384 = ct(1, 104, 384 / 8);
te.keccak_512 = ct(1, 72, 512 / 8);
const ko = (t, e, r) => (0, We.wrapXOFConstructorWithOpts)((n = {}) => new Tr(e, t, n.dkLen === void 0 ? r : n.dkLen, !0));
te.shake128 = ko(31, 168, 128 / 8);
te.shake256 = ko(31, 136, 256 / 8);
const { sha3_512: Nc } = te, Co = 24, ur = 32, $n = (t = 4, e = Math.random) => {
  let r = "";
  for (; r.length < t; )
    r = r + Math.floor(e() * 36).toString(36);
  return r;
};
function Oo(t) {
  let e = 8n, r = 0n;
  for (const n of t.values()) {
    const s = BigInt(n);
    r = (r << e) + s;
  }
  return r;
}
const Ao = (t = "") => Oo(Nc(t)).toString(36).slice(1), Ks = Array.from(
  { length: 26 },
  (t, e) => String.fromCharCode(e + 97)
), jc = (t) => Ks[Math.floor(t() * Ks.length)], To = ({
  globalObj: t = typeof ut < "u" ? ut : typeof window < "u" ? window : {},
  random: e = Math.random
} = {}) => {
  const r = Object.keys(t).toString(), n = r.length ? r + $n(ur, e) : $n(ur, e);
  return Ao(n).substring(0, ur);
}, Ro = (t) => () => t++, Dc = 476782367, Po = ({
  // Fallback if the user does not pass in a CSPRNG. This should be OK
  // because we don't rely solely on the random number generator for entropy.
  // We also use the host fingerprint, current time, and a session counter.
  random: t = Math.random,
  counter: e = Ro(Math.floor(t() * Dc)),
  length: r = Co,
  fingerprint: n = To({ random: t })
} = {}) => function() {
  const i = jc(t), o = Date.now().toString(36), a = e().toString(36), l = $n(r, t), f = `${o + l + a + n}`;
  return `${i + Ao(f).substring(1, r)}`;
}, Bc = Po(), Ic = (t, { minLength: e = 2, maxLength: r = ur } = {}) => {
  const n = t.length, s = /^[0-9a-z]+$/;
  try {
    if (typeof t == "string" && n >= e && n <= r && s.test(t))
      return !0;
  } finally {
  }
  return !1;
};
at.getConstants = () => ({ defaultLength: Co, bigLength: ur });
at.init = Po;
at.createId = Bc;
at.bufToBigInt = Oo;
at.createCounter = Ro;
at.createFingerprint = To;
at.isCuid = Ic;
const { createId: Fc, init: Sh, getConstants: kh, isCuid: Ch } = at;
var Uc = Fc;
const Ee = () => {
  const t = Uc(), e = localStorage.getItem(zs);
  return e || (localStorage.setItem(zs, t), t);
}, Gs = (t, e) => {
  const r = e || Ee();
  return `${t}_${r}`;
}, $o = (t) => {
  var e;
  (e = window.open(t, "_blank")) == null || e.focus();
}, os = (t) => {
  t = t.replace(/^#/, "");
  const e = parseInt(t, 16);
  let r = e >> 16 & 255, n = e >> 8 & 255, s = e & 255;
  r /= 255, n /= 255, s /= 255;
  const i = Math.max(r, n, s), o = Math.min(r, n, s);
  let a = 0, l;
  const f = (i + o) / 2;
  if (i === o)
    a = l = 0;
  else {
    const h = i - o;
    switch (l = f > 0.5 ? h / (2 - i - o) : h / (i + o), i) {
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
    s: Math.round(l * 100),
    l: Math.round(f * 100)
  };
};
var Rr = class {
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
}, Yt = typeof window > "u" || "Deno" in globalThis;
function Ce() {
}
function qc(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Mn(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function Mo(t, e) {
  return Math.max(t + (e || 0) - Date.now(), 0);
}
function Xs(t, e) {
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
      if (e.queryHash !== as(o, e.options))
        return !1;
    } else if (!dr(e.queryKey, o))
      return !1;
  }
  if (r !== "all") {
    const l = e.isActive();
    if (r === "active" && !l || r === "inactive" && l)
      return !1;
  }
  return !(typeof a == "boolean" && e.isStale() !== a || s && s !== e.state.fetchStatus || i && !i(e));
}
function Js(t, e) {
  const { exact: r, status: n, predicate: s, mutationKey: i } = t;
  if (i) {
    if (!e.options.mutationKey)
      return !1;
    if (r) {
      if (fr(e.options.mutationKey) !== fr(i))
        return !1;
    } else if (!dr(e.options.mutationKey, i))
      return !1;
  }
  return !(n && e.state.status !== n || s && !s(e));
}
function as(t, e) {
  return ((e == null ? void 0 : e.queryKeyHashFn) || fr)(t);
}
function fr(t) {
  return JSON.stringify(
    t,
    (e, r) => Nn(r) ? Object.keys(r).sort().reduce((n, s) => (n[s] = r[s], n), {}) : r
  );
}
function dr(t, e) {
  return t === e ? !0 : typeof t != typeof e ? !1 : t && e && typeof t == "object" && typeof e == "object" ? !Object.keys(e).some((r) => !dr(t[r], e[r])) : !1;
}
function Lo(t, e) {
  if (t === e)
    return t;
  const r = Zs(t) && Zs(e);
  if (r || Nn(t) && Nn(e)) {
    const n = r ? t : Object.keys(t), s = n.length, i = r ? e : Object.keys(e), o = i.length, a = r ? [] : {};
    let l = 0;
    for (let f = 0; f < o; f++) {
      const h = r ? f : i[f];
      !r && t[h] === void 0 && e[h] === void 0 && n.includes(h) ? (a[h] = void 0, l++) : (a[h] = Lo(t[h], e[h]), a[h] === t[h] && t[h] !== void 0 && l++);
    }
    return s === o && l === s ? t : a;
  }
  return e;
}
function Ln(t, e) {
  if (!e || Object.keys(t).length !== Object.keys(e).length)
    return !1;
  for (const r in t)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
function Zs(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function Nn(t) {
  if (!ei(t))
    return !1;
  const e = t.constructor;
  if (e === void 0)
    return !0;
  const r = e.prototype;
  return !(!ei(r) || !r.hasOwnProperty("isPrototypeOf"));
}
function ei(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function Hc(t) {
  return new Promise((e) => {
    setTimeout(e, t);
  });
}
function jn(t, e, r) {
  return typeof r.structuralSharing == "function" ? r.structuralSharing(t, e) : r.structuralSharing !== !1 ? Lo(t, e) : e;
}
function Vc(t, e, r = 0) {
  const n = [...t, e];
  return r && n.length > r ? n.slice(1) : n;
}
function Qc(t, e, r = 0) {
  const n = [e, ...t];
  return r && n.length > r ? n.slice(0, -1) : n;
}
var pr = Symbol(), dt, et, Lt, vi, zc = (vi = class extends Rr {
  constructor() {
    super();
    L(this, dt, void 0);
    L(this, et, void 0);
    L(this, Lt, void 0);
    T(this, Lt, (e) => {
      if (!Yt && window.addEventListener) {
        const r = () => e();
        return window.addEventListener("visibilitychange", r, !1), () => {
          window.removeEventListener("visibilitychange", r);
        };
      }
    });
  }
  onSubscribe() {
    u(this, et) || this.setEventListener(u(this, Lt));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = u(this, et)) == null || e.call(this), T(this, et, void 0));
  }
  setEventListener(e) {
    var r;
    T(this, Lt, e), (r = u(this, et)) == null || r.call(this), T(this, et, e((n) => {
      typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
    }));
  }
  setFocused(e) {
    u(this, dt) !== e && (T(this, dt, e), this.onFocus());
  }
  onFocus() {
    const e = this.isFocused();
    this.listeners.forEach((r) => {
      r(e);
    });
  }
  isFocused() {
    var e;
    return typeof u(this, dt) == "boolean" ? u(this, dt) : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !== "hidden";
  }
}, dt = new WeakMap(), et = new WeakMap(), Lt = new WeakMap(), vi), cs = new zc(), Nt, tt, jt, wi, Wc = (wi = class extends Rr {
  constructor() {
    super();
    L(this, Nt, !0);
    L(this, tt, void 0);
    L(this, jt, void 0);
    T(this, jt, (e) => {
      if (!Yt && window.addEventListener) {
        const r = () => e(!0), n = () => e(!1);
        return window.addEventListener("online", r, !1), window.addEventListener("offline", n, !1), () => {
          window.removeEventListener("online", r), window.removeEventListener("offline", n);
        };
      }
    });
  }
  onSubscribe() {
    u(this, tt) || this.setEventListener(u(this, jt));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = u(this, tt)) == null || e.call(this), T(this, tt, void 0));
  }
  setEventListener(e) {
    var r;
    T(this, jt, e), (r = u(this, tt)) == null || r.call(this), T(this, tt, e(this.setOnline.bind(this)));
  }
  setOnline(e) {
    u(this, Nt) !== e && (T(this, Nt, e), this.listeners.forEach((n) => {
      n(e);
    }));
  }
  isOnline() {
    return u(this, Nt);
  }
}, Nt = new WeakMap(), tt = new WeakMap(), jt = new WeakMap(), wi), Zr = new Wc();
function Yc(t) {
  return Math.min(1e3 * 2 ** t, 3e4);
}
function ls(t) {
  return (t ?? "online") === "online" ? Zr.isOnline() : !0;
}
var No = class {
  constructor(t) {
    this.revert = t == null ? void 0 : t.revert, this.silent = t == null ? void 0 : t.silent;
  }
};
function _n(t) {
  return t instanceof No;
}
function jo(t) {
  let e = !1, r = 0, n = !1, s, i, o;
  const a = new Promise((m, k) => {
    i = m, o = k;
  }), l = (m) => {
    var k;
    n || (y(new No(m)), (k = t.abort) == null || k.call(t));
  }, f = () => {
    e = !0;
  }, h = () => {
    e = !1;
  }, p = () => !cs.isFocused() || t.networkMode !== "always" && !Zr.isOnline(), d = (m) => {
    var k;
    n || (n = !0, (k = t.onSuccess) == null || k.call(t, m), s == null || s(), i(m));
  }, y = (m) => {
    var k;
    n || (n = !0, (k = t.onError) == null || k.call(t, m), s == null || s(), o(m));
  }, v = () => new Promise((m) => {
    var k;
    s = (M) => {
      const P = n || !p();
      return P && m(M), P;
    }, (k = t.onPause) == null || k.call(t);
  }).then(() => {
    var m;
    s = void 0, n || (m = t.onContinue) == null || m.call(t);
  }), _ = () => {
    if (n)
      return;
    let m;
    try {
      m = t.fn();
    } catch (k) {
      m = Promise.reject(k);
    }
    Promise.resolve(m).then(d).catch((k) => {
      var Y;
      if (n)
        return;
      const M = t.retry ?? (Yt ? 0 : 3), P = t.retryDelay ?? Yc, q = typeof P == "function" ? P(r, k) : P, $ = M === !0 || typeof M == "number" && r < M || typeof M == "function" && M(r, k);
      if (e || !$) {
        y(k);
        return;
      }
      r++, (Y = t.onFail) == null || Y.call(t, r, k), Hc(q).then(() => {
        if (p())
          return v();
      }).then(() => {
        e ? y(k) : _();
      });
    });
  };
  return ls(t.networkMode) ? _() : v().then(_), {
    promise: a,
    cancel: l,
    continue: () => (s == null ? void 0 : s()) ? a : Promise.resolve(),
    cancelRetry: f,
    continueRetry: h
  };
}
function Kc() {
  let t = [], e = 0, r = (d) => {
    d();
  }, n = (d) => {
    d();
  }, s = (d) => setTimeout(d, 0);
  const i = (d) => {
    s = d;
  }, o = (d) => {
    let y;
    e++;
    try {
      y = d();
    } finally {
      e--, e || f();
    }
    return y;
  }, a = (d) => {
    e ? t.push(d) : s(() => {
      r(d);
    });
  }, l = (d) => (...y) => {
    a(() => {
      d(...y);
    });
  }, f = () => {
    const d = t;
    t = [], d.length && s(() => {
      n(() => {
        d.forEach((y) => {
          r(y);
        });
      });
    });
  };
  return {
    batch: o,
    batchCalls: l,
    schedule: a,
    setNotifyFunction: (d) => {
      r = d;
    },
    setBatchNotifyFunction: (d) => {
      n = d;
    },
    setScheduler: i
  };
}
var de = Kc(), pt, xi, Do = (xi = class {
  constructor() {
    L(this, pt, void 0);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), Mn(this.gcTime) && T(this, pt, setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(t) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      t ?? (Yt ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    u(this, pt) && (clearTimeout(u(this, pt)), T(this, pt, void 0));
  }
}, pt = new WeakMap(), xi), Dt, Bt, Se, ge, he, yr, yt, Pe, ze, _i, Gc = (_i = class extends Do {
  constructor(e) {
    super();
    L(this, Pe);
    L(this, Dt, void 0);
    L(this, Bt, void 0);
    L(this, Se, void 0);
    L(this, ge, void 0);
    L(this, he, void 0);
    L(this, yr, void 0);
    L(this, yt, void 0);
    T(this, yt, !1), T(this, yr, e.defaultOptions), this.setOptions(e.options), T(this, he, []), T(this, Se, e.cache), this.queryKey = e.queryKey, this.queryHash = e.queryHash, T(this, Dt, e.state || Xc(this.options)), this.state = u(this, Dt), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  setOptions(e) {
    this.options = { ...u(this, yr), ...e }, this.updateGcTime(this.options.gcTime);
  }
  optionalRemove() {
    !u(this, he).length && this.state.fetchStatus === "idle" && u(this, Se).remove(this);
  }
  setData(e, r) {
    const n = jn(this.state.data, e, this.options);
    return Q(this, Pe, ze).call(this, {
      data: n,
      type: "success",
      dataUpdatedAt: r == null ? void 0 : r.updatedAt,
      manual: r == null ? void 0 : r.manual
    }), n;
  }
  setState(e, r) {
    Q(this, Pe, ze).call(this, { type: "setState", state: e, setStateOptions: r });
  }
  cancel(e) {
    var n, s;
    const r = (n = u(this, ge)) == null ? void 0 : n.promise;
    return (s = u(this, ge)) == null || s.cancel(e), r ? r.then(Ce).catch(Ce) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(u(this, Dt));
  }
  isActive() {
    return u(this, he).some(
      (e) => e.options.enabled !== !1
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 && !this.isActive();
  }
  isStale() {
    return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? u(this, he).some(
      (e) => e.getCurrentResult().isStale
    ) : this.state.data === void 0;
  }
  isStaleByTime(e = 0) {
    return this.state.isInvalidated || this.state.data === void 0 || !Mo(this.state.dataUpdatedAt, e);
  }
  onFocus() {
    var r;
    const e = u(this, he).find((n) => n.shouldFetchOnWindowFocus());
    e == null || e.refetch({ cancelRefetch: !1 }), (r = u(this, ge)) == null || r.continue();
  }
  onOnline() {
    var r;
    const e = u(this, he).find((n) => n.shouldFetchOnReconnect());
    e == null || e.refetch({ cancelRefetch: !1 }), (r = u(this, ge)) == null || r.continue();
  }
  addObserver(e) {
    u(this, he).includes(e) || (u(this, he).push(e), this.clearGcTimeout(), u(this, Se).notify({ type: "observerAdded", query: this, observer: e }));
  }
  removeObserver(e) {
    u(this, he).includes(e) && (T(this, he, u(this, he).filter((r) => r !== e)), u(this, he).length || (u(this, ge) && (u(this, yt) ? u(this, ge).cancel({ revert: !0 }) : u(this, ge).cancelRetry()), this.scheduleGc()), u(this, Se).notify({ type: "observerRemoved", query: this, observer: e }));
  }
  getObserversCount() {
    return u(this, he).length;
  }
  invalidate() {
    this.state.isInvalidated || Q(this, Pe, ze).call(this, { type: "invalidate" });
  }
  fetch(e, r) {
    var f, h, p;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.data !== void 0 && (r != null && r.cancelRefetch))
        this.cancel({ silent: !0 });
      else if (u(this, ge))
        return u(this, ge).continueRetry(), u(this, ge).promise;
    }
    if (e && this.setOptions(e), !this.options.queryFn) {
      const d = u(this, he).find((y) => y.options.queryFn);
      d && this.setOptions(d.options);
    }
    process.env.NODE_ENV !== "production" && (Array.isArray(this.options.queryKey) || console.error(
      "As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']"
    ));
    const n = new AbortController(), s = {
      queryKey: this.queryKey,
      meta: this.meta
    }, i = (d) => {
      Object.defineProperty(d, "signal", {
        enumerable: !0,
        get: () => (T(this, yt, !0), n.signal)
      });
    };
    i(s);
    const o = () => (process.env.NODE_ENV !== "production" && this.options.queryFn === pr && console.error(
      `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${this.options.queryHash}'`
    ), !this.options.queryFn || this.options.queryFn === pr ? Promise.reject(
      new Error(`Missing queryFn: '${this.options.queryHash}'`)
    ) : (T(this, yt, !1), this.options.persister ? this.options.persister(
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
    i(a), (f = this.options.behavior) == null || f.onFetch(
      a,
      this
    ), T(this, Bt, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((h = a.fetchOptions) == null ? void 0 : h.meta)) && Q(this, Pe, ze).call(this, { type: "fetch", meta: (p = a.fetchOptions) == null ? void 0 : p.meta });
    const l = (d) => {
      var y, v, _, m;
      _n(d) && d.silent || Q(this, Pe, ze).call(this, {
        type: "error",
        error: d
      }), _n(d) || ((v = (y = u(this, Se).config).onError) == null || v.call(
        y,
        d,
        this
      ), (m = (_ = u(this, Se).config).onSettled) == null || m.call(
        _,
        this.state.data,
        d,
        this
      )), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
    };
    return T(this, ge, jo({
      fn: a.fetchFn,
      abort: n.abort.bind(n),
      onSuccess: (d) => {
        var y, v, _, m;
        if (d === void 0) {
          process.env.NODE_ENV !== "production" && console.error(
            `Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`
          ), l(new Error(`${this.queryHash} data is undefined`));
          return;
        }
        this.setData(d), (v = (y = u(this, Se).config).onSuccess) == null || v.call(y, d, this), (m = (_ = u(this, Se).config).onSettled) == null || m.call(
          _,
          d,
          this.state.error,
          this
        ), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
      },
      onError: l,
      onFail: (d, y) => {
        Q(this, Pe, ze).call(this, { type: "failed", failureCount: d, error: y });
      },
      onPause: () => {
        Q(this, Pe, ze).call(this, { type: "pause" });
      },
      onContinue: () => {
        Q(this, Pe, ze).call(this, { type: "continue" });
      },
      retry: a.options.retry,
      retryDelay: a.options.retryDelay,
      networkMode: a.options.networkMode
    })), u(this, ge).promise;
  }
}, Dt = new WeakMap(), Bt = new WeakMap(), Se = new WeakMap(), ge = new WeakMap(), he = new WeakMap(), yr = new WeakMap(), yt = new WeakMap(), Pe = new WeakSet(), ze = function(e) {
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
          ...Bo(n.data, this.options),
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
        return _n(s) && s.revert && u(this, Bt) ? { ...u(this, Bt), fetchStatus: "idle" } : {
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
  this.state = r(this.state), de.batch(() => {
    u(this, he).forEach((n) => {
      n.onQueryUpdate();
    }), u(this, Se).notify({ query: this, type: "updated", action: e });
  });
}, _i);
function Bo(t, e) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: ls(e.networkMode) ? "fetching" : "paused",
    ...t === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function Xc(t) {
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
var De, Ei, Jc = (Ei = class extends Rr {
  constructor(e = {}) {
    super();
    L(this, De, void 0);
    this.config = e, T(this, De, /* @__PURE__ */ new Map());
  }
  build(e, r, n) {
    const s = r.queryKey, i = r.queryHash ?? as(s, r);
    let o = this.get(i);
    return o || (o = new Gc({
      cache: this,
      queryKey: s,
      queryHash: i,
      options: e.defaultQueryOptions(r),
      state: n,
      defaultOptions: e.getQueryDefaults(s)
    }), this.add(o)), o;
  }
  add(e) {
    u(this, De).has(e.queryHash) || (u(this, De).set(e.queryHash, e), this.notify({
      type: "added",
      query: e
    }));
  }
  remove(e) {
    const r = u(this, De).get(e.queryHash);
    r && (e.destroy(), r === e && u(this, De).delete(e.queryHash), this.notify({ type: "removed", query: e }));
  }
  clear() {
    de.batch(() => {
      this.getAll().forEach((e) => {
        this.remove(e);
      });
    });
  }
  get(e) {
    return u(this, De).get(e);
  }
  getAll() {
    return [...u(this, De).values()];
  }
  find(e) {
    const r = { exact: !0, ...e };
    return this.getAll().find(
      (n) => Xs(r, n)
    );
  }
  findAll(e = {}) {
    const r = this.getAll();
    return Object.keys(e).length > 0 ? r.filter((n) => Xs(e, n)) : r;
  }
  notify(e) {
    de.batch(() => {
      this.listeners.forEach((r) => {
        r(e);
      });
    });
  }
  onFocus() {
    de.batch(() => {
      this.getAll().forEach((e) => {
        e.onFocus();
      });
    });
  }
  onOnline() {
    de.batch(() => {
      this.getAll().forEach((e) => {
        e.onOnline();
      });
    });
  }
}, De = new WeakMap(), Ei), Be, gr, xe, It, Ie, Ze, Si, Zc = (Si = class extends Do {
  constructor(e) {
    super();
    L(this, Ie);
    L(this, Be, void 0);
    L(this, gr, void 0);
    L(this, xe, void 0);
    L(this, It, void 0);
    this.mutationId = e.mutationId, T(this, gr, e.defaultOptions), T(this, xe, e.mutationCache), T(this, Be, []), this.state = e.state || el(), this.setOptions(e.options), this.scheduleGc();
  }
  setOptions(e) {
    this.options = { ...u(this, gr), ...e }, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(e) {
    u(this, Be).includes(e) || (u(this, Be).push(e), this.clearGcTimeout(), u(this, xe).notify({
      type: "observerAdded",
      mutation: this,
      observer: e
    }));
  }
  removeObserver(e) {
    T(this, Be, u(this, Be).filter((r) => r !== e)), this.scheduleGc(), u(this, xe).notify({
      type: "observerRemoved",
      mutation: this,
      observer: e
    });
  }
  optionalRemove() {
    u(this, Be).length || (this.state.status === "pending" ? this.scheduleGc() : u(this, xe).remove(this));
  }
  continue() {
    var e;
    return ((e = u(this, It)) == null ? void 0 : e.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(e) {
    var s, i, o, a, l, f, h, p, d, y, v, _, m, k, M, P, q, $, Y, ne;
    const r = () => (T(this, It, jo({
      fn: () => this.options.mutationFn ? this.options.mutationFn(e) : Promise.reject(new Error("No mutationFn found")),
      onFail: (B, G) => {
        Q(this, Ie, Ze).call(this, { type: "failed", failureCount: B, error: G });
      },
      onPause: () => {
        Q(this, Ie, Ze).call(this, { type: "pause" });
      },
      onContinue: () => {
        Q(this, Ie, Ze).call(this, { type: "continue" });
      },
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode
    })), u(this, It).promise), n = this.state.status === "pending";
    try {
      if (!n) {
        Q(this, Ie, Ze).call(this, { type: "pending", variables: e }), await ((i = (s = u(this, xe).config).onMutate) == null ? void 0 : i.call(
          s,
          e,
          this
        ));
        const G = await ((a = (o = this.options).onMutate) == null ? void 0 : a.call(o, e));
        G !== this.state.context && Q(this, Ie, Ze).call(this, {
          type: "pending",
          context: G,
          variables: e
        });
      }
      const B = await r();
      return await ((f = (l = u(this, xe).config).onSuccess) == null ? void 0 : f.call(
        l,
        B,
        e,
        this.state.context,
        this
      )), await ((p = (h = this.options).onSuccess) == null ? void 0 : p.call(h, B, e, this.state.context)), await ((y = (d = u(this, xe).config).onSettled) == null ? void 0 : y.call(
        d,
        B,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((_ = (v = this.options).onSettled) == null ? void 0 : _.call(v, B, null, e, this.state.context)), Q(this, Ie, Ze).call(this, { type: "success", data: B }), B;
    } catch (B) {
      try {
        throw await ((k = (m = u(this, xe).config).onError) == null ? void 0 : k.call(
          m,
          B,
          e,
          this.state.context,
          this
        )), await ((P = (M = this.options).onError) == null ? void 0 : P.call(
          M,
          B,
          e,
          this.state.context
        )), await (($ = (q = u(this, xe).config).onSettled) == null ? void 0 : $.call(
          q,
          void 0,
          B,
          this.state.variables,
          this.state.context,
          this
        )), await ((ne = (Y = this.options).onSettled) == null ? void 0 : ne.call(
          Y,
          void 0,
          B,
          e,
          this.state.context
        )), B;
      } finally {
        Q(this, Ie, Ze).call(this, { type: "error", error: B });
      }
    }
  }
}, Be = new WeakMap(), gr = new WeakMap(), xe = new WeakMap(), It = new WeakMap(), Ie = new WeakSet(), Ze = function(e) {
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
          isPaused: !ls(this.options.networkMode),
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
  this.state = r(this.state), de.batch(() => {
    u(this, Be).forEach((n) => {
      n.onMutationUpdate(e);
    }), u(this, xe).notify({
      mutation: this,
      type: "updated",
      action: e
    });
  });
}, Si);
function el() {
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
var ke, mr, gt, ki, tl = (ki = class extends Rr {
  constructor(e = {}) {
    super();
    L(this, ke, void 0);
    L(this, mr, void 0);
    L(this, gt, void 0);
    this.config = e, T(this, ke, []), T(this, mr, 0);
  }
  build(e, r, n) {
    const s = new Zc({
      mutationCache: this,
      mutationId: ++Lr(this, mr)._,
      options: e.defaultMutationOptions(r),
      state: n
    });
    return this.add(s), s;
  }
  add(e) {
    u(this, ke).push(e), this.notify({ type: "added", mutation: e });
  }
  remove(e) {
    T(this, ke, u(this, ke).filter((r) => r !== e)), this.notify({ type: "removed", mutation: e });
  }
  clear() {
    de.batch(() => {
      u(this, ke).forEach((e) => {
        this.remove(e);
      });
    });
  }
  getAll() {
    return u(this, ke);
  }
  find(e) {
    const r = { exact: !0, ...e };
    return u(this, ke).find(
      (n) => Js(r, n)
    );
  }
  findAll(e = {}) {
    return u(this, ke).filter(
      (r) => Js(e, r)
    );
  }
  notify(e) {
    de.batch(() => {
      this.listeners.forEach((r) => {
        r(e);
      });
    });
  }
  resumePausedMutations() {
    return T(this, gt, (u(this, gt) ?? Promise.resolve()).then(() => {
      const e = u(this, ke).filter((r) => r.state.isPaused);
      return de.batch(
        () => e.reduce(
          (r, n) => r.then(() => n.continue().catch(Ce)),
          Promise.resolve()
        )
      );
    }).then(() => {
      T(this, gt, void 0);
    })), u(this, gt);
  }
}, ke = new WeakMap(), mr = new WeakMap(), gt = new WeakMap(), ki);
function rl(t) {
  return {
    onFetch: (e, r) => {
      const n = async () => {
        var v, _, m, k, M;
        const s = e.options, i = (m = (_ = (v = e.fetchOptions) == null ? void 0 : v.meta) == null ? void 0 : _.fetchMore) == null ? void 0 : m.direction, o = ((k = e.state.data) == null ? void 0 : k.pages) || [], a = ((M = e.state.data) == null ? void 0 : M.pageParams) || [], l = { pages: [], pageParams: [] };
        let f = !1;
        const h = (P) => {
          Object.defineProperty(P, "signal", {
            enumerable: !0,
            get: () => (e.signal.aborted ? f = !0 : e.signal.addEventListener("abort", () => {
              f = !0;
            }), e.signal)
          });
        }, p = e.options.queryFn && e.options.queryFn !== pr ? e.options.queryFn : () => (process.env.NODE_ENV !== "production" && e.options.queryFn === pr && console.error(
          `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${e.options.queryHash}'`
        ), Promise.reject(
          new Error(`Missing queryFn: '${e.options.queryHash}'`)
        )), d = async (P, q, $) => {
          if (f)
            return Promise.reject();
          if (q == null && P.pages.length)
            return Promise.resolve(P);
          const Y = {
            queryKey: e.queryKey,
            pageParam: q,
            direction: $ ? "backward" : "forward",
            meta: e.options.meta
          };
          h(Y);
          const ne = await p(
            Y
          ), { maxPages: B } = e.options, G = $ ? Qc : Vc;
          return {
            pages: G(P.pages, ne, B),
            pageParams: G(P.pageParams, q, B)
          };
        };
        let y;
        if (i && o.length) {
          const P = i === "backward", q = P ? nl : ti, $ = {
            pages: o,
            pageParams: a
          }, Y = q(s, $);
          y = await d($, Y, P);
        } else {
          y = await d(
            l,
            a[0] ?? s.initialPageParam
          );
          const P = t ?? o.length;
          for (let q = 1; q < P; q++) {
            const $ = ti(s, y);
            y = await d(y, $);
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
function ti(t, { pages: e, pageParams: r }) {
  const n = e.length - 1;
  return t.getNextPageParam(
    e[n],
    e,
    r[n],
    r
  );
}
function nl(t, { pages: e, pageParams: r }) {
  var n;
  return (n = t.getPreviousPageParam) == null ? void 0 : n.call(
    t,
    e[0],
    e,
    r[0],
    r
  );
}
var se, rt, nt, Ft, Ut, st, qt, Ht, Ci, sl = (Ci = class {
  constructor(t = {}) {
    L(this, se, void 0);
    L(this, rt, void 0);
    L(this, nt, void 0);
    L(this, Ft, void 0);
    L(this, Ut, void 0);
    L(this, st, void 0);
    L(this, qt, void 0);
    L(this, Ht, void 0);
    T(this, se, t.queryCache || new Jc()), T(this, rt, t.mutationCache || new tl()), T(this, nt, t.defaultOptions || {}), T(this, Ft, /* @__PURE__ */ new Map()), T(this, Ut, /* @__PURE__ */ new Map()), T(this, st, 0);
  }
  mount() {
    Lr(this, st)._++, u(this, st) === 1 && (T(this, qt, cs.subscribe(async (t) => {
      t && (await this.resumePausedMutations(), u(this, se).onFocus());
    })), T(this, Ht, Zr.subscribe(async (t) => {
      t && (await this.resumePausedMutations(), u(this, se).onOnline());
    })));
  }
  unmount() {
    var t, e;
    Lr(this, st)._--, u(this, st) === 0 && ((t = u(this, qt)) == null || t.call(this), T(this, qt, void 0), (e = u(this, Ht)) == null || e.call(this), T(this, Ht, void 0));
  }
  isFetching(t) {
    return u(this, se).findAll({ ...t, fetchStatus: "fetching" }).length;
  }
  isMutating(t) {
    return u(this, rt).findAll({ ...t, status: "pending" }).length;
  }
  getQueryData(t) {
    var r;
    const e = this.defaultQueryOptions({ queryKey: t });
    return (r = u(this, se).get(e.queryHash)) == null ? void 0 : r.state.data;
  }
  ensureQueryData(t) {
    const e = this.getQueryData(t.queryKey);
    if (e === void 0)
      return this.fetchQuery(t);
    {
      const r = this.defaultQueryOptions(t), n = u(this, se).build(this, r);
      return t.revalidateIfStale && n.isStaleByTime(r.staleTime) && this.prefetchQuery(r), Promise.resolve(e);
    }
  }
  getQueriesData(t) {
    return u(this, se).findAll(t).map(({ queryKey: e, state: r }) => {
      const n = r.data;
      return [e, n];
    });
  }
  setQueryData(t, e, r) {
    const n = this.defaultQueryOptions({ queryKey: t }), s = u(this, se).get(
      n.queryHash
    ), i = s == null ? void 0 : s.state.data, o = qc(e, i);
    if (o !== void 0)
      return u(this, se).build(this, n).setData(o, { ...r, manual: !0 });
  }
  setQueriesData(t, e, r) {
    return de.batch(
      () => u(this, se).findAll(t).map(({ queryKey: n }) => [
        n,
        this.setQueryData(n, e, r)
      ])
    );
  }
  getQueryState(t) {
    var r;
    const e = this.defaultQueryOptions({ queryKey: t });
    return (r = u(this, se).get(e.queryHash)) == null ? void 0 : r.state;
  }
  removeQueries(t) {
    const e = u(this, se);
    de.batch(() => {
      e.findAll(t).forEach((r) => {
        e.remove(r);
      });
    });
  }
  resetQueries(t, e) {
    const r = u(this, se), n = {
      type: "active",
      ...t
    };
    return de.batch(() => (r.findAll(t).forEach((s) => {
      s.reset();
    }), this.refetchQueries(n, e)));
  }
  cancelQueries(t = {}, e = {}) {
    const r = { revert: !0, ...e }, n = de.batch(
      () => u(this, se).findAll(t).map((s) => s.cancel(r))
    );
    return Promise.all(n).then(Ce).catch(Ce);
  }
  invalidateQueries(t = {}, e = {}) {
    return de.batch(() => {
      if (u(this, se).findAll(t).forEach((n) => {
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
    }, n = de.batch(
      () => u(this, se).findAll(t).filter((s) => !s.isDisabled()).map((s) => {
        let i = s.fetch(void 0, r);
        return r.throwOnError || (i = i.catch(Ce)), s.state.fetchStatus === "paused" ? Promise.resolve() : i;
      })
    );
    return Promise.all(n).then(Ce);
  }
  fetchQuery(t) {
    const e = this.defaultQueryOptions(t);
    e.retry === void 0 && (e.retry = !1);
    const r = u(this, se).build(this, e);
    return r.isStaleByTime(e.staleTime) ? r.fetch(e) : Promise.resolve(r.state.data);
  }
  prefetchQuery(t) {
    return this.fetchQuery(t).then(Ce).catch(Ce);
  }
  fetchInfiniteQuery(t) {
    return t.behavior = rl(t.pages), this.fetchQuery(t);
  }
  prefetchInfiniteQuery(t) {
    return this.fetchInfiniteQuery(t).then(Ce).catch(Ce);
  }
  resumePausedMutations() {
    return Zr.isOnline() ? u(this, rt).resumePausedMutations() : Promise.resolve();
  }
  getQueryCache() {
    return u(this, se);
  }
  getMutationCache() {
    return u(this, rt);
  }
  getDefaultOptions() {
    return u(this, nt);
  }
  setDefaultOptions(t) {
    T(this, nt, t);
  }
  setQueryDefaults(t, e) {
    u(this, Ft).set(fr(t), {
      queryKey: t,
      defaultOptions: e
    });
  }
  getQueryDefaults(t) {
    const e = [...u(this, Ft).values()];
    let r = {};
    return e.forEach((n) => {
      dr(t, n.queryKey) && (r = { ...r, ...n.defaultOptions });
    }), r;
  }
  setMutationDefaults(t, e) {
    u(this, Ut).set(fr(t), {
      mutationKey: t,
      defaultOptions: e
    });
  }
  getMutationDefaults(t) {
    const e = [...u(this, Ut).values()];
    let r = {};
    return e.forEach((n) => {
      dr(t, n.mutationKey) && (r = { ...r, ...n.defaultOptions });
    }), r;
  }
  defaultQueryOptions(t) {
    if (t._defaulted)
      return t;
    const e = {
      ...u(this, nt).queries,
      ...this.getQueryDefaults(t.queryKey),
      ...t,
      _defaulted: !0
    };
    return e.queryHash || (e.queryHash = as(
      e.queryKey,
      e
    )), e.refetchOnReconnect === void 0 && (e.refetchOnReconnect = e.networkMode !== "always"), e.throwOnError === void 0 && (e.throwOnError = !!e.suspense), !e.networkMode && e.persister && (e.networkMode = "offlineFirst"), e.enabled !== !0 && e.queryFn === pr && (e.enabled = !1), e;
  }
  defaultMutationOptions(t) {
    return t != null && t._defaulted ? t : {
      ...u(this, nt).mutations,
      ...(t == null ? void 0 : t.mutationKey) && this.getMutationDefaults(t.mutationKey),
      ...t,
      _defaulted: !0
    };
  }
  clear() {
    u(this, se).clear(), u(this, rt).clear();
  }
}, se = new WeakMap(), rt = new WeakMap(), nt = new WeakMap(), Ft = new WeakMap(), Ut = new WeakMap(), st = new WeakMap(), qt = new WeakMap(), Ht = new WeakMap(), Ci), ve, ee, br, me, mt, Vt, Fe, vr, Qt, zt, bt, vt, it, Wt, wt, ir, wr, Dn, xr, Bn, _r, In, Er, Fn, Sr, Un, kr, qn, Cr, Hn, tn, Io, Oi, il = (Oi = class extends Rr {
  constructor(e, r) {
    super();
    L(this, wt);
    L(this, wr);
    L(this, xr);
    L(this, _r);
    L(this, Er);
    L(this, Sr);
    L(this, kr);
    L(this, Cr);
    L(this, tn);
    L(this, ve, void 0);
    L(this, ee, void 0);
    L(this, br, void 0);
    L(this, me, void 0);
    L(this, mt, void 0);
    L(this, Vt, void 0);
    L(this, Fe, void 0);
    L(this, vr, void 0);
    L(this, Qt, void 0);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    L(this, zt, void 0);
    L(this, bt, void 0);
    L(this, vt, void 0);
    L(this, it, void 0);
    L(this, Wt, /* @__PURE__ */ new Set());
    this.options = r, T(this, ve, e), T(this, Fe, null), this.bindMethods(), this.setOptions(r);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (u(this, ee).addObserver(this), ri(u(this, ee), this.options) ? Q(this, wt, ir).call(this) : this.updateResult(), Q(this, Er, Fn).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Vn(
      u(this, ee),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return Vn(
      u(this, ee),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), Q(this, Sr, Un).call(this), Q(this, kr, qn).call(this), u(this, ee).removeObserver(this);
  }
  setOptions(e, r) {
    const n = this.options, s = u(this, ee);
    if (this.options = u(this, ve).defaultQueryOptions(e), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean")
      throw new Error("Expected enabled to be a boolean");
    Q(this, Cr, Hn).call(this), u(this, ee).setOptions(this.options), n._defaulted && !Ln(this.options, n) && u(this, ve).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: u(this, ee),
      observer: this
    });
    const i = this.hasListeners();
    i && ni(
      u(this, ee),
      s,
      this.options,
      n
    ) && Q(this, wt, ir).call(this), this.updateResult(r), i && (u(this, ee) !== s || this.options.enabled !== n.enabled || this.options.staleTime !== n.staleTime) && Q(this, wr, Dn).call(this);
    const o = Q(this, xr, Bn).call(this);
    i && (u(this, ee) !== s || this.options.enabled !== n.enabled || o !== u(this, it)) && Q(this, _r, In).call(this, o);
  }
  getOptimisticResult(e) {
    const r = u(this, ve).getQueryCache().build(u(this, ve), e), n = this.createResult(r, e);
    return al(this, n) && (T(this, me, n), T(this, Vt, this.options), T(this, mt, u(this, ee).state)), n;
  }
  getCurrentResult() {
    return u(this, me);
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
    u(this, Wt).add(e);
  }
  getCurrentQuery() {
    return u(this, ee);
  }
  refetch({ ...e } = {}) {
    return this.fetch({
      ...e
    });
  }
  fetchOptimistic(e) {
    const r = u(this, ve).defaultQueryOptions(e), n = u(this, ve).getQueryCache().build(u(this, ve), r);
    return n.isFetchingOptimistic = !0, n.fetch().then(() => this.createResult(n, r));
  }
  fetch(e) {
    return Q(this, wt, ir).call(this, {
      ...e,
      cancelRefetch: e.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), u(this, me)));
  }
  createResult(e, r) {
    var ne;
    const n = u(this, ee), s = this.options, i = u(this, me), o = u(this, mt), a = u(this, Vt), f = e !== n ? e.state : u(this, br), { state: h } = e;
    let p = { ...h }, d = !1, y;
    if (r._optimisticResults) {
      const B = this.hasListeners(), G = !B && ri(e, r), X = B && ni(e, n, r, s);
      (G || X) && (p = {
        ...p,
        ...Bo(h.data, e.options)
      }), r._optimisticResults === "isRestoring" && (p.fetchStatus = "idle");
    }
    let { error: v, errorUpdatedAt: _, status: m } = p;
    if (r.select && p.data !== void 0)
      if (i && p.data === (o == null ? void 0 : o.data) && r.select === u(this, vr))
        y = u(this, Qt);
      else
        try {
          T(this, vr, r.select), y = r.select(p.data), y = jn(i == null ? void 0 : i.data, y, r), T(this, Qt, y), T(this, Fe, null);
        } catch (B) {
          T(this, Fe, B);
        }
    else
      y = p.data;
    if (r.placeholderData !== void 0 && y === void 0 && m === "pending") {
      let B;
      if (i != null && i.isPlaceholderData && r.placeholderData === (a == null ? void 0 : a.placeholderData))
        B = i.data;
      else if (B = typeof r.placeholderData == "function" ? r.placeholderData(
        (ne = u(this, zt)) == null ? void 0 : ne.state.data,
        u(this, zt)
      ) : r.placeholderData, r.select && B !== void 0)
        try {
          B = r.select(B), T(this, Fe, null);
        } catch (G) {
          T(this, Fe, G);
        }
      B !== void 0 && (m = "success", y = jn(
        i == null ? void 0 : i.data,
        B,
        r
      ), d = !0);
    }
    u(this, Fe) && (v = u(this, Fe), y = u(this, Qt), _ = Date.now(), m = "error");
    const k = p.fetchStatus === "fetching", M = m === "pending", P = m === "error", q = M && k, $ = y !== void 0;
    return {
      status: m,
      fetchStatus: p.fetchStatus,
      isPending: M,
      isSuccess: m === "success",
      isError: P,
      isInitialLoading: q,
      isLoading: q,
      data: y,
      dataUpdatedAt: p.dataUpdatedAt,
      error: v,
      errorUpdatedAt: _,
      failureCount: p.fetchFailureCount,
      failureReason: p.fetchFailureReason,
      errorUpdateCount: p.errorUpdateCount,
      isFetched: p.dataUpdateCount > 0 || p.errorUpdateCount > 0,
      isFetchedAfterMount: p.dataUpdateCount > f.dataUpdateCount || p.errorUpdateCount > f.errorUpdateCount,
      isFetching: k,
      isRefetching: k && !M,
      isLoadingError: P && !$,
      isPaused: p.fetchStatus === "paused",
      isPlaceholderData: d,
      isRefetchError: P && $,
      isStale: us(e, r),
      refetch: this.refetch
    };
  }
  updateResult(e) {
    const r = u(this, me), n = this.createResult(u(this, ee), this.options);
    if (T(this, mt, u(this, ee).state), T(this, Vt, this.options), u(this, mt).data !== void 0 && T(this, zt, u(this, ee)), Ln(n, r))
      return;
    T(this, me, n);
    const s = {}, i = () => {
      if (!r)
        return !0;
      const { notifyOnChangeProps: o } = this.options, a = typeof o == "function" ? o() : o;
      if (a === "all" || !a && !u(this, Wt).size)
        return !0;
      const l = new Set(
        a ?? u(this, Wt)
      );
      return this.options.throwOnError && l.add("error"), Object.keys(u(this, me)).some((f) => {
        const h = f;
        return u(this, me)[h] !== r[h] && l.has(h);
      });
    };
    (e == null ? void 0 : e.listeners) !== !1 && i() && (s.listeners = !0), Q(this, tn, Io).call(this, { ...s, ...e });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && Q(this, Er, Fn).call(this);
  }
}, ve = new WeakMap(), ee = new WeakMap(), br = new WeakMap(), me = new WeakMap(), mt = new WeakMap(), Vt = new WeakMap(), Fe = new WeakMap(), vr = new WeakMap(), Qt = new WeakMap(), zt = new WeakMap(), bt = new WeakMap(), vt = new WeakMap(), it = new WeakMap(), Wt = new WeakMap(), wt = new WeakSet(), ir = function(e) {
  Q(this, Cr, Hn).call(this);
  let r = u(this, ee).fetch(
    this.options,
    e
  );
  return e != null && e.throwOnError || (r = r.catch(Ce)), r;
}, wr = new WeakSet(), Dn = function() {
  if (Q(this, Sr, Un).call(this), Yt || u(this, me).isStale || !Mn(this.options.staleTime))
    return;
  const r = Mo(
    u(this, me).dataUpdatedAt,
    this.options.staleTime
  ) + 1;
  T(this, bt, setTimeout(() => {
    u(this, me).isStale || this.updateResult();
  }, r));
}, xr = new WeakSet(), Bn = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(u(this, ee)) : this.options.refetchInterval) ?? !1;
}, _r = new WeakSet(), In = function(e) {
  Q(this, kr, qn).call(this), T(this, it, e), !(Yt || this.options.enabled === !1 || !Mn(u(this, it)) || u(this, it) === 0) && T(this, vt, setInterval(() => {
    (this.options.refetchIntervalInBackground || cs.isFocused()) && Q(this, wt, ir).call(this);
  }, u(this, it)));
}, Er = new WeakSet(), Fn = function() {
  Q(this, wr, Dn).call(this), Q(this, _r, In).call(this, Q(this, xr, Bn).call(this));
}, Sr = new WeakSet(), Un = function() {
  u(this, bt) && (clearTimeout(u(this, bt)), T(this, bt, void 0));
}, kr = new WeakSet(), qn = function() {
  u(this, vt) && (clearInterval(u(this, vt)), T(this, vt, void 0));
}, Cr = new WeakSet(), Hn = function() {
  const e = u(this, ve).getQueryCache().build(u(this, ve), this.options);
  if (e === u(this, ee))
    return;
  const r = u(this, ee);
  T(this, ee, e), T(this, br, e.state), this.hasListeners() && (r == null || r.removeObserver(this), e.addObserver(this));
}, tn = new WeakSet(), Io = function(e) {
  de.batch(() => {
    e.listeners && this.listeners.forEach((r) => {
      r(u(this, me));
    }), u(this, ve).getQueryCache().notify({
      query: u(this, ee),
      type: "observerResultsUpdated"
    });
  });
}, Oi);
function ol(t, e) {
  return e.enabled !== !1 && t.state.data === void 0 && !(t.state.status === "error" && e.retryOnMount === !1);
}
function ri(t, e) {
  return ol(t, e) || t.state.data !== void 0 && Vn(t, e, e.refetchOnMount);
}
function Vn(t, e, r) {
  if (e.enabled !== !1) {
    const n = typeof r == "function" ? r(t) : r;
    return n === "always" || n !== !1 && us(t, e);
  }
  return !1;
}
function ni(t, e, r, n) {
  return (t !== e || n.enabled === !1) && (!r.suspense || t.state.status !== "error") && us(t, r);
}
function us(t, e) {
  return e.enabled !== !1 && t.isStaleByTime(e.staleTime);
}
function al(t, e) {
  return !Ln(t.getCurrentResult(), e);
}
var Fo = we.createContext(
  void 0
), Uo = (t) => {
  const e = we.useContext(Fo);
  if (t)
    return t;
  if (!e)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return e;
}, cl = ({
  client: t,
  children: e
}) => (we.useEffect(() => (t.mount(), () => {
  t.unmount();
}), [t]), /* @__PURE__ */ R.jsx(Fo.Provider, { value: t, children: e })), qo = we.createContext(!1), ll = () => we.useContext(qo);
qo.Provider;
function ul() {
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
var hl = we.createContext(ul()), fl = () => we.useContext(hl);
function dl(t, e) {
  return typeof t == "function" ? t(...e) : !!t;
}
var pl = (t, e) => {
  (t.suspense || t.throwOnError) && (e.isReset() || (t.retryOnMount = !1));
}, yl = (t) => {
  we.useEffect(() => {
    t.clearReset();
  }, [t]);
}, gl = ({
  result: t,
  errorResetBoundary: e,
  throwOnError: r,
  query: n
}) => t.isError && !e.isReset() && !t.isFetching && n && dl(r, [t.error, n]), ml = (t) => {
  t.suspense && typeof t.staleTime != "number" && (t.staleTime = 1e3);
}, bl = (t, e) => (t == null ? void 0 : t.suspense) && e.isPending, vl = (t, e, r) => e.fetchOptimistic(t).catch(() => {
  r.clearReset();
});
function wl(t, e, r) {
  if (process.env.NODE_ENV !== "production" && (typeof t != "object" || Array.isArray(t)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const n = Uo(r), s = ll(), i = fl(), o = n.defaultQueryOptions(t);
  o._optimisticResults = s ? "isRestoring" : "optimistic", ml(o), pl(o, i), yl(i);
  const [a] = we.useState(
    () => new e(
      n,
      o
    )
  ), l = a.getOptimisticResult(o);
  if (we.useSyncExternalStore(
    we.useCallback(
      (f) => {
        const h = s ? () => {
        } : a.subscribe(de.batchCalls(f));
        return a.updateResult(), h;
      },
      [a, s]
    ),
    () => a.getCurrentResult(),
    () => a.getCurrentResult()
  ), we.useEffect(() => {
    a.setOptions(o, { listeners: !1 });
  }, [o, a]), bl(o, l))
    throw vl(o, a, i);
  if (gl({
    result: l,
    errorResetBoundary: i,
    throwOnError: o.throwOnError,
    query: n.getQueryCache().get(o.queryHash)
  }))
    throw l.error;
  return o.notifyOnChangeProps ? l : a.trackResult(l);
}
function si(t, e) {
  return wl(t, il, e);
}
const qe = /* @__PURE__ */ Object.create(null);
qe.open = "0";
qe.close = "1";
qe.ping = "2";
qe.pong = "3";
qe.message = "4";
qe.upgrade = "5";
qe.noop = "6";
const zr = /* @__PURE__ */ Object.create(null);
Object.keys(qe).forEach((t) => {
  zr[qe[t]] = t;
});
const Qn = { type: "error", data: "parser error" }, Ho = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Vo = typeof ArrayBuffer == "function", Qo = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer, hs = ({ type: t, data: e }, r, n) => Ho && e instanceof Blob ? r ? n(e) : ii(e, n) : Vo && (e instanceof ArrayBuffer || Qo(e)) ? r ? n(e) : ii(new Blob([e]), n) : n(qe[t] + (e || "")), ii = (t, e) => {
  const r = new FileReader();
  return r.onload = function() {
    const n = r.result.split(",")[1];
    e("b" + (n || ""));
  }, r.readAsDataURL(t);
};
function oi(t) {
  return t instanceof Uint8Array ? t : t instanceof ArrayBuffer ? new Uint8Array(t) : new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
}
let En;
function xl(t, e) {
  if (Ho && t.data instanceof Blob)
    return t.data.arrayBuffer().then(oi).then(e);
  if (Vo && (t.data instanceof ArrayBuffer || Qo(t.data)))
    return e(oi(t.data));
  hs(t, !1, (r) => {
    En || (En = new TextEncoder()), e(En.encode(r));
  });
}
const ai = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", or = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let t = 0; t < ai.length; t++)
  or[ai.charCodeAt(t)] = t;
const _l = (t) => {
  let e = t.length * 0.75, r = t.length, n, s = 0, i, o, a, l;
  t[t.length - 1] === "=" && (e--, t[t.length - 2] === "=" && e--);
  const f = new ArrayBuffer(e), h = new Uint8Array(f);
  for (n = 0; n < r; n += 4)
    i = or[t.charCodeAt(n)], o = or[t.charCodeAt(n + 1)], a = or[t.charCodeAt(n + 2)], l = or[t.charCodeAt(n + 3)], h[s++] = i << 2 | o >> 4, h[s++] = (o & 15) << 4 | a >> 2, h[s++] = (a & 3) << 6 | l & 63;
  return f;
}, El = typeof ArrayBuffer == "function", fs = (t, e) => {
  if (typeof t != "string")
    return {
      type: "message",
      data: zo(t, e)
    };
  const r = t.charAt(0);
  return r === "b" ? {
    type: "message",
    data: Sl(t.substring(1), e)
  } : zr[r] ? t.length > 1 ? {
    type: zr[r],
    data: t.substring(1)
  } : {
    type: zr[r]
  } : Qn;
}, Sl = (t, e) => {
  if (El) {
    const r = _l(t);
    return zo(r, e);
  } else
    return { base64: !0, data: t };
}, zo = (t, e) => {
  switch (e) {
    case "blob":
      return t instanceof Blob ? t : new Blob([t]);
    case "arraybuffer":
    default:
      return t instanceof ArrayBuffer ? t : t.buffer;
  }
}, Wo = "", kl = (t, e) => {
  const r = t.length, n = new Array(r);
  let s = 0;
  t.forEach((i, o) => {
    hs(i, !1, (a) => {
      n[o] = a, ++s === r && e(n.join(Wo));
    });
  });
}, Cl = (t, e) => {
  const r = t.split(Wo), n = [];
  for (let s = 0; s < r.length; s++) {
    const i = fs(r[s], e);
    if (n.push(i), i.type === "error")
      break;
  }
  return n;
};
function Ol() {
  return new TransformStream({
    transform(t, e) {
      xl(t, (r) => {
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
let Sn;
function Dr(t) {
  return t.reduce((e, r) => e + r.length, 0);
}
function Br(t, e) {
  if (t[0].length === e)
    return t.shift();
  const r = new Uint8Array(e);
  let n = 0;
  for (let s = 0; s < e; s++)
    r[s] = t[0][n++], n === t[0].length && (t.shift(), n = 0);
  return t.length && n < t[0].length && (t[0] = t[0].slice(n)), r;
}
function Al(t, e) {
  Sn || (Sn = new TextDecoder());
  const r = [];
  let n = 0, s = -1, i = !1;
  return new TransformStream({
    transform(o, a) {
      for (r.push(o); ; ) {
        if (n === 0) {
          if (Dr(r) < 1)
            break;
          const l = Br(r, 1);
          i = (l[0] & 128) === 128, s = l[0] & 127, s < 126 ? n = 3 : s === 126 ? n = 1 : n = 2;
        } else if (n === 1) {
          if (Dr(r) < 2)
            break;
          const l = Br(r, 2);
          s = new DataView(l.buffer, l.byteOffset, l.length).getUint16(0), n = 3;
        } else if (n === 2) {
          if (Dr(r) < 8)
            break;
          const l = Br(r, 8), f = new DataView(l.buffer, l.byteOffset, l.length), h = f.getUint32(0);
          if (h > Math.pow(2, 21) - 1) {
            a.enqueue(Qn);
            break;
          }
          s = h * Math.pow(2, 32) + f.getUint32(4), n = 3;
        } else {
          if (Dr(r) < s)
            break;
          const l = Br(r, s);
          a.enqueue(fs(i ? l : Sn.decode(l), e)), n = 0;
        }
        if (s === 0 || s > t) {
          a.enqueue(Qn);
          break;
        }
      }
    }
  });
}
const Yo = 4;
function ce(t) {
  if (t)
    return Tl(t);
}
function Tl(t) {
  for (var e in ce.prototype)
    t[e] = ce.prototype[e];
  return t;
}
ce.prototype.on = ce.prototype.addEventListener = function(t, e) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this;
};
ce.prototype.once = function(t, e) {
  function r() {
    this.off(t, r), e.apply(this, arguments);
  }
  return r.fn = e, this.on(t, r), this;
};
ce.prototype.off = ce.prototype.removeListener = ce.prototype.removeAllListeners = ce.prototype.removeEventListener = function(t, e) {
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
ce.prototype.emit = function(t) {
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
ce.prototype.emitReserved = ce.prototype.emit;
ce.prototype.listeners = function(t) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];
};
ce.prototype.hasListeners = function(t) {
  return !!this.listeners(t).length;
};
const Oe = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
function Ko(t, ...e) {
  return e.reduce((r, n) => (t.hasOwnProperty(n) && (r[n] = t[n]), r), {});
}
const Rl = Oe.setTimeout, Pl = Oe.clearTimeout;
function un(t, e) {
  e.useNativeTimers ? (t.setTimeoutFn = Rl.bind(Oe), t.clearTimeoutFn = Pl.bind(Oe)) : (t.setTimeoutFn = Oe.setTimeout.bind(Oe), t.clearTimeoutFn = Oe.clearTimeout.bind(Oe));
}
const $l = 1.33;
function Ml(t) {
  return typeof t == "string" ? Ll(t) : Math.ceil((t.byteLength || t.size) * $l);
}
function Ll(t) {
  let e = 0, r = 0;
  for (let n = 0, s = t.length; n < s; n++)
    e = t.charCodeAt(n), e < 128 ? r += 1 : e < 2048 ? r += 2 : e < 55296 || e >= 57344 ? r += 3 : (n++, r += 4);
  return r;
}
function Nl(t) {
  let e = "";
  for (let r in t)
    t.hasOwnProperty(r) && (e.length && (e += "&"), e += encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));
  return e;
}
function jl(t) {
  let e = {}, r = t.split("&");
  for (let n = 0, s = r.length; n < s; n++) {
    let i = r[n].split("=");
    e[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
  }
  return e;
}
class Dl extends Error {
  constructor(e, r, n) {
    super(e), this.description = r, this.context = n, this.type = "TransportError";
  }
}
class ds extends ce {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(e) {
    super(), this.writable = !1, un(this, e), this.opts = e, this.query = e.query, this.socket = e.socket;
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
    return super.emitReserved("error", new Dl(e, r, n)), this;
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
    const r = fs(e, this.socket.binaryType);
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
    const r = Nl(e);
    return r.length ? "?" + r : "";
  }
}
const Go = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), zn = 64, Bl = {};
let ci = 0, Ir = 0, li;
function ui(t) {
  let e = "";
  do
    e = Go[t % zn] + e, t = Math.floor(t / zn);
  while (t > 0);
  return e;
}
function Xo() {
  const t = ui(+/* @__PURE__ */ new Date());
  return t !== li ? (ci = 0, li = t) : t + "." + ui(ci++);
}
for (; Ir < zn; Ir++)
  Bl[Go[Ir]] = Ir;
let Jo = !1;
try {
  Jo = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const Il = Jo;
function Zo(t) {
  const e = t.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!e || Il))
      return new XMLHttpRequest();
  } catch {
  }
  if (!e)
    try {
      return new Oe[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
function Fl() {
}
const Ul = function() {
  return new Zo({
    xdomain: !1
  }).responseType != null;
}();
class ql extends ds {
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
    this.supportsBinary = Ul && !r, this.opts.withCredentials && (this.cookieJar = void 0);
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
    Cl(e, this.socket.binaryType).forEach(r), this.readyState !== "closed" && (this.polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this.poll());
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
    this.writable = !1, kl(e, (r) => {
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
    return this.opts.timestampRequests !== !1 && (r[this.opts.timestampParam] = Xo()), !this.supportsBinary && !r.sid && (r.b64 = 1), this.createUri(e, r);
  }
  /**
   * Creates a request.
   *
   * @param {String} method
   * @private
   */
  request(e = {}) {
    return Object.assign(e, { xd: this.xd, cookieJar: this.cookieJar }, this.opts), new Ue(this.uri(), e);
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
class Ue extends ce {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(e, r) {
    super(), un(this, r), this.opts = r, this.method = r.method || "GET", this.uri = e, this.data = r.data !== void 0 ? r.data : null, this.create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  create() {
    var e;
    const r = Ko(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    r.xdomain = !!this.opts.xd;
    const n = this.xhr = new Zo(r);
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
    typeof document < "u" && (this.index = Ue.requestsCount++, Ue.requests[this.index] = this);
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
      if (this.xhr.onreadystatechange = Fl, e)
        try {
          this.xhr.abort();
        } catch {
        }
      typeof document < "u" && delete Ue.requests[this.index], this.xhr = null;
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
Ue.requestsCount = 0;
Ue.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", hi);
  else if (typeof addEventListener == "function") {
    const t = "onpagehide" in Oe ? "pagehide" : "unload";
    addEventListener(t, hi, !1);
  }
}
function hi() {
  for (let t in Ue.requests)
    Ue.requests.hasOwnProperty(t) && Ue.requests[t].abort();
}
const ps = typeof Promise == "function" && typeof Promise.resolve == "function" ? (e) => Promise.resolve().then(e) : (e, r) => r(e, 0), Fr = Oe.WebSocket || Oe.MozWebSocket, fi = !0, Hl = "arraybuffer", di = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class Vl extends ds {
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
    const e = this.uri(), r = this.opts.protocols, n = di ? {} : Ko(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
    try {
      this.ws = fi && !di ? r ? new Fr(e, r) : new Fr(e) : new Fr(e, r, n);
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
      hs(n, this.supportsBinary, (i) => {
        const o = {};
        try {
          fi && this.ws.send(i);
        } catch {
        }
        s && ps(() => {
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
    return this.opts.timestampRequests && (r[this.opts.timestampParam] = Xo()), this.supportsBinary || (r.b64 = 1), this.createUri(e, r);
  }
  /**
   * Feature detection for WebSocket.
   *
   * @return {Boolean} whether this transport is available.
   * @private
   */
  check() {
    return !!Fr;
  }
}
class Ql extends ds {
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
        const r = Al(Number.MAX_SAFE_INTEGER, this.socket.binaryType), n = e.readable.pipeThrough(r).getReader(), s = Ol();
        s.readable.pipeTo(e.writable), this.writer = s.writable.getWriter();
        const i = () => {
          n.read().then(({ done: a, value: l }) => {
            a || (this.onPacket(l), i());
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
        s && ps(() => {
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
const zl = {
  websocket: Vl,
  webtransport: Ql,
  polling: ql
}, Wl = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, Yl = [
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
function Wn(t) {
  if (t.length > 2e3)
    throw "URI too long";
  const e = t, r = t.indexOf("["), n = t.indexOf("]");
  r != -1 && n != -1 && (t = t.substring(0, r) + t.substring(r, n).replace(/:/g, ";") + t.substring(n, t.length));
  let s = Wl.exec(t || ""), i = {}, o = 14;
  for (; o--; )
    i[Yl[o]] = s[o] || "";
  return r != -1 && n != -1 && (i.source = e, i.host = i.host.substring(1, i.host.length - 1).replace(/;/g, ":"), i.authority = i.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), i.ipv6uri = !0), i.pathNames = Kl(i, i.path), i.queryKey = Gl(i, i.query), i;
}
function Kl(t, e) {
  const r = /\/{2,9}/g, n = e.replace(r, "/").split("/");
  return (e.slice(0, 1) == "/" || e.length === 0) && n.splice(0, 1), e.slice(-1) == "/" && n.splice(n.length - 1, 1), n;
}
function Gl(t, e) {
  const r = {};
  return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(n, s, i) {
    s && (r[s] = i);
  }), r;
}
let ea = class Pt extends ce {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(e, r = {}) {
    super(), this.binaryType = Hl, this.writeBuffer = [], e && typeof e == "object" && (r = e, e = null), e ? (e = Wn(e), r.hostname = e.host, r.secure = e.protocol === "https" || e.protocol === "wss", r.port = e.port, e.query && (r.query = e.query)) : r.host && (r.hostname = Wn(r.host).host), un(this, r), this.secure = r.secure != null ? r.secure : typeof location < "u" && location.protocol === "https:", r.hostname && !r.port && (r.port = this.secure ? "443" : "80"), this.hostname = r.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = r.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = r.transports || [
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
    }, r), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = jl(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, typeof addEventListener == "function" && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
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
    r.EIO = Yo, r.transport = e, this.id && (r.sid = this.id);
    const n = Object.assign({}, this.opts, {
      query: r,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[e]);
    return new zl[e](n);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  open() {
    let e;
    if (this.opts.rememberUpgrade && Pt.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1)
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
    Pt.priorWebsocketSuccess = !1;
    const s = () => {
      n || (r.send([{ type: "ping", data: "probe" }]), r.once("packet", (p) => {
        if (!n)
          if (p.type === "pong" && p.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", r), !r)
              return;
            Pt.priorWebsocketSuccess = r.name === "websocket", this.transport.pause(() => {
              n || this.readyState !== "closed" && (h(), this.setTransport(r), r.send([{ type: "upgrade" }]), this.emitReserved("upgrade", r), r = null, this.upgrading = !1, this.flush());
            });
          } else {
            const d = new Error("probe error");
            d.transport = r.name, this.emitReserved("upgradeError", d);
          }
      }));
    };
    function i() {
      n || (n = !0, h(), r.close(), r = null);
    }
    const o = (p) => {
      const d = new Error("probe error: " + p);
      d.transport = r.name, i(), this.emitReserved("upgradeError", d);
    };
    function a() {
      o("transport closed");
    }
    function l() {
      o("socket closed");
    }
    function f(p) {
      r && p.name !== r.name && i();
    }
    const h = () => {
      r.removeListener("open", s), r.removeListener("error", o), r.removeListener("close", a), this.off("close", l), this.off("upgrading", f);
    };
    r.once("open", s), r.once("error", o), r.once("close", a), this.once("close", l), this.once("upgrading", f), this.upgrades.indexOf("webtransport") !== -1 && e !== "webtransport" ? this.setTimeoutFn(() => {
      n || r.open();
    }, 200) : r.open();
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    if (this.readyState = "open", Pt.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush(), this.readyState === "open" && this.opts.upgrade) {
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
      if (s && (r += Ml(s)), n > 0 && r > this.maxPayload)
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
    Pt.priorWebsocketSuccess = !1, this.emitReserved("error", e), this.onClose("transport error", e);
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
ea.protocol = Yo;
function Xl(t, e = "", r) {
  let n = t;
  r = r || typeof location < "u" && location, t == null && (t = r.protocol + "//" + r.host), typeof t == "string" && (t.charAt(0) === "/" && (t.charAt(1) === "/" ? t = r.protocol + t : t = r.host + t), /^(https?|wss?):\/\//.test(t) || (typeof r < "u" ? t = r.protocol + "//" + t : t = "https://" + t), n = Wn(t)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), n.path = n.path || "/";
  const i = n.host.indexOf(":") !== -1 ? "[" + n.host + "]" : n.host;
  return n.id = n.protocol + "://" + i + ":" + n.port + e, n.href = n.protocol + "://" + i + (r && r.port === n.port ? "" : ":" + n.port), n;
}
const Jl = typeof ArrayBuffer == "function", Zl = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer, ta = Object.prototype.toString, eu = typeof Blob == "function" || typeof Blob < "u" && ta.call(Blob) === "[object BlobConstructor]", tu = typeof File == "function" || typeof File < "u" && ta.call(File) === "[object FileConstructor]";
function ys(t) {
  return Jl && (t instanceof ArrayBuffer || Zl(t)) || eu && t instanceof Blob || tu && t instanceof File;
}
function Wr(t, e) {
  if (!t || typeof t != "object")
    return !1;
  if (Array.isArray(t)) {
    for (let r = 0, n = t.length; r < n; r++)
      if (Wr(t[r]))
        return !0;
    return !1;
  }
  if (ys(t))
    return !0;
  if (t.toJSON && typeof t.toJSON == "function" && arguments.length === 1)
    return Wr(t.toJSON(), !0);
  for (const r in t)
    if (Object.prototype.hasOwnProperty.call(t, r) && Wr(t[r]))
      return !0;
  return !1;
}
function ru(t) {
  const e = [], r = t.data, n = t;
  return n.data = Yn(r, e), n.attachments = e.length, { packet: n, buffers: e };
}
function Yn(t, e) {
  if (!t)
    return t;
  if (ys(t)) {
    const r = { _placeholder: !0, num: e.length };
    return e.push(t), r;
  } else if (Array.isArray(t)) {
    const r = new Array(t.length);
    for (let n = 0; n < t.length; n++)
      r[n] = Yn(t[n], e);
    return r;
  } else if (typeof t == "object" && !(t instanceof Date)) {
    const r = {};
    for (const n in t)
      Object.prototype.hasOwnProperty.call(t, n) && (r[n] = Yn(t[n], e));
    return r;
  }
  return t;
}
function nu(t, e) {
  return t.data = Kn(t.data, e), delete t.attachments, t;
}
function Kn(t, e) {
  if (!t)
    return t;
  if (t && t._placeholder === !0) {
    if (typeof t.num == "number" && t.num >= 0 && t.num < e.length)
      return e[t.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(t))
    for (let r = 0; r < t.length; r++)
      t[r] = Kn(t[r], e);
  else if (typeof t == "object")
    for (const r in t)
      Object.prototype.hasOwnProperty.call(t, r) && (t[r] = Kn(t[r], e));
  return t;
}
const su = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], iu = 5;
var z;
(function(t) {
  t[t.CONNECT = 0] = "CONNECT", t[t.DISCONNECT = 1] = "DISCONNECT", t[t.EVENT = 2] = "EVENT", t[t.ACK = 3] = "ACK", t[t.CONNECT_ERROR = 4] = "CONNECT_ERROR", t[t.BINARY_EVENT = 5] = "BINARY_EVENT", t[t.BINARY_ACK = 6] = "BINARY_ACK";
})(z || (z = {}));
class ou {
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
    return (e.type === z.EVENT || e.type === z.ACK) && Wr(e) ? this.encodeAsBinary({
      type: e.type === z.EVENT ? z.BINARY_EVENT : z.BINARY_ACK,
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
    return (e.type === z.BINARY_EVENT || e.type === z.BINARY_ACK) && (r += e.attachments + "-"), e.nsp && e.nsp !== "/" && (r += e.nsp + ","), e.id != null && (r += e.id), e.data != null && (r += JSON.stringify(e.data, this.replacer)), r;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(e) {
    const r = ru(e), n = this.encodeAsString(r.packet), s = r.buffers;
    return s.unshift(n), s;
  }
}
function pi(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
class gs extends ce {
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
      const n = r.type === z.BINARY_EVENT;
      n || r.type === z.BINARY_ACK ? (r.type = n ? z.EVENT : z.ACK, this.reconstructor = new au(r), r.attachments === 0 && super.emitReserved("decoded", r)) : super.emitReserved("decoded", r);
    } else if (ys(e) || e.base64)
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
    if (z[n.type] === void 0)
      throw new Error("unknown packet type " + n.type);
    if (n.type === z.BINARY_EVENT || n.type === z.BINARY_ACK) {
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
      if (gs.isPayloadValid(n.type, i))
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
      case z.CONNECT:
        return pi(r);
      case z.DISCONNECT:
        return r === void 0;
      case z.CONNECT_ERROR:
        return typeof r == "string" || pi(r);
      case z.EVENT:
      case z.BINARY_EVENT:
        return Array.isArray(r) && (typeof r[0] == "number" || typeof r[0] == "string" && su.indexOf(r[0]) === -1);
      case z.ACK:
      case z.BINARY_ACK:
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
class au {
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
      const r = nu(this.reconPack, this.buffers);
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
const cu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: gs,
  Encoder: ou,
  get PacketType() {
    return z;
  },
  protocol: iu
}, Symbol.toStringTag, { value: "Module" }));
function $e(t, e, r) {
  return t.on(e, r), function() {
    t.off(e, r);
  };
}
const lu = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class ra extends ce {
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
      $e(e, "open", this.onopen.bind(this)),
      $e(e, "packet", this.onpacket.bind(this)),
      $e(e, "error", this.onerror.bind(this)),
      $e(e, "close", this.onclose.bind(this))
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
    if (lu.hasOwnProperty(e))
      throw new Error('"' + e.toString() + '" is a reserved event name');
    if (r.unshift(e), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(r), this;
    const n = {
      type: z.EVENT,
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
      type: z.CONNECT,
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
        case z.CONNECT:
          e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case z.EVENT:
        case z.BINARY_EVENT:
          this.onevent(e);
          break;
        case z.ACK:
        case z.BINARY_ACK:
          this.onack(e);
          break;
        case z.DISCONNECT:
          this.ondisconnect();
          break;
        case z.CONNECT_ERROR:
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
        type: z.ACK,
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
    return this.connected && this.packet({ type: z.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
function Kt(t) {
  t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0;
}
Kt.prototype.duration = function() {
  var t = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var e = Math.random(), r = Math.floor(e * this.jitter * t);
    t = Math.floor(e * 10) & 1 ? t + r : t - r;
  }
  return Math.min(t, this.max) | 0;
};
Kt.prototype.reset = function() {
  this.attempts = 0;
};
Kt.prototype.setMin = function(t) {
  this.ms = t;
};
Kt.prototype.setMax = function(t) {
  this.max = t;
};
Kt.prototype.setJitter = function(t) {
  this.jitter = t;
};
class Gn extends ce {
  constructor(e, r) {
    var n;
    super(), this.nsps = {}, this.subs = [], e && typeof e == "object" && (r = e, e = void 0), r = r || {}, r.path = r.path || "/socket.io", this.opts = r, un(this, r), this.reconnection(r.reconnection !== !1), this.reconnectionAttempts(r.reconnectionAttempts || 1 / 0), this.reconnectionDelay(r.reconnectionDelay || 1e3), this.reconnectionDelayMax(r.reconnectionDelayMax || 5e3), this.randomizationFactor((n = r.randomizationFactor) !== null && n !== void 0 ? n : 0.5), this.backoff = new Kt({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(r.timeout == null ? 2e4 : r.timeout), this._readyState = "closed", this.uri = e;
    const s = r.parser || cu;
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
    this.engine = new ea(this.uri, this.opts);
    const r = this.engine, n = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const s = $e(r, "open", function() {
      n.onopen(), e && e();
    }), i = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), e ? e(a) : this.maybeReconnectOnOpen();
    }, o = $e(r, "error", i);
    if (this._timeout !== !1) {
      const a = this._timeout, l = this.setTimeoutFn(() => {
        s(), i(new Error("timeout")), r.close();
      }, a);
      this.opts.autoUnref && l.unref(), this.subs.push(() => {
        this.clearTimeoutFn(l);
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
    this.subs.push($e(e, "ping", this.onping.bind(this)), $e(e, "data", this.ondata.bind(this)), $e(e, "error", this.onerror.bind(this)), $e(e, "close", this.onclose.bind(this)), $e(this.decoder, "decoded", this.ondecoded.bind(this)));
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
    ps(() => {
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
    return n ? this._autoConnect && !n.active && n.connect() : (n = new ra(this, e, r), this.nsps[e] = n), n;
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
const rr = {};
function Yr(t, e) {
  typeof t == "object" && (e = t, t = void 0), e = e || {};
  const r = Xl(t, e.path || "/socket.io"), n = r.source, s = r.id, i = r.path, o = rr[s] && i in rr[s].nsps, a = e.forceNew || e["force new connection"] || e.multiplex === !1 || o;
  let l;
  return a ? l = new Gn(n, e) : (rr[s] || (rr[s] = new Gn(n, e)), l = rr[s]), r.query && !e.query && (e.query = r.queryKey), l.socket(r.path, e);
}
Object.assign(Yr, {
  Manager: Gn,
  Socket: ra,
  io: Yr,
  connect: Yr
});
var uu = typeof ut == "object" && ut && ut.Object === Object && ut, hu = typeof self == "object" && self && self.Object === Object && self;
uu || hu || Function("return this")();
function fu(t) {
  const e = Ae(t);
  e.current = t, Ye(
    () => () => {
      e.current();
    },
    []
  );
}
const na = Ti({}), du = ({
  children: t,
  channelId: e,
  onEndBot: r,
  isTest: n = !1,
  onClose: s,
  isShowClose: i = !0,
  isForLiveChat: o,
  userId: a,
  customStyles: l,
  isForPreview: f,
  isForManager: h,
  adminId: p
}) => {
  const [d, y] = _t(!1), [v, _] = _t(h ? void 0 : l), m = Uo(), k = Vr(() => new URLSearchParams(window.location.search), []), M = Vr(() => a || Ee(), [a]), P = Vr(() => e || k.get("channelId") || "", [e, k]), q = Ae(Yr(Rn, {
    autoConnect: !1,
    transports: ["websocket"],
    query: {
      userId: p ? `${M}_${p}` : M
    }
  })), {
    data: $,
    isLoading: Y
  } = si({
    queryKey: ["messages", P, a || Ee()],
    queryFn: async () => {
      try {
        return f ? [{
          isBot: !0,
          message: "Hello, how can I help you?",
          createdAt: (/* @__PURE__ */ new Date()).toISOString()
        }, {
          isBot: !1,
          message: "I want to know more about your product",
          userId: Ee(),
          createdAt: (/* @__PURE__ */ new Date()).toISOString()
        }] : (await (await fetch(`${URL}/api/conversation-live-chat/${a || Ee()}/${P}`)).json()).data;
      } catch {
        return [];
      }
    },
    initialData: []
  }), {
    data: ne
  } = si({
    queryKey: ["custom-style", P, a || Ee()],
    queryFn: async () => {
      try {
        return (await (await fetch(`${Rn}/api/custom-chatbox/${P}`)).json()).data;
      } catch {
        return;
      }
    },
    enabled: !n && !f && !h
  }), B = Hr(({
    message: D,
    cb: g,
    extraData: A,
    type: E
  }) => {
    const b = D.trim();
    if (b.length === 0)
      return;
    const w = Gs(P, a), C = {
      message: E === "list-button" ? A || "" : b,
      userId: p || a || Ee(),
      template: {},
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      isTest: n
    };
    q.current.emit(er.MESSAGE, {
      message: b,
      address: w,
      isTest: n,
      createdAt: C.createdAt
    }), m.setQueryData(["messages", P, a || Ee()], (S) => [...S, C]), g && g(C);
  }, [P, p, n, m, a]), G = Hr(() => {
    window.parent && window.parent.postMessage({
      type: "TOGGLE_CHAT"
    }, "*"), s == null || s();
  }, [s]), X = Hr(() => {
    f || (q.current.emit(er.MESSAGE, {
      type: "event",
      typeName: "endConversation",
      address: Gs(P, a),
      isTest: n,
      message: ""
    }), y(!1), m.setQueryData(["messages", P, a || Ee()], () => []));
  }, [P, f, n, m, a]);
  return fu(() => {
    q.current.disconnect();
  }), Ye(() => {
    if (f)
      return;
    const D = q.current;
    return D.connect(), D.on(er.MESSAGE, (g) => {
      var A;
      ((A = g.template) == null ? void 0 : A.type) === "list-button" ? y(!0) : y(!1), m.setQueryData(["messages", P, a || Ee()], (E) => [...E, g].filter((b) => b.userId !== "typing"));
    }), D.on(er.TYPING, () => {
      m.setQueryData(["messages", P, a || Ee()], (g) => [...g, {
        userId: "typing"
      }]);
    }), D.on(er.STOP_TYPING, () => {
      m.setQueryData(["messages", P, a || Ee()], (g) => g.filter((A) => A.userId !== "typing"));
    }), () => {
      D.disconnect();
    };
  }, [P, m, a, f]), Ye(() => {
    f && y(!0);
  }, [f]), Ye(() => {
    ne && !h && _(ne);
  }, [ne, h]), Ye(() => {
    l && !h && _(l);
  }, [l, h]), /* @__PURE__ */ R.jsx(na.Provider, { value: {
    socket: q.current,
    messages: $,
    channelId: P,
    onEndBot: r,
    isTest: n,
    handleSendMessage: B,
    handleClose: G,
    disableInput: d,
    isShowClose: i,
    isLoadingMessages: Y,
    isForLiveChat: o,
    userId: a,
    handleReload: X,
    customStyles: v,
    adminId: p,
    isForManager: h
  }, children: t });
}, kt = () => {
  const t = Ri(na);
  if (!t)
    throw new Error("useSocket must be used within SocketProvider");
  return t;
};
function sa(t) {
  var e, r, n = "";
  if (typeof t == "string" || typeof t == "number")
    n += t;
  else if (typeof t == "object")
    if (Array.isArray(t)) {
      var s = t.length;
      for (e = 0; e < s; e++)
        t[e] && (r = sa(t[e])) && (n && (n += " "), n += r);
    } else
      for (r in t)
        t[r] && (n && (n += " "), n += r);
  return n;
}
function pu() {
  for (var t, e, r = 0, n = "", s = arguments.length; r < s; r++)
    (t = arguments[r]) && (e = sa(t)) && (n && (n += " "), n += e);
  return n;
}
const ms = "-";
function yu(t) {
  const e = mu(t), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = t;
  function s(o) {
    const a = o.split(ms);
    return a[0] === "" && a.length !== 1 && a.shift(), ia(a, e) || gu(o);
  }
  function i(o, a) {
    const l = r[o] || [];
    return a && n[o] ? [...l, ...n[o]] : l;
  }
  return {
    getClassGroupId: s,
    getConflictingClassGroupIds: i
  };
}
function ia(t, e) {
  var o;
  if (t.length === 0)
    return e.classGroupId;
  const r = t[0], n = e.nextPart.get(r), s = n ? ia(t.slice(1), n) : void 0;
  if (s)
    return s;
  if (e.validators.length === 0)
    return;
  const i = t.join(ms);
  return (o = e.validators.find(({
    validator: a
  }) => a(i))) == null ? void 0 : o.classGroupId;
}
const yi = /^\[(.+)\]$/;
function gu(t) {
  if (yi.test(t)) {
    const e = yi.exec(t)[1], r = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}
function mu(t) {
  const {
    theme: e,
    prefix: r
  } = t, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return vu(Object.entries(t.classGroups), r).forEach(([i, o]) => {
    Xn(o, n, i, e);
  }), n;
}
function Xn(t, e, r, n) {
  t.forEach((s) => {
    if (typeof s == "string") {
      const i = s === "" ? e : gi(e, s);
      i.classGroupId = r;
      return;
    }
    if (typeof s == "function") {
      if (bu(s)) {
        Xn(s(n), e, r, n);
        return;
      }
      e.validators.push({
        validator: s,
        classGroupId: r
      });
      return;
    }
    Object.entries(s).forEach(([i, o]) => {
      Xn(o, gi(e, i), r, n);
    });
  });
}
function gi(t, e) {
  let r = t;
  return e.split(ms).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}
function bu(t) {
  return t.isThemeGetter;
}
function vu(t, e) {
  return e ? t.map(([r, n]) => {
    const s = n.map((i) => typeof i == "string" ? e + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([o, a]) => [e + o, a])) : i);
    return [r, s];
  }) : t;
}
function wu(t) {
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
const oa = "!";
function xu(t) {
  const e = t.separator, r = e.length === 1, n = e[0], s = e.length;
  return function(o) {
    const a = [];
    let l = 0, f = 0, h;
    for (let _ = 0; _ < o.length; _++) {
      let m = o[_];
      if (l === 0) {
        if (m === n && (r || o.slice(_, _ + s) === e)) {
          a.push(o.slice(f, _)), f = _ + s;
          continue;
        }
        if (m === "/") {
          h = _;
          continue;
        }
      }
      m === "[" ? l++ : m === "]" && l--;
    }
    const p = a.length === 0 ? o : o.substring(f), d = p.startsWith(oa), y = d ? p.substring(1) : p, v = h && h > f ? h - f : void 0;
    return {
      modifiers: a,
      hasImportantModifier: d,
      baseClassName: y,
      maybePostfixModifierPosition: v
    };
  };
}
function _u(t) {
  if (t.length <= 1)
    return t;
  const e = [];
  let r = [];
  return t.forEach((n) => {
    n[0] === "[" ? (e.push(...r.sort(), n), r = []) : r.push(n);
  }), e.push(...r.sort()), e;
}
function Eu(t) {
  return {
    cache: wu(t.cacheSize),
    splitModifiers: xu(t),
    ...yu(t)
  };
}
const Su = /\s+/;
function ku(t, e) {
  const {
    splitModifiers: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: s
  } = e, i = /* @__PURE__ */ new Set();
  return t.trim().split(Su).map((o) => {
    const {
      modifiers: a,
      hasImportantModifier: l,
      baseClassName: f,
      maybePostfixModifierPosition: h
    } = r(o);
    let p = n(h ? f.substring(0, h) : f), d = !!h;
    if (!p) {
      if (!h)
        return {
          isTailwindClass: !1,
          originalClassName: o
        };
      if (p = n(f), !p)
        return {
          isTailwindClass: !1,
          originalClassName: o
        };
      d = !1;
    }
    const y = _u(a).join(":");
    return {
      isTailwindClass: !0,
      modifierId: l ? y + oa : y,
      classGroupId: p,
      originalClassName: o,
      hasPostfixModifier: d
    };
  }).reverse().filter((o) => {
    if (!o.isTailwindClass)
      return !0;
    const {
      modifierId: a,
      classGroupId: l,
      hasPostfixModifier: f
    } = o, h = a + l;
    return i.has(h) ? !1 : (i.add(h), s(l, f).forEach((p) => i.add(a + p)), !0);
  }).reverse().map((o) => o.originalClassName).join(" ");
}
function Cu() {
  let t = 0, e, r, n = "";
  for (; t < arguments.length; )
    (e = arguments[t++]) && (r = aa(e)) && (n && (n += " "), n += r);
  return n;
}
function aa(t) {
  if (typeof t == "string")
    return t;
  let e, r = "";
  for (let n = 0; n < t.length; n++)
    t[n] && (e = aa(t[n])) && (r && (r += " "), r += e);
  return r;
}
function Ou(t, ...e) {
  let r, n, s, i = o;
  function o(l) {
    const f = e.reduce((h, p) => p(h), t());
    return r = Eu(f), n = r.cache.get, s = r.cache.set, i = a, a(l);
  }
  function a(l) {
    const f = n(l);
    if (f)
      return f;
    const h = ku(l, r);
    return s(l, h), h;
  }
  return function() {
    return i(Cu.apply(null, arguments));
  };
}
function re(t) {
  const e = (r) => r[t] || [];
  return e.isThemeGetter = !0, e;
}
const ca = /^\[(?:([a-z-]+):)?(.+)\]$/i, Au = /^\d+\/\d+$/, Tu = /* @__PURE__ */ new Set(["px", "full", "screen"]), Ru = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Pu = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, $u = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Mu = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Lu = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function Qe(t) {
  return ht(t) || Tu.has(t) || Au.test(t);
}
function Xe(t) {
  return Gt(t, "length", qu);
}
function ht(t) {
  return !!t && !Number.isNaN(Number(t));
}
function Ur(t) {
  return Gt(t, "number", ht);
}
function nr(t) {
  return !!t && Number.isInteger(Number(t));
}
function Nu(t) {
  return t.endsWith("%") && ht(t.slice(0, -1));
}
function U(t) {
  return ca.test(t);
}
function Je(t) {
  return Ru.test(t);
}
const ju = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function Du(t) {
  return Gt(t, ju, la);
}
function Bu(t) {
  return Gt(t, "position", la);
}
const Iu = /* @__PURE__ */ new Set(["image", "url"]);
function Fu(t) {
  return Gt(t, Iu, Vu);
}
function Uu(t) {
  return Gt(t, "", Hu);
}
function sr() {
  return !0;
}
function Gt(t, e, r) {
  const n = ca.exec(t);
  return n ? n[1] ? typeof e == "string" ? n[1] === e : e.has(n[1]) : r(n[2]) : !1;
}
function qu(t) {
  return Pu.test(t) && !$u.test(t);
}
function la() {
  return !1;
}
function Hu(t) {
  return Mu.test(t);
}
function Vu(t) {
  return Lu.test(t);
}
function Qu() {
  const t = re("colors"), e = re("spacing"), r = re("blur"), n = re("brightness"), s = re("borderColor"), i = re("borderRadius"), o = re("borderSpacing"), a = re("borderWidth"), l = re("contrast"), f = re("grayscale"), h = re("hueRotate"), p = re("invert"), d = re("gap"), y = re("gradientColorStops"), v = re("gradientColorStopPositions"), _ = re("inset"), m = re("margin"), k = re("opacity"), M = re("padding"), P = re("saturate"), q = re("scale"), $ = re("sepia"), Y = re("skew"), ne = re("space"), B = re("translate"), G = () => ["auto", "contain", "none"], X = () => ["auto", "hidden", "clip", "visible", "scroll"], D = () => ["auto", U, e], g = () => [U, e], A = () => ["", Qe, Xe], E = () => ["auto", ht, U], b = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], w = () => ["solid", "dashed", "dotted", "double", "none"], C = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"], S = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], N = () => ["", "0", U], j = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], V = () => [ht, Ur], J = () => [ht, U];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [sr],
      spacing: [Qe, Xe],
      blur: ["none", "", Je, U],
      brightness: V(),
      borderColor: [t],
      borderRadius: ["none", "", "full", Je, U],
      borderSpacing: g(),
      borderWidth: A(),
      contrast: V(),
      grayscale: N(),
      hueRotate: J(),
      invert: N(),
      gap: g(),
      gradientColorStops: [t],
      gradientColorStopPositions: [Nu, Xe],
      inset: D(),
      margin: D(),
      opacity: V(),
      padding: g(),
      saturate: V(),
      scale: V(),
      sepia: N(),
      skew: J(),
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
        aspect: ["auto", "square", "video", U]
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
        columns: [Je]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": j()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": j()
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
        object: [...b(), U]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: X()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": X()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": X()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: G()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": G()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": G()
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
        inset: [_]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [_]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [_]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [_]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [_]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [_]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [_]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [_]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [_]
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
        z: ["auto", nr, U]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: D()
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
        flex: ["1", "auto", "initial", "none", U]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: N()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: N()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", nr, U]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [sr]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", nr, U]
        }, U]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": E()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": E()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [sr]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [nr, U]
        }, U]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": E()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": E()
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
        "auto-cols": ["auto", "min", "max", "fr", U]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", U]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [d]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [d]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [d]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...S()]
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
        content: ["normal", ...S(), "baseline"]
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
        "place-content": [...S(), "baseline"]
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
        p: [M]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [M]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [M]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [M]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [M]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [M]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [M]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [M]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [M]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [m]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [m]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [m]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [m]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [m]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [m]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [m]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [m]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [m]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [ne]
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
        "space-y": [ne]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", U, e]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [U, e, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [U, e, "none", "full", "min", "max", "fit", "prose", {
          screen: [Je]
        }, Je]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [U, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [U, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [U, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [U, e, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Je, Xe]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ur]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [sr]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", U]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", ht, Ur]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Qe, U]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", U]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", U]
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
        "placeholder-opacity": [k]
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
        "text-opacity": [k]
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
        decoration: [...w(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Qe, Xe]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Qe, U]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", U]
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
        content: ["none", U]
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
        "bg-opacity": [k]
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
        bg: [...b(), Bu]
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
        bg: ["auto", "cover", "contain", Du]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Fu]
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
        from: [v]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [v]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [v]
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
        "border-opacity": [k]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...w(), "hidden"]
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
        "divide-opacity": [k]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: w()
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
        outline: ["", ...w()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Qe, U]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Qe, Xe]
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
        ring: A()
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
        "ring-opacity": [k]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Qe, Xe]
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
        shadow: ["", "inner", "none", Je, Uu]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [sr]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [k]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": C()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": C()
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
        contrast: [l]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Je, U]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [f]
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
        invert: [p]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [P]
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
        "backdrop-contrast": [l]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [f]
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
        "backdrop-invert": [p]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [k]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [P]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", U]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: J()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", U]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: J()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", U]
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
        scale: [q]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [q]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [q]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [nr, U]
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
        "skew-x": [Y]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [Y]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", U]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", U]
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
        "will-change": ["auto", "scroll", "contents", "transform", U]
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
        stroke: [Qe, Xe, Ur]
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
const zu = /* @__PURE__ */ Ou(Qu);
function ft(...t) {
  return zu(pu(t));
}
var ua = { exports: {} };
(function(t, e) {
  (function(r, n) {
    t.exports = n();
  })(ut, function() {
    var r = 1e3, n = 6e4, s = 36e5, i = "millisecond", o = "second", a = "minute", l = "hour", f = "day", h = "week", p = "month", d = "quarter", y = "year", v = "date", _ = "Invalid Date", m = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, k = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(E) {
      var b = ["th", "st", "nd", "rd"], w = E % 100;
      return "[" + E + (b[(w - 20) % 10] || b[w] || b[0]) + "]";
    } }, P = function(E, b, w) {
      var C = String(E);
      return !C || C.length >= b ? E : "" + Array(b + 1 - C.length).join(w) + E;
    }, q = { s: P, z: function(E) {
      var b = -E.utcOffset(), w = Math.abs(b), C = Math.floor(w / 60), S = w % 60;
      return (b <= 0 ? "+" : "-") + P(C, 2, "0") + ":" + P(S, 2, "0");
    }, m: function E(b, w) {
      if (b.date() < w.date())
        return -E(w, b);
      var C = 12 * (w.year() - b.year()) + (w.month() - b.month()), S = b.clone().add(C, p), N = w - S < 0, j = b.clone().add(C + (N ? -1 : 1), p);
      return +(-(C + (w - S) / (N ? S - j : j - S)) || 0);
    }, a: function(E) {
      return E < 0 ? Math.ceil(E) || 0 : Math.floor(E);
    }, p: function(E) {
      return { M: p, y, w: h, d: f, D: v, h: l, m: a, s: o, ms: i, Q: d }[E] || String(E || "").toLowerCase().replace(/s$/, "");
    }, u: function(E) {
      return E === void 0;
    } }, $ = "en", Y = {};
    Y[$] = M;
    var ne = "$isDayjsObject", B = function(E) {
      return E instanceof g || !(!E || !E[ne]);
    }, G = function E(b, w, C) {
      var S;
      if (!b)
        return $;
      if (typeof b == "string") {
        var N = b.toLowerCase();
        Y[N] && (S = N), w && (Y[N] = w, S = N);
        var j = b.split("-");
        if (!S && j.length > 1)
          return E(j[0]);
      } else {
        var V = b.name;
        Y[V] = b, S = V;
      }
      return !C && S && ($ = S), S || !C && $;
    }, X = function(E, b) {
      if (B(E))
        return E.clone();
      var w = typeof b == "object" ? b : {};
      return w.date = E, w.args = arguments, new g(w);
    }, D = q;
    D.l = G, D.i = B, D.w = function(E, b) {
      return X(E, { locale: b.$L, utc: b.$u, x: b.$x, $offset: b.$offset });
    };
    var g = function() {
      function E(w) {
        this.$L = G(w.locale, null, !0), this.parse(w), this.$x = this.$x || w.x || {}, this[ne] = !0;
      }
      var b = E.prototype;
      return b.parse = function(w) {
        this.$d = function(C) {
          var S = C.date, N = C.utc;
          if (S === null)
            return /* @__PURE__ */ new Date(NaN);
          if (D.u(S))
            return /* @__PURE__ */ new Date();
          if (S instanceof Date)
            return new Date(S);
          if (typeof S == "string" && !/Z$/i.test(S)) {
            var j = S.match(m);
            if (j) {
              var V = j[2] - 1 || 0, J = (j[7] || "0").substring(0, 3);
              return N ? new Date(Date.UTC(j[1], V, j[3] || 1, j[4] || 0, j[5] || 0, j[6] || 0, J)) : new Date(j[1], V, j[3] || 1, j[4] || 0, j[5] || 0, j[6] || 0, J);
            }
          }
          return new Date(S);
        }(w), this.init();
      }, b.init = function() {
        var w = this.$d;
        this.$y = w.getFullYear(), this.$M = w.getMonth(), this.$D = w.getDate(), this.$W = w.getDay(), this.$H = w.getHours(), this.$m = w.getMinutes(), this.$s = w.getSeconds(), this.$ms = w.getMilliseconds();
      }, b.$utils = function() {
        return D;
      }, b.isValid = function() {
        return this.$d.toString() !== _;
      }, b.isSame = function(w, C) {
        var S = X(w);
        return this.startOf(C) <= S && S <= this.endOf(C);
      }, b.isAfter = function(w, C) {
        return X(w) < this.startOf(C);
      }, b.isBefore = function(w, C) {
        return this.endOf(C) < X(w);
      }, b.$g = function(w, C, S) {
        return D.u(w) ? this[C] : this.set(S, w);
      }, b.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, b.valueOf = function() {
        return this.$d.getTime();
      }, b.startOf = function(w, C) {
        var S = this, N = !!D.u(C) || C, j = D.p(w), V = function(Re, le) {
          var je = D.w(S.$u ? Date.UTC(S.$y, le, Re) : new Date(S.$y, le, Re), S);
          return N ? je : je.endOf(f);
        }, J = function(Re, le) {
          return D.w(S.toDate()[Re].apply(S.toDate("s"), (N ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(le)), S);
        }, ie = this.$W, ue = this.$M, be = this.$D, Le = "set" + (this.$u ? "UTC" : "");
        switch (j) {
          case y:
            return N ? V(1, 0) : V(31, 11);
          case p:
            return N ? V(1, ue) : V(0, ue + 1);
          case h:
            var Te = this.$locale().weekStart || 0, Ne = (ie < Te ? ie + 7 : ie) - Te;
            return V(N ? be - Ne : be + (6 - Ne), ue);
          case f:
          case v:
            return J(Le + "Hours", 0);
          case l:
            return J(Le + "Minutes", 1);
          case a:
            return J(Le + "Seconds", 2);
          case o:
            return J(Le + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, b.endOf = function(w) {
        return this.startOf(w, !1);
      }, b.$set = function(w, C) {
        var S, N = D.p(w), j = "set" + (this.$u ? "UTC" : ""), V = (S = {}, S[f] = j + "Date", S[v] = j + "Date", S[p] = j + "Month", S[y] = j + "FullYear", S[l] = j + "Hours", S[a] = j + "Minutes", S[o] = j + "Seconds", S[i] = j + "Milliseconds", S)[N], J = N === f ? this.$D + (C - this.$W) : C;
        if (N === p || N === y) {
          var ie = this.clone().set(v, 1);
          ie.$d[V](J), ie.init(), this.$d = ie.set(v, Math.min(this.$D, ie.daysInMonth())).$d;
        } else
          V && this.$d[V](J);
        return this.init(), this;
      }, b.set = function(w, C) {
        return this.clone().$set(w, C);
      }, b.get = function(w) {
        return this[D.p(w)]();
      }, b.add = function(w, C) {
        var S, N = this;
        w = Number(w);
        var j = D.p(C), V = function(ue) {
          var be = X(N);
          return D.w(be.date(be.date() + Math.round(ue * w)), N);
        };
        if (j === p)
          return this.set(p, this.$M + w);
        if (j === y)
          return this.set(y, this.$y + w);
        if (j === f)
          return V(1);
        if (j === h)
          return V(7);
        var J = (S = {}, S[a] = n, S[l] = s, S[o] = r, S)[j] || 1, ie = this.$d.getTime() + w * J;
        return D.w(ie, this);
      }, b.subtract = function(w, C) {
        return this.add(-1 * w, C);
      }, b.format = function(w) {
        var C = this, S = this.$locale();
        if (!this.isValid())
          return S.invalidDate || _;
        var N = w || "YYYY-MM-DDTHH:mm:ssZ", j = D.z(this), V = this.$H, J = this.$m, ie = this.$M, ue = S.weekdays, be = S.months, Le = S.meridiem, Te = function(le, je, Ke, Ct) {
          return le && (le[je] || le(C, N)) || Ke[je].slice(0, Ct);
        }, Ne = function(le) {
          return D.s(V % 12 || 12, le, "0");
        }, Re = Le || function(le, je, Ke) {
          var Ct = le < 12 ? "AM" : "PM";
          return Ke ? Ct.toLowerCase() : Ct;
        };
        return N.replace(k, function(le, je) {
          return je || function(Ke) {
            switch (Ke) {
              case "YY":
                return String(C.$y).slice(-2);
              case "YYYY":
                return D.s(C.$y, 4, "0");
              case "M":
                return ie + 1;
              case "MM":
                return D.s(ie + 1, 2, "0");
              case "MMM":
                return Te(S.monthsShort, ie, be, 3);
              case "MMMM":
                return Te(be, ie);
              case "D":
                return C.$D;
              case "DD":
                return D.s(C.$D, 2, "0");
              case "d":
                return String(C.$W);
              case "dd":
                return Te(S.weekdaysMin, C.$W, ue, 2);
              case "ddd":
                return Te(S.weekdaysShort, C.$W, ue, 3);
              case "dddd":
                return ue[C.$W];
              case "H":
                return String(V);
              case "HH":
                return D.s(V, 2, "0");
              case "h":
                return Ne(1);
              case "hh":
                return Ne(2);
              case "a":
                return Re(V, J, !0);
              case "A":
                return Re(V, J, !1);
              case "m":
                return String(J);
              case "mm":
                return D.s(J, 2, "0");
              case "s":
                return String(C.$s);
              case "ss":
                return D.s(C.$s, 2, "0");
              case "SSS":
                return D.s(C.$ms, 3, "0");
              case "Z":
                return j;
            }
            return null;
          }(le) || j.replace(":", "");
        });
      }, b.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, b.diff = function(w, C, S) {
        var N, j = this, V = D.p(C), J = X(w), ie = (J.utcOffset() - this.utcOffset()) * n, ue = this - J, be = function() {
          return D.m(j, J);
        };
        switch (V) {
          case y:
            N = be() / 12;
            break;
          case p:
            N = be();
            break;
          case d:
            N = be() / 3;
            break;
          case h:
            N = (ue - ie) / 6048e5;
            break;
          case f:
            N = (ue - ie) / 864e5;
            break;
          case l:
            N = ue / s;
            break;
          case a:
            N = ue / n;
            break;
          case o:
            N = ue / r;
            break;
          default:
            N = ue;
        }
        return S ? N : D.a(N);
      }, b.daysInMonth = function() {
        return this.endOf(p).$D;
      }, b.$locale = function() {
        return Y[this.$L];
      }, b.locale = function(w, C) {
        if (!w)
          return this.$L;
        var S = this.clone(), N = G(w, C, !0);
        return N && (S.$L = N), S;
      }, b.clone = function() {
        return D.w(this.$d, this);
      }, b.toDate = function() {
        return new Date(this.valueOf());
      }, b.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, b.toISOString = function() {
        return this.$d.toISOString();
      }, b.toString = function() {
        return this.$d.toUTCString();
      }, E;
    }(), A = g.prototype;
    return X.prototype = A, [["$ms", i], ["$s", o], ["$m", a], ["$H", l], ["$W", f], ["$M", p], ["$y", y], ["$D", v]].forEach(function(E) {
      A[E[1]] = function(b) {
        return this.$g(b, E[0], E[1]);
      };
    }), X.extend = function(E, b) {
      return E.$i || (E(b, g, X), E.$i = !0), X;
    }, X.locale = G, X.isDayjs = B, X.unix = function(E) {
      return X(1e3 * E);
    }, X.en = Y[$], X.Ls = Y, X.p = {}, X;
  });
})(ua);
var Wu = ua.exports;
const qr = /* @__PURE__ */ Ba(Wu);
/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Yu = {
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
const Ku = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hn = (t, e) => {
  const r = Zn(
    ({
      color: n = "currentColor",
      size: s = 24,
      strokeWidth: i = 2,
      absoluteStrokeWidth: o,
      className: a = "",
      children: l,
      ...f
    }, h) => pe(
      "svg",
      {
        ref: h,
        ...Yu,
        width: s,
        height: s,
        stroke: n,
        strokeWidth: o ? Number(i) * 24 / Number(s) : i,
        className: ["lucide", `lucide-${Ku(t)}`, a].join(" "),
        ...f
      },
      [
        ...e.map(([p, d]) => pe(p, d)),
        ...Array.isArray(l) ? l : [l]
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
const Gu = hn("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xu = hn("RefreshCcw", [
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
const Ju = hn("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }]
]);
/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zu = hn("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), eh = cn((t) => /* @__PURE__ */ R.jsx("slot", { children: /* @__PURE__ */ R.jsx("div", { className: t.v0, children: /* @__PURE__ */ R.jsxs("div", { className: t.v1, children: [
  /* @__PURE__ */ R.jsx("span", { className: t.v2, children: t.v3 }),
  /* @__PURE__ */ R.jsxs("div", { className: t.v4, style: t.v5, children: [
    t.v6,
    t.v7
  ] })
] }) }) }), {
  name: "Message_1",
  portals: ["v3", "v6", "v7"]
}), fn = ({
  message: t,
  children: e
}) => {
  const {
    customStyles: r,
    adminId: n,
    isForManager: s
  } = kt(), i = t.isBot;
  return (
    /*@million jsx-skip*/
    /* @__PURE__ */ R.jsx(eh, { v0: ft("flex min-h-9 justify-end pl-8", {
      "justify-start pr-8 pl-0": i
    }), v1: ft("flex flex-col gap-1 w-full items-end", {
      "items-start": i
    }), v2: ft("flex items-center text-xs text-muted-foreground", {
      "justify-end": !i
    }), v3: s ? t.isBot ? "From bot" : "From user" : null, v4: ft("bg-primary rounded-md text-white flex items-center justify-end w-max p-2 max-w-72 text-wrap ", {
      "bg-muted text-neutral-900 justify-start": i
    }), v5: {
      wordBreak: "break-word",
      backgroundColor: i || r == null ? void 0 : r.color
    }, v6: t.message, v7: e })
  );
};
function en() {
  return en = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }, en.apply(this, arguments);
}
function th(t, e) {
  typeof t == "function" ? t(e) : t != null && (t.current = e);
}
function rh(...t) {
  return (e) => t.forEach(
    (r) => th(r, e)
  );
}
const ha = /* @__PURE__ */ Zn((t, e) => {
  const { children: r, ...n } = t, s = ar.toArray(r), i = s.find(sh);
  if (i) {
    const o = i.props.children, a = s.map((l) => l === i ? ar.count(o) > 1 ? ar.only(null) : /* @__PURE__ */ xt(o) ? o.props.children : null : l);
    return /* @__PURE__ */ pe(Jn, en({}, n, {
      ref: e
    }), /* @__PURE__ */ xt(o) ? /* @__PURE__ */ Pi(o, void 0, a) : null);
  }
  return /* @__PURE__ */ pe(Jn, en({}, n, {
    ref: e
  }), r);
});
ha.displayName = "Slot";
const Jn = /* @__PURE__ */ Zn((t, e) => {
  const { children: r, ...n } = t;
  return /* @__PURE__ */ xt(r) ? /* @__PURE__ */ Pi(r, {
    ...ih(n, r.props),
    ref: e ? rh(e, r.ref) : r.ref
  }) : ar.count(r) > 1 ? ar.only(null) : null;
});
Jn.displayName = "SlotClone";
const nh = ({ children: t }) => /* @__PURE__ */ pe(Et, null, t);
function sh(t) {
  return /* @__PURE__ */ xt(t) && t.type === nh;
}
function ih(t, e) {
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
function fa(t) {
  var e, r, n = "";
  if (typeof t == "string" || typeof t == "number")
    n += t;
  else if (typeof t == "object")
    if (Array.isArray(t))
      for (e = 0; e < t.length; e++)
        t[e] && (r = fa(t[e])) && (n && (n += " "), n += r);
    else
      for (e in t)
        t[e] && (n && (n += " "), n += e);
  return n;
}
function oh() {
  for (var t, e, r = 0, n = ""; r < arguments.length; )
    (t = arguments[r++]) && (e = fa(t)) && (n && (n += " "), n += e);
  return n;
}
const mi = (t) => typeof t == "boolean" ? "".concat(t) : t === 0 ? "0" : t, bi = oh, ah = (t, e) => (r) => {
  var n;
  if ((e == null ? void 0 : e.variants) == null)
    return bi(t, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: s, defaultVariants: i } = e, o = Object.keys(s).map((f) => {
    const h = r == null ? void 0 : r[f], p = i == null ? void 0 : i[f];
    if (h === null)
      return null;
    const d = mi(h) || mi(p);
    return s[f][d];
  }), a = r && Object.entries(r).reduce((f, h) => {
    let [p, d] = h;
    return d === void 0 || (f[p] = d), f;
  }, {}), l = e == null || (n = e.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((f, h) => {
    let { class: p, className: d, ...y } = h;
    return Object.entries(y).every((v) => {
      let [_, m] = v;
      return Array.isArray(m) ? m.includes({
        ...i,
        ...a
      }[_]) : {
        ...i,
        ...a
      }[_] === m;
    }) ? [
      ...f,
      p,
      d
    ] : f;
  }, []);
  return bi(t, o, l, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, ch = ah("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", {
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
}), dn = we.forwardRef(({
  className: t,
  variant: e,
  size: r,
  asChild: n = !1,
  ...s
}, i) => {
  const o = n ? ha : "button";
  return /* @__PURE__ */ R.jsx(o, { className: ft(ch({
    variant: e,
    size: r,
    className: t
  })), ref: i, ...s });
});
dn.displayName = "Button";
const lh = ({
  message: t
}) => {
  const {
    handleSendMessage: e,
    customStyles: r
  } = kt(), n = r != null && r.color ? os(r.color) : null;
  return /* @__PURE__ */ R.jsxs("div", { className: "space-y-2", "data-buttons": !0, children: [
    /* @__PURE__ */ R.jsx(fn, { message: t }),
    /* @__PURE__ */ R.jsx("div", { className: "flex gap-1 items-center w-[80%] justify-center flex-wrap mx-auto", children: t.template.data.map((s) => /* @__PURE__ */ R.jsx(dn, { variant: "message", size: "sm", onClick: () => {
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
        $o(s.url);
      }
    }, style: {
      "--primary": n ? `${n.h} ${n.s}% ${n.l}%` : void 0
    }, children: s.title })) })
  ] });
}, uh = cn((t) => /* @__PURE__ */ R.jsxs("div", { className: "w-full space-y-1 text-center", children: [
  /* @__PURE__ */ R.jsx("img", { src: t.v0, alt: t.v1, className: "rounded-md object-cover h-full w-full" }),
  /* @__PURE__ */ R.jsx("h3", { className: "font-semibold", children: t.v2 }),
  /* @__PURE__ */ R.jsx("p", { className: "text-sm", children: t.v3 }),
  t.v4
] }), {
  name: "Card_1",
  portals: ["v2", "v3", "v4"]
}), hh = ({
  card: t
}) => {
  const {
    handleSendMessage: e,
    customStyles: r
  } = kt(), n = r != null && r.color ? os(r.color) : null;
  return (
    /*@million jsx-skip*/
    /* @__PURE__ */ R.jsx(uh, { v0: t.image_url, v1: t.title, v2: t.title, v3: t.subtitle, v4: t.buttons && t.buttons.length > 0 && /* @__PURE__ */ R.jsx("div", { className: "w-full mt-2", children: t.buttons.map((s, i) => /* @__PURE__ */ R.jsx(dn, { variant: "message", className: "!rounded-md w-full", onClick: () => {
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
        $o(s.url);
      }
    }, style: {
      "--primary": n ? `${n.h} ${n.s}% ${n.l}%` : void 0
    }, children: s.title }, i)) }) })
  );
}, fh = ({
  message: t
}) => /* @__PURE__ */ R.jsx("div", { className: "flex flex-col space-y-2 gap-1", children: t.template.data.map((e, r) => /* @__PURE__ */ R.jsx(fn, { message: t, children: /* @__PURE__ */ R.jsx(hh, { card: e }) }, r)) }), dh = () => /* @__PURE__ */ R.jsx(fn, { message: {
  isBot: !0,
  message: "",
  template: {},
  userId: "typing",
  createdAt: (/* @__PURE__ */ new Date()).toISOString()
}, children: /* @__PURE__ */ R.jsxs("div", { className: "flex space-x-1 h-full flex-1 items-center", children: [
  /* @__PURE__ */ R.jsx("div", { className: "w-1 h-1 bg-neutral-800 rounded-full animate-bounce [animation-delay:-0.3s]" }),
  /* @__PURE__ */ R.jsx("div", { className: "w-1 h-1 bg-neutral-800 rounded-full animate-bounce [animation-delay:-0.15s]" }),
  /* @__PURE__ */ R.jsx("div", { className: "w-1 h-1 bg-neutral-800 rounded-full animate-bounce" })
] }) }), ph = () => {
  const t = Ae(null), {
    messages: e,
    isLoadingMessages: r
  } = kt();
  Ye(() => {
    t.current && t.current.scrollIntoView({
      behavior: "smooth"
    });
  }, [e]);
  const n = (s, i) => {
    var o, a;
    return (s == null ? void 0 : s.userId) === "typing" ? /* @__PURE__ */ R.jsx(dh, {}) : ((o = s == null ? void 0 : s.template) == null ? void 0 : o.type) === "list-button" ? /* @__PURE__ */ R.jsx(lh, { message: s }, `${s.createdAt}+${i}`) : ((a = s == null ? void 0 : s.template) == null ? void 0 : a.type) === "list-card" ? /* @__PURE__ */ R.jsx(fh, { message: s }, `${s.createdAt}+${i}`) : /* @__PURE__ */ R.jsx(fn, { message: s }, `${s.createdAt}+${i}`);
  };
  return /* @__PURE__ */ R.jsx("div", { className: "p-2 flex-1 pr-3 overflow-y-auto", children: r ? /* @__PURE__ */ R.jsx("div", { children: /* @__PURE__ */ R.jsx(Gu, { className: "animate-spin w-4 h-4" }) }) : /* @__PURE__ */ R.jsxs("div", { className: "flex flex-col gap-1", children: [
    e.length > 0 && /* @__PURE__ */ R.jsx("div", { className: "text-center text-xs text-neutral-500 py-2", children: qr(e[0].createdAt).format("DD/MM/YYYY HH:mm") }),
    e.map((s, i) => /* @__PURE__ */ R.jsxs(Et, { children: [
      i > 0 && qr(s.createdAt).diff(qr(e[i - 1].createdAt), "minutes") > 10 && /* @__PURE__ */ R.jsx("div", { className: "text-center text-xs text-neutral-500 py-2", children: qr(s.createdAt).format("DD/MM/YYYY HH:mm") }),
      n(s, i)
    ] }, i)),
    /* @__PURE__ */ R.jsx("div", { ref: t })
  ] }) });
}, yh = cn((t) => /* @__PURE__ */ R.jsx("header", { className: "flex items-center bg-primary select-none h-[3.75rem]", style: t.v0, children: /* @__PURE__ */ R.jsxs("div", { className: "flex items-center  px-2 gap-2 justify-between w-full", children: [
  /* @__PURE__ */ R.jsxs("div", { className: "flex items-center p-2 gap-2", children: [
    t.v1,
    /* @__PURE__ */ R.jsx("span", { className: "font-medium text-white", children: t.v2 })
  ] }),
  /* @__PURE__ */ R.jsxs("div", { className: "flex items-center gap-3", children: [
    t.v3,
    t.v4
  ] })
] }) }), {
  name: "Header_1",
  portals: ["v1", "v2", "v3", "v4"]
}), gh = () => {
  const {
    handleClose: t,
    isShowClose: e,
    handleReload: r,
    customStyles: n,
    isForManager: s
  } = kt();
  return (
    /*@million jsx-skip*/
    /* @__PURE__ */ R.jsx(yh, { v0: {
      backgroundColor: n == null ? void 0 : n.color
    }, v1: n != null && n.logoUrl ? /* @__PURE__ */ R.jsx("img", { src: n == null ? void 0 : n.logoUrl, alt: "logo", className: "w-10 h-10 rounded-full overflow-hidden object-cover" }) : /* @__PURE__ */ R.jsx("svg", { width: "40", height: "40", className: "text-neutral-700 fill-neutral-700 bg-neutral-700 rounded-full", children: /* @__PURE__ */ R.jsx("text", { "text-anchor": "middle", x: "50%", y: "50%", dy: "0.35em", fill: "#ffffff", "font-size": "1rem", children: "B" }) }), v2: (n == null ? void 0 : n.name) || "DialogueBot", v3: !s && /* @__PURE__ */ R.jsx("div", { className: "w-6 h-6 flex items-center justify-center cursor-pointer", onClick: r, children: /* @__PURE__ */ R.jsx(Xu, { className: "w-4 h-4 text-white" }) }), v4: e && /* @__PURE__ */ R.jsx("div", { className: "w-6 h-6 flex items-center justify-center cursor-pointer", onClick: t, children: /* @__PURE__ */ R.jsx(Zu, { className: "w-4 h-4 text-white" }) }) })
  );
}, da = we.forwardRef(({
  className: t,
  type: e,
  ...r
}, n) => /* @__PURE__ */ R.jsx("input", { type: e, className: ft("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", t), ref: n, ...r }));
da.displayName = "Input";
const mh = () => {
  const {
    handleSendMessage: t,
    disableInput: e,
    customStyles: r
  } = kt(), [n, s] = _t(""), i = (a) => {
    a.key === "Enter" && (a.preventDefault(), t({
      message: n
    }), s(""));
  }, o = r != null && r.color ? os(r.color) : null;
  return /* @__PURE__ */ R.jsxs("div", { className: "flex items-center py-2 px-3 gap-2 border-input border-t", children: [
    /* @__PURE__ */ R.jsx(da, { className: "flex-1", placeholder: "Type a message...", value: n, onChange: (a) => s(a.target.value), onKeyDown: i, disabled: e, style: {
      "--primary": o ? `${o.h} ${o.s}% ${o.l}%` : void 0
    } }),
    /* @__PURE__ */ R.jsx(dn, { size: "icon", className: "flex-shrink-0", onClick: () => {
      t({
        message: n,
        cb: () => s("")
      });
    }, disabled: e, style: {
      "--primary": o ? `${o.h} ${o.s}% ${o.l}%` : void 0
    }, children: /* @__PURE__ */ R.jsx(Ju, { className: "w-4 h-4" }) })
  ] });
}, bh = new sl(), vh = cn((t) => /* @__PURE__ */ R.jsx("div", { className: t.v0, style: t.v1, children: /* @__PURE__ */ R.jsxs("div", { className: "flex flex-col h-full overflow-hidden w-full flex-1", children: [
  t.v2,
  /* @__PURE__ */ R.jsxs("div", { className: "flex-1 flex flex-col min-h-[1px]", children: [
    t.v3,
    t.v4
  ] })
] }) }), {
  name: "ChatBox_1",
  portals: ["v2", "v3", "v4"]
}), wh = ({
  className: t
}) => {
  const {
    customStyles: e,
    isForManager: r
  } = kt();
  return (
    /*@million jsx-skip*/
    /* @__PURE__ */ R.jsx(vh, { v0: ft("select-none w-full h-screen flex flex-col shadow chatbox", t), v1: {
      width: e == null ? void 0 : e.windowSize.width,
      height: e == null ? void 0 : e.windowSize.height
    }, v2: /* @__PURE__ */ R.jsx(gh, {}), v3: /* @__PURE__ */ R.jsx(ph, {}), v4: !r && /* @__PURE__ */ R.jsx(mh, {}) })
  );
}, Oh = (t) => /* @__PURE__ */ R.jsx(cl, { client: bh, children: /* @__PURE__ */ R.jsx(du, { ...t, children: /* @__PURE__ */ R.jsx(wh, { className: t.className }) }) });
export {
  Oh as ChatBox
};
//# sourceMappingURL=index.es.js.map
