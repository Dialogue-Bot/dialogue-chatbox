var wn = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
};
var f = (t, e, r) => (wn(t, e, "read from private field"), r ? r.call(t) : e.get(t)), M = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, R = (t, e, r, n) => (wn(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r);
var Dr = (t, e, r, n) => ({
  set _(s) {
    R(t, e, s, r);
  },
  get _() {
    return f(t, e, n);
  }
}), Q = (t, e, r) => (wn(t, e, "access private method"), r);
import * as we from "react";
import Ti, { createContext as $i, isValidElement as _t, createElement as pe, Fragment as St, useEffect as Re, useRef as xe, useLayoutEffect as Pi, useState as ct, memo as Ia, useContext as Li, useCallback as qe, useMemo as Qr, forwardRef as Zn, Children as lr, cloneElement as Mi } from "react";
import { createPortal as Fa } from "react-dom";
var ft = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ua(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Cn = { exports: {} }, Zt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $s;
function qa() {
  if ($s)
    return Zt;
  $s = 1;
  var t = Ti, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, s = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(a, l, p) {
    var u, d = {}, h = null, y = null;
    p !== void 0 && (h = "" + p), l.key !== void 0 && (h = "" + l.key), l.ref !== void 0 && (y = l.ref);
    for (u in l)
      n.call(l, u) && !i.hasOwnProperty(u) && (d[u] = l[u]);
    if (a && a.defaultProps)
      for (u in l = a.defaultProps, l)
        d[u] === void 0 && (d[u] = l[u]);
    return { $$typeof: e, type: a, key: h, ref: y, props: d, _owner: s.current };
  }
  return Zt.Fragment = r, Zt.jsx = o, Zt.jsxs = o, Zt;
}
var er = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ps;
function Ha() {
  return Ps || (Ps = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Ti, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), w = Symbol.iterator, E = "@@iterator";
    function v(c) {
      if (c === null || typeof c != "object")
        return null;
      var x = w && c[w] || c[E];
      return typeof x == "function" ? x : null;
    }
    var C = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function $(c) {
      {
        for (var x = arguments.length, O = new Array(x > 1 ? x - 1 : 0), F = 1; F < x; F++)
          O[F - 1] = arguments[F];
        N("error", c, O);
      }
    }
    function N(c, x, O) {
      {
        var F = C.ReactDebugCurrentFrame, X = F.getStackAddendum();
        X !== "" && (x += "%s", O = O.concat([X]));
        var Z = O.map(function(Y) {
          return String(Y);
        });
        Z.unshift("Warning: " + x), Function.prototype.apply.call(console[c], console, Z);
      }
    }
    var V = !1, P = !1, I = !1, ee = !1, D = !1, J;
    J = Symbol.for("react.module.reference");
    function K(c) {
      return !!(typeof c == "string" || typeof c == "function" || c === n || c === i || D || c === s || c === p || c === u || ee || c === y || V || P || I || typeof c == "object" && c !== null && (c.$$typeof === h || c.$$typeof === d || c.$$typeof === o || c.$$typeof === a || c.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      c.$$typeof === J || c.getModuleId !== void 0));
    }
    function H(c, x, O) {
      var F = c.displayName;
      if (F)
        return F;
      var X = x.displayName || x.name || "";
      return X !== "" ? O + "(" + X + ")" : O;
    }
    function g(c) {
      return c.displayName || "Context";
    }
    function T(c) {
      if (c == null)
        return null;
      if (typeof c.tag == "number" && $("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof c == "function")
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
        case p:
          return "Suspense";
        case u:
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
            return H(c, c.render, "ForwardRef");
          case d:
            var F = c.displayName || null;
            return F !== null ? F : T(c.type) || "Memo";
          case h: {
            var X = c, Z = X._payload, Y = X._init;
            try {
              return T(Y(Z));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, m = 0, b, _, k, L, j, q, G;
    function ie() {
    }
    ie.__reactDisabledLog = !0;
    function ue() {
      {
        if (m === 0) {
          b = console.log, _ = console.info, k = console.warn, L = console.error, j = console.group, q = console.groupCollapsed, G = console.groupEnd;
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
        m++;
      }
    }
    function be() {
      {
        if (m--, m === 0) {
          var c = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, c, {
              value: b
            }),
            info: S({}, c, {
              value: _
            }),
            warn: S({}, c, {
              value: k
            }),
            error: S({}, c, {
              value: L
            }),
            group: S({}, c, {
              value: j
            }),
            groupCollapsed: S({}, c, {
              value: q
            }),
            groupEnd: S({}, c, {
              value: G
            })
          });
        }
        m < 0 && $("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ne = C.ReactCurrentDispatcher, Te;
    function je(c, x, O) {
      {
        if (Te === void 0)
          try {
            throw Error();
          } catch (X) {
            var F = X.stack.trim().match(/\n( *(at )?)/);
            Te = F && F[1] || "";
          }
        return `
` + Te + c;
      }
    }
    var $e = !1, le;
    {
      var De = typeof WeakMap == "function" ? WeakMap : Map;
      le = new De();
    }
    function Ge(c, x) {
      if (!c || $e)
        return "";
      {
        var O = le.get(c);
        if (O !== void 0)
          return O;
      }
      var F;
      $e = !0;
      var X = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Z;
      Z = Ne.current, Ne.current = null, ue();
      try {
        if (x) {
          var Y = function() {
            throw Error();
          };
          if (Object.defineProperty(Y.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Y, []);
            } catch (ze) {
              F = ze;
            }
            Reflect.construct(c, [], Y);
          } else {
            try {
              Y.call();
            } catch (ze) {
              F = ze;
            }
            c.call(Y.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ze) {
            F = ze;
          }
          c();
        }
      } catch (ze) {
        if (ze && F && typeof ze.stack == "string") {
          for (var z = ze.stack.split(`
`), ye = F.stack.split(`
`), oe = z.length - 1, ae = ye.length - 1; oe >= 1 && ae >= 0 && z[oe] !== ye[ae]; )
            ae--;
          for (; oe >= 1 && ae >= 0; oe--, ae--)
            if (z[oe] !== ye[ae]) {
              if (oe !== 1 || ae !== 1)
                do
                  if (oe--, ae--, ae < 0 || z[oe] !== ye[ae]) {
                    var Se = `
` + z[oe].replace(" at new ", " at ");
                    return c.displayName && Se.includes("<anonymous>") && (Se = Se.replace("<anonymous>", c.displayName)), typeof c == "function" && le.set(c, Se), Se;
                  }
                while (oe >= 1 && ae >= 0);
              break;
            }
        }
      } finally {
        $e = !1, Ne.current = Z, be(), Error.prepareStackTrace = X;
      }
      var Rt = c ? c.displayName || c.name : "", Ts = Rt ? je(Rt) : "";
      return typeof c == "function" && le.set(c, Ts), Ts;
    }
    function Ot(c, x, O) {
      return Ge(c, !1);
    }
    function ba(c) {
      var x = c.prototype;
      return !!(x && x.isReactComponent);
    }
    function Mr(c, x, O) {
      if (c == null)
        return "";
      if (typeof c == "function")
        return Ge(c, ba(c));
      if (typeof c == "string")
        return je(c);
      switch (c) {
        case p:
          return je("Suspense");
        case u:
          return je("SuspenseList");
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case l:
            return Ot(c.render);
          case d:
            return Mr(c.type, x, O);
          case h: {
            var F = c, X = F._payload, Z = F._init;
            try {
              return Mr(Z(X), x, O);
            } catch {
            }
          }
        }
      return "";
    }
    var Nr = Object.prototype.hasOwnProperty, bs = {}, vs = C.ReactDebugCurrentFrame;
    function jr(c) {
      if (c) {
        var x = c._owner, O = Mr(c.type, c._source, x ? x.type : null);
        vs.setExtraStackFrame(O);
      } else
        vs.setExtraStackFrame(null);
    }
    function va(c, x, O, F, X) {
      {
        var Z = Function.call.bind(Nr);
        for (var Y in c)
          if (Z(c, Y)) {
            var z = void 0;
            try {
              if (typeof c[Y] != "function") {
                var ye = Error((F || "React class") + ": " + O + " type `" + Y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[Y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ye.name = "Invariant Violation", ye;
              }
              z = c[Y](x, Y, F, O, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (oe) {
              z = oe;
            }
            z && !(z instanceof Error) && (jr(X), $("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", F || "React class", O, Y, typeof z), jr(null)), z instanceof Error && !(z.message in bs) && (bs[z.message] = !0, jr(X), $("Failed %s type: %s", O, z.message), jr(null));
          }
      }
    }
    var wa = Array.isArray;
    function yn(c) {
      return wa(c);
    }
    function xa(c) {
      {
        var x = typeof Symbol == "function" && Symbol.toStringTag, O = x && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return O;
      }
    }
    function Ea(c) {
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
      if (Ea(c))
        return $("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", xa(c)), ws(c);
    }
    var Jt = C.ReactCurrentOwner, _a = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Es, _s, gn;
    gn = {};
    function Sa(c) {
      if (Nr.call(c, "ref")) {
        var x = Object.getOwnPropertyDescriptor(c, "ref").get;
        if (x && x.isReactWarning)
          return !1;
      }
      return c.ref !== void 0;
    }
    function ka(c) {
      if (Nr.call(c, "key")) {
        var x = Object.getOwnPropertyDescriptor(c, "key").get;
        if (x && x.isReactWarning)
          return !1;
      }
      return c.key !== void 0;
    }
    function Ca(c, x) {
      if (typeof c.ref == "string" && Jt.current && x && Jt.current.stateNode !== x) {
        var O = T(Jt.current.type);
        gn[O] || ($('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T(Jt.current.type), c.ref), gn[O] = !0);
      }
    }
    function Oa(c, x) {
      {
        var O = function() {
          Es || (Es = !0, $("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", x));
        };
        O.isReactWarning = !0, Object.defineProperty(c, "key", {
          get: O,
          configurable: !0
        });
      }
    }
    function Aa(c, x) {
      {
        var O = function() {
          _s || (_s = !0, $("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", x));
        };
        O.isReactWarning = !0, Object.defineProperty(c, "ref", {
          get: O,
          configurable: !0
        });
      }
    }
    var Ra = function(c, x, O, F, X, Z, Y) {
      var z = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: c,
        key: x,
        ref: O,
        props: Y,
        // Record the component responsible for creating this element.
        _owner: Z
      };
      return z._store = {}, Object.defineProperty(z._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(z, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: F
      }), Object.defineProperty(z, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: X
      }), Object.freeze && (Object.freeze(z.props), Object.freeze(z)), z;
    };
    function Ta(c, x, O, F, X) {
      {
        var Z, Y = {}, z = null, ye = null;
        O !== void 0 && (xs(O), z = "" + O), ka(x) && (xs(x.key), z = "" + x.key), Sa(x) && (ye = x.ref, Ca(x, X));
        for (Z in x)
          Nr.call(x, Z) && !_a.hasOwnProperty(Z) && (Y[Z] = x[Z]);
        if (c && c.defaultProps) {
          var oe = c.defaultProps;
          for (Z in oe)
            Y[Z] === void 0 && (Y[Z] = oe[Z]);
        }
        if (z || ye) {
          var ae = typeof c == "function" ? c.displayName || c.name || "Unknown" : c;
          z && Oa(Y, ae), ye && Aa(Y, ae);
        }
        return Ra(c, z, ye, X, F, Jt.current, Y);
      }
    }
    var mn = C.ReactCurrentOwner, Ss = C.ReactDebugCurrentFrame;
    function At(c) {
      if (c) {
        var x = c._owner, O = Mr(c.type, c._source, x ? x.type : null);
        Ss.setExtraStackFrame(O);
      } else
        Ss.setExtraStackFrame(null);
    }
    var bn;
    bn = !1;
    function vn(c) {
      return typeof c == "object" && c !== null && c.$$typeof === e;
    }
    function ks() {
      {
        if (mn.current) {
          var c = T(mn.current.type);
          if (c)
            return `

Check the render method of \`` + c + "`.";
        }
        return "";
      }
    }
    function $a(c) {
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
    function Pa(c) {
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
        var O = Pa(x);
        if (Cs[O])
          return;
        Cs[O] = !0;
        var F = "";
        c && c._owner && c._owner !== mn.current && (F = " It was passed a child from " + T(c._owner.type) + "."), At(c), $('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', O, F), At(null);
      }
    }
    function As(c, x) {
      {
        if (typeof c != "object")
          return;
        if (yn(c))
          for (var O = 0; O < c.length; O++) {
            var F = c[O];
            vn(F) && Os(F, x);
          }
        else if (vn(c))
          c._store && (c._store.validated = !0);
        else if (c) {
          var X = v(c);
          if (typeof X == "function" && X !== c.entries)
            for (var Z = X.call(c), Y; !(Y = Z.next()).done; )
              vn(Y.value) && Os(Y.value, x);
        }
      }
    }
    function La(c) {
      {
        var x = c.type;
        if (x == null || typeof x == "string")
          return;
        var O;
        if (typeof x == "function")
          O = x.propTypes;
        else if (typeof x == "object" && (x.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        x.$$typeof === d))
          O = x.propTypes;
        else
          return;
        if (O) {
          var F = T(x);
          va(O, c.props, "prop", F, c);
        } else if (x.PropTypes !== void 0 && !bn) {
          bn = !0;
          var X = T(x);
          $("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", X || "Unknown");
        }
        typeof x.getDefaultProps == "function" && !x.getDefaultProps.isReactClassApproved && $("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ma(c) {
      {
        for (var x = Object.keys(c.props), O = 0; O < x.length; O++) {
          var F = x[O];
          if (F !== "children" && F !== "key") {
            At(c), $("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", F), At(null);
            break;
          }
        }
        c.ref !== null && (At(c), $("Invalid attribute `ref` supplied to `React.Fragment`."), At(null));
      }
    }
    function Rs(c, x, O, F, X, Z) {
      {
        var Y = K(c);
        if (!Y) {
          var z = "";
          (c === void 0 || typeof c == "object" && c !== null && Object.keys(c).length === 0) && (z += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ye = $a(X);
          ye ? z += ye : z += ks();
          var oe;
          c === null ? oe = "null" : yn(c) ? oe = "array" : c !== void 0 && c.$$typeof === e ? (oe = "<" + (T(c.type) || "Unknown") + " />", z = " Did you accidentally export a JSX literal instead of a component?") : oe = typeof c, $("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", oe, z);
        }
        var ae = Ta(c, x, O, X, Z);
        if (ae == null)
          return ae;
        if (Y) {
          var Se = x.children;
          if (Se !== void 0)
            if (F)
              if (yn(Se)) {
                for (var Rt = 0; Rt < Se.length; Rt++)
                  As(Se[Rt], c);
                Object.freeze && Object.freeze(Se);
              } else
                $("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              As(Se, c);
        }
        return c === n ? Ma(ae) : La(ae), ae;
      }
    }
    function Na(c, x, O) {
      return Rs(c, x, O, !0);
    }
    function ja(c, x, O) {
      return Rs(c, x, O, !1);
    }
    var Da = ja, Ba = Na;
    er.Fragment = n, er.jsx = Da, er.jsxs = Ba;
  }()), er;
}
process.env.NODE_ENV === "production" ? Cn.exports = qa() : Cn.exports = Ha();
var A = Cn.exports;
const Ni = Object, sn = Map, Tr = Set, es = Tr.prototype.has, Va = Tr.prototype.add, Xr = sn.prototype.has, Ls = sn.prototype.get, on = sn.prototype.set, Lt = 1, On = 2, ur = 4, Jr = 8, za = 16, Qa = 32, Xe = "__t", Ms = "__p", An = "__e", Wa = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Ya = "http://www.w3.org/1999/xlink", Ka = "http://www.w3.org/2000/xmlns/", Ga = 120, Xa = new Tr(["href", "list", "form", "tabIndex", "download"]), Ja = new Tr(["area", "base", "basefont", "bgsound", "br", "col", "command", "embed", "frame", "hr", "image", "img", "input", "isindex", "keygen", "link", "menuitem", "meta", "nextid", "param", "source", "track", "wbr"]);
if (typeof window > "u")
  throw new Error(
    "See http://million.dev/docs/install to install the compiler."
  );
const at = document;
at.createElement("template");
const ji = /* @__PURE__ */ at.createElement("template"), Za = ji.content, Ns = /* @__PURE__ */ at.createElementNS(
  "http://www.w3.org/2000/svg",
  "svg"
), kt = Node.prototype, an = Element.prototype, ec = CharacterData.prototype, cn = Ni.getOwnPropertyDescriptor, Wr = kt.insertBefore, Di = kt.cloneNode, tc = kt.replaceChild, rc = an.remove, nc = kt.addEventListener, sc = an.removeAttribute, js = an.setAttribute, Ds = an.setAttributeNS, ic = cn(kt, "textContent").set, Bi = cn(kt, "firstChild").get, oc = cn(kt, "nextSibling").get, ac = cn(
  ec,
  "data"
).set, cc = (t, e) => {
  const r = e ? Ns : ji;
  return r.innerHTML = t, (e ? Ns : Za).firstChild;
};
at[An] = new Tr();
const Bs = (t, e, r) => {
  let n = e.toLowerCase(), s = !1;
  n.endsWith("capture") && (n = n.slice(0, -7), s = !0);
  const i = `$$${n}`;
  es.call(at[An], n) || (nc.call(
    at,
    n,
    (a) => {
      let l = a.target;
      for (; l; ) {
        const p = l[i];
        p && (Ni.defineProperty(a, "currentTarget", {
          configurable: !0,
          get() {
            return l;
          }
        }), p(a)), l = l.parentNode;
      }
    },
    { capture: s }
  ), Va.call(at[An], n));
  const o = (a) => {
    var l;
    a ? "key" in a && a.key === ((l = t[i]) == null ? void 0 : l.key) || (t[i] = a) : t[i] = null;
  };
  return o(r), o;
}, ht = (t, e) => {
  let r = Bi.call(t);
  if (e)
    for (let n = 0; n < e && r; ++n)
      r = oc.call(r);
  return r;
}, Is = /* @__PURE__ */ new WeakSet(), Ii = (t) => {
  var r;
  if (Is.has(t))
    return;
  t.nodeType === 8 && ((r = t.parentNode) == null || r.removeChild(t));
  let e = Bi.call(t);
  for (; e; )
    Ii(e), e = e.nextSibling;
  Is.add(t);
}, Fs = (t, e, r) => {
  const n = at.createTextNode(e), s = ht(t, r);
  return Wr.call(t, n, s), n;
}, lc = (t, e) => {
  ac.call(t, e);
}, Br = (t, e, r) => {
  typeof r != "number" || Wa.test(e) ? t.style[e] = r : typeof r == "string" ? t.style.cssText = r : e.startsWith("-") ? t.style.setProperty(e, String(r)) : r == null ? t.style[e] = "" : t.style[e] = `${String(r)}px`;
}, Us = (t, e, r) => {
  e = e.replace(/xlink(?:H|:h)/, "h").replace(/sName$/, "s"), e.startsWith("xmlns") ? Ds.call(t, Ka, e, String(r)) : e.startsWith("xlink") && Ds.call(t, Ya, "href", String(r));
}, qs = (t, e, r) => {
  const n = r == null;
  if (r = n ? "" : r, e in t && t[e] !== void 0 && t[e] !== null && !(t instanceof SVGElement) && es.call(Xa, e))
    try {
      t[e] = r;
    } catch {
    }
  else
    !n && r !== "" && (r !== !1 || e.includes("-")) ? js.call(t, e, String(r)) : sc.call(t, e);
  const s = t instanceof HTMLInputElement, i = t instanceof HTMLSelectElement, o = t instanceof HTMLTextAreaElement;
  e === "value" && (s || i || o) && (js.call(t, e, String(r)), t.value = r);
};
var uc = Object.defineProperty, hc = (t, e, r) => e in t ? uc(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Qe = (t, e, r) => (hc(t, typeof e != "symbol" ? e + "" : e, r), r);
class hr {
  constructor() {
    Qe(this, "r"), Qe(this, "e"), Qe(this, "l"), Qe(this, "g"), Qe(this, "_u"), Qe(this, "_t"), Qe(this, "d"), Qe(this, "k"), Qe(this, "c");
  }
}
const Fi = (t, e = [], r = []) => {
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
          t: Lt,
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
  for (let p in t.props) {
    const u = t.props[p];
    if (!(p === "key" || p === "ref" || p === "children")) {
      if (p === "className" && (p = "class"), p === "htmlFor" && (p = "for"), p.startsWith("on")) {
        "$" in u ? i.e.push({
          /* type */
          t: ur,
          /* name */
          n: p.slice(2),
          /* value */
          v: null,
          /* hole */
          h: u.$,
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
          t: ur,
          /* name */
          n: p.slice(2),
          /* value */
          v: null,
          /* hole */
          h: null,
          /* index */
          i: null,
          /* listener */
          l: u,
          /* patch */
          p: null,
          /* block */
          b: null
        });
        continue;
      }
      if (u) {
        if (typeof u == "object" && "$" in u) {
          p === "style" ? i.e.push({
            /* type */
            t: Jr,
            /* name */
            n: p,
            /* value */
            v: null,
            /* hole */
            h: u.$,
            /* index */
            i: null,
            /* listener */
            l: null,
            /* patch */
            p: null,
            /* block */
            b: null
          }) : p.charCodeAt(0) === Ga ? i.e.push({
            /* type */
            t: za,
            /* name */
            n: p,
            /* value */
            v: null,
            /* hole */
            h: u.$,
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
            t: On,
            /* name */
            n: p,
            /* value */
            v: null,
            /* hole */
            h: u.$,
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
        if (p === "style" && typeof u == "object") {
          let d = "";
          for (const h in u) {
            if (typeof u[h] == "object") {
              i.e.push({
                /* type */
                t: Jr,
                /* name */
                n: h,
                /* value */
                v: null,
                /* hole */
                h: u[h].$,
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
            for (let w = 0, E = h.length; w < E; ++w) {
              const v = h.charCodeAt(w);
              v < 97 ? y += `-${String.fromCharCode(v + 32)}` : y += h[w];
            }
            d += `${y}:${String(u[h])};`;
          }
          n += ` style="${d}"`;
          continue;
        }
        n += ` ${p}="${String(u)}"`;
      }
    }
  }
  if (es.call(Ja, t.type))
    return i.e.length && e.push(i), `<${t.type}${n} />`;
  let o = !1;
  for (let p = 0, u = ((a = t.props.children) == null ? void 0 : a.length) || 0, d = 0; p < u; ++p) {
    const h = (l = t.props.children) == null ? void 0 : l[p];
    if (h == null || h === !1)
      continue;
    if (typeof h == "object" && "$" in h) {
      i.e.push({
        /* type */
        t: Lt,
        /* name */
        n: null,
        /* value */
        v: null,
        /* hole */
        h: h.$,
        /* index */
        i: p,
        /* listener */
        l: null,
        /* patch */
        p: null,
        /* block */
        b: null
      });
      continue;
    }
    if (h instanceof hr) {
      i.i.push({
        /* type */
        t: Qa,
        /* name */
        n: null,
        /* value */
        v: null,
        /* hole */
        h: null,
        /* index */
        i: p,
        /* listener */
        l: null,
        /* patch */
        p: null,
        /* block */
        b: h
      });
      continue;
    }
    if (typeof h == "string" || typeof h == "number" || typeof h == "bigint") {
      const w = typeof h == "number" || typeof h == "bigint" ? String(h) : h;
      if (o) {
        i.i.push({
          /* type */
          t: Lt,
          /* name */
          n: null,
          /* value */
          v: w,
          /* hole */
          h: null,
          /* index */
          i: p,
          /* listener */
          l: null,
          /* patch */
          p: null,
          /* block */
          b: null
        });
        continue;
      }
      o = !0, s += w, d++;
      continue;
    }
    o = !1;
    const y = r.slice();
    y.push(d++), s += Fi(h, e, y);
  }
  return (i.i.length || i.e.length) && e.push(i), `<${t.type}${n}>${s}</${t.type}>`;
};
var fc = Object.defineProperty, dc = (t, e, r) => e in t ? fc(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, pc = (t, e, r) => (dc(t, typeof e != "symbol" ? e + "" : e, r), r);
const Hs = (t) => new Ui(t);
class Ui extends hr {
  constructor(e) {
    super(), pc(this, "b"), this.b = e;
  }
  v() {
  }
  p(e) {
    const r = this.b, n = e.b, s = r.length, i = n.length, o = this.t();
    if (this === e || i === 0 && s === 0)
      return o;
    if (this.b = n, i === 0)
      return yc.call(this), o;
    if (s === 0)
      return qi.call(e, o), o;
    let a = 0, l = 0, p = s - 1, u = i - 1, d = r[0], h = n[0], y = r[p], w = n[u], E;
    for (; a <= p && l <= u; ) {
      if (!d) {
        d = r[++a];
        continue;
      }
      if (!y) {
        y = r[--p];
        continue;
      }
      const v = d.k, C = h.k;
      if (v === C) {
        $t.call(d, h), n[l] = d, d = r[++a], h = n[++l];
        continue;
      }
      const $ = y.k, N = w.k;
      if ($ === N) {
        $t.call(y, w), n[u] = y, y = r[--p], w = n[--u];
        continue;
      }
      if (v === N) {
        $t.call(d, w), n[u] = d;
        const P = n[u + 1];
        xn.call(d, P, (P == null ? void 0 : P.l) || null), d = r[++a], w = n[--u];
        continue;
      }
      if ($ === C) {
        $t.call(y, h), n[l] = y;
        const P = r[a];
        xn.call(y, P, (P == null ? void 0 : P.l) || null), y = r[--p], h = n[++l];
        continue;
      }
      if (!E) {
        E = new sn();
        for (let P = a; P <= p; P++)
          on.call(E, r[P].k, P);
      }
      const V = E.get(C);
      if (V === void 0)
        Mt.call(h, o, d.l || null);
      else {
        const P = r[V];
        xn.call(P, d, null), $t.call(P, h), n[l] = P, r[V] = null;
      }
      h = n[++l];
    }
    if (a <= p || l <= u)
      if (a > p) {
        const v = n[u + 1];
        for (let C = l; C <= u; ++C)
          Mt.call(n[C], o, v ? v.l : null);
      } else
        for (let v = a; v <= p; ++v)
          Zr.call(r[v]);
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
      ic.call(e, "");
    else
      for (let r = 0, n = this.b.length; r < n; ++r)
        Zr.call(this.b[r]);
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
const ts = Ui.prototype, qi = ts.m, Hi = ts.p, yc = ts.x, gc = new Proxy(
  {},
  {
    // A universal getter will return a Hole instance if props[any] is accessed
    // Allows code to identify holes in virtual nodes ("digs" them out)
    get(t, e) {
      return { $: e };
    }
  }
), Vi = (t, e, r, n) => {
  const s = t(gc), i = [], o = cc(
    Fi(e ? e(s) : s, i),
    n
  );
  return Ii(o), (a, l, p) => new zi(
    o,
    i,
    a,
    l ?? (a == null ? void 0 : a.key) ?? null,
    p ?? r ?? null,
    null
  );
}, mc = (t, e) => {
  if (("b" in t || "b" in e) && Hi.call(t, e), t.l || Mt.call(t, void 0, null, null), t.k && t.k === e.k || t.r === e.r)
    return $t.call(t, e);
  const r = Mt.call(e, t.t(), t.l, null);
  return Zr.call(t), t.k = e.k, r;
};
class zi extends hr {
  constructor(e, r, n, s, i, o) {
    super(), this.r = e, this.d = n, this.e = r, this.k = s, this.c = Array(r.length), i ? this._u = i : this._u = null, o ? this.g = o : this.g = null;
  }
  m(e, r = null, n) {
    var o, a;
    if (this.l)
      return this.l;
    const s = n ?? Di.call(this.r, !0), i = (o = this.g) == null ? void 0 : o.call(this, s);
    i && (this.c = i);
    for (let l = 0, p = this.e.length; l < p; ++l) {
      const u = this.e[l], d = (i == null ? void 0 : i[l]) ?? Vs(u.p, s, this.c, l);
      for (let y = 0, w = u.e.length; y < w; ++y) {
        const E = u.e[y], v = this.d[E.h];
        if (E.t & Lt) {
          if (v instanceof hr) {
            const C = ht(d, E.i);
            n ? v.m(d, C, C) : v.m(d, C);
            continue;
          }
          if (d[Xe] || (d[Xe] = new Array(w)), v && typeof v == "object" && "foreign" in v) {
            if (n) {
              const $ = ht(d, E.i);
              v.reset($);
            }
            const C = v.current;
            d[Xe][y] = C, n || Wr.call(d, C, ht(d, E.i));
            continue;
          }
          if (n) {
            d[Xe][y] = ht(d, E.i);
            continue;
          }
          d[Xe][y] = Fs(
            d,
            // eslint-disable-next-line eqeqeq
            v == null || v === !1 ? "" : String(v),
            E.i
          );
        } else if (E.t & ur) {
          const C = Bs(d, E.n, v);
          d[Ms + E.n] = C;
        } else if (E.t & On)
          qs(d, E.n, v);
        else if (E.t & Jr)
          if (typeof v == "string" || typeof v == "number")
            Br(d, E.n, v);
          else
            for (const C in v)
              Br(d, C, v[C]);
        else
          Us(d, E.n, v);
      }
      const h = (a = u.i) == null ? void 0 : a.length;
      if (h)
        for (let y = 0; y < h; ++y) {
          const w = u.i[y];
          if (w.t & Lt)
            w.v && !n && Fs(d, w.v, w.i);
          else if (w.t & ur)
            Bs(d, w.n, w.l);
          else {
            const E = ht(d, w.i);
            n ? w.b.m(d, E, E) : w.b.m(d, E);
          }
        }
    }
    return e && !n && Wr.call(e, s, r), this.l = s, s;
  }
  p(e) {
    var s, i;
    const r = this.l;
    if (!e.d)
      return r;
    const n = this.d;
    if (!bc.call(this, n, e.d))
      return r;
    this.d = e.d;
    for (let o = 0, a = this.e.length; o < a; ++o) {
      const l = this.e[o], p = this.c[o] ?? Vs(l.p, r, this.c, o);
      for (let u = 0, d = l.e.length; u < d; ++u) {
        const h = l.e[u], y = n[h.h], w = e.d[h.h];
        if (w !== y) {
          if (h.t & ur) {
            p[Ms + h.n](w);
            continue;
          }
          if (h.t & Lt) {
            if (y instanceof hr) {
              const E = (i = (s = e.e) == null ? void 0 : s[o]) == null ? void 0 : i.e[u], v = e.d[E.h];
              y.p(v);
              continue;
            }
            if (w && typeof w == "object" && "foreign" in w) {
              const E = p[Xe][u];
              if (w.unstable && y !== w) {
                const v = w.current;
                p[Xe][u] = v, tc.call(p, v, E);
              } else
                w.current = E;
              continue;
            }
            lc(
              p[Xe][u],
              // eslint-disable-next-line eqeqeq
              w == null || w === !1 ? "" : String(w)
            );
          } else if (h.t & On)
            qs(p, h.n, w);
          else if (h.t & Jr)
            if (typeof w == "string" || typeof w == "number")
              Br(p, h.n, w);
            else
              for (const E in w)
                w[E] !== y[E] && Br(p, E, w[E]);
          else
            Us(p, h.n, w);
        }
      }
    }
    return r;
  }
  v(e = null, r = null) {
    Wr.call(this.t(), this.l, e ? e.l : r);
  }
  x() {
    rc.call(this.l), this.l = null;
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
    e = ht(e, a);
  }
  return i && (r[n] = e), e;
}, $r = zi.prototype, Mt = $r.m, $t = $r.p, xn = $r.v, Zr = $r.x, bc = $r.u, vc = {
  noSlot: !1
}, ln = "slot", Qi = "g", wc = ({
  effect: t,
  deps: e
}) => (Re(t, e || []), null), Me = /* @__PURE__ */ new Map(), xc = $i(!1), Ec = (t, e, r) => {
  const n = { ref: e };
  let s = 0;
  for (const i in t) {
    const o = t[i];
    if (_t(o) || Array.isArray(o) && o.length && _t(o[0])) {
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
}, En = (t, e) => pe(
  ln,
  { suppressHydrationWarning: !0, id: e },
  t
), rs = (t, e, r, n, s) => {
  var d;
  const i = (d = r == null ? void 0 : r[n]) == null ? void 0 : d.current, o = _t(t) && typeof t.type == "function" && "_c" in t.type, a = o && t.type._c;
  if (typeof window > "u")
    return o ? a ? t : En(En(t), s) : En(t, s);
  if (a) {
    const h = t.type(t.props);
    if (Me.has(h.type)) {
      const y = Me.get(h.type);
      if (typeof y == "function")
        return y(h.props);
    }
  }
  const l = i ?? (s ? document.getElementById(s) : null) ?? document.createElement(ln), p = Fa(
    pe(St, { children: t }),
    l,
    s
  ), u = {
    foreign: !0,
    current: l,
    portal: p,
    reset: (h) => {
      h.childNodes.forEach((y) => h.removeChild(y));
    },
    unstable: e
  };
  return r && (r[n] = u), u;
}, Rn = (t) => {
  var s;
  if (typeof t != "object" || t === null || !("type" in t))
    return typeof t == "number" ? String(t) : t;
  let e = t.type;
  if (typeof e == "function")
    return Rn(e(t.props ?? {}));
  if (typeof e == "object" && "$" in e)
    return e;
  const r = { ...t.props };
  "css" in r && "__EMOTION_TYPE_PLEASE_DO_NOT_USE__" in r && (r.style = r.css.styles, e = r.__EMOTION_TYPE_PLEASE_DO_NOT_USE__, delete r.__EMOTION_TYPE_PLEASE_DO_NOT_USE__, delete r.css);
  const n = (s = t.props) == null ? void 0 : s.children;
  return n != null && (r.children = Tn(t.props.children).map(
    (i) => Rn(i)
  )), {
    type: e,
    // lets pretend no function go through
    props: r
  };
}, Tn = (t) => {
  if (t == null)
    return [];
  if (typeof t == "object" && "type" in t && t.type === St)
    return Tn(t.props.children);
  if (!Array.isArray(t) || typeof t == "object" && "$" in t)
    return [t];
  const e = t.flat(1 / 0), r = [];
  for (let n = 0, s = e.length; n < s; ++n)
    r.push(...Tn(e[n]));
  return r;
}, Wi = typeof window > "u" ? Re : Pi;
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
function Yi() {
  const t = xe();
  return ct(() => {
    const e = Function.prototype.bind;
    Function.prototype.bind = function(r, n) {
      return r === null && typeof (n == null ? void 0 : n.type) == "function" && (t.current = n, Function.prototype.bind = e), e.apply(this, arguments);
    };
  }), t.current;
}
function _c(t) {
  const e = Yi(), r = xe({ el: null, depth: 0 });
  return Wi(() => {
    var n;
    r.current.el = (n = ns(
      e,
      (s) => (r.current.depth++, typeof s.type == "string" && (t === void 0 || s.type === t)),
      !0
    )) == null ? void 0 : n.stateNode;
  }, [e]), r;
}
function Sc() {
  const t = Yi(), e = xe({ el: null, depth: 0 });
  return Wi(() => {
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
const Ki = (t, e = {}) => {
  const r = (e == null ? void 0 : e.experimental_noSlot) ?? vc.noSlot;
  let n = e == null ? void 0 : e.block;
  const s = e != null && e.svg ? Qi : ln;
  t && (n = Vi(
    t,
    Rn,
    e == null ? void 0 : e.shouldUpdate,
    e == null ? void 0 : e.svg
  ));
  const i = (o, a) => {
    var N, V;
    const l = Sc(), p = _c(), u = o._hmr, d = xe(null), h = xe(null), y = xe([]);
    o = Ec(o, a, y.current), (N = h.current) == null || N.call(h, o);
    const w = qe(() => {
      var I, ee, D;
      if (!d.current && !r)
        return;
      const P = n(o, o.key);
      return u && ((I = d.current) != null && I.textContent) && (d.current.textContent = ""), r && (d.current = ((ee = p.current) == null ? void 0 : ee.el) ?? ((D = l.current) == null ? void 0 : D.el), (o.scoped || p.current && l.current && p.current.depth > l.current.depth) && (d.current = l.current.el), d.current.childNodes.length && console.error(
        new Error(`\`experimental_options.noSlot\` does not support having siblings at the moment.
The block element should be the only child of the \`${Di.call(d.current).outerHTML}\` element.
To avoid this error, \`experimental_options.noSlot\` should be false`)
      )), (h.current === null || u) && (Mt.call(P, d.current, null), h.current = (J) => {
        mc(
          P,
          n(
            J,
            J.key,
            e == null ? void 0 : e.shouldUpdate
          )
        );
      }), () => {
        Zr.call(P);
      };
    }, []), E = Qr(() => r ? null : pe((e == null ? void 0 : e.as) ?? s, { ref: d }), []), v = y.current.length, C = new Array(v);
    for (let P = 0; P < v; ++P)
      C[P] = (V = y.current[P]) == null ? void 0 : V.portal;
    return pe(
      St,
      {},
      E,
      pe(wc, {
        effect: w,
        deps: u ? [u] : []
      }),
      C
    );
  };
  return Xr.call(Me, i) || on.call(Me, i, Ki), e != null && e.name && (t && (t.displayName = `Million(Render(${e.name}))`), i.displayName = `Million(Block(${e.name}))`), i;
}, kc = ({
  each: t,
  children: e,
  memo: r,
  svg: n,
  as: s,
  ...i
}) => {
  const o = xe(null), [a] = ct(() => ({
    current: Array(t.length)
  })), l = xe(null), p = xe({
    each: null,
    children: null,
    mounted: !1
  }), [, u] = ct(!1);
  if (l.current && (t !== p.current.each || !r)) {
    const y = zs(t, e, p, a, r);
    Hi.call(l.current, Hs(y));
  }
  const h = pe(
    St,
    null,
    pe(s ?? (n ? Qi : ln), { ...i, ref: o }),
    ...a.current.map((y) => y.portal)
  );
  return Re(() => {
    if (!o.current || l.current || p.current.mounted)
      return;
    const y = zs(t, e, p, a, r);
    l.current = Hs(y), Xr.call(Me, h) || on.call(Me, h, l.current), qi.call(l.current, o.current), p.current.mounted = !0, u(!0);
  }, [o.current]), h;
}, Cc = Ia;
Cc(kc);
const zs = (t, e, r, n, s) => {
  var a;
  const i = Array(t.length), o = r.current;
  for (let l = 0, p = t.length; l < p; ++l) {
    if (s && o.each && o.each[l] === t[l]) {
      i[l] = (a = o.children) == null ? void 0 : a[l];
      continue;
    }
    const u = e(t[l], l);
    if (Xr.call(Me, u.type)) {
      o.block || (o.block = Ls.call(Me, u.type)), i[l] = o.block(u.props, n, l);
      continue;
    }
    if (typeof u.type == "function" && "_c" in u.type) {
      const y = u.type(u.props);
      if (Xr.call(Me, y.type)) {
        const w = Ls.call(Me, y.type);
        if (typeof w == "function") {
          i[l] = w(y.props);
          continue;
        }
      }
    }
    const d = Vi((y) => y == null ? void 0 : y.scope), h = (y, w, E) => d(
      {
        scope: rs(
          pe(u.type, y),
          !1,
          w.current,
          E
        )
      },
      u.key ? String(u.key) : void 0
    );
    on.call(Me, u.type, h), o.block = h, i[l] = h(u.props, n, l);
  }
  return o.each = t, o.children = i, i;
};
function Oc(t, e) {
  return t === e || t !== t && e !== e;
}
function Ac(t, e) {
  for (const r in t)
    if (!Oc(t[r], e[r]))
      return !0;
  return !1;
}
function un(t, { portals: e, ...r }) {
  const n = `CompiledBlock(Inner(${r.name}))`, s = Ki((a) => t(a), {
    ...r,
    scoped: void 0,
    name: n,
    shouldUpdate: Ac
  }), i = (e == null ? void 0 : e.length) || 0, o = e && i > 0 ? (a) => {
    const l = Li(xc), [p] = ct(() => []), u = { ...a, scoped: l };
    for (let h = 0; h < i; h++) {
      const y = e[h], w = rs(
        u[y],
        !1,
        p,
        h
      );
      u[y] = w;
    }
    const d = [];
    for (let h = 0, y = p.length; h < y; h++)
      d[h] = p[h].portal;
    return pe(
      St,
      null,
      pe(s, u),
      d
    );
  } : (a) => pe(s, a);
  return r.name && (o.displayName = `Million(CompiledBlock(Outer(${r.name})))`), o;
}
typeof window < "u" && (window.__MILLION_DATA__ = {
  version: "3.0.6"
});
const tr = {
  MESSAGE: "message",
  TYPING: "typing",
  STOP_TYPING: "stop-typing",
  AGENT_MESSAGE: "agent-message"
}, Qs = "user-bot-id", or = "https://api.dialoguebot.tech";
console.log("API_URL", or);
var lt = {}, re = {}, fe = {};
Object.defineProperty(fe, "__esModule", { value: !0 });
fe.output = fe.exists = fe.hash = fe.bytes = fe.bool = fe.number = fe.isBytes = void 0;
function en(t) {
  if (!Number.isSafeInteger(t) || t < 0)
    throw new Error(`positive integer expected, not ${t}`);
}
fe.number = en;
function Gi(t) {
  if (typeof t != "boolean")
    throw new Error(`boolean expected, not ${t}`);
}
fe.bool = Gi;
function Xi(t) {
  return t instanceof Uint8Array || t != null && typeof t == "object" && t.constructor.name === "Uint8Array";
}
fe.isBytes = Xi;
function ss(t, ...e) {
  if (!Xi(t))
    throw new Error("Uint8Array expected");
  if (e.length > 0 && !e.includes(t.length))
    throw new Error(`Uint8Array expected of length ${e}, not of length=${t.length}`);
}
fe.bytes = ss;
function Ji(t) {
  if (typeof t != "function" || typeof t.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  en(t.outputLen), en(t.blockLen);
}
fe.hash = Ji;
function Zi(t, e = !0) {
  if (t.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (e && t.finished)
    throw new Error("Hash#digest() has already been called");
}
fe.exists = Zi;
function eo(t, e) {
  ss(t);
  const r = e.outputLen;
  if (t.length < r)
    throw new Error(`digestInto() expects output buffer of length at least ${r}`);
}
fe.output = eo;
const Rc = { number: en, bool: Gi, bytes: ss, hash: Ji, exists: Zi, output: eo };
fe.default = Rc;
var B = {};
Object.defineProperty(B, "__esModule", { value: !0 });
B.add5L = B.add5H = B.add4H = B.add4L = B.add3H = B.add3L = B.add = B.rotlBL = B.rotlBH = B.rotlSL = B.rotlSH = B.rotr32L = B.rotr32H = B.rotrBL = B.rotrBH = B.rotrSL = B.rotrSH = B.shrSL = B.shrSH = B.toBig = B.split = B.fromBig = void 0;
const Ir = /* @__PURE__ */ BigInt(2 ** 32 - 1), $n = /* @__PURE__ */ BigInt(32);
function is(t, e = !1) {
  return e ? { h: Number(t & Ir), l: Number(t >> $n & Ir) } : { h: Number(t >> $n & Ir) | 0, l: Number(t & Ir) | 0 };
}
B.fromBig = is;
function to(t, e = !1) {
  let r = new Uint32Array(t.length), n = new Uint32Array(t.length);
  for (let s = 0; s < t.length; s++) {
    const { h: i, l: o } = is(t[s], e);
    [r[s], n[s]] = [i, o];
  }
  return [r, n];
}
B.split = to;
const ro = (t, e) => BigInt(t >>> 0) << $n | BigInt(e >>> 0);
B.toBig = ro;
const no = (t, e, r) => t >>> r;
B.shrSH = no;
const so = (t, e, r) => t << 32 - r | e >>> r;
B.shrSL = so;
const io = (t, e, r) => t >>> r | e << 32 - r;
B.rotrSH = io;
const oo = (t, e, r) => t << 32 - r | e >>> r;
B.rotrSL = oo;
const ao = (t, e, r) => t << 64 - r | e >>> r - 32;
B.rotrBH = ao;
const co = (t, e, r) => t >>> r - 32 | e << 64 - r;
B.rotrBL = co;
const lo = (t, e) => e;
B.rotr32H = lo;
const uo = (t, e) => t;
B.rotr32L = uo;
const ho = (t, e, r) => t << r | e >>> 32 - r;
B.rotlSH = ho;
const fo = (t, e, r) => e << r | t >>> 32 - r;
B.rotlSL = fo;
const po = (t, e, r) => e << r - 32 | t >>> 64 - r;
B.rotlBH = po;
const yo = (t, e, r) => t << r - 32 | e >>> 64 - r;
B.rotlBL = yo;
function go(t, e, r, n) {
  const s = (e >>> 0) + (n >>> 0);
  return { h: t + r + (s / 2 ** 32 | 0) | 0, l: s | 0 };
}
B.add = go;
const mo = (t, e, r) => (t >>> 0) + (e >>> 0) + (r >>> 0);
B.add3L = mo;
const bo = (t, e, r, n) => e + r + n + (t / 2 ** 32 | 0) | 0;
B.add3H = bo;
const vo = (t, e, r, n) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0);
B.add4L = vo;
const wo = (t, e, r, n, s) => e + r + n + s + (t / 2 ** 32 | 0) | 0;
B.add4H = wo;
const xo = (t, e, r, n, s) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0) + (s >>> 0);
B.add5L = xo;
const Eo = (t, e, r, n, s, i) => e + r + n + s + i + (t / 2 ** 32 | 0) | 0;
B.add5H = Eo;
const Tc = {
  fromBig: is,
  split: to,
  toBig: ro,
  shrSH: no,
  shrSL: so,
  rotrSH: io,
  rotrSL: oo,
  rotrBH: ao,
  rotrBL: co,
  rotr32H: lo,
  rotr32L: uo,
  rotlSH: ho,
  rotlSL: fo,
  rotlBH: po,
  rotlBL: yo,
  add: go,
  add3L: mo,
  add3H: bo,
  add4L: vo,
  add4H: wo,
  add5H: Eo,
  add5L: xo
};
B.default = Tc;
var _o = {}, hn = {};
Object.defineProperty(hn, "__esModule", { value: !0 });
hn.crypto = void 0;
hn.crypto = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
(function(t) {
  /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
  Object.defineProperty(t, "__esModule", { value: !0 }), t.randomBytes = t.wrapXOFConstructorWithOpts = t.wrapConstructorWithOpts = t.wrapConstructor = t.checkOpts = t.Hash = t.concatBytes = t.toBytes = t.utf8ToBytes = t.asyncLoop = t.nextTick = t.hexToBytes = t.bytesToHex = t.byteSwap32 = t.byteSwapIfBE = t.byteSwap = t.isLE = t.rotl = t.rotr = t.createView = t.u32 = t.u8 = t.isBytes = void 0;
  const e = hn, r = fe;
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
  const a = (g, T) => g << 32 - T | g >>> T;
  t.rotr = a;
  const l = (g, T) => g << T | g >>> 32 - T >>> 0;
  t.rotl = l, t.isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
  const p = (g) => g << 24 & 4278190080 | g << 8 & 16711680 | g >>> 8 & 65280 | g >>> 24 & 255;
  t.byteSwap = p, t.byteSwapIfBE = t.isLE ? (g) => g : (g) => (0, t.byteSwap)(g);
  function u(g) {
    for (let T = 0; T < g.length; T++)
      g[T] = (0, t.byteSwap)(g[T]);
  }
  t.byteSwap32 = u;
  const d = /* @__PURE__ */ Array.from({ length: 256 }, (g, T) => T.toString(16).padStart(2, "0"));
  function h(g) {
    (0, r.bytes)(g);
    let T = "";
    for (let S = 0; S < g.length; S++)
      T += d[g[S]];
    return T;
  }
  t.bytesToHex = h;
  const y = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
  function w(g) {
    if (g >= y._0 && g <= y._9)
      return g - y._0;
    if (g >= y._A && g <= y._F)
      return g - (y._A - 10);
    if (g >= y._a && g <= y._f)
      return g - (y._a - 10);
  }
  function E(g) {
    if (typeof g != "string")
      throw new Error("hex string expected, got " + typeof g);
    const T = g.length, S = T / 2;
    if (T % 2)
      throw new Error("padded hex string expected, got unpadded hex of length " + T);
    const m = new Uint8Array(S);
    for (let b = 0, _ = 0; b < S; b++, _ += 2) {
      const k = w(g.charCodeAt(_)), L = w(g.charCodeAt(_ + 1));
      if (k === void 0 || L === void 0) {
        const j = g[_] + g[_ + 1];
        throw new Error('hex string expected, got non-hex character "' + j + '" at index ' + _);
      }
      m[b] = k * 16 + L;
    }
    return m;
  }
  t.hexToBytes = E;
  const v = async () => {
  };
  t.nextTick = v;
  async function C(g, T, S) {
    let m = Date.now();
    for (let b = 0; b < g; b++) {
      S(b);
      const _ = Date.now() - m;
      _ >= 0 && _ < T || (await (0, t.nextTick)(), m += _);
    }
  }
  t.asyncLoop = C;
  function $(g) {
    if (typeof g != "string")
      throw new Error(`utf8ToBytes expected string, got ${typeof g}`);
    return new Uint8Array(new TextEncoder().encode(g));
  }
  t.utf8ToBytes = $;
  function N(g) {
    return typeof g == "string" && (g = $(g)), (0, r.bytes)(g), g;
  }
  t.toBytes = N;
  function V(...g) {
    let T = 0;
    for (let m = 0; m < g.length; m++) {
      const b = g[m];
      (0, r.bytes)(b), T += b.length;
    }
    const S = new Uint8Array(T);
    for (let m = 0, b = 0; m < g.length; m++) {
      const _ = g[m];
      S.set(_, b), b += _.length;
    }
    return S;
  }
  t.concatBytes = V;
  class P {
    // Safe version that clones internal state
    clone() {
      return this._cloneInto();
    }
  }
  t.Hash = P;
  const I = {}.toString;
  function ee(g, T) {
    if (T !== void 0 && I.call(T) !== "[object Object]")
      throw new Error("Options should be object or undefined");
    return Object.assign(g, T);
  }
  t.checkOpts = ee;
  function D(g) {
    const T = (m) => g().update(N(m)).digest(), S = g();
    return T.outputLen = S.outputLen, T.blockLen = S.blockLen, T.create = () => g(), T;
  }
  t.wrapConstructor = D;
  function J(g) {
    const T = (m, b) => g(b).update(N(m)).digest(), S = g({});
    return T.outputLen = S.outputLen, T.blockLen = S.blockLen, T.create = (m) => g(m), T;
  }
  t.wrapConstructorWithOpts = J;
  function K(g) {
    const T = (m, b) => g(b).update(N(m)).digest(), S = g({});
    return T.outputLen = S.outputLen, T.blockLen = S.blockLen, T.create = (m) => g(m), T;
  }
  t.wrapXOFConstructorWithOpts = K;
  function H(g = 32) {
    if (e.crypto && typeof e.crypto.getRandomValues == "function")
      return e.crypto.getRandomValues(new Uint8Array(g));
    throw new Error("crypto.getRandomValues must be defined");
  }
  t.randomBytes = H;
})(_o);
Object.defineProperty(re, "__esModule", { value: !0 });
re.shake256 = re.shake128 = re.keccak_512 = re.keccak_384 = re.keccak_256 = re.keccak_224 = re.sha3_512 = re.sha3_384 = re.sha3_256 = re.sha3_224 = re.Keccak = re.keccakP = void 0;
const Tt = fe, dr = B, Ke = _o, So = [], ko = [], Co = [], $c = /* @__PURE__ */ BigInt(0), rr = /* @__PURE__ */ BigInt(1), Pc = /* @__PURE__ */ BigInt(2), Lc = /* @__PURE__ */ BigInt(7), Mc = /* @__PURE__ */ BigInt(256), Nc = /* @__PURE__ */ BigInt(113);
for (let t = 0, e = rr, r = 1, n = 0; t < 24; t++) {
  [r, n] = [n, (2 * r + 3 * n) % 5], So.push(2 * (5 * n + r)), ko.push((t + 1) * (t + 2) / 2 % 64);
  let s = $c;
  for (let i = 0; i < 7; i++)
    e = (e << rr ^ (e >> Lc) * Nc) % Mc, e & Pc && (s ^= rr << (rr << /* @__PURE__ */ BigInt(i)) - rr);
  Co.push(s);
}
const [jc, Dc] = /* @__PURE__ */ (0, dr.split)(Co, !0), Ws = (t, e, r) => r > 32 ? (0, dr.rotlBH)(t, e, r) : (0, dr.rotlSH)(t, e, r), Ys = (t, e, r) => r > 32 ? (0, dr.rotlBL)(t, e, r) : (0, dr.rotlSL)(t, e, r);
function Oo(t, e = 24) {
  const r = new Uint32Array(10);
  for (let n = 24 - e; n < 24; n++) {
    for (let o = 0; o < 10; o++)
      r[o] = t[o] ^ t[o + 10] ^ t[o + 20] ^ t[o + 30] ^ t[o + 40];
    for (let o = 0; o < 10; o += 2) {
      const a = (o + 8) % 10, l = (o + 2) % 10, p = r[l], u = r[l + 1], d = Ws(p, u, 1) ^ r[a], h = Ys(p, u, 1) ^ r[a + 1];
      for (let y = 0; y < 50; y += 10)
        t[o + y] ^= d, t[o + y + 1] ^= h;
    }
    let s = t[2], i = t[3];
    for (let o = 0; o < 24; o++) {
      const a = ko[o], l = Ws(s, i, a), p = Ys(s, i, a), u = So[o];
      s = t[u], i = t[u + 1], t[u] = l, t[u + 1] = p;
    }
    for (let o = 0; o < 50; o += 10) {
      for (let a = 0; a < 10; a++)
        r[a] = t[o + a];
      for (let a = 0; a < 10; a++)
        t[o + a] ^= ~r[(a + 2) % 10] & r[(a + 4) % 10];
    }
    t[0] ^= jc[n], t[1] ^= Dc[n];
  }
  r.fill(0);
}
re.keccakP = Oo;
class Pr extends Ke.Hash {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(e, r, n, s = !1, i = 24) {
    if (super(), this.blockLen = e, this.suffix = r, this.outputLen = n, this.enableXOF = s, this.rounds = i, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, (0, Tt.number)(n), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = (0, Ke.u32)(this.state);
  }
  keccak() {
    Ke.isLE || (0, Ke.byteSwap32)(this.state32), Oo(this.state32, this.rounds), Ke.isLE || (0, Ke.byteSwap32)(this.state32), this.posOut = 0, this.pos = 0;
  }
  update(e) {
    (0, Tt.exists)(this);
    const { blockLen: r, state: n } = this;
    e = (0, Ke.toBytes)(e);
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
    return e || (e = new Pr(r, n, s, o, i)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = i, e.suffix = n, e.outputLen = s, e.enableXOF = o, e.destroyed = this.destroyed, e;
  }
}
re.Keccak = Pr;
const ut = (t, e, r) => (0, Ke.wrapConstructor)(() => new Pr(e, t, r));
re.sha3_224 = ut(6, 144, 224 / 8);
re.sha3_256 = ut(6, 136, 256 / 8);
re.sha3_384 = ut(6, 104, 384 / 8);
re.sha3_512 = ut(6, 72, 512 / 8);
re.keccak_224 = ut(1, 144, 224 / 8);
re.keccak_256 = ut(1, 136, 256 / 8);
re.keccak_384 = ut(1, 104, 384 / 8);
re.keccak_512 = ut(1, 72, 512 / 8);
const Ao = (t, e, r) => (0, Ke.wrapXOFConstructorWithOpts)((n = {}) => new Pr(e, t, n.dkLen === void 0 ? r : n.dkLen, !0));
re.shake128 = Ao(31, 168, 128 / 8);
re.shake256 = Ao(31, 136, 256 / 8);
const { sha3_512: Bc } = re, Ro = 24, fr = 32, Pn = (t = 4, e = Math.random) => {
  let r = "";
  for (; r.length < t; )
    r = r + Math.floor(e() * 36).toString(36);
  return r;
};
function To(t) {
  let e = 8n, r = 0n;
  for (const n of t.values()) {
    const s = BigInt(n);
    r = (r << e) + s;
  }
  return r;
}
const $o = (t = "") => To(Bc(t)).toString(36).slice(1), Ks = Array.from(
  { length: 26 },
  (t, e) => String.fromCharCode(e + 97)
), Ic = (t) => Ks[Math.floor(t() * Ks.length)], Po = ({
  globalObj: t = typeof ft < "u" ? ft : typeof window < "u" ? window : {},
  random: e = Math.random
} = {}) => {
  const r = Object.keys(t).toString(), n = r.length ? r + Pn(fr, e) : Pn(fr, e);
  return $o(n).substring(0, fr);
}, Lo = (t) => () => t++, Fc = 476782367, Mo = ({
  // Fallback if the user does not pass in a CSPRNG. This should be OK
  // because we don't rely solely on the random number generator for entropy.
  // We also use the host fingerprint, current time, and a session counter.
  random: t = Math.random,
  counter: e = Lo(Math.floor(t() * Fc)),
  length: r = Ro,
  fingerprint: n = Po({ random: t })
} = {}) => function() {
  const i = Ic(t), o = Date.now().toString(36), a = e().toString(36), l = Pn(r, t), p = `${o + l + a + n}`;
  return `${i + $o(p).substring(1, r)}`;
}, Uc = Mo(), qc = (t, { minLength: e = 2, maxLength: r = fr } = {}) => {
  const n = t.length, s = /^[0-9a-z]+$/;
  try {
    if (typeof t == "string" && n >= e && n <= r && s.test(t))
      return !0;
  } finally {
  }
  return !1;
};
lt.getConstants = () => ({ defaultLength: Ro, bigLength: fr });
lt.init = Mo;
lt.createId = Uc;
lt.bufToBigInt = To;
lt.createCounter = Lo;
lt.createFingerprint = Po;
lt.isCuid = qc;
const { createId: Hc, init: Rh, getConstants: Th, isCuid: $h } = lt;
var Vc = Hc;
const Ee = () => {
  const t = Vc(), e = localStorage.getItem(Qs);
  return e || (localStorage.setItem(Qs, t), t);
}, Gs = (t, e) => {
  const r = e || Ee();
  return `${t}_${r}`;
}, No = (t) => {
  var e;
  (e = window.open(t, "_blank")) == null || e.focus();
}, os = (t) => {
  t = t.replace(/^#/, "");
  const e = parseInt(t, 16);
  let r = e >> 16 & 255, n = e >> 8 & 255, s = e & 255;
  r /= 255, n /= 255, s /= 255;
  const i = Math.max(r, n, s), o = Math.min(r, n, s);
  let a = 0, l;
  const p = (i + o) / 2;
  if (i === o)
    a = l = 0;
  else {
    const u = i - o;
    switch (l = p > 0.5 ? u / (2 - i - o) : u / (i + o), i) {
      case r:
        a = (n - s) / u + (n < s ? 6 : 0);
        break;
      case n:
        a = (s - r) / u + 2;
        break;
      case s:
        a = (r - n) / u + 4;
        break;
    }
    a /= 6;
  }
  return a *= 360, {
    h: Math.round(a),
    s: Math.round(l * 100),
    l: Math.round(p * 100)
  };
};
var Lr = class {
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
}, Kt = typeof window > "u" || "Deno" in globalThis;
function Oe() {
}
function zc(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Ln(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function jo(t, e) {
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
    } else if (!yr(e.queryKey, o))
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
      if (pr(e.options.mutationKey) !== pr(i))
        return !1;
    } else if (!yr(e.options.mutationKey, i))
      return !1;
  }
  return !(n && e.state.status !== n || s && !s(e));
}
function as(t, e) {
  return ((e == null ? void 0 : e.queryKeyHashFn) || pr)(t);
}
function pr(t) {
  return JSON.stringify(
    t,
    (e, r) => Nn(r) ? Object.keys(r).sort().reduce((n, s) => (n[s] = r[s], n), {}) : r
  );
}
function yr(t, e) {
  return t === e ? !0 : typeof t != typeof e ? !1 : t && e && typeof t == "object" && typeof e == "object" ? !Object.keys(e).some((r) => !yr(t[r], e[r])) : !1;
}
function Do(t, e) {
  if (t === e)
    return t;
  const r = Zs(t) && Zs(e);
  if (r || Nn(t) && Nn(e)) {
    const n = r ? t : Object.keys(t), s = n.length, i = r ? e : Object.keys(e), o = i.length, a = r ? [] : {};
    let l = 0;
    for (let p = 0; p < o; p++) {
      const u = r ? p : i[p];
      !r && t[u] === void 0 && e[u] === void 0 && n.includes(u) ? (a[u] = void 0, l++) : (a[u] = Do(t[u], e[u]), a[u] === t[u] && t[u] !== void 0 && l++);
    }
    return s === o && l === s ? t : a;
  }
  return e;
}
function Mn(t, e) {
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
function Qc(t) {
  return new Promise((e) => {
    setTimeout(e, t);
  });
}
function jn(t, e, r) {
  return typeof r.structuralSharing == "function" ? r.structuralSharing(t, e) : r.structuralSharing !== !1 ? Do(t, e) : e;
}
function Wc(t, e, r = 0) {
  const n = [...t, e];
  return r && n.length > r ? n.slice(1) : n;
}
function Yc(t, e, r = 0) {
  const n = [e, ...t];
  return r && n.length > r ? n.slice(0, -1) : n;
}
var gr = Symbol(), yt, tt, Nt, xi, Kc = (xi = class extends Lr {
  constructor() {
    super();
    M(this, yt, void 0);
    M(this, tt, void 0);
    M(this, Nt, void 0);
    R(this, Nt, (e) => {
      if (!Kt && window.addEventListener) {
        const r = () => e();
        return window.addEventListener("visibilitychange", r, !1), () => {
          window.removeEventListener("visibilitychange", r);
        };
      }
    });
  }
  onSubscribe() {
    f(this, tt) || this.setEventListener(f(this, Nt));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = f(this, tt)) == null || e.call(this), R(this, tt, void 0));
  }
  setEventListener(e) {
    var r;
    R(this, Nt, e), (r = f(this, tt)) == null || r.call(this), R(this, tt, e((n) => {
      typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
    }));
  }
  setFocused(e) {
    f(this, yt) !== e && (R(this, yt, e), this.onFocus());
  }
  onFocus() {
    const e = this.isFocused();
    this.listeners.forEach((r) => {
      r(e);
    });
  }
  isFocused() {
    var e;
    return typeof f(this, yt) == "boolean" ? f(this, yt) : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !== "hidden";
  }
}, yt = new WeakMap(), tt = new WeakMap(), Nt = new WeakMap(), xi), cs = new Kc(), jt, rt, Dt, Ei, Gc = (Ei = class extends Lr {
  constructor() {
    super();
    M(this, jt, !0);
    M(this, rt, void 0);
    M(this, Dt, void 0);
    R(this, Dt, (e) => {
      if (!Kt && window.addEventListener) {
        const r = () => e(!0), n = () => e(!1);
        return window.addEventListener("online", r, !1), window.addEventListener("offline", n, !1), () => {
          window.removeEventListener("online", r), window.removeEventListener("offline", n);
        };
      }
    });
  }
  onSubscribe() {
    f(this, rt) || this.setEventListener(f(this, Dt));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = f(this, rt)) == null || e.call(this), R(this, rt, void 0));
  }
  setEventListener(e) {
    var r;
    R(this, Dt, e), (r = f(this, rt)) == null || r.call(this), R(this, rt, e(this.setOnline.bind(this)));
  }
  setOnline(e) {
    f(this, jt) !== e && (R(this, jt, e), this.listeners.forEach((n) => {
      n(e);
    }));
  }
  isOnline() {
    return f(this, jt);
  }
}, jt = new WeakMap(), rt = new WeakMap(), Dt = new WeakMap(), Ei), tn = new Gc();
function Xc(t) {
  return Math.min(1e3 * 2 ** t, 3e4);
}
function ls(t) {
  return (t ?? "online") === "online" ? tn.isOnline() : !0;
}
var Bo = class {
  constructor(t) {
    this.revert = t == null ? void 0 : t.revert, this.silent = t == null ? void 0 : t.silent;
  }
};
function _n(t) {
  return t instanceof Bo;
}
function Io(t) {
  let e = !1, r = 0, n = !1, s, i, o;
  const a = new Promise((v, C) => {
    i = v, o = C;
  }), l = (v) => {
    var C;
    n || (y(new Bo(v)), (C = t.abort) == null || C.call(t));
  }, p = () => {
    e = !0;
  }, u = () => {
    e = !1;
  }, d = () => !cs.isFocused() || t.networkMode !== "always" && !tn.isOnline(), h = (v) => {
    var C;
    n || (n = !0, (C = t.onSuccess) == null || C.call(t, v), s == null || s(), i(v));
  }, y = (v) => {
    var C;
    n || (n = !0, (C = t.onError) == null || C.call(t, v), s == null || s(), o(v));
  }, w = () => new Promise((v) => {
    var C;
    s = ($) => {
      const N = n || !d();
      return N && v($), N;
    }, (C = t.onPause) == null || C.call(t);
  }).then(() => {
    var v;
    s = void 0, n || (v = t.onContinue) == null || v.call(t);
  }), E = () => {
    if (n)
      return;
    let v;
    try {
      v = t.fn();
    } catch (C) {
      v = Promise.reject(C);
    }
    Promise.resolve(v).then(h).catch((C) => {
      var I;
      if (n)
        return;
      const $ = t.retry ?? (Kt ? 0 : 3), N = t.retryDelay ?? Xc, V = typeof N == "function" ? N(r, C) : N, P = $ === !0 || typeof $ == "number" && r < $ || typeof $ == "function" && $(r, C);
      if (e || !P) {
        y(C);
        return;
      }
      r++, (I = t.onFail) == null || I.call(t, r, C), Qc(V).then(() => {
        if (d())
          return w();
      }).then(() => {
        e ? y(C) : E();
      });
    });
  };
  return ls(t.networkMode) ? E() : w().then(E), {
    promise: a,
    cancel: l,
    continue: () => (s == null ? void 0 : s()) ? a : Promise.resolve(),
    cancelRetry: p,
    continueRetry: u
  };
}
function Jc() {
  let t = [], e = 0, r = (h) => {
    h();
  }, n = (h) => {
    h();
  }, s = (h) => setTimeout(h, 0);
  const i = (h) => {
    s = h;
  }, o = (h) => {
    let y;
    e++;
    try {
      y = h();
    } finally {
      e--, e || p();
    }
    return y;
  }, a = (h) => {
    e ? t.push(h) : s(() => {
      r(h);
    });
  }, l = (h) => (...y) => {
    a(() => {
      h(...y);
    });
  }, p = () => {
    const h = t;
    t = [], h.length && s(() => {
      n(() => {
        h.forEach((y) => {
          r(y);
        });
      });
    });
  };
  return {
    batch: o,
    batchCalls: l,
    schedule: a,
    setNotifyFunction: (h) => {
      r = h;
    },
    setBatchNotifyFunction: (h) => {
      n = h;
    },
    setScheduler: i
  };
}
var de = Jc(), gt, _i, Fo = (_i = class {
  constructor() {
    M(this, gt, void 0);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), Ln(this.gcTime) && R(this, gt, setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(t) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      t ?? (Kt ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    f(this, gt) && (clearTimeout(f(this, gt)), R(this, gt, void 0));
  }
}, gt = new WeakMap(), _i), Bt, It, ke, ge, he, br, mt, Pe, Ye, Si, Zc = (Si = class extends Fo {
  constructor(e) {
    super();
    M(this, Pe);
    M(this, Bt, void 0);
    M(this, It, void 0);
    M(this, ke, void 0);
    M(this, ge, void 0);
    M(this, he, void 0);
    M(this, br, void 0);
    M(this, mt, void 0);
    R(this, mt, !1), R(this, br, e.defaultOptions), this.setOptions(e.options), R(this, he, []), R(this, ke, e.cache), this.queryKey = e.queryKey, this.queryHash = e.queryHash, R(this, Bt, e.state || el(this.options)), this.state = f(this, Bt), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  setOptions(e) {
    this.options = { ...f(this, br), ...e }, this.updateGcTime(this.options.gcTime);
  }
  optionalRemove() {
    !f(this, he).length && this.state.fetchStatus === "idle" && f(this, ke).remove(this);
  }
  setData(e, r) {
    const n = jn(this.state.data, e, this.options);
    return Q(this, Pe, Ye).call(this, {
      data: n,
      type: "success",
      dataUpdatedAt: r == null ? void 0 : r.updatedAt,
      manual: r == null ? void 0 : r.manual
    }), n;
  }
  setState(e, r) {
    Q(this, Pe, Ye).call(this, { type: "setState", state: e, setStateOptions: r });
  }
  cancel(e) {
    var n, s;
    const r = (n = f(this, ge)) == null ? void 0 : n.promise;
    return (s = f(this, ge)) == null || s.cancel(e), r ? r.then(Oe).catch(Oe) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(f(this, Bt));
  }
  isActive() {
    return f(this, he).some(
      (e) => e.options.enabled !== !1
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 && !this.isActive();
  }
  isStale() {
    return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? f(this, he).some(
      (e) => e.getCurrentResult().isStale
    ) : this.state.data === void 0;
  }
  isStaleByTime(e = 0) {
    return this.state.isInvalidated || this.state.data === void 0 || !jo(this.state.dataUpdatedAt, e);
  }
  onFocus() {
    var r;
    const e = f(this, he).find((n) => n.shouldFetchOnWindowFocus());
    e == null || e.refetch({ cancelRefetch: !1 }), (r = f(this, ge)) == null || r.continue();
  }
  onOnline() {
    var r;
    const e = f(this, he).find((n) => n.shouldFetchOnReconnect());
    e == null || e.refetch({ cancelRefetch: !1 }), (r = f(this, ge)) == null || r.continue();
  }
  addObserver(e) {
    f(this, he).includes(e) || (f(this, he).push(e), this.clearGcTimeout(), f(this, ke).notify({ type: "observerAdded", query: this, observer: e }));
  }
  removeObserver(e) {
    f(this, he).includes(e) && (R(this, he, f(this, he).filter((r) => r !== e)), f(this, he).length || (f(this, ge) && (f(this, mt) ? f(this, ge).cancel({ revert: !0 }) : f(this, ge).cancelRetry()), this.scheduleGc()), f(this, ke).notify({ type: "observerRemoved", query: this, observer: e }));
  }
  getObserversCount() {
    return f(this, he).length;
  }
  invalidate() {
    this.state.isInvalidated || Q(this, Pe, Ye).call(this, { type: "invalidate" });
  }
  fetch(e, r) {
    var p, u, d;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.data !== void 0 && (r != null && r.cancelRefetch))
        this.cancel({ silent: !0 });
      else if (f(this, ge))
        return f(this, ge).continueRetry(), f(this, ge).promise;
    }
    if (e && this.setOptions(e), !this.options.queryFn) {
      const h = f(this, he).find((y) => y.options.queryFn);
      h && this.setOptions(h.options);
    }
    process.env.NODE_ENV !== "production" && (Array.isArray(this.options.queryKey) || console.error(
      "As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']"
    ));
    const n = new AbortController(), s = {
      queryKey: this.queryKey,
      meta: this.meta
    }, i = (h) => {
      Object.defineProperty(h, "signal", {
        enumerable: !0,
        get: () => (R(this, mt, !0), n.signal)
      });
    };
    i(s);
    const o = () => (process.env.NODE_ENV !== "production" && this.options.queryFn === gr && console.error(
      `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${this.options.queryHash}'`
    ), !this.options.queryFn || this.options.queryFn === gr ? Promise.reject(
      new Error(`Missing queryFn: '${this.options.queryHash}'`)
    ) : (R(this, mt, !1), this.options.persister ? this.options.persister(
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
    i(a), (p = this.options.behavior) == null || p.onFetch(
      a,
      this
    ), R(this, It, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((u = a.fetchOptions) == null ? void 0 : u.meta)) && Q(this, Pe, Ye).call(this, { type: "fetch", meta: (d = a.fetchOptions) == null ? void 0 : d.meta });
    const l = (h) => {
      var y, w, E, v;
      _n(h) && h.silent || Q(this, Pe, Ye).call(this, {
        type: "error",
        error: h
      }), _n(h) || ((w = (y = f(this, ke).config).onError) == null || w.call(
        y,
        h,
        this
      ), (v = (E = f(this, ke).config).onSettled) == null || v.call(
        E,
        this.state.data,
        h,
        this
      )), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
    };
    return R(this, ge, Io({
      fn: a.fetchFn,
      abort: n.abort.bind(n),
      onSuccess: (h) => {
        var y, w, E, v;
        if (h === void 0) {
          process.env.NODE_ENV !== "production" && console.error(
            `Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`
          ), l(new Error(`${this.queryHash} data is undefined`));
          return;
        }
        this.setData(h), (w = (y = f(this, ke).config).onSuccess) == null || w.call(y, h, this), (v = (E = f(this, ke).config).onSettled) == null || v.call(
          E,
          h,
          this.state.error,
          this
        ), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
      },
      onError: l,
      onFail: (h, y) => {
        Q(this, Pe, Ye).call(this, { type: "failed", failureCount: h, error: y });
      },
      onPause: () => {
        Q(this, Pe, Ye).call(this, { type: "pause" });
      },
      onContinue: () => {
        Q(this, Pe, Ye).call(this, { type: "continue" });
      },
      retry: a.options.retry,
      retryDelay: a.options.retryDelay,
      networkMode: a.options.networkMode
    })), f(this, ge).promise;
  }
}, Bt = new WeakMap(), It = new WeakMap(), ke = new WeakMap(), ge = new WeakMap(), he = new WeakMap(), br = new WeakMap(), mt = new WeakMap(), Pe = new WeakSet(), Ye = function(e) {
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
          ...Uo(n.data, this.options),
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
        return _n(s) && s.revert && f(this, It) ? { ...f(this, It), fetchStatus: "idle" } : {
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
    f(this, he).forEach((n) => {
      n.onQueryUpdate();
    }), f(this, ke).notify({ query: this, type: "updated", action: e });
  });
}, Si);
function Uo(t, e) {
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
function el(t) {
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
var Be, ki, tl = (ki = class extends Lr {
  constructor(e = {}) {
    super();
    M(this, Be, void 0);
    this.config = e, R(this, Be, /* @__PURE__ */ new Map());
  }
  build(e, r, n) {
    const s = r.queryKey, i = r.queryHash ?? as(s, r);
    let o = this.get(i);
    return o || (o = new Zc({
      cache: this,
      queryKey: s,
      queryHash: i,
      options: e.defaultQueryOptions(r),
      state: n,
      defaultOptions: e.getQueryDefaults(s)
    }), this.add(o)), o;
  }
  add(e) {
    f(this, Be).has(e.queryHash) || (f(this, Be).set(e.queryHash, e), this.notify({
      type: "added",
      query: e
    }));
  }
  remove(e) {
    const r = f(this, Be).get(e.queryHash);
    r && (e.destroy(), r === e && f(this, Be).delete(e.queryHash), this.notify({ type: "removed", query: e }));
  }
  clear() {
    de.batch(() => {
      this.getAll().forEach((e) => {
        this.remove(e);
      });
    });
  }
  get(e) {
    return f(this, Be).get(e);
  }
  getAll() {
    return [...f(this, Be).values()];
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
}, Be = new WeakMap(), ki), Ie, vr, _e, Ft, Fe, et, Ci, rl = (Ci = class extends Fo {
  constructor(e) {
    super();
    M(this, Fe);
    M(this, Ie, void 0);
    M(this, vr, void 0);
    M(this, _e, void 0);
    M(this, Ft, void 0);
    this.mutationId = e.mutationId, R(this, vr, e.defaultOptions), R(this, _e, e.mutationCache), R(this, Ie, []), this.state = e.state || nl(), this.setOptions(e.options), this.scheduleGc();
  }
  setOptions(e) {
    this.options = { ...f(this, vr), ...e }, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(e) {
    f(this, Ie).includes(e) || (f(this, Ie).push(e), this.clearGcTimeout(), f(this, _e).notify({
      type: "observerAdded",
      mutation: this,
      observer: e
    }));
  }
  removeObserver(e) {
    R(this, Ie, f(this, Ie).filter((r) => r !== e)), this.scheduleGc(), f(this, _e).notify({
      type: "observerRemoved",
      mutation: this,
      observer: e
    });
  }
  optionalRemove() {
    f(this, Ie).length || (this.state.status === "pending" ? this.scheduleGc() : f(this, _e).remove(this));
  }
  continue() {
    var e;
    return ((e = f(this, Ft)) == null ? void 0 : e.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(e) {
    var s, i, o, a, l, p, u, d, h, y, w, E, v, C, $, N, V, P, I, ee;
    const r = () => (R(this, Ft, Io({
      fn: () => this.options.mutationFn ? this.options.mutationFn(e) : Promise.reject(new Error("No mutationFn found")),
      onFail: (D, J) => {
        Q(this, Fe, et).call(this, { type: "failed", failureCount: D, error: J });
      },
      onPause: () => {
        Q(this, Fe, et).call(this, { type: "pause" });
      },
      onContinue: () => {
        Q(this, Fe, et).call(this, { type: "continue" });
      },
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode
    })), f(this, Ft).promise), n = this.state.status === "pending";
    try {
      if (!n) {
        Q(this, Fe, et).call(this, { type: "pending", variables: e }), await ((i = (s = f(this, _e).config).onMutate) == null ? void 0 : i.call(
          s,
          e,
          this
        ));
        const J = await ((a = (o = this.options).onMutate) == null ? void 0 : a.call(o, e));
        J !== this.state.context && Q(this, Fe, et).call(this, {
          type: "pending",
          context: J,
          variables: e
        });
      }
      const D = await r();
      return await ((p = (l = f(this, _e).config).onSuccess) == null ? void 0 : p.call(
        l,
        D,
        e,
        this.state.context,
        this
      )), await ((d = (u = this.options).onSuccess) == null ? void 0 : d.call(u, D, e, this.state.context)), await ((y = (h = f(this, _e).config).onSettled) == null ? void 0 : y.call(
        h,
        D,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((E = (w = this.options).onSettled) == null ? void 0 : E.call(w, D, null, e, this.state.context)), Q(this, Fe, et).call(this, { type: "success", data: D }), D;
    } catch (D) {
      try {
        throw await ((C = (v = f(this, _e).config).onError) == null ? void 0 : C.call(
          v,
          D,
          e,
          this.state.context,
          this
        )), await ((N = ($ = this.options).onError) == null ? void 0 : N.call(
          $,
          D,
          e,
          this.state.context
        )), await ((P = (V = f(this, _e).config).onSettled) == null ? void 0 : P.call(
          V,
          void 0,
          D,
          this.state.variables,
          this.state.context,
          this
        )), await ((ee = (I = this.options).onSettled) == null ? void 0 : ee.call(
          I,
          void 0,
          D,
          e,
          this.state.context
        )), D;
      } finally {
        Q(this, Fe, et).call(this, { type: "error", error: D });
      }
    }
  }
}, Ie = new WeakMap(), vr = new WeakMap(), _e = new WeakMap(), Ft = new WeakMap(), Fe = new WeakSet(), et = function(e) {
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
    f(this, Ie).forEach((n) => {
      n.onMutationUpdate(e);
    }), f(this, _e).notify({
      mutation: this,
      type: "updated",
      action: e
    });
  });
}, Ci);
function nl() {
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
var Ce, wr, bt, Oi, sl = (Oi = class extends Lr {
  constructor(e = {}) {
    super();
    M(this, Ce, void 0);
    M(this, wr, void 0);
    M(this, bt, void 0);
    this.config = e, R(this, Ce, []), R(this, wr, 0);
  }
  build(e, r, n) {
    const s = new rl({
      mutationCache: this,
      mutationId: ++Dr(this, wr)._,
      options: e.defaultMutationOptions(r),
      state: n
    });
    return this.add(s), s;
  }
  add(e) {
    f(this, Ce).push(e), this.notify({ type: "added", mutation: e });
  }
  remove(e) {
    R(this, Ce, f(this, Ce).filter((r) => r !== e)), this.notify({ type: "removed", mutation: e });
  }
  clear() {
    de.batch(() => {
      f(this, Ce).forEach((e) => {
        this.remove(e);
      });
    });
  }
  getAll() {
    return f(this, Ce);
  }
  find(e) {
    const r = { exact: !0, ...e };
    return f(this, Ce).find(
      (n) => Js(r, n)
    );
  }
  findAll(e = {}) {
    return f(this, Ce).filter(
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
    return R(this, bt, (f(this, bt) ?? Promise.resolve()).then(() => {
      const e = f(this, Ce).filter((r) => r.state.isPaused);
      return de.batch(
        () => e.reduce(
          (r, n) => r.then(() => n.continue().catch(Oe)),
          Promise.resolve()
        )
      );
    }).then(() => {
      R(this, bt, void 0);
    })), f(this, bt);
  }
}, Ce = new WeakMap(), wr = new WeakMap(), bt = new WeakMap(), Oi);
function il(t) {
  return {
    onFetch: (e, r) => {
      const n = async () => {
        var w, E, v, C, $;
        const s = e.options, i = (v = (E = (w = e.fetchOptions) == null ? void 0 : w.meta) == null ? void 0 : E.fetchMore) == null ? void 0 : v.direction, o = ((C = e.state.data) == null ? void 0 : C.pages) || [], a = (($ = e.state.data) == null ? void 0 : $.pageParams) || [], l = { pages: [], pageParams: [] };
        let p = !1;
        const u = (N) => {
          Object.defineProperty(N, "signal", {
            enumerable: !0,
            get: () => (e.signal.aborted ? p = !0 : e.signal.addEventListener("abort", () => {
              p = !0;
            }), e.signal)
          });
        }, d = e.options.queryFn && e.options.queryFn !== gr ? e.options.queryFn : () => (process.env.NODE_ENV !== "production" && e.options.queryFn === gr && console.error(
          `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${e.options.queryHash}'`
        ), Promise.reject(
          new Error(`Missing queryFn: '${e.options.queryHash}'`)
        )), h = async (N, V, P) => {
          if (p)
            return Promise.reject();
          if (V == null && N.pages.length)
            return Promise.resolve(N);
          const I = {
            queryKey: e.queryKey,
            pageParam: V,
            direction: P ? "backward" : "forward",
            meta: e.options.meta
          };
          u(I);
          const ee = await d(
            I
          ), { maxPages: D } = e.options, J = P ? Yc : Wc;
          return {
            pages: J(N.pages, ee, D),
            pageParams: J(N.pageParams, V, D)
          };
        };
        let y;
        if (i && o.length) {
          const N = i === "backward", V = N ? ol : ti, P = {
            pages: o,
            pageParams: a
          }, I = V(s, P);
          y = await h(P, I, N);
        } else {
          y = await h(
            l,
            a[0] ?? s.initialPageParam
          );
          const N = t ?? o.length;
          for (let V = 1; V < N; V++) {
            const P = ti(s, y);
            y = await h(y, P);
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
function ol(t, { pages: e, pageParams: r }) {
  var n;
  return (n = t.getPreviousPageParam) == null ? void 0 : n.call(
    t,
    e[0],
    e,
    r[0],
    r
  );
}
var se, nt, st, Ut, qt, it, Ht, Vt, Ai, al = (Ai = class {
  constructor(t = {}) {
    M(this, se, void 0);
    M(this, nt, void 0);
    M(this, st, void 0);
    M(this, Ut, void 0);
    M(this, qt, void 0);
    M(this, it, void 0);
    M(this, Ht, void 0);
    M(this, Vt, void 0);
    R(this, se, t.queryCache || new tl()), R(this, nt, t.mutationCache || new sl()), R(this, st, t.defaultOptions || {}), R(this, Ut, /* @__PURE__ */ new Map()), R(this, qt, /* @__PURE__ */ new Map()), R(this, it, 0);
  }
  mount() {
    Dr(this, it)._++, f(this, it) === 1 && (R(this, Ht, cs.subscribe(async (t) => {
      t && (await this.resumePausedMutations(), f(this, se).onFocus());
    })), R(this, Vt, tn.subscribe(async (t) => {
      t && (await this.resumePausedMutations(), f(this, se).onOnline());
    })));
  }
  unmount() {
    var t, e;
    Dr(this, it)._--, f(this, it) === 0 && ((t = f(this, Ht)) == null || t.call(this), R(this, Ht, void 0), (e = f(this, Vt)) == null || e.call(this), R(this, Vt, void 0));
  }
  isFetching(t) {
    return f(this, se).findAll({ ...t, fetchStatus: "fetching" }).length;
  }
  isMutating(t) {
    return f(this, nt).findAll({ ...t, status: "pending" }).length;
  }
  getQueryData(t) {
    var r;
    const e = this.defaultQueryOptions({ queryKey: t });
    return (r = f(this, se).get(e.queryHash)) == null ? void 0 : r.state.data;
  }
  ensureQueryData(t) {
    const e = this.getQueryData(t.queryKey);
    if (e === void 0)
      return this.fetchQuery(t);
    {
      const r = this.defaultQueryOptions(t), n = f(this, se).build(this, r);
      return t.revalidateIfStale && n.isStaleByTime(r.staleTime) && this.prefetchQuery(r), Promise.resolve(e);
    }
  }
  getQueriesData(t) {
    return f(this, se).findAll(t).map(({ queryKey: e, state: r }) => {
      const n = r.data;
      return [e, n];
    });
  }
  setQueryData(t, e, r) {
    const n = this.defaultQueryOptions({ queryKey: t }), s = f(this, se).get(
      n.queryHash
    ), i = s == null ? void 0 : s.state.data, o = zc(e, i);
    if (o !== void 0)
      return f(this, se).build(this, n).setData(o, { ...r, manual: !0 });
  }
  setQueriesData(t, e, r) {
    return de.batch(
      () => f(this, se).findAll(t).map(({ queryKey: n }) => [
        n,
        this.setQueryData(n, e, r)
      ])
    );
  }
  getQueryState(t) {
    var r;
    const e = this.defaultQueryOptions({ queryKey: t });
    return (r = f(this, se).get(e.queryHash)) == null ? void 0 : r.state;
  }
  removeQueries(t) {
    const e = f(this, se);
    de.batch(() => {
      e.findAll(t).forEach((r) => {
        e.remove(r);
      });
    });
  }
  resetQueries(t, e) {
    const r = f(this, se), n = {
      type: "active",
      ...t
    };
    return de.batch(() => (r.findAll(t).forEach((s) => {
      s.reset();
    }), this.refetchQueries(n, e)));
  }
  cancelQueries(t = {}, e = {}) {
    const r = { revert: !0, ...e }, n = de.batch(
      () => f(this, se).findAll(t).map((s) => s.cancel(r))
    );
    return Promise.all(n).then(Oe).catch(Oe);
  }
  invalidateQueries(t = {}, e = {}) {
    return de.batch(() => {
      if (f(this, se).findAll(t).forEach((n) => {
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
      () => f(this, se).findAll(t).filter((s) => !s.isDisabled()).map((s) => {
        let i = s.fetch(void 0, r);
        return r.throwOnError || (i = i.catch(Oe)), s.state.fetchStatus === "paused" ? Promise.resolve() : i;
      })
    );
    return Promise.all(n).then(Oe);
  }
  fetchQuery(t) {
    const e = this.defaultQueryOptions(t);
    e.retry === void 0 && (e.retry = !1);
    const r = f(this, se).build(this, e);
    return r.isStaleByTime(e.staleTime) ? r.fetch(e) : Promise.resolve(r.state.data);
  }
  prefetchQuery(t) {
    return this.fetchQuery(t).then(Oe).catch(Oe);
  }
  fetchInfiniteQuery(t) {
    return t.behavior = il(t.pages), this.fetchQuery(t);
  }
  prefetchInfiniteQuery(t) {
    return this.fetchInfiniteQuery(t).then(Oe).catch(Oe);
  }
  resumePausedMutations() {
    return tn.isOnline() ? f(this, nt).resumePausedMutations() : Promise.resolve();
  }
  getQueryCache() {
    return f(this, se);
  }
  getMutationCache() {
    return f(this, nt);
  }
  getDefaultOptions() {
    return f(this, st);
  }
  setDefaultOptions(t) {
    R(this, st, t);
  }
  setQueryDefaults(t, e) {
    f(this, Ut).set(pr(t), {
      queryKey: t,
      defaultOptions: e
    });
  }
  getQueryDefaults(t) {
    const e = [...f(this, Ut).values()];
    let r = {};
    return e.forEach((n) => {
      yr(t, n.queryKey) && (r = { ...r, ...n.defaultOptions });
    }), r;
  }
  setMutationDefaults(t, e) {
    f(this, qt).set(pr(t), {
      mutationKey: t,
      defaultOptions: e
    });
  }
  getMutationDefaults(t) {
    const e = [...f(this, qt).values()];
    let r = {};
    return e.forEach((n) => {
      yr(t, n.mutationKey) && (r = { ...r, ...n.defaultOptions });
    }), r;
  }
  defaultQueryOptions(t) {
    if (t._defaulted)
      return t;
    const e = {
      ...f(this, st).queries,
      ...this.getQueryDefaults(t.queryKey),
      ...t,
      _defaulted: !0
    };
    return e.queryHash || (e.queryHash = as(
      e.queryKey,
      e
    )), e.refetchOnReconnect === void 0 && (e.refetchOnReconnect = e.networkMode !== "always"), e.throwOnError === void 0 && (e.throwOnError = !!e.suspense), !e.networkMode && e.persister && (e.networkMode = "offlineFirst"), e.enabled !== !0 && e.queryFn === gr && (e.enabled = !1), e;
  }
  defaultMutationOptions(t) {
    return t != null && t._defaulted ? t : {
      ...f(this, st).mutations,
      ...(t == null ? void 0 : t.mutationKey) && this.getMutationDefaults(t.mutationKey),
      ...t,
      _defaulted: !0
    };
  }
  clear() {
    f(this, se).clear(), f(this, nt).clear();
  }
}, se = new WeakMap(), nt = new WeakMap(), st = new WeakMap(), Ut = new WeakMap(), qt = new WeakMap(), it = new WeakMap(), Ht = new WeakMap(), Vt = new WeakMap(), Ai), ve, te, xr, me, vt, zt, Ue, Er, Qt, Wt, wt, xt, ot, Yt, Et, ar, _r, Dn, Sr, Bn, kr, In, Cr, Fn, Or, Un, Ar, qn, Rr, Hn, nn, qo, Ri, cl = (Ri = class extends Lr {
  constructor(e, r) {
    super();
    M(this, Et);
    M(this, _r);
    M(this, Sr);
    M(this, kr);
    M(this, Cr);
    M(this, Or);
    M(this, Ar);
    M(this, Rr);
    M(this, nn);
    M(this, ve, void 0);
    M(this, te, void 0);
    M(this, xr, void 0);
    M(this, me, void 0);
    M(this, vt, void 0);
    M(this, zt, void 0);
    M(this, Ue, void 0);
    M(this, Er, void 0);
    M(this, Qt, void 0);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    M(this, Wt, void 0);
    M(this, wt, void 0);
    M(this, xt, void 0);
    M(this, ot, void 0);
    M(this, Yt, /* @__PURE__ */ new Set());
    this.options = r, R(this, ve, e), R(this, Ue, null), this.bindMethods(), this.setOptions(r);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (f(this, te).addObserver(this), ri(f(this, te), this.options) ? Q(this, Et, ar).call(this) : this.updateResult(), Q(this, Cr, Fn).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Vn(
      f(this, te),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return Vn(
      f(this, te),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), Q(this, Or, Un).call(this), Q(this, Ar, qn).call(this), f(this, te).removeObserver(this);
  }
  setOptions(e, r) {
    const n = this.options, s = f(this, te);
    if (this.options = f(this, ve).defaultQueryOptions(e), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean")
      throw new Error("Expected enabled to be a boolean");
    Q(this, Rr, Hn).call(this), f(this, te).setOptions(this.options), n._defaulted && !Mn(this.options, n) && f(this, ve).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: f(this, te),
      observer: this
    });
    const i = this.hasListeners();
    i && ni(
      f(this, te),
      s,
      this.options,
      n
    ) && Q(this, Et, ar).call(this), this.updateResult(r), i && (f(this, te) !== s || this.options.enabled !== n.enabled || this.options.staleTime !== n.staleTime) && Q(this, _r, Dn).call(this);
    const o = Q(this, Sr, Bn).call(this);
    i && (f(this, te) !== s || this.options.enabled !== n.enabled || o !== f(this, ot)) && Q(this, kr, In).call(this, o);
  }
  getOptimisticResult(e) {
    const r = f(this, ve).getQueryCache().build(f(this, ve), e), n = this.createResult(r, e);
    return ul(this, n) && (R(this, me, n), R(this, zt, this.options), R(this, vt, f(this, te).state)), n;
  }
  getCurrentResult() {
    return f(this, me);
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
    f(this, Yt).add(e);
  }
  getCurrentQuery() {
    return f(this, te);
  }
  refetch({ ...e } = {}) {
    return this.fetch({
      ...e
    });
  }
  fetchOptimistic(e) {
    const r = f(this, ve).defaultQueryOptions(e), n = f(this, ve).getQueryCache().build(f(this, ve), r);
    return n.isFetchingOptimistic = !0, n.fetch().then(() => this.createResult(n, r));
  }
  fetch(e) {
    return Q(this, Et, ar).call(this, {
      ...e,
      cancelRefetch: e.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), f(this, me)));
  }
  createResult(e, r) {
    var ee;
    const n = f(this, te), s = this.options, i = f(this, me), o = f(this, vt), a = f(this, zt), p = e !== n ? e.state : f(this, xr), { state: u } = e;
    let d = { ...u }, h = !1, y;
    if (r._optimisticResults) {
      const D = this.hasListeners(), J = !D && ri(e, r), K = D && ni(e, n, r, s);
      (J || K) && (d = {
        ...d,
        ...Uo(u.data, e.options)
      }), r._optimisticResults === "isRestoring" && (d.fetchStatus = "idle");
    }
    let { error: w, errorUpdatedAt: E, status: v } = d;
    if (r.select && d.data !== void 0)
      if (i && d.data === (o == null ? void 0 : o.data) && r.select === f(this, Er))
        y = f(this, Qt);
      else
        try {
          R(this, Er, r.select), y = r.select(d.data), y = jn(i == null ? void 0 : i.data, y, r), R(this, Qt, y), R(this, Ue, null);
        } catch (D) {
          R(this, Ue, D);
        }
    else
      y = d.data;
    if (r.placeholderData !== void 0 && y === void 0 && v === "pending") {
      let D;
      if (i != null && i.isPlaceholderData && r.placeholderData === (a == null ? void 0 : a.placeholderData))
        D = i.data;
      else if (D = typeof r.placeholderData == "function" ? r.placeholderData(
        (ee = f(this, Wt)) == null ? void 0 : ee.state.data,
        f(this, Wt)
      ) : r.placeholderData, r.select && D !== void 0)
        try {
          D = r.select(D), R(this, Ue, null);
        } catch (J) {
          R(this, Ue, J);
        }
      D !== void 0 && (v = "success", y = jn(
        i == null ? void 0 : i.data,
        D,
        r
      ), h = !0);
    }
    f(this, Ue) && (w = f(this, Ue), y = f(this, Qt), E = Date.now(), v = "error");
    const C = d.fetchStatus === "fetching", $ = v === "pending", N = v === "error", V = $ && C, P = y !== void 0;
    return {
      status: v,
      fetchStatus: d.fetchStatus,
      isPending: $,
      isSuccess: v === "success",
      isError: N,
      isInitialLoading: V,
      isLoading: V,
      data: y,
      dataUpdatedAt: d.dataUpdatedAt,
      error: w,
      errorUpdatedAt: E,
      failureCount: d.fetchFailureCount,
      failureReason: d.fetchFailureReason,
      errorUpdateCount: d.errorUpdateCount,
      isFetched: d.dataUpdateCount > 0 || d.errorUpdateCount > 0,
      isFetchedAfterMount: d.dataUpdateCount > p.dataUpdateCount || d.errorUpdateCount > p.errorUpdateCount,
      isFetching: C,
      isRefetching: C && !$,
      isLoadingError: N && !P,
      isPaused: d.fetchStatus === "paused",
      isPlaceholderData: h,
      isRefetchError: N && P,
      isStale: us(e, r),
      refetch: this.refetch
    };
  }
  updateResult(e) {
    const r = f(this, me), n = this.createResult(f(this, te), this.options);
    if (R(this, vt, f(this, te).state), R(this, zt, this.options), f(this, vt).data !== void 0 && R(this, Wt, f(this, te)), Mn(n, r))
      return;
    R(this, me, n);
    const s = {}, i = () => {
      if (!r)
        return !0;
      const { notifyOnChangeProps: o } = this.options, a = typeof o == "function" ? o() : o;
      if (a === "all" || !a && !f(this, Yt).size)
        return !0;
      const l = new Set(
        a ?? f(this, Yt)
      );
      return this.options.throwOnError && l.add("error"), Object.keys(f(this, me)).some((p) => {
        const u = p;
        return f(this, me)[u] !== r[u] && l.has(u);
      });
    };
    (e == null ? void 0 : e.listeners) !== !1 && i() && (s.listeners = !0), Q(this, nn, qo).call(this, { ...s, ...e });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && Q(this, Cr, Fn).call(this);
  }
}, ve = new WeakMap(), te = new WeakMap(), xr = new WeakMap(), me = new WeakMap(), vt = new WeakMap(), zt = new WeakMap(), Ue = new WeakMap(), Er = new WeakMap(), Qt = new WeakMap(), Wt = new WeakMap(), wt = new WeakMap(), xt = new WeakMap(), ot = new WeakMap(), Yt = new WeakMap(), Et = new WeakSet(), ar = function(e) {
  Q(this, Rr, Hn).call(this);
  let r = f(this, te).fetch(
    this.options,
    e
  );
  return e != null && e.throwOnError || (r = r.catch(Oe)), r;
}, _r = new WeakSet(), Dn = function() {
  if (Q(this, Or, Un).call(this), Kt || f(this, me).isStale || !Ln(this.options.staleTime))
    return;
  const r = jo(
    f(this, me).dataUpdatedAt,
    this.options.staleTime
  ) + 1;
  R(this, wt, setTimeout(() => {
    f(this, me).isStale || this.updateResult();
  }, r));
}, Sr = new WeakSet(), Bn = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(f(this, te)) : this.options.refetchInterval) ?? !1;
}, kr = new WeakSet(), In = function(e) {
  Q(this, Ar, qn).call(this), R(this, ot, e), !(Kt || this.options.enabled === !1 || !Ln(f(this, ot)) || f(this, ot) === 0) && R(this, xt, setInterval(() => {
    (this.options.refetchIntervalInBackground || cs.isFocused()) && Q(this, Et, ar).call(this);
  }, f(this, ot)));
}, Cr = new WeakSet(), Fn = function() {
  Q(this, _r, Dn).call(this), Q(this, kr, In).call(this, Q(this, Sr, Bn).call(this));
}, Or = new WeakSet(), Un = function() {
  f(this, wt) && (clearTimeout(f(this, wt)), R(this, wt, void 0));
}, Ar = new WeakSet(), qn = function() {
  f(this, xt) && (clearInterval(f(this, xt)), R(this, xt, void 0));
}, Rr = new WeakSet(), Hn = function() {
  const e = f(this, ve).getQueryCache().build(f(this, ve), this.options);
  if (e === f(this, te))
    return;
  const r = f(this, te);
  R(this, te, e), R(this, xr, e.state), this.hasListeners() && (r == null || r.removeObserver(this), e.addObserver(this));
}, nn = new WeakSet(), qo = function(e) {
  de.batch(() => {
    e.listeners && this.listeners.forEach((r) => {
      r(f(this, me));
    }), f(this, ve).getQueryCache().notify({
      query: f(this, te),
      type: "observerResultsUpdated"
    });
  });
}, Ri);
function ll(t, e) {
  return e.enabled !== !1 && t.state.data === void 0 && !(t.state.status === "error" && e.retryOnMount === !1);
}
function ri(t, e) {
  return ll(t, e) || t.state.data !== void 0 && Vn(t, e, e.refetchOnMount);
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
function ul(t, e) {
  return !Mn(t.getCurrentResult(), e);
}
var Ho = we.createContext(
  void 0
), Vo = (t) => {
  const e = we.useContext(Ho);
  if (t)
    return t;
  if (!e)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return e;
}, hl = ({
  client: t,
  children: e
}) => (we.useEffect(() => (t.mount(), () => {
  t.unmount();
}), [t]), /* @__PURE__ */ A.jsx(Ho.Provider, { value: t, children: e })), zo = we.createContext(!1), fl = () => we.useContext(zo);
zo.Provider;
function dl() {
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
var pl = we.createContext(dl()), yl = () => we.useContext(pl);
function gl(t, e) {
  return typeof t == "function" ? t(...e) : !!t;
}
var ml = (t, e) => {
  (t.suspense || t.throwOnError) && (e.isReset() || (t.retryOnMount = !1));
}, bl = (t) => {
  we.useEffect(() => {
    t.clearReset();
  }, [t]);
}, vl = ({
  result: t,
  errorResetBoundary: e,
  throwOnError: r,
  query: n
}) => t.isError && !e.isReset() && !t.isFetching && n && gl(r, [t.error, n]), wl = (t) => {
  t.suspense && typeof t.staleTime != "number" && (t.staleTime = 1e3);
}, xl = (t, e) => (t == null ? void 0 : t.suspense) && e.isPending, El = (t, e, r) => e.fetchOptimistic(t).catch(() => {
  r.clearReset();
});
function _l(t, e, r) {
  if (process.env.NODE_ENV !== "production" && (typeof t != "object" || Array.isArray(t)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const n = Vo(r), s = fl(), i = yl(), o = n.defaultQueryOptions(t);
  o._optimisticResults = s ? "isRestoring" : "optimistic", wl(o), ml(o, i), bl(i);
  const [a] = we.useState(
    () => new e(
      n,
      o
    )
  ), l = a.getOptimisticResult(o);
  if (we.useSyncExternalStore(
    we.useCallback(
      (p) => {
        const u = s ? () => {
        } : a.subscribe(de.batchCalls(p));
        return a.updateResult(), u;
      },
      [a, s]
    ),
    () => a.getCurrentResult(),
    () => a.getCurrentResult()
  ), we.useEffect(() => {
    a.setOptions(o, { listeners: !1 });
  }, [o, a]), xl(o, l))
    throw El(o, a, i);
  if (vl({
    result: l,
    errorResetBoundary: i,
    throwOnError: o.throwOnError,
    query: n.getQueryCache().get(o.queryHash)
  }))
    throw l.error;
  return o.notifyOnChangeProps ? l : a.trackResult(l);
}
function si(t, e) {
  return _l(t, cl, e);
}
const Ve = /* @__PURE__ */ Object.create(null);
Ve.open = "0";
Ve.close = "1";
Ve.ping = "2";
Ve.pong = "3";
Ve.message = "4";
Ve.upgrade = "5";
Ve.noop = "6";
const Yr = /* @__PURE__ */ Object.create(null);
Object.keys(Ve).forEach((t) => {
  Yr[Ve[t]] = t;
});
const zn = { type: "error", data: "parser error" }, Qo = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Wo = typeof ArrayBuffer == "function", Yo = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer, hs = ({ type: t, data: e }, r, n) => Qo && e instanceof Blob ? r ? n(e) : ii(e, n) : Wo && (e instanceof ArrayBuffer || Yo(e)) ? r ? n(e) : ii(new Blob([e]), n) : n(Ve[t] + (e || "")), ii = (t, e) => {
  const r = new FileReader();
  return r.onload = function() {
    const n = r.result.split(",")[1];
    e("b" + (n || ""));
  }, r.readAsDataURL(t);
};
function oi(t) {
  return t instanceof Uint8Array ? t : t instanceof ArrayBuffer ? new Uint8Array(t) : new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
}
let Sn;
function Sl(t, e) {
  if (Qo && t.data instanceof Blob)
    return t.data.arrayBuffer().then(oi).then(e);
  if (Wo && (t.data instanceof ArrayBuffer || Yo(t.data)))
    return e(oi(t.data));
  hs(t, !1, (r) => {
    Sn || (Sn = new TextEncoder()), e(Sn.encode(r));
  });
}
const ai = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", cr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let t = 0; t < ai.length; t++)
  cr[ai.charCodeAt(t)] = t;
const kl = (t) => {
  let e = t.length * 0.75, r = t.length, n, s = 0, i, o, a, l;
  t[t.length - 1] === "=" && (e--, t[t.length - 2] === "=" && e--);
  const p = new ArrayBuffer(e), u = new Uint8Array(p);
  for (n = 0; n < r; n += 4)
    i = cr[t.charCodeAt(n)], o = cr[t.charCodeAt(n + 1)], a = cr[t.charCodeAt(n + 2)], l = cr[t.charCodeAt(n + 3)], u[s++] = i << 2 | o >> 4, u[s++] = (o & 15) << 4 | a >> 2, u[s++] = (a & 3) << 6 | l & 63;
  return p;
}, Cl = typeof ArrayBuffer == "function", fs = (t, e) => {
  if (typeof t != "string")
    return {
      type: "message",
      data: Ko(t, e)
    };
  const r = t.charAt(0);
  return r === "b" ? {
    type: "message",
    data: Ol(t.substring(1), e)
  } : Yr[r] ? t.length > 1 ? {
    type: Yr[r],
    data: t.substring(1)
  } : {
    type: Yr[r]
  } : zn;
}, Ol = (t, e) => {
  if (Cl) {
    const r = kl(t);
    return Ko(r, e);
  } else
    return { base64: !0, data: t };
}, Ko = (t, e) => {
  switch (e) {
    case "blob":
      return t instanceof Blob ? t : new Blob([t]);
    case "arraybuffer":
    default:
      return t instanceof ArrayBuffer ? t : t.buffer;
  }
}, Go = "", Al = (t, e) => {
  const r = t.length, n = new Array(r);
  let s = 0;
  t.forEach((i, o) => {
    hs(i, !1, (a) => {
      n[o] = a, ++s === r && e(n.join(Go));
    });
  });
}, Rl = (t, e) => {
  const r = t.split(Go), n = [];
  for (let s = 0; s < r.length; s++) {
    const i = fs(r[s], e);
    if (n.push(i), i.type === "error")
      break;
  }
  return n;
};
function Tl() {
  return new TransformStream({
    transform(t, e) {
      Sl(t, (r) => {
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
let kn;
function Fr(t) {
  return t.reduce((e, r) => e + r.length, 0);
}
function Ur(t, e) {
  if (t[0].length === e)
    return t.shift();
  const r = new Uint8Array(e);
  let n = 0;
  for (let s = 0; s < e; s++)
    r[s] = t[0][n++], n === t[0].length && (t.shift(), n = 0);
  return t.length && n < t[0].length && (t[0] = t[0].slice(n)), r;
}
function $l(t, e) {
  kn || (kn = new TextDecoder());
  const r = [];
  let n = 0, s = -1, i = !1;
  return new TransformStream({
    transform(o, a) {
      for (r.push(o); ; ) {
        if (n === 0) {
          if (Fr(r) < 1)
            break;
          const l = Ur(r, 1);
          i = (l[0] & 128) === 128, s = l[0] & 127, s < 126 ? n = 3 : s === 126 ? n = 1 : n = 2;
        } else if (n === 1) {
          if (Fr(r) < 2)
            break;
          const l = Ur(r, 2);
          s = new DataView(l.buffer, l.byteOffset, l.length).getUint16(0), n = 3;
        } else if (n === 2) {
          if (Fr(r) < 8)
            break;
          const l = Ur(r, 8), p = new DataView(l.buffer, l.byteOffset, l.length), u = p.getUint32(0);
          if (u > Math.pow(2, 21) - 1) {
            a.enqueue(zn);
            break;
          }
          s = u * Math.pow(2, 32) + p.getUint32(4), n = 3;
        } else {
          if (Fr(r) < s)
            break;
          const l = Ur(r, s);
          a.enqueue(fs(i ? l : kn.decode(l), e)), n = 0;
        }
        if (s === 0 || s > t) {
          a.enqueue(zn);
          break;
        }
      }
    }
  });
}
const Xo = 4;
function ce(t) {
  if (t)
    return Pl(t);
}
function Pl(t) {
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
const Ae = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
function Jo(t, ...e) {
  return e.reduce((r, n) => (t.hasOwnProperty(n) && (r[n] = t[n]), r), {});
}
const Ll = Ae.setTimeout, Ml = Ae.clearTimeout;
function fn(t, e) {
  e.useNativeTimers ? (t.setTimeoutFn = Ll.bind(Ae), t.clearTimeoutFn = Ml.bind(Ae)) : (t.setTimeoutFn = Ae.setTimeout.bind(Ae), t.clearTimeoutFn = Ae.clearTimeout.bind(Ae));
}
const Nl = 1.33;
function jl(t) {
  return typeof t == "string" ? Dl(t) : Math.ceil((t.byteLength || t.size) * Nl);
}
function Dl(t) {
  let e = 0, r = 0;
  for (let n = 0, s = t.length; n < s; n++)
    e = t.charCodeAt(n), e < 128 ? r += 1 : e < 2048 ? r += 2 : e < 55296 || e >= 57344 ? r += 3 : (n++, r += 4);
  return r;
}
function Bl(t) {
  let e = "";
  for (let r in t)
    t.hasOwnProperty(r) && (e.length && (e += "&"), e += encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));
  return e;
}
function Il(t) {
  let e = {}, r = t.split("&");
  for (let n = 0, s = r.length; n < s; n++) {
    let i = r[n].split("=");
    e[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
  }
  return e;
}
class Fl extends Error {
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
    super(), this.writable = !1, fn(this, e), this.opts = e, this.query = e.query, this.socket = e.socket;
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
    return super.emitReserved("error", new Fl(e, r, n)), this;
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
    const r = Bl(e);
    return r.length ? "?" + r : "";
  }
}
const Zo = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), Qn = 64, Ul = {};
let ci = 0, qr = 0, li;
function ui(t) {
  let e = "";
  do
    e = Zo[t % Qn] + e, t = Math.floor(t / Qn);
  while (t > 0);
  return e;
}
function ea() {
  const t = ui(+/* @__PURE__ */ new Date());
  return t !== li ? (ci = 0, li = t) : t + "." + ui(ci++);
}
for (; qr < Qn; qr++)
  Ul[Zo[qr]] = qr;
let ta = !1;
try {
  ta = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const ql = ta;
function ra(t) {
  const e = t.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!e || ql))
      return new XMLHttpRequest();
  } catch {
  }
  if (!e)
    try {
      return new Ae[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
function Hl() {
}
const Vl = function() {
  return new ra({
    xdomain: !1
  }).responseType != null;
}();
class zl extends ds {
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
    this.supportsBinary = Vl && !r, this.opts.withCredentials && (this.cookieJar = void 0);
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
    Rl(e, this.socket.binaryType).forEach(r), this.readyState !== "closed" && (this.polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this.poll());
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
    this.writable = !1, Al(e, (r) => {
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
    return this.opts.timestampRequests !== !1 && (r[this.opts.timestampParam] = ea()), !this.supportsBinary && !r.sid && (r.b64 = 1), this.createUri(e, r);
  }
  /**
   * Creates a request.
   *
   * @param {String} method
   * @private
   */
  request(e = {}) {
    return Object.assign(e, { xd: this.xd, cookieJar: this.cookieJar }, this.opts), new He(this.uri(), e);
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
class He extends ce {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(e, r) {
    super(), fn(this, r), this.opts = r, this.method = r.method || "GET", this.uri = e, this.data = r.data !== void 0 ? r.data : null, this.create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  create() {
    var e;
    const r = Jo(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    r.xdomain = !!this.opts.xd;
    const n = this.xhr = new ra(r);
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
    typeof document < "u" && (this.index = He.requestsCount++, He.requests[this.index] = this);
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
      if (this.xhr.onreadystatechange = Hl, e)
        try {
          this.xhr.abort();
        } catch {
        }
      typeof document < "u" && delete He.requests[this.index], this.xhr = null;
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
He.requestsCount = 0;
He.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", hi);
  else if (typeof addEventListener == "function") {
    const t = "onpagehide" in Ae ? "pagehide" : "unload";
    addEventListener(t, hi, !1);
  }
}
function hi() {
  for (let t in He.requests)
    He.requests.hasOwnProperty(t) && He.requests[t].abort();
}
const ps = typeof Promise == "function" && typeof Promise.resolve == "function" ? (e) => Promise.resolve().then(e) : (e, r) => r(e, 0), Hr = Ae.WebSocket || Ae.MozWebSocket, fi = !0, Ql = "arraybuffer", di = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class Wl extends ds {
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
    const e = this.uri(), r = this.opts.protocols, n = di ? {} : Jo(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
    try {
      this.ws = fi && !di ? r ? new Hr(e, r) : new Hr(e) : new Hr(e, r, n);
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
    return this.opts.timestampRequests && (r[this.opts.timestampParam] = ea()), this.supportsBinary || (r.b64 = 1), this.createUri(e, r);
  }
  /**
   * Feature detection for WebSocket.
   *
   * @return {Boolean} whether this transport is available.
   * @private
   */
  check() {
    return !!Hr;
  }
}
class Yl extends ds {
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
        const r = $l(Number.MAX_SAFE_INTEGER, this.socket.binaryType), n = e.readable.pipeThrough(r).getReader(), s = Tl();
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
const Kl = {
  websocket: Wl,
  webtransport: Yl,
  polling: zl
}, Gl = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, Xl = [
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
  let s = Gl.exec(t || ""), i = {}, o = 14;
  for (; o--; )
    i[Xl[o]] = s[o] || "";
  return r != -1 && n != -1 && (i.source = e, i.host = i.host.substring(1, i.host.length - 1).replace(/;/g, ":"), i.authority = i.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), i.ipv6uri = !0), i.pathNames = Jl(i, i.path), i.queryKey = Zl(i, i.query), i;
}
function Jl(t, e) {
  const r = /\/{2,9}/g, n = e.replace(r, "/").split("/");
  return (e.slice(0, 1) == "/" || e.length === 0) && n.splice(0, 1), e.slice(-1) == "/" && n.splice(n.length - 1, 1), n;
}
function Zl(t, e) {
  const r = {};
  return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(n, s, i) {
    s && (r[s] = i);
  }), r;
}
let na = class Pt extends ce {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(e, r = {}) {
    super(), this.binaryType = Ql, this.writeBuffer = [], e && typeof e == "object" && (r = e, e = null), e ? (e = Wn(e), r.hostname = e.host, r.secure = e.protocol === "https" || e.protocol === "wss", r.port = e.port, e.query && (r.query = e.query)) : r.host && (r.hostname = Wn(r.host).host), fn(this, r), this.secure = r.secure != null ? r.secure : typeof location < "u" && location.protocol === "https:", r.hostname && !r.port && (r.port = this.secure ? "443" : "80"), this.hostname = r.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = r.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = r.transports || [
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
    }, r), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = Il(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, typeof addEventListener == "function" && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
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
    r.EIO = Xo, r.transport = e, this.id && (r.sid = this.id);
    const n = Object.assign({}, this.opts, {
      query: r,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[e]);
    return new Kl[e](n);
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
      n || (r.send([{ type: "ping", data: "probe" }]), r.once("packet", (d) => {
        if (!n)
          if (d.type === "pong" && d.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", r), !r)
              return;
            Pt.priorWebsocketSuccess = r.name === "websocket", this.transport.pause(() => {
              n || this.readyState !== "closed" && (u(), this.setTransport(r), r.send([{ type: "upgrade" }]), this.emitReserved("upgrade", r), r = null, this.upgrading = !1, this.flush());
            });
          } else {
            const h = new Error("probe error");
            h.transport = r.name, this.emitReserved("upgradeError", h);
          }
      }));
    };
    function i() {
      n || (n = !0, u(), r.close(), r = null);
    }
    const o = (d) => {
      const h = new Error("probe error: " + d);
      h.transport = r.name, i(), this.emitReserved("upgradeError", h);
    };
    function a() {
      o("transport closed");
    }
    function l() {
      o("socket closed");
    }
    function p(d) {
      r && d.name !== r.name && i();
    }
    const u = () => {
      r.removeListener("open", s), r.removeListener("error", o), r.removeListener("close", a), this.off("close", l), this.off("upgrading", p);
    };
    r.once("open", s), r.once("error", o), r.once("close", a), this.once("close", l), this.once("upgrading", p), this.upgrades.indexOf("webtransport") !== -1 && e !== "webtransport" ? this.setTimeoutFn(() => {
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
      if (s && (r += jl(s)), n > 0 && r > this.maxPayload)
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
na.protocol = Xo;
function eu(t, e = "", r) {
  let n = t;
  r = r || typeof location < "u" && location, t == null && (t = r.protocol + "//" + r.host), typeof t == "string" && (t.charAt(0) === "/" && (t.charAt(1) === "/" ? t = r.protocol + t : t = r.host + t), /^(https?|wss?):\/\//.test(t) || (typeof r < "u" ? t = r.protocol + "//" + t : t = "https://" + t), n = Wn(t)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), n.path = n.path || "/";
  const i = n.host.indexOf(":") !== -1 ? "[" + n.host + "]" : n.host;
  return n.id = n.protocol + "://" + i + ":" + n.port + e, n.href = n.protocol + "://" + i + (r && r.port === n.port ? "" : ":" + n.port), n;
}
const tu = typeof ArrayBuffer == "function", ru = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer, sa = Object.prototype.toString, nu = typeof Blob == "function" || typeof Blob < "u" && sa.call(Blob) === "[object BlobConstructor]", su = typeof File == "function" || typeof File < "u" && sa.call(File) === "[object FileConstructor]";
function ys(t) {
  return tu && (t instanceof ArrayBuffer || ru(t)) || nu && t instanceof Blob || su && t instanceof File;
}
function Kr(t, e) {
  if (!t || typeof t != "object")
    return !1;
  if (Array.isArray(t)) {
    for (let r = 0, n = t.length; r < n; r++)
      if (Kr(t[r]))
        return !0;
    return !1;
  }
  if (ys(t))
    return !0;
  if (t.toJSON && typeof t.toJSON == "function" && arguments.length === 1)
    return Kr(t.toJSON(), !0);
  for (const r in t)
    if (Object.prototype.hasOwnProperty.call(t, r) && Kr(t[r]))
      return !0;
  return !1;
}
function iu(t) {
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
function ou(t, e) {
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
const au = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], cu = 5;
var W;
(function(t) {
  t[t.CONNECT = 0] = "CONNECT", t[t.DISCONNECT = 1] = "DISCONNECT", t[t.EVENT = 2] = "EVENT", t[t.ACK = 3] = "ACK", t[t.CONNECT_ERROR = 4] = "CONNECT_ERROR", t[t.BINARY_EVENT = 5] = "BINARY_EVENT", t[t.BINARY_ACK = 6] = "BINARY_ACK";
})(W || (W = {}));
class lu {
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
    return (e.type === W.EVENT || e.type === W.ACK) && Kr(e) ? this.encodeAsBinary({
      type: e.type === W.EVENT ? W.BINARY_EVENT : W.BINARY_ACK,
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
    return (e.type === W.BINARY_EVENT || e.type === W.BINARY_ACK) && (r += e.attachments + "-"), e.nsp && e.nsp !== "/" && (r += e.nsp + ","), e.id != null && (r += e.id), e.data != null && (r += JSON.stringify(e.data, this.replacer)), r;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(e) {
    const r = iu(e), n = this.encodeAsString(r.packet), s = r.buffers;
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
      const n = r.type === W.BINARY_EVENT;
      n || r.type === W.BINARY_ACK ? (r.type = n ? W.EVENT : W.ACK, this.reconstructor = new uu(r), r.attachments === 0 && super.emitReserved("decoded", r)) : super.emitReserved("decoded", r);
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
    if (W[n.type] === void 0)
      throw new Error("unknown packet type " + n.type);
    if (n.type === W.BINARY_EVENT || n.type === W.BINARY_ACK) {
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
      case W.CONNECT:
        return pi(r);
      case W.DISCONNECT:
        return r === void 0;
      case W.CONNECT_ERROR:
        return typeof r == "string" || pi(r);
      case W.EVENT:
      case W.BINARY_EVENT:
        return Array.isArray(r) && (typeof r[0] == "number" || typeof r[0] == "string" && au.indexOf(r[0]) === -1);
      case W.ACK:
      case W.BINARY_ACK:
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
class uu {
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
      const r = ou(this.reconPack, this.buffers);
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
const hu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: gs,
  Encoder: lu,
  get PacketType() {
    return W;
  },
  protocol: cu
}, Symbol.toStringTag, { value: "Module" }));
function Le(t, e, r) {
  return t.on(e, r), function() {
    t.off(e, r);
  };
}
const fu = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class ia extends ce {
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
      Le(e, "open", this.onopen.bind(this)),
      Le(e, "packet", this.onpacket.bind(this)),
      Le(e, "error", this.onerror.bind(this)),
      Le(e, "close", this.onclose.bind(this))
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
    if (fu.hasOwnProperty(e))
      throw new Error('"' + e.toString() + '" is a reserved event name');
    if (r.unshift(e), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(r), this;
    const n = {
      type: W.EVENT,
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
      type: W.CONNECT,
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
        case W.CONNECT:
          e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case W.EVENT:
        case W.BINARY_EVENT:
          this.onevent(e);
          break;
        case W.ACK:
        case W.BINARY_ACK:
          this.onack(e);
          break;
        case W.DISCONNECT:
          this.ondisconnect();
          break;
        case W.CONNECT_ERROR:
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
        type: W.ACK,
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
    return this.connected && this.packet({ type: W.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
function Gt(t) {
  t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0;
}
Gt.prototype.duration = function() {
  var t = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var e = Math.random(), r = Math.floor(e * this.jitter * t);
    t = Math.floor(e * 10) & 1 ? t + r : t - r;
  }
  return Math.min(t, this.max) | 0;
};
Gt.prototype.reset = function() {
  this.attempts = 0;
};
Gt.prototype.setMin = function(t) {
  this.ms = t;
};
Gt.prototype.setMax = function(t) {
  this.max = t;
};
Gt.prototype.setJitter = function(t) {
  this.jitter = t;
};
class Gn extends ce {
  constructor(e, r) {
    var n;
    super(), this.nsps = {}, this.subs = [], e && typeof e == "object" && (r = e, e = void 0), r = r || {}, r.path = r.path || "/socket.io", this.opts = r, fn(this, r), this.reconnection(r.reconnection !== !1), this.reconnectionAttempts(r.reconnectionAttempts || 1 / 0), this.reconnectionDelay(r.reconnectionDelay || 1e3), this.reconnectionDelayMax(r.reconnectionDelayMax || 5e3), this.randomizationFactor((n = r.randomizationFactor) !== null && n !== void 0 ? n : 0.5), this.backoff = new Gt({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(r.timeout == null ? 2e4 : r.timeout), this._readyState = "closed", this.uri = e;
    const s = r.parser || hu;
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
    this.engine = new na(this.uri, this.opts);
    const r = this.engine, n = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const s = Le(r, "open", function() {
      n.onopen(), e && e();
    }), i = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), e ? e(a) : this.maybeReconnectOnOpen();
    }, o = Le(r, "error", i);
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
    this.subs.push(Le(e, "ping", this.onping.bind(this)), Le(e, "data", this.ondata.bind(this)), Le(e, "error", this.onerror.bind(this)), Le(e, "close", this.onclose.bind(this)), Le(this.decoder, "decoded", this.ondecoded.bind(this)));
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
    return n ? this._autoConnect && !n.active && n.connect() : (n = new ia(this, e, r), this.nsps[e] = n), n;
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
const nr = {};
function Gr(t, e) {
  typeof t == "object" && (e = t, t = void 0), e = e || {};
  const r = eu(t, e.path || "/socket.io"), n = r.source, s = r.id, i = r.path, o = nr[s] && i in nr[s].nsps, a = e.forceNew || e["force new connection"] || e.multiplex === !1 || o;
  let l;
  return a ? l = new Gn(n, e) : (nr[s] || (nr[s] = new Gn(n, e)), l = nr[s]), r.query && !e.query && (e.query = r.queryKey), l.socket(r.path, e);
}
Object.assign(Gr, {
  Manager: Gn,
  Socket: ia,
  io: Gr,
  connect: Gr
});
var du = typeof ft == "object" && ft && ft.Object === Object && ft, pu = typeof self == "object" && self && self.Object === Object && self;
du || pu || Function("return this")();
var oa = typeof window < "u" ? Pi : Re;
function yi(t, e, r, n) {
  const s = xe(e);
  oa(() => {
    s.current = e;
  }, [e]), Re(() => {
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
function yu(t) {
  const e = xe(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return oa(() => {
    e.current = t;
  }, [t]), qe((...r) => {
    var n;
    return (n = e.current) == null ? void 0 : n.call(e, ...r);
  }, [e]);
}
var gi = typeof window > "u";
function gu(t, e, r = {}) {
  const { initializeWithValue: n = !0 } = r, s = qe(
    (d) => r.serializer ? r.serializer(d) : JSON.stringify(d),
    [r]
  ), i = qe(
    (d) => {
      if (r.deserializer)
        return r.deserializer(d);
      if (d === "undefined")
        return;
      const h = e instanceof Function ? e() : e;
      let y;
      try {
        y = JSON.parse(d);
      } catch (w) {
        return console.error("Error parsing JSON:", w), h;
      }
      return y;
    },
    [r, e]
  ), o = qe(() => {
    const d = e instanceof Function ? e() : e;
    if (gi)
      return d;
    try {
      const h = window.localStorage.getItem(t);
      return h ? i(h) : d;
    } catch (h) {
      return console.warn(`Error reading localStorage key “${t}”:`, h), d;
    }
  }, [e, t, i]), [a, l] = ct(() => n ? o() : e instanceof Function ? e() : e), p = yu((d) => {
    gi && console.warn(
      `Tried setting localStorage key “${t}” even though environment is not a client`
    );
    try {
      const h = d instanceof Function ? d(o()) : d;
      window.localStorage.setItem(t, s(h)), l(h), window.dispatchEvent(new StorageEvent("local-storage", { key: t }));
    } catch (h) {
      console.warn(`Error setting localStorage key “${t}”:`, h);
    }
  });
  Re(() => {
    l(o());
  }, [t]);
  const u = qe(
    (d) => {
      d.key && d.key !== t || l(o());
    },
    [t, o]
  );
  return yi("storage", u), yi("local-storage", u), [a, p];
}
function mu(t) {
  const e = xe(t);
  e.current = t, Re(
    () => () => {
      e.current();
    },
    []
  );
}
const aa = $i({}), bu = ({
  children: t,
  channelId: e,
  onEndBot: r,
  isTest: n = !1,
  onClose: s,
  isShowClose: i = !0,
  isForLiveChat: o,
  userId: a,
  customStyles: l,
  isForPreview: p,
  isForManager: u,
  adminId: d,
  ...h
}) => {
  const [y, w] = ct(!1), [E, v] = ct(u ? void 0 : l), [C, $] = gu("disabled-buttons", []), N = Vo(), V = Qr(() => new URLSearchParams(window.location.search), []), P = Qr(() => a || Ee(), [a]), I = Qr(() => e || V.get("channelId") || "", [e, V]), ee = xe(Gr(h.API_URL || or, {
    autoConnect: !1,
    transports: ["websocket"],
    query: {
      userId: d ? `${P}_${d}` : P
    }
  }));
  console.log(`${h.API_URL || or}/api/conversation-live-chat/${a || Ee()}/${I}`);
  const {
    data: D,
    isLoading: J
  } = si({
    queryKey: ["messages", I, a || Ee()],
    queryFn: async () => {
      try {
        return p ? [{
          isBot: !0,
          message: "Hello, how can I help you?",
          createdAt: (/* @__PURE__ */ new Date()).toISOString()
        }, {
          isBot: !1,
          message: "I want to know more about your product",
          userId: Ee(),
          createdAt: (/* @__PURE__ */ new Date()).toISOString()
        }] : (await (await fetch(`${h.API_URL || or}/api/conversation-live-chat/${a || Ee()}/${I}`)).json()).data;
      } catch {
        return [];
      }
    },
    initialData: [],
    refetchOnWindowFocus: !1,
    refetchOnReconnect: !1
  }), {
    data: K
  } = si({
    queryKey: ["custom-style", I, a || Ee()],
    queryFn: async () => {
      try {
        return (await (await fetch(`${h.API_URL || or}/api/custom-chatbox/${I}`)).json()).data;
      } catch {
        return;
      }
    },
    enabled: !n && !p && !u
  }), H = qe(({
    message: m,
    cb: b,
    extraData: _,
    type: k
  }) => {
    if (u)
      return;
    const L = m.trim();
    if (L.length === 0)
      return;
    const j = Gs(I, a), q = {
      message: k === "list-button" ? _ || "" : L,
      userId: d || a || Ee(),
      template: {},
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      isTest: n
    };
    ee.current.emit(tr.MESSAGE, {
      message: L,
      address: j,
      isTest: n,
      createdAt: q.createdAt
    }), N.setQueryData(["messages", I, a || Ee()], (G) => [...G, q]), b && b(q);
  }, [I, d, u, n, N, a]), g = qe(() => {
    window.parent && window.parent.postMessage({
      type: "TOGGLE_CHAT"
    }, "*"), s == null || s();
  }, [s]), T = qe(() => {
    p || ($([]), ee.current.emit(tr.MESSAGE, {
      type: "event",
      typeName: "endConversation",
      address: Gs(I, a),
      isTest: n,
      message: ""
    }), w(!1), N.setQueryData(["messages", I, a || Ee()], () => []));
  }, [I, p, n, N, $, a]), S = qe((m) => {
    $((b) => [...b, m]);
  }, [$]);
  return mu(() => {
    ee.current.disconnect();
  }), Re(() => {
    if (p)
      return;
    const m = ee.current;
    return m.connect(), m.on(tr.MESSAGE, (b) => {
      var _;
      ((_ = b.template) == null ? void 0 : _.type) === "list-button" ? w(!0) : w(!1), N.setQueryData(["messages", I, a || Ee()], (k) => [...k, b].filter((L) => L.userId !== "typing"));
    }), m.on(tr.TYPING, () => {
      N.setQueryData(["messages", I, a || Ee()], (b) => [...b, {
        userId: "typing"
      }]);
    }), m.on(tr.STOP_TYPING, () => {
      N.setQueryData(["messages", I, a || Ee()], (b) => b.filter((_) => _.userId !== "typing"));
    }), () => {
      m.disconnect();
    };
  }, [I, N, a, p]), Re(() => {
    p && w(!0);
  }, [p]), Re(() => {
    K && !u && v(K);
  }, [K, u]), Re(() => {
    l && !u && v(l);
  }, [l, u]), /* @__PURE__ */ A.jsx(aa.Provider, { value: {
    socket: ee.current,
    messages: D,
    channelId: I,
    onEndBot: r,
    isTest: n,
    handleSendMessage: H,
    handleClose: g,
    disableInput: y,
    isShowClose: i,
    isLoadingMessages: J,
    isForLiveChat: o,
    userId: a,
    handleReload: T,
    customStyles: E,
    adminId: d,
    isForManager: u,
    disabledButtons: C,
    handleClickButton: S
  }, children: t });
}, Ct = () => {
  const t = Li(aa);
  if (!t)
    throw new Error("useSocket must be used within SocketProvider");
  return t;
};
function ca(t) {
  var e, r, n = "";
  if (typeof t == "string" || typeof t == "number")
    n += t;
  else if (typeof t == "object")
    if (Array.isArray(t)) {
      var s = t.length;
      for (e = 0; e < s; e++)
        t[e] && (r = ca(t[e])) && (n && (n += " "), n += r);
    } else
      for (r in t)
        t[r] && (n && (n += " "), n += r);
  return n;
}
function vu() {
  for (var t, e, r = 0, n = "", s = arguments.length; r < s; r++)
    (t = arguments[r]) && (e = ca(t)) && (n && (n += " "), n += e);
  return n;
}
const ms = "-";
function wu(t) {
  const e = Eu(t), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = t;
  function s(o) {
    const a = o.split(ms);
    return a[0] === "" && a.length !== 1 && a.shift(), la(a, e) || xu(o);
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
function la(t, e) {
  var o;
  if (t.length === 0)
    return e.classGroupId;
  const r = t[0], n = e.nextPart.get(r), s = n ? la(t.slice(1), n) : void 0;
  if (s)
    return s;
  if (e.validators.length === 0)
    return;
  const i = t.join(ms);
  return (o = e.validators.find(({
    validator: a
  }) => a(i))) == null ? void 0 : o.classGroupId;
}
const mi = /^\[(.+)\]$/;
function xu(t) {
  if (mi.test(t)) {
    const e = mi.exec(t)[1], r = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}
function Eu(t) {
  const {
    theme: e,
    prefix: r
  } = t, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Su(Object.entries(t.classGroups), r).forEach(([i, o]) => {
    Xn(o, n, i, e);
  }), n;
}
function Xn(t, e, r, n) {
  t.forEach((s) => {
    if (typeof s == "string") {
      const i = s === "" ? e : bi(e, s);
      i.classGroupId = r;
      return;
    }
    if (typeof s == "function") {
      if (_u(s)) {
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
      Xn(o, bi(e, i), r, n);
    });
  });
}
function bi(t, e) {
  let r = t;
  return e.split(ms).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}
function _u(t) {
  return t.isThemeGetter;
}
function Su(t, e) {
  return e ? t.map(([r, n]) => {
    const s = n.map((i) => typeof i == "string" ? e + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([o, a]) => [e + o, a])) : i);
    return [r, s];
  }) : t;
}
function ku(t) {
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
const ua = "!";
function Cu(t) {
  const e = t.separator, r = e.length === 1, n = e[0], s = e.length;
  return function(o) {
    const a = [];
    let l = 0, p = 0, u;
    for (let E = 0; E < o.length; E++) {
      let v = o[E];
      if (l === 0) {
        if (v === n && (r || o.slice(E, E + s) === e)) {
          a.push(o.slice(p, E)), p = E + s;
          continue;
        }
        if (v === "/") {
          u = E;
          continue;
        }
      }
      v === "[" ? l++ : v === "]" && l--;
    }
    const d = a.length === 0 ? o : o.substring(p), h = d.startsWith(ua), y = h ? d.substring(1) : d, w = u && u > p ? u - p : void 0;
    return {
      modifiers: a,
      hasImportantModifier: h,
      baseClassName: y,
      maybePostfixModifierPosition: w
    };
  };
}
function Ou(t) {
  if (t.length <= 1)
    return t;
  const e = [];
  let r = [];
  return t.forEach((n) => {
    n[0] === "[" ? (e.push(...r.sort(), n), r = []) : r.push(n);
  }), e.push(...r.sort()), e;
}
function Au(t) {
  return {
    cache: ku(t.cacheSize),
    splitModifiers: Cu(t),
    ...wu(t)
  };
}
const Ru = /\s+/;
function Tu(t, e) {
  const {
    splitModifiers: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: s
  } = e, i = /* @__PURE__ */ new Set();
  return t.trim().split(Ru).map((o) => {
    const {
      modifiers: a,
      hasImportantModifier: l,
      baseClassName: p,
      maybePostfixModifierPosition: u
    } = r(o);
    let d = n(u ? p.substring(0, u) : p), h = !!u;
    if (!d) {
      if (!u)
        return {
          isTailwindClass: !1,
          originalClassName: o
        };
      if (d = n(p), !d)
        return {
          isTailwindClass: !1,
          originalClassName: o
        };
      h = !1;
    }
    const y = Ou(a).join(":");
    return {
      isTailwindClass: !0,
      modifierId: l ? y + ua : y,
      classGroupId: d,
      originalClassName: o,
      hasPostfixModifier: h
    };
  }).reverse().filter((o) => {
    if (!o.isTailwindClass)
      return !0;
    const {
      modifierId: a,
      classGroupId: l,
      hasPostfixModifier: p
    } = o, u = a + l;
    return i.has(u) ? !1 : (i.add(u), s(l, p).forEach((d) => i.add(a + d)), !0);
  }).reverse().map((o) => o.originalClassName).join(" ");
}
function $u() {
  let t = 0, e, r, n = "";
  for (; t < arguments.length; )
    (e = arguments[t++]) && (r = ha(e)) && (n && (n += " "), n += r);
  return n;
}
function ha(t) {
  if (typeof t == "string")
    return t;
  let e, r = "";
  for (let n = 0; n < t.length; n++)
    t[n] && (e = ha(t[n])) && (r && (r += " "), r += e);
  return r;
}
function Pu(t, ...e) {
  let r, n, s, i = o;
  function o(l) {
    const p = e.reduce((u, d) => d(u), t());
    return r = Au(p), n = r.cache.get, s = r.cache.set, i = a, a(l);
  }
  function a(l) {
    const p = n(l);
    if (p)
      return p;
    const u = Tu(l, r);
    return s(l, u), u;
  }
  return function() {
    return i($u.apply(null, arguments));
  };
}
function ne(t) {
  const e = (r) => r[t] || [];
  return e.isThemeGetter = !0, e;
}
const fa = /^\[(?:([a-z-]+):)?(.+)\]$/i, Lu = /^\d+\/\d+$/, Mu = /* @__PURE__ */ new Set(["px", "full", "screen"]), Nu = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ju = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Du = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Bu = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Iu = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function We(t) {
  return dt(t) || Mu.has(t) || Lu.test(t);
}
function Je(t) {
  return Xt(t, "length", Wu);
}
function dt(t) {
  return !!t && !Number.isNaN(Number(t));
}
function Vr(t) {
  return Xt(t, "number", dt);
}
function sr(t) {
  return !!t && Number.isInteger(Number(t));
}
function Fu(t) {
  return t.endsWith("%") && dt(t.slice(0, -1));
}
function U(t) {
  return fa.test(t);
}
function Ze(t) {
  return Nu.test(t);
}
const Uu = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function qu(t) {
  return Xt(t, Uu, da);
}
function Hu(t) {
  return Xt(t, "position", da);
}
const Vu = /* @__PURE__ */ new Set(["image", "url"]);
function zu(t) {
  return Xt(t, Vu, Ku);
}
function Qu(t) {
  return Xt(t, "", Yu);
}
function ir() {
  return !0;
}
function Xt(t, e, r) {
  const n = fa.exec(t);
  return n ? n[1] ? typeof e == "string" ? n[1] === e : e.has(n[1]) : r(n[2]) : !1;
}
function Wu(t) {
  return ju.test(t) && !Du.test(t);
}
function da() {
  return !1;
}
function Yu(t) {
  return Bu.test(t);
}
function Ku(t) {
  return Iu.test(t);
}
function Gu() {
  const t = ne("colors"), e = ne("spacing"), r = ne("blur"), n = ne("brightness"), s = ne("borderColor"), i = ne("borderRadius"), o = ne("borderSpacing"), a = ne("borderWidth"), l = ne("contrast"), p = ne("grayscale"), u = ne("hueRotate"), d = ne("invert"), h = ne("gap"), y = ne("gradientColorStops"), w = ne("gradientColorStopPositions"), E = ne("inset"), v = ne("margin"), C = ne("opacity"), $ = ne("padding"), N = ne("saturate"), V = ne("scale"), P = ne("sepia"), I = ne("skew"), ee = ne("space"), D = ne("translate"), J = () => ["auto", "contain", "none"], K = () => ["auto", "hidden", "clip", "visible", "scroll"], H = () => ["auto", U, e], g = () => [U, e], T = () => ["", We, Je], S = () => ["auto", dt, U], m = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], b = () => ["solid", "dashed", "dotted", "double", "none"], _ = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"], k = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], L = () => ["", "0", U], j = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], q = () => [dt, Vr], G = () => [dt, U];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ir],
      spacing: [We, Je],
      blur: ["none", "", Ze, U],
      brightness: q(),
      borderColor: [t],
      borderRadius: ["none", "", "full", Ze, U],
      borderSpacing: g(),
      borderWidth: T(),
      contrast: q(),
      grayscale: L(),
      hueRotate: G(),
      invert: L(),
      gap: g(),
      gradientColorStops: [t],
      gradientColorStopPositions: [Fu, Je],
      inset: H(),
      margin: H(),
      opacity: q(),
      padding: g(),
      saturate: q(),
      scale: q(),
      sepia: L(),
      skew: G(),
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
        columns: [Ze]
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
        object: [...m(), U]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: K()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": K()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": K()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: J()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": J()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": J()
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
        inset: [E]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [E]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [E]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [E]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [E]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [E]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [E]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [E]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [E]
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
        z: ["auto", sr, U]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: H()
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
        grow: L()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: L()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", sr, U]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ir]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", sr, U]
        }, U]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": S()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": S()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [ir]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [sr, U]
        }, U]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": S()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": S()
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
        gap: [h]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [h]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [h]
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
        p: [$]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [$]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [$]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [$]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [$]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [$]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [$]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [$]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [$]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [v]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [v]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [v]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [v]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [v]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [v]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [v]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [v]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [v]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [ee]
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
        "space-y": [ee]
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
          screen: [Ze]
        }, Ze]
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
        text: ["base", Ze, Je]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Vr]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ir]
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
        "line-clamp": ["none", dt, Vr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", We, U]
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
        "placeholder-opacity": [C]
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
        "text-opacity": [C]
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
        decoration: ["auto", "from-font", We, Je]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", We, U]
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
        "bg-opacity": [C]
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
        bg: [...m(), Hu]
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
        bg: ["auto", "cover", "contain", qu]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, zu]
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
        from: [w]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [w]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [w]
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
        "border-opacity": [C]
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
        "divide-opacity": [C]
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
        "outline-offset": [We, U]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [We, Je]
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
        ring: T()
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
        "ring-opacity": [C]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [We, Je]
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
        shadow: ["", "inner", "none", Ze, Qu]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ir]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [C]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": _()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": _()
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
        "drop-shadow": ["", "none", Ze, U]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [p]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [u]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [d]
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
        sepia: [P]
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
        "backdrop-grayscale": [p]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [u]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [d]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [C]
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
        "backdrop-sepia": [P]
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
        duration: G()
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
        delay: G()
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
        scale: [V]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [V]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [V]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [sr, U]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [D]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [D]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [I]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [I]
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
        stroke: [We, Je, Vr]
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
const Xu = /* @__PURE__ */ Pu(Gu);
function pt(...t) {
  return Xu(vu(t));
}
var pa = { exports: {} };
(function(t, e) {
  (function(r, n) {
    t.exports = n();
  })(ft, function() {
    var r = 1e3, n = 6e4, s = 36e5, i = "millisecond", o = "second", a = "minute", l = "hour", p = "day", u = "week", d = "month", h = "quarter", y = "year", w = "date", E = "Invalid Date", v = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, C = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, $ = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(S) {
      var m = ["th", "st", "nd", "rd"], b = S % 100;
      return "[" + S + (m[(b - 20) % 10] || m[b] || m[0]) + "]";
    } }, N = function(S, m, b) {
      var _ = String(S);
      return !_ || _.length >= m ? S : "" + Array(m + 1 - _.length).join(b) + S;
    }, V = { s: N, z: function(S) {
      var m = -S.utcOffset(), b = Math.abs(m), _ = Math.floor(b / 60), k = b % 60;
      return (m <= 0 ? "+" : "-") + N(_, 2, "0") + ":" + N(k, 2, "0");
    }, m: function S(m, b) {
      if (m.date() < b.date())
        return -S(b, m);
      var _ = 12 * (b.year() - m.year()) + (b.month() - m.month()), k = m.clone().add(_, d), L = b - k < 0, j = m.clone().add(_ + (L ? -1 : 1), d);
      return +(-(_ + (b - k) / (L ? k - j : j - k)) || 0);
    }, a: function(S) {
      return S < 0 ? Math.ceil(S) || 0 : Math.floor(S);
    }, p: function(S) {
      return { M: d, y, w: u, d: p, D: w, h: l, m: a, s: o, ms: i, Q: h }[S] || String(S || "").toLowerCase().replace(/s$/, "");
    }, u: function(S) {
      return S === void 0;
    } }, P = "en", I = {};
    I[P] = $;
    var ee = "$isDayjsObject", D = function(S) {
      return S instanceof g || !(!S || !S[ee]);
    }, J = function S(m, b, _) {
      var k;
      if (!m)
        return P;
      if (typeof m == "string") {
        var L = m.toLowerCase();
        I[L] && (k = L), b && (I[L] = b, k = L);
        var j = m.split("-");
        if (!k && j.length > 1)
          return S(j[0]);
      } else {
        var q = m.name;
        I[q] = m, k = q;
      }
      return !_ && k && (P = k), k || !_ && P;
    }, K = function(S, m) {
      if (D(S))
        return S.clone();
      var b = typeof m == "object" ? m : {};
      return b.date = S, b.args = arguments, new g(b);
    }, H = V;
    H.l = J, H.i = D, H.w = function(S, m) {
      return K(S, { locale: m.$L, utc: m.$u, x: m.$x, $offset: m.$offset });
    };
    var g = function() {
      function S(b) {
        this.$L = J(b.locale, null, !0), this.parse(b), this.$x = this.$x || b.x || {}, this[ee] = !0;
      }
      var m = S.prototype;
      return m.parse = function(b) {
        this.$d = function(_) {
          var k = _.date, L = _.utc;
          if (k === null)
            return /* @__PURE__ */ new Date(NaN);
          if (H.u(k))
            return /* @__PURE__ */ new Date();
          if (k instanceof Date)
            return new Date(k);
          if (typeof k == "string" && !/Z$/i.test(k)) {
            var j = k.match(v);
            if (j) {
              var q = j[2] - 1 || 0, G = (j[7] || "0").substring(0, 3);
              return L ? new Date(Date.UTC(j[1], q, j[3] || 1, j[4] || 0, j[5] || 0, j[6] || 0, G)) : new Date(j[1], q, j[3] || 1, j[4] || 0, j[5] || 0, j[6] || 0, G);
            }
          }
          return new Date(k);
        }(b), this.init();
      }, m.init = function() {
        var b = this.$d;
        this.$y = b.getFullYear(), this.$M = b.getMonth(), this.$D = b.getDate(), this.$W = b.getDay(), this.$H = b.getHours(), this.$m = b.getMinutes(), this.$s = b.getSeconds(), this.$ms = b.getMilliseconds();
      }, m.$utils = function() {
        return H;
      }, m.isValid = function() {
        return this.$d.toString() !== E;
      }, m.isSame = function(b, _) {
        var k = K(b);
        return this.startOf(_) <= k && k <= this.endOf(_);
      }, m.isAfter = function(b, _) {
        return K(b) < this.startOf(_);
      }, m.isBefore = function(b, _) {
        return this.endOf(_) < K(b);
      }, m.$g = function(b, _, k) {
        return H.u(b) ? this[_] : this.set(k, b);
      }, m.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, m.valueOf = function() {
        return this.$d.getTime();
      }, m.startOf = function(b, _) {
        var k = this, L = !!H.u(_) || _, j = H.p(b), q = function($e, le) {
          var De = H.w(k.$u ? Date.UTC(k.$y, le, $e) : new Date(k.$y, le, $e), k);
          return L ? De : De.endOf(p);
        }, G = function($e, le) {
          return H.w(k.toDate()[$e].apply(k.toDate("s"), (L ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(le)), k);
        }, ie = this.$W, ue = this.$M, be = this.$D, Ne = "set" + (this.$u ? "UTC" : "");
        switch (j) {
          case y:
            return L ? q(1, 0) : q(31, 11);
          case d:
            return L ? q(1, ue) : q(0, ue + 1);
          case u:
            var Te = this.$locale().weekStart || 0, je = (ie < Te ? ie + 7 : ie) - Te;
            return q(L ? be - je : be + (6 - je), ue);
          case p:
          case w:
            return G(Ne + "Hours", 0);
          case l:
            return G(Ne + "Minutes", 1);
          case a:
            return G(Ne + "Seconds", 2);
          case o:
            return G(Ne + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, m.endOf = function(b) {
        return this.startOf(b, !1);
      }, m.$set = function(b, _) {
        var k, L = H.p(b), j = "set" + (this.$u ? "UTC" : ""), q = (k = {}, k[p] = j + "Date", k[w] = j + "Date", k[d] = j + "Month", k[y] = j + "FullYear", k[l] = j + "Hours", k[a] = j + "Minutes", k[o] = j + "Seconds", k[i] = j + "Milliseconds", k)[L], G = L === p ? this.$D + (_ - this.$W) : _;
        if (L === d || L === y) {
          var ie = this.clone().set(w, 1);
          ie.$d[q](G), ie.init(), this.$d = ie.set(w, Math.min(this.$D, ie.daysInMonth())).$d;
        } else
          q && this.$d[q](G);
        return this.init(), this;
      }, m.set = function(b, _) {
        return this.clone().$set(b, _);
      }, m.get = function(b) {
        return this[H.p(b)]();
      }, m.add = function(b, _) {
        var k, L = this;
        b = Number(b);
        var j = H.p(_), q = function(ue) {
          var be = K(L);
          return H.w(be.date(be.date() + Math.round(ue * b)), L);
        };
        if (j === d)
          return this.set(d, this.$M + b);
        if (j === y)
          return this.set(y, this.$y + b);
        if (j === p)
          return q(1);
        if (j === u)
          return q(7);
        var G = (k = {}, k[a] = n, k[l] = s, k[o] = r, k)[j] || 1, ie = this.$d.getTime() + b * G;
        return H.w(ie, this);
      }, m.subtract = function(b, _) {
        return this.add(-1 * b, _);
      }, m.format = function(b) {
        var _ = this, k = this.$locale();
        if (!this.isValid())
          return k.invalidDate || E;
        var L = b || "YYYY-MM-DDTHH:mm:ssZ", j = H.z(this), q = this.$H, G = this.$m, ie = this.$M, ue = k.weekdays, be = k.months, Ne = k.meridiem, Te = function(le, De, Ge, Ot) {
          return le && (le[De] || le(_, L)) || Ge[De].slice(0, Ot);
        }, je = function(le) {
          return H.s(q % 12 || 12, le, "0");
        }, $e = Ne || function(le, De, Ge) {
          var Ot = le < 12 ? "AM" : "PM";
          return Ge ? Ot.toLowerCase() : Ot;
        };
        return L.replace(C, function(le, De) {
          return De || function(Ge) {
            switch (Ge) {
              case "YY":
                return String(_.$y).slice(-2);
              case "YYYY":
                return H.s(_.$y, 4, "0");
              case "M":
                return ie + 1;
              case "MM":
                return H.s(ie + 1, 2, "0");
              case "MMM":
                return Te(k.monthsShort, ie, be, 3);
              case "MMMM":
                return Te(be, ie);
              case "D":
                return _.$D;
              case "DD":
                return H.s(_.$D, 2, "0");
              case "d":
                return String(_.$W);
              case "dd":
                return Te(k.weekdaysMin, _.$W, ue, 2);
              case "ddd":
                return Te(k.weekdaysShort, _.$W, ue, 3);
              case "dddd":
                return ue[_.$W];
              case "H":
                return String(q);
              case "HH":
                return H.s(q, 2, "0");
              case "h":
                return je(1);
              case "hh":
                return je(2);
              case "a":
                return $e(q, G, !0);
              case "A":
                return $e(q, G, !1);
              case "m":
                return String(G);
              case "mm":
                return H.s(G, 2, "0");
              case "s":
                return String(_.$s);
              case "ss":
                return H.s(_.$s, 2, "0");
              case "SSS":
                return H.s(_.$ms, 3, "0");
              case "Z":
                return j;
            }
            return null;
          }(le) || j.replace(":", "");
        });
      }, m.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, m.diff = function(b, _, k) {
        var L, j = this, q = H.p(_), G = K(b), ie = (G.utcOffset() - this.utcOffset()) * n, ue = this - G, be = function() {
          return H.m(j, G);
        };
        switch (q) {
          case y:
            L = be() / 12;
            break;
          case d:
            L = be();
            break;
          case h:
            L = be() / 3;
            break;
          case u:
            L = (ue - ie) / 6048e5;
            break;
          case p:
            L = (ue - ie) / 864e5;
            break;
          case l:
            L = ue / s;
            break;
          case a:
            L = ue / n;
            break;
          case o:
            L = ue / r;
            break;
          default:
            L = ue;
        }
        return k ? L : H.a(L);
      }, m.daysInMonth = function() {
        return this.endOf(d).$D;
      }, m.$locale = function() {
        return I[this.$L];
      }, m.locale = function(b, _) {
        if (!b)
          return this.$L;
        var k = this.clone(), L = J(b, _, !0);
        return L && (k.$L = L), k;
      }, m.clone = function() {
        return H.w(this.$d, this);
      }, m.toDate = function() {
        return new Date(this.valueOf());
      }, m.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, m.toISOString = function() {
        return this.$d.toISOString();
      }, m.toString = function() {
        return this.$d.toUTCString();
      }, S;
    }(), T = g.prototype;
    return K.prototype = T, [["$ms", i], ["$s", o], ["$m", a], ["$H", l], ["$W", p], ["$M", d], ["$y", y], ["$D", w]].forEach(function(S) {
      T[S[1]] = function(m) {
        return this.$g(m, S[0], S[1]);
      };
    }), K.extend = function(S, m) {
      return S.$i || (S(m, g, K), S.$i = !0), K;
    }, K.locale = J, K.isDayjs = D, K.unix = function(S) {
      return K(1e3 * S);
    }, K.en = I[P], K.Ls = I, K.p = {}, K;
  });
})(pa);
var Ju = pa.exports;
const zr = /* @__PURE__ */ Ua(Ju);
/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Zu = {
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
const eh = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dn = (t, e) => {
  const r = Zn(
    ({
      color: n = "currentColor",
      size: s = 24,
      strokeWidth: i = 2,
      absoluteStrokeWidth: o,
      className: a = "",
      children: l,
      ...p
    }, u) => pe(
      "svg",
      {
        ref: u,
        ...Zu,
        width: s,
        height: s,
        stroke: n,
        strokeWidth: o ? Number(i) * 24 / Number(s) : i,
        className: ["lucide", `lucide-${eh(t)}`, a].join(" "),
        ...p
      },
      [
        ...e.map(([d, h]) => pe(d, h)),
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
const th = dn("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rh = dn("RefreshCcw", [
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
const nh = dn("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }]
]);
/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sh = dn("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), ih = un((t) => /* @__PURE__ */ A.jsx("slot", { children: /* @__PURE__ */ A.jsx("div", { className: t.v0, children: /* @__PURE__ */ A.jsxs("div", { className: t.v1, children: [
  /* @__PURE__ */ A.jsx("span", { className: t.v2, children: t.v3 }),
  /* @__PURE__ */ A.jsxs("div", { className: t.v4, style: t.v5, children: [
    t.v6,
    t.v7
  ] })
] }) }) }), {
  name: "Message_1",
  portals: ["v3", "v6", "v7"]
}), mr = ({
  message: t,
  children: e
}) => {
  const {
    customStyles: r,
    adminId: n,
    isForManager: s
  } = Ct(), i = t.isBot;
  return (
    /*@million jsx-skip*/
    /* @__PURE__ */ A.jsx(ih, { v0: pt("flex min-h-9 justify-end pl-8", {
      "justify-start pr-8 pl-0": i
    }), v1: pt("flex flex-col gap-1 w-full items-end", {
      "items-start": i
    }), v2: pt("flex items-center text-xs text-muted-foreground", {
      "justify-end": !i
    }), v3: s ? t.isBot ? "From bot" : "From user" : null, v4: pt("bg-primary rounded-md text-white flex items-center justify-end w-max p-2 max-w-72 text-wrap whitespace-pre-line", {
      "bg-muted text-neutral-900 justify-start": i
    }), v5: {
      wordBreak: "break-word",
      backgroundColor: i || r == null ? void 0 : r.color
    }, v6: t.message.trim().length ? t.message : null, v7: e })
  );
};
function rn() {
  return rn = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }, rn.apply(this, arguments);
}
function oh(t, e) {
  typeof t == "function" ? t(e) : t != null && (t.current = e);
}
function ah(...t) {
  return (e) => t.forEach(
    (r) => oh(r, e)
  );
}
const ya = /* @__PURE__ */ Zn((t, e) => {
  const { children: r, ...n } = t, s = lr.toArray(r), i = s.find(lh);
  if (i) {
    const o = i.props.children, a = s.map((l) => l === i ? lr.count(o) > 1 ? lr.only(null) : /* @__PURE__ */ _t(o) ? o.props.children : null : l);
    return /* @__PURE__ */ pe(Jn, rn({}, n, {
      ref: e
    }), /* @__PURE__ */ _t(o) ? /* @__PURE__ */ Mi(o, void 0, a) : null);
  }
  return /* @__PURE__ */ pe(Jn, rn({}, n, {
    ref: e
  }), r);
});
ya.displayName = "Slot";
const Jn = /* @__PURE__ */ Zn((t, e) => {
  const { children: r, ...n } = t;
  return /* @__PURE__ */ _t(r) ? /* @__PURE__ */ Mi(r, {
    ...uh(n, r.props),
    ref: e ? ah(e, r.ref) : r.ref
  }) : lr.count(r) > 1 ? lr.only(null) : null;
});
Jn.displayName = "SlotClone";
const ch = ({ children: t }) => /* @__PURE__ */ pe(St, null, t);
function lh(t) {
  return /* @__PURE__ */ _t(t) && t.type === ch;
}
function uh(t, e) {
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
function ga(t) {
  var e, r, n = "";
  if (typeof t == "string" || typeof t == "number")
    n += t;
  else if (typeof t == "object")
    if (Array.isArray(t))
      for (e = 0; e < t.length; e++)
        t[e] && (r = ga(t[e])) && (n && (n += " "), n += r);
    else
      for (e in t)
        t[e] && (n && (n += " "), n += e);
  return n;
}
function hh() {
  for (var t, e, r = 0, n = ""; r < arguments.length; )
    (t = arguments[r++]) && (e = ga(t)) && (n && (n += " "), n += e);
  return n;
}
const vi = (t) => typeof t == "boolean" ? "".concat(t) : t === 0 ? "0" : t, wi = hh, fh = (t, e) => (r) => {
  var n;
  if ((e == null ? void 0 : e.variants) == null)
    return wi(t, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: s, defaultVariants: i } = e, o = Object.keys(s).map((p) => {
    const u = r == null ? void 0 : r[p], d = i == null ? void 0 : i[p];
    if (u === null)
      return null;
    const h = vi(u) || vi(d);
    return s[p][h];
  }), a = r && Object.entries(r).reduce((p, u) => {
    let [d, h] = u;
    return h === void 0 || (p[d] = h), p;
  }, {}), l = e == null || (n = e.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((p, u) => {
    let { class: d, className: h, ...y } = u;
    return Object.entries(y).every((w) => {
      let [E, v] = w;
      return Array.isArray(v) ? v.includes({
        ...i,
        ...a
      }[E]) : {
        ...i,
        ...a
      }[E] === v;
    }) ? [
      ...p,
      d,
      h
    ] : p;
  }, []);
  return wi(t, o, l, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, dh = fh("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", {
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
}), pn = we.forwardRef(({
  className: t,
  variant: e,
  size: r,
  asChild: n = !1,
  ...s
}, i) => {
  const o = n ? ya : "button";
  return /* @__PURE__ */ A.jsx(o, { className: pt(dh({
    variant: e,
    size: r,
    className: t
  })), ref: i, ...s });
});
pn.displayName = "Button";
const ph = ({
  message: t
}) => {
  const {
    handleSendMessage: e,
    customStyles: r,
    handleClickButton: n,
    disabledButtons: s
  } = Ct(), i = r != null && r.color ? os(r.color) : null;
  return /* @__PURE__ */ A.jsxs("div", { className: "space-y-2", "data-buttons": !0, children: [
    /* @__PURE__ */ A.jsx(mr, { message: t }),
    /* @__PURE__ */ A.jsx("div", { className: "flex gap-1 items-center w-[80%] justify-center flex-wrap mx-auto", children: t.template.data.map((o) => /* @__PURE__ */ A.jsx(pn, { disabled: !!(s != null && s.find((a) => a === t.createdAt)), variant: "message", size: "sm", onClick: () => {
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
        No(o.url);
      }
      n == null || n(t.createdAt);
    }, style: {
      "--primary": i ? `${i.h} ${i.s}% ${i.l}%` : void 0
    }, children: o.title }, `${o.title}-${o.type}`)) })
  ] });
}, yh = un((t) => /* @__PURE__ */ A.jsxs("div", { className: "w-full space-y-1 text-center", children: [
  /* @__PURE__ */ A.jsx("img", { src: t.v0, alt: t.v1, className: "rounded-md object-cover h-full w-full" }),
  /* @__PURE__ */ A.jsx("h3", { className: "font-semibold", children: t.v2 }),
  /* @__PURE__ */ A.jsx("p", { className: "text-sm", children: t.v3 }),
  t.v4
] }), {
  name: "Card_1",
  portals: ["v2", "v3", "v4"]
}), gh = ({
  card: t
}) => {
  const {
    handleSendMessage: e,
    customStyles: r
  } = Ct(), n = r != null && r.color ? os(r.color) : null;
  return (
    /*@million jsx-skip*/
    /* @__PURE__ */ A.jsx(yh, { v0: t.image_url, v1: t.title, v2: t.title, v3: t.subtitle, v4: t.buttons && t.buttons.length > 0 && /* @__PURE__ */ A.jsx("div", { className: "w-full mt-2", children: t.buttons.map((s, i) => /* @__PURE__ */ A.jsx(pn, { variant: "message", className: "!rounded-md w-full", onClick: () => {
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
        No(s.url);
      }
    }, style: {
      "--primary": n ? `${n.h} ${n.s}% ${n.l}%` : void 0
    }, children: s.title }, i)) }) })
  );
}, mh = ({
  message: t
}) => /* @__PURE__ */ A.jsx("div", { className: "flex flex-col space-y-2 gap-1", children: t.template.data.map((e, r) => /* @__PURE__ */ A.jsx(mr, { message: t, children: /* @__PURE__ */ A.jsx(gh, { card: e }) }, r)) }), bh = () => /* @__PURE__ */ A.jsx(mr, { message: {
  isBot: !0,
  message: "",
  template: {},
  userId: "typing",
  createdAt: (/* @__PURE__ */ new Date()).toISOString()
}, children: /* @__PURE__ */ A.jsxs("div", { className: "flex space-x-1 h-full flex-1 items-center", children: [
  /* @__PURE__ */ A.jsx("div", { className: "w-1 h-1 bg-neutral-800 rounded-full animate-bounce [animation-delay:-0.3s]" }),
  /* @__PURE__ */ A.jsx("div", { className: "w-1 h-1 bg-neutral-800 rounded-full animate-bounce [animation-delay:-0.15s]" }),
  /* @__PURE__ */ A.jsx("div", { className: "w-1 h-1 bg-neutral-800 rounded-full animate-bounce" })
] }) }), vh = () => {
  const t = xe(null), {
    messages: e,
    isLoadingMessages: r
  } = Ct();
  Re(() => {
    t.current && t.current.scrollIntoView({
      behavior: "smooth"
    });
  }, [e]);
  const n = (s, i) => {
    var o, a;
    return (s == null ? void 0 : s.userId) === "typing" ? /* @__PURE__ */ A.jsx(bh, {}) : ((o = s == null ? void 0 : s.template) == null ? void 0 : o.type) === "list-button" ? /* @__PURE__ */ A.jsx(ph, { message: s }, `${s.createdAt}+${i}`) : ((a = s == null ? void 0 : s.template) == null ? void 0 : a.type) === "list-card" ? /* @__PURE__ */ A.jsx(mh, { message: s }, `${s.createdAt}+${i}`) : s.type === "image" ? /* @__PURE__ */ A.jsx(mr, { message: s, children: /* @__PURE__ */ A.jsx("img", { src: s.url, alt: "", className: "rounded-md object-cover h-full w-full" }) }) : /* @__PURE__ */ A.jsx(mr, { message: s }, `${s.createdAt}+${i}`);
  };
  return /* @__PURE__ */ A.jsx("div", { className: "p-2 flex-1 pr-3 overflow-y-auto", children: r ? /* @__PURE__ */ A.jsx("div", { children: /* @__PURE__ */ A.jsx(th, { className: "animate-spin w-4 h-4" }) }) : /* @__PURE__ */ A.jsxs("div", { className: "flex flex-col gap-1", children: [
    e.length > 0 && /* @__PURE__ */ A.jsx("div", { className: "text-center text-xs text-neutral-500 py-2", children: zr(e[0].createdAt).format("DD/MM/YYYY HH:mm") }),
    e.map((s, i) => /* @__PURE__ */ A.jsxs(St, { children: [
      i > 0 && zr(s.createdAt).diff(zr(e[i - 1].createdAt), "minutes") > 10 && /* @__PURE__ */ A.jsx("div", { className: "text-center text-xs text-neutral-500 py-2", children: zr(s.createdAt).format("DD/MM/YYYY HH:mm") }),
      n(s, i)
    ] }, i)),
    /* @__PURE__ */ A.jsx("div", { ref: t })
  ] }) });
}, wh = un((t) => /* @__PURE__ */ A.jsx("header", { className: "flex items-center bg-primary select-none h-[3.75rem]", style: t.v0, children: /* @__PURE__ */ A.jsxs("div", { className: "flex items-center  px-2 gap-2 justify-between w-full", children: [
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
}), xh = () => {
  const {
    handleClose: t,
    isShowClose: e,
    handleReload: r,
    customStyles: n,
    isForManager: s
  } = Ct();
  return (
    /*@million jsx-skip*/
    /* @__PURE__ */ A.jsx(wh, { v0: {
      backgroundColor: n == null ? void 0 : n.color
    }, v1: n != null && n.logoUrl ? /* @__PURE__ */ A.jsx("img", { src: n == null ? void 0 : n.logoUrl, alt: "logo", className: "w-8 h-8 rounded-full overflow-hidden object-cover" }) : /* @__PURE__ */ A.jsx("svg", { width: "32", height: "32", className: "text-neutral-700 fill-neutral-700 bg-neutral-700 rounded-full", children: /* @__PURE__ */ A.jsx("text", { "text-anchor": "middle", x: "50%", y: "50%", dy: "0.35em", fill: "#ffffff", "font-size": "1rem", children: "B" }) }), v2: (n == null ? void 0 : n.name) || "DialogueBot", v3: !s && /* @__PURE__ */ A.jsx("div", { className: "w-6 h-6 flex items-center justify-center cursor-pointer", onClick: r, children: /* @__PURE__ */ A.jsx(rh, { className: "w-4 h-4 text-white" }) }), v4: e && /* @__PURE__ */ A.jsx("div", { className: "w-6 h-6 flex items-center justify-center cursor-pointer", onClick: t, children: /* @__PURE__ */ A.jsx(sh, { className: "w-4 h-4 text-white" }) }) })
  );
}, ma = we.forwardRef(({
  className: t,
  type: e,
  ...r
}, n) => /* @__PURE__ */ A.jsx("input", { type: e, className: pt("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", t), ref: n, ...r }));
ma.displayName = "Input";
const Eh = () => {
  const {
    handleSendMessage: t,
    disableInput: e,
    customStyles: r
  } = Ct(), [n, s] = ct(""), i = (a) => {
    a.key === "Enter" && (a.preventDefault(), t({
      message: n
    }), s(""));
  }, o = r != null && r.color ? os(r.color) : null;
  return /* @__PURE__ */ A.jsxs("div", { className: "flex items-center py-2 px-3 gap-2 border-input border-t", children: [
    /* @__PURE__ */ A.jsx(ma, { className: "flex-1", placeholder: "Type a message...", value: n, onChange: (a) => s(a.target.value), onKeyDown: i, disabled: e, style: {
      "--primary": o ? `${o.h} ${o.s}% ${o.l}%` : void 0,
      "--ring": o ? `${o.h} ${o.s}% ${o.l}%` : void 0
    } }),
    /* @__PURE__ */ A.jsx(pn, { size: "icon", className: "flex-shrink-0", onClick: () => {
      t({
        message: n,
        cb: () => s("")
      });
    }, disabled: e, style: {
      "--primary": o ? `${o.h} ${o.s}% ${o.l}%` : void 0
    }, children: /* @__PURE__ */ A.jsx(nh, { className: "w-4 h-4" }) })
  ] });
}, _h = new al(), Sh = un((t) => /* @__PURE__ */ A.jsx("div", { className: t.v0, style: t.v1, children: /* @__PURE__ */ A.jsxs("div", { className: "flex flex-col h-full overflow-hidden w-full flex-1", children: [
  t.v2,
  /* @__PURE__ */ A.jsxs("div", { className: "flex-1 flex flex-col min-h-[1px]", children: [
    t.v3,
    t.v4
  ] })
] }) }), {
  name: "ChatBox_1",
  portals: ["v2", "v3", "v4"]
}), kh = ({
  className: t
}) => {
  const {
    customStyles: e,
    isForManager: r
  } = Ct();
  return (
    /*@million jsx-skip*/
    /* @__PURE__ */ A.jsx(Sh, { v0: pt("select-none w-full h-screen flex flex-col shadow chatbox", t), v1: {
      width: e == null ? void 0 : e.windowSize.width,
      height: e == null ? void 0 : e.windowSize.height
    }, v2: /* @__PURE__ */ A.jsx(xh, {}), v3: /* @__PURE__ */ A.jsx(vh, {}), v4: !r && /* @__PURE__ */ A.jsx(Eh, {}) })
  );
}, Ph = (t) => /* @__PURE__ */ A.jsx(hl, { client: _h, children: /* @__PURE__ */ A.jsx(bu, { ...t, children: /* @__PURE__ */ A.jsx(kh, { className: t.className }) }) });
export {
  Ph as ChatBox
};
//# sourceMappingURL=index.es.js.map
