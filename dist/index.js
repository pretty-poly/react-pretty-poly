var jt = Object.defineProperty;
var Rt = (e, t, o) => t in e ? jt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var re = (e, t, o) => Rt(e, typeof t != "symbol" ? t + "" : t, o);
import Lt, { useState as q, useCallback as V, useMemo as oe, useEffect as G, useRef as ce, createContext as Re, useContext as Le, useReducer as Nt, useLayoutEffect as _t, forwardRef as Z, useImperativeHandle as Pt } from "react";
var Me = { exports: {} }, Se = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ke;
function Ot() {
  if (Ke) return Se;
  Ke = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function o(r, n, s) {
    var i = null;
    if (s !== void 0 && (i = "" + s), n.key !== void 0 && (i = "" + n.key), "key" in n) {
      s = {};
      for (var a in n)
        a !== "key" && (s[a] = n[a]);
    } else s = n;
    return n = s.ref, {
      $$typeof: e,
      type: r,
      key: i,
      ref: n !== void 0 ? n : null,
      props: s
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
var He;
function Mt() {
  return He || (He = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g) {
      if (g == null) return null;
      if (typeof g == "function")
        return g.$$typeof === O ? null : g.displayName || g.name || null;
      if (typeof g == "string") return g;
      switch (g) {
        case v:
          return "Fragment";
        case h:
          return "Profiler";
        case d:
          return "StrictMode";
        case S:
          return "Suspense";
        case A:
          return "SuspenseList";
        case L:
          return "Activity";
      }
      if (typeof g == "object")
        switch (typeof g.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), g.$$typeof) {
          case l:
            return "Portal";
          case u:
            return (g.displayName || "Context") + ".Provider";
          case C:
            return (g._context.displayName || "Context") + ".Consumer";
          case b:
            var R = g.render;
            return g = g.displayName, g || (g = R.displayName || R.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
          case N:
            return R = g.displayName || null, R !== null ? R : e(g.type) || "Memo";
          case w:
            R = g._payload, g = g._init;
            try {
              return e(g(R));
            } catch {
            }
        }
      return null;
    }
    function t(g) {
      return "" + g;
    }
    function o(g) {
      try {
        t(g);
        var R = !1;
      } catch {
        R = !0;
      }
      if (R) {
        R = console;
        var $ = R.error, D = typeof Symbol == "function" && Symbol.toStringTag && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return $.call(
          R,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          D
        ), t(g);
      }
    }
    function r(g) {
      if (g === v) return "<>";
      if (typeof g == "object" && g !== null && g.$$typeof === w)
        return "<...>";
      try {
        var R = e(g);
        return R ? "<" + R + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var g = M.A;
      return g === null ? null : g.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(g) {
      if (z.call(g, "key")) {
        var R = Object.getOwnPropertyDescriptor(g, "key").get;
        if (R && R.isReactWarning) return !1;
      }
      return g.key !== void 0;
    }
    function a(g, R) {
      function $() {
        B || (B = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          R
        ));
      }
      $.isReactWarning = !0, Object.defineProperty(g, "key", {
        get: $,
        configurable: !0
      });
    }
    function c() {
      var g = e(this.type);
      return W[g] || (W[g] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), g = this.props.ref, g !== void 0 ? g : null;
    }
    function m(g, R, $, D, U, J, ue, K) {
      return $ = J.ref, g = {
        $$typeof: x,
        type: g,
        key: R,
        props: J,
        _owner: U
      }, ($ !== void 0 ? $ : null) !== null ? Object.defineProperty(g, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(g, "ref", { enumerable: !1, value: null }), g._store = {}, Object.defineProperty(g._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(g, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(g, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ue
      }), Object.defineProperty(g, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: K
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    }
    function y(g, R, $, D, U, J, ue, K) {
      var H = R.children;
      if (H !== void 0)
        if (D)
          if (I(H)) {
            for (D = 0; D < H.length; D++)
              k(H[D]);
            Object.freeze && Object.freeze(H);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else k(H);
      if (z.call(R, "key")) {
        H = e(g);
        var te = Object.keys(R).filter(function(ke) {
          return ke !== "key";
        });
        D = 0 < te.length ? "{key: someKey, " + te.join(": ..., ") + ": ...}" : "{key: someKey}", ne[H + D] || (te = 0 < te.length ? "{" + te.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          D,
          H,
          te,
          H
        ), ne[H + D] = !0);
      }
      if (H = null, $ !== void 0 && (o($), H = "" + $), i(R) && (o(R.key), H = "" + R.key), "key" in R) {
        $ = {};
        for (var ae in R)
          ae !== "key" && ($[ae] = R[ae]);
      } else $ = R;
      return H && a(
        $,
        typeof g == "function" ? g.displayName || g.name || "Unknown" : g
      ), m(
        g,
        H,
        J,
        U,
        n(),
        $,
        ue,
        K
      );
    }
    function k(g) {
      typeof g == "object" && g !== null && g.$$typeof === x && g._store && (g._store.validated = 1);
    }
    var p = Lt, x = Symbol.for("react.transitional.element"), l = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), C = Symbol.for("react.consumer"), u = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), N = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), L = Symbol.for("react.activity"), O = Symbol.for("react.client.reference"), M = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, z = Object.prototype.hasOwnProperty, I = Array.isArray, P = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(g) {
        return g();
      }
    };
    var B, W = {}, Y = p.react_stack_bottom_frame.bind(
      p,
      s
    )(), j = P(r(s)), ne = {};
    ze.Fragment = v, ze.jsx = function(g, R, $, D, U) {
      var J = 1e4 > M.recentlyCreatedOwnerStacks++;
      return y(
        g,
        R,
        $,
        !1,
        D,
        U,
        J ? Error("react-stack-top-frame") : Y,
        J ? P(r(g)) : j
      );
    }, ze.jsxs = function(g, R, $, D, U) {
      var J = 1e4 > M.recentlyCreatedOwnerStacks++;
      return y(
        g,
        R,
        $,
        !0,
        D,
        U,
        J ? Error("react-stack-top-frame") : Y,
        J ? P(r(g)) : j
      );
    };
  }()), ze;
}
process.env.NODE_ENV === "production" ? Me.exports = Ot() : Me.exports = Mt();
var f = Me.exports;
function Ze(e) {
  var t, o, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var n = e.length;
    for (t = 0; t < n; t++) e[t] && (o = Ze(e[t])) && (r && (r += " "), r += o);
  } else for (o in e) e[o] && (r && (r += " "), r += o);
  return r;
}
function X() {
  for (var e, t, o = 0, r = "", n = arguments.length; o < n; o++) (e = arguments[o]) && (t = Ze(e)) && (r && (r += " "), r += t);
  return r;
}
const $e = "-", Dt = (e) => {
  const t = Bt(e), {
    conflictingClassGroups: o,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      const a = i.split($e);
      return a[0] === "" && a.length !== 1 && a.shift(), Xe(a, t) || Vt(i);
    },
    getConflictingClassGroupIds: (i, a) => {
      const c = o[i] || [];
      return a && r[i] ? [...c, ...r[i]] : c;
    }
  };
}, Xe = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const o = e[0], r = t.nextPart.get(o), n = r ? Xe(e.slice(1), r) : void 0;
  if (n)
    return n;
  if (t.validators.length === 0)
    return;
  const s = e.join($e);
  return (i = t.validators.find(({
    validator: a
  }) => a(s))) == null ? void 0 : i.classGroupId;
}, Fe = /^\[(.+)\]$/, Vt = (e) => {
  if (Fe.test(e)) {
    const t = Fe.exec(e)[1], o = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (o)
      return "arbitrary.." + o;
  }
}, Bt = (e) => {
  const {
    theme: t,
    classGroups: o
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const n in o)
    De(o[n], r, n, t);
  return r;
}, De = (e, t, o, r) => {
  e.forEach((n) => {
    if (typeof n == "string") {
      const s = n === "" ? t : qe(t, n);
      s.classGroupId = o;
      return;
    }
    if (typeof n == "function") {
      if ($t(n)) {
        De(n(r), t, o, r);
        return;
      }
      t.validators.push({
        validator: n,
        classGroupId: o
      });
      return;
    }
    Object.entries(n).forEach(([s, i]) => {
      De(i, qe(t, s), o, r);
    });
  });
}, qe = (e, t) => {
  let o = e;
  return t.split($e).forEach((r) => {
    o.nextPart.has(r) || o.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), o = o.nextPart.get(r);
  }), o;
}, $t = (e) => e.isThemeGetter, Gt = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, o = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const n = (s, i) => {
    o.set(s, i), t++, t > e && (t = 0, r = o, o = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let i = o.get(s);
      if (i !== void 0)
        return i;
      if ((i = r.get(s)) !== void 0)
        return n(s, i), i;
    },
    set(s, i) {
      o.has(s) ? o.set(s, i) : n(s, i);
    }
  };
}, Ve = "!", Be = ":", Wt = Be.length, Ut = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: o
  } = e;
  let r = (n) => {
    const s = [];
    let i = 0, a = 0, c = 0, m;
    for (let l = 0; l < n.length; l++) {
      let v = n[l];
      if (i === 0 && a === 0) {
        if (v === Be) {
          s.push(n.slice(c, l)), c = l + Wt;
          continue;
        }
        if (v === "/") {
          m = l;
          continue;
        }
      }
      v === "[" ? i++ : v === "]" ? i-- : v === "(" ? a++ : v === ")" && a--;
    }
    const y = s.length === 0 ? n : n.substring(c), k = Kt(y), p = k !== y, x = m && m > c ? m - c : void 0;
    return {
      modifiers: s,
      hasImportantModifier: p,
      baseClassName: k,
      maybePostfixModifierPosition: x
    };
  };
  if (t) {
    const n = t + Be, s = r;
    r = (i) => i.startsWith(n) ? s(i.substring(n.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: i,
      maybePostfixModifierPosition: void 0
    };
  }
  if (o) {
    const n = r;
    r = (s) => o({
      className: s,
      parseClassName: n
    });
  }
  return r;
}, Kt = (e) => e.endsWith(Ve) ? e.substring(0, e.length - 1) : e.startsWith(Ve) ? e.substring(1) : e, Ht = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((r) => [r, !0]));
  return (r) => {
    if (r.length <= 1)
      return r;
    const n = [];
    let s = [];
    return r.forEach((i) => {
      i[0] === "[" || t[i] ? (n.push(...s.sort(), i), s = []) : s.push(i);
    }), n.push(...s.sort()), n;
  };
}, Ft = (e) => ({
  cache: Gt(e.cacheSize),
  parseClassName: Ut(e),
  sortModifiers: Ht(e),
  ...Dt(e)
}), qt = /\s+/, Yt = (e, t) => {
  const {
    parseClassName: o,
    getClassGroupId: r,
    getConflictingClassGroupIds: n,
    sortModifiers: s
  } = t, i = [], a = e.trim().split(qt);
  let c = "";
  for (let m = a.length - 1; m >= 0; m -= 1) {
    const y = a[m], {
      isExternal: k,
      modifiers: p,
      hasImportantModifier: x,
      baseClassName: l,
      maybePostfixModifierPosition: v
    } = o(y);
    if (k) {
      c = y + (c.length > 0 ? " " + c : c);
      continue;
    }
    let d = !!v, h = r(d ? l.substring(0, v) : l);
    if (!h) {
      if (!d) {
        c = y + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (h = r(l), !h) {
        c = y + (c.length > 0 ? " " + c : c);
        continue;
      }
      d = !1;
    }
    const C = s(p).join(":"), u = x ? C + Ve : C, b = u + h;
    if (i.includes(b))
      continue;
    i.push(b);
    const S = n(h, d);
    for (let A = 0; A < S.length; ++A) {
      const N = S[A];
      i.push(u + N);
    }
    c = y + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function Jt() {
  let e = 0, t, o, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (o = Qe(t)) && (r && (r += " "), r += o);
  return r;
}
const Qe = (e) => {
  if (typeof e == "string")
    return e;
  let t, o = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Qe(e[r])) && (o && (o += " "), o += t);
  return o;
};
function Zt(e, ...t) {
  let o, r, n, s = i;
  function i(c) {
    const m = t.reduce((y, k) => k(y), e());
    return o = Ft(m), r = o.cache.get, n = o.cache.set, s = a, a(c);
  }
  function a(c) {
    const m = r(c);
    if (m)
      return m;
    const y = Yt(c, o);
    return n(c, y), y;
  }
  return function() {
    return s(Jt.apply(null, arguments));
  };
}
const F = (e) => {
  const t = (o) => o[e] || [];
  return t.isThemeGetter = !0, t;
}, et = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, tt = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Xt = /^\d+\/\d+$/, Qt = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, er = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, tr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, rr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, or = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, fe = (e) => Xt.test(e), _ = (e) => !!e && !Number.isNaN(Number(e)), le = (e) => !!e && Number.isInteger(Number(e)), Ne = (e) => e.endsWith("%") && _(e.slice(0, -1)), ie = (e) => Qt.test(e), nr = () => !0, sr = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  er.test(e) && !tr.test(e)
), rt = () => !1, ir = (e) => rr.test(e), ar = (e) => or.test(e), lr = (e) => !T(e) && !E(e), cr = (e) => ge(e, st, rt), T = (e) => et.test(e), de = (e) => ge(e, it, sr), _e = (e) => ge(e, mr, _), Ye = (e) => ge(e, ot, rt), dr = (e) => ge(e, nt, ar), Ae = (e) => ge(e, at, ir), E = (e) => tt.test(e), Te = (e) => ye(e, it), ur = (e) => ye(e, hr), Je = (e) => ye(e, ot), fr = (e) => ye(e, st), pr = (e) => ye(e, nt), Ie = (e) => ye(e, at, !0), ge = (e, t, o) => {
  const r = et.exec(e);
  return r ? r[1] ? t(r[1]) : o(r[2]) : !1;
}, ye = (e, t, o = !1) => {
  const r = tt.exec(e);
  return r ? r[1] ? t(r[1]) : o : !1;
}, ot = (e) => e === "position" || e === "percentage", nt = (e) => e === "image" || e === "url", st = (e) => e === "length" || e === "size" || e === "bg-size", it = (e) => e === "length", mr = (e) => e === "number", hr = (e) => e === "family-name", at = (e) => e === "shadow", br = () => {
  const e = F("color"), t = F("font"), o = F("text"), r = F("font-weight"), n = F("tracking"), s = F("leading"), i = F("breakpoint"), a = F("container"), c = F("spacing"), m = F("radius"), y = F("shadow"), k = F("inset-shadow"), p = F("text-shadow"), x = F("drop-shadow"), l = F("blur"), v = F("perspective"), d = F("aspect"), h = F("ease"), C = F("animate"), u = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], b = () => [
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
  ], S = () => [...b(), E, T], A = () => ["auto", "hidden", "clip", "visible", "scroll"], N = () => ["auto", "contain", "none"], w = () => [E, T, c], L = () => [fe, "full", "auto", ...w()], O = () => [le, "none", "subgrid", E, T], M = () => ["auto", {
    span: ["full", le, E, T]
  }, le, E, T], z = () => [le, "auto", E, T], I = () => ["auto", "min", "max", "fr", E, T], P = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], B = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], W = () => ["auto", ...w()], Y = () => [fe, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...w()], j = () => [e, E, T], ne = () => [...b(), Je, Ye, {
    position: [E, T]
  }], g = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], R = () => ["auto", "cover", "contain", fr, cr, {
    size: [E, T]
  }], $ = () => [Ne, Te, de], D = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    m,
    E,
    T
  ], U = () => ["", _, Te, de], J = () => ["solid", "dashed", "dotted", "double"], ue = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], K = () => [_, Ne, Je, Ye], H = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    l,
    E,
    T
  ], te = () => ["none", _, E, T], ae = () => ["none", _, E, T], ke = () => [_, E, T], Ce = () => [fe, "full", ...w()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [ie],
      breakpoint: [ie],
      color: [nr],
      container: [ie],
      "drop-shadow": [ie],
      ease: ["in", "out", "in-out"],
      font: [lr],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [ie],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [ie],
      shadow: [ie],
      spacing: ["px", _],
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
        aspect: ["auto", "square", fe, T, E, d]
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
        columns: [_, T, E, a]
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
        object: S()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: A()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": A()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": A()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: N()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": N()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": N()
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
        inset: L()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": L()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": L()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: L()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: L()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: L()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: L()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: L()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: L()
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
        z: [le, "auto", E, T]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [fe, "full", "auto", a, ...w()]
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
        flex: [_, fe, "auto", "initial", "none", T]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", _, E, T]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", _, E, T]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [le, "first", "last", "none", E, T]
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
        col: M()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": z()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": z()
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
        row: M()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": z()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": z()
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
        "auto-cols": I()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": I()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: w()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": w()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": w()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...P(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...B(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...B()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...P()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...B(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...B(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": P()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...B(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...B()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: w()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: w()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: w()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: w()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: w()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: w()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: w()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: w()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: w()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: W()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: W()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: W()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: W()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: W()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: W()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: W()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: W()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: W()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": w()
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
        "space-y": w()
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
        size: Y()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [a, "screen", ...Y()]
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
          ...Y()
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
          ...Y()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...Y()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...Y()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...Y()]
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
        font: [r, E, _e]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ne, T]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ur, T, t]
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
        tracking: [n, E, T]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [_, "none", E, _e]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...w()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", E, T]
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
        list: ["disc", "decimal", "none", E, T]
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
        decoration: [...J(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [_, "from-font", "auto", E, de]
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
        "underline-offset": [_, "auto", E, T]
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
        indent: w()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", E, T]
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
        content: ["none", E, T]
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
        bg: g()
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
          }, le, E, T],
          radial: ["", E, T],
          conic: [le, E, T]
        }, pr, dr]
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
        rounded: D()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": D()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": D()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": D()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": D()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": D()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": D()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": D()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": D()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": D()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": D()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": D()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": D()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": D()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": D()
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
        border: [...J(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...J(), "hidden", "none"]
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
        outline: [...J(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [_, E, T]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", _, Te, de]
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
          y,
          Ie,
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
        "inset-shadow": ["none", k, Ie, Ae]
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
        "ring-offset": [_, de]
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
        "text-shadow": ["none", p, Ie, Ae]
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
        opacity: [_, E, T]
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
        "mask-linear": [_]
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
        "mask-radial": [E, T]
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
        "mask-radial-at": b()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [_]
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
        mask: g()
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
        mask: ["none", E, T]
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
          E,
          T
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
        brightness: [_, E, T]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [_, E, T]
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
          x,
          Ie,
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
        grayscale: ["", _, E, T]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [_, E, T]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", _, E, T]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [_, E, T]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", _, E, T]
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
          E,
          T
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
        "backdrop-brightness": [_, E, T]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [_, E, T]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", _, E, T]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [_, E, T]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", _, E, T]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [_, E, T]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [_, E, T]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", _, E, T]
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
        "border-spacing": w()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": w()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": w()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", E, T]
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
        duration: [_, "initial", E, T]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", h, E, T]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [_, E, T]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", C, E, T]
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
        perspective: [v, E, T]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": S()
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
        transform: [E, T, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: S()
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
        translate: Ce()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Ce()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Ce()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Ce()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", E, T]
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
        "scroll-m": w()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": w()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": w()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": w()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": w()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": w()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": w()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": w()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": w()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": w()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": w()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": w()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": w()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": w()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": w()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": w()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": w()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": w()
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
        "will-change": ["auto", "scroll", "contents", "transform", E, T]
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
        stroke: [_, Te, de, _e]
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
}, lt = /* @__PURE__ */ Zt(br);
function Q(...e) {
  return lt(X(e));
}
const gr = {
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
function ct(e = gr) {
  const [t, o] = q(() => typeof window > "u" ? { width: 1024, height: 768, orientation: "landscape" } : {
    width: window.innerWidth,
    height: window.innerHeight,
    orientation: window.innerWidth > window.innerHeight ? "landscape" : "portrait"
  }), [r, n] = q(null), s = V(() => {
    if (typeof window > "u") return;
    const l = {
      width: window.innerWidth,
      height: window.innerHeight,
      orientation: window.innerWidth > window.innerHeight ? "landscape" : "portrait"
    };
    o(l);
  }, []), i = oe(() => {
    var v;
    if (r && e[r])
      return r;
    const l = Object.entries(e).filter(([d, h]) => {
      if (h.matcher)
        return h.matcher(t);
      const C = !h.minWidth || t.width >= h.minWidth, u = !h.maxWidth || t.width <= h.maxWidth;
      return C && u;
    });
    return l.sort(([, d], [, h]) => {
      const C = (d.minWidth ? 1 : 0) + (d.maxWidth ? 1 : 0);
      return (h.minWidth ? 1 : 0) + (h.maxWidth ? 1 : 0) - C;
    }), ((v = l[0]) == null ? void 0 : v[0]) || Object.keys(e)[0] || "desktop";
  }, [t, e, r]), a = oe(() => e[i], [e, i]), c = oe(() => (a == null ? void 0 : a.type) || "grid", [a]), m = V((l) => {
    if (l && !e[l]) {
      console.warn(`Mode "${l}" not found in configuration`);
      return;
    }
    n(l);
  }, [e]), y = V((l) => i === l, [i]), k = oe(() => Object.keys(e), [e]), p = V((l) => {
    switch (c) {
      case "grid":
        return ["resizing", "dividers", "collapse"].includes(l);
      case "tabs":
        return l === "tabs";
      case "dock":
        return l === "dock";
      default:
        return !1;
    }
  }, [c]), x = oe(() => {
    const l = Object.entries(e).map(([C, u]) => ({ name: C, ...u })).sort((C, u) => (C.breakpoint || 0) - (u.breakpoint || 0)), v = l.findIndex((C) => C.name === i), d = l[v + 1], h = l[v - 1];
    return {
      current: i,
      currentBreakpoint: (a == null ? void 0 : a.breakpoint) || 0,
      nextMode: d == null ? void 0 : d.name,
      nextBreakpoint: d == null ? void 0 : d.breakpoint,
      prevMode: h == null ? void 0 : h.name,
      prevBreakpoint: h == null ? void 0 : h.breakpoint,
      isSmallest: v === 0,
      isLargest: v === l.length - 1
    };
  }, [e, i, a]);
  return G(() => {
    if (typeof window > "u") return;
    const l = () => s(), v = () => {
      setTimeout(s, 100);
    };
    return window.addEventListener("resize", l), window.addEventListener("orientationchange", v), () => {
      window.removeEventListener("resize", l), window.removeEventListener("orientationchange", v);
    };
  }, [s]), {
    // Current state
    viewport: t,
    activeMode: i,
    currentModeConfig: a,
    currentLayoutType: c,
    // Mode management
    setMode: m,
    isMode: y,
    availableModes: k,
    // Features and capabilities
    supportsFeature: p,
    breakpointInfo: x,
    // Utilities
    isForced: !!r,
    updateViewport: s
  };
}
const se = "pretty-poly-grid-", be = {
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
}, dt = {
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
}, me = /* @__PURE__ */ new Map(), je = {
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
function Pe(e) {
  switch (e) {
    case "localStorage":
      return typeof localStorage < "u" ? be : je;
    case "sessionStorage":
      return typeof sessionStorage < "u" ? dt : je;
    case "memory":
    default:
      return je;
  }
}
function Ge(e) {
  return `${se}${e}`;
}
function yr(e, t, o = be) {
  const r = Ge(e), n = {
    blocks: t.blocks,
    activeMode: t.activeMode
    // Don't persist viewport or transient state like activeDivider
  };
  o.save(r, n);
}
function vr(e, t = be) {
  const o = Ge(e);
  return t.load(o);
}
function wr(e, t = be) {
  const o = Ge(e);
  t.remove(o);
}
function Kr(e = be) {
  const t = {};
  try {
    if (e === be && typeof localStorage < "u")
      for (let o = 0; o < localStorage.length; o++) {
        const r = localStorage.key(o);
        if (r && r.startsWith(se)) {
          const n = r.substring(se.length), s = e.load(r);
          s && (t[n] = s);
        }
      }
    else if (e === dt && typeof sessionStorage < "u")
      for (let o = 0; o < sessionStorage.length; o++) {
        const r = sessionStorage.key(o);
        if (r && r.startsWith(se)) {
          const n = r.substring(se.length), s = e.load(r);
          s && (t[n] = s);
        }
      }
    else if (e === je) {
      for (const o of me.keys())
        if (o.startsWith(se)) {
          const r = o.substring(se.length), n = e.load(o);
          n && (t[r] = n);
        }
    }
  } catch (o) {
    console.warn("Failed to get all grid states:", o);
  }
  return t;
}
function xr(e) {
  return {
    save: (t, o) => e(o),
    load: () => null,
    // Custom adapters typically don't load
    remove: () => {
    },
    clear: () => {
    }
  };
}
function kr({
  gridId: e,
  enabled: t,
  state: o,
  onStateLoad: r,
  autoSave: n = !0,
  saveDelay: s = 500
}) {
  const i = ce(null), a = ce(void 0), c = ce(""), m = ce(!1);
  G(() => {
    if (!t) {
      i.current = null;
      return;
    }
    typeof t == "function" ? i.current = xr(t) : t === "localStorage" ? i.current = Pe("localStorage") : t === "sessionStorage" ? i.current = Pe("sessionStorage") : i.current = Pe("localStorage");
  }, [t]), G(() => {
    if (!i.current || !t || typeof t == "function" || m.current)
      return;
    const l = vr(e, i.current);
    l && (r == null || r(l), m.current = !0);
  }, [e, t]);
  const y = V(
    (l = o) => {
      if (!i.current || !t)
        return;
      const v = JSON.stringify(l);
      if (v !== c.current)
        try {
          yr(e, l, i.current), c.current = v;
        } catch (d) {
          console.warn("Failed to save grid state:", d);
        }
    },
    [e, t, o]
  ), k = V(
    (l = o) => {
      a.current && clearTimeout(a.current), a.current = setTimeout(() => {
        y(l);
      }, s);
    },
    [y, s, o]
  ), p = V(() => {
    if (!(!i.current || !t || typeof t == "function"))
      try {
        wr(e, i.current), c.current = "";
      } catch (l) {
        console.warn("Failed to clear grid state:", l);
      }
  }, [e, t]), x = V(
    (l = o) => {
      a.current && clearTimeout(a.current), y(l);
    },
    [y, o]
  );
  return G(() => {
    if (!(!n || !t))
      return k(o), () => {
        a.current && clearTimeout(a.current);
      };
  }, [o, n, t, k]), G(() => {
    if (!t || typeof t == "function")
      return;
    const l = () => {
      x();
    };
    return window.addEventListener("beforeunload", l), () => {
      window.removeEventListener("beforeunload", l);
    };
  }, [x, t]), G(() => () => {
    a.current && clearTimeout(a.current);
  }, []), {
    saveState: x,
    debouncedSave: k,
    clearState: p,
    isEnabled: !!t
  };
}
function ut(e, t, o) {
  return Math.max(0, e - t - o);
}
function Hr(e, t) {
  return t > 0 ? e / t : 0;
}
function he(e, t, o) {
  return Math.min(Math.max(e, t), o);
}
function Fr(e, t) {
  return t > 0 && e <= t;
}
function Sr(e, t, o, r, n) {
  if (o === 0)
    return e;
  const s = t <= o, i = r * 2.5;
  return s && e > i ? n : e < o && !s ? r : e;
}
function zr(e, t, o = 0, r = 1 / 0, n = !1) {
  const s = n ? -e : e, i = t + s;
  return he(i, o, r);
}
function Tr(e, t, o) {
  const r = [];
  return (o ? e.filter((s) => !o.has(s.id)) : e).forEach((s) => {
    if (s.sizeUnit === "auto")
      r.push("auto");
    else if (s.sizeUnit === "px") {
      const i = t ? `--${t}-${s.id}-size` : `--${s.id}-size`;
      r.push(`var(${i}, ${s.size}px)`);
    } else {
      const i = t ? `--${t}-${s.id}-size` : `--${s.id}-size`;
      r.push(`var(${i}, ${s.size}fr)`);
    }
  }), r.join(" ");
}
function qr(e, t) {
  return e * t;
}
function Er(e, t) {
  return t > 0 ? e / t : 0;
}
function Yr(e, t, o) {
  return o === "start" ? e > 0 ? t[e - 1] : null : e < t.length - 1 ? t[e + 1] : null;
}
function Jr(e, t, o = 1e-3) {
  return Math.abs(e + t) <= o;
}
function Cr(e, t) {
  const o = V((i) => "touches" in i ? {
    x: i.touches[0].clientX,
    y: i.touches[0].clientY
  } : {
    x: i.clientX,
    y: i.clientY
  }, []), r = V((i, a, c) => {
    const m = e.blocks[i];
    if (!m) return;
    if (m.resizable === !1) {
      console.warn(`Cannot resize block "${i}" - block is marked as non-resizable.`);
      return;
    }
    const y = o(c), k = document.querySelector(`[data-divider-id="${a}"]`), p = (k == null ? void 0 : k.getAttribute("data-divider-position")) || "end", l = Object.values(e.blocks).filter(
      (u) => u.parentId === m.parentId
    ).sort(
      (u, b) => (u.order || 0) - (b.order || 0)
    ), v = l.findIndex((u) => u.id === i);
    let d = null;
    if (p === "start" && v > 0 ? d = l[v - 1] : p === "end" && v < l.length - 1 && (d = l[v + 1]), d && d.resizable === !1) {
      console.warn(
        `Cannot resize block "${i}" - adjacent block "${d.id}" is marked as non-resizable.`
      );
      return;
    }
    if (d && m.sizeUnit === "fr" && d.sizeUnit === "px") {
      console.warn(
        `Cannot resize fr block "${i}" when adjacent to px block "${d.id}". Fr blocks fill available space and should not be directly resized. Consider resizing the px block instead.`
      );
      return;
    }
    t({
      type: "START_RESIZE",
      payload: {
        blockId: i,
        dividerId: a,
        startPosition: y,
        initialSize: m.defaultSize || 0,
        initialAdjacentBlockId: d == null ? void 0 : d.id,
        initialAdjacentSize: d ? d.originalDefaultSize || d.defaultSize || 0 : void 0
      }
    }), document.body.style.userSelect = "none";
    const h = m.parentId ? e.blocks[m.parentId] : null, C = (h == null ? void 0 : h.direction) || "row";
    document.body.style.cursor = C === "row" ? "col-resize" : "row-resize";
  }, [e.blocks, t, o]), n = V((i) => {
    if (!e.resize.isDragging || !e.resize.activeBlockId) return;
    const a = e.blocks[e.resize.activeBlockId];
    if (!a) return;
    const c = o(i), m = a.parentId ? e.blocks[a.parentId] : null, y = (m == null ? void 0 : m.direction) || "row", k = y === "row" ? c.x - e.resize.startPosition.x : c.y - e.resize.startPosition.y;
    if (a.sizeUnit === "px") {
      const p = document.querySelector(`[data-divider-id="${e.resize.activeDividerId}"]`), l = ((p == null ? void 0 : p.getAttribute("data-divider-position")) || "end") === "start", v = zr(
        k,
        e.resize.initialSize,
        a.minSize,
        a.maxSize,
        l
      );
      t({
        type: "RESIZE_BLOCK",
        payload: { blockId: e.resize.activeBlockId, size: v }
      });
    } else if (a.sizeUnit === "fr") {
      const p = Object.values(e.blocks).filter(
        (I) => I.parentId === a.parentId
      ), x = p.filter((I) => I.sizeUnit === "fr"), l = a.parentId ? document.querySelector(`[data-block-id="${a.parentId}"]`) : document.querySelector('[data-block-id="root"]'), v = l ? y === "row" ? l.clientWidth : l.clientHeight : 1200, d = p.filter((I) => I.sizeUnit === "px").reduce((I, P) => {
        const B = document.querySelector(`[data-block-id="${P.id}"]`);
        if (!B) return I;
        const W = y === "row" ? B.clientWidth : B.clientHeight;
        return I + W;
      }, 0), C = Array.from(
        (l == null ? void 0 : l.querySelectorAll('[data-block-type="divider"]')) || []
      ).reduce((I, P) => {
        if (!(P instanceof HTMLElement)) return I;
        const B = y === "row" ? P.clientWidth : P.clientHeight;
        return I + B;
      }, 0), b = ut(v, d, C), S = x.reduce(
        (I, P) => I + (P.defaultSize || 1),
        0
      ), A = S > 0 ? b / S : 0;
      if (A === 0) return;
      const N = Er(k, A), w = x.sort(
        (I, P) => (I.order || 0) - (P.order || 0)
      ), L = w.findIndex(
        (I) => I.id === e.resize.activeBlockId
      ), O = document.querySelector(`[data-divider-id="${e.resize.activeDividerId}"]`), M = (O == null ? void 0 : O.getAttribute("data-divider-position")) || "end";
      let z = null;
      if (M === "start" && L > 0 ? z = w[L - 1] : M === "end" && L < w.length - 1 && (z = w[L + 1]), z) {
        let I, P;
        I = N, P = -N;
        const B = 0.1, W = Math.max(
          B,
          e.resize.initialSize + I
        ), Y = Math.max(
          B,
          (e.resize.initialAdjacentSize || 1) + P
        ), j = W - e.resize.initialSize, ne = Y - (e.resize.initialAdjacentSize || 1);
        Math.abs(j + ne) < 0.01 && (t({
          type: "RESIZE_BLOCK",
          payload: {
            blockId: e.resize.activeBlockId,
            size: W
          }
        }), t({
          type: "RESIZE_BLOCK",
          payload: { blockId: z.id, size: Y }
        }));
      }
    }
  }, [e.resize, e.blocks, t, o]), s = V(() => {
    t({ type: "END_RESIZE" }), document.body.style.userSelect = "", document.body.style.cursor = "";
  }, [t]);
  return {
    startResize: r,
    updateResize: n,
    endResize: s
  };
}
function Ar(e, t) {
  var o;
  switch (t.type) {
    case "HIDE_BLOCK":
      return {
        ...e,
        hiddenBlocks: /* @__PURE__ */ new Set([...e.hiddenBlocks, t.payload.blockId])
      };
    case "SHOW_BLOCK": {
      const r = new Set(e.hiddenBlocks);
      return r.delete(t.payload.blockId), {
        ...e,
        hiddenBlocks: r
      };
    }
    case "TOGGLE_BLOCK_VISIBILITY": {
      const r = e.hiddenBlocks.has(t.payload.blockId), n = new Set(e.hiddenBlocks);
      return r ? n.delete(t.payload.blockId) : n.add(t.payload.blockId), {
        ...e,
        hiddenBlocks: n
      };
    }
    case "RESIZE_BLOCK": {
      const r = e.blocks[t.payload.blockId];
      return r ? {
        ...e,
        blocks: {
          ...e.blocks,
          [t.payload.blockId]: {
            ...r,
            defaultSize: t.payload.size,
            size: t.payload.size
          }
        }
      } : e;
    }
    case "COLLAPSE_BLOCK": {
      const r = e.blocks[t.payload.blockId];
      if (!r) return e;
      const n = r.collapseTo ?? 0, s = r.minSize ?? 0, i = Math.max(n, s);
      return {
        ...e,
        blocks: {
          ...e.blocks,
          [t.payload.blockId]: {
            ...r,
            // Preserve original size for expand
            originalDefaultSize: r.originalDefaultSize || r.defaultSize,
            defaultSize: i,
            size: i
          }
        }
      };
    }
    case "EXPAND_BLOCK": {
      const r = e.blocks[t.payload.blockId];
      if (!r) return e;
      const n = r.originalDefaultSize || r.defaultSize || 100;
      return {
        ...e,
        blocks: {
          ...e.blocks,
          [t.payload.blockId]: {
            ...r,
            defaultSize: n,
            size: n
          }
        }
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
        Object.entries(e.blocks).map(([n, s]) => [
          n,
          {
            ...s,
            size: s.defaultSize
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
      const { targetBlockId: r, direction: n, firstChildId: s, secondChildId: i, initialSize: a = 1 } = t.payload, c = e.blocks[r];
      if (!c)
        return console.warn(`Cannot split: block ${r} not found`), e;
      if (c.type !== "group")
        return console.warn(`Cannot split: block ${r} is not a group`), e;
      if (c.canSplit !== !0)
        return console.warn(`Cannot split: block ${r} does not have canSplit enabled`), e;
      const m = n === "horizontal" ? "column" : "row", y = t.payload.newViewType || c.defaultViewType;
      if (!c.direction) {
        const k = c.children || [], p = k[0], x = p ? e.blocks[p] : void 0, l = {
          ...c,
          direction: m,
          children: [s, i]
        }, v = {
          id: s,
          type: "block",
          parentId: r,
          order: 0,
          defaultSize: a,
          sizeUnit: "fr",
          viewType: x == null ? void 0 : x.viewType,
          viewState: x == null ? void 0 : x.viewState
        }, d = {
          id: i,
          type: "block",
          parentId: r,
          order: 1,
          defaultSize: a,
          sizeUnit: "fr",
          viewType: y
        }, h = { ...e.blocks };
        return k.forEach((C) => {
          delete h[C];
        }), {
          ...e,
          blocks: {
            ...h,
            [r]: l,
            [s]: v,
            [i]: d
          }
        };
      }
      if (c.direction) {
        if (c.direction !== m)
          return console.warn(`Cannot split group ${r}: direction mismatch (has ${c.direction}, requested ${m})`), e;
        const k = {
          ...c,
          children: [...c.children || [], i]
        }, p = {
          id: i,
          type: "block",
          parentId: r,
          order: ((o = c.children) == null ? void 0 : o.length) || 0,
          defaultSize: a,
          sizeUnit: "fr",
          viewType: y
        };
        return {
          ...e,
          blocks: {
            ...e.blocks,
            [r]: k,
            [i]: p
          }
        };
      }
      return e;
    }
    case "UNSPLIT_BLOCK": {
      const { blockId: r } = t.payload, n = e.blocks[r];
      if (!n || n.type !== "group" || !n.children)
        return e;
      const s = { ...e.blocks };
      n.children.forEach((a) => {
        delete s[a];
      });
      const i = {
        ...n,
        type: "block",
        children: void 0,
        viewType: void 0
        // User will need to set content
      };
      return s[r] = i, {
        ...e,
        blocks: s
      };
    }
    case "ADD_BLOCK": {
      const { parentId: r, block: n } = t.payload, s = e.blocks[r];
      if (!s) return e;
      const i = s.type === "group" && s.children ? {
        ...s,
        children: [...s.children, n.id]
      } : s;
      return {
        ...e,
        blocks: {
          ...e.blocks,
          [r]: i,
          [n.id]: n
        }
      };
    }
    case "REMOVE_BLOCK": {
      const { blockId: r } = t.payload, n = e.blocks[r];
      if (!n) return e;
      const s = { ...e.blocks };
      if (n.parentId) {
        const a = s[n.parentId];
        a && a.type === "group" && a.children && (s[n.parentId] = {
          ...a,
          children: a.children.filter((c) => c !== r)
        });
      }
      delete s[r];
      const i = new Set(e.hiddenBlocks);
      return i.delete(r), {
        ...e,
        blocks: s,
        hiddenBlocks: i
      };
    }
    case "SET_BLOCK_VIEW_TYPE": {
      const { blockId: r, viewType: n } = t.payload, s = e.blocks[r];
      return s ? {
        ...e,
        blocks: {
          ...e.blocks,
          [r]: {
            ...s,
            viewType: n
          }
        }
      } : e;
    }
    case "OPEN_TAB": {
      const { blockId: r, tab: n } = t.payload, s = e.blocks[r];
      if (!s) return e;
      const i = Date.now(), a = Math.random().toString(36).substring(2, 9), c = `tab-${i}-${a}`, m = { ...n, id: c }, y = s.tabState;
      if (!y)
        return {
          ...e,
          blocks: {
            ...e.blocks,
            [r]: {
              ...s,
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
      const k = [...y.tabs, m], p = [
        ...y.history.slice(0, y.historyIndex + 1),
        c
      ];
      return {
        ...e,
        blocks: {
          ...e.blocks,
          [r]: {
            ...s,
            tabState: {
              ...y,
              tabs: k,
              activeTabId: c,
              history: p,
              historyIndex: p.length - 1
            }
          }
        }
      };
    }
    case "CLOSE_TAB": {
      const { blockId: r, tabId: n } = t.payload, s = e.blocks[r];
      if (!(s != null && s.tabState)) return e;
      const { tabState: i } = s, a = i.tabs.findIndex((p) => p.id === n);
      if (a === -1) return e;
      const c = i.tabs.filter((p) => p.id !== n);
      if (c.length === 0)
        return {
          ...e,
          blocks: {
            ...e.blocks,
            [r]: {
              ...s,
              tabState: void 0
            }
          }
        };
      let m = i.activeTabId;
      if (n === i.activeTabId) {
        const p = a < c.length ? a : a - 1;
        m = c[p].id;
      }
      const y = i.history.filter((p) => p !== n);
      let k = i.historyIndex;
      return k >= y.length && (k = Math.max(0, y.length - 1)), {
        ...e,
        blocks: {
          ...e.blocks,
          [r]: {
            ...s,
            tabState: {
              ...i,
              tabs: c,
              activeTabId: m,
              history: y,
              historyIndex: k
            }
          }
        }
      };
    }
    case "SET_ACTIVE_TAB": {
      const { blockId: r, tabId: n } = t.payload, s = e.blocks[r];
      if (!(s != null && s.tabState)) return e;
      const { tabState: i } = s;
      if (!i.tabs.some((y) => y.id === n)) return e;
      let c = i.history, m = i.historyIndex;
      return n !== i.activeTabId && (c = [
        ...i.history.slice(0, i.historyIndex + 1),
        n
      ], m = c.length - 1), {
        ...e,
        blocks: {
          ...e.blocks,
          [r]: {
            ...s,
            tabState: {
              ...i,
              activeTabId: n,
              history: c,
              historyIndex: m
            }
          }
        }
      };
    }
    case "UPDATE_TAB": {
      const { blockId: r, tabId: n, updates: s } = t.payload, i = e.blocks[r];
      if (!(i != null && i.tabState)) return e;
      const { tabState: a } = i, c = a.tabs.findIndex((y) => y.id === n);
      if (c === -1) return e;
      const m = [...a.tabs];
      return m[c] = { ...m[c], ...s }, {
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
      const { blockId: r, fromIndex: n, toIndex: s } = t.payload, i = e.blocks[r];
      if (!(i != null && i.tabState)) return e;
      const { tabState: a } = i;
      if (n < 0 || n >= a.tabs.length || s < 0 || s >= a.tabs.length)
        return e;
      const c = [...a.tabs], [m] = c.splice(n, 1);
      return c.splice(s, 0, m), {
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
      const { blockId: r, direction: n } = t.payload, s = e.blocks[r];
      if (!(s != null && s.tabState)) return e;
      const { tabState: i } = s, a = n === "forward" ? Math.min(i.historyIndex + 1, i.history.length - 1) : Math.max(i.historyIndex - 1, 0);
      if (a === i.historyIndex) return e;
      const c = i.history[a];
      return {
        ...e,
        blocks: {
          ...e.blocks,
          [r]: {
            ...s,
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
      const { blockId: r, offset: n } = t.payload, s = e.blocks[r];
      return s != null && s.tabState ? {
        ...e,
        blocks: {
          ...e.blocks,
          [r]: {
            ...s,
            tabState: {
              ...s.tabState,
              scrollOffset: n
            }
          }
        }
      } : e;
    }
    default:
      return e;
  }
}
function Ir(e, t, o) {
  return {
    blocks: e.reduce((n, s) => (n[s.id] = {
      ...s,
      size: s.defaultSize,
      originalDefaultSize: s.defaultSize
      // Store original size for expand functionality
    }, n), {}),
    // Initialize hidden blocks from BlockConfig.isHidden property
    hiddenBlocks: new Set(
      e.filter((n) => n.isHidden).map((n) => n.id)
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
const ft = Re(null);
function jr({
  children: e,
  blocks: t,
  modes: o,
  gridId: r = "default",
  persist: n = !1,
  persistKey: s,
  onModeChange: i,
  onLayoutChange: a
}) {
  const { activeMode: c, viewport: m, setMode: y } = ct(o), [k, p] = Nt(
    Ar,
    Ir(t, m, c)
  );
  G(() => {
    p({
      type: "UPDATE_VIEWPORT",
      payload: { viewport: m }
    });
  }, [m]), G(() => {
    const u = k.activeMode;
    c !== u && (p({
      type: "SWITCH_MODE",
      payload: { mode: c }
    }), i == null || i(c, u));
  }, [c, k.activeMode, i]);
  const { saveState: x, clearState: l } = kr({
    gridId: s || r,
    enabled: n,
    state: k,
    onStateLoad: (u) => {
      p({ type: "LOAD_STATE", payload: { state: u } });
    },
    autoSave: !0
  }), { startResize: v, updateResize: d, endResize: h } = Cr(k, p), C = oe(
    () => ({
      gridId: r,
      state: {
        ...k,
        activeMode: c,
        viewport: m
      },
      dispatch: p,
      // Grid operations
      resizeBlock: (u, b) => {
        p({
          type: "RESIZE_BLOCK",
          payload: { blockId: u, size: b }
        });
      },
      collapseBlock: (u) => {
        p({
          type: "COLLAPSE_BLOCK",
          payload: { blockId: u }
        });
      },
      expandBlock: (u) => {
        p({
          type: "EXPAND_BLOCK",
          payload: { blockId: u }
        });
      },
      switchMode: (u) => {
        y(u);
      },
      // Block visibility operations
      hideBlock: (u) => {
        p({
          type: "HIDE_BLOCK",
          payload: { blockId: u }
        });
      },
      showBlock: (u) => {
        p({
          type: "SHOW_BLOCK",
          payload: { blockId: u }
        });
      },
      toggleBlockVisibility: (u) => {
        p({
          type: "TOGGLE_BLOCK_VISIBILITY",
          payload: { blockId: u }
        });
      },
      // Split operations (LayoutService primitives)
      splitBlock: (u, b, S = {}) => {
        const { initialSize: A = 1, viewType: N, position: w = "after" } = S, L = Date.now(), O = `${u}-${L}-1`, M = `${u}-${L}-2`;
        return p({
          type: "SPLIT_BLOCK",
          payload: {
            targetBlockId: u,
            direction: b,
            newBlockId: w === "before" ? O : M,
            firstChildId: O,
            secondChildId: M,
            initialSize: A,
            newViewType: N,
            position: w
          }
        }), w === "before" ? O : M;
      },
      unsplitBlock: (u) => {
        p({
          type: "UNSPLIT_BLOCK",
          payload: { blockId: u }
        });
      },
      canSplit: (u) => {
        var A;
        const b = k.blocks[u];
        if (!b || b.type !== "group" || b.canSplit !== !0) return !1;
        const S = ((A = b.splitConfig) == null ? void 0 : A.minSplitSize) || 200;
        return !(b.sizeUnit === "px" && (b.defaultSize || 0) < S * 2);
      },
      addBlock: (u, b) => {
        const S = b.id || `block-${Date.now()}`, A = {
          id: S,
          type: "block",
          parentId: u,
          defaultSize: 1,
          sizeUnit: "fr",
          ...b
        };
        return p({
          type: "ADD_BLOCK",
          payload: { parentId: u, block: A }
        }), S;
      },
      removeBlock: (u) => {
        p({
          type: "REMOVE_BLOCK",
          payload: { blockId: u }
        });
      },
      // View type operations (future ViewRegistry support)
      setBlockViewType: (u, b) => {
        p({
          type: "SET_BLOCK_VIEW_TYPE",
          payload: { blockId: u, viewType: b }
        });
      },
      getBlockViewType: (u) => {
        var b;
        return (b = k.blocks[u]) == null ? void 0 : b.viewType;
      },
      // Tab operations
      openTab: (u, b) => {
        const S = Date.now(), A = Math.random().toString(36).substring(2, 9), N = `tab-${S}-${A}`;
        return p({
          type: "OPEN_TAB",
          payload: { blockId: u, tab: b }
        }), N;
      },
      closeTab: (u, b) => {
        p({
          type: "CLOSE_TAB",
          payload: { blockId: u, tabId: b }
        });
      },
      setActiveTab: (u, b) => {
        p({
          type: "SET_ACTIVE_TAB",
          payload: { blockId: u, tabId: b }
        });
      },
      updateTab: (u, b, S) => {
        p({
          type: "UPDATE_TAB",
          payload: { blockId: u, tabId: b, updates: S }
        });
      },
      reorderTabs: (u, b, S) => {
        p({
          type: "REORDER_TABS",
          payload: { blockId: u, fromIndex: b, toIndex: S }
        });
      },
      navigateTabHistory: (u, b) => {
        p({
          type: "NAVIGATE_TAB_HISTORY",
          payload: { blockId: u, direction: b }
        });
      },
      getTabState: (u) => {
        var b;
        return (b = k.blocks[u]) == null ? void 0 : b.tabState;
      },
      // Resize operations (using extracted hook)
      startResize: v,
      updateResize: d,
      endResize: h,
      // Persistence
      persistState: () => x(k),
      resetState: () => {
        p({ type: "RESET_STATE" }), l();
      }
    }),
    [r, k, c, m, x, l, y, v, d, h]
  );
  return G(() => {
    if (a) {
      const u = Object.values(k.blocks);
      a(u);
    }
  }, [k.blocks, a]), /* @__PURE__ */ f.jsx(ft.Provider, { value: C, children: e });
}
function ee() {
  const e = Le(ft);
  if (!e)
    throw new Error("useGridContext must be used within a GridProvider");
  return e;
}
function Ee() {
  const { state: e } = ee();
  return e;
}
function Rr() {
  const {
    resizeBlock: e,
    collapseBlock: t,
    expandBlock: o,
    hideBlock: r,
    showBlock: n,
    toggleBlockVisibility: s,
    switchMode: i,
    persistState: a,
    resetState: c
  } = ee();
  return {
    resizeBlock: e,
    collapseBlock: t,
    expandBlock: o,
    hideBlock: r,
    showBlock: n,
    toggleBlockVisibility: s,
    switchMode: i,
    persistState: a,
    resetState: c
  };
}
function pt() {
  const { startResize: e, updateResize: t, endResize: o, state: r } = ee();
  return {
    startResize: e,
    updateResize: t,
    endResize: o,
    isDragging: r.resize.isDragging,
    activeBlockId: r.resize.activeBlockId,
    activeDividerId: r.resize.activeDividerId
  };
}
function Zr(e) {
  const { state: t } = ee();
  return t.hiddenBlocks.has(e);
}
function Xr() {
  const { hideBlock: e } = ee();
  return e;
}
function Qr() {
  const { showBlock: e } = ee();
  return e;
}
function eo() {
  const { toggleBlockVisibility: e } = ee();
  return e;
}
function Lr({
  blocks: e,
  containerRef: t,
  onSizeChange: o,
  direction: r = "row"
}) {
  const {
    startResize: n,
    updateResize: s,
    endResize: i,
    isDragging: a,
    activeBlockId: c,
    activeDividerId: m
  } = pt(), y = V(() => {
    if (!t.current) return 0;
    const d = t.current.getBoundingClientRect();
    return r === "column" ? d.width : d.height;
  }, [r, t]), k = V(() => {
    const d = y();
    if (d === 0) return 0;
    const h = e.filter((S) => S.sizeUnit === "px").reduce((S, A) => S + (A.defaultSize || 0), 0), C = 0, u = e.filter((S) => S.sizeUnit === "fr").reduce((S, A) => S + (A.defaultSize || 1), 0), b = ut(d, h, C);
    return u > 0 ? b / u : 0;
  }, [e, y]), p = V((d) => {
    const h = e.find((C) => C.id === d);
    h && h.defaultSize !== void 0 && (o == null || o(d, h.defaultSize));
  }, [e, o]), x = V((d) => {
    const h = e.find((C) => C.id === d);
    h && h.collapseTo !== void 0 && (o == null || o(d, h.collapseTo));
  }, [e, o]), l = V((d) => {
    const h = e.find((C) => C.id === d);
    h && h.defaultSize !== void 0 && (o == null || o(d, h.defaultSize));
  }, [e, o]), v = V((d) => {
    const h = e.find((C) => C.id === d);
    return !h || !h.collapseAt ? !1 : (h.defaultSize || 0) <= h.collapseAt;
  }, [e]);
  return G(() => {
    const d = (b) => {
      b.preventDefault(), s(b);
    }, h = (b) => {
      b.preventDefault(), s(b);
    }, C = () => {
      i();
    }, u = () => {
      i();
    };
    if (a)
      return document.addEventListener("mousemove", d), document.addEventListener("mouseup", C), document.addEventListener("touchmove", h), document.addEventListener("touchend", u), () => {
        document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", C), document.removeEventListener("touchmove", h), document.removeEventListener("touchend", u);
      };
  }, [a, s, i]), {
    // State
    isDragging: a,
    activeBlockId: c,
    activeDividerId: m,
    // Actions
    startResize: n,
    resetBlock: p,
    collapseBlock: x,
    expandBlock: l,
    // Utilities
    isBlockCollapsed: v,
    getContainerSize: y,
    calculatePixelsPerFr: k
  };
}
function Nr({
  enabled: e = !0,
  blocks: t,
  onResizeBlock: o,
  onFocusBlock: r,
  onCollapseBlock: n,
  onExpandBlock: s,
  onSplitBlock: i,
  containerRef: a,
  stepSize: c = 10,
  largeStepSize: m = 50
}) {
  const y = V(() => {
    const d = document.activeElement;
    return (d == null ? void 0 : d.dataset.blockType) === "block" || (d == null ? void 0 : d.dataset.blockType) === "group" ? d : (d == null ? void 0 : d.closest('[data-block-type="block"], [data-block-type="group"]')) || null;
  }, []), k = V((d) => {
    if (!d) return null;
    const h = d.dataset.blockId;
    return t.find((C) => C.id === h) || null;
  }, [t]), p = V((d, h) => {
    if (!(a != null && a.current)) return null;
    const C = Array.from(
      a.current.querySelectorAll('[data-block-type="block"], [data-block-type="group"]')
    ), u = d.getBoundingClientRect(), b = {
      x: u.left + u.width / 2,
      y: u.top + u.height / 2
    }, S = C.filter((A) => {
      if (A === d) return !1;
      const N = A.getBoundingClientRect(), w = {
        x: N.left + N.width / 2,
        y: N.top + N.height / 2
      };
      switch (h) {
        case "up":
          return w.y < b.y;
        case "down":
          return w.y > b.y;
        case "left":
          return w.x < b.x;
        case "right":
          return w.x > b.x;
        default:
          return !1;
      }
    });
    return S.length === 0 ? null : (S.sort((A, N) => {
      const w = A.getBoundingClientRect(), L = N.getBoundingClientRect(), O = {
        x: w.left + w.width / 2,
        y: w.top + w.height / 2
      }, M = {
        x: L.left + L.width / 2,
        y: L.top + L.height / 2
      }, z = Math.sqrt(
        Math.pow(O.x - b.x, 2) + Math.pow(O.y - b.y, 2)
      ), I = Math.sqrt(
        Math.pow(M.x - b.x, 2) + Math.pow(M.y - b.y, 2)
      );
      return z - I;
    }), S[0]);
  }, [a]), x = V((d) => {
    if (!e) return;
    const h = document.activeElement;
    if (h && (h.tagName === "INPUT" || h.tagName === "TEXTAREA" || h.tagName === "SELECT" || h.isContentEditable)) return;
    const u = y();
    if (!u) return;
    const b = k(u);
    if (!b) return;
    const S = d.ctrlKey || d.metaKey, A = d.shiftKey, N = A ? m : c;
    if (!S && !A)
      switch (d.key) {
        case "ArrowUp": {
          d.preventDefault();
          const w = p(u, "up");
          w && (w.focus(), r == null || r(w.dataset.blockId || ""));
          break;
        }
        case "ArrowDown": {
          d.preventDefault();
          const w = p(u, "down");
          w && (w.focus(), r == null || r(w.dataset.blockId || ""));
          break;
        }
        case "ArrowLeft": {
          d.preventDefault();
          const w = p(u, "left");
          w && (w.focus(), r == null || r(w.dataset.blockId || ""));
          break;
        }
        case "ArrowRight": {
          d.preventDefault();
          const w = p(u, "right");
          w && (w.focus(), r == null || r(w.dataset.blockId || ""));
          break;
        }
        case "Enter":
        case " ":
          d.preventDefault(), b.collapsible && (s == null || s(b.id));
          break;
        case "Escape":
          d.preventDefault(), u.blur();
          break;
      }
    if (S && o)
      switch (d.key) {
        case "ArrowUp":
          d.preventDefault(), o(b.id, -N);
          break;
        case "ArrowDown":
          d.preventDefault(), o(b.id, N);
          break;
        case "ArrowLeft":
          d.preventDefault(), o(b.id, -N);
          break;
        case "ArrowRight":
          d.preventDefault(), o(b.id, N);
          break;
      }
    if (S)
      switch (d.key) {
        case "Minus":
        case "-":
          d.preventDefault(), n == null || n(b.id);
          break;
        case "Plus":
        case "+":
        case "=":
          d.preventDefault(), s == null || s(b.id);
          break;
        case "\\":
          d.preventDefault(), A ? i == null || i(b.id, "horizontal") : i == null || i(b.id, "vertical");
          break;
      }
  }, [
    e,
    y,
    k,
    p,
    o,
    r,
    n,
    s,
    i,
    c,
    m
  ]), l = V((d) => {
    if (!(a != null && a.current)) return;
    const h = a.current.querySelector(
      `[data-block-id="${d}"]`
    );
    h && (h.focus(), r == null || r(d));
  }, [a, r]), v = V(() => a != null && a.current ? Array.from(
    a.current.querySelectorAll(
      '[data-block-type="block"][tabindex], [data-block-type="group"][tabindex]'
    )
  ) : [], [a]);
  return G(() => {
    if (e)
      return document.addEventListener("keydown", x), () => {
        document.removeEventListener("keydown", x);
      };
  }, [x, e]), {
    focusBlock: l,
    getFocusableBlocks: v,
    getFocusedBlock: y,
    isEnabled: e
  };
}
const mt = ({
  targetId: e,
  position: t,
  direction: o,
  size: r = 4,
  // Default hover zone size (like VS Code)
  className: n,
  "aria-label": s
}) => {
  const i = ce(null), a = Ee(), { startResize: c, isDragging: m, activeDividerId: y } = pt(), [k, p] = q({
    left: 0,
    top: 0,
    width: 0,
    height: 0
  }), x = a.blocks[e], l = o === "vertical", v = `${e}-${t}-divider`, d = m && y === v, h = V(() => {
    const u = document.querySelector("[data-grid-id]"), b = document.querySelector(`[data-block-id="${e}"]`);
    if (!u || !b) return;
    const S = u.getBoundingClientRect(), A = b.getBoundingClientRect(), N = x == null ? void 0 : x.parentId, w = N ? document.querySelector(`[data-block-id="${N}"]`) : u;
    if (!w) return;
    const M = ((w.hasAttribute("data-has-toolbar") ? w.querySelector("[data-split-content]") : null) || w).getBoundingClientRect();
    if (l) {
      const z = t === "start" ? A.left - S.left : A.right - S.left;
      p({
        left: z - r / 2,
        // Center on edge
        top: M.top - S.top,
        // Position relative to constraint area
        width: r,
        height: M.height
        // Use constraint height (content area if toolbar present)
      });
    } else {
      const z = t === "start" ? A.top - S.top : A.bottom - S.top;
      p({
        left: M.left - S.left,
        // Position relative to constraint area
        top: z - r / 2,
        // Center on edge
        width: M.width,
        // Use constraint width (content area if toolbar present)
        height: r
      });
    }
  }, [e, t, l, r, x == null ? void 0 : x.parentId]);
  _t(() => {
    const u = document.querySelector("[data-grid-id]"), b = document.querySelector(`[data-block-id="${e}"]`);
    if (!u || !b) return;
    h();
    const S = new ResizeObserver(() => {
      h();
    });
    S.observe(u), S.observe(b);
    const A = x == null ? void 0 : x.parentId, N = A ? document.querySelector(`[data-block-id="${A}"]`) : null;
    if (N && (S.observe(N), N.hasAttribute("data-has-toolbar"))) {
      const L = N.querySelector("[data-split-content]");
      L && S.observe(L);
    }
    return () => {
      S.disconnect();
    };
  }, [e, h, x == null ? void 0 : x.parentId]), G(() => {
    h();
  }, [a.blocks, h]);
  const C = V((u) => {
    u.preventDefault(), c(e, v, u);
  }, [e, v, c]);
  return x ? /* @__PURE__ */ f.jsx(
    "div",
    {
      ref: i,
      className: Q(
        "pretty-poly-divider",
        "absolute",
        "bg-transparent",
        // Invisible by default
        "transition-colors duration-100",
        "hover:bg-[var(--divider-hover-color,rgba(59,130,246,0.5))]",
        d && "bg-[var(--divider-active-color,rgba(59,130,246,0.7))]",
        l ? "cursor-col-resize" : "cursor-row-resize",
        n
      ),
      style: {
        left: `${k.left}px`,
        top: `${k.top}px`,
        width: `${k.width}px`,
        height: `${k.height}px`,
        pointerEvents: "auto",
        // Re-enable pointer events (parent has pointer-events: none)
        zIndex: 10
      },
      "data-divider-id": v,
      "data-target-block": e,
      "data-divider-position": t,
      "data-divider-direction": o,
      role: "separator",
      "aria-label": s || `Resize ${e}`,
      "aria-valuenow": x == null ? void 0 : x.defaultSize,
      "aria-valuemin": x == null ? void 0 : x.minSize,
      "aria-valuemax": x == null ? void 0 : x.maxSize,
      tabIndex: 0,
      onMouseDown: C,
      onTouchStart: C
    }
  ) : null;
};
mt.displayName = "Divider";
function _r(e, t) {
  if (!t)
    return { targetId: e.id, position: "end" };
  const o = e.sizeUnit || "fr", r = t.sizeUnit || "fr";
  return o === "fr" && r === "px" ? { targetId: t.id, position: "start" } : o === "px" && r === "fr" ? { targetId: e.id, position: "end" } : { targetId: e.id, position: "end" };
}
function Pr(e) {
  const t = [];
  return Object.values(e).filter((r) => r.type === "group").forEach((r) => {
    const n = Object.values(e).filter((a) => a.parentId === r.id).sort((a, c) => (a.order || 0) - (c.order || 0));
    if (n.length === 0) return;
    const i = r.direction === "row" ? "vertical" : "horizontal";
    n.forEach((a, c) => {
      if (c === 0) return;
      const m = n[c - 1], y = m.resizable !== !1, k = a.resizable !== !1;
      if (!y && !k)
        return;
      const { targetId: p, position: x } = _r(m, a), l = e[p];
      l && l.resizable === !1 || t.push({
        id: `divider-${m.id}-${a.id}`,
        targetBlockId: p,
        position: x,
        direction: i
      });
    });
  }), t;
}
const Or = () => {
  const e = Ee(), t = oe(() => Pr(e.blocks), [e.blocks]);
  return t.length === 0 ? null : /* @__PURE__ */ f.jsx(
    "div",
    {
      className: "pretty-poly-divider-overlay",
      style: {
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 10
      },
      children: t.map((o) => /* @__PURE__ */ f.jsx(
        mt,
        {
          targetId: o.targetBlockId,
          position: o.position,
          direction: o.direction
        },
        o.id
      ))
    }
  );
}, ht = Z(({ children: e, className: t, "aria-label": o }, r) => {
  const n = ce(null), {
    state: s,
    resizeBlock: i,
    collapseBlock: a,
    expandBlock: c,
    switchMode: m,
    persistState: y,
    resetState: k
  } = ee(), p = s.resize.isDragging;
  Pt(
    r,
    () => ({
      resizeBlock: i,
      collapseBlock: a,
      expandBlock: c,
      switchMode: m,
      persistState: y,
      resetState: k,
      getState: () => s
    }),
    [
      i,
      a,
      c,
      m,
      y,
      k,
      s
    ]
  );
  const x = oe(() => Object.values(s.blocks).sort((b, S) => (b.order || 0) - (S.order || 0)), [s.blocks]), l = oe(() => x.find((u) => !u.parentId), [x]);
  Lr({
    blocks: x,
    containerRef: n,
    onSizeChange: i,
    direction: (l == null ? void 0 : l.direction) || "row"
  });
  const { splitBlock: v } = ee();
  Nr({
    enabled: !0,
    blocks: x,
    containerRef: n,
    onResizeBlock: (u, b) => {
      const S = s.blocks[u];
      if (S) {
        const A = S.defaultSize || 0, N = Math.max(0, A + b);
        i(u, N);
      }
    },
    onCollapseBlock: a,
    onExpandBlock: c,
    onSplitBlock: (u, b) => {
      v(u, b);
    }
  });
  const { gridStyles: d, cssVariables: h, modeStyles: C } = oe(() => {
    if (!l)
      return { gridStyles: "", cssVariables: "", modeStyles: "" };
    const u = x.reduce((L, O) => {
      if (O.id === l.id) return L;
      const M = O.parentId || l.id;
      return L[M] || (L[M] = []), L[M].push(O), L;
    }, {}), b = x.filter((L) => L.defaultSize !== void 0).map((L) => {
      const O = L.sizeUnit === "px" ? `${L.defaultSize}px` : `${L.defaultSize}fr`;
      return `--${l.id}-${L.id}-size: ${O};`;
    }).join(`
  `), S = () => "", A = (L, O = /* @__PURE__ */ new Set()) => {
      if (O.has(L))
        return console.warn(`Circular reference detected for parent: ${L}`), "";
      const M = new Set(O);
      M.add(L);
      const z = u[L] || [];
      if (z.length === 0) return "";
      const I = [...z].sort(
        (R, $) => (R.order || 0) - ($.order || 0)
      ), P = x.find((R) => R.id === L) || l, B = P == null ? void 0 : P.direction, W = I.map((R) => ({
        id: R.id,
        sizeUnit: R.sizeUnit || "fr",
        size: R.defaultSize || 1,
        dividerPosition: "none",
        // Dividers are overlays, not in grid template
        dividerSize: 0
        // Not used since dividers are overlays
      })), Y = Tr(W, l.id, s.hiddenBlocks), ne = (P == null ? void 0 : P.hasToolbar) === !0 ? `[data-block-id="${L}"] > [data-split-content]` : `[data-block-id="${L}"]`;
      let g = "";
      B ? g = `
${ne} {
  display: grid;
  ${B === "column" ? "grid-template-rows" : "grid-template-columns"}: ${Y};
  ${B === "column" ? "grid-template-columns: 1fr;" : "grid-template-rows: 1fr;"}
}` : g = `
${ne} {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
}`;
      for (const R of I)
        R.type === "group" && (g += A(R.id, M));
      return g;
    }, N = A(l.id), w = S();
    return {
      cssVariables: `:root {
  ${b}
}`,
      gridStyles: N,
      modeStyles: w
    };
  }, [x, l, s.hiddenBlocks]);
  return l ? /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsxs("style", { type: "text/css", children: [
      h,
      d,
      C
    ] }),
    /* @__PURE__ */ f.jsxs(
      "div",
      {
        ref: n,
        className: Q(
          "group relative overflow-hidden",
          p && "select-none cursor-grabbing pretty-poly-grid--dragging",
          t
        ),
        "data-grid-id": l.id,
        "data-block-id": l.id,
        "data-block-type": l.type,
        "data-active-mode": s.activeMode,
        "aria-label": o || "Resizable grid layout",
        role: "application",
        style: { isolation: "isolate" },
        children: [
          e,
          (s.activeMode === "grid" || s.activeMode === "desktop") && /* @__PURE__ */ f.jsx(Or, {})
        ]
      }
    )
  ] }) : (console.warn("No root block found in grid configuration"), null);
});
ht.displayName = "GridInternal";
const Mr = Z(
  ({
    children: e,
    defaultLayout: t = [],
    modes: o,
    persist: r = !1,
    persistKey: n,
    onLayoutChange: s,
    onModeChange: i,
    className: a,
    dividers: c = "manual",
    dividerConfig: m,
    "aria-label": y
  }, k) => {
    const p = t.find((l) => !l.parentId), x = (p == null ? void 0 : p.id) || "root";
    return /* @__PURE__ */ f.jsx(
      jr,
      {
        blocks: t,
        modes: o,
        gridId: x,
        persist: r,
        persistKey: n,
        onLayoutChange: s,
        onModeChange: i,
        children: /* @__PURE__ */ f.jsx(
          ht,
          {
            ref: k,
            className: a,
            dividers: c,
            dividerConfig: m,
            "aria-label": y,
            children: e
          }
        )
      }
    );
  }
);
Mr.displayName = "Grid";
const bt = Z(
  ({ scrollMode: e = "vertical", className: t, children: o, "aria-label": r }, n) => {
    const s = {
      vertical: "overflow-y-auto overflow-x-hidden",
      horizontal: "overflow-x-auto overflow-y-hidden",
      both: "overflow-auto",
      none: "overflow-hidden"
    };
    return /* @__PURE__ */ f.jsx(
      "div",
      {
        ref: n,
        className: Q(
          "pretty-poly-block-content",
          "flex-1",
          // Fill remaining space
          "min-h-0",
          // Allow flex shrinking
          s[e],
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
bt.displayName = "Block.Content";
const gt = Z(
  ({ position: e = "top", className: t, children: o, "aria-label": r }, n) => /* @__PURE__ */ f.jsx(
    "div",
    {
      ref: n,
      className: Q(
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
gt.displayName = "Block.Header";
const yt = Z(
  ({ className: e, children: t, "aria-label": o }, r) => /* @__PURE__ */ f.jsx(
    "div",
    {
      ref: r,
      className: Q(
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
yt.displayName = "Block.Footer";
const vt = Z(
  ({ left: e, center: t, right: o, className: r, "aria-label": n }, s) => /* @__PURE__ */ f.jsxs(
    "div",
    {
      ref: s,
      className: Q(
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
      "aria-label": n || "Toolbar",
      role: "toolbar",
      children: [
        /* @__PURE__ */ f.jsx("div", { className: "flex items-center space-x-2 flex-shrink-0", children: e }),
        /* @__PURE__ */ f.jsx("div", { className: "flex items-center justify-center flex-1 px-4", children: t }),
        /* @__PURE__ */ f.jsx("div", { className: "flex items-center space-x-2 flex-shrink-0", children: o })
      ]
    }
  )
);
vt.displayName = "Block.Toolbar";
const wt = Z(
  ({
    tabs: e,
    activeTab: t,
    onTabChange: o,
    onTabClose: r,
    className: n,
    "aria-label": s,
    allowOverflow: i = !0,
    showNavigation: a = !1,
    onNavigateBack: c,
    onNavigateForward: m,
    canGoBack: y = !1,
    canGoForward: k = !1,
    actions: p
  }, x) => {
    const [l, v] = q(null), [d, h] = q(!1), [C, u] = q(!1), [b, S] = q(!1), A = ce(null), N = (z, I) => {
      I.preventDefault(), z.disabled || o(z.id);
    }, w = (z, I) => {
      I.preventDefault(), I.stopPropagation(), r && z.closable && r(z.id);
    }, L = (z, I) => {
      (I.key === "Enter" || I.key === " ") && (I.preventDefault(), z.disabled || o(z.id));
    }, O = V(() => {
      const z = A.current;
      if (!z) return;
      const I = z.scrollWidth > z.clientWidth;
      if (h(I && i), I) {
        const P = z.scrollLeft, B = z.scrollWidth - z.clientWidth;
        u(P > 1), S(P < B - 1);
      } else
        u(!1), S(!1);
    }, [i]), M = V((z) => {
      const I = A.current;
      if (!I) return;
      const P = 200, B = z === "left" ? I.scrollLeft - P : I.scrollLeft + P;
      I.scrollTo({
        left: B,
        behavior: "smooth"
      });
    }, []);
    return G(() => {
      const z = A.current;
      if (!z) return;
      O(), z.addEventListener("scroll", O);
      const I = new ResizeObserver(O);
      return I.observe(z), () => {
        z.removeEventListener("scroll", O), I.disconnect();
      };
    }, [O]), G(() => {
      O();
    }, [e, O]), /* @__PURE__ */ f.jsxs(
      "div",
      {
        ref: x,
        className: X(
          "pretty-poly-block-tabs",
          "flex items-center",
          "border-b border-border",
          "bg-card",
          n
        ),
        role: "tablist",
        "aria-label": s || "Block tabs",
        children: [
          a && /* @__PURE__ */ f.jsxs("div", { className: "flex items-center space-x-1 px-2 border-r border-border flex-shrink-0", children: [
            /* @__PURE__ */ f.jsx(
              "button",
              {
                onClick: c,
                disabled: !y,
                className: X(
                  "p-1.5 rounded hover:bg-accent transition-colors",
                  !y && "opacity-30 cursor-not-allowed"
                ),
                "aria-label": "Navigate back",
                title: "Go back",
                children: /* @__PURE__ */ f.jsx("svg", { className: "w-4 h-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ f.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) })
              }
            ),
            /* @__PURE__ */ f.jsx(
              "button",
              {
                onClick: m,
                disabled: !k,
                className: X(
                  "p-1.5 rounded hover:bg-accent transition-colors",
                  !k && "opacity-30 cursor-not-allowed"
                ),
                "aria-label": "Navigate forward",
                title: "Go forward",
                children: /* @__PURE__ */ f.jsx("svg", { className: "w-4 h-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ f.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })
              }
            )
          ] }),
          d && /* @__PURE__ */ f.jsx(
            "button",
            {
              onClick: () => M("left"),
              disabled: !C,
              className: X(
                "flex-shrink-0 p-1.5 hover:bg-accent transition-colors",
                !C && "opacity-30 cursor-not-allowed"
              ),
              "aria-label": "Scroll tabs left",
              title: "Scroll left",
              children: /* @__PURE__ */ f.jsx("svg", { className: "w-4 h-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ f.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) })
            }
          ),
          /* @__PURE__ */ f.jsxs(
            "div",
            {
              ref: A,
              className: X(
                "flex items-center min-w-0 flex-1 relative",
                i ? "overflow-x-auto" : "overflow-x-hidden",
                // Hide scrollbar for cleaner look
                "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              ),
              children: [
                d && C && /* @__PURE__ */ f.jsx("div", { className: "absolute left-0 top-0 bottom-0 w-8 pointer-events-none bg-gradient-to-r from-card to-transparent z-10" }),
                e.map((z) => {
                  const I = z.id === t, P = l === z.id, B = z.icon;
                  return /* @__PURE__ */ f.jsxs(
                    "div",
                    {
                      className: X(
                        "flex items-center space-x-2 px-3 py-2 text-sm cursor-pointer",
                        "border-b-2 transition-colors duration-150",
                        "min-w-0 flex-shrink-0",
                        // Prevent shrinking
                        I ? "border-primary text-primary bg-accent" : "border-transparent text-muted-foreground hover:text-foreground hover:bg-accent",
                        z.disabled && "opacity-50 cursor-not-allowed",
                        z.isPinned && "bg-accent/50",
                        !i && "flex-1"
                        // Equal width tabs when overflow disabled
                      ),
                      role: "tab",
                      "aria-selected": I,
                      "aria-disabled": z.disabled,
                      tabIndex: z.disabled ? -1 : 0,
                      onClick: (W) => N(z, W),
                      onKeyDown: (W) => L(z, W),
                      onMouseEnter: () => v(z.id),
                      onMouseLeave: () => v(null),
                      "data-tab-id": z.id,
                      "data-tab-dirty": z.isDirty,
                      "data-tab-pinned": z.isPinned,
                      children: [
                        z.isPinned && /* @__PURE__ */ f.jsxs(
                          "svg",
                          {
                            className: "w-3 h-3 flex-shrink-0 text-muted-foreground",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            "aria-label": "Pinned",
                            children: [
                              /* @__PURE__ */ f.jsx("title", { children: "Pinned" }),
                              /* @__PURE__ */ f.jsx("path", { d: "M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L11 4.323V3a1 1 0 011-1h-2z" })
                            ]
                          }
                        ),
                        B && /* @__PURE__ */ f.jsx(B, { className: "w-4 h-4 flex-shrink-0" }),
                        /* @__PURE__ */ f.jsx("span", { className: "truncate min-w-0", children: z.label }),
                        z.isDirty && /* @__PURE__ */ f.jsx(
                          "div",
                          {
                            className: "w-2 h-2 rounded-full bg-primary flex-shrink-0",
                            title: "Unsaved changes",
                            "aria-label": "Has unsaved changes"
                          }
                        ),
                        z.closable && r && !z.isPinned && /* @__PURE__ */ f.jsx(
                          "button",
                          {
                            className: X(
                              "flex-shrink-0 w-4 h-4 rounded-sm hover:bg-muted",
                              "flex items-center justify-center",
                              "transition-colors duration-150",
                              P || I ? "opacity-100" : "opacity-0"
                            ),
                            onClick: (W) => w(z, W),
                            "aria-label": `Close ${z.label} tab`,
                            tabIndex: -1,
                            children: /* @__PURE__ */ f.jsx(
                              "svg",
                              {
                                className: "w-3 h-3",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /* @__PURE__ */ f.jsx(
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
                    z.id
                  );
                }),
                d && b && /* @__PURE__ */ f.jsx("div", { className: "absolute right-0 top-0 bottom-0 w-8 pointer-events-none bg-gradient-to-l from-card to-transparent z-10" })
              ]
            }
          ),
          d && /* @__PURE__ */ f.jsx(
            "button",
            {
              onClick: () => M("right"),
              disabled: !b,
              className: X(
                "flex-shrink-0 p-1.5 hover:bg-accent transition-colors",
                !b && "opacity-30 cursor-not-allowed"
              ),
              "aria-label": "Scroll tabs right",
              title: "Scroll right",
              children: /* @__PURE__ */ f.jsx("svg", { className: "w-4 h-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ f.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })
            }
          ),
          p && /* @__PURE__ */ f.jsx("div", { className: "flex items-center space-x-2 px-2 border-l border-border flex-shrink-0", children: p })
        ]
      }
    );
  }
);
wt.displayName = "Block.Tabs";
const We = Z(
  ({ position: e = "left", width: t = 48, className: o, children: r, "aria-label": n }, s) => /* @__PURE__ */ f.jsx(
    "div",
    {
      ref: s,
      className: X(
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
      "aria-label": n || "Sidebar navigation",
      role: "navigation",
      children: r
    }
  )
);
We.displayName = "Block.Sidebar";
const xt = Z(
  ({
    icon: e,
    tooltip: t,
    active: o = !1,
    disabled: r = !1,
    badge: n,
    onClick: s,
    className: i,
    "aria-label": a
  }, c) => {
    const [m, y] = q(!1), k = () => {
      t && !r && y(!0);
    }, p = () => {
      y(!1);
    }, x = () => {
      !r && s && s();
    }, l = (v) => {
      (v.key === "Enter" || v.key === " ") && (v.preventDefault(), x());
    };
    return /* @__PURE__ */ f.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ f.jsxs(
        "button",
        {
          ref: c,
          className: X(
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
          onClick: x,
          onKeyDown: l,
          onMouseEnter: k,
          onMouseLeave: p,
          "aria-label": a || t,
          "aria-pressed": o,
          tabIndex: r ? -1 : 0,
          children: [
            /* @__PURE__ */ f.jsx(
              e,
              {
                className: X(
                  "w-5 h-5",
                  o ? "text-primary" : "text-muted-foreground",
                  !r && "group-hover:text-foreground"
                )
              }
            ),
            n && /* @__PURE__ */ f.jsx("div", { className: "absolute -top-1 -right-1 min-w-4 h-4 bg-destructive text-destructive-foreground text-xs rounded-full flex items-center justify-center px-1", children: typeof n == "number" && n > 99 ? "99+" : n }),
            o && /* @__PURE__ */ f.jsx("div", { className: "absolute left-0 top-1/2 transform -translate-y-1/2 w-0.5 h-6 bg-primary" })
          ]
        }
      ),
      m && t && /* @__PURE__ */ f.jsx("div", { className: "absolute left-full ml-2 top-1/2 transform -translate-y-1/2 z-50", children: /* @__PURE__ */ f.jsxs("div", { className: "bg-popover text-popover-foreground text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap border border-border", children: [
        t,
        /* @__PURE__ */ f.jsx("div", { className: "absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-popover" })
      ] }) })
    ] });
  }
);
xt.displayName = "Block.Sidebar.Item";
const kt = Z(
  ({ className: e }, t) => /* @__PURE__ */ f.jsx(
    "div",
    {
      ref: t,
      className: X(
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
kt.displayName = "Block.Sidebar.Spacer";
const St = Z(
  ({ direction: e = "column", className: t, children: o, "aria-label": r }, n) => /* @__PURE__ */ f.jsx(
    "div",
    {
      ref: n,
      className: Q(
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
St.displayName = "Block.Layout";
const Ue = Z(
  ({
    id: e,
    type: t = "block",
    direction: o = "row",
    children: r,
    className: n,
    divider: s,
    noDivider: i,
    "aria-label": a
  }, c) => {
    var C;
    const { gridId: m } = ee(), y = Ee(), { collapseBlock: k, expandBlock: p } = Rr(), { supportsFeature: x } = ct(), l = y == null ? void 0 : y.blocks[e], v = ((C = y == null ? void 0 : y.hiddenBlocks) == null ? void 0 : C.has(e)) || !1, d = oe(() => l != null && l.collapsible && l.collapseAt ? (l.size ?? l.defaultSize ?? 0) <= l.collapseAt : !1, [l]), h = () => {
      l != null && l.collapsible && l.collapseAt && ((l.size ?? l.defaultSize ?? 0) <= l.collapseAt ? p(e) : k(e));
    };
    return /* @__PURE__ */ f.jsx(
      "div",
      {
        ref: c,
        className: Q(
          // Base styles - simple grid item that fills its space
          "relative",
          "w-full h-full",
          "overflow-hidden",
          "transition-opacity duration-150",
          d && "opacity-70",
          n
        ),
        style: {
          // Hide block with display: none - removes from grid flow
          // The grid template will be dynamically updated to exclude this block
          display: v ? "none" : void 0
        },
        "data-grid-id": m,
        "data-block-id": e,
        "data-block-type": t,
        "data-block-direction": o,
        "data-block-size-default": l == null ? void 0 : l.defaultSize,
        "data-block-size-unit": l == null ? void 0 : l.sizeUnit,
        "data-block-size-min": l == null ? void 0 : l.minSize,
        "data-block-size-max": l == null ? void 0 : l.maxSize,
        "data-block-resizable": (l == null ? void 0 : l.resizable) !== !1,
        "data-block-collapse-at": l == null ? void 0 : l.collapseAt,
        "data-block-collapse-to": l == null ? void 0 : l.collapseTo,
        "data-block-divider-position": l == null ? void 0 : l.dividerPosition,
        "data-block-divider-size": l == null ? void 0 : l.dividerSize,
        "data-block-divider": s !== void 0 ? JSON.stringify(s) : void 0,
        "data-block-no-divider": i,
        "data-block-hidden": v,
        "aria-label": a,
        "aria-hidden": v,
        role: t === "group" ? "group" : void 0,
        tabIndex: x("resizing") && !v ? 0 : void 0,
        onDoubleClick: x("collapse") ? h : void 0,
        children: r
      }
    );
  }
);
Ue.displayName = "Block";
const zt = Z(
  (e, t) => /* @__PURE__ */ f.jsx(Ue, { ref: t, ...e, type: "group" })
);
zt.displayName = "Block.Group";
Object.assign(Ue, {
  Group: zt,
  Layout: St,
  Header: gt,
  Content: bt,
  Footer: yt,
  Toolbar: vt,
  Tabs: wt,
  Sidebar: We
});
Object.assign(We, {
  Item: xt,
  Spacer: kt
});
function Dr(e) {
  const o = Ee().blocks[e];
  if (!o)
    return {
      canSplitVertical: !1,
      canSplitHorizontal: !1,
      currentDirection: void 0,
      canSplit: !1
    };
  const r = o.direction !== void 0, n = !r || o.direction === "row", s = !r || o.direction === "column";
  return {
    canSplitVertical: n,
    canSplitHorizontal: s,
    currentDirection: o.direction,
    canSplit: o.canSplit === !0
  };
}
const Tt = Z(
  ({
    blockId: e,
    children: t,
    label: o,
    icon: r,
    showSplitButtons: n = !0,
    splitButtonLabels: s = {
      vertical: "Split Right",
      horizontal: "Split Down"
    },
    splitButtonIcons: i,
    onBeforeSplit: a,
    className: c,
    toolbarClassName: m,
    contentClassName: y,
    renderToolbar: k,
    "aria-label": p
  }, x) => {
    const { splitBlock: l } = ee(), { canSplitVertical: v, canSplitHorizontal: d } = Dr(e), h = i == null ? void 0 : i.vertical, C = i == null ? void 0 : i.horizontal, u = () => {
      a && a("vertical") === !1 || l(e, "vertical");
    }, b = () => {
      a && a("horizontal") === !1 || l(e, "horizontal");
    }, S = {
      blockId: e,
      canSplitVertical: v,
      canSplitHorizontal: d,
      handleSplitVertical: u,
      handleSplitHorizontal: b,
      label: o,
      icon: r
    };
    return /* @__PURE__ */ f.jsxs(
      "div",
      {
        ref: x,
        "data-block-id": e,
        "data-block-type": "group",
        "data-has-toolbar": "true",
        className: Q("relative w-full h-full flex flex-col min-h-0", c),
        "aria-label": p,
        children: [
          k ? k(S) : /* @__PURE__ */ f.jsx(
            "div",
            {
              className: Q(
                "flex-none border-b border-border bg-card",
                m
              ),
              children: /* @__PURE__ */ f.jsxs("div", { className: "flex items-center justify-between px-3 py-2", children: [
                /* @__PURE__ */ f.jsxs("div", { className: "flex items-center gap-2", children: [
                  r && /* @__PURE__ */ f.jsx(r, { className: "w-4 h-4 text-muted-foreground" }),
                  o && /* @__PURE__ */ f.jsx("div", { className: "font-semibold text-sm", children: o })
                ] }),
                n && /* @__PURE__ */ f.jsxs("div", { className: "flex gap-1", children: [
                  v && /* @__PURE__ */ f.jsxs(
                    "button",
                    {
                      onClick: u,
                      className: "px-2 py-1 rounded text-xs border border-border hover:bg-accent transition-colors flex items-center gap-1",
                      title: `${s.vertical} (Ctrl+\\)`,
                      "aria-label": s.vertical,
                      children: [
                        h && /* @__PURE__ */ f.jsx(h, { className: "w-3 h-3" }),
                        /* @__PURE__ */ f.jsx("span", { className: "hidden sm:inline", children: s.vertical })
                      ]
                    }
                  ),
                  d && /* @__PURE__ */ f.jsxs(
                    "button",
                    {
                      onClick: b,
                      className: "px-2 py-1 rounded text-xs border border-border hover:bg-accent transition-colors flex items-center gap-1",
                      title: `${s.horizontal} (Ctrl+Shift+\\)`,
                      "aria-label": s.horizontal,
                      children: [
                        C && /* @__PURE__ */ f.jsx(C, { className: "w-3 h-3" }),
                        /* @__PURE__ */ f.jsx("span", { className: "hidden sm:inline", children: s.horizontal })
                      ]
                    }
                  )
                ] })
              ] })
            }
          ),
          /* @__PURE__ */ f.jsx(
            "div",
            {
              "data-split-content": !0,
              className: Q("flex-1 relative min-h-0", y),
              children: t
            }
          )
        ]
      }
    );
  }
);
Tt.displayName = "BlockSplitContainer";
function Et({
  blockId: e,
  renderBlock: t,
  getSplitContainerProps: o,
  renderSplitContainer: r,
  renderGroup: n,
  className: s
}) {
  const i = Ee();
  if (!i || !i.blocks)
    return null;
  const a = i.blocks[e];
  if (!a)
    return null;
  const c = () => !a.children || a.children.length === 0 ? null : /* @__PURE__ */ f.jsx(f.Fragment, { children: a.children.map((m) => /* @__PURE__ */ f.jsx(
    Et,
    {
      blockId: m,
      renderBlock: t,
      getSplitContainerProps: o,
      renderSplitContainer: r,
      renderGroup: n
    },
    m
  )) });
  if (a.type === "group" && a.hasToolbar) {
    const m = c();
    if (r)
      return /* @__PURE__ */ f.jsx(f.Fragment, { children: r(e, a, m) });
    const y = o ? o(a, e) : {};
    return /* @__PURE__ */ f.jsx(
      Tt,
      {
        blockId: e,
        className: s,
        ...y,
        children: m
      }
    );
  }
  if (a.type === "group" && a.children) {
    const m = c();
    return n ? /* @__PURE__ */ f.jsx(f.Fragment, { children: n(e, a, m) }) : /* @__PURE__ */ f.jsx(f.Fragment, { children: m });
  }
  return t ? /* @__PURE__ */ f.jsx(f.Fragment, { children: t(a, e) }) : /* @__PURE__ */ f.jsx(
    "div",
    {
      "data-block-id": e,
      "data-block-type": "block",
      className: s || "relative w-full h-full",
      children: /* @__PURE__ */ f.jsxs("div", { className: "p-4 text-muted-foreground", children: [
        'Block "',
        e,
        '" - No render function provided'
      ] })
    }
  );
}
Et.displayName = "BlockTreeRenderer";
const Vr = Z(
  ({
    icon: e,
    size: t = "sm",
    className: o,
    title: r = "Close",
    type: n = "button",
    ...s
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
    return /* @__PURE__ */ f.jsx(
      "button",
      {
        ref: i,
        type: n,
        className: Q(
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
        ...s,
        children: e ? /* @__PURE__ */ f.jsx(e, { className: c[t] }) : /* @__PURE__ */ f.jsx("span", { className: "text-base leading-none", children: "×" })
      }
    );
  }
);
Vr.displayName = "BlockCloseButton";
class Br {
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
    return t ? o.sort((r, n) => (r.order ?? 0) - (n.order ?? 0)) : o;
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
const Ct = Re(null);
function ve() {
  const e = Le(Ct);
  if (!e)
    throw new Error("useViewRegistry must be used within ViewRegistryProvider");
  return e;
}
function to(e) {
  const t = ve(), [o, r] = q(() => t.getView(e));
  return G(() => t.subscribe(() => {
    r(t.getView(e));
  }), [t, e]), o;
}
function ro(e) {
  const t = ve(), [o, r] = q(() => e != null && e.category ? t.getViewsByCategory(e.category) : t.getAllViews((e == null ? void 0 : e.sorted) ?? !0));
  return G(() => {
    const n = () => {
      e != null && e.category ? r(t.getViewsByCategory(e.category)) : r(t.getAllViews((e == null ? void 0 : e.sorted) ?? !0));
    };
    return t.subscribe(n);
  }, [t, e == null ? void 0 : e.category, e == null ? void 0 : e.sorted]), o;
}
function oo({ children: e, registry: t }) {
  const [o] = q(() => t ?? new Br());
  return /* @__PURE__ */ f.jsx(Ct.Provider, { value: o, children: e });
}
function no(e) {
  const t = ve();
  G(() => t.registerViews(e), [t, e]);
}
function so(e) {
  const t = ve();
  G(() => t.registerView(e), [t, e]);
}
function Oe(...e) {
  return lt(X(e));
}
function io({
  blockId: e,
  label: t = "+",
  className: o,
  onTabCreated: r
}) {
  const n = ve(), { openTab: s } = ee(), [i, a] = q(!1), c = ce(null), m = n.getAllViews(!0), y = n.getCategories(), k = y.length > 0;
  G(() => {
    function v(d) {
      c.current && !c.current.contains(d.target) && a(!1);
    }
    if (i)
      return document.addEventListener("mousedown", v), () => document.removeEventListener("mousedown", v);
  }, [i]), G(() => {
    function v(d) {
      d.key === "Escape" && i && a(!1);
    }
    if (i)
      return document.addEventListener("keydown", v), () => document.removeEventListener("keydown", v);
  }, [i]);
  const p = (v) => {
    const d = v.icon, h = s(e, {
      label: v.title,
      icon: d,
      viewType: v.id,
      viewState: {},
      closable: !0
    });
    a(!1), r == null || r(h);
  }, l = (k ? y.map((v) => ({
    category: v,
    views: n.getViewsByCategory(v)
  })) : [{ category: void 0, views: m }]).filter((v) => v.views.length > 0);
  return /* @__PURE__ */ f.jsxs("div", { className: "relative", ref: c, children: [
    /* @__PURE__ */ f.jsx(
      "button",
      {
        onClick: () => a(!i),
        className: Oe(
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
    i && /* @__PURE__ */ f.jsx(
      "div",
      {
        className: Oe(
          "absolute top-full right-0 mt-1 min-w-[200px] max-h-[400px]",
          "bg-popover border rounded-md shadow-md overflow-y-auto z-50"
        ),
        role: "menu",
        "aria-orientation": "vertical",
        children: l.length === 0 ? /* @__PURE__ */ f.jsx("div", { className: "px-3 py-2 text-sm text-muted-foreground text-center", children: "No views registered" }) : l.map((v, d) => /* @__PURE__ */ f.jsxs("div", { children: [
          v.category && /* @__PURE__ */ f.jsx("div", { className: "px-3 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide border-b", children: v.category }),
          /* @__PURE__ */ f.jsx("div", { className: v.category ? "py-1" : "", children: v.views.map((h) => {
            const C = h.icon;
            return /* @__PURE__ */ f.jsxs(
              "button",
              {
                onClick: () => p(h),
                className: Oe(
                  "w-full px-3 py-2 text-left text-sm",
                  "hover:bg-accent transition-colors",
                  "focus:outline-none focus:bg-accent",
                  "flex items-center gap-2"
                ),
                role: "menuitem",
                children: [
                  C && /* @__PURE__ */ f.jsx(C, { className: "w-4 h-4 flex-shrink-0", "aria-hidden": "true" }),
                  /* @__PURE__ */ f.jsx("span", { className: "flex-1", children: h.title })
                ]
              },
              h.id
            );
          }) }),
          d < l.length - 1 && /* @__PURE__ */ f.jsx("div", { className: "border-t" })
        ] }, v.category || "uncategorized"))
      }
    )
  ] });
}
function ao({ tab: e, blockId: t, ...o }) {
  const r = ve();
  if (!e.viewType)
    return null;
  const n = r.getView(e.viewType);
  if (!n)
    return /* @__PURE__ */ f.jsx("div", { className: "flex items-center justify-center h-full p-4 text-destructive", children: /* @__PURE__ */ f.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ f.jsx("div", { className: "text-lg font-semibold mb-2", children: "View Not Found" }),
      /* @__PURE__ */ f.jsxs("div", { className: "text-sm text-muted-foreground", children: [
        'View type "',
        e.viewType,
        '" is not registered in the ViewRegistry.'
      ] })
    ] }) });
  const s = n.component;
  return /* @__PURE__ */ f.jsx(
    s,
    {
      viewId: e.viewType,
      blockId: t,
      ...e.viewState || {},
      ...o
    }
  );
}
function lo(e, t, o) {
  const r = [];
  let n = e;
  const s = t.minSize ?? 0, i = t.maxSize ?? 1 / 0;
  if (e < s && (r.push(`Size ${e} is below minimum ${s}`), n = s), e > i && (r.push(`Size ${e} exceeds maximum ${i}`), n = i), n = he(n, s, i), t.sizeUnit === "px" && t.collapsible && o !== void 0) {
    const a = t.collapseAt ?? 0, c = t.collapseTo ?? 0, m = t.defaultSize ?? n;
    n = Sr(
      n,
      o,
      a,
      c,
      m
    );
  }
  return {
    isValid: r.length === 0,
    adjustedValue: n,
    violations: r
  };
}
function co(e, t, o, r, n = 1) {
  const s = [];
  let i = o, a = r;
  const c = pe(e.minSize ?? 0, e.sizeUnit, n), m = pe(e.maxSize ?? 1 / 0, e.sizeUnit, n), y = pe(t.minSize ?? 0, t.sizeUnit, n), k = pe(t.maxSize ?? 1 / 0, t.sizeUnit, n), p = pe(e.defaultSize ?? 0, e.sizeUnit, n), x = pe(t.defaultSize ?? 0, t.sizeUnit, n), l = p + o, v = x + r;
  let d = he(l, c, m), h = he(v, y, k);
  i = d - p, a = h - x;
  const C = i + a;
  if (Math.abs(C) > 1e-3) {
    const S = Math.abs(i) < Math.abs(o), A = Math.abs(a) < Math.abs(r);
    if (S && !A) {
      const N = x - i;
      h = he(N, y, k), a = h - x;
    } else if (A && !S) {
      const N = p - a;
      d = he(N, c, m), i = d - p;
    }
    s.push("Zero-sum constraint violated, deltas adjusted");
  }
  const u = i + a;
  return {
    isValid: Math.abs(u) <= 1e-3,
    adjustedTargetDelta: i,
    adjustedAdjacentDelta: a,
    violations: s
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
function uo(e, t) {
  const o = [], r = e.filter((s) => s.sizeUnit === "px").reduce((s, i) => s + (t[i.id] ?? i.defaultSize ?? 0), 0), n = e.filter((s) => s.sizeUnit === "fr").reduce((s, i) => s + (t[i.id] ?? i.defaultSize ?? 0), 0);
  return r < 0 && o.push("Total fixed size cannot be negative"), n <= 0 && e.some((s) => s.sizeUnit === "fr") && o.push("Total fr units must be positive"), e.forEach((s) => {
    const i = t[s.id] ?? s.defaultSize ?? 0, a = s.minSize ?? 0, c = s.maxSize ?? 1 / 0;
    a > c && o.push(`Block ${s.id}: minSize (${a}) > maxSize (${c})`), (i < a || i > c) && o.push(`Block ${s.id}: size ${i} violates constraints [${a}, ${c}]`);
  }), {
    isValid: o.length === 0,
    violations: o
  };
}
class $r {
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
      const n = await r.handler(...o);
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
    const o = Array.from(this.commands.values());
    return t ? o.sort((r, n) => {
      const s = r.category || "", i = n.category || "";
      if (s !== i) return s.localeCompare(i);
      const a = r.title || r.id, c = n.title || n.id;
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
    return r ? (t.preventDefault(), t.stopPropagation(), this.executeCommand(r).catch((n) => {
      console.error(`Error executing command ${r}:`, n);
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
    (r = this.executionListeners.get(t)) == null || r.forEach((n) => n(o));
  }
  notifyRegistrationChange() {
    this.registrationListeners.forEach((t) => t());
  }
}
const At = Re(null);
function we() {
  const e = Le(At);
  if (!e)
    throw new Error("useCommandService must be used within CommandServiceProvider");
  return e;
}
function fo(e) {
  const t = we(), [o, r] = q(() => t.getCommand(e));
  return G(() => {
    const n = () => {
      r(t.getCommand(e));
    };
    return t.onDidChangeCommands(n);
  }, [t, e]), o;
}
function po(e) {
  const t = we(), [o, r] = q(() => e != null && e.category ? t.getCommandsByCategory(e.category) : t.getAllCommands((e == null ? void 0 : e.sorted) ?? !0));
  return G(() => {
    const n = () => {
      e != null && e.category ? r(t.getCommandsByCategory(e.category)) : r(t.getAllCommands((e == null ? void 0 : e.sorted) ?? !0));
    };
    return t.onDidChangeCommands(n);
  }, [t, e == null ? void 0 : e.category, e == null ? void 0 : e.sorted]), o;
}
function mo(e) {
  const t = we();
  return V(
    (...o) => t.executeCommand(e, ...o),
    [t, e]
  );
}
function ho(e) {
  const t = we();
  G(() => t.registerCommands(e), [t, e]);
}
function bo(e) {
  const t = we();
  G(() => t.registerCommand(e), [t, e]);
}
function go(e = !0) {
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
function yo({
  children: e,
  service: t,
  enableKeyboardShortcuts: o = !0
}) {
  const [r] = q(() => t ?? new $r());
  return G(() => {
    if (!o) return;
    const n = (s) => {
      r.handleKeyboardEvent(s);
    };
    return window.addEventListener("keydown", n), () => {
      window.removeEventListener("keydown", n);
    };
  }, [r, o]), /* @__PURE__ */ f.jsx(At.Provider, { value: r, children: e });
}
class Gr {
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
      var s, i;
      const r = new Date(((s = t.metadata) == null ? void 0 : s.createdAt) || 0);
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
  createLayoutFromCurrentState(t, o, r, n) {
    return {
      id: t,
      name: o,
      blocks: [...r],
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
      const o = JSON.parse(t);
      let r = 0;
      for (const n of o)
        n.id && n.name && n.blocks && n.viewTypes && (this.saveLayout(n), r++);
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
const It = Re(null);
function xe() {
  const e = Le(It);
  if (!e)
    throw new Error("useLayoutService must be used within LayoutServiceProvider");
  return e;
}
function vo(e) {
  const t = xe(), [o, r] = q(() => t.getBlockViewType(e));
  return G(() => {
    const n = (i) => {
      r(i[e]);
    };
    return t.onViewTypesChange(n);
  }, [t, e]), o;
}
function wo() {
  const e = xe(), [t, o] = q(() => e.getAllViewTypes());
  return G(() => e.onViewTypesChange(o), [e]), t;
}
function xo() {
  const e = xe();
  return V(
    (t, o) => {
      e.setBlockViewType(t, o);
    },
    [e]
  );
}
function ko() {
  const e = xe(), [t, o] = q(() => e.getAllLayouts());
  return G(() => {
    const r = () => {
      o(e.getAllLayouts());
    };
    return e.onLayoutsChange(r);
  }, [e]), t;
}
function So() {
  const e = xe();
  return V(
    (t, o, r, n) => {
      const s = e.createLayoutFromCurrentState(t, o, r, n);
      e.saveLayout(s);
    },
    [e]
  );
}
function zo() {
  const e = xe();
  return V(
    (t) => e.applyLayout(t),
    [e]
  );
}
function To({
  children: e,
  service: t,
  initialViewTypes: o
}) {
  const [r] = q(() => {
    const n = t ?? new Gr();
    return o && n.setViewTypes(o), n;
  });
  return /* @__PURE__ */ f.jsx(It.Provider, { value: r, children: e });
}
export {
  Ue as Block,
  bt as BlockContent,
  yt as BlockFooter,
  zt as BlockGroup,
  gt as BlockHeader,
  St as BlockLayout,
  We as BlockSidebar,
  xt as BlockSidebarItem,
  kt as BlockSidebarSpacer,
  Tt as BlockSplitContainer,
  wt as BlockTabs,
  vt as BlockToolbar,
  Et as BlockTreeRenderer,
  $r as CommandService,
  yo as CommandServiceProvider,
  mt as Divider,
  Mr as Grid,
  jr as GridProvider,
  Gr as LayoutService,
  To as LayoutServiceProvider,
  io as NewTabDropdown,
  Br as ViewRegistry,
  oo as ViewRegistryProvider,
  ao as ViewRenderer,
  Sr as applyCollapseLogic,
  zr as calculateConstrainedSize,
  he as clamp,
  Q as cn,
  xr as createCustomAdapter,
  gr as defaultModes,
  Yr as findAdjacentBlock,
  qr as frToPx,
  Tr as generateGridTemplate,
  Kr as getAllGridStates,
  ut as getFlexSpacePx,
  Pe as getStorageAdapter,
  Fr as isCollapsed,
  Jr as isZeroSum,
  vr as loadGridState,
  be as localStorageAdapter,
  je as memoryStorageAdapter,
  Hr as pxPerFr,
  Er as pxToFr,
  wr as removeGridState,
  yr as saveGridState,
  dt as sessionStorageAdapter,
  zo as useApplyLayout,
  Dr as useBlockSplitDirection,
  vo as useBlockViewType,
  fo as useCommand,
  go as useCommandKeyboardShortcuts,
  we as useCommandService,
  po as useCommands,
  mo as useExecuteCommand,
  Rr as useGridActions,
  ee as useGridContext,
  Nr as useGridKeyboard,
  ct as useGridMode,
  kr as useGridPersistence,
  Lr as useGridResize,
  Ee as useGridState,
  Xr as useHideBlock,
  Zr as useIsBlockHidden,
  xe as useLayoutService,
  ko as useLayouts,
  bo as useRegisterCommand,
  ho as useRegisterCommands,
  so as useRegisterView,
  no as useRegisterViews,
  So as useSaveLayout,
  xo as useSetBlockViewType,
  Qr as useShowBlock,
  eo as useToggleBlockVisibility,
  to as useViewDescriptor,
  ve as useViewRegistry,
  wo as useViewTypes,
  ro as useViews,
  lo as validateBlockSize,
  uo as validateLayoutIntegrity,
  co as validateTwoWayResize
};
