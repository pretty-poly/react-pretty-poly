var Et = Object.defineProperty;
var Ct = (e, t, r) => t in e ? Et(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Q = (e, t, r) => Ct(e, typeof t != "symbol" ? t + "" : t, r);
import At, { useState as J, useCallback as O, useMemo as ee, useEffect as $, useRef as me, createContext as Ie, useContext as Re, useReducer as It, useLayoutEffect as Rt, forwardRef as Z, useImperativeHandle as Lt } from "react";
var _e = { exports: {} }, xe = {};
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
function jt() {
  if (We) return xe;
  We = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(o, s, i) {
    var a = null;
    if (i !== void 0 && (a = "" + i), s.key !== void 0 && (a = "" + s.key), "key" in s) {
      i = {};
      for (var l in s)
        l !== "key" && (i[l] = s[l]);
    } else i = s;
    return s = i.ref, {
      $$typeof: e,
      type: o,
      key: a,
      ref: s !== void 0 ? s : null,
      props: i
    };
  }
  return xe.Fragment = t, xe.jsx = r, xe.jsxs = r, xe;
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
function Pt() {
  return Ke || (Ke = 1, process.env.NODE_ENV !== "production" && function() {
    function e(m) {
      if (m == null) return null;
      if (typeof m == "function")
        return m.$$typeof === _ ? null : m.displayName || m.name || null;
      if (typeof m == "string") return m;
      switch (m) {
        case g:
          return "Fragment";
        case u:
          return "Profiler";
        case c:
          return "StrictMode";
        case T:
          return "Suspense";
        case C:
          return "SuspenseList";
        case E:
          return "Activity";
      }
      if (typeof m == "object")
        switch (typeof m.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), m.$$typeof) {
          case n:
            return "Portal";
          case d:
            return (m.displayName || "Context") + ".Provider";
          case y:
            return (m._context.displayName || "Context") + ".Consumer";
          case w:
            var I = m.render;
            return m = m.displayName, m || (m = I.displayName || I.name || "", m = m !== "" ? "ForwardRef(" + m + ")" : "ForwardRef"), m;
          case R:
            return I = m.displayName || null, I !== null ? I : e(m.type) || "Memo";
          case h:
            I = m._payload, m = m._init;
            try {
              return e(m(I));
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
        var I = !1;
      } catch {
        I = !0;
      }
      if (I) {
        I = console;
        var D = I.error, M = typeof Symbol == "function" && Symbol.toStringTag && m[Symbol.toStringTag] || m.constructor.name || "Object";
        return D.call(
          I,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          M
        ), t(m);
      }
    }
    function o(m) {
      if (m === g) return "<>";
      if (typeof m == "object" && m !== null && m.$$typeof === h)
        return "<...>";
      try {
        var I = e(m);
        return I ? "<" + I + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var m = V.A;
      return m === null ? null : m.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function a(m) {
      if (W.call(m, "key")) {
        var I = Object.getOwnPropertyDescriptor(m, "key").get;
        if (I && I.isReactWarning) return !1;
      }
      return m.key !== void 0;
    }
    function l(m, I) {
      function D() {
        N || (N = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          I
        ));
      }
      D.isReactWarning = !0, Object.defineProperty(m, "key", {
        get: D,
        configurable: !0
      });
    }
    function p() {
      var m = e(this.type);
      return K[m] || (K[m] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), m = this.props.ref, m !== void 0 ? m : null;
    }
    function v(m, I, D, M, G, Y, de, U) {
      return D = Y.ref, m = {
        $$typeof: f,
        type: m,
        key: I,
        props: Y,
        _owner: G
      }, (D !== void 0 ? D : null) !== null ? Object.defineProperty(m, "ref", {
        enumerable: !1,
        get: p
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
        value: U
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    }
    function k(m, I, D, M, G, Y, de, U) {
      var H = I.children;
      if (H !== void 0)
        if (M)
          if (P(H)) {
            for (M = 0; M < H.length; M++)
              x(H[M]);
            Object.freeze && Object.freeze(H);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else x(H);
      if (W.call(I, "key")) {
        H = e(m);
        var X = Object.keys(I).filter(function(ke) {
          return ke !== "key";
        });
        M = 0 < X.length ? "{key: someKey, " + X.join(": ..., ") + ": ...}" : "{key: someKey}", te[H + M] || (X = 0 < X.length ? "{" + X.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          M,
          H,
          X,
          H
        ), te[H + M] = !0);
      }
      if (H = null, D !== void 0 && (r(D), H = "" + D), a(I) && (r(I.key), H = "" + I.key), "key" in I) {
        D = {};
        for (var se in I)
          se !== "key" && (D[se] = I[se]);
      } else D = I;
      return H && l(
        D,
        typeof m == "function" ? m.displayName || m.name || "Unknown" : m
      ), v(
        m,
        H,
        Y,
        G,
        s(),
        D,
        de,
        U
      );
    }
    function x(m) {
      typeof m == "object" && m !== null && m.$$typeof === f && m._store && (m._store.validated = 1);
    }
    var b = At, f = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), y = Symbol.for("react.consumer"), d = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), E = Symbol.for("react.activity"), _ = Symbol.for("react.client.reference"), V = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = Object.prototype.hasOwnProperty, P = Array.isArray, B = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      react_stack_bottom_frame: function(m) {
        return m();
      }
    };
    var N, K = {}, q = b.react_stack_bottom_frame.bind(
      b,
      i
    )(), A = B(o(i)), te = {};
    Se.Fragment = g, Se.jsx = function(m, I, D, M, G) {
      var Y = 1e4 > V.recentlyCreatedOwnerStacks++;
      return k(
        m,
        I,
        D,
        !1,
        M,
        G,
        Y ? Error("react-stack-top-frame") : q,
        Y ? B(o(m)) : A
      );
    }, Se.jsxs = function(m, I, D, M, G) {
      var Y = 1e4 > V.recentlyCreatedOwnerStacks++;
      return k(
        m,
        I,
        D,
        !0,
        M,
        G,
        Y ? Error("react-stack-top-frame") : q,
        Y ? B(o(m)) : A
      );
    };
  }()), Se;
}
process.env.NODE_ENV === "production" ? _e.exports = jt() : _e.exports = Pt();
var L = _e.exports;
function Je(e) {
  var t, r, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (r = Je(e[t])) && (o && (o += " "), o += r);
  } else for (r in e) e[r] && (o && (o += " "), o += r);
  return o;
}
function ae() {
  for (var e, t, r = 0, o = "", s = arguments.length; r < s; r++) (e = arguments[r]) && (t = Je(e)) && (o && (o += " "), o += t);
  return o;
}
const Ve = "-", Mt = (e) => {
  const t = Ot(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (a) => {
      const l = a.split(Ve);
      return l[0] === "" && l.length !== 1 && l.shift(), Ze(l, t) || _t(a);
    },
    getConflictingClassGroupIds: (a, l) => {
      const p = r[a] || [];
      return l && o[a] ? [...p, ...o[a]] : p;
    }
  };
}, Ze = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], o = t.nextPart.get(r), s = o ? Ze(e.slice(1), o) : void 0;
  if (s)
    return s;
  if (t.validators.length === 0)
    return;
  const i = e.join(Ve);
  return (a = t.validators.find(({
    validator: l
  }) => l(i))) == null ? void 0 : a.classGroupId;
}, He = /^\[(.+)\]$/, _t = (e) => {
  if (He.test(e)) {
    const t = He.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, Ot = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const s in r)
    Oe(r[s], o, s, t);
  return o;
}, Oe = (e, t, r, o) => {
  e.forEach((s) => {
    if (typeof s == "string") {
      const i = s === "" ? t : Fe(t, s);
      i.classGroupId = r;
      return;
    }
    if (typeof s == "function") {
      if (Dt(s)) {
        Oe(s(o), t, r, o);
        return;
      }
      t.validators.push({
        validator: s,
        classGroupId: r
      });
      return;
    }
    Object.entries(s).forEach(([i, a]) => {
      Oe(a, Fe(t, i), r, o);
    });
  });
}, Fe = (e, t) => {
  let r = e;
  return t.split(Ve).forEach((o) => {
    r.nextPart.has(o) || r.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(o);
  }), r;
}, Dt = (e) => e.isThemeGetter, Bt = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const s = (i, a) => {
    r.set(i, a), t++, t > e && (t = 0, o = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(i) {
      let a = r.get(i);
      if (a !== void 0)
        return a;
      if ((a = o.get(i)) !== void 0)
        return s(i, a), a;
    },
    set(i, a) {
      r.has(i) ? r.set(i, a) : s(i, a);
    }
  };
}, De = "!", Be = ":", Vt = Be.length, $t = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let o = (s) => {
    const i = [];
    let a = 0, l = 0, p = 0, v;
    for (let n = 0; n < s.length; n++) {
      let g = s[n];
      if (a === 0 && l === 0) {
        if (g === Be) {
          i.push(s.slice(p, n)), p = n + Vt;
          continue;
        }
        if (g === "/") {
          v = n;
          continue;
        }
      }
      g === "[" ? a++ : g === "]" ? a-- : g === "(" ? l++ : g === ")" && l--;
    }
    const k = i.length === 0 ? s : s.substring(p), x = Nt(k), b = x !== k, f = v && v > p ? v - p : void 0;
    return {
      modifiers: i,
      hasImportantModifier: b,
      baseClassName: x,
      maybePostfixModifierPosition: f
    };
  };
  if (t) {
    const s = t + Be, i = o;
    o = (a) => a.startsWith(s) ? i(a.substring(s.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: a,
      maybePostfixModifierPosition: void 0
    };
  }
  if (r) {
    const s = o;
    o = (i) => r({
      className: i,
      parseClassName: s
    });
  }
  return o;
}, Nt = (e) => e.endsWith(De) ? e.substring(0, e.length - 1) : e.startsWith(De) ? e.substring(1) : e, Gt = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((o) => [o, !0]));
  return (o) => {
    if (o.length <= 1)
      return o;
    const s = [];
    let i = [];
    return o.forEach((a) => {
      a[0] === "[" || t[a] ? (s.push(...i.sort(), a), i = []) : i.push(a);
    }), s.push(...i.sort()), s;
  };
}, Ut = (e) => ({
  cache: Bt(e.cacheSize),
  parseClassName: $t(e),
  sortModifiers: Gt(e),
  ...Mt(e)
}), Wt = /\s+/, Kt = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: o,
    getConflictingClassGroupIds: s,
    sortModifiers: i
  } = t, a = [], l = e.trim().split(Wt);
  let p = "";
  for (let v = l.length - 1; v >= 0; v -= 1) {
    const k = l[v], {
      isExternal: x,
      modifiers: b,
      hasImportantModifier: f,
      baseClassName: n,
      maybePostfixModifierPosition: g
    } = r(k);
    if (x) {
      p = k + (p.length > 0 ? " " + p : p);
      continue;
    }
    let c = !!g, u = o(c ? n.substring(0, g) : n);
    if (!u) {
      if (!c) {
        p = k + (p.length > 0 ? " " + p : p);
        continue;
      }
      if (u = o(n), !u) {
        p = k + (p.length > 0 ? " " + p : p);
        continue;
      }
      c = !1;
    }
    const y = i(b).join(":"), d = f ? y + De : y, w = d + u;
    if (a.includes(w))
      continue;
    a.push(w);
    const T = s(u, c);
    for (let C = 0; C < T.length; ++C) {
      const R = T[C];
      a.push(d + R);
    }
    p = k + (p.length > 0 ? " " + p : p);
  }
  return p;
};
function Ht() {
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
function Ft(e, ...t) {
  let r, o, s, i = a;
  function a(p) {
    const v = t.reduce((k, x) => x(k), e());
    return r = Ut(v), o = r.cache.get, s = r.cache.set, i = l, l(p);
  }
  function l(p) {
    const v = o(p);
    if (v)
      return v;
    const k = Kt(p, r);
    return s(p, k), k;
  }
  return function() {
    return i(Ht.apply(null, arguments));
  };
}
const F = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Qe = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, et = /^\((?:(\w[\w-]*):)?(.+)\)$/i, qt = /^\d+\/\d+$/, Yt = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Jt = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Zt = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Xt = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Qt = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ue = (e) => qt.test(e), j = (e) => !!e && !Number.isNaN(Number(e)), ie = (e) => !!e && Number.isInteger(Number(e)), je = (e) => e.endsWith("%") && j(e.slice(0, -1)), ne = (e) => Yt.test(e), er = () => !0, tr = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Jt.test(e) && !Zt.test(e)
), tt = () => !1, rr = (e) => Xt.test(e), or = (e) => Qt.test(e), nr = (e) => !S(e) && !z(e), sr = (e) => be(e, nt, tt), S = (e) => Qe.test(e), ce = (e) => be(e, st, tr), Pe = (e) => be(e, dr, j), qe = (e) => be(e, rt, tt), ir = (e) => be(e, ot, or), Ee = (e) => be(e, it, rr), z = (e) => et.test(e), ze = (e) => ye(e, st), ar = (e) => ye(e, ur), Ye = (e) => ye(e, rt), lr = (e) => ye(e, nt), cr = (e) => ye(e, ot), Ce = (e) => ye(e, it, !0), be = (e, t, r) => {
  const o = Qe.exec(e);
  return o ? o[1] ? t(o[1]) : r(o[2]) : !1;
}, ye = (e, t, r = !1) => {
  const o = et.exec(e);
  return o ? o[1] ? t(o[1]) : r : !1;
}, rt = (e) => e === "position" || e === "percentage", ot = (e) => e === "image" || e === "url", nt = (e) => e === "length" || e === "size" || e === "bg-size", st = (e) => e === "length", dr = (e) => e === "number", ur = (e) => e === "family-name", it = (e) => e === "shadow", fr = () => {
  const e = F("color"), t = F("font"), r = F("text"), o = F("font-weight"), s = F("tracking"), i = F("leading"), a = F("breakpoint"), l = F("container"), p = F("spacing"), v = F("radius"), k = F("shadow"), x = F("inset-shadow"), b = F("text-shadow"), f = F("drop-shadow"), n = F("blur"), g = F("perspective"), c = F("aspect"), u = F("ease"), y = F("animate"), d = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], w = () => [
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
  ], T = () => [...w(), z, S], C = () => ["auto", "hidden", "clip", "visible", "scroll"], R = () => ["auto", "contain", "none"], h = () => [z, S, p], E = () => [ue, "full", "auto", ...h()], _ = () => [ie, "none", "subgrid", z, S], V = () => ["auto", {
    span: ["full", ie, z, S]
  }, ie, z, S], W = () => [ie, "auto", z, S], P = () => ["auto", "min", "max", "fr", z, S], B = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], N = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], K = () => ["auto", ...h()], q = () => [ue, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...h()], A = () => [e, z, S], te = () => [...w(), Ye, qe, {
    position: [z, S]
  }], m = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], I = () => ["auto", "cover", "contain", lr, sr, {
    size: [z, S]
  }], D = () => [je, ze, ce], M = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    v,
    z,
    S
  ], G = () => ["", j, ze, ce], Y = () => ["solid", "dashed", "dotted", "double"], de = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], U = () => [j, je, Ye, qe], H = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    n,
    z,
    S
  ], X = () => ["none", j, z, S], se = () => ["none", j, z, S], ke = () => [j, z, S], Te = () => [ue, "full", ...h()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [ne],
      breakpoint: [ne],
      color: [er],
      container: [ne],
      "drop-shadow": [ne],
      ease: ["in", "out", "in-out"],
      font: [nr],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [ne],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [ne],
      shadow: [ne],
      spacing: ["px", j],
      text: [ne],
      "text-shadow": [ne],
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
        aspect: ["auto", "square", ue, S, z, c]
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
        columns: [j, S, z, l]
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
        object: T()
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
        overscroll: R()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": R()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": R()
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
        inset: E()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": E()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": E()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: E()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: E()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: E()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: E()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: E()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: E()
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
        z: [ie, "auto", z, S]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [ue, "full", "auto", l, ...h()]
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
        flex: [j, ue, "auto", "initial", "none", S]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", j, z, S]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", j, z, S]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [ie, "first", "last", "none", z, S]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": _()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: V()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": W()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": W()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": _()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: V()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": W()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": W()
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
        gap: h()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": h()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": h()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...B(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...N(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...N()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...B()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...N(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...N(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": B()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...N(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...N()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: h()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: h()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: h()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: h()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: h()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: h()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: h()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: h()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: h()
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
        "space-x": h()
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
        "space-y": h()
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
        font: [o, z, Pe]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", je, S]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ar, S, t]
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
        tracking: [s, z, S]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [j, "none", z, Pe]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          i,
          ...h()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", z, S]
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
        list: ["disc", "decimal", "none", z, S]
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
        placeholder: A()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: A()
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
        decoration: [j, "from-font", "auto", z, ce]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: A()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [j, "auto", z, S]
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
        indent: h()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", z, S]
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
        content: ["none", z, S]
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
        bg: te()
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
        bg: I()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, ie, z, S],
          radial: ["", z, S],
          conic: [ie, z, S]
        }, cr, ir]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: A()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: D()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: D()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: D()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: A()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: A()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: A()
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
        border: G()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": G()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": G()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": G()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": G()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": G()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": G()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": G()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": G()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": G()
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
        "divide-y": G()
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
        border: A()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": A()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": A()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": A()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": A()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": A()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": A()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": A()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": A()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: A()
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
        "outline-offset": [j, z, S]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", j, ze, ce]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: A()
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
          k,
          Ce,
          Ee
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: A()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", x, Ce, Ee]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": A()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: G()
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
        ring: A()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [j, ce]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": A()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": G()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": A()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", b, Ce, Ee]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": A()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [j, z, S]
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
        "mask-linear": [j]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": U()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": U()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": A()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": A()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": U()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": U()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": A()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": A()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": U()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": U()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": A()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": A()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": U()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": U()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": A()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": A()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": U()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": U()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": A()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": A()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": U()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": U()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": A()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": A()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": U()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": U()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": A()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": A()
      }],
      "mask-image-radial": [{
        "mask-radial": [z, S]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": U()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": U()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": A()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": A()
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
        "mask-radial-at": w()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [j]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": U()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": U()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": A()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": A()
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
        mask: te()
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
        mask: I()
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
        mask: ["none", z, S]
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
          z,
          S
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
        brightness: [j, z, S]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [j, z, S]
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
          f,
          Ce,
          Ee
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": A()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", j, z, S]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [j, z, S]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", j, z, S]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [j, z, S]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", j, z, S]
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
          z,
          S
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
        "backdrop-brightness": [j, z, S]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [j, z, S]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", j, z, S]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [j, z, S]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", j, z, S]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [j, z, S]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [j, z, S]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", j, z, S]
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
        "border-spacing": h()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": h()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": h()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", z, S]
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
        duration: [j, "initial", z, S]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", u, z, S]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [j, z, S]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", y, z, S]
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
        perspective: [g, z, S]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": T()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: X()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": X()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": X()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": X()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: se()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": se()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": se()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": se()
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
        skew: ke()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ke()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ke()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [z, S, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: T()
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
        translate: Te()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Te()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Te()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Te()
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
        accent: A()
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
        caret: A()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", z, S]
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
        "scroll-m": h()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": h()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": h()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": h()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": h()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": h()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": h()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": h()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": h()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": h()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": h()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": h()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": h()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": h()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": h()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": h()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": h()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": h()
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
        "will-change": ["auto", "scroll", "contents", "transform", z, S]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...A()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [j, ze, ce, Pe]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...A()]
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
}, pr = /* @__PURE__ */ Ft(fr);
function le(...e) {
  return pr(ae(e));
}
const mr = {
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
function at(e = mr) {
  const [t, r] = J(() => typeof window > "u" ? { width: 1024, height: 768, orientation: "landscape" } : {
    width: window.innerWidth,
    height: window.innerHeight,
    orientation: window.innerWidth > window.innerHeight ? "landscape" : "portrait"
  }), [o, s] = J(null), i = O(() => {
    if (typeof window > "u") return;
    const n = {
      width: window.innerWidth,
      height: window.innerHeight,
      orientation: window.innerWidth > window.innerHeight ? "landscape" : "portrait"
    };
    r(n);
  }, []), a = ee(() => {
    var g;
    if (o && e[o])
      return o;
    const n = Object.entries(e).filter(([c, u]) => {
      if (u.matcher)
        return u.matcher(t);
      const y = !u.minWidth || t.width >= u.minWidth, d = !u.maxWidth || t.width <= u.maxWidth;
      return y && d;
    });
    return n.sort(([, c], [, u]) => {
      const y = (c.minWidth ? 1 : 0) + (c.maxWidth ? 1 : 0);
      return (u.minWidth ? 1 : 0) + (u.maxWidth ? 1 : 0) - y;
    }), ((g = n[0]) == null ? void 0 : g[0]) || Object.keys(e)[0] || "desktop";
  }, [t, e, o]), l = ee(() => e[a], [e, a]), p = ee(() => (l == null ? void 0 : l.type) || "grid", [l]), v = O((n) => {
    if (n && !e[n]) {
      console.warn(`Mode "${n}" not found in configuration`);
      return;
    }
    s(n);
  }, [e]), k = O((n) => a === n, [a]), x = ee(() => Object.keys(e), [e]), b = O((n) => {
    switch (p) {
      case "grid":
        return ["resizing", "dividers", "collapse"].includes(n);
      case "tabs":
        return n === "tabs";
      case "dock":
        return n === "dock";
      default:
        return !1;
    }
  }, [p]), f = ee(() => {
    const n = Object.entries(e).map(([y, d]) => ({ name: y, ...d })).sort((y, d) => (y.breakpoint || 0) - (d.breakpoint || 0)), g = n.findIndex((y) => y.name === a), c = n[g + 1], u = n[g - 1];
    return {
      current: a,
      currentBreakpoint: (l == null ? void 0 : l.breakpoint) || 0,
      nextMode: c == null ? void 0 : c.name,
      nextBreakpoint: c == null ? void 0 : c.breakpoint,
      prevMode: u == null ? void 0 : u.name,
      prevBreakpoint: u == null ? void 0 : u.breakpoint,
      isSmallest: g === 0,
      isLargest: g === n.length - 1
    };
  }, [e, a, l]);
  return $(() => {
    if (typeof window > "u") return;
    const n = () => i(), g = () => {
      setTimeout(i, 100);
    };
    return window.addEventListener("resize", n), window.addEventListener("orientationchange", g), () => {
      window.removeEventListener("resize", n), window.removeEventListener("orientationchange", g);
    };
  }, [i]), {
    // Current state
    viewport: t,
    activeMode: a,
    currentModeConfig: l,
    currentLayoutType: p,
    // Mode management
    setMode: v,
    isMode: k,
    availableModes: x,
    // Features and capabilities
    supportsFeature: b,
    breakpointInfo: f,
    // Utilities
    isForced: !!o,
    updateViewport: i
  };
}
const re = "pretty-poly-grid-", he = {
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
        r && r.startsWith(re) && e.push(r);
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
        r && r.startsWith(re) && e.push(r);
      }
      e.forEach((t) => sessionStorage.removeItem(t));
    } catch (e) {
      console.warn("Failed to clear sessionStorage:", e);
    }
  }
}, pe = /* @__PURE__ */ new Map(), Ae = {
  save: (e, t) => {
    pe.set(e, t);
  },
  load: (e) => pe.get(e) || null,
  remove: (e) => {
    pe.delete(e);
  },
  clear: () => {
    for (const e of pe.keys())
      e.startsWith(re) && pe.delete(e);
  }
};
function Me(e) {
  switch (e) {
    case "localStorage":
      return typeof localStorage < "u" ? he : Ae;
    case "sessionStorage":
      return typeof sessionStorage < "u" ? lt : Ae;
    case "memory":
    default:
      return Ae;
  }
}
function $e(e) {
  return `${re}${e}`;
}
function gr(e, t, r = he) {
  const o = $e(e), s = {
    blocks: t.blocks,
    activeMode: t.activeMode
    // Don't persist viewport or transient state like activeDivider
  };
  r.save(o, s);
}
function hr(e, t = he) {
  const r = $e(e);
  return t.load(r);
}
function br(e, t = he) {
  const r = $e(e);
  t.remove(r);
}
function $r(e = he) {
  const t = {};
  try {
    if (e === he && typeof localStorage < "u")
      for (let r = 0; r < localStorage.length; r++) {
        const o = localStorage.key(r);
        if (o && o.startsWith(re)) {
          const s = o.substring(re.length), i = e.load(o);
          i && (t[s] = i);
        }
      }
    else if (e === lt && typeof sessionStorage < "u")
      for (let r = 0; r < sessionStorage.length; r++) {
        const o = sessionStorage.key(r);
        if (o && o.startsWith(re)) {
          const s = o.substring(re.length), i = e.load(o);
          i && (t[s] = i);
        }
      }
    else if (e === Ae) {
      for (const r of pe.keys())
        if (r.startsWith(re)) {
          const o = r.substring(re.length), s = e.load(r);
          s && (t[o] = s);
        }
    }
  } catch (r) {
    console.warn("Failed to get all grid states:", r);
  }
  return t;
}
function yr(e) {
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
function wr({
  gridId: e,
  enabled: t,
  state: r,
  onStateLoad: o,
  autoSave: s = !0,
  saveDelay: i = 500
}) {
  const a = me(null), l = me(), p = me(""), v = me(!1);
  $(() => {
    if (!t) {
      a.current = null;
      return;
    }
    typeof t == "function" ? a.current = yr(t) : t === "localStorage" ? a.current = Me("localStorage") : t === "sessionStorage" ? a.current = Me("sessionStorage") : a.current = Me("localStorage");
  }, [t]), $(() => {
    if (!a.current || !t || typeof t == "function" || v.current)
      return;
    const n = hr(e, a.current);
    n && (o == null || o(n), v.current = !0);
  }, [e, t]);
  const k = O((n = r) => {
    if (!a.current || !t)
      return;
    const g = JSON.stringify(n);
    if (g !== p.current)
      try {
        gr(e, n, a.current), p.current = g;
      } catch (c) {
        console.warn("Failed to save grid state:", c);
      }
  }, [e, t, r]), x = O((n = r) => {
    l.current && clearTimeout(l.current), l.current = setTimeout(() => {
      k(n);
    }, i);
  }, [k, i, r]), b = O(() => {
    if (!(!a.current || !t || typeof t == "function"))
      try {
        br(e, a.current), p.current = "";
      } catch (n) {
        console.warn("Failed to clear grid state:", n);
      }
  }, [e, t]), f = O((n = r) => {
    l.current && clearTimeout(l.current), k(n);
  }, [k, r]);
  return $(() => {
    if (!(!s || !t))
      return x(r), () => {
        l.current && clearTimeout(l.current);
      };
  }, [r, s, t, x]), $(() => {
    if (!t || typeof t == "function")
      return;
    const n = () => {
      f();
    };
    return window.addEventListener("beforeunload", n), () => {
      window.removeEventListener("beforeunload", n);
    };
  }, [f, t]), $(() => () => {
    l.current && clearTimeout(l.current);
  }, []), {
    saveState: f,
    debouncedSave: x,
    clearState: b,
    isEnabled: !!t
  };
}
function ct(e, t, r) {
  return Math.max(0, e - t - r);
}
function Nr(e, t) {
  return t > 0 ? e / t : 0;
}
function ge(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
function Gr(e, t) {
  return t > 0 && e <= t;
}
function vr(e, t, r, o, s) {
  if (r === 0)
    return e;
  const i = t <= r, a = o * 2.5;
  return i && e > a ? s : e < r && !i ? o : e;
}
function kr(e, t, r = 0, o = 1 / 0, s = !1) {
  const i = s ? -e : e, a = t + i;
  return ge(a, r, o);
}
function xr(e, t, r) {
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
function Ur(e, t) {
  return e * t;
}
function Sr(e, t) {
  return t > 0 ? e / t : 0;
}
function Wr(e, t, r) {
  return r === "start" ? e > 0 ? t[e - 1] : null : e < t.length - 1 ? t[e + 1] : null;
}
function Kr(e, t, r = 1e-3) {
  return Math.abs(e + t) <= r;
}
function zr(e, t) {
  const r = O((a) => "touches" in a ? {
    x: a.touches[0].clientX,
    y: a.touches[0].clientY
  } : {
    x: a.clientX,
    y: a.clientY
  }, []), o = O((a, l, p) => {
    const v = e.blocks[a];
    if (!v) return;
    if (v.resizable === !1) {
      console.warn(`Cannot resize block "${a}" - block is marked as non-resizable.`);
      return;
    }
    const k = r(p), x = document.querySelector(`[data-divider-id="${l}"]`), b = (x == null ? void 0 : x.getAttribute("data-divider-position")) || "end", n = Object.values(e.blocks).filter(
      (d) => d.parentId === v.parentId
    ).sort(
      (d, w) => (d.order || 0) - (w.order || 0)
    ), g = n.findIndex((d) => d.id === a);
    let c = null;
    if (b === "start" && g > 0 ? c = n[g - 1] : b === "end" && g < n.length - 1 && (c = n[g + 1]), c && c.resizable === !1) {
      console.warn(
        `Cannot resize block "${a}" - adjacent block "${c.id}" is marked as non-resizable.`
      );
      return;
    }
    if (c && v.sizeUnit === "fr" && c.sizeUnit === "px") {
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
        startPosition: k,
        initialSize: v.defaultSize || 0,
        initialAdjacentBlockId: c == null ? void 0 : c.id,
        initialAdjacentSize: c ? c.originalDefaultSize || c.defaultSize || 0 : void 0
      }
    }), document.body.style.userSelect = "none";
    const u = v.parentId ? e.blocks[v.parentId] : null, y = (u == null ? void 0 : u.direction) || "row";
    document.body.style.cursor = y === "row" ? "col-resize" : "row-resize";
  }, [e.blocks, t, r]), s = O((a) => {
    if (!e.resize.isDragging || !e.resize.activeBlockId) return;
    const l = e.blocks[e.resize.activeBlockId];
    if (!l) return;
    const p = r(a), v = l.parentId ? e.blocks[l.parentId] : null, k = (v == null ? void 0 : v.direction) || "row", x = k === "row" ? p.x - e.resize.startPosition.x : p.y - e.resize.startPosition.y;
    if (l.sizeUnit === "px") {
      const b = document.querySelector(`[data-divider-id="${e.resize.activeDividerId}"]`), n = ((b == null ? void 0 : b.getAttribute("data-divider-position")) || "end") === "start", g = kr(
        x,
        e.resize.initialSize,
        l.minSize,
        l.maxSize,
        n
      );
      t({
        type: "RESIZE_BLOCK",
        payload: { blockId: e.resize.activeBlockId, size: g }
      });
    } else if (l.sizeUnit === "fr") {
      const b = Object.values(e.blocks).filter(
        (P) => P.parentId === l.parentId
      ), f = b.filter((P) => P.sizeUnit === "fr"), n = l.parentId ? document.querySelector(`[data-block-id="${l.parentId}"]`) : document.querySelector('[data-block-id="root"]'), g = n ? k === "row" ? n.clientWidth : n.clientHeight : 1200, c = b.filter((P) => P.sizeUnit === "px").reduce((P, B) => {
        const N = document.querySelector(`[data-block-id="${B.id}"]`);
        if (!N) return P;
        const K = k === "row" ? N.clientWidth : N.clientHeight;
        return P + K;
      }, 0), y = Array.from(
        (n == null ? void 0 : n.querySelectorAll('[data-block-type="divider"]')) || []
      ).reduce((P, B) => {
        if (!(B instanceof HTMLElement)) return P;
        const N = k === "row" ? B.clientWidth : B.clientHeight;
        return P + N;
      }, 0), w = ct(g, c, y), T = f.reduce(
        (P, B) => P + (B.defaultSize || 1),
        0
      ), C = T > 0 ? w / T : 0;
      if (C === 0) return;
      const R = Sr(x, C), h = f.sort(
        (P, B) => (P.order || 0) - (B.order || 0)
      ), E = h.findIndex(
        (P) => P.id === e.resize.activeBlockId
      ), _ = document.querySelector(`[data-divider-id="${e.resize.activeDividerId}"]`), V = (_ == null ? void 0 : _.getAttribute("data-divider-position")) || "end";
      let W = null;
      if (V === "start" && E > 0 ? W = h[E - 1] : V === "end" && E < h.length - 1 && (W = h[E + 1]), W) {
        let P, B;
        P = R, B = -R;
        const N = 0.1, K = Math.max(
          N,
          e.resize.initialSize + P
        ), q = Math.max(
          N,
          (e.resize.initialAdjacentSize || 1) + B
        ), A = K - e.resize.initialSize, te = q - (e.resize.initialAdjacentSize || 1);
        Math.abs(A + te) < 0.01 && (t({
          type: "RESIZE_BLOCK",
          payload: {
            blockId: e.resize.activeBlockId,
            size: K
          }
        }), t({
          type: "RESIZE_BLOCK",
          payload: { blockId: W.id, size: q }
        }));
      }
    }
  }, [e.resize, e.blocks, t, r]), i = O(() => {
    t({ type: "END_RESIZE" }), document.body.style.userSelect = "", document.body.style.cursor = "";
  }, [t]);
  return {
    startResize: o,
    updateResize: s,
    endResize: i
  };
}
function Tr(e, t) {
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
      const s = e.hiddenBlocks.has(t.payload.blockId), i = new Set(e.hiddenBlocks);
      return s ? i.delete(t.payload.blockId) : i.add(t.payload.blockId), {
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
      const p = l.collapseTo ?? 0, v = l.minSize ?? 0, k = Math.max(p, v);
      return {
        ...e,
        blocks: {
          ...e.blocks,
          [t.payload.blockId]: {
            ...l,
            // Preserve original size for expand
            originalDefaultSize: l.originalDefaultSize || l.defaultSize,
            defaultSize: k,
            size: k
          }
        }
      };
    case "EXPAND_BLOCK":
      const x = e.blocks[t.payload.blockId];
      if (!x) return e;
      const b = x.originalDefaultSize || x.defaultSize || 100;
      return {
        ...e,
        blocks: {
          ...e.blocks,
          [t.payload.blockId]: {
            ...x,
            defaultSize: b,
            size: b
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
      const f = Object.fromEntries(
        Object.entries(e.blocks).map(([n, g]) => [
          n,
          {
            ...g,
            size: g.defaultSize
            // Reset to original defaultSize stored somewhere, or current defaultSize
          }
        ])
      );
      return {
        ...e,
        blocks: f,
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
      const { targetBlockId: n, direction: g, firstChildId: c, secondChildId: u, initialSize: y = 1 } = t.payload, d = e.blocks[n];
      if (!d)
        return console.warn(`Cannot split: block ${n} not found`), e;
      if (d.type !== "group")
        return console.warn(`Cannot split: block ${n} is not a group`), e;
      if (d.canSplit !== !0)
        return console.warn(`Cannot split: block ${n} does not have canSplit enabled`), e;
      const w = g === "horizontal" ? "column" : "row", T = t.payload.newViewType || d.defaultViewType;
      if (!d.direction) {
        const C = d.children || [], R = C[0], h = R ? e.blocks[R] : void 0, E = {
          ...d,
          direction: w,
          children: [c, u]
        }, _ = {
          id: c,
          type: "block",
          parentId: n,
          order: 0,
          defaultSize: y,
          sizeUnit: "fr",
          viewType: h == null ? void 0 : h.viewType,
          viewState: h == null ? void 0 : h.viewState
        }, V = {
          id: u,
          type: "block",
          parentId: n,
          order: 1,
          defaultSize: y,
          sizeUnit: "fr",
          viewType: T
        }, W = { ...e.blocks };
        return C.forEach((P) => {
          delete W[P];
        }), {
          ...e,
          blocks: {
            ...W,
            [n]: E,
            [c]: _,
            [u]: V
          }
        };
      }
      if (d.direction) {
        if (d.direction !== w)
          return console.warn(`Cannot split group ${n}: direction mismatch (has ${d.direction}, requested ${w})`), e;
        const C = {
          ...d,
          children: [...d.children || [], u]
        }, R = {
          id: u,
          type: "block",
          parentId: n,
          order: ((r = d.children) == null ? void 0 : r.length) || 0,
          defaultSize: y,
          sizeUnit: "fr",
          viewType: T
        };
        return {
          ...e,
          blocks: {
            ...e.blocks,
            [n]: C,
            [u]: R
          }
        };
      }
      return e;
    }
    case "UNSPLIT_BLOCK": {
      const { blockId: n } = t.payload, g = e.blocks[n];
      if (!g || g.type !== "group" || !g.children)
        return e;
      const c = { ...e.blocks };
      g.children.forEach((y) => {
        delete c[y];
      });
      const u = {
        ...g,
        type: "block",
        children: void 0,
        viewType: void 0
        // User will need to set content
      };
      return c[n] = u, {
        ...e,
        blocks: c
      };
    }
    case "ADD_BLOCK": {
      const { parentId: n, block: g } = t.payload, c = e.blocks[n];
      if (!c) return e;
      const u = c.type === "group" && c.children ? {
        ...c,
        children: [...c.children, g.id]
      } : c;
      return {
        ...e,
        blocks: {
          ...e.blocks,
          [n]: u,
          [g.id]: g
        }
      };
    }
    case "REMOVE_BLOCK": {
      const { blockId: n } = t.payload, g = e.blocks[n];
      if (!g) return e;
      const c = { ...e.blocks };
      if (g.parentId) {
        const y = c[g.parentId];
        y && y.type === "group" && y.children && (c[g.parentId] = {
          ...y,
          children: y.children.filter((d) => d !== n)
        });
      }
      delete c[n];
      const u = new Set(e.hiddenBlocks);
      return u.delete(n), {
        ...e,
        blocks: c,
        hiddenBlocks: u
      };
    }
    case "SET_BLOCK_VIEW_TYPE": {
      const { blockId: n, viewType: g } = t.payload, c = e.blocks[n];
      return c ? {
        ...e,
        blocks: {
          ...e.blocks,
          [n]: {
            ...c,
            viewType: g
          }
        }
      } : e;
    }
    default:
      return e;
  }
}
function Er(e, t, r) {
  return {
    blocks: e.reduce((s, i) => (s[i.id] = {
      ...i,
      size: i.defaultSize,
      originalDefaultSize: i.defaultSize
      // Store original size for expand functionality
    }, s), {}),
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
const dt = Ie(null);
function Cr({
  children: e,
  blocks: t,
  modes: r,
  gridId: o = "default",
  persist: s = !1,
  persistKey: i,
  onModeChange: a,
  onLayoutChange: l
}) {
  const { activeMode: p, viewport: v, setMode: k } = at(r), [x, b] = It(
    Tr,
    Er(t, v, p)
  );
  $(() => {
    b({
      type: "UPDATE_VIEWPORT",
      payload: { viewport: v }
    });
  }, [v]), $(() => {
    const d = x.activeMode;
    p !== d && (b({
      type: "SWITCH_MODE",
      payload: { mode: p }
    }), a == null || a(p, d));
  }, [p, x.activeMode, a]);
  const { saveState: f, clearState: n } = wr({
    gridId: i || o,
    enabled: s,
    state: x,
    onStateLoad: (d) => {
      b({ type: "LOAD_STATE", payload: { state: d } });
    },
    autoSave: !0
  }), { startResize: g, updateResize: c, endResize: u } = zr(x, b), y = ee(
    () => ({
      gridId: o,
      state: {
        ...x,
        activeMode: p,
        viewport: v
      },
      dispatch: b,
      // Grid operations
      resizeBlock: (d, w) => {
        b({
          type: "RESIZE_BLOCK",
          payload: { blockId: d, size: w }
        });
      },
      collapseBlock: (d) => {
        b({
          type: "COLLAPSE_BLOCK",
          payload: { blockId: d }
        });
      },
      expandBlock: (d) => {
        b({
          type: "EXPAND_BLOCK",
          payload: { blockId: d }
        });
      },
      switchMode: (d) => {
        k(d);
      },
      // Block visibility operations
      hideBlock: (d) => {
        b({
          type: "HIDE_BLOCK",
          payload: { blockId: d }
        });
      },
      showBlock: (d) => {
        b({
          type: "SHOW_BLOCK",
          payload: { blockId: d }
        });
      },
      toggleBlockVisibility: (d) => {
        b({
          type: "TOGGLE_BLOCK_VISIBILITY",
          payload: { blockId: d }
        });
      },
      // Split operations (LayoutService primitives)
      splitBlock: (d, w, T = {}) => {
        const { initialSize: C = 1, viewType: R, position: h = "after" } = T, E = Date.now(), _ = `${d}-${E}-1`, V = `${d}-${E}-2`;
        return b({
          type: "SPLIT_BLOCK",
          payload: {
            targetBlockId: d,
            direction: w,
            newBlockId: h === "before" ? _ : V,
            firstChildId: _,
            secondChildId: V,
            initialSize: C,
            newViewType: R,
            position: h
          }
        }), h === "before" ? _ : V;
      },
      unsplitBlock: (d) => {
        b({
          type: "UNSPLIT_BLOCK",
          payload: { blockId: d }
        });
      },
      canSplit: (d) => {
        var C;
        const w = x.blocks[d];
        if (!w || w.type !== "group" || w.canSplit !== !0) return !1;
        const T = ((C = w.splitConfig) == null ? void 0 : C.minSplitSize) || 200;
        return !(w.sizeUnit === "px" && (w.defaultSize || 0) < T * 2);
      },
      addBlock: (d, w) => {
        const T = w.id || `block-${Date.now()}`, C = {
          id: T,
          type: "block",
          parentId: d,
          defaultSize: 1,
          sizeUnit: "fr",
          ...w
        };
        return b({
          type: "ADD_BLOCK",
          payload: { parentId: d, block: C }
        }), T;
      },
      removeBlock: (d) => {
        b({
          type: "REMOVE_BLOCK",
          payload: { blockId: d }
        });
      },
      // View type operations (future ViewRegistry support)
      setBlockViewType: (d, w) => {
        b({
          type: "SET_BLOCK_VIEW_TYPE",
          payload: { blockId: d, viewType: w }
        });
      },
      getBlockViewType: (d) => {
        var w;
        return (w = x.blocks[d]) == null ? void 0 : w.viewType;
      },
      // Resize operations (using extracted hook)
      startResize: g,
      updateResize: c,
      endResize: u,
      // Persistence
      persistState: () => f(x),
      resetState: () => {
        b({ type: "RESET_STATE" }), n();
      }
    }),
    [o, x, p, v, f, n, k, g, c, u]
  );
  return $(() => {
    if (l) {
      const d = Object.values(x.blocks);
      l(d);
    }
  }, [x.blocks, l]), /* @__PURE__ */ L.jsx(dt.Provider, { value: y, children: e });
}
function oe() {
  const e = Re(dt);
  if (!e)
    throw new Error("useGridContext must be used within a GridProvider");
  return e;
}
function Ne() {
  const { state: e } = oe();
  return e;
}
function Ar() {
  const {
    resizeBlock: e,
    collapseBlock: t,
    expandBlock: r,
    hideBlock: o,
    showBlock: s,
    toggleBlockVisibility: i,
    switchMode: a,
    persistState: l,
    resetState: p
  } = oe();
  return {
    resizeBlock: e,
    collapseBlock: t,
    expandBlock: r,
    hideBlock: o,
    showBlock: s,
    toggleBlockVisibility: i,
    switchMode: a,
    persistState: l,
    resetState: p
  };
}
function ut() {
  const { startResize: e, updateResize: t, endResize: r, state: o } = oe();
  return {
    startResize: e,
    updateResize: t,
    endResize: r,
    isDragging: o.resize.isDragging,
    activeBlockId: o.resize.activeBlockId,
    activeDividerId: o.resize.activeDividerId
  };
}
function Hr(e) {
  const { state: t } = oe();
  return t.hiddenBlocks.has(e);
}
function Fr() {
  const { hideBlock: e } = oe();
  return e;
}
function qr() {
  const { showBlock: e } = oe();
  return e;
}
function Yr() {
  const { toggleBlockVisibility: e } = oe();
  return e;
}
function Ir({
  blocks: e,
  containerRef: t,
  onSizeChange: r,
  direction: o = "row"
}) {
  const {
    startResize: s,
    updateResize: i,
    endResize: a,
    isDragging: l,
    activeBlockId: p,
    activeDividerId: v
  } = ut(), k = O(() => {
    if (!t.current) return 0;
    const c = t.current.getBoundingClientRect();
    return o === "column" ? c.width : c.height;
  }, [o, t]), x = O(() => {
    const c = k();
    if (c === 0) return 0;
    const u = e.filter((T) => T.sizeUnit === "px").reduce((T, C) => T + (C.defaultSize || 0), 0), y = 0, d = e.filter((T) => T.sizeUnit === "fr").reduce((T, C) => T + (C.defaultSize || 1), 0), w = ct(c, u, y);
    return d > 0 ? w / d : 0;
  }, [e, k]), b = O((c) => {
    const u = e.find((y) => y.id === c);
    u && u.defaultSize !== void 0 && (r == null || r(c, u.defaultSize));
  }, [e, r]), f = O((c) => {
    const u = e.find((y) => y.id === c);
    u && u.collapseTo !== void 0 && (r == null || r(c, u.collapseTo));
  }, [e, r]), n = O((c) => {
    const u = e.find((y) => y.id === c);
    u && u.defaultSize !== void 0 && (r == null || r(c, u.defaultSize));
  }, [e, r]), g = O((c) => {
    const u = e.find((y) => y.id === c);
    return !u || !u.collapseAt ? !1 : (u.defaultSize || 0) <= u.collapseAt;
  }, [e]);
  return $(() => {
    const c = (w) => {
      w.preventDefault(), i(w);
    }, u = (w) => {
      w.preventDefault(), i(w);
    }, y = () => {
      a();
    }, d = () => {
      a();
    };
    if (l)
      return document.addEventListener("mousemove", c), document.addEventListener("mouseup", y), document.addEventListener("touchmove", u), document.addEventListener("touchend", d), () => {
        document.removeEventListener("mousemove", c), document.removeEventListener("mouseup", y), document.removeEventListener("touchmove", u), document.removeEventListener("touchend", d);
      };
  }, [l, i, a]), {
    // State
    isDragging: l,
    activeBlockId: p,
    activeDividerId: v,
    // Actions
    startResize: s,
    resetBlock: b,
    collapseBlock: f,
    expandBlock: n,
    // Utilities
    isBlockCollapsed: g,
    getContainerSize: k,
    calculatePixelsPerFr: x
  };
}
function Rr({
  enabled: e = !0,
  blocks: t,
  onResizeBlock: r,
  onFocusBlock: o,
  onCollapseBlock: s,
  onExpandBlock: i,
  onSplitBlock: a,
  containerRef: l,
  stepSize: p = 10,
  largeStepSize: v = 50
}) {
  const k = O(() => {
    const c = document.activeElement;
    return (c == null ? void 0 : c.dataset.blockType) === "block" || (c == null ? void 0 : c.dataset.blockType) === "group" ? c : (c == null ? void 0 : c.closest('[data-block-type="block"], [data-block-type="group"]')) || null;
  }, []), x = O((c) => {
    if (!c) return null;
    const u = c.dataset.blockId;
    return t.find((y) => y.id === u) || null;
  }, [t]), b = O((c, u) => {
    if (!(l != null && l.current)) return null;
    const y = Array.from(
      l.current.querySelectorAll('[data-block-type="block"], [data-block-type="group"]')
    ), d = c.getBoundingClientRect(), w = {
      x: d.left + d.width / 2,
      y: d.top + d.height / 2
    }, T = y.filter((C) => {
      if (C === c) return !1;
      const R = C.getBoundingClientRect(), h = {
        x: R.left + R.width / 2,
        y: R.top + R.height / 2
      };
      switch (u) {
        case "up":
          return h.y < w.y;
        case "down":
          return h.y > w.y;
        case "left":
          return h.x < w.x;
        case "right":
          return h.x > w.x;
        default:
          return !1;
      }
    });
    return T.length === 0 ? null : (T.sort((C, R) => {
      const h = C.getBoundingClientRect(), E = R.getBoundingClientRect(), _ = {
        x: h.left + h.width / 2,
        y: h.top + h.height / 2
      }, V = {
        x: E.left + E.width / 2,
        y: E.top + E.height / 2
      }, W = Math.sqrt(
        Math.pow(_.x - w.x, 2) + Math.pow(_.y - w.y, 2)
      ), P = Math.sqrt(
        Math.pow(V.x - w.x, 2) + Math.pow(V.y - w.y, 2)
      );
      return W - P;
    }), T[0]);
  }, [l]), f = O((c) => {
    if (!e) return;
    const u = k();
    if (!u) return;
    const y = x(u);
    if (!y) return;
    const d = c.ctrlKey || c.metaKey, w = c.shiftKey, T = w ? v : p;
    if (!d && !w)
      switch (c.key) {
        case "ArrowUp":
          c.preventDefault();
          const C = b(u, "up");
          C && (C.focus(), o == null || o(C.dataset.blockId || ""));
          break;
        case "ArrowDown":
          c.preventDefault();
          const R = b(u, "down");
          R && (R.focus(), o == null || o(R.dataset.blockId || ""));
          break;
        case "ArrowLeft":
          c.preventDefault();
          const h = b(u, "left");
          h && (h.focus(), o == null || o(h.dataset.blockId || ""));
          break;
        case "ArrowRight":
          c.preventDefault();
          const E = b(u, "right");
          E && (E.focus(), o == null || o(E.dataset.blockId || ""));
          break;
        case "Enter":
        case " ":
          c.preventDefault(), y.collapsible && (i == null || i(y.id));
          break;
        case "Escape":
          c.preventDefault(), u.blur();
          break;
      }
    if (d && r)
      switch (c.key) {
        case "ArrowUp":
          c.preventDefault(), r(y.id, -T);
          break;
        case "ArrowDown":
          c.preventDefault(), r(y.id, T);
          break;
        case "ArrowLeft":
          c.preventDefault(), r(y.id, -T);
          break;
        case "ArrowRight":
          c.preventDefault(), r(y.id, T);
          break;
      }
    if (d)
      switch (c.key) {
        case "Minus":
        case "-":
          c.preventDefault(), s == null || s(y.id);
          break;
        case "Plus":
        case "+":
        case "=":
          c.preventDefault(), i == null || i(y.id);
          break;
        case "\\":
          c.preventDefault(), w ? a == null || a(y.id, "horizontal") : a == null || a(y.id, "vertical");
          break;
      }
  }, [
    e,
    k,
    x,
    b,
    r,
    o,
    s,
    i,
    a,
    p,
    v
  ]), n = O((c) => {
    if (!(l != null && l.current)) return;
    const u = l.current.querySelector(
      `[data-block-id="${c}"]`
    );
    u && (u.focus(), o == null || o(c));
  }, [l, o]), g = O(() => l != null && l.current ? Array.from(
    l.current.querySelectorAll(
      '[data-block-type="block"][tabindex], [data-block-type="group"][tabindex]'
    )
  ) : [], [l]);
  return $(() => {
    if (e)
      return document.addEventListener("keydown", f), () => {
        document.removeEventListener("keydown", f);
      };
  }, [f, e]), {
    focusBlock: n,
    getFocusableBlocks: g,
    getFocusedBlock: k,
    isEnabled: e
  };
}
const ft = ({
  targetId: e,
  position: t,
  direction: r,
  size: o = 4,
  // Default hover zone size (like VS Code)
  className: s,
  "aria-label": i
}) => {
  const a = me(null), l = Ne(), { startResize: p, isDragging: v, activeDividerId: k } = ut(), [x, b] = J({
    left: 0,
    top: 0,
    width: 0,
    height: 0
  }), f = l.blocks[e], n = r === "vertical", g = `${e}-${t}-divider`, c = v && k === g, u = O(() => {
    const d = document.querySelector("[data-grid-id]"), w = document.querySelector(`[data-block-id="${e}"]`);
    if (!d || !w) return;
    const T = d.getBoundingClientRect(), C = w.getBoundingClientRect(), R = f == null ? void 0 : f.parentId, h = R ? document.querySelector(`[data-block-id="${R}"]`) : d;
    if (!h) return;
    const E = h.getBoundingClientRect();
    if (n) {
      const _ = t === "start" ? C.left - T.left : C.right - T.left;
      b({
        left: _ - o / 2,
        // Center on edge
        top: E.top - T.top,
        // Position relative to parent
        width: o,
        height: E.height
        // Use parent height to constrain divider
      });
    } else {
      const _ = t === "start" ? C.top - T.top : C.bottom - T.top;
      b({
        left: E.left - T.left,
        // Position relative to parent
        top: _ - o / 2,
        // Center on edge
        width: E.width,
        // Use parent width to constrain divider
        height: o
      });
    }
  }, [e, t, n, o, f == null ? void 0 : f.parentId]);
  Rt(() => {
    const d = document.querySelector("[data-grid-id]"), w = document.querySelector(`[data-block-id="${e}"]`);
    if (!d || !w) return;
    u();
    const T = new ResizeObserver(() => {
      u();
    });
    T.observe(d), T.observe(w);
    const C = f == null ? void 0 : f.parentId, R = C ? document.querySelector(`[data-block-id="${C}"]`) : null;
    return R && T.observe(R), () => {
      T.disconnect();
    };
  }, [e, u, f == null ? void 0 : f.parentId]), $(() => {
    u();
  }, [l.blocks, u]);
  const y = O((d) => {
    d.preventDefault(), p(e, g, d);
  }, [e, g, p]);
  return f ? /* @__PURE__ */ L.jsx(
    "div",
    {
      ref: a,
      className: le(
        "pretty-poly-divider",
        "absolute",
        "bg-transparent",
        // Invisible by default
        "transition-colors duration-100",
        "hover:bg-[var(--divider-hover-color,rgba(59,130,246,0.5))]",
        c && "bg-[var(--divider-active-color,rgba(59,130,246,0.7))]",
        n ? "cursor-col-resize" : "cursor-row-resize",
        s
      ),
      style: {
        left: `${x.left}px`,
        top: `${x.top}px`,
        width: `${x.width}px`,
        height: `${x.height}px`,
        pointerEvents: "auto",
        // Re-enable pointer events (parent has pointer-events: none)
        zIndex: 10
      },
      "data-divider-id": g,
      "data-target-block": e,
      "data-divider-position": t,
      "data-divider-direction": r,
      role: "separator",
      "aria-label": i || `Resize ${e}`,
      "aria-valuenow": f == null ? void 0 : f.defaultSize,
      "aria-valuemin": f == null ? void 0 : f.minSize,
      "aria-valuemax": f == null ? void 0 : f.maxSize,
      tabIndex: 0,
      onMouseDown: y,
      onTouchStart: y
    }
  ) : null;
};
ft.displayName = "Divider";
function Lr(e, t) {
  if (!t)
    return { targetId: e.id, position: "end" };
  const r = e.sizeUnit || "fr", o = t.sizeUnit || "fr";
  return r === "fr" && o === "px" ? { targetId: t.id, position: "start" } : r === "px" && o === "fr" ? { targetId: e.id, position: "end" } : { targetId: e.id, position: "end" };
}
function jr(e) {
  const t = [];
  return Object.values(e).filter((o) => o.type === "group").forEach((o) => {
    const s = Object.values(e).filter((l) => l.parentId === o.id).sort((l, p) => (l.order || 0) - (p.order || 0));
    if (s.length === 0) return;
    const a = o.direction === "row" ? "vertical" : "horizontal";
    s.forEach((l, p) => {
      if (p === 0) return;
      const v = s[p - 1], k = v.resizable !== !1, x = l.resizable !== !1;
      if (!k && !x)
        return;
      const { targetId: b, position: f } = Lr(v, l), n = e[b];
      n && n.resizable === !1 || t.push({
        id: `divider-${v.id}-${l.id}`,
        targetBlockId: b,
        position: f,
        direction: a
      });
    });
  }), t;
}
const Pr = () => {
  const e = Ne(), t = ee(() => jr(e.blocks), [e.blocks]);
  return t.length === 0 ? null : /* @__PURE__ */ L.jsx(
    "div",
    {
      className: "pretty-poly-divider-overlay",
      style: {
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 10
      },
      children: t.map((r) => /* @__PURE__ */ L.jsx(
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
  const s = me(null), {
    state: i,
    resizeBlock: a,
    collapseBlock: l,
    expandBlock: p,
    switchMode: v,
    persistState: k,
    resetState: x
  } = oe(), b = i.resize.isDragging;
  Lt(
    o,
    () => ({
      resizeBlock: a,
      collapseBlock: l,
      expandBlock: p,
      switchMode: v,
      persistState: k,
      resetState: x,
      getState: () => i
    }),
    [
      a,
      l,
      p,
      v,
      k,
      x,
      i
    ]
  );
  const f = ee(() => Object.values(i.blocks).sort((w, T) => (w.order || 0) - (T.order || 0)), [i.blocks]), n = ee(() => f.find((d) => !d.parentId), [f]);
  Ir({
    blocks: f,
    containerRef: s,
    onSizeChange: a,
    direction: (n == null ? void 0 : n.direction) || "row"
  });
  const { splitBlock: g } = oe();
  Rr({
    enabled: !0,
    blocks: f,
    containerRef: s,
    onResizeBlock: (d, w) => {
      const T = i.blocks[d];
      if (T) {
        const C = T.defaultSize || 0, R = Math.max(0, C + w);
        a(d, R);
      }
    },
    onCollapseBlock: l,
    onExpandBlock: p,
    onSplitBlock: (d, w) => {
      g(d, w);
    }
  });
  const { gridStyles: c, cssVariables: u, modeStyles: y } = ee(() => {
    if (!n)
      return { gridStyles: "", cssVariables: "", modeStyles: "" };
    const d = f.reduce((E, _) => {
      if (_.id === n.id) return E;
      const V = _.parentId || n.id;
      return E[V] || (E[V] = []), E[V].push(_), E;
    }, {}), w = f.filter((E) => E.defaultSize !== void 0).map((E) => {
      const _ = E.sizeUnit === "px" ? `${E.defaultSize}px` : `${E.defaultSize}fr`;
      return `--${n.id}-${E.id}-size: ${_};`;
    }).join(`
  `), T = () => "", C = (E, _ = /* @__PURE__ */ new Set()) => {
      if (_.has(E))
        return console.warn(`Circular reference detected for parent: ${E}`), "";
      const V = new Set(_);
      V.add(E);
      const W = d[E] || [];
      if (W.length === 0) return "";
      const P = [...W].sort(
        (I, D) => (I.order || 0) - (D.order || 0)
      ), B = f.find((I) => I.id === E) || n, N = B == null ? void 0 : B.direction, K = P.map((I) => ({
        id: I.id,
        sizeUnit: I.sizeUnit || "fr",
        size: I.defaultSize || 1,
        dividerPosition: "none",
        // Dividers are overlays, not in grid template
        dividerSize: 0
        // Not used since dividers are overlays
      })), q = xr(K, n.id, i.hiddenBlocks), te = (B == null ? void 0 : B.hasToolbar) === !0 ? `[data-block-id="${E}"] > [data-split-content]` : `[data-block-id="${E}"]`;
      let m = "";
      N ? m = `
${te} {
  display: grid;
  ${N === "column" ? "grid-template-rows" : "grid-template-columns"}: ${q};
  ${N === "column" ? "grid-template-columns: 1fr;" : "grid-template-rows: 1fr;"}
}` : m = `
${te} {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
}`;
      for (const I of P)
        I.type === "group" && (m += C(I.id, V));
      return m;
    }, R = C(n.id), h = T();
    return {
      cssVariables: `:root {
  ${w}
}`,
      gridStyles: R,
      modeStyles: h
    };
  }, [f, n, i.hiddenBlocks]);
  return n ? /* @__PURE__ */ L.jsxs(L.Fragment, { children: [
    /* @__PURE__ */ L.jsxs("style", { type: "text/css", children: [
      u,
      c,
      y
    ] }),
    /* @__PURE__ */ L.jsxs(
      "div",
      {
        ref: s,
        className: le(
          "group relative overflow-hidden",
          b && "select-none cursor-grabbing pretty-poly-grid--dragging",
          t
        ),
        "data-grid-id": n.id,
        "data-block-id": n.id,
        "data-block-type": n.type,
        "data-active-mode": i.activeMode,
        "aria-label": r || "Resizable grid layout",
        role: "application",
        style: { isolation: "isolate" },
        children: [
          e,
          (i.activeMode === "grid" || i.activeMode === "desktop") && /* @__PURE__ */ L.jsx(Pr, {})
        ]
      }
    )
  ] }) : (console.warn("No root block found in grid configuration"), null);
});
pt.displayName = "GridInternal";
const Mr = Z(
  ({
    children: e,
    defaultLayout: t = [],
    modes: r,
    persist: o = !1,
    persistKey: s,
    onLayoutChange: i,
    onModeChange: a,
    className: l,
    dividers: p = "manual",
    dividerConfig: v,
    "aria-label": k
  }, x) => {
    const b = t.find((n) => !n.parentId), f = (b == null ? void 0 : b.id) || "root";
    return /* @__PURE__ */ L.jsx(
      Cr,
      {
        blocks: t,
        modes: r,
        gridId: f,
        persist: o,
        persistKey: s,
        onLayoutChange: i,
        onModeChange: a,
        children: /* @__PURE__ */ L.jsx(
          pt,
          {
            ref: x,
            className: l,
            dividers: p,
            dividerConfig: v,
            "aria-label": k,
            children: e
          }
        )
      }
    );
  }
);
Mr.displayName = "Grid";
const mt = Z(
  ({ scrollMode: e = "vertical", className: t, children: r, "aria-label": o }, s) => {
    const i = {
      vertical: "overflow-y-auto overflow-x-hidden",
      horizontal: "overflow-x-auto overflow-y-hidden",
      both: "overflow-auto",
      none: "overflow-hidden"
    };
    return /* @__PURE__ */ L.jsx(
      "div",
      {
        ref: s,
        className: le(
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
const gt = Z(
  ({ position: e = "top", className: t, children: r, "aria-label": o }, s) => /* @__PURE__ */ L.jsx(
    "div",
    {
      ref: s,
      className: le(
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
gt.displayName = "Block.Header";
const ht = Z(
  ({ className: e, children: t, "aria-label": r }, o) => /* @__PURE__ */ L.jsx(
    "div",
    {
      ref: o,
      className: le(
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
ht.displayName = "Block.Footer";
const bt = Z(
  ({ left: e, center: t, right: r, className: o, "aria-label": s }, i) => /* @__PURE__ */ L.jsxs(
    "div",
    {
      ref: i,
      className: le(
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
      "aria-label": s || "Toolbar",
      role: "toolbar",
      children: [
        /* @__PURE__ */ L.jsx("div", { className: "flex items-center space-x-2 flex-shrink-0", children: e }),
        /* @__PURE__ */ L.jsx("div", { className: "flex items-center justify-center flex-1 px-4", children: t }),
        /* @__PURE__ */ L.jsx("div", { className: "flex items-center space-x-2 flex-shrink-0", children: r })
      ]
    }
  )
);
bt.displayName = "Block.Toolbar";
const yt = Z(
  ({
    tabs: e,
    activeTab: t,
    onTabChange: r,
    onTabClose: o,
    className: s,
    "aria-label": i,
    allowOverflow: a = !0
  }, l) => {
    const [p, v] = J(null), k = (f, n) => {
      n.preventDefault(), f.disabled || r(f.id);
    }, x = (f, n) => {
      n.preventDefault(), n.stopPropagation(), o && f.closable && o(f.id);
    }, b = (f, n) => {
      (n.key === "Enter" || n.key === " ") && (n.preventDefault(), f.disabled || r(f.id));
    };
    return /* @__PURE__ */ L.jsx(
      "div",
      {
        ref: l,
        className: ae(
          "pretty-poly-block-tabs",
          "flex items-center",
          "border-b border-border",
          "bg-card",
          a ? "overflow-x-auto" : "overflow-x-hidden",
          s
        ),
        role: "tablist",
        "aria-label": i || "Block tabs",
        children: /* @__PURE__ */ L.jsx("div", { className: "flex items-center min-w-0", children: e.map((f) => {
          const n = f.id === t, g = p === f.id, c = f.icon;
          return /* @__PURE__ */ L.jsxs(
            "div",
            {
              className: ae(
                "flex items-center space-x-2 px-3 py-2 text-sm cursor-pointer",
                "border-b-2 transition-colors duration-150",
                "min-w-0 flex-shrink-0",
                // Prevent shrinking
                n ? "border-primary text-primary bg-accent" : "border-transparent text-muted-foreground hover:text-foreground hover:bg-accent",
                f.disabled && "opacity-50 cursor-not-allowed",
                !a && "flex-1"
                // Equal width tabs when overflow disabled
              ),
              role: "tab",
              "aria-selected": n,
              "aria-disabled": f.disabled,
              tabIndex: f.disabled ? -1 : 0,
              onClick: (u) => k(f, u),
              onKeyDown: (u) => b(f, u),
              onMouseEnter: () => v(f.id),
              onMouseLeave: () => v(null),
              "data-tab-id": f.id,
              children: [
                c && /* @__PURE__ */ L.jsx(c, { className: "w-4 h-4 flex-shrink-0" }),
                /* @__PURE__ */ L.jsx("span", { className: "truncate min-w-0", children: f.label }),
                f.closable && o && /* @__PURE__ */ L.jsx(
                  "button",
                  {
                    className: ae(
                      "flex-shrink-0 w-4 h-4 rounded-sm hover:bg-muted",
                      "flex items-center justify-center",
                      "transition-colors duration-150",
                      g || n ? "opacity-100" : "opacity-0"
                    ),
                    onClick: (u) => x(f, u),
                    "aria-label": `Close ${f.label} tab`,
                    tabIndex: -1,
                    children: /* @__PURE__ */ L.jsx(
                      "svg",
                      {
                        className: "w-3 h-3",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /* @__PURE__ */ L.jsx(
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
            f.id
          );
        }) })
      }
    );
  }
);
yt.displayName = "Block.Tabs";
const Ge = Z(
  ({ position: e = "left", width: t = 48, className: r, children: o, "aria-label": s }, i) => /* @__PURE__ */ L.jsx(
    "div",
    {
      ref: i,
      className: ae(
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
      "aria-label": s || "Sidebar navigation",
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
    badge: s,
    onClick: i,
    className: a,
    "aria-label": l
  }, p) => {
    const [v, k] = J(!1), x = () => {
      t && !o && k(!0);
    }, b = () => {
      k(!1);
    }, f = () => {
      !o && i && i();
    }, n = (g) => {
      (g.key === "Enter" || g.key === " ") && (g.preventDefault(), f());
    };
    return /* @__PURE__ */ L.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ L.jsxs(
        "button",
        {
          ref: p,
          className: ae(
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
          onClick: f,
          onKeyDown: n,
          onMouseEnter: x,
          onMouseLeave: b,
          "aria-label": l || t,
          "aria-pressed": r,
          tabIndex: o ? -1 : 0,
          children: [
            /* @__PURE__ */ L.jsx(
              e,
              {
                className: ae(
                  "w-5 h-5",
                  r ? "text-primary" : "text-muted-foreground",
                  !o && "group-hover:text-foreground"
                )
              }
            ),
            s && /* @__PURE__ */ L.jsx("div", { className: "absolute -top-1 -right-1 min-w-4 h-4 bg-destructive text-destructive-foreground text-xs rounded-full flex items-center justify-center px-1", children: typeof s == "number" && s > 99 ? "99+" : s }),
            r && /* @__PURE__ */ L.jsx("div", { className: "absolute left-0 top-1/2 transform -translate-y-1/2 w-0.5 h-6 bg-primary" })
          ]
        }
      ),
      v && t && /* @__PURE__ */ L.jsx("div", { className: "absolute left-full ml-2 top-1/2 transform -translate-y-1/2 z-50", children: /* @__PURE__ */ L.jsxs("div", { className: "bg-popover text-popover-foreground text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap border border-border", children: [
        t,
        /* @__PURE__ */ L.jsx("div", { className: "absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-popover" })
      ] }) })
    ] });
  }
);
wt.displayName = "Block.Sidebar.Item";
const vt = Z(
  ({ className: e }, t) => /* @__PURE__ */ L.jsx(
    "div",
    {
      ref: t,
      className: ae(
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
const kt = Z(
  ({ direction: e = "column", className: t, children: r, "aria-label": o }, s) => /* @__PURE__ */ L.jsx(
    "div",
    {
      ref: s,
      className: le(
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
kt.displayName = "Block.Layout";
const Ue = Z(
  ({
    id: e,
    type: t = "block",
    direction: r = "row",
    children: o,
    className: s,
    divider: i,
    noDivider: a,
    "aria-label": l
  }, p) => {
    var y;
    const { gridId: v } = oe(), k = Ne(), { collapseBlock: x, expandBlock: b } = Ar(), { supportsFeature: f } = at(), n = k == null ? void 0 : k.blocks[e], g = ((y = k == null ? void 0 : k.hiddenBlocks) == null ? void 0 : y.has(e)) || !1, c = ee(() => n != null && n.collapsible && n.collapseAt ? (n.size ?? n.defaultSize ?? 0) <= n.collapseAt : !1, [n]), u = () => {
      n != null && n.collapsible && n.collapseAt && ((n.size ?? n.defaultSize ?? 0) <= n.collapseAt ? b(e) : x(e));
    };
    return /* @__PURE__ */ L.jsx(
      "div",
      {
        ref: p,
        className: le(
          // Base styles - simple grid item that fills its space
          "relative",
          "w-full h-full",
          "overflow-hidden",
          "transition-opacity duration-150",
          c && "opacity-70",
          s
        ),
        style: {
          // Hide block with display: none - removes from grid flow
          // The grid template will be dynamically updated to exclude this block
          display: g ? "none" : void 0
        },
        "data-grid-id": v,
        "data-block-id": e,
        "data-block-type": t,
        "data-block-direction": r,
        "data-block-size-default": n == null ? void 0 : n.defaultSize,
        "data-block-size-unit": n == null ? void 0 : n.sizeUnit,
        "data-block-size-min": n == null ? void 0 : n.minSize,
        "data-block-size-max": n == null ? void 0 : n.maxSize,
        "data-block-resizable": (n == null ? void 0 : n.resizable) !== !1,
        "data-block-collapse-at": n == null ? void 0 : n.collapseAt,
        "data-block-collapse-to": n == null ? void 0 : n.collapseTo,
        "data-block-divider-position": n == null ? void 0 : n.dividerPosition,
        "data-block-divider-size": n == null ? void 0 : n.dividerSize,
        "data-block-divider": i !== void 0 ? JSON.stringify(i) : void 0,
        "data-block-no-divider": a,
        "data-block-hidden": g,
        "aria-label": l,
        "aria-hidden": g,
        role: t === "group" ? "group" : void 0,
        tabIndex: f("resizing") && !g ? 0 : void 0,
        onDoubleClick: f("collapse") ? u : void 0,
        children: o
      }
    );
  }
);
Ue.displayName = "Block";
const xt = Z(
  (e, t) => /* @__PURE__ */ L.jsx(Ue, { ref: t, ...e, type: "group" })
);
xt.displayName = "Block.Group";
Object.assign(Ue, {
  Group: xt,
  Layout: kt,
  Header: gt,
  Content: mt,
  Footer: ht,
  Toolbar: bt,
  Tabs: yt,
  Sidebar: Ge
});
Object.assign(Ge, {
  Item: wt,
  Spacer: vt
});
function Jr(e, t, r) {
  const o = [];
  let s = e;
  const i = t.minSize ?? 0, a = t.maxSize ?? 1 / 0;
  if (e < i && (o.push(`Size ${e} is below minimum ${i}`), s = i), e > a && (o.push(`Size ${e} exceeds maximum ${a}`), s = a), s = ge(s, i, a), t.sizeUnit === "px" && t.collapsible && r !== void 0) {
    const l = t.collapseAt ?? 0, p = t.collapseTo ?? 0, v = t.defaultSize ?? s;
    s = vr(
      s,
      r,
      l,
      p,
      v
    );
  }
  return {
    isValid: o.length === 0,
    adjustedValue: s,
    violations: o
  };
}
function Zr(e, t, r, o, s = 1) {
  const i = [];
  let a = r, l = o;
  const p = fe(e.minSize ?? 0, e.sizeUnit, s), v = fe(e.maxSize ?? 1 / 0, e.sizeUnit, s), k = fe(t.minSize ?? 0, t.sizeUnit, s), x = fe(t.maxSize ?? 1 / 0, t.sizeUnit, s), b = fe(e.defaultSize ?? 0, e.sizeUnit, s), f = fe(t.defaultSize ?? 0, t.sizeUnit, s), n = b + r, g = f + o;
  let c = ge(n, p, v), u = ge(g, k, x);
  a = c - b, l = u - f;
  const y = a + l;
  if (Math.abs(y) > 1e-3) {
    const T = Math.abs(a) < Math.abs(r), C = Math.abs(l) < Math.abs(o);
    if (T && !C) {
      const R = f - a;
      u = ge(R, k, x), l = u - f;
    } else if (C && !T) {
      const R = b - l;
      c = ge(R, p, v), a = c - b;
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
function Xr(e, t) {
  const r = [], o = e.filter((i) => i.sizeUnit === "px").reduce((i, a) => i + (t[a.id] ?? a.defaultSize ?? 0), 0), s = e.filter((i) => i.sizeUnit === "fr").reduce((i, a) => i + (t[a.id] ?? a.defaultSize ?? 0), 0);
  return o < 0 && r.push("Total fixed size cannot be negative"), s <= 0 && e.some((i) => i.sizeUnit === "fr") && r.push("Total fr units must be positive"), e.forEach((i) => {
    const a = t[i.id] ?? i.defaultSize ?? 0, l = i.minSize ?? 0, p = i.maxSize ?? 1 / 0;
    l > p && r.push(`Block ${i.id}: minSize (${l}) > maxSize (${p})`), (a < l || a > p) && r.push(`Block ${i.id}: size ${a} violates constraints [${l}, ${p}]`);
  }), {
    isValid: r.length === 0,
    violations: r
  };
}
class _r {
  constructor() {
    Q(this, "views", /* @__PURE__ */ new Map());
    Q(this, "listeners", /* @__PURE__ */ new Set());
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
    return t ? r.sort((o, s) => (o.order ?? 0) - (s.order ?? 0)) : r;
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
const St = Ie(null);
function Le() {
  const e = Re(St);
  if (!e)
    throw new Error("useViewRegistry must be used within ViewRegistryProvider");
  return e;
}
function Qr(e) {
  const t = Le(), [r, o] = J(() => t.getView(e));
  return $(() => t.subscribe(() => {
    o(t.getView(e));
  }), [t, e]), r;
}
function eo(e) {
  const t = Le(), [r, o] = J(() => e != null && e.category ? t.getViewsByCategory(e.category) : t.getAllViews((e == null ? void 0 : e.sorted) ?? !0));
  return $(() => {
    const s = () => {
      e != null && e.category ? o(t.getViewsByCategory(e.category)) : o(t.getAllViews((e == null ? void 0 : e.sorted) ?? !0));
    };
    return t.subscribe(s);
  }, [t, e == null ? void 0 : e.category, e == null ? void 0 : e.sorted]), r;
}
function to({ children: e, registry: t }) {
  const [r] = J(() => t ?? new _r());
  return /* @__PURE__ */ L.jsx(St.Provider, { value: r, children: e });
}
function ro(e) {
  const t = Le();
  $(() => t.registerViews(e), [t, e]);
}
function oo(e) {
  const t = Le();
  $(() => t.registerView(e), [t, e]);
}
class Or {
  constructor() {
    Q(this, "commands", /* @__PURE__ */ new Map());
    Q(this, "executionListeners", /* @__PURE__ */ new Map());
    Q(this, "registrationListeners", /* @__PURE__ */ new Set());
    Q(this, "keybindingMap", /* @__PURE__ */ new Map());
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
      const s = await o.handler(...r);
      return this.notifyExecution(t, s), { success: !0, result: s };
    } catch (s) {
      return console.error(`Error executing command ${t}:`, s), { success: !1, error: s };
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
    return t ? r.sort((o, s) => {
      const i = o.category || "", a = s.category || "";
      if (i !== a) return i.localeCompare(a);
      const l = o.title || o.id, p = s.title || s.id;
      return l.localeCompare(p);
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
    (o = this.executionListeners.get(t)) == null || o.forEach((s) => s(r));
  }
  notifyRegistrationChange() {
    this.registrationListeners.forEach((t) => t());
  }
}
const zt = Ie(null);
function we() {
  const e = Re(zt);
  if (!e)
    throw new Error("useCommandService must be used within CommandServiceProvider");
  return e;
}
function no(e) {
  const t = we(), [r, o] = J(() => t.getCommand(e));
  return $(() => {
    const s = () => {
      o(t.getCommand(e));
    };
    return t.onDidChangeCommands(s);
  }, [t, e]), r;
}
function so(e) {
  const t = we(), [r, o] = J(() => e != null && e.category ? t.getCommandsByCategory(e.category) : t.getAllCommands((e == null ? void 0 : e.sorted) ?? !0));
  return $(() => {
    const s = () => {
      e != null && e.category ? o(t.getCommandsByCategory(e.category)) : o(t.getAllCommands((e == null ? void 0 : e.sorted) ?? !0));
    };
    return t.onDidChangeCommands(s);
  }, [t, e == null ? void 0 : e.category, e == null ? void 0 : e.sorted]), r;
}
function io(e) {
  const t = we();
  return O(
    (...r) => t.executeCommand(e, ...r),
    [t, e]
  );
}
function ao(e) {
  const t = we();
  $(() => t.registerCommands(e), [t, e]);
}
function lo(e) {
  const t = we();
  $(() => t.registerCommand(e), [t, e]);
}
function co(e = !0) {
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
function uo({
  children: e,
  service: t,
  enableKeyboardShortcuts: r = !0
}) {
  const [o] = J(() => t ?? new Or());
  return $(() => {
    if (!r) return;
    const s = (i) => {
      o.handleKeyboardEvent(i);
    };
    return window.addEventListener("keydown", s), () => {
      window.removeEventListener("keydown", s);
    };
  }, [o, r]), /* @__PURE__ */ L.jsx(zt.Provider, { value: o, children: e });
}
class Dr {
  constructor() {
    Q(this, "viewTypes", {});
    // blockId -> viewTypeId
    Q(this, "layouts", /* @__PURE__ */ new Map());
    Q(this, "changeListeners", /* @__PURE__ */ new Set());
    Q(this, "layoutListeners", /* @__PURE__ */ new Set());
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
  createLayoutFromCurrentState(t, r, o, s) {
    return {
      id: t,
      name: r,
      blocks: [...o],
      viewTypes: this.getAllViewTypes(),
      metadata: s
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
      for (const s of r)
        s.id && s.name && s.blocks && s.viewTypes && (this.saveLayout(s), o++);
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
const Tt = Ie(null);
function ve() {
  const e = Re(Tt);
  if (!e)
    throw new Error("useLayoutService must be used within LayoutServiceProvider");
  return e;
}
function fo(e) {
  const t = ve(), [r, o] = J(() => t.getBlockViewType(e));
  return $(() => {
    const s = (a) => {
      o(a[e]);
    };
    return t.onViewTypesChange(s);
  }, [t, e]), r;
}
function po() {
  const e = ve(), [t, r] = J(() => e.getAllViewTypes());
  return $(() => e.onViewTypesChange(r), [e]), t;
}
function mo() {
  const e = ve();
  return O(
    (t, r) => {
      e.setBlockViewType(t, r);
    },
    [e]
  );
}
function go() {
  const e = ve(), [t, r] = J(() => e.getAllLayouts());
  return $(() => {
    const o = () => {
      r(e.getAllLayouts());
    };
    return e.onLayoutsChange(o);
  }, [e]), t;
}
function ho() {
  const e = ve();
  return O(
    (t, r, o, s) => {
      const i = e.createLayoutFromCurrentState(t, r, o, s);
      e.saveLayout(i);
    },
    [e]
  );
}
function bo() {
  const e = ve();
  return O(
    (t) => e.applyLayout(t),
    [e]
  );
}
function yo({
  children: e,
  service: t,
  initialViewTypes: r
}) {
  const [o] = J(() => {
    const s = t ?? new Dr();
    return r && s.setViewTypes(r), s;
  });
  return /* @__PURE__ */ L.jsx(Tt.Provider, { value: o, children: e });
}
export {
  Ue as Block,
  mt as BlockContent,
  ht as BlockFooter,
  xt as BlockGroup,
  gt as BlockHeader,
  kt as BlockLayout,
  Ge as BlockSidebar,
  wt as BlockSidebarItem,
  vt as BlockSidebarSpacer,
  yt as BlockTabs,
  bt as BlockToolbar,
  Or as CommandService,
  uo as CommandServiceProvider,
  ft as Divider,
  Mr as Grid,
  Cr as GridProvider,
  Dr as LayoutService,
  yo as LayoutServiceProvider,
  _r as ViewRegistry,
  to as ViewRegistryProvider,
  vr as applyCollapseLogic,
  kr as calculateConstrainedSize,
  ge as clamp,
  le as cn,
  yr as createCustomAdapter,
  mr as defaultModes,
  Wr as findAdjacentBlock,
  Ur as frToPx,
  xr as generateGridTemplate,
  $r as getAllGridStates,
  ct as getFlexSpacePx,
  Me as getStorageAdapter,
  Gr as isCollapsed,
  Kr as isZeroSum,
  hr as loadGridState,
  he as localStorageAdapter,
  Ae as memoryStorageAdapter,
  Nr as pxPerFr,
  Sr as pxToFr,
  br as removeGridState,
  gr as saveGridState,
  lt as sessionStorageAdapter,
  bo as useApplyLayout,
  fo as useBlockViewType,
  no as useCommand,
  co as useCommandKeyboardShortcuts,
  we as useCommandService,
  so as useCommands,
  io as useExecuteCommand,
  Ar as useGridActions,
  oe as useGridContext,
  Rr as useGridKeyboard,
  at as useGridMode,
  wr as useGridPersistence,
  Ir as useGridResize,
  Ne as useGridState,
  Fr as useHideBlock,
  Hr as useIsBlockHidden,
  ve as useLayoutService,
  go as useLayouts,
  lo as useRegisterCommand,
  ao as useRegisterCommands,
  oo as useRegisterView,
  ro as useRegisterViews,
  ho as useSaveLayout,
  mo as useSetBlockViewType,
  qr as useShowBlock,
  Yr as useToggleBlockVisibility,
  Qr as useViewDescriptor,
  Le as useViewRegistry,
  po as useViewTypes,
  eo as useViews,
  Jr as validateBlockSize,
  Xr as validateLayoutIntegrity,
  Zr as validateTwoWayResize
};
