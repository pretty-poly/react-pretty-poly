var Ot = Object.defineProperty;
var Pt = (e, t, o) => t in e ? Ot(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var re = (e, t, o) => Pt(e, typeof t != "symbol" ? t + "" : t, o);
import Dt, { useState as Y, useCallback as M, useMemo as oe, useEffect as G, useRef as ce, createContext as Ne, useContext as Be, useReducer as Mt, useLayoutEffect as Vt, forwardRef as X, useImperativeHandle as $t } from "react";
var $e = { exports: {} }, Se = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye;
function Gt() {
  if (Ye) return Se;
  Ye = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function o(r, s, n) {
    var i = null;
    if (n !== void 0 && (i = "" + n), s.key !== void 0 && (i = "" + s.key), "key" in s) {
      n = {};
      for (var a in s)
        a !== "key" && (n[a] = s[a]);
    } else n = s;
    return s = n.ref, {
      $$typeof: e,
      type: r,
      key: i,
      ref: s !== void 0 ? s : null,
      props: n
    };
  }
  return Se.Fragment = t, Se.jsx = o, Se.jsxs = o, Se;
}
var ze = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Je;
function Ut() {
  return Je || (Je = 1, process.env.NODE_ENV !== "production" && function() {
    function e(b) {
      if (b == null) return null;
      if (typeof b == "function")
        return b.$$typeof === O ? null : b.displayName || b.name || null;
      if (typeof b == "string") return b;
      switch (b) {
        case w:
          return "Fragment";
        case y:
          return "Profiler";
        case l:
          return "StrictMode";
        case A:
          return "Suspense";
        case L:
          return "SuspenseList";
        case I:
          return "Activity";
      }
      if (typeof b == "object")
        switch (typeof b.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), b.$$typeof) {
          case d:
            return "Portal";
          case u:
            return (b.displayName || "Context") + ".Provider";
          case C:
            return (b._context.displayName || "Context") + ".Consumer";
          case g:
            var R = b.render;
            return b = b.displayName, b || (b = R.displayName || R.name || "", b = b !== "" ? "ForwardRef(" + b + ")" : "ForwardRef"), b;
          case B:
            return R = b.displayName || null, R !== null ? R : e(b.type) || "Memo";
          case x:
            R = b._payload, b = b._init;
            try {
              return e(b(R));
            } catch {
            }
        }
      return null;
    }
    function t(b) {
      return "" + b;
    }
    function o(b) {
      try {
        t(b);
        var R = !1;
      } catch {
        R = !0;
      }
      if (R) {
        R = console;
        var $ = R.error, V = typeof Symbol == "function" && Symbol.toStringTag && b[Symbol.toStringTag] || b.constructor.name || "Object";
        return $.call(
          R,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          V
        ), t(b);
      }
    }
    function r(b) {
      if (b === w) return "<>";
      if (typeof b == "object" && b !== null && b.$$typeof === x)
        return "<...>";
      try {
        var R = e(b);
        return R ? "<" + R + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var b = _.A;
      return b === null ? null : b.getOwner();
    }
    function n() {
      return Error("react-stack-top-frame");
    }
    function i(b) {
      if (k.call(b, "key")) {
        var R = Object.getOwnPropertyDescriptor(b, "key").get;
        if (R && R.isReactWarning) return !1;
      }
      return b.key !== void 0;
    }
    function a(b, R) {
      function $() {
        D || (D = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          R
        ));
      }
      $.isReactWarning = !0, Object.defineProperty(b, "key", {
        get: $,
        configurable: !0
      });
    }
    function c() {
      var b = e(this.type);
      return U[b] || (U[b] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), b = this.props.ref, b !== void 0 ? b : null;
    }
    function m(b, R, $, V, W, Z, ue, K) {
      return $ = Z.ref, b = {
        $$typeof: S,
        type: b,
        key: R,
        props: Z,
        _owner: W
      }, ($ !== void 0 ? $ : null) !== null ? Object.defineProperty(b, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(b, "ref", { enumerable: !1, value: null }), b._store = {}, Object.defineProperty(b._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(b, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(b, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ue
      }), Object.defineProperty(b, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: K
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    }
    function v(b, R, $, V, W, Z, ue, K) {
      var F = R.children;
      if (F !== void 0)
        if (V)
          if (E(F)) {
            for (V = 0; V < F.length; V++)
              f(F[V]);
            Object.freeze && Object.freeze(F);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(F);
      if (k.call(R, "key")) {
        F = e(b);
        var te = Object.keys(R).filter(function(ke) {
          return ke !== "key";
        });
        V = 0 < te.length ? "{key: someKey, " + te.join(": ..., ") + ": ...}" : "{key: someKey}", ne[F + V] || (te = 0 < te.length ? "{" + te.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          V,
          F,
          te,
          F
        ), ne[F + V] = !0);
      }
      if (F = null, $ !== void 0 && (o($), F = "" + $), i(R) && (o(R.key), F = "" + R.key), "key" in R) {
        $ = {};
        for (var ae in R)
          ae !== "key" && ($[ae] = R[ae]);
      } else $ = R;
      return F && a(
        $,
        typeof b == "function" ? b.displayName || b.name || "Unknown" : b
      ), m(
        b,
        F,
        Z,
        W,
        s(),
        $,
        ue,
        K
      );
    }
    function f(b) {
      typeof b == "object" && b !== null && b.$$typeof === S && b._store && (b._store.validated = 1);
    }
    var h = Dt, S = Symbol.for("react.transitional.element"), d = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), C = Symbol.for("react.consumer"), u = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), I = Symbol.for("react.activity"), O = Symbol.for("react.client.reference"), _ = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, k = Object.prototype.hasOwnProperty, E = Array.isArray, N = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(b) {
        return b();
      }
    };
    var D, U = {}, H = h.react_stack_bottom_frame.bind(
      h,
      n
    )(), j = N(r(n)), ne = {};
    ze.Fragment = w, ze.jsx = function(b, R, $, V, W) {
      var Z = 1e4 > _.recentlyCreatedOwnerStacks++;
      return v(
        b,
        R,
        $,
        !1,
        V,
        W,
        Z ? Error("react-stack-top-frame") : H,
        Z ? N(r(b)) : j
      );
    }, ze.jsxs = function(b, R, $, V, W) {
      var Z = 1e4 > _.recentlyCreatedOwnerStacks++;
      return v(
        b,
        R,
        $,
        !0,
        V,
        W,
        Z ? Error("react-stack-top-frame") : H,
        Z ? N(r(b)) : j
      );
    };
  }()), ze;
}
process.env.NODE_ENV === "production" ? $e.exports = Gt() : $e.exports = Ut();
var p = $e.exports;
function rt(e) {
  var t, o, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (o = rt(e[t])) && (r && (r += " "), r += o);
  } else for (o in e) e[o] && (r && (r += " "), r += o);
  return r;
}
function Q() {
  for (var e, t, o = 0, r = "", s = arguments.length; o < s; o++) (e = arguments[o]) && (t = rt(e)) && (r && (r += " "), r += t);
  return r;
}
const Ke = "-", Wt = (e) => {
  const t = Ht(e), {
    conflictingClassGroups: o,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      const a = i.split(Ke);
      return a[0] === "" && a.length !== 1 && a.shift(), ot(a, t) || Kt(i);
    },
    getConflictingClassGroupIds: (i, a) => {
      const c = o[i] || [];
      return a && r[i] ? [...c, ...r[i]] : c;
    }
  };
}, ot = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const o = e[0], r = t.nextPart.get(o), s = r ? ot(e.slice(1), r) : void 0;
  if (s)
    return s;
  if (t.validators.length === 0)
    return;
  const n = e.join(Ke);
  return (i = t.validators.find(({
    validator: a
  }) => a(n))) == null ? void 0 : i.classGroupId;
}, Ze = /^\[(.+)\]$/, Kt = (e) => {
  if (Ze.test(e)) {
    const t = Ze.exec(e)[1], o = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (o)
      return "arbitrary.." + o;
  }
}, Ht = (e) => {
  const {
    theme: t,
    classGroups: o
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const s in o)
    Ge(o[s], r, s, t);
  return r;
}, Ge = (e, t, o, r) => {
  e.forEach((s) => {
    if (typeof s == "string") {
      const n = s === "" ? t : Xe(t, s);
      n.classGroupId = o;
      return;
    }
    if (typeof s == "function") {
      if (Ft(s)) {
        Ge(s(r), t, o, r);
        return;
      }
      t.validators.push({
        validator: s,
        classGroupId: o
      });
      return;
    }
    Object.entries(s).forEach(([n, i]) => {
      Ge(i, Xe(t, n), o, r);
    });
  });
}, Xe = (e, t) => {
  let o = e;
  return t.split(Ke).forEach((r) => {
    o.nextPart.has(r) || o.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), o = o.nextPart.get(r);
  }), o;
}, Ft = (e) => e.isThemeGetter, qt = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, o = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const s = (n, i) => {
    o.set(n, i), t++, t > e && (t = 0, r = o, o = /* @__PURE__ */ new Map());
  };
  return {
    get(n) {
      let i = o.get(n);
      if (i !== void 0)
        return i;
      if ((i = r.get(n)) !== void 0)
        return s(n, i), i;
    },
    set(n, i) {
      o.has(n) ? o.set(n, i) : s(n, i);
    }
  };
}, Ue = "!", We = ":", Yt = We.length, Jt = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: o
  } = e;
  let r = (s) => {
    const n = [];
    let i = 0, a = 0, c = 0, m;
    for (let d = 0; d < s.length; d++) {
      let w = s[d];
      if (i === 0 && a === 0) {
        if (w === We) {
          n.push(s.slice(c, d)), c = d + Yt;
          continue;
        }
        if (w === "/") {
          m = d;
          continue;
        }
      }
      w === "[" ? i++ : w === "]" ? i-- : w === "(" ? a++ : w === ")" && a--;
    }
    const v = n.length === 0 ? s : s.substring(c), f = Zt(v), h = f !== v, S = m && m > c ? m - c : void 0;
    return {
      modifiers: n,
      hasImportantModifier: h,
      baseClassName: f,
      maybePostfixModifierPosition: S
    };
  };
  if (t) {
    const s = t + We, n = r;
    r = (i) => i.startsWith(s) ? n(i.substring(s.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: i,
      maybePostfixModifierPosition: void 0
    };
  }
  if (o) {
    const s = r;
    r = (n) => o({
      className: n,
      parseClassName: s
    });
  }
  return r;
}, Zt = (e) => e.endsWith(Ue) ? e.substring(0, e.length - 1) : e.startsWith(Ue) ? e.substring(1) : e, Xt = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((r) => [r, !0]));
  return (r) => {
    if (r.length <= 1)
      return r;
    const s = [];
    let n = [];
    return r.forEach((i) => {
      i[0] === "[" || t[i] ? (s.push(...n.sort(), i), n = []) : n.push(i);
    }), s.push(...n.sort()), s;
  };
}, Qt = (e) => ({
  cache: qt(e.cacheSize),
  parseClassName: Jt(e),
  sortModifiers: Xt(e),
  ...Wt(e)
}), er = /\s+/, tr = (e, t) => {
  const {
    parseClassName: o,
    getClassGroupId: r,
    getConflictingClassGroupIds: s,
    sortModifiers: n
  } = t, i = [], a = e.trim().split(er);
  let c = "";
  for (let m = a.length - 1; m >= 0; m -= 1) {
    const v = a[m], {
      isExternal: f,
      modifiers: h,
      hasImportantModifier: S,
      baseClassName: d,
      maybePostfixModifierPosition: w
    } = o(v);
    if (f) {
      c = v + (c.length > 0 ? " " + c : c);
      continue;
    }
    let l = !!w, y = r(l ? d.substring(0, w) : d);
    if (!y) {
      if (!l) {
        c = v + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (y = r(d), !y) {
        c = v + (c.length > 0 ? " " + c : c);
        continue;
      }
      l = !1;
    }
    const C = n(h).join(":"), u = S ? C + Ue : C, g = u + y;
    if (i.includes(g))
      continue;
    i.push(g);
    const A = s(y, l);
    for (let L = 0; L < A.length; ++L) {
      const B = A[L];
      i.push(u + B);
    }
    c = v + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function rr() {
  let e = 0, t, o, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (o = nt(t)) && (r && (r += " "), r += o);
  return r;
}
const nt = (e) => {
  if (typeof e == "string")
    return e;
  let t, o = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = nt(e[r])) && (o && (o += " "), o += t);
  return o;
};
function or(e, ...t) {
  let o, r, s, n = i;
  function i(c) {
    const m = t.reduce((v, f) => f(v), e());
    return o = Qt(m), r = o.cache.get, s = o.cache.set, n = a, a(c);
  }
  function a(c) {
    const m = r(c);
    if (m)
      return m;
    const v = tr(c, o);
    return s(c, v), v;
  }
  return function() {
    return n(rr.apply(null, arguments));
  };
}
const q = (e) => {
  const t = (o) => o[e] || [];
  return t.isThemeGetter = !0, t;
}, st = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, it = /^\((?:(\w[\w-]*):)?(.+)\)$/i, nr = /^\d+\/\d+$/, sr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ir = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ar = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, lr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, cr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, fe = (e) => nr.test(e), P = (e) => !!e && !Number.isNaN(Number(e)), le = (e) => !!e && Number.isInteger(Number(e)), Oe = (e) => e.endsWith("%") && P(e.slice(0, -1)), ie = (e) => sr.test(e), dr = () => !0, ur = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  ir.test(e) && !ar.test(e)
), at = () => !1, fr = (e) => lr.test(e), pr = (e) => cr.test(e), mr = (e) => !z(e) && !T(e), hr = (e) => ye(e, dt, at), z = (e) => st.test(e), de = (e) => ye(e, ut, ur), Pe = (e) => ye(e, wr, P), Qe = (e) => ye(e, lt, at), br = (e) => ye(e, ct, pr), Ae = (e) => ye(e, ft, fr), T = (e) => it.test(e), Te = (e) => ge(e, ut), yr = (e) => ge(e, xr), et = (e) => ge(e, lt), gr = (e) => ge(e, dt), vr = (e) => ge(e, ct), je = (e) => ge(e, ft, !0), ye = (e, t, o) => {
  const r = st.exec(e);
  return r ? r[1] ? t(r[1]) : o(r[2]) : !1;
}, ge = (e, t, o = !1) => {
  const r = it.exec(e);
  return r ? r[1] ? t(r[1]) : o : !1;
}, lt = (e) => e === "position" || e === "percentage", ct = (e) => e === "image" || e === "url", dt = (e) => e === "length" || e === "size" || e === "bg-size", ut = (e) => e === "length", wr = (e) => e === "number", xr = (e) => e === "family-name", ft = (e) => e === "shadow", kr = () => {
  const e = q("color"), t = q("font"), o = q("text"), r = q("font-weight"), s = q("tracking"), n = q("leading"), i = q("breakpoint"), a = q("container"), c = q("spacing"), m = q("radius"), v = q("shadow"), f = q("inset-shadow"), h = q("text-shadow"), S = q("drop-shadow"), d = q("blur"), w = q("perspective"), l = q("aspect"), y = q("ease"), C = q("animate"), u = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], g = () => [
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
  ], A = () => [...g(), T, z], L = () => ["auto", "hidden", "clip", "visible", "scroll"], B = () => ["auto", "contain", "none"], x = () => [T, z, c], I = () => [fe, "full", "auto", ...x()], O = () => [le, "none", "subgrid", T, z], _ = () => ["auto", {
    span: ["full", le, T, z]
  }, le, T, z], k = () => [le, "auto", T, z], E = () => ["auto", "min", "max", "fr", T, z], N = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], D = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], U = () => ["auto", ...x()], H = () => [fe, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...x()], j = () => [e, T, z], ne = () => [...g(), et, Qe, {
    position: [T, z]
  }], b = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], R = () => ["auto", "cover", "contain", gr, hr, {
    size: [T, z]
  }], $ = () => [Oe, Te, de], V = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    m,
    T,
    z
  ], W = () => ["", P, Te, de], Z = () => ["solid", "dashed", "dotted", "double"], ue = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], K = () => [P, Oe, et, Qe], F = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    d,
    T,
    z
  ], te = () => ["none", P, T, z], ae = () => ["none", P, T, z], ke = () => [P, T, z], Ie = () => [fe, "full", ...x()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [ie],
      breakpoint: [ie],
      color: [dr],
      container: [ie],
      "drop-shadow": [ie],
      ease: ["in", "out", "in-out"],
      font: [mr],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [ie],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [ie],
      shadow: [ie],
      spacing: ["px", P],
      text: [ie],
      "text-shadow": [ie],
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
        aspect: ["auto", "square", fe, z, T, l]
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
        columns: [P, z, T, a]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": u()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": u()
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
        object: A()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: L()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": L()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": L()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: B()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": B()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": B()
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
        inset: I()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": I()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": I()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: I()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: I()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: I()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: I()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: I()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: I()
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
        z: [le, "auto", T, z]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [fe, "full", "auto", a, ...x()]
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
        flex: [P, fe, "auto", "initial", "none", z]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", P, T, z]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", P, T, z]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [le, "first", "last", "none", T, z]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": O()
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
        "col-start": k()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": k()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": O()
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
        "row-start": k()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": k()
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
        "auto-cols": E()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": E()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: x()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": x()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": x()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...N(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...D(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...D()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...N()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...D(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...D(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": N()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...D(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...D()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: x()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: x()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: x()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: x()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: x()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: x()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: x()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: x()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: x()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: U()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: U()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: U()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: U()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: U()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: U()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: U()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: U()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: U()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": x()
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
        "space-y": x()
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
        size: H()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [a, "screen", ...H()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          a,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...H()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          a,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [i]
          },
          ...H()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...H()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...H()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...H()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", o, Te, de]
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
        font: [r, T, Pe]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Oe, z]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [yr, z, t]
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
        tracking: [s, T, z]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [P, "none", T, Pe]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          n,
          ...x()
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
        decoration: [...Z(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [P, "from-font", "auto", T, de]
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
        "underline-offset": [P, "auto", T, z]
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
        indent: x()
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
        bg: ne()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: b()
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
          }, le, T, z],
          radial: ["", T, z],
          conic: [le, T, z]
        }, vr, br]
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
        from: $()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: $()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: $()
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
        rounded: V()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": V()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": V()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": V()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": V()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": V()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": V()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": V()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": V()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": V()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": V()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": V()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": V()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": V()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": V()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: W()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": W()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": W()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": W()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": W()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": W()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": W()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": W()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": W()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": W()
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
        "divide-y": W()
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
        border: [...Z(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...Z(), "hidden", "none"]
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
        outline: [...Z(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [P, T, z]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", P, Te, de]
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
          v,
          je,
          Ae
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
        "inset-shadow": ["none", f, je, Ae]
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
        ring: W()
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
        "ring-offset": [P, de]
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
        "inset-ring": W()
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
        "text-shadow": ["none", h, je, Ae]
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
        opacity: [P, T, z]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ue(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ue()
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
        "mask-linear": [P]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": K()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": K()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": j()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": j()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": K()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": K()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": j()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": j()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": K()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": K()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": j()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": j()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": K()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": K()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": j()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": j()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": K()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": K()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": j()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": j()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": K()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": K()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": j()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": j()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": K()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": K()
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
        "mask-radial-from": K()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": K()
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
        "mask-radial-at": g()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [P]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": K()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": K()
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
        mask: ne()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: b()
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
        blur: F()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [P, T, z]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [P, T, z]
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
          S,
          je,
          Ae
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
        grayscale: ["", P, T, z]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [P, T, z]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", P, T, z]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [P, T, z]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", P, T, z]
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
        "backdrop-blur": F()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [P, T, z]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [P, T, z]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", P, T, z]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [P, T, z]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", P, T, z]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [P, T, z]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [P, T, z]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", P, T, z]
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
        "border-spacing": x()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": x()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": x()
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
        duration: [P, "initial", T, z]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", y, T, z]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [P, T, z]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", C, T, z]
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
        perspective: [w, T, z]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": A()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: te()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": te()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": te()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": te()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ae()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ae()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ae()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ae()
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
        transform: [T, z, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: A()
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
        translate: Ie()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Ie()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Ie()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Ie()
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
        "scroll-m": x()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": x()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": x()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": x()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": x()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": x()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": x()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": x()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": x()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": x()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": x()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": x()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": x()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": x()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": x()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": x()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": x()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": x()
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
        stroke: [P, Te, de, Pe]
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
}, pt = /* @__PURE__ */ or(kr);
function ee(...e) {
  return pt(Q(e));
}
const Sr = {
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
function zr(e = Sr) {
  const [t, o] = Y(() => typeof window > "u" ? { width: 1024, height: 768, orientation: "landscape" } : {
    width: window.innerWidth,
    height: window.innerHeight,
    orientation: window.innerWidth > window.innerHeight ? "landscape" : "portrait"
  }), [r, s] = Y(null), n = M(() => {
    if (typeof window > "u") return;
    const d = {
      width: window.innerWidth,
      height: window.innerHeight,
      orientation: window.innerWidth > window.innerHeight ? "landscape" : "portrait"
    };
    o(d);
  }, []), i = oe(() => {
    var w;
    if (r && e[r])
      return r;
    const d = Object.entries(e).filter(([l, y]) => {
      if (y.matcher)
        return y.matcher(t);
      const C = !y.minWidth || t.width >= y.minWidth, u = !y.maxWidth || t.width <= y.maxWidth;
      return C && u;
    });
    return d.sort(([, l], [, y]) => {
      const C = (l.minWidth ? 1 : 0) + (l.maxWidth ? 1 : 0);
      return (y.minWidth ? 1 : 0) + (y.maxWidth ? 1 : 0) - C;
    }), ((w = d[0]) == null ? void 0 : w[0]) || Object.keys(e)[0] || "desktop";
  }, [t, e, r]), a = oe(() => e[i], [e, i]), c = oe(() => (a == null ? void 0 : a.type) || "grid", [a]), m = M((d) => {
    if (d && !e[d]) {
      console.warn(`Mode "${d}" not found in configuration`);
      return;
    }
    s(d);
  }, [e]), v = M((d) => i === d, [i]), f = oe(() => Object.keys(e), [e]), h = M((d) => {
    switch (c) {
      case "grid":
        return ["resizing", "dividers", "collapse"].includes(d);
      case "tabs":
        return d === "tabs";
      case "dock":
        return d === "dock";
      default:
        return !1;
    }
  }, [c]), S = oe(() => {
    const d = Object.entries(e).map(([C, u]) => ({ name: C, ...u })).sort((C, u) => (C.breakpoint || 0) - (u.breakpoint || 0)), w = d.findIndex((C) => C.name === i), l = d[w + 1], y = d[w - 1];
    return {
      current: i,
      currentBreakpoint: (a == null ? void 0 : a.breakpoint) || 0,
      nextMode: l == null ? void 0 : l.name,
      nextBreakpoint: l == null ? void 0 : l.breakpoint,
      prevMode: y == null ? void 0 : y.name,
      prevBreakpoint: y == null ? void 0 : y.breakpoint,
      isSmallest: w === 0,
      isLargest: w === d.length - 1
    };
  }, [e, i, a]);
  return G(() => {
    if (typeof window > "u") return;
    const d = () => n(), w = () => {
      setTimeout(n, 100);
    };
    return window.addEventListener("resize", d), window.addEventListener("orientationchange", w), () => {
      window.removeEventListener("resize", d), window.removeEventListener("orientationchange", w);
    };
  }, [n]), {
    // Current state
    viewport: t,
    activeMode: i,
    currentModeConfig: a,
    currentLayoutType: c,
    // Mode management
    setMode: m,
    isMode: v,
    availableModes: f,
    // Features and capabilities
    supportsFeature: h,
    breakpointInfo: S,
    // Utilities
    isForced: !!r,
    updateViewport: n
  };
}
const se = "pretty-poly-grid-v2-";
function Re(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function Ee(e) {
  return typeof e == "number" && Number.isFinite(e) ? e : void 0;
}
function Tr(e) {
  return e instanceof Set ? new Set(
    [...e].filter((t) => typeof t == "string")
  ) : Array.isArray(e) ? new Set(
    e.filter((t) => typeof t == "string")
  ) : /* @__PURE__ */ new Set();
}
function Er(e) {
  return !Re(e) || typeof e.id != "string" || typeof e.label != "string" ? null : {
    id: e.id,
    label: e.label,
    viewType: typeof e.viewType == "string" ? e.viewType : void 0,
    viewState: e.viewState,
    closable: typeof e.closable == "boolean" ? e.closable : void 0,
    disabled: typeof e.disabled == "boolean" ? e.disabled : void 0,
    isDirty: typeof e.isDirty == "boolean" ? e.isDirty : void 0,
    isPinned: typeof e.isPinned == "boolean" ? e.isPinned : void 0,
    metadata: e.metadata
  };
}
function mt(e) {
  if (!Re(e) || !Array.isArray(e.tabs))
    return;
  const t = e.tabs.map((c) => Er(c)).filter((c) => c !== null);
  if (t.length === 0)
    return;
  const o = new Set(t.map((c) => c.id)), r = typeof e.activeTabId == "string" && o.has(e.activeTabId) ? e.activeTabId : t[0].id, s = Array.isArray(e.history) ? e.history.filter((c) => typeof c == "string" && o.has(c)) : [r], n = s.length > 0 ? s : [r], i = Ee(e.historyIndex) ?? n.length - 1, a = Math.min(
    Math.max(Math.trunc(i), 0),
    n.length - 1
  );
  return {
    tabs: t,
    activeTabId: r,
    history: n,
    historyIndex: a,
    scrollOffset: Ee(e.scrollOffset) ?? 0
  };
}
function Cr(e) {
  return {
    id: e.id,
    defaultSize: e.defaultSize,
    size: e.size,
    originalDefaultSize: e.originalDefaultSize,
    viewType: e.viewType,
    viewState: e.viewState,
    tabState: e.tabState ? mt(e.tabState) : void 0
  };
}
function De(e, t) {
  if (e === void 0) return;
  const o = t.minSize, r = t.maxSize, s = o !== void 0 && !t.collapsible ? o : void 0;
  return s !== void 0 && e < s ? s : r !== void 0 && e > r ? r : e;
}
function Ir(e, t) {
  if (!e)
    return {};
  const o = Re(e.blocks) ? e.blocks : {}, r = new Set(t.map((n) => n.id));
  return {
    blocks: t.reduce((n, i) => {
      const a = o[i.id];
      if (!Re(a))
        return n[i.id] = i, n;
      const c = De(Ee(a.defaultSize), i), m = De(Ee(a.size), i), v = De(
        Ee(a.originalDefaultSize),
        i
      );
      return n[i.id] = {
        ...i,
        defaultSize: c ?? i.defaultSize,
        size: m ?? c ?? i.size ?? i.defaultSize,
        originalDefaultSize: v ?? i.originalDefaultSize ?? i.defaultSize,
        viewType: typeof a.viewType == "string" ? a.viewType : i.viewType,
        viewState: Object.prototype.hasOwnProperty.call(a, "viewState") ? a.viewState : i.viewState,
        tabState: mt(a.tabState) ?? i.tabState
      }, n;
    }, {}),
    hiddenBlocks: new Set(
      [...Tr(e.hiddenBlocks)].filter(
        (n) => r.has(n)
      )
    ),
    activeMode: typeof e.activeMode == "string" ? e.activeMode : void 0
  };
}
const be = {
  save: (e, t) => {
    try {
      localStorage.setItem(e, JSON.stringify(t));
    } catch (o) {
      console.warn("Failed to save to localStorage:", o);
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
        const o = localStorage.key(t);
        o && o.startsWith(se) && e.push(o);
      }
      e.forEach((t) => localStorage.removeItem(t));
    } catch (e) {
      console.warn("Failed to clear localStorage:", e);
    }
  }
}, ht = {
  save: (e, t) => {
    try {
      sessionStorage.setItem(e, JSON.stringify(t));
    } catch (o) {
      console.warn("Failed to save to sessionStorage:", o);
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
        const o = sessionStorage.key(t);
        o && o.startsWith(se) && e.push(o);
      }
      e.forEach((t) => sessionStorage.removeItem(t));
    } catch (e) {
      console.warn("Failed to clear sessionStorage:", e);
    }
  }
}, me = /* @__PURE__ */ new Map(), Le = {
  save: (e, t) => {
    me.set(e, t);
  },
  load: (e) => me.get(e) || null,
  remove: (e) => {
    me.delete(e);
  },
  clear: () => {
    for (const e of me.keys())
      e.startsWith(se) && me.delete(e);
  }
};
function Me(e) {
  switch (e) {
    case "localStorage":
      return typeof localStorage < "u" ? be : Le;
    case "sessionStorage":
      return typeof sessionStorage < "u" ? ht : Le;
    case "memory":
    default:
      return Le;
  }
}
function He(e) {
  return `${se}${e}`;
}
function Ar(e, t, o = be) {
  const r = He(e), s = {
    blocks: Object.fromEntries(
      Object.entries(t.blocks).map(([n, i]) => [n, Cr(i)])
    ),
    hiddenBlocks: [...t.hiddenBlocks],
    activeMode: t.activeMode
  };
  o.save(r, s);
}
function jr(e, t = be) {
  const o = He(e);
  return t.load(o);
}
function Lr(e, t = be) {
  const o = He(e);
  t.remove(o);
}
function so(e = be) {
  const t = {};
  try {
    if (e === be && typeof localStorage < "u")
      for (let o = 0; o < localStorage.length; o++) {
        const r = localStorage.key(o);
        if (r && r.startsWith(se)) {
          const s = r.substring(se.length), n = e.load(r);
          n && (t[s] = n);
        }
      }
    else if (e === ht && typeof sessionStorage < "u")
      for (let o = 0; o < sessionStorage.length; o++) {
        const r = sessionStorage.key(o);
        if (r && r.startsWith(se)) {
          const s = r.substring(se.length), n = e.load(r);
          n && (t[s] = n);
        }
      }
    else if (e === Le) {
      for (const o of me.keys())
        if (o.startsWith(se)) {
          const r = o.substring(se.length), s = e.load(o);
          s && (t[r] = s);
        }
    }
  } catch (o) {
    console.warn("Failed to get all grid states:", o);
  }
  return t;
}
function Rr(e) {
  return {
    save: (t, o) => e(o),
    load: () => null,
    remove: () => {
    },
    clear: () => {
    }
  };
}
function Nr({
  gridId: e,
  enabled: t,
  state: o,
  onStateLoad: r,
  autoSave: s = !0,
  saveDelay: n = 500
}) {
  const i = ce(null), a = ce(void 0), c = ce(""), m = ce(!1);
  G(() => {
    if (!t) {
      i.current = null;
      return;
    }
    typeof t == "function" ? i.current = Rr(t) : t === "localStorage" ? i.current = Me("localStorage") : t === "sessionStorage" ? i.current = Me("sessionStorage") : i.current = Me("localStorage");
  }, [t]), G(() => {
    if (!i.current || !t || typeof t == "function" || m.current)
      return;
    const d = jr(e, i.current);
    d && (r == null || r(d), m.current = !0);
  }, [e, t]);
  const v = M(
    (d = o) => {
      if (!i.current || !t)
        return;
      const w = JSON.stringify({
        blocks: d.blocks,
        hiddenBlocks: [...d.hiddenBlocks],
        activeMode: d.activeMode
      });
      if (w !== c.current)
        try {
          Ar(e, d, i.current), c.current = w;
        } catch (l) {
          console.warn("Failed to save grid state:", l);
        }
    },
    [e, t, o]
  ), f = M(
    (d = o) => {
      a.current && clearTimeout(a.current), a.current = setTimeout(() => {
        v(d);
      }, n);
    },
    [v, n, o]
  ), h = M(() => {
    if (!(!i.current || !t || typeof t == "function"))
      try {
        Lr(e, i.current), c.current = "";
      } catch (d) {
        console.warn("Failed to clear grid state:", d);
      }
  }, [e, t]), S = M(
    (d = o) => {
      a.current && clearTimeout(a.current), v(d);
    },
    [v, o]
  );
  return G(() => {
    if (!(!s || !t))
      return f(o), () => {
        a.current && clearTimeout(a.current);
      };
  }, [o, s, t, f]), G(() => {
    if (!t || typeof t == "function")
      return;
    const d = () => {
      S();
    };
    return window.addEventListener("beforeunload", d), () => {
      window.removeEventListener("beforeunload", d);
    };
  }, [S, t]), G(() => () => {
    a.current && clearTimeout(a.current);
  }, []), {
    saveState: S,
    debouncedSave: f,
    clearState: h,
    isEnabled: !!t
  };
}
function bt(e, t, o) {
  return Math.max(0, e - t - o);
}
function io(e, t) {
  return t > 0 ? e / t : 0;
}
function he(e, t, o) {
  return Math.min(Math.max(e, t), o);
}
function ao(e, t) {
  return t > 0 && e <= t;
}
function Br(e, t, o, r, s) {
  if (o === 0)
    return e;
  const n = t <= o, i = r * 2.5;
  return n && e > i ? s : e < o && !n ? r : e;
}
function _r(e, t, o = 0, r = 1 / 0, s = !1) {
  const n = s ? -e : e, i = t + n;
  return he(i, o, r);
}
function Or(e, t, o) {
  const r = [];
  return (o ? e.filter((n) => !o.has(n.id)) : e).forEach((n) => {
    if (n.sizeUnit === "auto")
      r.push("auto");
    else if (n.sizeUnit === "px") {
      const i = t ? `--${t}-${n.id}-size` : `--${n.id}-size`;
      r.push(`var(${i}, ${n.size}px)`);
    } else {
      const i = t ? `--${t}-${n.id}-size` : `--${n.id}-size`;
      r.push(`var(${i}, ${n.size}fr)`);
    }
  }), r.join(" ");
}
function lo(e, t) {
  return e * t;
}
function Pr(e, t) {
  return t > 0 ? e / t : 0;
}
function co(e, t, o) {
  return o === "start" ? e > 0 ? t[e - 1] : null : e < t.length - 1 ? t[e + 1] : null;
}
function uo(e, t, o = 1e-3) {
  return Math.abs(e + t) <= o;
}
function Dr(e, t) {
  const o = M((i) => "touches" in i ? {
    x: i.touches[0].clientX,
    y: i.touches[0].clientY
  } : {
    x: i.clientX,
    y: i.clientY
  }, []), r = M((i, a, c) => {
    const m = e.blocks[i];
    if (!m) return;
    if (m.resizable === !1) {
      console.warn(`Cannot resize block "${i}" - block is marked as non-resizable.`);
      return;
    }
    const v = o(c), f = document.querySelector(`[data-divider-id="${a}"]`), h = (f == null ? void 0 : f.getAttribute("data-divider-position")) || "end", d = Object.values(e.blocks).filter(
      (u) => u.parentId === m.parentId
    ).sort(
      (u, g) => (u.order || 0) - (g.order || 0)
    ), w = d.findIndex((u) => u.id === i);
    let l = null;
    if (h === "start" && w > 0 ? l = d[w - 1] : h === "end" && w < d.length - 1 && (l = d[w + 1]), l && m.sizeUnit === "fr" && l.resizable === !1) {
      console.warn(
        `Cannot resize block "${i}" - adjacent block "${l.id}" is marked as non-resizable.`
      );
      return;
    }
    if (l && m.sizeUnit === "fr" && l.sizeUnit === "px") {
      console.warn(
        `Cannot resize fr block "${i}" when adjacent to px block "${l.id}". Fr blocks fill available space and should not be directly resized. Consider resizing the px block instead.`
      );
      return;
    }
    t({
      type: "START_RESIZE",
      payload: {
        blockId: i,
        dividerId: a,
        startPosition: v,
        initialSize: m.defaultSize || 0,
        initialAdjacentBlockId: l == null ? void 0 : l.id,
        initialAdjacentSize: l ? l.originalDefaultSize || l.defaultSize || 0 : void 0
      }
    }), document.body.style.userSelect = "none";
    const y = m.parentId ? e.blocks[m.parentId] : null, C = (y == null ? void 0 : y.direction) || "row";
    document.body.style.cursor = C === "row" ? "col-resize" : "row-resize";
  }, [e.blocks, t, o]), s = M((i) => {
    if (!e.resize.isDragging || !e.resize.activeBlockId) return;
    const a = e.blocks[e.resize.activeBlockId];
    if (!a) return;
    const c = o(i), m = a.parentId ? e.blocks[a.parentId] : null, v = (m == null ? void 0 : m.direction) || "row", f = v === "row" ? c.x - e.resize.startPosition.x : c.y - e.resize.startPosition.y;
    if (a.sizeUnit === "px") {
      const h = document.querySelector(`[data-divider-id="${e.resize.activeDividerId}"]`), d = ((h == null ? void 0 : h.getAttribute("data-divider-position")) || "end") === "start", w = _r(
        f,
        e.resize.initialSize,
        a.minSize,
        a.maxSize,
        d
      );
      if (a.collapsible && a.collapseAt !== void 0) {
        const l = a.size ?? a.defaultSize ?? 0, y = a.collapseTo ?? 0;
        if (!(l <= y) && w < a.collapseAt) {
          t({
            type: "COLLAPSE_BLOCK",
            payload: { blockId: e.resize.activeBlockId }
          }), t({ type: "END_RESIZE" }), document.body.style.userSelect = "", document.body.style.cursor = "";
          return;
        }
      }
      t({
        type: "RESIZE_BLOCK",
        payload: { blockId: e.resize.activeBlockId, size: w }
      });
    } else if (a.sizeUnit === "fr") {
      const h = Object.values(e.blocks).filter(
        (E) => E.parentId === a.parentId
      ), S = h.filter((E) => E.sizeUnit === "fr"), d = a.parentId ? document.querySelector(`[data-block-id="${a.parentId}"]`) : document.querySelector('[data-block-id="root"]'), w = d ? v === "row" ? d.clientWidth : d.clientHeight : 1200, l = h.filter((E) => E.sizeUnit === "px").reduce((E, N) => {
        const D = document.querySelector(`[data-block-id="${N.id}"]`);
        if (!D) return E;
        const U = v === "row" ? D.clientWidth : D.clientHeight;
        return E + U;
      }, 0), C = Array.from(
        (d == null ? void 0 : d.querySelectorAll('[data-block-type="divider"]')) || []
      ).reduce((E, N) => {
        if (!(N instanceof HTMLElement)) return E;
        const D = v === "row" ? N.clientWidth : N.clientHeight;
        return E + D;
      }, 0), g = bt(w, l, C), A = S.reduce(
        (E, N) => E + (N.defaultSize || 1),
        0
      ), L = A > 0 ? g / A : 0;
      if (L === 0) return;
      const B = Pr(f, L), x = S.sort(
        (E, N) => (E.order || 0) - (N.order || 0)
      ), I = x.findIndex(
        (E) => E.id === e.resize.activeBlockId
      ), O = document.querySelector(`[data-divider-id="${e.resize.activeDividerId}"]`), _ = (O == null ? void 0 : O.getAttribute("data-divider-position")) || "end";
      let k = null;
      if (_ === "start" && I > 0 ? k = x[I - 1] : _ === "end" && I < x.length - 1 && (k = x[I + 1]), k) {
        let E, N;
        E = B, N = -B;
        const D = 0.1, U = Math.max(
          D,
          e.resize.initialSize + E
        ), H = Math.max(
          D,
          (e.resize.initialAdjacentSize || 1) + N
        ), j = U - e.resize.initialSize, ne = H - (e.resize.initialAdjacentSize || 1);
        Math.abs(j + ne) < 0.01 && (t({
          type: "RESIZE_BLOCK",
          payload: {
            blockId: e.resize.activeBlockId,
            size: U
          }
        }), t({
          type: "RESIZE_BLOCK",
          payload: { blockId: k.id, size: H }
        }));
      }
    }
  }, [e.resize, e.blocks, t, o]), n = M(() => {
    t({ type: "END_RESIZE" }), document.body.style.userSelect = "", document.body.style.cursor = "";
  }, [t]);
  return {
    startResize: r,
    updateResize: s,
    endResize: n
  };
}
function yt(e) {
  return e.size ?? e.defaultSize ?? 0;
}
function Mr(e) {
  return e.collapseAt ?? e.collapseTo ?? 0;
}
function Ce(e) {
  return e.collapsible ? yt(e) <= Mr(e) : !1;
}
function Vr(e, t) {
  return {
    ...e,
    defaultSize: t,
    size: t,
    originalDefaultSize: Ce({ ...e, defaultSize: t, size: t }) ? e.originalDefaultSize : t
  };
}
function $r(e) {
  const t = yt(e), o = Ce(e) ? e.originalDefaultSize ?? e.defaultSize ?? t : t, r = e.collapseTo ?? 0;
  return {
    ...e,
    originalDefaultSize: o,
    defaultSize: r,
    size: r
  };
}
function tt(e) {
  const t = e.originalDefaultSize ?? e.defaultSize ?? e.minSize ?? 100;
  return {
    ...e,
    defaultSize: t,
    size: t
  };
}
function Gr(e, t) {
  var o;
  switch (t.type) {
    case "HIDE_BLOCK":
      return e.hiddenBlocks.has(t.payload.blockId) ? e : {
        ...e,
        hiddenBlocks: /* @__PURE__ */ new Set([...e.hiddenBlocks, t.payload.blockId])
      };
    case "SHOW_BLOCK": {
      if (!e.hiddenBlocks.has(t.payload.blockId))
        return e;
      const r = new Set(e.hiddenBlocks);
      return r.delete(t.payload.blockId), {
        ...e,
        hiddenBlocks: r
      };
    }
    case "TOGGLE_BLOCK_VISIBILITY": {
      const r = e.hiddenBlocks.has(t.payload.blockId), s = new Set(e.hiddenBlocks);
      return r ? s.delete(t.payload.blockId) : s.add(t.payload.blockId), {
        ...e,
        hiddenBlocks: s
      };
    }
    case "RESIZE_BLOCK": {
      const r = e.blocks[t.payload.blockId];
      return r ? {
        ...e,
        blocks: {
          ...e.blocks,
          [t.payload.blockId]: Vr(r, t.payload.size)
        }
      } : e;
    }
    case "COLLAPSE_BLOCK": {
      const r = e.blocks[t.payload.blockId];
      return !r || Ce(r) ? e : {
        ...e,
        blocks: {
          ...e.blocks,
          [t.payload.blockId]: $r(r)
        }
      };
    }
    case "EXPAND_BLOCK": {
      const r = e.blocks[t.payload.blockId];
      return !r || !Ce(r) ? e : {
        ...e,
        blocks: {
          ...e.blocks,
          [t.payload.blockId]: tt(r)
        }
      };
    }
    case "ENSURE_BLOCK_VISIBLE": {
      const r = e.blocks[t.payload.blockId];
      if (!r) return e;
      const s = t.payload.expandIfCollapsed ?? !0, n = e.hiddenBlocks.has(t.payload.blockId), i = s && Ce(r);
      if (!n && !i)
        return e;
      const a = n ? new Set([...e.hiddenBlocks].filter((c) => c !== t.payload.blockId)) : e.hiddenBlocks;
      return {
        ...e,
        hiddenBlocks: a,
        blocks: i ? {
          ...e.blocks,
          [t.payload.blockId]: tt(r)
        } : e.blocks
      };
    }
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
    case "RESET_STATE": {
      const r = Object.fromEntries(
        Object.entries(e.blocks).map(([s, n]) => [
          s,
          {
            ...n,
            size: n.defaultSize
            // Reset to original defaultSize stored somewhere, or current defaultSize
          }
        ])
      );
      return {
        ...e,
        blocks: r,
        activeDivider: void 0,
        resize: {
          isDragging: !1,
          startPosition: { x: 0, y: 0 },
          initialSize: 0
        }
      };
    }
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
      const { targetBlockId: r, direction: s, firstChildId: n, secondChildId: i, initialSize: a = 1 } = t.payload, c = e.blocks[r];
      if (!c)
        return console.warn(`Cannot split: block ${r} not found`), e;
      if (c.type !== "group")
        return console.warn(`Cannot split: block ${r} is not a group`), e;
      if (c.canSplit !== !0)
        return console.warn(`Cannot split: block ${r} does not have canSplit enabled`), e;
      const m = s === "horizontal" ? "column" : "row", v = t.payload.newViewType || c.defaultViewType;
      if (!c.direction) {
        const f = c.children || [], h = f[0], S = h ? e.blocks[h] : void 0, d = {
          ...c,
          direction: m,
          children: [n, i]
        }, w = {
          id: n,
          type: "block",
          parentId: r,
          order: 0,
          defaultSize: a,
          sizeUnit: "fr",
          viewType: S == null ? void 0 : S.viewType,
          viewState: S == null ? void 0 : S.viewState,
          tabState: S == null ? void 0 : S.tabState
          // Preserve tabs when splitting
        }, l = {
          id: i,
          type: "block",
          parentId: r,
          order: 1,
          defaultSize: a,
          sizeUnit: "fr",
          viewType: v
        }, y = { ...e.blocks };
        return f.forEach((C) => {
          delete y[C];
        }), {
          ...e,
          blocks: {
            ...y,
            [r]: d,
            [n]: w,
            [i]: l
          }
        };
      }
      if (c.direction) {
        if (c.direction !== m)
          return console.warn(`Cannot split group ${r}: direction mismatch (has ${c.direction}, requested ${m})`), e;
        const f = {
          ...c,
          children: [...c.children || [], i]
        }, h = {
          id: i,
          type: "block",
          parentId: r,
          order: ((o = c.children) == null ? void 0 : o.length) || 0,
          defaultSize: a,
          sizeUnit: "fr",
          viewType: v
        };
        return {
          ...e,
          blocks: {
            ...e.blocks,
            [r]: f,
            [i]: h
          }
        };
      }
      return e;
    }
    case "UNSPLIT_BLOCK": {
      const { blockId: r } = t.payload, s = e.blocks[r];
      if (!s || s.type !== "group" || !s.children)
        return e;
      const n = { ...e.blocks };
      s.children.forEach((a) => {
        delete n[a];
      });
      const i = {
        ...s,
        type: "block",
        children: void 0,
        viewType: void 0
        // User will need to set content
      };
      return n[r] = i, {
        ...e,
        blocks: n
      };
    }
    case "ADD_BLOCK": {
      const { parentId: r, block: s } = t.payload, n = e.blocks[r];
      if (!n) return e;
      const i = n.type === "group" && n.children ? {
        ...n,
        children: [...n.children, s.id]
      } : n;
      return {
        ...e,
        blocks: {
          ...e.blocks,
          [r]: i,
          [s.id]: s
        }
      };
    }
    case "REMOVE_BLOCK": {
      const { blockId: r } = t.payload, s = e.blocks[r];
      if (!s) return e;
      const n = { ...e.blocks };
      if (s.parentId) {
        const a = n[s.parentId];
        a && a.type === "group" && a.children && (n[s.parentId] = {
          ...a,
          children: a.children.filter((c) => c !== r)
        });
      }
      delete n[r];
      const i = new Set(e.hiddenBlocks);
      return i.delete(r), {
        ...e,
        blocks: n,
        hiddenBlocks: i
      };
    }
    case "SET_BLOCK_VIEW_TYPE": {
      const { blockId: r, viewType: s } = t.payload, n = e.blocks[r];
      return n ? {
        ...e,
        blocks: {
          ...e.blocks,
          [r]: {
            ...n,
            viewType: s
          }
        }
      } : e;
    }
    case "OPEN_TAB": {
      const { blockId: r, tab: s } = t.payload, n = e.blocks[r];
      if (!n) return e;
      const i = Date.now(), a = Math.random().toString(36).substring(2, 9), c = `tab-${i}-${a}`, m = { ...s, id: c }, v = n.tabState;
      if (!v)
        return {
          ...e,
          blocks: {
            ...e.blocks,
            [r]: {
              ...n,
              tabState: {
                tabs: [m],
                activeTabId: c,
                history: [c],
                historyIndex: 0,
                scrollOffset: 0
              }
            }
          }
        };
      const f = [...v.tabs, m], h = [
        ...v.history.slice(0, v.historyIndex + 1),
        c
      ];
      return {
        ...e,
        blocks: {
          ...e.blocks,
          [r]: {
            ...n,
            tabState: {
              ...v,
              tabs: f,
              activeTabId: c,
              history: h,
              historyIndex: h.length - 1
            }
          }
        }
      };
    }
    case "CLOSE_TAB": {
      const { blockId: r, tabId: s } = t.payload, n = e.blocks[r];
      if (!(n != null && n.tabState)) return e;
      const { tabState: i } = n, a = i.tabs.findIndex((h) => h.id === s);
      if (a === -1) return e;
      const c = i.tabs.filter((h) => h.id !== s);
      if (c.length === 0)
        return {
          ...e,
          blocks: {
            ...e.blocks,
            [r]: {
              ...n,
              tabState: void 0
            }
          }
        };
      let m = i.activeTabId;
      if (s === i.activeTabId) {
        const h = a < c.length ? a : a - 1;
        m = c[h].id;
      }
      const v = i.history.filter((h) => h !== s);
      let f = i.historyIndex;
      return f >= v.length && (f = Math.max(0, v.length - 1)), {
        ...e,
        blocks: {
          ...e.blocks,
          [r]: {
            ...n,
            tabState: {
              ...i,
              tabs: c,
              activeTabId: m,
              history: v,
              historyIndex: f
            }
          }
        }
      };
    }
    case "SET_ACTIVE_TAB": {
      const { blockId: r, tabId: s } = t.payload, n = e.blocks[r];
      if (!(n != null && n.tabState)) return e;
      const { tabState: i } = n;
      if (!i.tabs.some((v) => v.id === s)) return e;
      let c = i.history, m = i.historyIndex;
      return s !== i.activeTabId && (c = [
        ...i.history.slice(0, i.historyIndex + 1),
        s
      ], m = c.length - 1), {
        ...e,
        blocks: {
          ...e.blocks,
          [r]: {
            ...n,
            tabState: {
              ...i,
              activeTabId: s,
              history: c,
              historyIndex: m
            }
          }
        }
      };
    }
    case "UPDATE_TAB": {
      const { blockId: r, tabId: s, updates: n } = t.payload, i = e.blocks[r];
      if (!(i != null && i.tabState)) return e;
      const { tabState: a } = i, c = a.tabs.findIndex((v) => v.id === s);
      if (c === -1) return e;
      const m = [...a.tabs];
      return m[c] = { ...m[c], ...n }, {
        ...e,
        blocks: {
          ...e.blocks,
          [r]: {
            ...i,
            tabState: {
              ...a,
              tabs: m
            }
          }
        }
      };
    }
    case "REORDER_TABS": {
      const { blockId: r, fromIndex: s, toIndex: n } = t.payload, i = e.blocks[r];
      if (!(i != null && i.tabState)) return e;
      const { tabState: a } = i;
      if (s < 0 || s >= a.tabs.length || n < 0 || n >= a.tabs.length)
        return e;
      const c = [...a.tabs], [m] = c.splice(s, 1);
      return c.splice(n, 0, m), {
        ...e,
        blocks: {
          ...e.blocks,
          [r]: {
            ...i,
            tabState: {
              ...a,
              tabs: c
            }
          }
        }
      };
    }
    case "NAVIGATE_TAB_HISTORY": {
      const { blockId: r, direction: s } = t.payload, n = e.blocks[r];
      if (!(n != null && n.tabState)) return e;
      const { tabState: i } = n, a = s === "forward" ? Math.min(i.historyIndex + 1, i.history.length - 1) : Math.max(i.historyIndex - 1, 0);
      if (a === i.historyIndex) return e;
      const c = i.history[a];
      return {
        ...e,
        blocks: {
          ...e.blocks,
          [r]: {
            ...n,
            tabState: {
              ...i,
              activeTabId: c,
              historyIndex: a
            }
          }
        }
      };
    }
    case "SET_TAB_SCROLL_OFFSET": {
      const { blockId: r, offset: s } = t.payload, n = e.blocks[r];
      return n != null && n.tabState ? {
        ...e,
        blocks: {
          ...e.blocks,
          [r]: {
            ...n,
            tabState: {
              ...n.tabState,
              scrollOffset: s
            }
          }
        }
      } : e;
    }
    default:
      return e;
  }
}
function Ur(e, t, o) {
  return {
    blocks: e.reduce((s, n) => (s[n.id] = {
      ...n,
      size: n.defaultSize,
      originalDefaultSize: n.defaultSize
      // Store original size for expand functionality
    }, s), {}),
    // Initialize hidden blocks from BlockConfig.isHidden property
    hiddenBlocks: new Set(
      e.filter((s) => s.isHidden).map((s) => s.id)
    ),
    activeMode: o,
    viewport: t,
    resize: {
      isDragging: !1,
      startPosition: { x: 0, y: 0 },
      initialSize: 0
    }
  };
}
const gt = Ne(null);
function Wr({
  children: e,
  blocks: t,
  modes: o,
  gridId: r = "default",
  persist: s = !1,
  persistKey: n,
  onModeChange: i,
  onLayoutChange: a
}) {
  const { activeMode: c, viewport: m, setMode: v } = zr(o), [f, h] = Mt(
    Gr,
    Ur(t, m, c)
  );
  G(() => {
    h({
      type: "UPDATE_VIEWPORT",
      payload: { viewport: m }
    });
  }, [m]), G(() => {
    const u = f.activeMode;
    c !== u && (h({
      type: "SWITCH_MODE",
      payload: { mode: c }
    }), i == null || i(c, u));
  }, [c, f.activeMode, i]);
  const { saveState: S, clearState: d } = Nr({
    gridId: n || r,
    enabled: s,
    state: f,
    onStateLoad: (u) => {
      const g = Ir(u, t);
      h({ type: "LOAD_STATE", payload: { state: g } });
    },
    autoSave: !0
  }), { startResize: w, updateResize: l, endResize: y } = Dr(f, h), C = oe(
    () => ({
      gridId: r,
      state: {
        ...f,
        activeMode: c,
        viewport: m
      },
      dispatch: h,
      // Grid operations
      resizeBlock: (u, g) => {
        h({
          type: "RESIZE_BLOCK",
          payload: { blockId: u, size: g }
        });
      },
      collapseBlock: (u) => {
        h({
          type: "COLLAPSE_BLOCK",
          payload: { blockId: u }
        });
      },
      expandBlock: (u) => {
        h({
          type: "EXPAND_BLOCK",
          payload: { blockId: u }
        });
      },
      switchMode: (u) => {
        v(u);
      },
      // Block visibility operations
      hideBlock: (u) => {
        h({
          type: "HIDE_BLOCK",
          payload: { blockId: u }
        });
      },
      showBlock: (u) => {
        h({
          type: "SHOW_BLOCK",
          payload: { blockId: u }
        });
      },
      ensureBlockVisible: (u, g = {}) => {
        h({
          type: "ENSURE_BLOCK_VISIBLE",
          payload: { blockId: u, ...g }
        });
      },
      toggleBlockVisibility: (u) => {
        h({
          type: "TOGGLE_BLOCK_VISIBILITY",
          payload: { blockId: u }
        });
      },
      // Split operations (LayoutService primitives)
      splitBlock: (u, g, A = {}) => {
        const { initialSize: L = 1, viewType: B, position: x = "after" } = A, I = Date.now(), O = `${u}-${I}-1`, _ = `${u}-${I}-2`;
        return h({
          type: "SPLIT_BLOCK",
          payload: {
            targetBlockId: u,
            direction: g,
            newBlockId: x === "before" ? O : _,
            firstChildId: O,
            secondChildId: _,
            initialSize: L,
            newViewType: B,
            position: x
          }
        }), x === "before" ? O : _;
      },
      unsplitBlock: (u) => {
        h({
          type: "UNSPLIT_BLOCK",
          payload: { blockId: u }
        });
      },
      canSplit: (u) => {
        var L;
        const g = f.blocks[u];
        if (!g || g.type !== "group" || g.canSplit !== !0) return !1;
        const A = ((L = g.splitConfig) == null ? void 0 : L.minSplitSize) || 200;
        return !(g.sizeUnit === "px" && (g.defaultSize || 0) < A * 2);
      },
      addBlock: (u, g) => {
        const A = g.id || `block-${Date.now()}`, L = {
          id: A,
          type: "block",
          parentId: u,
          defaultSize: 1,
          sizeUnit: "fr",
          ...g
        };
        return h({
          type: "ADD_BLOCK",
          payload: { parentId: u, block: L }
        }), A;
      },
      removeBlock: (u) => {
        h({
          type: "REMOVE_BLOCK",
          payload: { blockId: u }
        });
      },
      // View type operations (future ViewRegistry support)
      setBlockViewType: (u, g) => {
        h({
          type: "SET_BLOCK_VIEW_TYPE",
          payload: { blockId: u, viewType: g }
        });
      },
      getBlockViewType: (u) => {
        var g;
        return (g = f.blocks[u]) == null ? void 0 : g.viewType;
      },
      // Tab operations
      openTab: (u, g) => {
        const A = Date.now(), L = Math.random().toString(36).substring(2, 9), B = `tab-${A}-${L}`;
        return h({
          type: "OPEN_TAB",
          payload: { blockId: u, tab: g }
        }), B;
      },
      closeTab: (u, g) => {
        h({
          type: "CLOSE_TAB",
          payload: { blockId: u, tabId: g }
        });
      },
      setActiveTab: (u, g) => {
        h({
          type: "SET_ACTIVE_TAB",
          payload: { blockId: u, tabId: g }
        });
      },
      updateTab: (u, g, A) => {
        h({
          type: "UPDATE_TAB",
          payload: { blockId: u, tabId: g, updates: A }
        });
      },
      reorderTabs: (u, g, A) => {
        h({
          type: "REORDER_TABS",
          payload: { blockId: u, fromIndex: g, toIndex: A }
        });
      },
      navigateTabHistory: (u, g) => {
        h({
          type: "NAVIGATE_TAB_HISTORY",
          payload: { blockId: u, direction: g }
        });
      },
      getTabState: (u) => {
        var g;
        return (g = f.blocks[u]) == null ? void 0 : g.tabState;
      },
      // Resize operations (using extracted hook)
      startResize: w,
      updateResize: l,
      endResize: y,
      // Persistence
      persistState: () => S(f),
      resetState: () => {
        h({ type: "RESET_STATE" }), d();
      }
    }),
    [r, f, c, m, S, d, v, w, l, y]
  );
  return G(() => {
    if (a) {
      const u = Object.values(f.blocks);
      a(u);
    }
  }, [f.blocks, a]), /* @__PURE__ */ p.jsx(gt.Provider, { value: C, children: e });
}
function J() {
  const e = Be(gt);
  if (!e)
    throw new Error("useGridContext must be used within a GridProvider");
  return e;
}
function _e() {
  const { state: e } = J();
  return e;
}
function Kr() {
  const {
    resizeBlock: e,
    collapseBlock: t,
    expandBlock: o,
    hideBlock: r,
    showBlock: s,
    ensureBlockVisible: n,
    toggleBlockVisibility: i,
    switchMode: a,
    persistState: c,
    resetState: m
  } = J();
  return {
    resizeBlock: e,
    collapseBlock: t,
    expandBlock: o,
    hideBlock: r,
    showBlock: s,
    ensureBlockVisible: n,
    toggleBlockVisibility: i,
    switchMode: a,
    persistState: c,
    resetState: m
  };
}
function vt() {
  const { startResize: e, updateResize: t, endResize: o, state: r } = J();
  return {
    startResize: e,
    updateResize: t,
    endResize: o,
    isDragging: r.resize.isDragging,
    activeBlockId: r.resize.activeBlockId,
    activeDividerId: r.resize.activeDividerId
  };
}
function fo(e) {
  const { state: t } = J(), o = t.blocks[e];
  if (!o)
    return console.warn(`Block with id "${e}" not found in grid state`), null;
  const r = o.size ?? o.defaultSize ?? 0, s = o.collapseTo ?? 0, n = r <= s;
  return {
    ...o,
    size: r,
    isCollapsed: n
  };
}
function po(e) {
  const { state: t } = J(), o = t.blocks[e];
  if (!o || !o.parentId)
    return null;
  const r = t.blocks[o.parentId];
  if (!r)
    return console.warn(`Parent block "${o.parentId}" not found for block "${e}"`), null;
  const s = r.size ?? r.defaultSize ?? 0, n = r.collapseTo ?? 0, i = s <= n;
  return {
    ...r,
    size: s,
    isCollapsed: i
  };
}
function mo(e) {
  const { state: t } = J();
  return t.hiddenBlocks.has(e);
}
function ho() {
  const { hideBlock: e } = J();
  return e;
}
function bo() {
  const { showBlock: e } = J();
  return e;
}
function yo() {
  const { ensureBlockVisible: e } = J();
  return e;
}
function go() {
  const { toggleBlockVisibility: e } = J();
  return e;
}
function Hr({
  blocks: e,
  containerRef: t,
  onSizeChange: o,
  direction: r = "row"
}) {
  const {
    startResize: s,
    updateResize: n,
    endResize: i,
    isDragging: a,
    activeBlockId: c,
    activeDividerId: m
  } = vt(), v = M(() => {
    if (!t.current) return 0;
    const l = t.current.getBoundingClientRect();
    return r === "column" ? l.width : l.height;
  }, [r, t]), f = M(() => {
    const l = v();
    if (l === 0) return 0;
    const y = e.filter((A) => A.sizeUnit === "px").reduce((A, L) => A + (L.defaultSize || 0), 0), C = 0, u = e.filter((A) => A.sizeUnit === "fr").reduce((A, L) => A + (L.defaultSize || 1), 0), g = bt(l, y, C);
    return u > 0 ? g / u : 0;
  }, [e, v]), h = M((l) => {
    const y = e.find((C) => C.id === l);
    y && y.defaultSize !== void 0 && (o == null || o(l, y.defaultSize));
  }, [e, o]), S = M((l) => {
    const y = e.find((C) => C.id === l);
    y && y.collapseTo !== void 0 && (o == null || o(l, y.collapseTo));
  }, [e, o]), d = M((l) => {
    const y = e.find((C) => C.id === l);
    y && y.defaultSize !== void 0 && (o == null || o(l, y.defaultSize));
  }, [e, o]), w = M((l) => {
    const y = e.find((C) => C.id === l);
    return !y || !y.collapseAt ? !1 : (y.defaultSize || 0) <= y.collapseAt;
  }, [e]);
  return G(() => {
    const l = (g) => {
      g.preventDefault(), n(g);
    }, y = (g) => {
      g.preventDefault(), n(g);
    }, C = () => {
      i();
    }, u = () => {
      i();
    };
    if (a)
      return document.addEventListener("mousemove", l), document.addEventListener("mouseup", C), document.addEventListener("touchmove", y), document.addEventListener("touchend", u), () => {
        document.removeEventListener("mousemove", l), document.removeEventListener("mouseup", C), document.removeEventListener("touchmove", y), document.removeEventListener("touchend", u);
      };
  }, [a, n, i]), {
    // State
    isDragging: a,
    activeBlockId: c,
    activeDividerId: m,
    // Actions
    startResize: s,
    resetBlock: h,
    collapseBlock: S,
    expandBlock: d,
    // Utilities
    isBlockCollapsed: w,
    getContainerSize: v,
    calculatePixelsPerFr: f
  };
}
function Fr({
  enabled: e = !0,
  blocks: t,
  onResizeBlock: o,
  onFocusBlock: r,
  onCollapseBlock: s,
  onExpandBlock: n,
  onSplitBlock: i,
  containerRef: a,
  stepSize: c = 10,
  largeStepSize: m = 50
}) {
  const v = M(() => {
    const l = document.activeElement;
    return (l == null ? void 0 : l.dataset.blockType) === "block" || (l == null ? void 0 : l.dataset.blockType) === "group" ? l : (l == null ? void 0 : l.closest('[data-block-type="block"], [data-block-type="group"]')) || null;
  }, []), f = M((l) => {
    if (!l) return null;
    const y = l.dataset.blockId;
    return t.find((C) => C.id === y) || null;
  }, [t]), h = M((l, y) => {
    if (!(a != null && a.current)) return null;
    const C = Array.from(
      a.current.querySelectorAll('[data-block-type="block"], [data-block-type="group"]')
    ), u = l.getBoundingClientRect(), g = {
      x: u.left + u.width / 2,
      y: u.top + u.height / 2
    }, A = C.filter((L) => {
      if (L === l) return !1;
      const B = L.getBoundingClientRect(), x = {
        x: B.left + B.width / 2,
        y: B.top + B.height / 2
      };
      switch (y) {
        case "up":
          return x.y < g.y;
        case "down":
          return x.y > g.y;
        case "left":
          return x.x < g.x;
        case "right":
          return x.x > g.x;
        default:
          return !1;
      }
    });
    return A.length === 0 ? null : (A.sort((L, B) => {
      const x = L.getBoundingClientRect(), I = B.getBoundingClientRect(), O = {
        x: x.left + x.width / 2,
        y: x.top + x.height / 2
      }, _ = {
        x: I.left + I.width / 2,
        y: I.top + I.height / 2
      }, k = Math.sqrt(
        Math.pow(O.x - g.x, 2) + Math.pow(O.y - g.y, 2)
      ), E = Math.sqrt(
        Math.pow(_.x - g.x, 2) + Math.pow(_.y - g.y, 2)
      );
      return k - E;
    }), A[0]);
  }, [a]), S = M((l) => {
    if (!e) return;
    const y = document.activeElement;
    if (y && (y.tagName === "INPUT" || y.tagName === "TEXTAREA" || y.tagName === "SELECT" || y.isContentEditable)) return;
    const u = v();
    if (!u) return;
    const g = f(u);
    if (!g) return;
    const A = l.ctrlKey || l.metaKey, L = l.shiftKey, B = L ? m : c;
    if (!A && !L)
      switch (l.key) {
        case "ArrowUp": {
          l.preventDefault();
          const x = h(u, "up");
          x && (x.focus(), r == null || r(x.dataset.blockId || ""));
          break;
        }
        case "ArrowDown": {
          l.preventDefault();
          const x = h(u, "down");
          x && (x.focus(), r == null || r(x.dataset.blockId || ""));
          break;
        }
        case "ArrowLeft": {
          l.preventDefault();
          const x = h(u, "left");
          x && (x.focus(), r == null || r(x.dataset.blockId || ""));
          break;
        }
        case "ArrowRight": {
          l.preventDefault();
          const x = h(u, "right");
          x && (x.focus(), r == null || r(x.dataset.blockId || ""));
          break;
        }
        case "Enter":
        case " ":
          l.preventDefault(), g.collapsible && (n == null || n(g.id));
          break;
        case "Escape":
          l.preventDefault(), u.blur();
          break;
      }
    if (A && o)
      switch (l.key) {
        case "ArrowUp":
          l.preventDefault(), o(g.id, -B);
          break;
        case "ArrowDown":
          l.preventDefault(), o(g.id, B);
          break;
        case "ArrowLeft":
          l.preventDefault(), o(g.id, -B);
          break;
        case "ArrowRight":
          l.preventDefault(), o(g.id, B);
          break;
      }
    if (A)
      switch (l.key) {
        case "Minus":
        case "-":
          l.preventDefault(), s == null || s(g.id);
          break;
        case "Plus":
        case "+":
        case "=":
          l.preventDefault(), n == null || n(g.id);
          break;
        case "\\":
          l.preventDefault(), L ? i == null || i(g.id, "horizontal") : i == null || i(g.id, "vertical");
          break;
      }
  }, [
    e,
    v,
    f,
    h,
    o,
    r,
    s,
    n,
    i,
    c,
    m
  ]), d = M((l) => {
    if (!(a != null && a.current)) return;
    const y = a.current.querySelector(
      `[data-block-id="${l}"]`
    );
    y && (y.focus(), r == null || r(l));
  }, [a, r]), w = M(() => a != null && a.current ? Array.from(
    a.current.querySelectorAll(
      '[data-block-type="block"][tabindex], [data-block-type="group"][tabindex]'
    )
  ) : [], [a]);
  return G(() => {
    if (e)
      return document.addEventListener("keydown", S), () => {
        document.removeEventListener("keydown", S);
      };
  }, [S, e]), {
    focusBlock: d,
    getFocusableBlocks: w,
    getFocusedBlock: v,
    isEnabled: e
  };
}
const wt = ({
  targetId: e,
  position: t,
  direction: o,
  size: r = 4,
  // Default hover zone size (like VS Code)
  className: s,
  "aria-label": n
}) => {
  const i = ce(null), { gridId: a, state: c } = J(), { collapseBlock: m, expandBlock: v } = Kr(), { startResize: f, isDragging: h, activeDividerId: S } = vt(), [d, w] = Y({
    left: 0,
    top: 0,
    width: 0,
    height: 0
  }), l = c.blocks[e], y = o === "vertical", C = `${e}-${t}-divider`, u = h && S === C, g = (l == null ? void 0 : l.size) ?? (l == null ? void 0 : l.defaultSize) ?? 0, A = (l == null ? void 0 : l.collapsible) === !0 && g <= (l.collapseTo ?? 0), L = M(() => {
    const I = document.querySelector(`[data-grid-id="${a}"]`), O = document.querySelector(`[data-block-id="${e}"]`);
    if (!I || !O) return;
    const _ = I.getBoundingClientRect(), k = O.getBoundingClientRect(), E = l == null ? void 0 : l.parentId, N = E ? document.querySelector(`[data-block-id="${E}"]`) : I;
    if (!N) return;
    const H = ((N.hasAttribute("data-has-toolbar") ? N.querySelector("[data-split-content]") : null) || N).getBoundingClientRect();
    if (y) {
      const j = t === "start" ? k.left - _.left : k.right - _.left;
      w({
        left: j - r / 2,
        // Center on edge
        top: H.top - _.top,
        // Position relative to constraint area
        width: r,
        height: H.height
        // Use constraint height (content area if toolbar present)
      });
    } else {
      const j = t === "start" ? k.top - _.top : k.bottom - _.top;
      w({
        left: H.left - _.left,
        // Position relative to constraint area
        top: j - r / 2,
        // Center on edge
        width: H.width,
        // Use constraint width (content area if toolbar present)
        height: r
      });
    }
  }, [a, e, t, y, r, l == null ? void 0 : l.parentId]);
  Vt(() => {
    const I = document.querySelector(`[data-grid-id="${a}"]`), O = document.querySelector(`[data-block-id="${e}"]`);
    if (!I || !O) return;
    L();
    const _ = new ResizeObserver(() => {
      L();
    });
    _.observe(I), _.observe(O);
    const k = l == null ? void 0 : l.parentId, E = k ? document.querySelector(`[data-block-id="${k}"]`) : null;
    if (E && (_.observe(E), E.hasAttribute("data-has-toolbar"))) {
      const D = E.querySelector("[data-split-content]");
      D && _.observe(D);
    }
    return () => {
      _.disconnect();
    };
  }, [a, e, L, l == null ? void 0 : l.parentId]), G(() => {
    L();
  }, [c.blocks, L]);
  const B = M((I) => {
    I.preventDefault(), f(e, C, I);
  }, [e, C, f]), x = M((I) => {
    if (I.preventDefault(), !(l != null && l.collapsible) || l.collapseAt === void 0)
      return;
    (l.size ?? l.defaultSize ?? 0) <= (l.collapseTo ?? 0) ? v(e) : m(e);
  }, [m, v, l, e]);
  return l ? /* @__PURE__ */ p.jsx(
    "div",
    {
      ref: i,
      className: ee(
        "pretty-poly-divider",
        "absolute",
        "bg-transparent",
        // Invisible by default
        "transition-colors duration-100",
        "hover:bg-[var(--divider-hover-color,rgba(59,130,246,0.5))]",
        u && "bg-[var(--divider-active-color,rgba(59,130,246,0.7))]",
        y ? "cursor-col-resize" : "cursor-row-resize",
        s
      ),
      style: {
        left: `${d.left}px`,
        top: `${d.top}px`,
        width: `${d.width}px`,
        height: `${d.height}px`,
        pointerEvents: A ? "none" : "auto",
        // Re-enable pointer events (parent has pointer-events: none)
        zIndex: 10
      },
      "data-divider-id": C,
      "data-target-block": e,
      "data-divider-position": t,
      "data-divider-direction": o,
      role: "separator",
      "aria-label": n || `Resize ${e}`,
      "aria-valuenow": l == null ? void 0 : l.defaultSize,
      "aria-valuemin": l == null ? void 0 : l.minSize,
      "aria-valuemax": l == null ? void 0 : l.maxSize,
      tabIndex: 0,
      onMouseDown: B,
      onTouchStart: B,
      onDoubleClick: x
    }
  ) : null;
};
wt.displayName = "Divider";
function qr(e, t) {
  if (!t)
    return { targetId: e.id, position: "end" };
  const o = e.sizeUnit || "fr", r = t.sizeUnit || "fr";
  return o === "fr" && r === "px" ? { targetId: t.id, position: "start" } : o === "px" && r === "fr" ? { targetId: e.id, position: "end" } : { targetId: e.id, position: "end" };
}
function Yr(e) {
  const t = [];
  return Object.values(e).filter((r) => r.type === "group").forEach((r) => {
    const s = Object.values(e).filter((a) => a.parentId === r.id).sort((a, c) => (a.order || 0) - (c.order || 0));
    if (s.length === 0) return;
    const i = r.direction === "row" ? "vertical" : "horizontal";
    s.forEach((a, c) => {
      if (c === 0) return;
      const m = s[c - 1], v = m.resizable !== !1, f = a.resizable !== !1;
      if (!v && !f)
        return;
      const { targetId: h, position: S } = qr(m, a), d = e[h];
      d && d.resizable === !1 || t.push({
        id: `divider-${m.id}-${a.id}`,
        targetBlockId: h,
        position: S,
        direction: i
      });
    });
  }), t;
}
const Jr = () => {
  const e = _e(), t = oe(() => Yr(e.blocks), [e.blocks]);
  return t.length === 0 ? null : /* @__PURE__ */ p.jsx(
    "div",
    {
      className: "pretty-poly-divider-overlay",
      style: {
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 10
      },
      children: t.map((o) => /* @__PURE__ */ p.jsx(
        wt,
        {
          targetId: o.targetBlockId,
          position: o.position,
          direction: o.direction
        },
        o.id
      ))
    }
  );
}, xt = X(({ children: e, className: t, "aria-label": o }, r) => {
  const s = ce(null), {
    state: n,
    resizeBlock: i,
    collapseBlock: a,
    expandBlock: c,
    switchMode: m,
    persistState: v,
    resetState: f
  } = J(), h = n.resize.isDragging;
  $t(
    r,
    () => ({
      resizeBlock: i,
      collapseBlock: a,
      expandBlock: c,
      switchMode: m,
      persistState: v,
      resetState: f,
      getState: () => n
    }),
    [
      i,
      a,
      c,
      m,
      v,
      f,
      n
    ]
  );
  const S = oe(() => Object.values(n.blocks).sort((g, A) => (g.order || 0) - (A.order || 0)), [n.blocks]), d = oe(() => S.find((u) => !u.parentId), [S]);
  Hr({
    blocks: S,
    containerRef: s,
    onSizeChange: i,
    direction: (d == null ? void 0 : d.direction) || "row"
  });
  const { splitBlock: w } = J();
  Fr({
    enabled: !0,
    blocks: S,
    containerRef: s,
    onResizeBlock: (u, g) => {
      const A = n.blocks[u];
      if (A) {
        const L = A.defaultSize || 0, B = Math.max(0, L + g);
        i(u, B);
      }
    },
    onCollapseBlock: a,
    onExpandBlock: c,
    onSplitBlock: (u, g) => {
      w(u, g);
    }
  });
  const { gridStyles: l, cssVariables: y, modeStyles: C } = oe(() => {
    if (!d)
      return { gridStyles: "", cssVariables: "", modeStyles: "" };
    const u = S.reduce((I, O) => {
      if (O.id === d.id) return I;
      const _ = O.parentId || d.id;
      return I[_] || (I[_] = []), I[_].push(O), I;
    }, {}), g = S.filter((I) => I.defaultSize !== void 0).map((I) => {
      const O = I.sizeUnit === "px" ? `${I.defaultSize}px` : `${I.defaultSize}fr`;
      return `--${d.id}-${I.id}-size: ${O};`;
    }).join(`
  `), A = () => "", L = (I, O = /* @__PURE__ */ new Set()) => {
      if (O.has(I))
        return console.warn(`Circular reference detected for parent: ${I}`), "";
      const _ = new Set(O);
      _.add(I);
      const k = u[I] || [];
      if (k.length === 0) return "";
      const E = [...k].sort(
        (R, $) => (R.order || 0) - ($.order || 0)
      ), N = S.find((R) => R.id === I) || d, D = N == null ? void 0 : N.direction, U = E.map((R) => ({
        id: R.id,
        sizeUnit: R.sizeUnit || "fr",
        size: R.defaultSize || 1,
        dividerPosition: "none",
        // Dividers are overlays, not in grid template
        dividerSize: 0
        // Not used since dividers are overlays
      })), H = Or(U, d.id, n.hiddenBlocks), ne = (N == null ? void 0 : N.hasToolbar) === !0 ? `[data-block-id="${I}"] > [data-split-content]` : `[data-block-id="${I}"]`;
      let b = "";
      D ? b = `
${ne} {
  display: grid;
  ${D === "column" ? "grid-template-rows" : "grid-template-columns"}: ${H};
  ${D === "column" ? "grid-template-columns: 1fr;" : "grid-template-rows: 1fr;"}
}` : b = `
${ne} {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
}`;
      for (const R of E)
        R.type === "group" && (b += L(R.id, _));
      return b;
    }, B = L(d.id), x = A();
    return {
      cssVariables: `:root {
  ${g}
}`,
      gridStyles: B,
      modeStyles: x
    };
  }, [S, d, n.hiddenBlocks]);
  return d ? /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsxs("style", { type: "text/css", children: [
      y,
      l,
      C
    ] }),
    /* @__PURE__ */ p.jsxs(
      "div",
      {
        ref: s,
        className: ee(
          "group relative overflow-hidden",
          h && "select-none cursor-grabbing pretty-poly-grid--dragging",
          t
        ),
        "data-grid-id": d.id,
        "data-block-id": d.id,
        "data-block-type": d.type,
        "data-active-mode": n.activeMode,
        "aria-label": o || "Resizable grid layout",
        role: "application",
        style: { isolation: "isolate" },
        children: [
          e,
          (n.activeMode === "grid" || n.activeMode === "desktop") && /* @__PURE__ */ p.jsx(Jr, {})
        ]
      }
    )
  ] }) : (console.warn("No root block found in grid configuration"), null);
});
xt.displayName = "GridInternal";
const Zr = X(
  ({
    children: e,
    defaultLayout: t = [],
    modes: o,
    persist: r = !1,
    persistKey: s,
    onLayoutChange: n,
    onModeChange: i,
    className: a,
    dividers: c = "manual",
    dividerConfig: m,
    "aria-label": v
  }, f) => {
    const h = t.find((d) => !d.parentId), S = (h == null ? void 0 : h.id) || "root";
    return /* @__PURE__ */ p.jsx(
      Wr,
      {
        blocks: t,
        modes: o,
        gridId: S,
        persist: r,
        persistKey: s,
        onLayoutChange: n,
        onModeChange: i,
        children: /* @__PURE__ */ p.jsx(
          xt,
          {
            ref: f,
            className: a,
            dividers: c,
            dividerConfig: m,
            "aria-label": v,
            children: e
          }
        )
      }
    );
  }
);
Zr.displayName = "Grid";
const kt = X(
  ({ scrollMode: e = "vertical", className: t, children: o, "aria-label": r }, s) => {
    const n = {
      vertical: "overflow-y-auto overflow-x-hidden",
      horizontal: "overflow-x-auto overflow-y-hidden",
      both: "overflow-auto",
      none: "overflow-hidden"
    };
    return /* @__PURE__ */ p.jsx(
      "div",
      {
        ref: s,
        className: ee(
          "pretty-poly-block-content",
          "flex-1",
          // Fill remaining space
          "min-h-0",
          // Allow flex shrinking
          n[e],
          t
        ),
        "data-scroll-mode": e,
        "aria-label": r,
        role: "main",
        children: o
      }
    );
  }
);
kt.displayName = "Block.Content";
const St = X(
  ({ position: e = "top", className: t, children: o, "aria-label": r }, s) => /* @__PURE__ */ p.jsx(
    "div",
    {
      ref: s,
      className: ee(
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
      "aria-label": r,
      role: "banner",
      children: o
    }
  )
);
St.displayName = "Block.Header";
const zt = X(
  ({ className: e, children: t, "aria-label": o }, r) => /* @__PURE__ */ p.jsx(
    "div",
    {
      ref: r,
      className: ee(
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
      "aria-label": o,
      role: "contentinfo",
      children: t
    }
  )
);
zt.displayName = "Block.Footer";
const Tt = X(
  ({ left: e, center: t, right: o, className: r, "aria-label": s }, n) => /* @__PURE__ */ p.jsxs(
    "div",
    {
      ref: n,
      className: ee(
        "pretty-poly-block-toolbar",
        "flex items-center justify-between",
        "w-full px-3 py-2",
        // Standard padding
        "border-b",
        // Shadcn border uses default border color
        "bg-muted",
        // Shadcn background
        r
      ),
      "aria-label": s || "Toolbar",
      role: "toolbar",
      children: [
        /* @__PURE__ */ p.jsx("div", { className: "flex items-center space-x-2 flex-shrink-0", children: e }),
        /* @__PURE__ */ p.jsx("div", { className: "flex items-center justify-center flex-1 px-4", children: t }),
        /* @__PURE__ */ p.jsx("div", { className: "flex items-center space-x-2 flex-shrink-0", children: o })
      ]
    }
  )
);
Tt.displayName = "Block.Toolbar";
const Et = X(
  ({
    tabs: e,
    activeTab: t,
    onTabChange: o,
    onTabClose: r,
    className: s,
    "aria-label": n,
    allowOverflow: i = !0,
    showNavigation: a = !1,
    onNavigateBack: c,
    onNavigateForward: m,
    canGoBack: v = !1,
    canGoForward: f = !1,
    actions: h
  }, S) => {
    const [d, w] = Y(null), [l, y] = Y(!1), [C, u] = Y(!1), [g, A] = Y(!1), L = ce(null), B = (k, E) => {
      E.preventDefault(), k.disabled || o(k.id);
    }, x = (k, E) => {
      E.preventDefault(), E.stopPropagation(), r && k.closable && r(k.id);
    }, I = (k, E) => {
      (E.key === "Enter" || E.key === " ") && (E.preventDefault(), k.disabled || o(k.id));
    }, O = M(() => {
      const k = L.current;
      if (!k) return;
      const E = k.scrollWidth > k.clientWidth;
      if (y(E && i), E) {
        const N = k.scrollLeft, D = k.scrollWidth - k.clientWidth;
        u(N > 1), A(N < D - 1);
      } else
        u(!1), A(!1);
    }, [i]), _ = M((k) => {
      const E = L.current;
      if (!E) return;
      const N = 200, D = k === "left" ? E.scrollLeft - N : E.scrollLeft + N;
      E.scrollTo({
        left: D,
        behavior: "smooth"
      });
    }, []);
    return G(() => {
      const k = L.current;
      if (!k) return;
      O(), k.addEventListener("scroll", O);
      const E = new ResizeObserver(O);
      return E.observe(k), () => {
        k.removeEventListener("scroll", O), E.disconnect();
      };
    }, [O]), G(() => {
      O();
    }, [e, O]), /* @__PURE__ */ p.jsxs(
      "div",
      {
        ref: S,
        className: Q(
          "pretty-poly-block-tabs",
          "flex items-center",
          "border-b border-border",
          "bg-card",
          s
        ),
        role: "tablist",
        "aria-label": n || "Block tabs",
        children: [
          a && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center space-x-1 px-2 border-r border-border flex-shrink-0", children: [
            /* @__PURE__ */ p.jsx(
              "button",
              {
                onClick: c,
                disabled: !v,
                className: Q(
                  "p-1.5 rounded hover:bg-accent transition-colors",
                  !v && "opacity-30 cursor-not-allowed"
                ),
                "aria-label": "Navigate back",
                title: "Go back",
                children: /* @__PURE__ */ p.jsx("svg", { className: "w-4 h-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ p.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) })
              }
            ),
            /* @__PURE__ */ p.jsx(
              "button",
              {
                onClick: m,
                disabled: !f,
                className: Q(
                  "p-1.5 rounded hover:bg-accent transition-colors",
                  !f && "opacity-30 cursor-not-allowed"
                ),
                "aria-label": "Navigate forward",
                title: "Go forward",
                children: /* @__PURE__ */ p.jsx("svg", { className: "w-4 h-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ p.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })
              }
            )
          ] }),
          l && /* @__PURE__ */ p.jsx(
            "button",
            {
              onClick: () => _("left"),
              disabled: !C,
              className: Q(
                "flex-shrink-0 p-1.5 hover:bg-accent transition-colors",
                !C && "opacity-30 cursor-not-allowed"
              ),
              "aria-label": "Scroll tabs left",
              title: "Scroll left",
              children: /* @__PURE__ */ p.jsx("svg", { className: "w-4 h-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ p.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) })
            }
          ),
          /* @__PURE__ */ p.jsxs(
            "div",
            {
              ref: L,
              className: Q(
                "flex items-center min-w-0 flex-1 relative",
                i ? "overflow-x-auto" : "overflow-x-hidden",
                // Hide scrollbar for cleaner look
                "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              ),
              children: [
                l && C && /* @__PURE__ */ p.jsx("div", { className: "absolute left-0 top-0 bottom-0 w-8 pointer-events-none bg-gradient-to-r from-card to-transparent z-10" }),
                e.map((k) => {
                  const E = k.id === t, N = d === k.id, D = k.icon;
                  return /* @__PURE__ */ p.jsxs(
                    "div",
                    {
                      className: Q(
                        "flex items-center space-x-2 px-3 py-2 text-sm cursor-pointer",
                        "border-b-2 transition-colors duration-150",
                        "min-w-0 flex-shrink-0",
                        // Prevent shrinking
                        E ? "border-primary text-primary bg-accent" : "border-transparent text-muted-foreground hover:text-foreground hover:bg-accent",
                        k.disabled && "opacity-50 cursor-not-allowed",
                        k.isPinned && "bg-accent/50",
                        !i && "flex-1"
                        // Equal width tabs when overflow disabled
                      ),
                      role: "tab",
                      "aria-selected": E,
                      "aria-disabled": k.disabled,
                      tabIndex: k.disabled ? -1 : 0,
                      onClick: (U) => B(k, U),
                      onKeyDown: (U) => I(k, U),
                      onMouseEnter: () => w(k.id),
                      onMouseLeave: () => w(null),
                      "data-tab-id": k.id,
                      "data-tab-dirty": k.isDirty,
                      "data-tab-pinned": k.isPinned,
                      children: [
                        k.isPinned && /* @__PURE__ */ p.jsxs(
                          "svg",
                          {
                            className: "w-3 h-3 flex-shrink-0 text-muted-foreground",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            "aria-label": "Pinned",
                            children: [
                              /* @__PURE__ */ p.jsx("title", { children: "Pinned" }),
                              /* @__PURE__ */ p.jsx("path", { d: "M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L11 4.323V3a1 1 0 011-1h-2z" })
                            ]
                          }
                        ),
                        D && /* @__PURE__ */ p.jsx(D, { className: "w-4 h-4 flex-shrink-0" }),
                        /* @__PURE__ */ p.jsx("span", { className: "truncate min-w-0", children: k.label }),
                        k.isDirty && /* @__PURE__ */ p.jsx(
                          "div",
                          {
                            className: "w-2 h-2 rounded-full bg-primary flex-shrink-0",
                            title: "Unsaved changes",
                            "aria-label": "Has unsaved changes"
                          }
                        ),
                        k.closable && r && !k.isPinned && /* @__PURE__ */ p.jsx(
                          "button",
                          {
                            className: Q(
                              "flex-shrink-0 w-4 h-4 rounded-sm hover:bg-muted",
                              "flex items-center justify-center",
                              "transition-colors duration-150",
                              N || E ? "opacity-100" : "opacity-0"
                            ),
                            onClick: (U) => x(k, U),
                            "aria-label": `Close ${k.label} tab`,
                            tabIndex: -1,
                            children: /* @__PURE__ */ p.jsx(
                              "svg",
                              {
                                className: "w-3 h-3",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /* @__PURE__ */ p.jsx(
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
                    k.id
                  );
                }),
                l && g && /* @__PURE__ */ p.jsx("div", { className: "absolute right-0 top-0 bottom-0 w-8 pointer-events-none bg-gradient-to-l from-card to-transparent z-10" })
              ]
            }
          ),
          l && /* @__PURE__ */ p.jsx(
            "button",
            {
              onClick: () => _("right"),
              disabled: !g,
              className: Q(
                "flex-shrink-0 p-1.5 hover:bg-accent transition-colors",
                !g && "opacity-30 cursor-not-allowed"
              ),
              "aria-label": "Scroll tabs right",
              title: "Scroll right",
              children: /* @__PURE__ */ p.jsx("svg", { className: "w-4 h-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ p.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })
            }
          ),
          h && /* @__PURE__ */ p.jsx("div", { className: "flex items-center space-x-2 px-2 border-l border-border flex-shrink-0", children: h })
        ]
      }
    );
  }
);
Et.displayName = "Block.Tabs";
const Fe = X(
  ({ position: e = "left", width: t = 48, className: o, children: r, "aria-label": s }, n) => /* @__PURE__ */ p.jsx(
    "div",
    {
      ref: n,
      className: Q(
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
        o
      ),
      style: { width: `${t}px` },
      "data-sidebar-position": e,
      "data-sidebar-width": t,
      "aria-label": s || "Sidebar navigation",
      role: "navigation",
      children: r
    }
  )
);
Fe.displayName = "Block.Sidebar";
const Ct = X(
  ({
    icon: e,
    tooltip: t,
    active: o = !1,
    disabled: r = !1,
    badge: s,
    onClick: n,
    className: i,
    "aria-label": a
  }, c) => {
    const [m, v] = Y(!1), f = () => {
      t && !r && v(!0);
    }, h = () => {
      v(!1);
    }, S = () => {
      !r && n && n();
    }, d = (w) => {
      (w.key === "Enter" || w.key === " ") && (w.preventDefault(), S());
    };
    return /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ p.jsxs(
        "button",
        {
          ref: c,
          className: Q(
            "pretty-poly-sidebar-item",
            "w-full h-12",
            // Fixed height for consistency
            "flex items-center justify-center",
            "relative",
            "transition-colors duration-150",
            "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-inset",
            // Active state
            o && "bg-accent border-r-2 border-primary",
            // Hover state (when not disabled)
            !r && "hover:bg-accent",
            // Disabled state
            r && "opacity-50 cursor-not-allowed",
            // Default cursor
            !r && "cursor-pointer",
            i
          ),
          disabled: r,
          onClick: S,
          onKeyDown: d,
          onMouseEnter: f,
          onMouseLeave: h,
          "aria-label": a || t,
          "aria-pressed": o,
          tabIndex: r ? -1 : 0,
          children: [
            /* @__PURE__ */ p.jsx(
              e,
              {
                className: Q(
                  "w-5 h-5",
                  o ? "text-primary" : "text-muted-foreground",
                  !r && "group-hover:text-foreground"
                )
              }
            ),
            s && /* @__PURE__ */ p.jsx("div", { className: "absolute -top-1 -right-1 min-w-4 h-4 bg-destructive text-destructive-foreground text-xs rounded-full flex items-center justify-center px-1", children: typeof s == "number" && s > 99 ? "99+" : s }),
            o && /* @__PURE__ */ p.jsx("div", { className: "absolute left-0 top-1/2 transform -translate-y-1/2 w-0.5 h-6 bg-primary" })
          ]
        }
      ),
      m && t && /* @__PURE__ */ p.jsx("div", { className: "absolute left-full ml-2 top-1/2 transform -translate-y-1/2 z-50", children: /* @__PURE__ */ p.jsxs("div", { className: "bg-popover text-popover-foreground text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap border border-border", children: [
        t,
        /* @__PURE__ */ p.jsx("div", { className: "absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-popover" })
      ] }) })
    ] });
  }
);
Ct.displayName = "Block.Sidebar.Item";
const It = X(
  ({ className: e }, t) => /* @__PURE__ */ p.jsx(
    "div",
    {
      ref: t,
      className: Q(
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
It.displayName = "Block.Sidebar.Spacer";
const At = X(
  ({ direction: e = "column", className: t, children: o, "aria-label": r }, s) => /* @__PURE__ */ p.jsx(
    "div",
    {
      ref: s,
      className: ee(
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
      "aria-label": r,
      children: o
    }
  )
);
At.displayName = "Block.Layout";
const qe = X(
  ({
    id: e,
    type: t = "block",
    direction: o = "row",
    children: r,
    className: s,
    divider: n,
    noDivider: i,
    "aria-label": a
  }, c) => {
    var d;
    const { gridId: m } = J(), v = _e(), f = v == null ? void 0 : v.blocks[e], h = ((d = v == null ? void 0 : v.hiddenBlocks) == null ? void 0 : d.has(e)) || !1, S = oe(() => f != null && f.collapsible && f.collapseAt ? (f.size ?? f.defaultSize ?? 0) <= f.collapseAt : !1, [f]);
    return /* @__PURE__ */ p.jsx(
      "div",
      {
        ref: c,
        className: ee(
          // Base styles - simple grid item that fills its space
          "relative",
          "w-full h-full",
          "overflow-hidden",
          "transition-opacity duration-150",
          S && "opacity-70",
          s
        ),
        style: {
          // Hide block with display: none - removes from grid flow
          // The grid template will be dynamically updated to exclude this block
          display: h ? "none" : void 0
        },
        "data-grid-id": m,
        "data-block-id": e,
        "data-block-type": t,
        "data-block-direction": o,
        "data-block-size-default": f == null ? void 0 : f.defaultSize,
        "data-block-size-unit": f == null ? void 0 : f.sizeUnit,
        "data-block-size-min": f == null ? void 0 : f.minSize,
        "data-block-size-max": f == null ? void 0 : f.maxSize,
        "data-block-resizable": (f == null ? void 0 : f.resizable) !== !1,
        "data-block-collapse-at": f == null ? void 0 : f.collapseAt,
        "data-block-collapse-to": f == null ? void 0 : f.collapseTo,
        "data-block-divider-position": f == null ? void 0 : f.dividerPosition,
        "data-block-divider-size": f == null ? void 0 : f.dividerSize,
        "data-block-divider": n !== void 0 ? JSON.stringify(n) : void 0,
        "data-block-no-divider": i,
        "data-block-hidden": h,
        "aria-label": a,
        "aria-hidden": h,
        role: t === "group" ? "group" : void 0,
        children: r
      }
    );
  }
);
qe.displayName = "Block";
const jt = X(
  (e, t) => /* @__PURE__ */ p.jsx(qe, { ref: t, ...e, type: "group" })
);
jt.displayName = "Block.Group";
Object.assign(qe, {
  Group: jt,
  Layout: At,
  Header: St,
  Content: kt,
  Footer: zt,
  Toolbar: Tt,
  Tabs: Et,
  Sidebar: Fe
});
Object.assign(Fe, {
  Item: Ct,
  Spacer: It
});
function Xr(e) {
  const o = _e().blocks[e];
  if (!o)
    return {
      canSplitVertical: !1,
      canSplitHorizontal: !1,
      currentDirection: void 0,
      canSplit: !1
    };
  const r = o.direction !== void 0, s = !r || o.direction === "row", n = !r || o.direction === "column";
  return {
    canSplitVertical: s,
    canSplitHorizontal: n,
    currentDirection: o.direction,
    canSplit: o.canSplit === !0
  };
}
const Lt = X(
  ({
    blockId: e,
    children: t,
    label: o,
    icon: r,
    showSplitButtons: s = !0,
    splitButtonLabels: n = {
      vertical: "Split Right",
      horizontal: "Split Down"
    },
    splitButtonIcons: i,
    onBeforeSplit: a,
    className: c,
    toolbarClassName: m,
    contentClassName: v,
    renderToolbar: f,
    "aria-label": h
  }, S) => {
    const { splitBlock: d } = J(), { canSplitVertical: w, canSplitHorizontal: l } = Xr(e), y = i == null ? void 0 : i.vertical, C = i == null ? void 0 : i.horizontal, u = () => {
      a && a("vertical") === !1 || d(e, "vertical");
    }, g = () => {
      a && a("horizontal") === !1 || d(e, "horizontal");
    }, A = {
      blockId: e,
      canSplitVertical: w,
      canSplitHorizontal: l,
      handleSplitVertical: u,
      handleSplitHorizontal: g,
      label: o,
      icon: r
    };
    return /* @__PURE__ */ p.jsxs(
      "div",
      {
        ref: S,
        "data-block-id": e,
        "data-block-type": "group",
        "data-has-toolbar": "true",
        className: ee("relative w-full h-full flex flex-col min-h-0", c),
        "aria-label": h,
        children: [
          f ? f(A) : /* @__PURE__ */ p.jsx(
            "div",
            {
              className: ee(
                "flex-none border-b border-border bg-card",
                m
              ),
              children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between px-3 py-2", children: [
                /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-2", children: [
                  r && /* @__PURE__ */ p.jsx(r, { className: "w-4 h-4 text-muted-foreground" }),
                  o && /* @__PURE__ */ p.jsx("div", { className: "font-semibold text-sm", children: o })
                ] }),
                s && /* @__PURE__ */ p.jsxs("div", { className: "flex gap-1", children: [
                  w && /* @__PURE__ */ p.jsxs(
                    "button",
                    {
                      onClick: u,
                      className: "px-2 py-1 rounded text-xs border border-border hover:bg-accent transition-colors flex items-center gap-1",
                      title: `${n.vertical} (Ctrl+\\)`,
                      "aria-label": n.vertical,
                      children: [
                        y && /* @__PURE__ */ p.jsx(y, { className: "w-3 h-3" }),
                        /* @__PURE__ */ p.jsx("span", { className: "hidden sm:inline", children: n.vertical })
                      ]
                    }
                  ),
                  l && /* @__PURE__ */ p.jsxs(
                    "button",
                    {
                      onClick: g,
                      className: "px-2 py-1 rounded text-xs border border-border hover:bg-accent transition-colors flex items-center gap-1",
                      title: `${n.horizontal} (Ctrl+Shift+\\)`,
                      "aria-label": n.horizontal,
                      children: [
                        C && /* @__PURE__ */ p.jsx(C, { className: "w-3 h-3" }),
                        /* @__PURE__ */ p.jsx("span", { className: "hidden sm:inline", children: n.horizontal })
                      ]
                    }
                  )
                ] })
              ] })
            }
          ),
          /* @__PURE__ */ p.jsx(
            "div",
            {
              "data-split-content": !0,
              className: ee("flex-1 relative min-h-0", v),
              children: t
            }
          )
        ]
      }
    );
  }
);
Lt.displayName = "BlockSplitContainer";
function Rt({
  blockId: e,
  renderBlock: t,
  getSplitContainerProps: o,
  renderSplitContainer: r,
  renderGroup: s,
  className: n
}) {
  const i = _e();
  if (!i || !i.blocks)
    return null;
  const a = i.blocks[e];
  if (!a)
    return null;
  const c = () => !a.children || a.children.length === 0 ? null : /* @__PURE__ */ p.jsx(p.Fragment, { children: a.children.map((m) => /* @__PURE__ */ p.jsx(
    Rt,
    {
      blockId: m,
      renderBlock: t,
      getSplitContainerProps: o,
      renderSplitContainer: r,
      renderGroup: s
    },
    m
  )) });
  if (a.type === "group" && a.hasToolbar) {
    const m = c();
    if (r)
      return /* @__PURE__ */ p.jsx(p.Fragment, { children: r(e, a, m) });
    const v = o ? o(a, e) : {};
    return /* @__PURE__ */ p.jsx(
      Lt,
      {
        blockId: e,
        className: n,
        ...v,
        children: m
      }
    );
  }
  if (a.type === "group" && a.children) {
    const m = c();
    return s ? /* @__PURE__ */ p.jsx(p.Fragment, { children: s(e, a, m) }) : /* @__PURE__ */ p.jsx(p.Fragment, { children: m });
  }
  return t ? /* @__PURE__ */ p.jsx(p.Fragment, { children: t(a, e) }) : /* @__PURE__ */ p.jsx(
    "div",
    {
      "data-block-id": e,
      "data-block-type": "block",
      className: n || "relative w-full h-full",
      children: /* @__PURE__ */ p.jsxs("div", { className: "p-4 text-muted-foreground", children: [
        'Block "',
        e,
        '" - No render function provided'
      ] })
    }
  );
}
Rt.displayName = "BlockTreeRenderer";
const Qr = X(
  ({
    icon: e,
    size: t = "sm",
    className: o,
    title: r = "Close",
    type: s = "button",
    ...n
  }, i) => {
    const a = {
      xs: "h-5 w-5 p-0.5",
      sm: "h-6 w-6 p-1",
      md: "h-7 w-7 p-1.5"
    }, c = {
      xs: "w-3 h-3",
      sm: "w-3.5 h-3.5",
      md: "w-4 h-4"
    };
    return /* @__PURE__ */ p.jsx(
      "button",
      {
        ref: i,
        type: s,
        className: ee(
          "pretty-poly-block-close-button",
          "inline-flex items-center justify-center",
          "rounded",
          "text-muted-foreground",
          "hover:bg-accent hover:text-accent-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          "transition-colors",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          a[t],
          o
        ),
        title: r,
        "aria-label": r,
        ...n,
        children: e ? /* @__PURE__ */ p.jsx(e, { className: c[t] }) : /* @__PURE__ */ p.jsx("span", { className: "text-base leading-none", children: "×" })
      }
    );
  }
);
Qr.displayName = "BlockCloseButton";
class eo {
  constructor() {
    re(this, "views", /* @__PURE__ */ new Map());
    re(this, "listeners", /* @__PURE__ */ new Set());
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
    const o = t.map((r) => this.registerView(r));
    return () => o.forEach((r) => r());
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
    const o = Array.from(this.views.values());
    return t ? o.sort((r, s) => (r.order ?? 0) - (s.order ?? 0)) : o;
  }
  /**
   * Get views filtered by category
   */
  getViewsByCategory(t) {
    return this.getAllViews().filter((o) => o.category === t);
  }
  /**
   * Get all unique categories
   */
  getCategories() {
    const t = /* @__PURE__ */ new Set();
    return this.views.forEach((o) => {
      o.category && t.add(o.category);
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
const Nt = Ne(null);
function ve() {
  const e = Be(Nt);
  if (!e)
    throw new Error("useViewRegistry must be used within ViewRegistryProvider");
  return e;
}
function vo(e) {
  const t = ve(), [o, r] = Y(() => t.getView(e));
  return G(() => t.subscribe(() => {
    r(t.getView(e));
  }), [t, e]), o;
}
function wo(e) {
  const t = ve(), [o, r] = Y(() => e != null && e.category ? t.getViewsByCategory(e.category) : t.getAllViews((e == null ? void 0 : e.sorted) ?? !0));
  return G(() => {
    const s = () => {
      e != null && e.category ? r(t.getViewsByCategory(e.category)) : r(t.getAllViews((e == null ? void 0 : e.sorted) ?? !0));
    };
    return t.subscribe(s);
  }, [t, e == null ? void 0 : e.category, e == null ? void 0 : e.sorted]), o;
}
function xo({ children: e, registry: t }) {
  const [o] = Y(() => t ?? new eo());
  return /* @__PURE__ */ p.jsx(Nt.Provider, { value: o, children: e });
}
function ko(e) {
  const t = ve();
  G(() => t.registerViews(e), [t, e]);
}
function So(e) {
  const t = ve();
  G(() => t.registerView(e), [t, e]);
}
function Ve(...e) {
  return pt(Q(e));
}
function zo({
  blockId: e,
  label: t = "+",
  className: o,
  onTabCreated: r
}) {
  const s = ve(), { openTab: n } = J(), [i, a] = Y(!1), c = ce(null), m = s.getAllViews(!0), v = s.getCategories(), f = v.length > 0;
  G(() => {
    function w(l) {
      c.current && !c.current.contains(l.target) && a(!1);
    }
    if (i)
      return document.addEventListener("mousedown", w), () => document.removeEventListener("mousedown", w);
  }, [i]), G(() => {
    function w(l) {
      l.key === "Escape" && i && a(!1);
    }
    if (i)
      return document.addEventListener("keydown", w), () => document.removeEventListener("keydown", w);
  }, [i]);
  const h = (w) => {
    const l = w.icon, y = n(e, {
      label: w.title,
      icon: l,
      viewType: w.id,
      viewState: {},
      closable: !0
    });
    a(!1), r == null || r(y);
  }, d = (f ? v.map((w) => ({
    category: w,
    views: s.getViewsByCategory(w)
  })) : [{ category: void 0, views: m }]).filter((w) => w.views.length > 0);
  return /* @__PURE__ */ p.jsxs("div", { className: "relative", ref: c, children: [
    /* @__PURE__ */ p.jsx(
      "button",
      {
        onClick: () => a(!i),
        className: Ve(
          "px-2 py-1 text-sm font-medium rounded hover:bg-accent transition-colors",
          "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          o
        ),
        "aria-label": "Create new tab",
        "aria-expanded": i,
        "aria-haspopup": "menu",
        children: t
      }
    ),
    i && /* @__PURE__ */ p.jsx(
      "div",
      {
        className: Ve(
          "absolute top-full right-0 mt-1 min-w-[200px] max-h-[400px]",
          "bg-popover border rounded-md shadow-md overflow-y-auto z-50"
        ),
        role: "menu",
        "aria-orientation": "vertical",
        children: d.length === 0 ? /* @__PURE__ */ p.jsx("div", { className: "px-3 py-2 text-sm text-muted-foreground text-center", children: "No views registered" }) : d.map((w, l) => /* @__PURE__ */ p.jsxs("div", { children: [
          w.category && /* @__PURE__ */ p.jsx("div", { className: "px-3 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide border-b", children: w.category }),
          /* @__PURE__ */ p.jsx("div", { className: w.category ? "py-1" : "", children: w.views.map((y) => {
            const C = y.icon;
            return /* @__PURE__ */ p.jsxs(
              "button",
              {
                onClick: () => h(y),
                className: Ve(
                  "w-full px-3 py-2 text-left text-sm",
                  "hover:bg-accent transition-colors",
                  "focus:outline-none focus:bg-accent",
                  "flex items-center gap-2"
                ),
                role: "menuitem",
                children: [
                  C && /* @__PURE__ */ p.jsx(C, { className: "w-4 h-4 flex-shrink-0", "aria-hidden": "true" }),
                  /* @__PURE__ */ p.jsx("span", { className: "flex-1", children: y.title })
                ]
              },
              y.id
            );
          }) }),
          l < d.length - 1 && /* @__PURE__ */ p.jsx("div", { className: "border-t" })
        ] }, w.category || "uncategorized"))
      }
    )
  ] });
}
function To({ tab: e, blockId: t, ...o }) {
  const r = ve();
  if (!e.viewType)
    return null;
  const s = r.getView(e.viewType);
  if (!s)
    return /* @__PURE__ */ p.jsx("div", { className: "flex items-center justify-center h-full p-4 text-destructive", children: /* @__PURE__ */ p.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ p.jsx("div", { className: "text-lg font-semibold mb-2", children: "View Not Found" }),
      /* @__PURE__ */ p.jsxs("div", { className: "text-sm text-muted-foreground", children: [
        'View type "',
        e.viewType,
        '" is not registered in the ViewRegistry.'
      ] })
    ] }) });
  const n = s.component;
  return /* @__PURE__ */ p.jsx(
    n,
    {
      viewId: e.viewType,
      blockId: t,
      tabId: e.id,
      ...e.viewState || {},
      ...o
    },
    e.id
  );
}
function Eo(e, t, o) {
  const r = [];
  let s = e;
  const n = t.minSize ?? 0, i = t.maxSize ?? 1 / 0;
  if (e < n && (r.push(`Size ${e} is below minimum ${n}`), s = n), e > i && (r.push(`Size ${e} exceeds maximum ${i}`), s = i), s = he(s, n, i), t.sizeUnit === "px" && t.collapsible && o !== void 0) {
    const a = t.collapseAt ?? 0, c = t.collapseTo ?? 0, m = t.defaultSize ?? s;
    s = Br(
      s,
      o,
      a,
      c,
      m
    );
  }
  return {
    isValid: r.length === 0,
    adjustedValue: s,
    violations: r
  };
}
function Co(e, t, o, r, s = 1) {
  const n = [];
  let i = o, a = r;
  const c = pe(e.minSize ?? 0, e.sizeUnit, s), m = pe(e.maxSize ?? 1 / 0, e.sizeUnit, s), v = pe(t.minSize ?? 0, t.sizeUnit, s), f = pe(t.maxSize ?? 1 / 0, t.sizeUnit, s), h = pe(e.defaultSize ?? 0, e.sizeUnit, s), S = pe(t.defaultSize ?? 0, t.sizeUnit, s), d = h + o, w = S + r;
  let l = he(d, c, m), y = he(w, v, f);
  i = l - h, a = y - S;
  const C = i + a;
  if (Math.abs(C) > 1e-3) {
    const A = Math.abs(i) < Math.abs(o), L = Math.abs(a) < Math.abs(r);
    if (A && !L) {
      const B = S - i;
      y = he(B, v, f), a = y - S;
    } else if (L && !A) {
      const B = h - a;
      l = he(B, c, m), i = l - h;
    }
    n.push("Zero-sum constraint violated, deltas adjusted");
  }
  const u = i + a;
  return {
    isValid: Math.abs(u) <= 1e-3,
    adjustedTargetDelta: i,
    adjustedAdjacentDelta: a,
    violations: n
  };
}
function pe(e, t, o) {
  if (e === void 0 || e === 1 / 0)
    return 1 / 0;
  switch (t) {
    case "px":
      return e;
    case "fr":
      return e * o;
    case "auto":
    default:
      return e;
  }
}
function Io(e, t) {
  const o = [], r = e.filter((n) => n.sizeUnit === "px").reduce((n, i) => n + (t[i.id] ?? i.defaultSize ?? 0), 0), s = e.filter((n) => n.sizeUnit === "fr").reduce((n, i) => n + (t[i.id] ?? i.defaultSize ?? 0), 0);
  return r < 0 && o.push("Total fixed size cannot be negative"), s <= 0 && e.some((n) => n.sizeUnit === "fr") && o.push("Total fr units must be positive"), e.forEach((n) => {
    const i = t[n.id] ?? n.defaultSize ?? 0, a = n.minSize ?? 0, c = n.maxSize ?? 1 / 0;
    a > c && o.push(`Block ${n.id}: minSize (${a}) > maxSize (${c})`), (i < a || i > c) && o.push(`Block ${n.id}: size ${i} violates constraints [${a}, ${c}]`);
  }), {
    isValid: o.length === 0,
    violations: o
  };
}
class to {
  constructor() {
    re(this, "commands", /* @__PURE__ */ new Map());
    re(this, "executionListeners", /* @__PURE__ */ new Map());
    re(this, "registrationListeners", /* @__PURE__ */ new Set());
    re(this, "keybindingMap", /* @__PURE__ */ new Map());
  }
  // normalized key -> command id
  /**
   * Register a new command
   * @returns Disposable function to unregister the command
   */
  registerCommand(t) {
    if (this.commands.has(t.id) && console.warn(`Command "${t.id}" is already registered. Overwriting.`), this.commands.set(t.id, t), t.keybinding) {
      const o = this.normalizeKeybinding(t.keybinding);
      this.keybindingMap.set(o, t.id);
    }
    return this.notifyRegistrationChange(), () => {
      if (this.commands.delete(t.id), t.keybinding) {
        const o = this.normalizeKeybinding(t.keybinding);
        this.keybindingMap.delete(o);
      }
      this.notifyRegistrationChange();
    };
  }
  /**
   * Register multiple commands at once
   * @returns Disposable function to unregister all commands
   */
  registerCommands(t) {
    const o = t.map((r) => this.registerCommand(r));
    return () => o.forEach((r) => r());
  }
  /**
   * Execute a command by ID
   */
  async executeCommand(t, ...o) {
    const r = this.commands.get(t);
    if (!r)
      return console.warn(`Command not found: ${t}`), { success: !1, error: new Error(`Command not found: ${t}`) };
    try {
      const s = await r.handler(...o);
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
    const o = Array.from(this.commands.values());
    return t ? o.sort((r, s) => {
      const n = r.category || "", i = s.category || "";
      if (n !== i) return n.localeCompare(i);
      const a = r.title || r.id, c = s.title || s.id;
      return a.localeCompare(c);
    }) : o;
  }
  /**
   * Get commands filtered by category
   */
  getCommandsByCategory(t) {
    return this.getAllCommands().filter((o) => o.category === t);
  }
  /**
   * Get all unique categories
   */
  getCategories() {
    const t = /* @__PURE__ */ new Set();
    return this.commands.forEach((o) => {
      o.category && t.add(o.category);
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
  onDidExecuteCommand(t, o) {
    return this.executionListeners.has(t) || this.executionListeners.set(t, /* @__PURE__ */ new Set()), this.executionListeners.get(t).add(o), () => {
      var r;
      (r = this.executionListeners.get(t)) == null || r.delete(o);
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
    const o = this.normalizeKeyboardEvent(t), r = this.keybindingMap.get(o);
    return r ? (t.preventDefault(), t.stopPropagation(), this.executeCommand(r).catch((s) => {
      console.error(`Error executing command ${r}:`, s);
    }), !0) : !1;
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
    return t.toLowerCase().replace("cmd", "meta").replace("command", "meta").split("+").map((o) => o.trim()).sort().join("+");
  }
  /**
   * Convert a keyboard event to normalized key string
   */
  normalizeKeyboardEvent(t) {
    const o = [];
    t.ctrlKey && o.push("ctrl"), t.altKey && o.push("alt"), t.shiftKey && o.push("shift"), t.metaKey && o.push("meta");
    const r = t.key.toLowerCase();
    return r !== "control" && r !== "alt" && r !== "shift" && r !== "meta" && o.push(r), o.sort().join("+");
  }
  notifyExecution(t, o) {
    var r;
    (r = this.executionListeners.get(t)) == null || r.forEach((s) => s(o));
  }
  notifyRegistrationChange() {
    this.registrationListeners.forEach((t) => t());
  }
}
const Bt = Ne(null);
function we() {
  const e = Be(Bt);
  if (!e)
    throw new Error("useCommandService must be used within CommandServiceProvider");
  return e;
}
function Ao(e) {
  const t = we(), [o, r] = Y(() => t.getCommand(e));
  return G(() => {
    const s = () => {
      r(t.getCommand(e));
    };
    return t.onDidChangeCommands(s);
  }, [t, e]), o;
}
function jo(e) {
  const t = we(), [o, r] = Y(() => e != null && e.category ? t.getCommandsByCategory(e.category) : t.getAllCommands((e == null ? void 0 : e.sorted) ?? !0));
  return G(() => {
    const s = () => {
      e != null && e.category ? r(t.getCommandsByCategory(e.category)) : r(t.getAllCommands((e == null ? void 0 : e.sorted) ?? !0));
    };
    return t.onDidChangeCommands(s);
  }, [t, e == null ? void 0 : e.category, e == null ? void 0 : e.sorted]), o;
}
function Lo(e) {
  const t = we();
  return M(
    (...o) => t.executeCommand(e, ...o),
    [t, e]
  );
}
function Ro(e) {
  const t = we();
  G(() => t.registerCommands(e), [t, e]);
}
function No(e) {
  const t = we();
  G(() => t.registerCommand(e), [t, e]);
}
function Bo(e = !0) {
  const t = we();
  G(() => {
    if (!e) return;
    const o = (r) => {
      t.handleKeyboardEvent(r);
    };
    return window.addEventListener("keydown", o), () => {
      window.removeEventListener("keydown", o);
    };
  }, [t, e]);
}
function _o({
  children: e,
  service: t,
  enableKeyboardShortcuts: o = !0
}) {
  const [r] = Y(() => t ?? new to());
  return G(() => {
    if (!o) return;
    const s = (n) => {
      r.handleKeyboardEvent(n);
    };
    return window.addEventListener("keydown", s), () => {
      window.removeEventListener("keydown", s);
    };
  }, [r, o]), /* @__PURE__ */ p.jsx(Bt.Provider, { value: r, children: e });
}
class ro {
  constructor() {
    re(this, "viewTypes", {});
    // blockId -> viewTypeId
    re(this, "layouts", /* @__PURE__ */ new Map());
    re(this, "changeListeners", /* @__PURE__ */ new Set());
    re(this, "layoutListeners", /* @__PURE__ */ new Set());
  }
  /**
   * Set which view type a block should display
   */
  setBlockViewType(t, o) {
    this.viewTypes[t] !== o && (this.viewTypes[t] = o, this.notifyChange());
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
    var o;
    this.layouts.set(t.id, {
      ...t,
      metadata: {
        ...t.metadata,
        createdAt: ((o = t.metadata) == null ? void 0 : o.createdAt) || (/* @__PURE__ */ new Date()).toISOString()
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
    const o = this.layouts.get(t);
    return o ? (this.setViewTypes(o.viewTypes), !0) : (console.warn(`Layout not found: ${t}`), !1);
  }
  /**
   * Delete a saved layout
   */
  deleteLayout(t) {
    const o = this.layouts.delete(t);
    return o && this.notifyLayoutChange(), o;
  }
  /**
   * Get all saved layouts
   */
  getAllLayouts() {
    return Array.from(this.layouts.values()).sort((t, o) => {
      var n, i;
      const r = new Date(((n = t.metadata) == null ? void 0 : n.createdAt) || 0);
      return new Date(((i = o.metadata) == null ? void 0 : i.createdAt) || 0).getTime() - r.getTime();
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
  createLayoutFromCurrentState(t, o, r, s) {
    return {
      id: t,
      name: o,
      blocks: [...r],
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
      const o = JSON.parse(t);
      let r = 0;
      for (const s of o)
        s.id && s.name && s.blocks && s.viewTypes && (this.saveLayout(s), r++);
      return r;
    } catch (o) {
      return console.error("Error importing layouts:", o), 0;
    }
  }
  notifyChange() {
    const t = this.getAllViewTypes();
    this.changeListeners.forEach((o) => o(t));
  }
  notifyLayoutChange() {
    this.layoutListeners.forEach((t) => t());
  }
}
const _t = Ne(null);
function xe() {
  const e = Be(_t);
  if (!e)
    throw new Error("useLayoutService must be used within LayoutServiceProvider");
  return e;
}
function Oo(e) {
  const t = xe(), [o, r] = Y(() => t.getBlockViewType(e));
  return G(() => {
    const s = (i) => {
      r(i[e]);
    };
    return t.onViewTypesChange(s);
  }, [t, e]), o;
}
function Po() {
  const e = xe(), [t, o] = Y(() => e.getAllViewTypes());
  return G(() => e.onViewTypesChange(o), [e]), t;
}
function Do() {
  const e = xe();
  return M(
    (t, o) => {
      e.setBlockViewType(t, o);
    },
    [e]
  );
}
function Mo() {
  const e = xe(), [t, o] = Y(() => e.getAllLayouts());
  return G(() => {
    const r = () => {
      o(e.getAllLayouts());
    };
    return e.onLayoutsChange(r);
  }, [e]), t;
}
function Vo() {
  const e = xe();
  return M(
    (t, o, r, s) => {
      const n = e.createLayoutFromCurrentState(t, o, r, s);
      e.saveLayout(n);
    },
    [e]
  );
}
function $o() {
  const e = xe();
  return M(
    (t) => e.applyLayout(t),
    [e]
  );
}
function Go({
  children: e,
  service: t,
  initialViewTypes: o
}) {
  const [r] = Y(() => {
    const s = t ?? new ro();
    return o && s.setViewTypes(o), s;
  });
  return /* @__PURE__ */ p.jsx(_t.Provider, { value: r, children: e });
}
export {
  qe as Block,
  kt as BlockContent,
  zt as BlockFooter,
  jt as BlockGroup,
  St as BlockHeader,
  At as BlockLayout,
  Fe as BlockSidebar,
  Ct as BlockSidebarItem,
  It as BlockSidebarSpacer,
  Lt as BlockSplitContainer,
  Et as BlockTabs,
  Tt as BlockToolbar,
  Rt as BlockTreeRenderer,
  to as CommandService,
  _o as CommandServiceProvider,
  wt as Divider,
  Zr as Grid,
  Wr as GridProvider,
  ro as LayoutService,
  Go as LayoutServiceProvider,
  zo as NewTabDropdown,
  eo as ViewRegistry,
  xo as ViewRegistryProvider,
  To as ViewRenderer,
  Br as applyCollapseLogic,
  _r as calculateConstrainedSize,
  he as clamp,
  ee as cn,
  Rr as createCustomAdapter,
  Sr as defaultModes,
  co as findAdjacentBlock,
  lo as frToPx,
  Or as generateGridTemplate,
  so as getAllGridStates,
  bt as getFlexSpacePx,
  Me as getStorageAdapter,
  ao as isCollapsed,
  uo as isZeroSum,
  jr as loadGridState,
  be as localStorageAdapter,
  Le as memoryStorageAdapter,
  Ir as mergePersistedGridState,
  io as pxPerFr,
  Pr as pxToFr,
  Lr as removeGridState,
  Ar as saveGridState,
  ht as sessionStorageAdapter,
  $o as useApplyLayout,
  Xr as useBlockSplitDirection,
  fo as useBlockState,
  Oo as useBlockViewType,
  Ao as useCommand,
  Bo as useCommandKeyboardShortcuts,
  we as useCommandService,
  jo as useCommands,
  yo as useEnsureBlockVisible,
  Lo as useExecuteCommand,
  Kr as useGridActions,
  J as useGridContext,
  Fr as useGridKeyboard,
  zr as useGridMode,
  Nr as useGridPersistence,
  Hr as useGridResize,
  _e as useGridState,
  ho as useHideBlock,
  mo as useIsBlockHidden,
  xe as useLayoutService,
  Mo as useLayouts,
  po as useParentBlockState,
  No as useRegisterCommand,
  Ro as useRegisterCommands,
  So as useRegisterView,
  ko as useRegisterViews,
  Vo as useSaveLayout,
  Do as useSetBlockViewType,
  bo as useShowBlock,
  go as useToggleBlockVisibility,
  vo as useViewDescriptor,
  ve as useViewRegistry,
  Po as useViewTypes,
  wo as useViews,
  Eo as validateBlockSize,
  Io as validateLayoutIntegrity,
  Co as validateTwoWayResize
};
