var At = Object.defineProperty;
var jt = (e, t, r) => t in e ? At(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ee = (e, t, r) => jt(e, typeof t != "symbol" ? t + "" : t, r);
import Rt, { useState as J, useCallback as N, useMemo as te, useEffect as $, useRef as me, createContext as Re, useContext as Ie, useReducer as It, useLayoutEffect as Lt, forwardRef as Z, useImperativeHandle as Pt } from "react";
var Ne = { exports: {} }, ke = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function Mt() {
  if (We) return ke;
  We = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(o, n, i) {
    var a = null;
    if (i !== void 0 && (a = "" + i), n.key !== void 0 && (a = "" + n.key), "key" in n) {
      i = {};
      for (var l in n)
        l !== "key" && (i[l] = n[l]);
    } else i = n;
    return n = i.ref, {
      $$typeof: e,
      type: o,
      key: a,
      ref: n !== void 0 ? n : null,
      props: i
    };
  }
  return ke.Fragment = t, ke.jsx = r, ke.jsxs = r, ke;
}
var Se = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ke;
function _t() {
  return Ke || (Ke = 1, process.env.NODE_ENV !== "production" && function() {
    function e(m) {
      if (m == null) return null;
      if (typeof m == "function")
        return m.$$typeof === V ? null : m.displayName || m.name || null;
      if (typeof m == "string") return m;
      switch (m) {
        case h:
          return "Fragment";
        case u:
          return "Profiler";
        case c:
          return "StrictMode";
        case E:
          return "Suspense";
        case C:
          return "SuspenseList";
        case A:
          return "Activity";
      }
      if (typeof m == "object")
        switch (typeof m.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), m.$$typeof) {
          case s:
            return "Portal";
          case d:
            return (m.displayName || "Context") + ".Provider";
          case w:
            return (m._context.displayName || "Context") + ".Consumer";
          case v:
            var R = m.render;
            return m = m.displayName, m || (m = R.displayName || R.name || "", m = m !== "" ? "ForwardRef(" + m + ")" : "ForwardRef"), m;
          case I:
            return R = m.displayName || null, R !== null ? R : e(m.type) || "Memo";
          case b:
            R = m._payload, m = m._init;
            try {
              return e(m(R));
            } catch {
            }
        }
      return null;
    }
    function t(m) {
      return "" + m;
    }
    function r(m) {
      try {
        t(m);
        var R = !1;
      } catch {
        R = !0;
      }
      if (R) {
        R = console;
        var O = R.error, M = typeof Symbol == "function" && Symbol.toStringTag && m[Symbol.toStringTag] || m.constructor.name || "Object";
        return O.call(
          R,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          M
        ), t(m);
      }
    }
    function o(m) {
      if (m === h) return "<>";
      if (typeof m == "object" && m !== null && m.$$typeof === b)
        return "<...>";
      try {
        var R = e(m);
        return R ? "<" + R + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var m = _.A;
      return m === null ? null : m.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function a(m) {
      if (B.call(m, "key")) {
        var R = Object.getOwnPropertyDescriptor(m, "key").get;
        if (R && R.isReactWarning) return !1;
      }
      return m.key !== void 0;
    }
    function l(m, R) {
      function O() {
        G || (G = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          R
        ));
      }
      O.isReactWarning = !0, Object.defineProperty(m, "key", {
        get: O,
        configurable: !0
      });
    }
    function f() {
      var m = e(this.type);
      return K[m] || (K[m] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), m = this.props.ref, m !== void 0 ? m : null;
    }
    function g(m, R, O, M, U, Y, de, W) {
      return O = Y.ref, m = {
        $$typeof: p,
        type: m,
        key: R,
        props: Y,
        _owner: U
      }, (O !== void 0 ? O : null) !== null ? Object.defineProperty(m, "ref", {
        enumerable: !1,
        get: f
      }) : Object.defineProperty(m, "ref", { enumerable: !1, value: null }), m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(m, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(m, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: de
      }), Object.defineProperty(m, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: W
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    }
    function x(m, R, O, M, U, Y, de, W) {
      var H = R.children;
      if (H !== void 0)
        if (M)
          if (P(H)) {
            for (M = 0; M < H.length; M++)
              S(H[M]);
            Object.freeze && Object.freeze(H);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else S(H);
      if (B.call(R, "key")) {
        H = e(m);
        var Q = Object.keys(R).filter(function(xe) {
          return xe !== "key";
        });
        M = 0 < Q.length ? "{key: someKey, " + Q.join(": ..., ") + ": ...}" : "{key: someKey}", oe[H + M] || (Q = 0 < Q.length ? "{" + Q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          M,
          H,
          Q,
          H
        ), oe[H + M] = !0);
      }
      if (H = null, O !== void 0 && (r(O), H = "" + O), a(R) && (r(R.key), H = "" + R.key), "key" in R) {
        O = {};
        for (var ie in R)
          ie !== "key" && (O[ie] = R[ie]);
      } else O = R;
      return H && l(
        O,
        typeof m == "function" ? m.displayName || m.name || "Unknown" : m
      ), g(
        m,
        H,
        Y,
        U,
        n(),
        O,
        de,
        W
      );
    }
    function S(m) {
      typeof m == "object" && m !== null && m.$$typeof === p && m._store && (m._store.validated = 1);
    }
    var y = Rt, p = Symbol.for("react.transitional.element"), s = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), w = Symbol.for("react.consumer"), d = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), A = Symbol.for("react.activity"), V = Symbol.for("react.client.reference"), _ = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = Object.prototype.hasOwnProperty, P = Array.isArray, D = console.createTask ? console.createTask : function() {
      return null;
    };
    y = {
      react_stack_bottom_frame: function(m) {
        return m();
      }
    };
    var G, K = {}, q = y.react_stack_bottom_frame.bind(
      y,
      i
    )(), j = D(o(i)), oe = {};
    Se.Fragment = h, Se.jsx = function(m, R, O, M, U) {
      var Y = 1e4 > _.recentlyCreatedOwnerStacks++;
      return x(
        m,
        R,
        O,
        !1,
        M,
        U,
        Y ? Error("react-stack-top-frame") : q,
        Y ? D(o(m)) : j
      );
    }, Se.jsxs = function(m, R, O, M, U) {
      var Y = 1e4 > _.recentlyCreatedOwnerStacks++;
      return x(
        m,
        R,
        O,
        !0,
        M,
        U,
        Y ? Error("react-stack-top-frame") : q,
        Y ? D(o(m)) : j
      );
    };
  }()), Se;
}
process.env.NODE_ENV === "production" ? Ne.exports = Mt() : Ne.exports = _t();
var k = Ne.exports;
function Je(e) {
  var t, r, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var n = e.length;
    for (t = 0; t < n; t++) e[t] && (r = Je(e[t])) && (o && (o += " "), o += r);
  } else for (r in e) e[r] && (o && (o += " "), o += r);
  return o;
}
function le() {
  for (var e, t, r = 0, o = "", n = arguments.length; r < n; r++) (e = arguments[r]) && (t = Je(e)) && (o && (o += " "), o += t);
  return o;
}
const $e = "-", Nt = (e) => {
  const t = Dt(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (a) => {
      const l = a.split($e);
      return l[0] === "" && l.length !== 1 && l.shift(), Ze(l, t) || Ot(a);
    },
    getConflictingClassGroupIds: (a, l) => {
      const f = r[a] || [];
      return l && o[a] ? [...f, ...o[a]] : f;
    }
  };
}, Ze = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], o = t.nextPart.get(r), n = o ? Ze(e.slice(1), o) : void 0;
  if (n)
    return n;
  if (t.validators.length === 0)
    return;
  const i = e.join($e);
  return (a = t.validators.find(({
    validator: l
  }) => l(i))) == null ? void 0 : a.classGroupId;
}, He = /^\[(.+)\]$/, Ot = (e) => {
  if (He.test(e)) {
    const t = He.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, Dt = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const n in r)
    Oe(r[n], o, n, t);
  return o;
}, Oe = (e, t, r, o) => {
  e.forEach((n) => {
    if (typeof n == "string") {
      const i = n === "" ? t : Fe(t, n);
      i.classGroupId = r;
      return;
    }
    if (typeof n == "function") {
      if (Vt(n)) {
        Oe(n(o), t, r, o);
        return;
      }
      t.validators.push({
        validator: n,
        classGroupId: r
      });
      return;
    }
    Object.entries(n).forEach(([i, a]) => {
      Oe(a, Fe(t, i), r, o);
    });
  });
}, Fe = (e, t) => {
  let r = e;
  return t.split($e).forEach((o) => {
    r.nextPart.has(o) || r.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(o);
  }), r;
}, Vt = (e) => e.isThemeGetter, $t = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const n = (i, a) => {
    r.set(i, a), t++, t > e && (t = 0, o = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(i) {
      let a = r.get(i);
      if (a !== void 0)
        return a;
      if ((a = o.get(i)) !== void 0)
        return n(i, a), a;
    },
    set(i, a) {
      r.has(i) ? r.set(i, a) : n(i, a);
    }
  };
}, De = "!", Ve = ":", Bt = Ve.length, Gt = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let o = (n) => {
    const i = [];
    let a = 0, l = 0, f = 0, g;
    for (let s = 0; s < n.length; s++) {
      let h = n[s];
      if (a === 0 && l === 0) {
        if (h === Ve) {
          i.push(n.slice(f, s)), f = s + Bt;
          continue;
        }
        if (h === "/") {
          g = s;
          continue;
        }
      }
      h === "[" ? a++ : h === "]" ? a-- : h === "(" ? l++ : h === ")" && l--;
    }
    const x = i.length === 0 ? n : n.substring(f), S = Ut(x), y = S !== x, p = g && g > f ? g - f : void 0;
    return {
      modifiers: i,
      hasImportantModifier: y,
      baseClassName: S,
      maybePostfixModifierPosition: p
    };
  };
  if (t) {
    const n = t + Ve, i = o;
    o = (a) => a.startsWith(n) ? i(a.substring(n.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: a,
      maybePostfixModifierPosition: void 0
    };
  }
  if (r) {
    const n = o;
    o = (i) => r({
      className: i,
      parseClassName: n
    });
  }
  return o;
}, Ut = (e) => e.endsWith(De) ? e.substring(0, e.length - 1) : e.startsWith(De) ? e.substring(1) : e, Wt = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((o) => [o, !0]));
  return (o) => {
    if (o.length <= 1)
      return o;
    const n = [];
    let i = [];
    return o.forEach((a) => {
      a[0] === "[" || t[a] ? (n.push(...i.sort(), a), i = []) : i.push(a);
    }), n.push(...i.sort()), n;
  };
}, Kt = (e) => ({
  cache: $t(e.cacheSize),
  parseClassName: Gt(e),
  sortModifiers: Wt(e),
  ...Nt(e)
}), Ht = /\s+/, Ft = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: o,
    getConflictingClassGroupIds: n,
    sortModifiers: i
  } = t, a = [], l = e.trim().split(Ht);
  let f = "";
  for (let g = l.length - 1; g >= 0; g -= 1) {
    const x = l[g], {
      isExternal: S,
      modifiers: y,
      hasImportantModifier: p,
      baseClassName: s,
      maybePostfixModifierPosition: h
    } = r(x);
    if (S) {
      f = x + (f.length > 0 ? " " + f : f);
      continue;
    }
    let c = !!h, u = o(c ? s.substring(0, h) : s);
    if (!u) {
      if (!c) {
        f = x + (f.length > 0 ? " " + f : f);
        continue;
      }
      if (u = o(s), !u) {
        f = x + (f.length > 0 ? " " + f : f);
        continue;
      }
      c = !1;
    }
    const w = i(y).join(":"), d = p ? w + De : w, v = d + u;
    if (a.includes(v))
      continue;
    a.push(v);
    const E = n(u, c);
    for (let C = 0; C < E.length; ++C) {
      const I = E[C];
      a.push(d + I);
    }
    f = x + (f.length > 0 ? " " + f : f);
  }
  return f;
};
function qt() {
  let e = 0, t, r, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Xe(t)) && (o && (o += " "), o += r);
  return o;
}
const Xe = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = Xe(e[o])) && (r && (r += " "), r += t);
  return r;
};
function Yt(e, ...t) {
  let r, o, n, i = a;
  function a(f) {
    const g = t.reduce((x, S) => S(x), e());
    return r = Kt(g), o = r.cache.get, n = r.cache.set, i = l, l(f);
  }
  function l(f) {
    const g = o(f);
    if (g)
      return g;
    const x = Ft(f, r);
    return n(f, x), x;
  }
  return function() {
    return i(qt.apply(null, arguments));
  };
}
const F = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Qe = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, et = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Jt = /^\d+\/\d+$/, Zt = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Xt = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Qt = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, er = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, tr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ue = (e) => Jt.test(e), L = (e) => !!e && !Number.isNaN(Number(e)), ae = (e) => !!e && Number.isInteger(Number(e)), Pe = (e) => e.endsWith("%") && L(e.slice(0, -1)), se = (e) => Zt.test(e), rr = () => !0, or = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Xt.test(e) && !Qt.test(e)
), tt = () => !1, nr = (e) => er.test(e), sr = (e) => tr.test(e), ir = (e) => !z(e) && !T(e), ar = (e) => ge(e, nt, tt), z = (e) => Qe.test(e), ce = (e) => ge(e, st, or), Me = (e) => ge(e, fr, L), qe = (e) => ge(e, rt, tt), lr = (e) => ge(e, ot, sr), Ce = (e) => ge(e, it, nr), T = (e) => et.test(e), ze = (e) => ye(e, st), cr = (e) => ye(e, pr), Ye = (e) => ye(e, rt), dr = (e) => ye(e, nt), ur = (e) => ye(e, ot), Ae = (e) => ye(e, it, !0), ge = (e, t, r) => {
  const o = Qe.exec(e);
  return o ? o[1] ? t(o[1]) : r(o[2]) : !1;
}, ye = (e, t, r = !1) => {
  const o = et.exec(e);
  return o ? o[1] ? t(o[1]) : r : !1;
}, rt = (e) => e === "position" || e === "percentage", ot = (e) => e === "image" || e === "url", nt = (e) => e === "length" || e === "size" || e === "bg-size", st = (e) => e === "length", fr = (e) => e === "number", pr = (e) => e === "family-name", it = (e) => e === "shadow", mr = () => {
  const e = F("color"), t = F("font"), r = F("text"), o = F("font-weight"), n = F("tracking"), i = F("leading"), a = F("breakpoint"), l = F("container"), f = F("spacing"), g = F("radius"), x = F("shadow"), S = F("inset-shadow"), y = F("text-shadow"), p = F("drop-shadow"), s = F("blur"), h = F("perspective"), c = F("aspect"), u = F("ease"), w = F("animate"), d = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], v = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], E = () => [...v(), T, z], C = () => ["auto", "hidden", "clip", "visible", "scroll"], I = () => ["auto", "contain", "none"], b = () => [T, z, f], A = () => [ue, "full", "auto", ...b()], V = () => [ae, "none", "subgrid", T, z], _ = () => ["auto", {
    span: ["full", ae, T, z]
  }, ae, T, z], B = () => [ae, "auto", T, z], P = () => ["auto", "min", "max", "fr", T, z], D = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], G = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], K = () => ["auto", ...b()], q = () => [ue, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...b()], j = () => [e, T, z], oe = () => [...v(), Ye, qe, {
    position: [T, z]
  }], m = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], R = () => ["auto", "cover", "contain", dr, ar, {
    size: [T, z]
  }], O = () => [Pe, ze, ce], M = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    g,
    T,
    z
  ], U = () => ["", L, ze, ce], Y = () => ["solid", "dashed", "dotted", "double"], de = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], W = () => [L, Pe, Ye, qe], H = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    s,
    T,
    z
  ], Q = () => ["none", L, T, z], ie = () => ["none", L, T, z], xe = () => [L, T, z], Ee = () => [ue, "full", ...b()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [se],
      breakpoint: [se],
      color: [rr],
      container: [se],
      "drop-shadow": [se],
      ease: ["in", "out", "in-out"],
      font: [ir],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [se],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [se],
      shadow: [se],
      spacing: ["px", L],
      text: [se],
      "text-shadow": [se],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", ue, z, T, c]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [L, z, T, l]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": d()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": d()
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
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
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
        object: E()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: C()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": C()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": C()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: I()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": I()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": I()
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
        inset: A()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": A()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": A()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: A()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: A()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: A()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: A()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: A()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: A()
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
        z: [ae, "auto", T, z]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [ue, "full", "auto", l, ...b()]
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
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [L, ue, "auto", "initial", "none", z]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", L, T, z]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", L, T, z]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [ae, "first", "last", "none", T, z]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": V()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: _()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": B()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": B()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": V()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: _()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": B()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": B()
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
        "auto-cols": P()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": P()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: b()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": b()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": b()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...D(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...G(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...G()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...D()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...G(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...G(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": D()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...G(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...G()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: b()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: b()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: b()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: b()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: b()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: b()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: b()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: b()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: b()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: K()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: K()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: K()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: K()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: K()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: K()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: K()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: K()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: K()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": b()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": b()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: q()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [l, "screen", ...q()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          l,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...q()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          l,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [a]
          },
          ...q()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...q()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...q()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...q()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, ze, ce]
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
        font: [o, T, Me]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Pe, z]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [cr, z, t]
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
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [n, T, z]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [L, "none", T, Me]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          i,
          ...b()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", T, z]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", T, z]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: j()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: j()
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
        decoration: [...Y(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [L, "from-font", "auto", T, ce]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: j()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [L, "auto", T, z]
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
        indent: b()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", T, z]
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
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
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
        content: ["none", T, z]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
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
        bg: oe()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: m()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: R()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, ae, T, z],
          radial: ["", T, z],
          conic: [ae, T, z]
        }, ur, lr]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: j()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: O()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: O()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: O()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: j()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: j()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: j()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: M()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": M()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": M()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": M()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": M()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": M()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": M()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": M()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": M()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": M()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": M()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": M()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": M()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": M()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": M()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: U()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": U()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": U()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": U()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": U()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": U()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": U()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": U()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": U()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": U()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": U()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...Y(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...Y(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: j()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": j()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": j()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": j()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": j()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": j()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": j()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": j()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": j()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: j()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...Y(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [L, T, z]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", L, ze, ce]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: j()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          x,
          Ae,
          Ce
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: j()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", S, Ae, Ce]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": j()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: U()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: j()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [L, ce]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": j()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": U()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": j()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", y, Ae, Ce]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": j()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [L, T, z]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...de(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": de()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [L]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": W()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": W()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": j()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": j()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": W()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": W()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": j()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": j()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": W()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": W()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": j()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": j()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": W()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": W()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": j()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": j()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": W()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": W()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": j()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": j()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": W()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": W()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": j()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": j()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": W()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": W()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": j()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": j()
      }],
      "mask-image-radial": [{
        "mask-radial": [T, z]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": W()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": W()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": j()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": j()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": v()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [L]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": W()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": W()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": j()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": j()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: oe()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: m()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: R()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", T, z]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          T,
          z
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: H()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [L, T, z]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [L, T, z]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          p,
          Ae,
          Ce
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": j()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", L, T, z]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [L, T, z]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", L, T, z]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [L, T, z]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", L, T, z]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          T,
          z
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": H()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [L, T, z]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [L, T, z]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", L, T, z]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [L, T, z]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", L, T, z]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [L, T, z]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [L, T, z]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", L, T, z]
      }],
      // --------------
      // --- Tables ---
      // --------------
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
        "border-spacing": b()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": b()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": b()
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
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", T, z]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [L, "initial", T, z]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", u, T, z]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [L, T, z]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", w, T, z]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [h, T, z]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": E()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Q()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Q()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Q()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Q()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ie()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ie()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ie()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ie()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: xe()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": xe()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": xe()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [T, z, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: E()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: Ee()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Ee()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Ee()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Ee()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: j()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: j()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", T, z]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
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
        "scroll-m": b()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": b()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": b()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": b()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": b()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": b()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": b()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": b()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": b()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": b()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": b()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": b()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": b()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": b()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": b()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": b()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": b()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": b()
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
        "will-change": ["auto", "scroll", "contents", "transform", T, z]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...j()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [L, ze, ce, Me]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...j()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
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
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
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
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, hr = /* @__PURE__ */ Yt(mr);
function X(...e) {
  return hr(le(e));
}
const br = {
  mobile: {
    type: "dock",
    breakpoint: 0,
    maxWidth: 767
  },
  tablet: {
    type: "tabs",
    breakpoint: 768,
    minWidth: 768,
    maxWidth: 1023
  },
  desktop: {
    type: "grid",
    breakpoint: 1024,
    minWidth: 1024
  }
};
function at(e = br) {
  const [t, r] = J(() => typeof window > "u" ? { width: 1024, height: 768, orientation: "landscape" } : {
    width: window.innerWidth,
    height: window.innerHeight,
    orientation: window.innerWidth > window.innerHeight ? "landscape" : "portrait"
  }), [o, n] = J(null), i = N(() => {
    if (typeof window > "u") return;
    const s = {
      width: window.innerWidth,
      height: window.innerHeight,
      orientation: window.innerWidth > window.innerHeight ? "landscape" : "portrait"
    };
    r(s);
  }, []), a = te(() => {
    var h;
    if (o && e[o])
      return o;
    const s = Object.entries(e).filter(([c, u]) => {
      if (u.matcher)
        return u.matcher(t);
      const w = !u.minWidth || t.width >= u.minWidth, d = !u.maxWidth || t.width <= u.maxWidth;
      return w && d;
    });
    return s.sort(([, c], [, u]) => {
      const w = (c.minWidth ? 1 : 0) + (c.maxWidth ? 1 : 0);
      return (u.minWidth ? 1 : 0) + (u.maxWidth ? 1 : 0) - w;
    }), ((h = s[0]) == null ? void 0 : h[0]) || Object.keys(e)[0] || "desktop";
  }, [t, e, o]), l = te(() => e[a], [e, a]), f = te(() => (l == null ? void 0 : l.type) || "grid", [l]), g = N((s) => {
    if (s && !e[s]) {
      console.warn(`Mode "${s}" not found in configuration`);
      return;
    }
    n(s);
  }, [e]), x = N((s) => a === s, [a]), S = te(() => Object.keys(e), [e]), y = N((s) => {
    switch (f) {
      case "grid":
        return ["resizing", "dividers", "collapse"].includes(s);
      case "tabs":
        return s === "tabs";
      case "dock":
        return s === "dock";
      default:
        return !1;
    }
  }, [f]), p = te(() => {
    const s = Object.entries(e).map(([w, d]) => ({ name: w, ...d })).sort((w, d) => (w.breakpoint || 0) - (d.breakpoint || 0)), h = s.findIndex((w) => w.name === a), c = s[h + 1], u = s[h - 1];
    return {
      current: a,
      currentBreakpoint: (l == null ? void 0 : l.breakpoint) || 0,
      nextMode: c == null ? void 0 : c.name,
      nextBreakpoint: c == null ? void 0 : c.breakpoint,
      prevMode: u == null ? void 0 : u.name,
      prevBreakpoint: u == null ? void 0 : u.breakpoint,
      isSmallest: h === 0,
      isLargest: h === s.length - 1
    };
  }, [e, a, l]);
  return $(() => {
    if (typeof window > "u") return;
    const s = () => i(), h = () => {
      setTimeout(i, 100);
    };
    return window.addEventListener("resize", s), window.addEventListener("orientationchange", h), () => {
      window.removeEventListener("resize", s), window.removeEventListener("orientationchange", h);
    };
  }, [i]), {
    // Current state
    viewport: t,
    activeMode: a,
    currentModeConfig: l,
    currentLayoutType: f,
    // Mode management
    setMode: g,
    isMode: x,
    availableModes: S,
    // Features and capabilities
    supportsFeature: y,
    breakpointInfo: p,
    // Utilities
    isForced: !!o,
    updateViewport: i
  };
}
const ne = "pretty-poly-grid-", be = {
  save: (e, t) => {
    try {
      localStorage.setItem(e, JSON.stringify(t));
    } catch (r) {
      console.warn("Failed to save to localStorage:", r);
    }
  },
  load: (e) => {
    try {
      const t = localStorage.getItem(e);
      return t ? JSON.parse(t) : null;
    } catch (t) {
      return console.warn("Failed to load from localStorage:", t), null;
    }
  },
  remove: (e) => {
    try {
      localStorage.removeItem(e);
    } catch (t) {
      console.warn("Failed to remove from localStorage:", t);
    }
  },
  clear: () => {
    try {
      const e = [];
      for (let t = 0; t < localStorage.length; t++) {
        const r = localStorage.key(t);
        r && r.startsWith(ne) && e.push(r);
      }
      e.forEach((t) => localStorage.removeItem(t));
    } catch (e) {
      console.warn("Failed to clear localStorage:", e);
    }
  }
}, lt = {
  save: (e, t) => {
    try {
      sessionStorage.setItem(e, JSON.stringify(t));
    } catch (r) {
      console.warn("Failed to save to sessionStorage:", r);
    }
  },
  load: (e) => {
    try {
      const t = sessionStorage.getItem(e);
      return t ? JSON.parse(t) : null;
    } catch (t) {
      return console.warn("Failed to load from sessionStorage:", t), null;
    }
  },
  remove: (e) => {
    try {
      sessionStorage.removeItem(e);
    } catch (t) {
      console.warn("Failed to remove from sessionStorage:", t);
    }
  },
  clear: () => {
    try {
      const e = [];
      for (let t = 0; t < sessionStorage.length; t++) {
        const r = sessionStorage.key(t);
        r && r.startsWith(ne) && e.push(r);
      }
      e.forEach((t) => sessionStorage.removeItem(t));
    } catch (e) {
      console.warn("Failed to clear sessionStorage:", e);
    }
  }
}, pe = /* @__PURE__ */ new Map(), je = {
  save: (e, t) => {
    pe.set(e, t);
  },
  load: (e) => pe.get(e) || null,
  remove: (e) => {
    pe.delete(e);
  },
  clear: () => {
    for (const e of pe.keys())
      e.startsWith(ne) && pe.delete(e);
  }
};
function _e(e) {
  switch (e) {
    case "localStorage":
      return typeof localStorage < "u" ? be : je;
    case "sessionStorage":
      return typeof sessionStorage < "u" ? lt : je;
    case "memory":
    default:
      return je;
  }
}
function Be(e) {
  return `${ne}${e}`;
}
function gr(e, t, r = be) {
  const o = Be(e), n = {
    blocks: t.blocks,
    activeMode: t.activeMode
    // Don't persist viewport or transient state like activeDivider
  };
  r.save(o, n);
}
function yr(e, t = be) {
  const r = Be(e);
  return t.load(r);
}
function wr(e, t = be) {
  const r = Be(e);
  t.remove(r);
}
function Wr(e = be) {
  const t = {};
  try {
    if (e === be && typeof localStorage < "u")
      for (let r = 0; r < localStorage.length; r++) {
        const o = localStorage.key(r);
        if (o && o.startsWith(ne)) {
          const n = o.substring(ne.length), i = e.load(o);
          i && (t[n] = i);
        }
      }
    else if (e === lt && typeof sessionStorage < "u")
      for (let r = 0; r < sessionStorage.length; r++) {
        const o = sessionStorage.key(r);
        if (o && o.startsWith(ne)) {
          const n = o.substring(ne.length), i = e.load(o);
          i && (t[n] = i);
        }
      }
    else if (e === je) {
      for (const r of pe.keys())
        if (r.startsWith(ne)) {
          const o = r.substring(ne.length), n = e.load(r);
          n && (t[o] = n);
        }
    }
  } catch (r) {
    console.warn("Failed to get all grid states:", r);
  }
  return t;
}
function vr(e) {
  return {
    save: (t, r) => e(r),
    load: () => null,
    // Custom adapters typically don't load
    remove: () => {
    },
    clear: () => {
    }
  };
}
function xr({
  gridId: e,
  enabled: t,
  state: r,
  onStateLoad: o,
  autoSave: n = !0,
  saveDelay: i = 500
}) {
  const a = me(null), l = me(), f = me(""), g = me(!1);
  $(() => {
    if (!t) {
      a.current = null;
      return;
    }
    typeof t == "function" ? a.current = vr(t) : t === "localStorage" ? a.current = _e("localStorage") : t === "sessionStorage" ? a.current = _e("sessionStorage") : a.current = _e("localStorage");
  }, [t]), $(() => {
    if (!a.current || !t || typeof t == "function" || g.current)
      return;
    const s = yr(e, a.current);
    s && (o == null || o(s), g.current = !0);
  }, [e, t]);
  const x = N((s = r) => {
    if (!a.current || !t)
      return;
    const h = JSON.stringify(s);
    if (h !== f.current)
      try {
        gr(e, s, a.current), f.current = h;
      } catch (c) {
        console.warn("Failed to save grid state:", c);
      }
  }, [e, t, r]), S = N((s = r) => {
    l.current && clearTimeout(l.current), l.current = setTimeout(() => {
      x(s);
    }, i);
  }, [x, i, r]), y = N(() => {
    if (!(!a.current || !t || typeof t == "function"))
      try {
        wr(e, a.current), f.current = "";
      } catch (s) {
        console.warn("Failed to clear grid state:", s);
      }
  }, [e, t]), p = N((s = r) => {
    l.current && clearTimeout(l.current), x(s);
  }, [x, r]);
  return $(() => {
    if (!(!n || !t))
      return S(r), () => {
        l.current && clearTimeout(l.current);
      };
  }, [r, n, t, S]), $(() => {
    if (!t || typeof t == "function")
      return;
    const s = () => {
      p();
    };
    return window.addEventListener("beforeunload", s), () => {
      window.removeEventListener("beforeunload", s);
    };
  }, [p, t]), $(() => () => {
    l.current && clearTimeout(l.current);
  }, []), {
    saveState: p,
    debouncedSave: S,
    clearState: y,
    isEnabled: !!t
  };
}
function ct(e, t, r) {
  return Math.max(0, e - t - r);
}
function Kr(e, t) {
  return t > 0 ? e / t : 0;
}
function he(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
function Hr(e, t) {
  return t > 0 && e <= t;
}
function kr(e, t, r, o, n) {
  if (r === 0)
    return e;
  const i = t <= r, a = o * 2.5;
  return i && e > a ? n : e < r && !i ? o : e;
}
function Sr(e, t, r = 0, o = 1 / 0, n = !1) {
  const i = n ? -e : e, a = t + i;
  return he(a, r, o);
}
function zr(e, t, r) {
  const o = [];
  return (r ? e.filter((i) => !r.has(i.id)) : e).forEach((i) => {
    if (i.sizeUnit === "auto")
      o.push("auto");
    else if (i.sizeUnit === "px") {
      const a = t ? `--${t}-${i.id}-size` : `--${i.id}-size`;
      o.push(`var(${a}, ${i.size}px)`);
    } else {
      const a = t ? `--${t}-${i.id}-size` : `--${i.id}-size`;
      o.push(`var(${a}, ${i.size}fr)`);
    }
  }), o.join(" ");
}
function Fr(e, t) {
  return e * t;
}
function Tr(e, t) {
  return t > 0 ? e / t : 0;
}
function qr(e, t, r) {
  return r === "start" ? e > 0 ? t[e - 1] : null : e < t.length - 1 ? t[e + 1] : null;
}
function Yr(e, t, r = 1e-3) {
  return Math.abs(e + t) <= r;
}
function Er(e, t) {
  const r = N((a) => "touches" in a ? {
    x: a.touches[0].clientX,
    y: a.touches[0].clientY
  } : {
    x: a.clientX,
    y: a.clientY
  }, []), o = N((a, l, f) => {
    const g = e.blocks[a];
    if (!g) return;
    if (g.resizable === !1) {
      console.warn(`Cannot resize block "${a}" - block is marked as non-resizable.`);
      return;
    }
    const x = r(f), S = document.querySelector(`[data-divider-id="${l}"]`), y = (S == null ? void 0 : S.getAttribute("data-divider-position")) || "end", s = Object.values(e.blocks).filter(
      (d) => d.parentId === g.parentId
    ).sort(
      (d, v) => (d.order || 0) - (v.order || 0)
    ), h = s.findIndex((d) => d.id === a);
    let c = null;
    if (y === "start" && h > 0 ? c = s[h - 1] : y === "end" && h < s.length - 1 && (c = s[h + 1]), c && c.resizable === !1) {
      console.warn(
        `Cannot resize block "${a}" - adjacent block "${c.id}" is marked as non-resizable.`
      );
      return;
    }
    if (c && g.sizeUnit === "fr" && c.sizeUnit === "px") {
      console.warn(
        `Cannot resize fr block "${a}" when adjacent to px block "${c.id}". Fr blocks fill available space and should not be directly resized. Consider resizing the px block instead.`
      );
      return;
    }
    t({
      type: "START_RESIZE",
      payload: {
        blockId: a,
        dividerId: l,
        startPosition: x,
        initialSize: g.defaultSize || 0,
        initialAdjacentBlockId: c == null ? void 0 : c.id,
        initialAdjacentSize: c ? c.originalDefaultSize || c.defaultSize || 0 : void 0
      }
    }), document.body.style.userSelect = "none";
    const u = g.parentId ? e.blocks[g.parentId] : null, w = (u == null ? void 0 : u.direction) || "row";
    document.body.style.cursor = w === "row" ? "col-resize" : "row-resize";
  }, [e.blocks, t, r]), n = N((a) => {
    if (!e.resize.isDragging || !e.resize.activeBlockId) return;
    const l = e.blocks[e.resize.activeBlockId];
    if (!l) return;
    const f = r(a), g = l.parentId ? e.blocks[l.parentId] : null, x = (g == null ? void 0 : g.direction) || "row", S = x === "row" ? f.x - e.resize.startPosition.x : f.y - e.resize.startPosition.y;
    if (l.sizeUnit === "px") {
      const y = document.querySelector(`[data-divider-id="${e.resize.activeDividerId}"]`), s = ((y == null ? void 0 : y.getAttribute("data-divider-position")) || "end") === "start", h = Sr(
        S,
        e.resize.initialSize,
        l.minSize,
        l.maxSize,
        s
      );
      t({
        type: "RESIZE_BLOCK",
        payload: { blockId: e.resize.activeBlockId, size: h }
      });
    } else if (l.sizeUnit === "fr") {
      const y = Object.values(e.blocks).filter(
        (P) => P.parentId === l.parentId
      ), p = y.filter((P) => P.sizeUnit === "fr"), s = l.parentId ? document.querySelector(`[data-block-id="${l.parentId}"]`) : document.querySelector('[data-block-id="root"]'), h = s ? x === "row" ? s.clientWidth : s.clientHeight : 1200, c = y.filter((P) => P.sizeUnit === "px").reduce((P, D) => {
        const G = document.querySelector(`[data-block-id="${D.id}"]`);
        if (!G) return P;
        const K = x === "row" ? G.clientWidth : G.clientHeight;
        return P + K;
      }, 0), w = Array.from(
        (s == null ? void 0 : s.querySelectorAll('[data-block-type="divider"]')) || []
      ).reduce((P, D) => {
        if (!(D instanceof HTMLElement)) return P;
        const G = x === "row" ? D.clientWidth : D.clientHeight;
        return P + G;
      }, 0), v = ct(h, c, w), E = p.reduce(
        (P, D) => P + (D.defaultSize || 1),
        0
      ), C = E > 0 ? v / E : 0;
      if (C === 0) return;
      const I = Tr(S, C), b = p.sort(
        (P, D) => (P.order || 0) - (D.order || 0)
      ), A = b.findIndex(
        (P) => P.id === e.resize.activeBlockId
      ), V = document.querySelector(`[data-divider-id="${e.resize.activeDividerId}"]`), _ = (V == null ? void 0 : V.getAttribute("data-divider-position")) || "end";
      let B = null;
      if (_ === "start" && A > 0 ? B = b[A - 1] : _ === "end" && A < b.length - 1 && (B = b[A + 1]), B) {
        let P, D;
        P = I, D = -I;
        const G = 0.1, K = Math.max(
          G,
          e.resize.initialSize + P
        ), q = Math.max(
          G,
          (e.resize.initialAdjacentSize || 1) + D
        ), j = K - e.resize.initialSize, oe = q - (e.resize.initialAdjacentSize || 1);
        Math.abs(j + oe) < 0.01 && (t({
          type: "RESIZE_BLOCK",
          payload: {
            blockId: e.resize.activeBlockId,
            size: K
          }
        }), t({
          type: "RESIZE_BLOCK",
          payload: { blockId: B.id, size: q }
        }));
      }
    }
  }, [e.resize, e.blocks, t, r]), i = N(() => {
    t({ type: "END_RESIZE" }), document.body.style.userSelect = "", document.body.style.cursor = "";
  }, [t]);
  return {
    startResize: o,
    updateResize: n,
    endResize: i
  };
}
function Cr(e, t) {
  var r;
  switch (t.type) {
    case "HIDE_BLOCK":
      return {
        ...e,
        hiddenBlocks: /* @__PURE__ */ new Set([...e.hiddenBlocks, t.payload.blockId])
      };
    case "SHOW_BLOCK":
      const o = new Set(e.hiddenBlocks);
      return o.delete(t.payload.blockId), {
        ...e,
        hiddenBlocks: o
      };
    case "TOGGLE_BLOCK_VISIBILITY":
      const n = e.hiddenBlocks.has(t.payload.blockId), i = new Set(e.hiddenBlocks);
      return n ? i.delete(t.payload.blockId) : i.add(t.payload.blockId), {
        ...e,
        hiddenBlocks: i
      };
    case "RESIZE_BLOCK":
      const a = e.blocks[t.payload.blockId];
      return a ? {
        ...e,
        blocks: {
          ...e.blocks,
          [t.payload.blockId]: {
            ...a,
            defaultSize: t.payload.size,
            size: t.payload.size
          }
        }
      } : e;
    case "COLLAPSE_BLOCK":
      const l = e.blocks[t.payload.blockId];
      if (!l) return e;
      const f = l.collapseTo ?? 0, g = l.minSize ?? 0, x = Math.max(f, g);
      return {
        ...e,
        blocks: {
          ...e.blocks,
          [t.payload.blockId]: {
            ...l,
            // Preserve original size for expand
            originalDefaultSize: l.originalDefaultSize || l.defaultSize,
            defaultSize: x,
            size: x
          }
        }
      };
    case "EXPAND_BLOCK":
      const S = e.blocks[t.payload.blockId];
      if (!S) return e;
      const y = S.originalDefaultSize || S.defaultSize || 100;
      return {
        ...e,
        blocks: {
          ...e.blocks,
          [t.payload.blockId]: {
            ...S,
            defaultSize: y,
            size: y
          }
        }
      };
    case "SET_ACTIVE_DIVIDER":
      return {
        ...e,
        activeDivider: t.payload.dividerId
      };
    case "SWITCH_MODE":
      return {
        ...e,
        activeMode: t.payload.mode
      };
    case "UPDATE_VIEWPORT":
      return {
        ...e,
        viewport: t.payload.viewport
      };
    case "LOAD_STATE":
      return {
        ...e,
        ...t.payload.state,
        // Always preserve current viewport
        viewport: e.viewport
      };
    case "RESET_STATE":
      const p = Object.fromEntries(
        Object.entries(e.blocks).map(([s, h]) => [
          s,
          {
            ...h,
            size: h.defaultSize
            // Reset to original defaultSize stored somewhere, or current defaultSize
          }
        ])
      );
      return {
        ...e,
        blocks: p,
        activeDivider: void 0,
        resize: {
          isDragging: !1,
          startPosition: { x: 0, y: 0 },
          initialSize: 0
        }
      };
    case "START_RESIZE":
      return {
        ...e,
        resize: {
          isDragging: !0,
          activeBlockId: t.payload.blockId,
          activeDividerId: t.payload.dividerId,
          startPosition: t.payload.startPosition,
          initialSize: t.payload.initialSize,
          initialAdjacentBlockId: t.payload.initialAdjacentBlockId,
          initialAdjacentSize: t.payload.initialAdjacentSize
        }
      };
    case "UPDATE_RESIZE":
      return {
        ...e,
        resize: {
          ...e.resize
          // The resize calculation happens in the resize handler, not the reducer
        }
      };
    case "END_RESIZE":
      return {
        ...e,
        resize: {
          isDragging: !1,
          startPosition: { x: 0, y: 0 },
          initialSize: 0
        }
      };
    case "SPLIT_BLOCK": {
      const { targetBlockId: s, direction: h, firstChildId: c, secondChildId: u, initialSize: w = 1 } = t.payload, d = e.blocks[s];
      if (!d)
        return console.warn(`Cannot split: block ${s} not found`), e;
      if (d.type !== "group")
        return console.warn(`Cannot split: block ${s} is not a group`), e;
      if (d.canSplit !== !0)
        return console.warn(`Cannot split: block ${s} does not have canSplit enabled`), e;
      const v = h === "horizontal" ? "column" : "row", E = t.payload.newViewType || d.defaultViewType;
      if (!d.direction) {
        const C = d.children || [], I = C[0], b = I ? e.blocks[I] : void 0, A = {
          ...d,
          direction: v,
          children: [c, u]
        }, V = {
          id: c,
          type: "block",
          parentId: s,
          order: 0,
          defaultSize: w,
          sizeUnit: "fr",
          viewType: b == null ? void 0 : b.viewType,
          viewState: b == null ? void 0 : b.viewState
        }, _ = {
          id: u,
          type: "block",
          parentId: s,
          order: 1,
          defaultSize: w,
          sizeUnit: "fr",
          viewType: E
        }, B = { ...e.blocks };
        return C.forEach((P) => {
          delete B[P];
        }), {
          ...e,
          blocks: {
            ...B,
            [s]: A,
            [c]: V,
            [u]: _
          }
        };
      }
      if (d.direction) {
        if (d.direction !== v)
          return console.warn(`Cannot split group ${s}: direction mismatch (has ${d.direction}, requested ${v})`), e;
        const C = {
          ...d,
          children: [...d.children || [], u]
        }, I = {
          id: u,
          type: "block",
          parentId: s,
          order: ((r = d.children) == null ? void 0 : r.length) || 0,
          defaultSize: w,
          sizeUnit: "fr",
          viewType: E
        };
        return {
          ...e,
          blocks: {
            ...e.blocks,
            [s]: C,
            [u]: I
          }
        };
      }
      return e;
    }
    case "UNSPLIT_BLOCK": {
      const { blockId: s } = t.payload, h = e.blocks[s];
      if (!h || h.type !== "group" || !h.children)
        return e;
      const c = { ...e.blocks };
      h.children.forEach((w) => {
        delete c[w];
      });
      const u = {
        ...h,
        type: "block",
        children: void 0,
        viewType: void 0
        // User will need to set content
      };
      return c[s] = u, {
        ...e,
        blocks: c
      };
    }
    case "ADD_BLOCK": {
      const { parentId: s, block: h } = t.payload, c = e.blocks[s];
      if (!c) return e;
      const u = c.type === "group" && c.children ? {
        ...c,
        children: [...c.children, h.id]
      } : c;
      return {
        ...e,
        blocks: {
          ...e.blocks,
          [s]: u,
          [h.id]: h
        }
      };
    }
    case "REMOVE_BLOCK": {
      const { blockId: s } = t.payload, h = e.blocks[s];
      if (!h) return e;
      const c = { ...e.blocks };
      if (h.parentId) {
        const w = c[h.parentId];
        w && w.type === "group" && w.children && (c[h.parentId] = {
          ...w,
          children: w.children.filter((d) => d !== s)
        });
      }
      delete c[s];
      const u = new Set(e.hiddenBlocks);
      return u.delete(s), {
        ...e,
        blocks: c,
        hiddenBlocks: u
      };
    }
    case "SET_BLOCK_VIEW_TYPE": {
      const { blockId: s, viewType: h } = t.payload, c = e.blocks[s];
      return c ? {
        ...e,
        blocks: {
          ...e.blocks,
          [s]: {
            ...c,
            viewType: h
          }
        }
      } : e;
    }
    default:
      return e;
  }
}
function Ar(e, t, r) {
  return {
    blocks: e.reduce((n, i) => (n[i.id] = {
      ...i,
      size: i.defaultSize,
      originalDefaultSize: i.defaultSize
      // Store original size for expand functionality
    }, n), {}),
    hiddenBlocks: /* @__PURE__ */ new Set(),
    // Initialize with no hidden blocks
    activeMode: r,
    viewport: t,
    resize: {
      isDragging: !1,
      startPosition: { x: 0, y: 0 },
      initialSize: 0
    }
  };
}
const dt = Re(null);
function jr({
  children: e,
  blocks: t,
  modes: r,
  gridId: o = "default",
  persist: n = !1,
  persistKey: i,
  onModeChange: a,
  onLayoutChange: l
}) {
  const { activeMode: f, viewport: g, setMode: x } = at(r), [S, y] = It(
    Cr,
    Ar(t, g, f)
  );
  $(() => {
    y({
      type: "UPDATE_VIEWPORT",
      payload: { viewport: g }
    });
  }, [g]), $(() => {
    const d = S.activeMode;
    f !== d && (y({
      type: "SWITCH_MODE",
      payload: { mode: f }
    }), a == null || a(f, d));
  }, [f, S.activeMode, a]);
  const { saveState: p, clearState: s } = xr({
    gridId: i || o,
    enabled: n,
    state: S,
    onStateLoad: (d) => {
      y({ type: "LOAD_STATE", payload: { state: d } });
    },
    autoSave: !0
  }), { startResize: h, updateResize: c, endResize: u } = Er(S, y), w = te(
    () => ({
      gridId: o,
      state: {
        ...S,
        activeMode: f,
        viewport: g
      },
      dispatch: y,
      // Grid operations
      resizeBlock: (d, v) => {
        y({
          type: "RESIZE_BLOCK",
          payload: { blockId: d, size: v }
        });
      },
      collapseBlock: (d) => {
        y({
          type: "COLLAPSE_BLOCK",
          payload: { blockId: d }
        });
      },
      expandBlock: (d) => {
        y({
          type: "EXPAND_BLOCK",
          payload: { blockId: d }
        });
      },
      switchMode: (d) => {
        x(d);
      },
      // Block visibility operations
      hideBlock: (d) => {
        y({
          type: "HIDE_BLOCK",
          payload: { blockId: d }
        });
      },
      showBlock: (d) => {
        y({
          type: "SHOW_BLOCK",
          payload: { blockId: d }
        });
      },
      toggleBlockVisibility: (d) => {
        y({
          type: "TOGGLE_BLOCK_VISIBILITY",
          payload: { blockId: d }
        });
      },
      // Split operations (LayoutService primitives)
      splitBlock: (d, v, E = {}) => {
        const { initialSize: C = 1, viewType: I, position: b = "after" } = E, A = Date.now(), V = `${d}-${A}-1`, _ = `${d}-${A}-2`;
        return y({
          type: "SPLIT_BLOCK",
          payload: {
            targetBlockId: d,
            direction: v,
            newBlockId: b === "before" ? V : _,
            firstChildId: V,
            secondChildId: _,
            initialSize: C,
            newViewType: I,
            position: b
          }
        }), b === "before" ? V : _;
      },
      unsplitBlock: (d) => {
        y({
          type: "UNSPLIT_BLOCK",
          payload: { blockId: d }
        });
      },
      canSplit: (d) => {
        var C;
        const v = S.blocks[d];
        if (!v || v.type !== "group" || v.canSplit !== !0) return !1;
        const E = ((C = v.splitConfig) == null ? void 0 : C.minSplitSize) || 200;
        return !(v.sizeUnit === "px" && (v.defaultSize || 0) < E * 2);
      },
      addBlock: (d, v) => {
        const E = v.id || `block-${Date.now()}`, C = {
          id: E,
          type: "block",
          parentId: d,
          defaultSize: 1,
          sizeUnit: "fr",
          ...v
        };
        return y({
          type: "ADD_BLOCK",
          payload: { parentId: d, block: C }
        }), E;
      },
      removeBlock: (d) => {
        y({
          type: "REMOVE_BLOCK",
          payload: { blockId: d }
        });
      },
      // View type operations (future ViewRegistry support)
      setBlockViewType: (d, v) => {
        y({
          type: "SET_BLOCK_VIEW_TYPE",
          payload: { blockId: d, viewType: v }
        });
      },
      getBlockViewType: (d) => {
        var v;
        return (v = S.blocks[d]) == null ? void 0 : v.viewType;
      },
      // Resize operations (using extracted hook)
      startResize: h,
      updateResize: c,
      endResize: u,
      // Persistence
      persistState: () => p(S),
      resetState: () => {
        y({ type: "RESET_STATE" }), s();
      }
    }),
    [o, S, f, g, p, s, x, h, c, u]
  );
  return $(() => {
    if (l) {
      const d = Object.values(S.blocks);
      l(d);
    }
  }, [S.blocks, l]), /* @__PURE__ */ k.jsx(dt.Provider, { value: w, children: e });
}
function re() {
  const e = Ie(dt);
  if (!e)
    throw new Error("useGridContext must be used within a GridProvider");
  return e;
}
function Te() {
  const { state: e } = re();
  return e;
}
function Rr() {
  const {
    resizeBlock: e,
    collapseBlock: t,
    expandBlock: r,
    hideBlock: o,
    showBlock: n,
    toggleBlockVisibility: i,
    switchMode: a,
    persistState: l,
    resetState: f
  } = re();
  return {
    resizeBlock: e,
    collapseBlock: t,
    expandBlock: r,
    hideBlock: o,
    showBlock: n,
    toggleBlockVisibility: i,
    switchMode: a,
    persistState: l,
    resetState: f
  };
}
function ut() {
  const { startResize: e, updateResize: t, endResize: r, state: o } = re();
  return {
    startResize: e,
    updateResize: t,
    endResize: r,
    isDragging: o.resize.isDragging,
    activeBlockId: o.resize.activeBlockId,
    activeDividerId: o.resize.activeDividerId
  };
}
function Jr(e) {
  const { state: t } = re();
  return t.hiddenBlocks.has(e);
}
function Zr() {
  const { hideBlock: e } = re();
  return e;
}
function Xr() {
  const { showBlock: e } = re();
  return e;
}
function Qr() {
  const { toggleBlockVisibility: e } = re();
  return e;
}
function Ir({
  blocks: e,
  containerRef: t,
  onSizeChange: r,
  direction: o = "row"
}) {
  const {
    startResize: n,
    updateResize: i,
    endResize: a,
    isDragging: l,
    activeBlockId: f,
    activeDividerId: g
  } = ut(), x = N(() => {
    if (!t.current) return 0;
    const c = t.current.getBoundingClientRect();
    return o === "column" ? c.width : c.height;
  }, [o, t]), S = N(() => {
    const c = x();
    if (c === 0) return 0;
    const u = e.filter((E) => E.sizeUnit === "px").reduce((E, C) => E + (C.defaultSize || 0), 0), w = 0, d = e.filter((E) => E.sizeUnit === "fr").reduce((E, C) => E + (C.defaultSize || 1), 0), v = ct(c, u, w);
    return d > 0 ? v / d : 0;
  }, [e, x]), y = N((c) => {
    const u = e.find((w) => w.id === c);
    u && u.defaultSize !== void 0 && (r == null || r(c, u.defaultSize));
  }, [e, r]), p = N((c) => {
    const u = e.find((w) => w.id === c);
    u && u.collapseTo !== void 0 && (r == null || r(c, u.collapseTo));
  }, [e, r]), s = N((c) => {
    const u = e.find((w) => w.id === c);
    u && u.defaultSize !== void 0 && (r == null || r(c, u.defaultSize));
  }, [e, r]), h = N((c) => {
    const u = e.find((w) => w.id === c);
    return !u || !u.collapseAt ? !1 : (u.defaultSize || 0) <= u.collapseAt;
  }, [e]);
  return $(() => {
    const c = (v) => {
      v.preventDefault(), i(v);
    }, u = (v) => {
      v.preventDefault(), i(v);
    }, w = () => {
      a();
    }, d = () => {
      a();
    };
    if (l)
      return document.addEventListener("mousemove", c), document.addEventListener("mouseup", w), document.addEventListener("touchmove", u), document.addEventListener("touchend", d), () => {
        document.removeEventListener("mousemove", c), document.removeEventListener("mouseup", w), document.removeEventListener("touchmove", u), document.removeEventListener("touchend", d);
      };
  }, [l, i, a]), {
    // State
    isDragging: l,
    activeBlockId: f,
    activeDividerId: g,
    // Actions
    startResize: n,
    resetBlock: y,
    collapseBlock: p,
    expandBlock: s,
    // Utilities
    isBlockCollapsed: h,
    getContainerSize: x,
    calculatePixelsPerFr: S
  };
}
function Lr({
  enabled: e = !0,
  blocks: t,
  onResizeBlock: r,
  onFocusBlock: o,
  onCollapseBlock: n,
  onExpandBlock: i,
  onSplitBlock: a,
  containerRef: l,
  stepSize: f = 10,
  largeStepSize: g = 50
}) {
  const x = N(() => {
    const c = document.activeElement;
    return (c == null ? void 0 : c.dataset.blockType) === "block" || (c == null ? void 0 : c.dataset.blockType) === "group" ? c : (c == null ? void 0 : c.closest('[data-block-type="block"], [data-block-type="group"]')) || null;
  }, []), S = N((c) => {
    if (!c) return null;
    const u = c.dataset.blockId;
    return t.find((w) => w.id === u) || null;
  }, [t]), y = N((c, u) => {
    if (!(l != null && l.current)) return null;
    const w = Array.from(
      l.current.querySelectorAll('[data-block-type="block"], [data-block-type="group"]')
    ), d = c.getBoundingClientRect(), v = {
      x: d.left + d.width / 2,
      y: d.top + d.height / 2
    }, E = w.filter((C) => {
      if (C === c) return !1;
      const I = C.getBoundingClientRect(), b = {
        x: I.left + I.width / 2,
        y: I.top + I.height / 2
      };
      switch (u) {
        case "up":
          return b.y < v.y;
        case "down":
          return b.y > v.y;
        case "left":
          return b.x < v.x;
        case "right":
          return b.x > v.x;
        default:
          return !1;
      }
    });
    return E.length === 0 ? null : (E.sort((C, I) => {
      const b = C.getBoundingClientRect(), A = I.getBoundingClientRect(), V = {
        x: b.left + b.width / 2,
        y: b.top + b.height / 2
      }, _ = {
        x: A.left + A.width / 2,
        y: A.top + A.height / 2
      }, B = Math.sqrt(
        Math.pow(V.x - v.x, 2) + Math.pow(V.y - v.y, 2)
      ), P = Math.sqrt(
        Math.pow(_.x - v.x, 2) + Math.pow(_.y - v.y, 2)
      );
      return B - P;
    }), E[0]);
  }, [l]), p = N((c) => {
    if (!e) return;
    const u = x();
    if (!u) return;
    const w = S(u);
    if (!w) return;
    const d = c.ctrlKey || c.metaKey, v = c.shiftKey, E = v ? g : f;
    if (!d && !v)
      switch (c.key) {
        case "ArrowUp":
          c.preventDefault();
          const C = y(u, "up");
          C && (C.focus(), o == null || o(C.dataset.blockId || ""));
          break;
        case "ArrowDown":
          c.preventDefault();
          const I = y(u, "down");
          I && (I.focus(), o == null || o(I.dataset.blockId || ""));
          break;
        case "ArrowLeft":
          c.preventDefault();
          const b = y(u, "left");
          b && (b.focus(), o == null || o(b.dataset.blockId || ""));
          break;
        case "ArrowRight":
          c.preventDefault();
          const A = y(u, "right");
          A && (A.focus(), o == null || o(A.dataset.blockId || ""));
          break;
        case "Enter":
        case " ":
          c.preventDefault(), w.collapsible && (i == null || i(w.id));
          break;
        case "Escape":
          c.preventDefault(), u.blur();
          break;
      }
    if (d && r)
      switch (c.key) {
        case "ArrowUp":
          c.preventDefault(), r(w.id, -E);
          break;
        case "ArrowDown":
          c.preventDefault(), r(w.id, E);
          break;
        case "ArrowLeft":
          c.preventDefault(), r(w.id, -E);
          break;
        case "ArrowRight":
          c.preventDefault(), r(w.id, E);
          break;
      }
    if (d)
      switch (c.key) {
        case "Minus":
        case "-":
          c.preventDefault(), n == null || n(w.id);
          break;
        case "Plus":
        case "+":
        case "=":
          c.preventDefault(), i == null || i(w.id);
          break;
        case "\\":
          c.preventDefault(), v ? a == null || a(w.id, "horizontal") : a == null || a(w.id, "vertical");
          break;
      }
  }, [
    e,
    x,
    S,
    y,
    r,
    o,
    n,
    i,
    a,
    f,
    g
  ]), s = N((c) => {
    if (!(l != null && l.current)) return;
    const u = l.current.querySelector(
      `[data-block-id="${c}"]`
    );
    u && (u.focus(), o == null || o(c));
  }, [l, o]), h = N(() => l != null && l.current ? Array.from(
    l.current.querySelectorAll(
      '[data-block-type="block"][tabindex], [data-block-type="group"][tabindex]'
    )
  ) : [], [l]);
  return $(() => {
    if (e)
      return document.addEventListener("keydown", p), () => {
        document.removeEventListener("keydown", p);
      };
  }, [p, e]), {
    focusBlock: s,
    getFocusableBlocks: h,
    getFocusedBlock: x,
    isEnabled: e
  };
}
const ft = ({
  targetId: e,
  position: t,
  direction: r,
  size: o = 4,
  // Default hover zone size (like VS Code)
  className: n,
  "aria-label": i
}) => {
  const a = me(null), l = Te(), { startResize: f, isDragging: g, activeDividerId: x } = ut(), [S, y] = J({
    left: 0,
    top: 0,
    width: 0,
    height: 0
  }), p = l.blocks[e], s = r === "vertical", h = `${e}-${t}-divider`, c = g && x === h, u = N(() => {
    const d = document.querySelector("[data-grid-id]"), v = document.querySelector(`[data-block-id="${e}"]`);
    if (!d || !v) return;
    const E = d.getBoundingClientRect(), C = v.getBoundingClientRect(), I = p == null ? void 0 : p.parentId, b = I ? document.querySelector(`[data-block-id="${I}"]`) : d;
    if (!b) return;
    const _ = ((b.hasAttribute("data-has-toolbar") ? b.querySelector("[data-split-content]") : null) || b).getBoundingClientRect();
    if (s) {
      const B = t === "start" ? C.left - E.left : C.right - E.left;
      y({
        left: B - o / 2,
        // Center on edge
        top: _.top - E.top,
        // Position relative to constraint area
        width: o,
        height: _.height
        // Use constraint height (content area if toolbar present)
      });
    } else {
      const B = t === "start" ? C.top - E.top : C.bottom - E.top;
      y({
        left: _.left - E.left,
        // Position relative to constraint area
        top: B - o / 2,
        // Center on edge
        width: _.width,
        // Use constraint width (content area if toolbar present)
        height: o
      });
    }
  }, [e, t, s, o, p == null ? void 0 : p.parentId]);
  Lt(() => {
    const d = document.querySelector("[data-grid-id]"), v = document.querySelector(`[data-block-id="${e}"]`);
    if (!d || !v) return;
    u();
    const E = new ResizeObserver(() => {
      u();
    });
    E.observe(d), E.observe(v);
    const C = p == null ? void 0 : p.parentId, I = C ? document.querySelector(`[data-block-id="${C}"]`) : null;
    if (I && (E.observe(I), I.hasAttribute("data-has-toolbar"))) {
      const A = I.querySelector("[data-split-content]");
      A && E.observe(A);
    }
    return () => {
      E.disconnect();
    };
  }, [e, u, p == null ? void 0 : p.parentId]), $(() => {
    u();
  }, [l.blocks, u]);
  const w = N((d) => {
    d.preventDefault(), f(e, h, d);
  }, [e, h, f]);
  return p ? /* @__PURE__ */ k.jsx(
    "div",
    {
      ref: a,
      className: X(
        "pretty-poly-divider",
        "absolute",
        "bg-transparent",
        // Invisible by default
        "transition-colors duration-100",
        "hover:bg-[var(--divider-hover-color,rgba(59,130,246,0.5))]",
        c && "bg-[var(--divider-active-color,rgba(59,130,246,0.7))]",
        s ? "cursor-col-resize" : "cursor-row-resize",
        n
      ),
      style: {
        left: `${S.left}px`,
        top: `${S.top}px`,
        width: `${S.width}px`,
        height: `${S.height}px`,
        pointerEvents: "auto",
        // Re-enable pointer events (parent has pointer-events: none)
        zIndex: 10
      },
      "data-divider-id": h,
      "data-target-block": e,
      "data-divider-position": t,
      "data-divider-direction": r,
      role: "separator",
      "aria-label": i || `Resize ${e}`,
      "aria-valuenow": p == null ? void 0 : p.defaultSize,
      "aria-valuemin": p == null ? void 0 : p.minSize,
      "aria-valuemax": p == null ? void 0 : p.maxSize,
      tabIndex: 0,
      onMouseDown: w,
      onTouchStart: w
    }
  ) : null;
};
ft.displayName = "Divider";
function Pr(e, t) {
  if (!t)
    return { targetId: e.id, position: "end" };
  const r = e.sizeUnit || "fr", o = t.sizeUnit || "fr";
  return r === "fr" && o === "px" ? { targetId: t.id, position: "start" } : r === "px" && o === "fr" ? { targetId: e.id, position: "end" } : { targetId: e.id, position: "end" };
}
function Mr(e) {
  const t = [];
  return Object.values(e).filter((o) => o.type === "group").forEach((o) => {
    const n = Object.values(e).filter((l) => l.parentId === o.id).sort((l, f) => (l.order || 0) - (f.order || 0));
    if (n.length === 0) return;
    const a = o.direction === "row" ? "vertical" : "horizontal";
    n.forEach((l, f) => {
      if (f === 0) return;
      const g = n[f - 1], x = g.resizable !== !1, S = l.resizable !== !1;
      if (!x && !S)
        return;
      const { targetId: y, position: p } = Pr(g, l), s = e[y];
      s && s.resizable === !1 || t.push({
        id: `divider-${g.id}-${l.id}`,
        targetBlockId: y,
        position: p,
        direction: a
      });
    });
  }), t;
}
const _r = () => {
  const e = Te(), t = te(() => Mr(e.blocks), [e.blocks]);
  return t.length === 0 ? null : /* @__PURE__ */ k.jsx(
    "div",
    {
      className: "pretty-poly-divider-overlay",
      style: {
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 10
      },
      children: t.map((r) => /* @__PURE__ */ k.jsx(
        ft,
        {
          targetId: r.targetBlockId,
          position: r.position,
          direction: r.direction
        },
        r.id
      ))
    }
  );
}, pt = Z(({ children: e, className: t, "aria-label": r }, o) => {
  const n = me(null), {
    state: i,
    resizeBlock: a,
    collapseBlock: l,
    expandBlock: f,
    switchMode: g,
    persistState: x,
    resetState: S
  } = re(), y = i.resize.isDragging;
  Pt(
    o,
    () => ({
      resizeBlock: a,
      collapseBlock: l,
      expandBlock: f,
      switchMode: g,
      persistState: x,
      resetState: S,
      getState: () => i
    }),
    [
      a,
      l,
      f,
      g,
      x,
      S,
      i
    ]
  );
  const p = te(() => Object.values(i.blocks).sort((v, E) => (v.order || 0) - (E.order || 0)), [i.blocks]), s = te(() => p.find((d) => !d.parentId), [p]);
  Ir({
    blocks: p,
    containerRef: n,
    onSizeChange: a,
    direction: (s == null ? void 0 : s.direction) || "row"
  });
  const { splitBlock: h } = re();
  Lr({
    enabled: !0,
    blocks: p,
    containerRef: n,
    onResizeBlock: (d, v) => {
      const E = i.blocks[d];
      if (E) {
        const C = E.defaultSize || 0, I = Math.max(0, C + v);
        a(d, I);
      }
    },
    onCollapseBlock: l,
    onExpandBlock: f,
    onSplitBlock: (d, v) => {
      h(d, v);
    }
  });
  const { gridStyles: c, cssVariables: u, modeStyles: w } = te(() => {
    if (!s)
      return { gridStyles: "", cssVariables: "", modeStyles: "" };
    const d = p.reduce((A, V) => {
      if (V.id === s.id) return A;
      const _ = V.parentId || s.id;
      return A[_] || (A[_] = []), A[_].push(V), A;
    }, {}), v = p.filter((A) => A.defaultSize !== void 0).map((A) => {
      const V = A.sizeUnit === "px" ? `${A.defaultSize}px` : `${A.defaultSize}fr`;
      return `--${s.id}-${A.id}-size: ${V};`;
    }).join(`
  `), E = () => "", C = (A, V = /* @__PURE__ */ new Set()) => {
      if (V.has(A))
        return console.warn(`Circular reference detected for parent: ${A}`), "";
      const _ = new Set(V);
      _.add(A);
      const B = d[A] || [];
      if (B.length === 0) return "";
      const P = [...B].sort(
        (R, O) => (R.order || 0) - (O.order || 0)
      ), D = p.find((R) => R.id === A) || s, G = D == null ? void 0 : D.direction, K = P.map((R) => ({
        id: R.id,
        sizeUnit: R.sizeUnit || "fr",
        size: R.defaultSize || 1,
        dividerPosition: "none",
        // Dividers are overlays, not in grid template
        dividerSize: 0
        // Not used since dividers are overlays
      })), q = zr(K, s.id, i.hiddenBlocks), oe = (D == null ? void 0 : D.hasToolbar) === !0 ? `[data-block-id="${A}"] > [data-split-content]` : `[data-block-id="${A}"]`;
      let m = "";
      G ? m = `
${oe} {
  display: grid;
  ${G === "column" ? "grid-template-rows" : "grid-template-columns"}: ${q};
  ${G === "column" ? "grid-template-columns: 1fr;" : "grid-template-rows: 1fr;"}
}` : m = `
${oe} {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
}`;
      for (const R of P)
        R.type === "group" && (m += C(R.id, _));
      return m;
    }, I = C(s.id), b = E();
    return {
      cssVariables: `:root {
  ${v}
}`,
      gridStyles: I,
      modeStyles: b
    };
  }, [p, s, i.hiddenBlocks]);
  return s ? /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
    /* @__PURE__ */ k.jsxs("style", { type: "text/css", children: [
      u,
      c,
      w
    ] }),
    /* @__PURE__ */ k.jsxs(
      "div",
      {
        ref: n,
        className: X(
          "group relative overflow-hidden",
          y && "select-none cursor-grabbing pretty-poly-grid--dragging",
          t
        ),
        "data-grid-id": s.id,
        "data-block-id": s.id,
        "data-block-type": s.type,
        "data-active-mode": i.activeMode,
        "aria-label": r || "Resizable grid layout",
        role: "application",
        style: { isolation: "isolate" },
        children: [
          e,
          (i.activeMode === "grid" || i.activeMode === "desktop") && /* @__PURE__ */ k.jsx(_r, {})
        ]
      }
    )
  ] }) : (console.warn("No root block found in grid configuration"), null);
});
pt.displayName = "GridInternal";
const Nr = Z(
  ({
    children: e,
    defaultLayout: t = [],
    modes: r,
    persist: o = !1,
    persistKey: n,
    onLayoutChange: i,
    onModeChange: a,
    className: l,
    dividers: f = "manual",
    dividerConfig: g,
    "aria-label": x
  }, S) => {
    const y = t.find((s) => !s.parentId), p = (y == null ? void 0 : y.id) || "root";
    return /* @__PURE__ */ k.jsx(
      jr,
      {
        blocks: t,
        modes: r,
        gridId: p,
        persist: o,
        persistKey: n,
        onLayoutChange: i,
        onModeChange: a,
        children: /* @__PURE__ */ k.jsx(
          pt,
          {
            ref: S,
            className: l,
            dividers: f,
            dividerConfig: g,
            "aria-label": x,
            children: e
          }
        )
      }
    );
  }
);
Nr.displayName = "Grid";
const mt = Z(
  ({ scrollMode: e = "vertical", className: t, children: r, "aria-label": o }, n) => {
    const i = {
      vertical: "overflow-y-auto overflow-x-hidden",
      horizontal: "overflow-x-auto overflow-y-hidden",
      both: "overflow-auto",
      none: "overflow-hidden"
    };
    return /* @__PURE__ */ k.jsx(
      "div",
      {
        ref: n,
        className: X(
          "pretty-poly-block-content",
          "flex-1",
          // Fill remaining space
          "min-h-0",
          // Allow flex shrinking
          i[e],
          t
        ),
        "data-scroll-mode": e,
        "aria-label": o,
        role: "main",
        children: r
      }
    );
  }
);
mt.displayName = "Block.Content";
const ht = Z(
  ({ position: e = "top", className: t, children: r, "aria-label": o }, n) => /* @__PURE__ */ k.jsx(
    "div",
    {
      ref: n,
      className: X(
        "pretty-poly-block-header",
        "flex-shrink-0",
        // Don't shrink
        "flex flex-row items-center",
        // Default to horizontal layout
        "min-h-0",
        // Allow content to determine height
        e === "bottom" && "order-last",
        // Move to bottom if specified
        t
      ),
      "data-header-position": e,
      "aria-label": o,
      role: "banner",
      children: r
    }
  )
);
ht.displayName = "Block.Header";
const bt = Z(
  ({ className: e, children: t, "aria-label": r }, o) => /* @__PURE__ */ k.jsx(
    "div",
    {
      ref: o,
      className: X(
        "pretty-poly-block-footer",
        "flex-shrink-0",
        // Don't shrink
        "flex flex-row items-center",
        // Default to horizontal layout
        "min-h-0",
        // Allow content to determine height
        "order-last",
        // Always at bottom
        e
      ),
      "aria-label": r,
      role: "contentinfo",
      children: t
    }
  )
);
bt.displayName = "Block.Footer";
const gt = Z(
  ({ left: e, center: t, right: r, className: o, "aria-label": n }, i) => /* @__PURE__ */ k.jsxs(
    "div",
    {
      ref: i,
      className: X(
        "pretty-poly-block-toolbar",
        "flex items-center justify-between",
        "w-full px-3 py-2",
        // Standard padding
        "border-b",
        // Shadcn border uses default border color
        "bg-muted",
        // Shadcn background
        o
      ),
      "aria-label": n || "Toolbar",
      role: "toolbar",
      children: [
        /* @__PURE__ */ k.jsx("div", { className: "flex items-center space-x-2 flex-shrink-0", children: e }),
        /* @__PURE__ */ k.jsx("div", { className: "flex items-center justify-center flex-1 px-4", children: t }),
        /* @__PURE__ */ k.jsx("div", { className: "flex items-center space-x-2 flex-shrink-0", children: r })
      ]
    }
  )
);
gt.displayName = "Block.Toolbar";
const yt = Z(
  ({
    tabs: e,
    activeTab: t,
    onTabChange: r,
    onTabClose: o,
    className: n,
    "aria-label": i,
    allowOverflow: a = !0
  }, l) => {
    const [f, g] = J(null), x = (p, s) => {
      s.preventDefault(), p.disabled || r(p.id);
    }, S = (p, s) => {
      s.preventDefault(), s.stopPropagation(), o && p.closable && o(p.id);
    }, y = (p, s) => {
      (s.key === "Enter" || s.key === " ") && (s.preventDefault(), p.disabled || r(p.id));
    };
    return /* @__PURE__ */ k.jsx(
      "div",
      {
        ref: l,
        className: le(
          "pretty-poly-block-tabs",
          "flex items-center",
          "border-b border-border",
          "bg-card",
          a ? "overflow-x-auto" : "overflow-x-hidden",
          n
        ),
        role: "tablist",
        "aria-label": i || "Block tabs",
        children: /* @__PURE__ */ k.jsx("div", { className: "flex items-center min-w-0", children: e.map((p) => {
          const s = p.id === t, h = f === p.id, c = p.icon;
          return /* @__PURE__ */ k.jsxs(
            "div",
            {
              className: le(
                "flex items-center space-x-2 px-3 py-2 text-sm cursor-pointer",
                "border-b-2 transition-colors duration-150",
                "min-w-0 flex-shrink-0",
                // Prevent shrinking
                s ? "border-primary text-primary bg-accent" : "border-transparent text-muted-foreground hover:text-foreground hover:bg-accent",
                p.disabled && "opacity-50 cursor-not-allowed",
                !a && "flex-1"
                // Equal width tabs when overflow disabled
              ),
              role: "tab",
              "aria-selected": s,
              "aria-disabled": p.disabled,
              tabIndex: p.disabled ? -1 : 0,
              onClick: (u) => x(p, u),
              onKeyDown: (u) => y(p, u),
              onMouseEnter: () => g(p.id),
              onMouseLeave: () => g(null),
              "data-tab-id": p.id,
              children: [
                c && /* @__PURE__ */ k.jsx(c, { className: "w-4 h-4 flex-shrink-0" }),
                /* @__PURE__ */ k.jsx("span", { className: "truncate min-w-0", children: p.label }),
                p.closable && o && /* @__PURE__ */ k.jsx(
                  "button",
                  {
                    className: le(
                      "flex-shrink-0 w-4 h-4 rounded-sm hover:bg-muted",
                      "flex items-center justify-center",
                      "transition-colors duration-150",
                      h || s ? "opacity-100" : "opacity-0"
                    ),
                    onClick: (u) => S(p, u),
                    "aria-label": `Close ${p.label} tab`,
                    tabIndex: -1,
                    children: /* @__PURE__ */ k.jsx(
                      "svg",
                      {
                        className: "w-3 h-3",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /* @__PURE__ */ k.jsx(
                          "path",
                          {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M6 18L18 6M6 6l12 12"
                          }
                        )
                      }
                    )
                  }
                )
              ]
            },
            p.id
          );
        }) })
      }
    );
  }
);
yt.displayName = "Block.Tabs";
const Ge = Z(
  ({ position: e = "left", width: t = 48, className: r, children: o, "aria-label": n }, i) => /* @__PURE__ */ k.jsx(
    "div",
    {
      ref: i,
      className: le(
        "pretty-poly-block-sidebar",
        "flex flex-col",
        "flex-shrink-0",
        // Don't shrink
        "h-full",
        // Full height
        "bg-sidebar",
        // VS Code-style sidebar background (adapts to theme)
        "border-sidebar-border",
        // Border color
        e === "left" ? "border-r" : "border-l",
        // Border on appropriate side
        e === "right" && "order-last",
        // Move to right if specified
        r
      ),
      style: { width: `${t}px` },
      "data-sidebar-position": e,
      "data-sidebar-width": t,
      "aria-label": n || "Sidebar navigation",
      role: "navigation",
      children: o
    }
  )
);
Ge.displayName = "Block.Sidebar";
const wt = Z(
  ({
    icon: e,
    tooltip: t,
    active: r = !1,
    disabled: o = !1,
    badge: n,
    onClick: i,
    className: a,
    "aria-label": l
  }, f) => {
    const [g, x] = J(!1), S = () => {
      t && !o && x(!0);
    }, y = () => {
      x(!1);
    }, p = () => {
      !o && i && i();
    }, s = (h) => {
      (h.key === "Enter" || h.key === " ") && (h.preventDefault(), p());
    };
    return /* @__PURE__ */ k.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ k.jsxs(
        "button",
        {
          ref: f,
          className: le(
            "pretty-poly-sidebar-item",
            "w-full h-12",
            // Fixed height for consistency
            "flex items-center justify-center",
            "relative",
            "transition-colors duration-150",
            "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-inset",
            // Active state
            r && "bg-accent border-r-2 border-primary",
            // Hover state (when not disabled)
            !o && "hover:bg-accent",
            // Disabled state
            o && "opacity-50 cursor-not-allowed",
            // Default cursor
            !o && "cursor-pointer",
            a
          ),
          disabled: o,
          onClick: p,
          onKeyDown: s,
          onMouseEnter: S,
          onMouseLeave: y,
          "aria-label": l || t,
          "aria-pressed": r,
          tabIndex: o ? -1 : 0,
          children: [
            /* @__PURE__ */ k.jsx(
              e,
              {
                className: le(
                  "w-5 h-5",
                  r ? "text-primary" : "text-muted-foreground",
                  !o && "group-hover:text-foreground"
                )
              }
            ),
            n && /* @__PURE__ */ k.jsx("div", { className: "absolute -top-1 -right-1 min-w-4 h-4 bg-destructive text-destructive-foreground text-xs rounded-full flex items-center justify-center px-1", children: typeof n == "number" && n > 99 ? "99+" : n }),
            r && /* @__PURE__ */ k.jsx("div", { className: "absolute left-0 top-1/2 transform -translate-y-1/2 w-0.5 h-6 bg-primary" })
          ]
        }
      ),
      g && t && /* @__PURE__ */ k.jsx("div", { className: "absolute left-full ml-2 top-1/2 transform -translate-y-1/2 z-50", children: /* @__PURE__ */ k.jsxs("div", { className: "bg-popover text-popover-foreground text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap border border-border", children: [
        t,
        /* @__PURE__ */ k.jsx("div", { className: "absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-popover" })
      ] }) })
    ] });
  }
);
wt.displayName = "Block.Sidebar.Item";
const vt = Z(
  ({ className: e }, t) => /* @__PURE__ */ k.jsx(
    "div",
    {
      ref: t,
      className: le(
        "pretty-poly-sidebar-spacer",
        "flex-1",
        // Takes up all available space
        "min-h-2",
        // Minimum height to ensure visibility
        e
      ),
      role: "separator",
      "aria-hidden": "true"
    }
  )
);
vt.displayName = "Block.Sidebar.Spacer";
const xt = Z(
  ({ direction: e = "column", className: t, children: r, "aria-label": o }, n) => /* @__PURE__ */ k.jsx(
    "div",
    {
      ref: n,
      className: X(
        "pretty-poly-block-layout",
        // Fill parent block completely
        "w-full h-full",
        // Flex container for structured children
        "flex",
        e === "column" ? "flex-col" : "flex-row",
        // Allow flex children to shrink below content size
        "min-h-0 min-w-0",
        // Stretch to fill grid area
        "self-stretch",
        t
      ),
      "aria-label": o,
      children: r
    }
  )
);
xt.displayName = "Block.Layout";
const Ue = Z(
  ({
    id: e,
    type: t = "block",
    direction: r = "row",
    children: o,
    className: n,
    divider: i,
    noDivider: a,
    "aria-label": l
  }, f) => {
    var w;
    const { gridId: g } = re(), x = Te(), { collapseBlock: S, expandBlock: y } = Rr(), { supportsFeature: p } = at(), s = x == null ? void 0 : x.blocks[e], h = ((w = x == null ? void 0 : x.hiddenBlocks) == null ? void 0 : w.has(e)) || !1, c = te(() => s != null && s.collapsible && s.collapseAt ? (s.size ?? s.defaultSize ?? 0) <= s.collapseAt : !1, [s]), u = () => {
      s != null && s.collapsible && s.collapseAt && ((s.size ?? s.defaultSize ?? 0) <= s.collapseAt ? y(e) : S(e));
    };
    return /* @__PURE__ */ k.jsx(
      "div",
      {
        ref: f,
        className: X(
          // Base styles - simple grid item that fills its space
          "relative",
          "w-full h-full",
          "overflow-hidden",
          "transition-opacity duration-150",
          c && "opacity-70",
          n
        ),
        style: {
          // Hide block with display: none - removes from grid flow
          // The grid template will be dynamically updated to exclude this block
          display: h ? "none" : void 0
        },
        "data-grid-id": g,
        "data-block-id": e,
        "data-block-type": t,
        "data-block-direction": r,
        "data-block-size-default": s == null ? void 0 : s.defaultSize,
        "data-block-size-unit": s == null ? void 0 : s.sizeUnit,
        "data-block-size-min": s == null ? void 0 : s.minSize,
        "data-block-size-max": s == null ? void 0 : s.maxSize,
        "data-block-resizable": (s == null ? void 0 : s.resizable) !== !1,
        "data-block-collapse-at": s == null ? void 0 : s.collapseAt,
        "data-block-collapse-to": s == null ? void 0 : s.collapseTo,
        "data-block-divider-position": s == null ? void 0 : s.dividerPosition,
        "data-block-divider-size": s == null ? void 0 : s.dividerSize,
        "data-block-divider": i !== void 0 ? JSON.stringify(i) : void 0,
        "data-block-no-divider": a,
        "data-block-hidden": h,
        "aria-label": l,
        "aria-hidden": h,
        role: t === "group" ? "group" : void 0,
        tabIndex: p("resizing") && !h ? 0 : void 0,
        onDoubleClick: p("collapse") ? u : void 0,
        children: o
      }
    );
  }
);
Ue.displayName = "Block";
const kt = Z(
  (e, t) => /* @__PURE__ */ k.jsx(Ue, { ref: t, ...e, type: "group" })
);
kt.displayName = "Block.Group";
Object.assign(Ue, {
  Group: kt,
  Layout: xt,
  Header: ht,
  Content: mt,
  Footer: bt,
  Toolbar: gt,
  Tabs: yt,
  Sidebar: Ge
});
Object.assign(Ge, {
  Item: wt,
  Spacer: vt
});
function Or(e) {
  const r = Te().blocks[e];
  if (!r)
    return {
      canSplitVertical: !1,
      canSplitHorizontal: !1,
      currentDirection: void 0,
      canSplit: !1
    };
  const o = r.direction !== void 0, n = !o || r.direction === "row", i = !o || r.direction === "column";
  return {
    canSplitVertical: n,
    canSplitHorizontal: i,
    currentDirection: r.direction,
    canSplit: r.canSplit === !0
  };
}
const St = Z(
  ({
    blockId: e,
    children: t,
    label: r,
    icon: o,
    showSplitButtons: n = !0,
    splitButtonLabels: i = {
      vertical: "Split Right",
      horizontal: "Split Down"
    },
    splitButtonIcons: a,
    onBeforeSplit: l,
    className: f,
    toolbarClassName: g,
    contentClassName: x,
    renderToolbar: S,
    "aria-label": y
  }, p) => {
    const { splitBlock: s } = re(), { canSplitVertical: h, canSplitHorizontal: c } = Or(e), u = a == null ? void 0 : a.vertical, w = a == null ? void 0 : a.horizontal, d = () => {
      l && l("vertical") === !1 || s(e, "vertical");
    }, v = () => {
      l && l("horizontal") === !1 || s(e, "horizontal");
    }, E = {
      blockId: e,
      canSplitVertical: h,
      canSplitHorizontal: c,
      handleSplitVertical: d,
      handleSplitHorizontal: v,
      label: r,
      icon: o
    };
    return /* @__PURE__ */ k.jsxs(
      "div",
      {
        ref: p,
        "data-block-id": e,
        "data-block-type": "group",
        "data-has-toolbar": "true",
        className: X("relative w-full h-full flex flex-col min-h-0", f),
        "aria-label": y,
        children: [
          S ? S(E) : /* @__PURE__ */ k.jsx(
            "div",
            {
              className: X(
                "flex-none border-b border-border bg-card",
                g
              ),
              children: /* @__PURE__ */ k.jsxs("div", { className: "flex items-center justify-between px-3 py-2", children: [
                /* @__PURE__ */ k.jsxs("div", { className: "flex items-center gap-2", children: [
                  o && /* @__PURE__ */ k.jsx(o, { className: "w-4 h-4 text-muted-foreground" }),
                  r && /* @__PURE__ */ k.jsx("div", { className: "font-semibold text-sm", children: r })
                ] }),
                n && /* @__PURE__ */ k.jsxs("div", { className: "flex gap-1", children: [
                  h && /* @__PURE__ */ k.jsxs(
                    "button",
                    {
                      onClick: d,
                      className: "px-2 py-1 rounded text-xs border border-border hover:bg-accent transition-colors flex items-center gap-1",
                      title: `${i.vertical} (Ctrl+\\)`,
                      "aria-label": i.vertical,
                      children: [
                        u && /* @__PURE__ */ k.jsx(u, { className: "w-3 h-3" }),
                        /* @__PURE__ */ k.jsx("span", { className: "hidden sm:inline", children: i.vertical })
                      ]
                    }
                  ),
                  c && /* @__PURE__ */ k.jsxs(
                    "button",
                    {
                      onClick: v,
                      className: "px-2 py-1 rounded text-xs border border-border hover:bg-accent transition-colors flex items-center gap-1",
                      title: `${i.horizontal} (Ctrl+Shift+\\)`,
                      "aria-label": i.horizontal,
                      children: [
                        w && /* @__PURE__ */ k.jsx(w, { className: "w-3 h-3" }),
                        /* @__PURE__ */ k.jsx("span", { className: "hidden sm:inline", children: i.horizontal })
                      ]
                    }
                  )
                ] })
              ] })
            }
          ),
          /* @__PURE__ */ k.jsx(
            "div",
            {
              "data-split-content": !0,
              className: X("flex-1 relative min-h-0", x),
              children: t
            }
          )
        ]
      }
    );
  }
);
St.displayName = "BlockSplitContainer";
function zt({
  blockId: e,
  renderBlock: t,
  getSplitContainerProps: r,
  renderSplitContainer: o,
  renderGroup: n,
  className: i
}) {
  const a = Te();
  if (!a || !a.blocks)
    return null;
  const l = a.blocks[e];
  if (!l)
    return null;
  const f = () => !l.children || l.children.length === 0 ? null : /* @__PURE__ */ k.jsx(k.Fragment, { children: l.children.map((g) => /* @__PURE__ */ k.jsx(
    zt,
    {
      blockId: g,
      renderBlock: t,
      getSplitContainerProps: r,
      renderSplitContainer: o,
      renderGroup: n
    },
    g
  )) });
  if (l.type === "group" && l.hasToolbar) {
    const g = f();
    if (o)
      return /* @__PURE__ */ k.jsx(k.Fragment, { children: o(e, l, g) });
    const x = r ? r(l, e) : {};
    return /* @__PURE__ */ k.jsx(
      St,
      {
        blockId: e,
        className: i,
        ...x,
        children: g
      }
    );
  }
  if (l.type === "group" && l.children) {
    const g = f();
    return n ? /* @__PURE__ */ k.jsx(k.Fragment, { children: n(e, l, g) }) : /* @__PURE__ */ k.jsx(k.Fragment, { children: g });
  }
  return t ? /* @__PURE__ */ k.jsx(k.Fragment, { children: t(l, e) }) : /* @__PURE__ */ k.jsx(
    "div",
    {
      "data-block-id": e,
      "data-block-type": "block",
      className: i || "relative w-full h-full",
      children: /* @__PURE__ */ k.jsxs("div", { className: "p-4 text-muted-foreground", children: [
        'Block "',
        e,
        '" - No render function provided'
      ] })
    }
  );
}
zt.displayName = "BlockTreeRenderer";
const Dr = Z(
  ({
    icon: e,
    size: t = "sm",
    className: r,
    title: o = "Close",
    type: n = "button",
    ...i
  }, a) => {
    const l = {
      xs: "h-5 w-5 p-0.5",
      sm: "h-6 w-6 p-1",
      md: "h-7 w-7 p-1.5"
    }, f = {
      xs: "w-3 h-3",
      sm: "w-3.5 h-3.5",
      md: "w-4 h-4"
    };
    return /* @__PURE__ */ k.jsx(
      "button",
      {
        ref: a,
        type: n,
        className: X(
          "pretty-poly-block-close-button",
          "inline-flex items-center justify-center",
          "rounded",
          "text-muted-foreground",
          "hover:bg-accent hover:text-accent-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          "transition-colors",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          l[t],
          r
        ),
        title: o,
        "aria-label": o,
        ...i,
        children: e ? /* @__PURE__ */ k.jsx(e, { className: f[t] }) : /* @__PURE__ */ k.jsx("span", { className: "text-base leading-none", children: "×" })
      }
    );
  }
);
Dr.displayName = "BlockCloseButton";
function eo(e, t, r) {
  const o = [];
  let n = e;
  const i = t.minSize ?? 0, a = t.maxSize ?? 1 / 0;
  if (e < i && (o.push(`Size ${e} is below minimum ${i}`), n = i), e > a && (o.push(`Size ${e} exceeds maximum ${a}`), n = a), n = he(n, i, a), t.sizeUnit === "px" && t.collapsible && r !== void 0) {
    const l = t.collapseAt ?? 0, f = t.collapseTo ?? 0, g = t.defaultSize ?? n;
    n = kr(
      n,
      r,
      l,
      f,
      g
    );
  }
  return {
    isValid: o.length === 0,
    adjustedValue: n,
    violations: o
  };
}
function to(e, t, r, o, n = 1) {
  const i = [];
  let a = r, l = o;
  const f = fe(e.minSize ?? 0, e.sizeUnit, n), g = fe(e.maxSize ?? 1 / 0, e.sizeUnit, n), x = fe(t.minSize ?? 0, t.sizeUnit, n), S = fe(t.maxSize ?? 1 / 0, t.sizeUnit, n), y = fe(e.defaultSize ?? 0, e.sizeUnit, n), p = fe(t.defaultSize ?? 0, t.sizeUnit, n), s = y + r, h = p + o;
  let c = he(s, f, g), u = he(h, x, S);
  a = c - y, l = u - p;
  const w = a + l;
  if (Math.abs(w) > 1e-3) {
    const E = Math.abs(a) < Math.abs(r), C = Math.abs(l) < Math.abs(o);
    if (E && !C) {
      const I = p - a;
      u = he(I, x, S), l = u - p;
    } else if (C && !E) {
      const I = y - l;
      c = he(I, f, g), a = c - y;
    }
    i.push("Zero-sum constraint violated, deltas adjusted");
  }
  const d = a + l;
  return {
    isValid: Math.abs(d) <= 1e-3,
    adjustedTargetDelta: a,
    adjustedAdjacentDelta: l,
    violations: i
  };
}
function fe(e, t, r) {
  if (e === void 0 || e === 1 / 0)
    return 1 / 0;
  switch (t) {
    case "px":
      return e;
    case "fr":
      return e * r;
    case "auto":
    default:
      return e;
  }
}
function ro(e, t) {
  const r = [], o = e.filter((i) => i.sizeUnit === "px").reduce((i, a) => i + (t[a.id] ?? a.defaultSize ?? 0), 0), n = e.filter((i) => i.sizeUnit === "fr").reduce((i, a) => i + (t[a.id] ?? a.defaultSize ?? 0), 0);
  return o < 0 && r.push("Total fixed size cannot be negative"), n <= 0 && e.some((i) => i.sizeUnit === "fr") && r.push("Total fr units must be positive"), e.forEach((i) => {
    const a = t[i.id] ?? i.defaultSize ?? 0, l = i.minSize ?? 0, f = i.maxSize ?? 1 / 0;
    l > f && r.push(`Block ${i.id}: minSize (${l}) > maxSize (${f})`), (a < l || a > f) && r.push(`Block ${i.id}: size ${a} violates constraints [${l}, ${f}]`);
  }), {
    isValid: r.length === 0,
    violations: r
  };
}
class Vr {
  constructor() {
    ee(this, "views", /* @__PURE__ */ new Map());
    ee(this, "listeners", /* @__PURE__ */ new Set());
  }
  /**
   * Register a new view type
   * @returns Disposable function to unregister the view
   */
  registerView(t) {
    return this.views.has(t.id) && console.warn(`View type "${t.id}" is already registered. Overwriting.`), this.views.set(t.id, t), this.notify(), () => {
      this.views.delete(t.id), this.notify();
    };
  }
  /**
   * Register multiple views at once
   * @returns Disposable function to unregister all views
   */
  registerViews(t) {
    const r = t.map((o) => this.registerView(o));
    return () => r.forEach((o) => o());
  }
  /**
   * Get a specific view descriptor by ID
   */
  getView(t) {
    return this.views.get(t);
  }
  /**
   * Get all registered view descriptors, optionally sorted by order
   */
  getAllViews(t = !0) {
    const r = Array.from(this.views.values());
    return t ? r.sort((o, n) => (o.order ?? 0) - (n.order ?? 0)) : r;
  }
  /**
   * Get views filtered by category
   */
  getViewsByCategory(t) {
    return this.getAllViews().filter((r) => r.category === t);
  }
  /**
   * Get all unique categories
   */
  getCategories() {
    const t = /* @__PURE__ */ new Set();
    return this.views.forEach((r) => {
      r.category && t.add(r.category);
    }), Array.from(t).sort();
  }
  /**
   * Check if a view type exists
   */
  hasView(t) {
    return this.views.has(t);
  }
  /**
   * Subscribe to registry changes (when views are added/removed)
   * @returns Unsubscribe function
   */
  subscribe(t) {
    return this.listeners.add(t), () => this.listeners.delete(t);
  }
  /**
   * Get count of registered views
   */
  get count() {
    return this.views.size;
  }
  /**
   * Clear all registered views
   */
  clear() {
    this.views.clear(), this.notify();
  }
  notify() {
    this.listeners.forEach((t) => t());
  }
}
const Tt = Re(null);
function Le() {
  const e = Ie(Tt);
  if (!e)
    throw new Error("useViewRegistry must be used within ViewRegistryProvider");
  return e;
}
function oo(e) {
  const t = Le(), [r, o] = J(() => t.getView(e));
  return $(() => t.subscribe(() => {
    o(t.getView(e));
  }), [t, e]), r;
}
function no(e) {
  const t = Le(), [r, o] = J(() => e != null && e.category ? t.getViewsByCategory(e.category) : t.getAllViews((e == null ? void 0 : e.sorted) ?? !0));
  return $(() => {
    const n = () => {
      e != null && e.category ? o(t.getViewsByCategory(e.category)) : o(t.getAllViews((e == null ? void 0 : e.sorted) ?? !0));
    };
    return t.subscribe(n);
  }, [t, e == null ? void 0 : e.category, e == null ? void 0 : e.sorted]), r;
}
function so({ children: e, registry: t }) {
  const [r] = J(() => t ?? new Vr());
  return /* @__PURE__ */ k.jsx(Tt.Provider, { value: r, children: e });
}
function io(e) {
  const t = Le();
  $(() => t.registerViews(e), [t, e]);
}
function ao(e) {
  const t = Le();
  $(() => t.registerView(e), [t, e]);
}
class $r {
  constructor() {
    ee(this, "commands", /* @__PURE__ */ new Map());
    ee(this, "executionListeners", /* @__PURE__ */ new Map());
    ee(this, "registrationListeners", /* @__PURE__ */ new Set());
    ee(this, "keybindingMap", /* @__PURE__ */ new Map());
  }
  // normalized key -> command id
  /**
   * Register a new command
   * @returns Disposable function to unregister the command
   */
  registerCommand(t) {
    if (this.commands.has(t.id) && console.warn(`Command "${t.id}" is already registered. Overwriting.`), this.commands.set(t.id, t), t.keybinding) {
      const r = this.normalizeKeybinding(t.keybinding);
      this.keybindingMap.set(r, t.id);
    }
    return this.notifyRegistrationChange(), () => {
      if (this.commands.delete(t.id), t.keybinding) {
        const r = this.normalizeKeybinding(t.keybinding);
        this.keybindingMap.delete(r);
      }
      this.notifyRegistrationChange();
    };
  }
  /**
   * Register multiple commands at once
   * @returns Disposable function to unregister all commands
   */
  registerCommands(t) {
    const r = t.map((o) => this.registerCommand(o));
    return () => r.forEach((o) => o());
  }
  /**
   * Execute a command by ID
   */
  async executeCommand(t, ...r) {
    const o = this.commands.get(t);
    if (!o)
      return console.warn(`Command not found: ${t}`), { success: !1, error: new Error(`Command not found: ${t}`) };
    try {
      const n = await o.handler(...r);
      return this.notifyExecution(t, n), { success: !0, result: n };
    } catch (n) {
      return console.error(`Error executing command ${t}:`, n), { success: !1, error: n };
    }
  }
  /**
   * Get a specific command by ID
   */
  getCommand(t) {
    return this.commands.get(t);
  }
  /**
   * Get all registered commands, optionally sorted by category and title
   */
  getAllCommands(t = !0) {
    const r = Array.from(this.commands.values());
    return t ? r.sort((o, n) => {
      const i = o.category || "", a = n.category || "";
      if (i !== a) return i.localeCompare(a);
      const l = o.title || o.id, f = n.title || n.id;
      return l.localeCompare(f);
    }) : r;
  }
  /**
   * Get commands filtered by category
   */
  getCommandsByCategory(t) {
    return this.getAllCommands().filter((r) => r.category === t);
  }
  /**
   * Get all unique categories
   */
  getCategories() {
    const t = /* @__PURE__ */ new Set();
    return this.commands.forEach((r) => {
      r.category && t.add(r.category);
    }), Array.from(t).sort();
  }
  /**
   * Check if a command exists
   */
  hasCommand(t) {
    return this.commands.has(t);
  }
  /**
   * Subscribe to command execution events
   * @returns Unsubscribe function
   */
  onDidExecuteCommand(t, r) {
    return this.executionListeners.has(t) || this.executionListeners.set(t, /* @__PURE__ */ new Set()), this.executionListeners.get(t).add(r), () => {
      var o;
      (o = this.executionListeners.get(t)) == null || o.delete(r);
    };
  }
  /**
   * Subscribe to command registration changes
   * @returns Unsubscribe function
   */
  onDidChangeCommands(t) {
    return this.registrationListeners.add(t), () => this.registrationListeners.delete(t);
  }
  /**
   * Handle keyboard event and execute matching command
   * Returns true if a command was executed
   */
  handleKeyboardEvent(t) {
    const r = this.normalizeKeyboardEvent(t), o = this.keybindingMap.get(r);
    return o ? (t.preventDefault(), t.stopPropagation(), this.executeCommand(o), !0) : !1;
  }
  /**
   * Get count of registered commands
   */
  get count() {
    return this.commands.size;
  }
  /**
   * Clear all registered commands
   */
  clear() {
    this.commands.clear(), this.keybindingMap.clear(), this.notifyRegistrationChange();
  }
  /**
   * Normalize a keybinding string to a canonical format
   * e.g., 'Ctrl+B' -> 'ctrl+b', 'Cmd+Shift+P' -> 'meta+shift+p'
   */
  normalizeKeybinding(t) {
    return t.toLowerCase().replace("cmd", "meta").replace("command", "meta").split("+").map((r) => r.trim()).sort().join("+");
  }
  /**
   * Convert a keyboard event to normalized key string
   */
  normalizeKeyboardEvent(t) {
    const r = [];
    t.ctrlKey && r.push("ctrl"), t.altKey && r.push("alt"), t.shiftKey && r.push("shift"), t.metaKey && r.push("meta");
    const o = t.key.toLowerCase();
    return o !== "control" && o !== "alt" && o !== "shift" && o !== "meta" && r.push(o), r.sort().join("+");
  }
  notifyExecution(t, r) {
    var o;
    (o = this.executionListeners.get(t)) == null || o.forEach((n) => n(r));
  }
  notifyRegistrationChange() {
    this.registrationListeners.forEach((t) => t());
  }
}
const Et = Re(null);
function we() {
  const e = Ie(Et);
  if (!e)
    throw new Error("useCommandService must be used within CommandServiceProvider");
  return e;
}
function lo(e) {
  const t = we(), [r, o] = J(() => t.getCommand(e));
  return $(() => {
    const n = () => {
      o(t.getCommand(e));
    };
    return t.onDidChangeCommands(n);
  }, [t, e]), r;
}
function co(e) {
  const t = we(), [r, o] = J(() => e != null && e.category ? t.getCommandsByCategory(e.category) : t.getAllCommands((e == null ? void 0 : e.sorted) ?? !0));
  return $(() => {
    const n = () => {
      e != null && e.category ? o(t.getCommandsByCategory(e.category)) : o(t.getAllCommands((e == null ? void 0 : e.sorted) ?? !0));
    };
    return t.onDidChangeCommands(n);
  }, [t, e == null ? void 0 : e.category, e == null ? void 0 : e.sorted]), r;
}
function uo(e) {
  const t = we();
  return N(
    (...r) => t.executeCommand(e, ...r),
    [t, e]
  );
}
function fo(e) {
  const t = we();
  $(() => t.registerCommands(e), [t, e]);
}
function po(e) {
  const t = we();
  $(() => t.registerCommand(e), [t, e]);
}
function mo(e = !0) {
  const t = we();
  $(() => {
    if (!e) return;
    const r = (o) => {
      t.handleKeyboardEvent(o);
    };
    return window.addEventListener("keydown", r), () => {
      window.removeEventListener("keydown", r);
    };
  }, [t, e]);
}
function ho({
  children: e,
  service: t,
  enableKeyboardShortcuts: r = !0
}) {
  const [o] = J(() => t ?? new $r());
  return $(() => {
    if (!r) return;
    const n = (i) => {
      o.handleKeyboardEvent(i);
    };
    return window.addEventListener("keydown", n), () => {
      window.removeEventListener("keydown", n);
    };
  }, [o, r]), /* @__PURE__ */ k.jsx(Et.Provider, { value: o, children: e });
}
class Br {
  constructor() {
    ee(this, "viewTypes", {});
    // blockId -> viewTypeId
    ee(this, "layouts", /* @__PURE__ */ new Map());
    ee(this, "changeListeners", /* @__PURE__ */ new Set());
    ee(this, "layoutListeners", /* @__PURE__ */ new Set());
  }
  /**
   * Set which view type a block should display
   */
  setBlockViewType(t, r) {
    this.viewTypes[t] !== r && (this.viewTypes[t] = r, this.notifyChange());
  }
  /**
   * Get the current view type for a block
   */
  getBlockViewType(t) {
    return this.viewTypes[t];
  }
  /**
   * Get all current view type assignments
   */
  getAllViewTypes() {
    return { ...this.viewTypes };
  }
  /**
   * Set multiple view type assignments at once
   */
  setViewTypes(t) {
    this.viewTypes = { ...t }, this.notifyChange();
  }
  /**
   * Clear view type assignment for a block
   */
  clearBlockViewType(t) {
    delete this.viewTypes[t], this.notifyChange();
  }
  /**
   * Clear all view type assignments
   */
  clearAllViewTypes() {
    this.viewTypes = {}, this.notifyChange();
  }
  /**
   * Save a layout configuration
   */
  saveLayout(t) {
    var r;
    this.layouts.set(t.id, {
      ...t,
      metadata: {
        ...t.metadata,
        createdAt: ((r = t.metadata) == null ? void 0 : r.createdAt) || (/* @__PURE__ */ new Date()).toISOString()
      }
    }), this.notifyLayoutChange();
  }
  /**
   * Load a layout configuration
   * Returns the layout if found
   */
  loadLayout(t) {
    return this.layouts.get(t);
  }
  /**
   * Apply a saved layout (sets current view types)
   */
  applyLayout(t) {
    const r = this.layouts.get(t);
    return r ? (this.setViewTypes(r.viewTypes), !0) : (console.warn(`Layout not found: ${t}`), !1);
  }
  /**
   * Delete a saved layout
   */
  deleteLayout(t) {
    const r = this.layouts.delete(t);
    return r && this.notifyLayoutChange(), r;
  }
  /**
   * Get all saved layouts
   */
  getAllLayouts() {
    return Array.from(this.layouts.values()).sort((t, r) => {
      var i, a;
      const o = new Date(((i = t.metadata) == null ? void 0 : i.createdAt) || 0);
      return new Date(((a = r.metadata) == null ? void 0 : a.createdAt) || 0).getTime() - o.getTime();
    });
  }
  /**
   * Check if a layout exists
   */
  hasLayout(t) {
    return this.layouts.has(t);
  }
  /**
   * Create a layout configuration from current state
   */
  createLayoutFromCurrentState(t, r, o, n) {
    return {
      id: t,
      name: r,
      blocks: [...o],
      viewTypes: this.getAllViewTypes(),
      metadata: n
    };
  }
  /**
   * Subscribe to view type changes
   * @returns Unsubscribe function
   */
  onViewTypesChange(t) {
    return this.changeListeners.add(t), () => this.changeListeners.delete(t);
  }
  /**
   * Subscribe to saved layout changes (add/remove/update layouts)
   * @returns Unsubscribe function
   */
  onLayoutsChange(t) {
    return this.layoutListeners.add(t), () => this.layoutListeners.delete(t);
  }
  /**
   * Get count of saved layouts
   */
  get layoutCount() {
    return this.layouts.size;
  }
  /**
   * Clear all saved layouts
   */
  clearAllLayouts() {
    this.layouts.clear(), this.notifyLayoutChange();
  }
  /**
   * Export layouts as JSON
   */
  exportLayouts() {
    const t = Array.from(this.layouts.values());
    return JSON.stringify(t, null, 2);
  }
  /**
   * Import layouts from JSON
   */
  importLayouts(t) {
    try {
      const r = JSON.parse(t);
      let o = 0;
      for (const n of r)
        n.id && n.name && n.blocks && n.viewTypes && (this.saveLayout(n), o++);
      return o;
    } catch (r) {
      return console.error("Error importing layouts:", r), 0;
    }
  }
  notifyChange() {
    const t = this.getAllViewTypes();
    this.changeListeners.forEach((r) => r(t));
  }
  notifyLayoutChange() {
    this.layoutListeners.forEach((t) => t());
  }
}
const Ct = Re(null);
function ve() {
  const e = Ie(Ct);
  if (!e)
    throw new Error("useLayoutService must be used within LayoutServiceProvider");
  return e;
}
function bo(e) {
  const t = ve(), [r, o] = J(() => t.getBlockViewType(e));
  return $(() => {
    const n = (a) => {
      o(a[e]);
    };
    return t.onViewTypesChange(n);
  }, [t, e]), r;
}
function go() {
  const e = ve(), [t, r] = J(() => e.getAllViewTypes());
  return $(() => e.onViewTypesChange(r), [e]), t;
}
function yo() {
  const e = ve();
  return N(
    (t, r) => {
      e.setBlockViewType(t, r);
    },
    [e]
  );
}
function wo() {
  const e = ve(), [t, r] = J(() => e.getAllLayouts());
  return $(() => {
    const o = () => {
      r(e.getAllLayouts());
    };
    return e.onLayoutsChange(o);
  }, [e]), t;
}
function vo() {
  const e = ve();
  return N(
    (t, r, o, n) => {
      const i = e.createLayoutFromCurrentState(t, r, o, n);
      e.saveLayout(i);
    },
    [e]
  );
}
function xo() {
  const e = ve();
  return N(
    (t) => e.applyLayout(t),
    [e]
  );
}
function ko({
  children: e,
  service: t,
  initialViewTypes: r
}) {
  const [o] = J(() => {
    const n = t ?? new Br();
    return r && n.setViewTypes(r), n;
  });
  return /* @__PURE__ */ k.jsx(Ct.Provider, { value: o, children: e });
}
export {
  Ue as Block,
  mt as BlockContent,
  bt as BlockFooter,
  kt as BlockGroup,
  ht as BlockHeader,
  xt as BlockLayout,
  Ge as BlockSidebar,
  wt as BlockSidebarItem,
  vt as BlockSidebarSpacer,
  St as BlockSplitContainer,
  yt as BlockTabs,
  gt as BlockToolbar,
  zt as BlockTreeRenderer,
  $r as CommandService,
  ho as CommandServiceProvider,
  ft as Divider,
  Nr as Grid,
  jr as GridProvider,
  Br as LayoutService,
  ko as LayoutServiceProvider,
  Vr as ViewRegistry,
  so as ViewRegistryProvider,
  kr as applyCollapseLogic,
  Sr as calculateConstrainedSize,
  he as clamp,
  X as cn,
  vr as createCustomAdapter,
  br as defaultModes,
  qr as findAdjacentBlock,
  Fr as frToPx,
  zr as generateGridTemplate,
  Wr as getAllGridStates,
  ct as getFlexSpacePx,
  _e as getStorageAdapter,
  Hr as isCollapsed,
  Yr as isZeroSum,
  yr as loadGridState,
  be as localStorageAdapter,
  je as memoryStorageAdapter,
  Kr as pxPerFr,
  Tr as pxToFr,
  wr as removeGridState,
  gr as saveGridState,
  lt as sessionStorageAdapter,
  xo as useApplyLayout,
  Or as useBlockSplitDirection,
  bo as useBlockViewType,
  lo as useCommand,
  mo as useCommandKeyboardShortcuts,
  we as useCommandService,
  co as useCommands,
  uo as useExecuteCommand,
  Rr as useGridActions,
  re as useGridContext,
  Lr as useGridKeyboard,
  at as useGridMode,
  xr as useGridPersistence,
  Ir as useGridResize,
  Te as useGridState,
  Zr as useHideBlock,
  Jr as useIsBlockHidden,
  ve as useLayoutService,
  wo as useLayouts,
  po as useRegisterCommand,
  fo as useRegisterCommands,
  ao as useRegisterView,
  io as useRegisterViews,
  vo as useSaveLayout,
  yo as useSetBlockViewType,
  Xr as useShowBlock,
  Qr as useToggleBlockVisibility,
  oo as useViewDescriptor,
  Le as useViewRegistry,
  go as useViewTypes,
  no as useViews,
  eo as validateBlockSize,
  ro as validateLayoutIntegrity,
  to as validateTwoWayResize
};
