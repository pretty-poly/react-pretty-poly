import Ke, { useState as me, useCallback as V, useMemo as J, useEffect as Q, useRef as fe, createContext as St, useContext as zt, useReducer as Et, Children as be, isValidElement as le, cloneElement as Be, forwardRef as ee, useImperativeHandle as At } from "react";
var Pe = { exports: {} }, xe = {};
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
function Tt() {
  if (We) return xe;
  We = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function o(r, n, s) {
    var i = null;
    if (s !== void 0 && (i = "" + s), n.key !== void 0 && (i = "" + n.key), "key" in n) {
      s = {};
      for (var l in n)
        l !== "key" && (s[l] = n[l]);
    } else s = n;
    return n = s.ref, {
      $$typeof: e,
      type: r,
      key: i,
      ref: n !== void 0 ? n : null,
      props: s
    };
  }
  return xe.Fragment = t, xe.jsx = o, xe.jsxs = o, xe;
}
var we = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ve;
function It() {
  return Ve || (Ve = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u) {
      if (u == null) return null;
      if (typeof u == "function")
        return u.$$typeof === B ? null : u.displayName || u.name || null;
      if (typeof u == "string") return u;
      switch (u) {
        case d:
          return "Fragment";
        case a:
          return "Profiler";
        case m:
          return "StrictMode";
        case T:
          return "Suspense";
        case j:
          return "SuspenseList";
        case R:
          return "Activity";
      }
      if (typeof u == "object")
        switch (typeof u.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), u.$$typeof) {
          case c:
            return "Portal";
          case k:
            return (u.displayName || "Context") + ".Provider";
          case g:
            return (u._context.displayName || "Context") + ".Consumer";
          case E:
            var I = u.render;
            return u = u.displayName, u || (u = I.displayName || I.name || "", u = u !== "" ? "ForwardRef(" + u + ")" : "ForwardRef"), u;
          case P:
            return I = u.displayName || null, I !== null ? I : e(u.type) || "Memo";
          case f:
            I = u._payload, u = u._init;
            try {
              return e(u(I));
            } catch {
            }
        }
      return null;
    }
    function t(u) {
      return "" + u;
    }
    function o(u) {
      try {
        t(u);
        var I = !1;
      } catch {
        I = !0;
      }
      if (I) {
        I = console;
        var _ = I.error, A = typeof Symbol == "function" && Symbol.toStringTag && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return _.call(
          I,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          A
        ), t(u);
      }
    }
    function r(u) {
      if (u === d) return "<>";
      if (typeof u == "object" && u !== null && u.$$typeof === f)
        return "<...>";
      try {
        var I = e(u);
        return I ? "<" + I + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var u = K.A;
      return u === null ? null : u.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(u) {
      if (H.call(u, "key")) {
        var I = Object.getOwnPropertyDescriptor(u, "key").get;
        if (I && I.isReactWarning) return !1;
      }
      return u.key !== void 0;
    }
    function l(u, I) {
      function _() {
        D || (D = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          I
        ));
      }
      _.isReactWarning = !0, Object.defineProperty(u, "key", {
        get: _,
        configurable: !0
      });
    }
    function p() {
      var u = e(this.type);
      return W[u] || (W[u] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), u = this.props.ref, u !== void 0 ? u : null;
    }
    function h(u, I, _, A, N, $, Z, C) {
      return _ = $.ref, u = {
        $$typeof: x,
        type: u,
        key: I,
        props: $,
        _owner: N
      }, (_ !== void 0 ? _ : null) !== null ? Object.defineProperty(u, "ref", {
        enumerable: !1,
        get: p
      }) : Object.defineProperty(u, "ref", { enumerable: !1, value: null }), u._store = {}, Object.defineProperty(u._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(u, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(u, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Z
      }), Object.defineProperty(u, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: C
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    }
    function y(u, I, _, A, N, $, Z, C) {
      var F = I.children;
      if (F !== void 0)
        if (A)
          if (G(F)) {
            for (A = 0; A < F.length; A++)
              b(F[A]);
            Object.freeze && Object.freeze(F);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else b(F);
      if (H.call(I, "key")) {
        F = e(u);
        var X = Object.keys(I).filter(function(ve) {
          return ve !== "key";
        });
        A = 0 < X.length ? "{key: someKey, " + X.join(": ..., ") + ": ...}" : "{key: someKey}", L[F + A] || (X = 0 < X.length ? "{" + X.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          A,
          F,
          X,
          F
        ), L[F + A] = !0);
      }
      if (F = null, _ !== void 0 && (o(_), F = "" + _), i(I) && (o(I.key), F = "" + I.key), "key" in I) {
        _ = {};
        for (var re in I)
          re !== "key" && (_[re] = I[re]);
      } else _ = I;
      return F && l(
        _,
        typeof u == "function" ? u.displayName || u.name || "Unknown" : u
      ), h(
        u,
        F,
        $,
        N,
        n(),
        _,
        Z,
        C
      );
    }
    function b(u) {
      typeof u == "object" && u !== null && u.$$typeof === x && u._store && (u._store.validated = 1);
    }
    var w = Ke, x = Symbol.for("react.transitional.element"), c = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), g = Symbol.for("react.consumer"), k = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), R = Symbol.for("react.activity"), B = Symbol.for("react.client.reference"), K = w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = Object.prototype.hasOwnProperty, G = Array.isArray, U = console.createTask ? console.createTask : function() {
      return null;
    };
    w = {
      react_stack_bottom_frame: function(u) {
        return u();
      }
    };
    var D, W = {}, Y = w.react_stack_bottom_frame.bind(
      w,
      s
    )(), v = U(r(s)), L = {};
    we.Fragment = d, we.jsx = function(u, I, _, A, N) {
      var $ = 1e4 > K.recentlyCreatedOwnerStacks++;
      return y(
        u,
        I,
        _,
        !1,
        A,
        N,
        $ ? Error("react-stack-top-frame") : Y,
        $ ? U(r(u)) : v
      );
    }, we.jsxs = function(u, I, _, A, N) {
      var $ = 1e4 > K.recentlyCreatedOwnerStacks++;
      return y(
        u,
        I,
        _,
        !0,
        A,
        N,
        $ ? Error("react-stack-top-frame") : Y,
        $ ? U(r(u)) : v
      );
    };
  }()), we;
}
process.env.NODE_ENV === "production" ? Pe.exports = Tt() : Pe.exports = It();
var M = Pe.exports;
function Ze(e) {
  var t, o, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var n = e.length;
    for (t = 0; t < n; t++) e[t] && (o = Ze(e[t])) && (r && (r += " "), r += o);
  } else for (o in e) e[o] && (r && (r += " "), r += o);
  return r;
}
function ie() {
  for (var e, t, o = 0, r = "", n = arguments.length; o < n; o++) (e = arguments[o]) && (t = Ze(e)) && (r && (r += " "), r += t);
  return r;
}
const De = "-", jt = (e) => {
  const t = Nt(e), {
    conflictingClassGroups: o,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      const l = i.split(De);
      return l[0] === "" && l.length !== 1 && l.shift(), Je(l, t) || Rt(i);
    },
    getConflictingClassGroupIds: (i, l) => {
      const p = o[i] || [];
      return l && r[i] ? [...p, ...r[i]] : p;
    }
  };
}, Je = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const o = e[0], r = t.nextPart.get(o), n = r ? Je(e.slice(1), r) : void 0;
  if (n)
    return n;
  if (t.validators.length === 0)
    return;
  const s = e.join(De);
  return (i = t.validators.find(({
    validator: l
  }) => l(s))) == null ? void 0 : i.classGroupId;
}, Fe = /^\[(.+)\]$/, Rt = (e) => {
  if (Fe.test(e)) {
    const t = Fe.exec(e)[1], o = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (o)
      return "arbitrary.." + o;
  }
}, Nt = (e) => {
  const {
    theme: t,
    classGroups: o
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const n in o)
    Me(o[n], r, n, t);
  return r;
}, Me = (e, t, o, r) => {
  e.forEach((n) => {
    if (typeof n == "string") {
      const s = n === "" ? t : He(t, n);
      s.classGroupId = o;
      return;
    }
    if (typeof n == "function") {
      if (Pt(n)) {
        Me(n(r), t, o, r);
        return;
      }
      t.validators.push({
        validator: n,
        classGroupId: o
      });
      return;
    }
    Object.entries(n).forEach(([s, i]) => {
      Me(i, He(t, s), o, r);
    });
  });
}, He = (e, t) => {
  let o = e;
  return t.split(De).forEach((r) => {
    o.nextPart.has(r) || o.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), o = o.nextPart.get(r);
  }), o;
}, Pt = (e) => e.isThemeGetter, Mt = (e) => {
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
}, Oe = "!", _e = ":", Ot = _e.length, _t = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: o
  } = e;
  let r = (n) => {
    const s = [];
    let i = 0, l = 0, p = 0, h;
    for (let c = 0; c < n.length; c++) {
      let d = n[c];
      if (i === 0 && l === 0) {
        if (d === _e) {
          s.push(n.slice(p, c)), p = c + Ot;
          continue;
        }
        if (d === "/") {
          h = c;
          continue;
        }
      }
      d === "[" ? i++ : d === "]" ? i-- : d === "(" ? l++ : d === ")" && l--;
    }
    const y = s.length === 0 ? n : n.substring(p), b = $t(y), w = b !== y, x = h && h > p ? h - p : void 0;
    return {
      modifiers: s,
      hasImportantModifier: w,
      baseClassName: b,
      maybePostfixModifierPosition: x
    };
  };
  if (t) {
    const n = t + _e, s = r;
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
}, $t = (e) => e.endsWith(Oe) ? e.substring(0, e.length - 1) : e.startsWith(Oe) ? e.substring(1) : e, Dt = (e) => {
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
}, Ct = (e) => ({
  cache: Mt(e.cacheSize),
  parseClassName: _t(e),
  sortModifiers: Dt(e),
  ...jt(e)
}), Gt = /\s+/, Ut = (e, t) => {
  const {
    parseClassName: o,
    getClassGroupId: r,
    getConflictingClassGroupIds: n,
    sortModifiers: s
  } = t, i = [], l = e.trim().split(Gt);
  let p = "";
  for (let h = l.length - 1; h >= 0; h -= 1) {
    const y = l[h], {
      isExternal: b,
      modifiers: w,
      hasImportantModifier: x,
      baseClassName: c,
      maybePostfixModifierPosition: d
    } = o(y);
    if (b) {
      p = y + (p.length > 0 ? " " + p : p);
      continue;
    }
    let m = !!d, a = r(m ? c.substring(0, d) : c);
    if (!a) {
      if (!m) {
        p = y + (p.length > 0 ? " " + p : p);
        continue;
      }
      if (a = r(c), !a) {
        p = y + (p.length > 0 ? " " + p : p);
        continue;
      }
      m = !1;
    }
    const g = s(w).join(":"), k = x ? g + Oe : g, E = k + a;
    if (i.includes(E))
      continue;
    i.push(E);
    const T = n(a, m);
    for (let j = 0; j < T.length; ++j) {
      const P = T[j];
      i.push(k + P);
    }
    p = y + (p.length > 0 ? " " + p : p);
  }
  return p;
};
function Lt() {
  let e = 0, t, o, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (o = Xe(t)) && (r && (r += " "), r += o);
  return r;
}
const Xe = (e) => {
  if (typeof e == "string")
    return e;
  let t, o = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Xe(e[r])) && (o && (o += " "), o += t);
  return o;
};
function Bt(e, ...t) {
  let o, r, n, s = i;
  function i(p) {
    const h = t.reduce((y, b) => b(y), e());
    return o = Ct(h), r = o.cache.get, n = o.cache.set, s = l, l(p);
  }
  function l(p) {
    const h = r(p);
    if (h)
      return h;
    const y = Ut(p, o);
    return n(p, y), y;
  }
  return function() {
    return s(Lt.apply(null, arguments));
  };
}
const q = (e) => {
  const t = (o) => o[e] || [];
  return t.isThemeGetter = !0, t;
}, Qe = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, et = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Wt = /^\d+\/\d+$/, Vt = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ft = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ht = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Yt = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, qt = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ce = (e) => Wt.test(e), O = (e) => !!e && !Number.isNaN(Number(e)), ne = (e) => !!e && Number.isInteger(Number(e)), Ie = (e) => e.endsWith("%") && O(e.slice(0, -1)), se = (e) => Vt.test(e), Kt = () => !0, Zt = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ft.test(e) && !Ht.test(e)
), tt = () => !1, Jt = (e) => Yt.test(e), Xt = (e) => qt.test(e), Qt = (e) => !S(e) && !z(e), er = (e) => ge(e, st, tt), S = (e) => Qe.test(e), ae = (e) => ge(e, nt, Zt), je = (e) => ge(e, nr, O), Ye = (e) => ge(e, rt, tt), tr = (e) => ge(e, ot, Xt), Ee = (e) => ge(e, it, Jt), z = (e) => et.test(e), ke = (e) => ye(e, nt), rr = (e) => ye(e, ir), qe = (e) => ye(e, rt), or = (e) => ye(e, st), sr = (e) => ye(e, ot), Ae = (e) => ye(e, it, !0), ge = (e, t, o) => {
  const r = Qe.exec(e);
  return r ? r[1] ? t(r[1]) : o(r[2]) : !1;
}, ye = (e, t, o = !1) => {
  const r = et.exec(e);
  return r ? r[1] ? t(r[1]) : o : !1;
}, rt = (e) => e === "position" || e === "percentage", ot = (e) => e === "image" || e === "url", st = (e) => e === "length" || e === "size" || e === "bg-size", nt = (e) => e === "length", nr = (e) => e === "number", ir = (e) => e === "family-name", it = (e) => e === "shadow", ar = () => {
  const e = q("color"), t = q("font"), o = q("text"), r = q("font-weight"), n = q("tracking"), s = q("leading"), i = q("breakpoint"), l = q("container"), p = q("spacing"), h = q("radius"), y = q("shadow"), b = q("inset-shadow"), w = q("text-shadow"), x = q("drop-shadow"), c = q("blur"), d = q("perspective"), m = q("aspect"), a = q("ease"), g = q("animate"), k = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], E = () => [
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
  ], T = () => [...E(), z, S], j = () => ["auto", "hidden", "clip", "visible", "scroll"], P = () => ["auto", "contain", "none"], f = () => [z, S, p], R = () => [ce, "full", "auto", ...f()], B = () => [ne, "none", "subgrid", z, S], K = () => ["auto", {
    span: ["full", ne, z, S]
  }, ne, z, S], H = () => [ne, "auto", z, S], G = () => ["auto", "min", "max", "fr", z, S], U = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], D = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], W = () => ["auto", ...f()], Y = () => [ce, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...f()], v = () => [e, z, S], L = () => [...E(), qe, Ye, {
    position: [z, S]
  }], u = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], I = () => ["auto", "cover", "contain", or, er, {
    size: [z, S]
  }], _ = () => [Ie, ke, ae], A = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    h,
    z,
    S
  ], N = () => ["", O, ke, ae], $ = () => ["solid", "dashed", "dotted", "double"], Z = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], C = () => [O, Ie, qe, Ye], F = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    c,
    z,
    S
  ], X = () => ["none", O, z, S], re = () => ["none", O, z, S], ve = () => [O, z, S], ze = () => [ce, "full", ...f()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [se],
      breakpoint: [se],
      color: [Kt],
      container: [se],
      "drop-shadow": [se],
      ease: ["in", "out", "in-out"],
      font: [Qt],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [se],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [se],
      shadow: [se],
      spacing: ["px", O],
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
        aspect: ["auto", "square", ce, S, z, m]
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
        columns: [O, S, z, l]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": k()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": k()
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
        overflow: j()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": j()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": j()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: P()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": P()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": P()
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
        inset: R()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": R()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": R()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: R()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: R()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: R()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: R()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: R()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: R()
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
        z: [ne, "auto", z, S]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [ce, "full", "auto", l, ...f()]
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
        flex: [O, ce, "auto", "initial", "none", S]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", O, z, S]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", O, z, S]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [ne, "first", "last", "none", z, S]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": B()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: K()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": H()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": H()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": B()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: K()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": H()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": H()
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
        "auto-cols": G()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": G()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: f()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": f()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": f()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...U(), "normal"]
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
        content: ["normal", ...U()]
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
        "place-content": U()
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
        p: f()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: f()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: f()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: f()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: f()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: f()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: f()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: f()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: f()
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
        "space-x": f()
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
        "space-y": f()
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
        w: [l, "screen", ...Y()]
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
          ...Y()
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
        text: ["base", o, ke, ae]
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
        font: [r, z, je]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ie, S]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [rr, S, t]
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
        tracking: [n, z, S]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [O, "none", z, je]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...f()
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
        placeholder: v()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: v()
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
        decoration: [...$(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [O, "from-font", "auto", z, ae]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: v()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [O, "auto", z, S]
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
        indent: f()
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
        bg: L()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: u()
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
          }, ne, z, S],
          radial: ["", z, S],
          conic: [ne, z, S]
        }, sr, tr]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: v()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: _()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: _()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: _()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: v()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: v()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: v()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: A()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": A()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": A()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": A()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": A()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": A()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": A()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": A()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": A()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": A()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": A()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": A()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": A()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": A()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": A()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: N()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": N()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": N()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": N()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": N()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": N()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": N()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": N()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": N()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": N()
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
        "divide-y": N()
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
        border: [...$(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...$(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: v()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": v()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": v()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": v()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": v()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": v()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": v()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": v()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": v()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: v()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...$(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [O, z, S]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", O, ke, ae]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: v()
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
          Ae,
          Ee
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: v()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", b, Ae, Ee]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": v()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: N()
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
        ring: v()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [O, ae]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": v()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": N()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": v()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", w, Ae, Ee]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": v()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [O, z, S]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Z(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Z()
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
        "mask-linear": [O]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": C()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": C()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": v()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": v()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": C()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": C()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": v()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": v()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": C()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": C()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": v()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": v()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": C()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": C()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": v()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": v()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": C()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": C()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": v()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": v()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": C()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": C()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": v()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": v()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": C()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": C()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": v()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": v()
      }],
      "mask-image-radial": [{
        "mask-radial": [z, S]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": C()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": C()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": v()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": v()
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
        "mask-radial-at": E()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [O]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": C()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": C()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": v()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": v()
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
        mask: L()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: u()
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
        blur: F()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [O, z, S]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [O, z, S]
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
          Ae,
          Ee
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": v()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", O, z, S]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [O, z, S]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", O, z, S]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [O, z, S]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", O, z, S]
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
        "backdrop-blur": F()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [O, z, S]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [O, z, S]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", O, z, S]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [O, z, S]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", O, z, S]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [O, z, S]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [O, z, S]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", O, z, S]
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
        "border-spacing": f()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": f()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": f()
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
        duration: [O, "initial", z, S]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", a, z, S]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [O, z, S]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", g, z, S]
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
        perspective: [d, z, S]
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
        scale: re()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": re()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": re()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": re()
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
        skew: ve()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ve()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ve()
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
        translate: ze()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": ze()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": ze()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": ze()
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
        accent: v()
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
        caret: v()
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
        "scroll-m": f()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": f()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": f()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": f()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": f()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": f()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": f()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": f()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": f()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": f()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": f()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": f()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": f()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": f()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": f()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": f()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": f()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": f()
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
        fill: ["none", ...v()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [O, ke, ae, je]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...v()]
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
}, lr = /* @__PURE__ */ Bt(ar);
function te(...e) {
  return lr(ie(e));
}
const cr = {
  mobile: {
    type: "dock",
    breakpoint: 0,
    maxWidth: 767
  },
  tablet: {
    type: "sidebar",
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
function Ce(e = cr) {
  const [t, o] = me(() => typeof window > "u" ? { width: 1024, height: 768, orientation: "landscape" } : {
    width: window.innerWidth,
    height: window.innerHeight,
    orientation: window.innerWidth > window.innerHeight ? "landscape" : "portrait"
  }), [r, n] = me(null), s = V(() => {
    if (typeof window > "u") return;
    const c = {
      width: window.innerWidth,
      height: window.innerHeight,
      orientation: window.innerWidth > window.innerHeight ? "landscape" : "portrait"
    };
    o(c);
  }, []), i = J(() => {
    var d;
    if (r && e[r])
      return r;
    const c = Object.entries(e).filter(([m, a]) => {
      if (a.matcher)
        return a.matcher(t);
      const g = !a.minWidth || t.width >= a.minWidth, k = !a.maxWidth || t.width <= a.maxWidth;
      return g && k;
    });
    return c.sort(([, m], [, a]) => {
      const g = (m.minWidth ? 1 : 0) + (m.maxWidth ? 1 : 0);
      return (a.minWidth ? 1 : 0) + (a.maxWidth ? 1 : 0) - g;
    }), ((d = c[0]) == null ? void 0 : d[0]) || Object.keys(e)[0] || "desktop";
  }, [t, e, r]), l = J(() => e[i], [e, i]), p = J(() => (l == null ? void 0 : l.type) || "grid", [l]), h = V((c) => {
    if (c && !e[c]) {
      console.warn(`Mode "${c}" not found in configuration`);
      return;
    }
    n(c);
  }, [e]), y = V((c) => i === c, [i]), b = J(() => Object.keys(e), [e]), w = V((c) => {
    switch (p) {
      case "grid":
        return ["resizing", "dividers", "collapse"].includes(c);
      case "sidebar":
        return ["resizing", "collapse"].includes(c);
      case "tabs":
        return c === "tabs";
      case "dock":
        return c === "dock";
      case "stack":
      case "accordion":
        return !1;
      default:
        return !1;
    }
  }, [p]), x = J(() => {
    const c = Object.entries(e).map(([g, k]) => ({ name: g, ...k })).sort((g, k) => (g.breakpoint || 0) - (k.breakpoint || 0)), d = c.findIndex((g) => g.name === i), m = c[d + 1], a = c[d - 1];
    return {
      current: i,
      currentBreakpoint: (l == null ? void 0 : l.breakpoint) || 0,
      nextMode: m == null ? void 0 : m.name,
      nextBreakpoint: m == null ? void 0 : m.breakpoint,
      prevMode: a == null ? void 0 : a.name,
      prevBreakpoint: a == null ? void 0 : a.breakpoint,
      isSmallest: d === 0,
      isLargest: d === c.length - 1
    };
  }, [e, i, l]);
  return Q(() => {
    if (typeof window > "u") return;
    const c = () => s(), d = () => {
      setTimeout(s, 100);
    };
    return window.addEventListener("resize", c), window.addEventListener("orientationchange", d), () => {
      window.removeEventListener("resize", c), window.removeEventListener("orientationchange", d);
    };
  }, [s]), {
    // Current state
    viewport: t,
    activeMode: i,
    currentModeConfig: l,
    currentLayoutType: p,
    // Mode management
    setMode: h,
    isMode: y,
    availableModes: b,
    // Features and capabilities
    supportsFeature: w,
    breakpointInfo: x,
    // Utilities
    isForced: !!r,
    updateViewport: s
  };
}
const oe = "pretty-poly-grid-", he = {
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
        o && o.startsWith(oe) && e.push(o);
      }
      e.forEach((t) => localStorage.removeItem(t));
    } catch (e) {
      console.warn("Failed to clear localStorage:", e);
    }
  }
}, at = {
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
        o && o.startsWith(oe) && e.push(o);
      }
      e.forEach((t) => sessionStorage.removeItem(t));
    } catch (e) {
      console.warn("Failed to clear sessionStorage:", e);
    }
  }
}, ue = /* @__PURE__ */ new Map(), Te = {
  save: (e, t) => {
    ue.set(e, t);
  },
  load: (e) => ue.get(e) || null,
  remove: (e) => {
    ue.delete(e);
  },
  clear: () => {
    for (const e of ue.keys())
      e.startsWith(oe) && ue.delete(e);
  }
};
function Re(e) {
  switch (e) {
    case "localStorage":
      return typeof localStorage < "u" ? he : Te;
    case "sessionStorage":
      return typeof sessionStorage < "u" ? at : Te;
    case "memory":
    default:
      return Te;
  }
}
function Ge(e) {
  return `${oe}${e}`;
}
function dr(e, t, o = he) {
  const r = Ge(e), n = {
    blocks: t.blocks,
    activeMode: t.activeMode
    // Don't persist viewport or transient state like activeDivider
  };
  o.save(r, n);
}
function ur(e, t = he) {
  const o = Ge(e);
  return t.load(o);
}
function fr(e, t = he) {
  const o = Ge(e);
  t.remove(o);
}
function $r(e = he) {
  const t = {};
  try {
    if (e === he && typeof localStorage < "u")
      for (let o = 0; o < localStorage.length; o++) {
        const r = localStorage.key(o);
        if (r && r.startsWith(oe)) {
          const n = r.substring(oe.length), s = e.load(r);
          s && (t[n] = s);
        }
      }
    else if (e === at && typeof sessionStorage < "u")
      for (let o = 0; o < sessionStorage.length; o++) {
        const r = sessionStorage.key(o);
        if (r && r.startsWith(oe)) {
          const n = r.substring(oe.length), s = e.load(r);
          s && (t[n] = s);
        }
      }
    else if (e === Te) {
      for (const o of ue.keys())
        if (o.startsWith(oe)) {
          const r = o.substring(oe.length), n = e.load(o);
          n && (t[r] = n);
        }
    }
  } catch (o) {
    console.warn("Failed to get all grid states:", o);
  }
  return t;
}
function pr(e) {
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
function mr({
  gridId: e,
  enabled: t,
  state: o,
  onStateLoad: r,
  autoSave: n = !0,
  saveDelay: s = 500
}) {
  const i = fe(null), l = fe(), p = fe(""), h = fe(!1);
  Q(() => {
    if (!t) {
      i.current = null;
      return;
    }
    typeof t == "function" ? i.current = pr(t) : t === "localStorage" ? i.current = Re("localStorage") : t === "sessionStorage" ? i.current = Re("sessionStorage") : i.current = Re("localStorage");
  }, [t]), Q(() => {
    if (!i.current || !t || typeof t == "function" || h.current)
      return;
    const c = ur(e, i.current);
    c && (r == null || r(c), h.current = !0);
  }, [e, t]);
  const y = V((c = o) => {
    if (!i.current || !t)
      return;
    const d = JSON.stringify(c);
    if (d !== p.current)
      try {
        dr(e, c, i.current), p.current = d;
      } catch (m) {
        console.warn("Failed to save grid state:", m);
      }
  }, [e, t, o]), b = V((c = o) => {
    l.current && clearTimeout(l.current), l.current = setTimeout(() => {
      y(c);
    }, s);
  }, [y, s, o]), w = V(() => {
    if (!(!i.current || !t || typeof t == "function"))
      try {
        fr(e, i.current), p.current = "";
      } catch (c) {
        console.warn("Failed to clear grid state:", c);
      }
  }, [e, t]), x = V((c = o) => {
    l.current && clearTimeout(l.current), y(c);
  }, [y, o]);
  return Q(() => {
    if (!(!n || !t))
      return b(o), () => {
        l.current && clearTimeout(l.current);
      };
  }, [o, n, t, b]), Q(() => {
    if (!t || typeof t == "function")
      return;
    const c = () => {
      x();
    };
    return window.addEventListener("beforeunload", c), () => {
      window.removeEventListener("beforeunload", c);
    };
  }, [x, t]), Q(() => () => {
    l.current && clearTimeout(l.current);
  }, []), {
    saveState: x,
    debouncedSave: b,
    clearState: w,
    isEnabled: !!t
  };
}
function lt(e, t, o) {
  return Math.max(0, e - t - o);
}
function Dr(e, t) {
  return t > 0 ? e / t : 0;
}
function pe(e, t, o) {
  return Math.min(Math.max(e, t), o);
}
function Cr(e, t) {
  return t > 0 && e <= t;
}
function br(e, t, o, r, n) {
  if (o === 0)
    return e;
  const s = t <= o, i = r * 2.5;
  return s && e > i ? n : e < o && !s ? r : e;
}
function hr(e, t, o = 0, r = 1 / 0, n = !1) {
  const s = n ? -e : e, i = t + s;
  return pe(i, o, r);
}
function gr(e, t) {
  const o = [];
  return e.forEach((r) => {
    if (r.dividerPosition === "start" && o.push(`${r.dividerSize || 8}px`), r.sizeUnit === "auto")
      o.push("auto");
    else if (r.sizeUnit === "px") {
      const n = t ? `--${t}-${r.id}-size` : `--${r.id}-size`;
      o.push(`var(${n}, ${r.size}px)`);
    } else {
      const n = t ? `--${t}-${r.id}-size` : `--${r.id}-size`;
      o.push(`var(${n}, ${r.size}fr)`);
    }
    r.dividerPosition === "end" && o.push(`${r.dividerSize || 8}px`);
  }), o.join(" ");
}
function yr(e, t) {
  const o = [];
  return e.forEach((r) => {
    if (r.type === "divider")
      o.push(`${r.dividerSize || 8}px`);
    else if (r.sizeUnit === "auto")
      o.push("auto");
    else if (r.sizeUnit === "px") {
      const n = t ? `--${t}-${r.id}-size` : `--${r.id}-size`;
      o.push(`var(${n}, ${r.size || 1}px)`);
    } else {
      const n = t ? `--${t}-${r.id}-size` : `--${r.id}-size`;
      o.push(`var(${n}, ${r.size || 1}fr)`);
    }
  }), o.join(" ");
}
function Gr(e, t) {
  return e * t;
}
function vr(e, t) {
  return t > 0 ? e / t : 0;
}
function Ur(e, t, o) {
  return o === "start" ? e > 0 ? t[e - 1] : null : e < t.length - 1 ? t[e + 1] : null;
}
function Lr(e, t, o = 1e-3) {
  return Math.abs(e + t) <= o;
}
function xr(e, t) {
  switch (t.type) {
    case "RESIZE_BLOCK":
      const o = e.blocks[t.payload.blockId];
      return o ? {
        ...e,
        blocks: {
          ...e.blocks,
          [t.payload.blockId]: {
            ...o,
            defaultSize: t.payload.size,
            size: t.payload.size
          }
        }
      } : e;
    case "COLLAPSE_BLOCK":
      const r = e.blocks[t.payload.blockId];
      if (!r) return e;
      const n = r.collapseTo || 0;
      return {
        ...e,
        blocks: {
          ...e.blocks,
          [t.payload.blockId]: {
            ...r,
            // Preserve original size for expand
            originalDefaultSize: r.originalDefaultSize || r.defaultSize,
            defaultSize: n,
            size: n
          }
        }
      };
    case "EXPAND_BLOCK":
      const s = e.blocks[t.payload.blockId];
      if (!s) return e;
      const i = s.originalDefaultSize || s.defaultSize || 100;
      return {
        ...e,
        blocks: {
          ...e.blocks,
          [t.payload.blockId]: {
            ...s,
            defaultSize: i,
            size: i
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
      const l = Object.fromEntries(
        Object.entries(e.blocks).map(([p, h]) => [
          p,
          {
            ...h,
            size: h.defaultSize
            // Reset to original defaultSize stored somewhere, or current defaultSize
          }
        ])
      );
      return {
        ...e,
        blocks: l,
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
    default:
      return e;
  }
}
function wr(e, t, o) {
  return {
    blocks: e.reduce((n, s) => (n[s.id] = {
      ...s,
      size: s.defaultSize,
      originalDefaultSize: s.defaultSize
      // Store original size for expand functionality
    }, n), {}),
    activeMode: o,
    viewport: t,
    resize: {
      isDragging: !1,
      startPosition: { x: 0, y: 0 },
      initialSize: 0
    }
  };
}
const ct = St(null);
function kr({
  children: e,
  blocks: t,
  modes: o,
  gridId: r = "default",
  persist: n = !1,
  persistKey: s,
  onModeChange: i,
  onLayoutChange: l
}) {
  const { activeMode: p, viewport: h, setMode: y } = Ce(o), [b, w] = Et(
    xr,
    wr(t, h, p)
  );
  Q(() => {
    w({
      type: "UPDATE_VIEWPORT",
      payload: { viewport: h }
    });
  }, [h]), Q(() => {
    const a = b.activeMode;
    p !== a && (w({
      type: "SWITCH_MODE",
      payload: { mode: p }
    }), i == null || i(p, a));
  }, [p, b.activeMode, i]);
  const { saveState: x, clearState: c } = mr({
    gridId: s || r,
    enabled: n,
    state: b,
    onStateLoad: (a) => {
      w({ type: "LOAD_STATE", payload: { state: a } });
    },
    autoSave: !0
  }), d = (a) => "touches" in a ? { x: a.touches[0].clientX, y: a.touches[0].clientY } : { x: a.clientX, y: a.clientY }, m = J(
    () => ({
      gridId: r,
      state: {
        ...b,
        activeMode: p,
        viewport: h
      },
      dispatch: w,
      // Grid operations
      resizeBlock: (a, g) => {
        w({
          type: "RESIZE_BLOCK",
          payload: { blockId: a, size: g }
        });
      },
      collapseBlock: (a) => {
        w({
          type: "COLLAPSE_BLOCK",
          payload: { blockId: a }
        });
      },
      expandBlock: (a) => {
        w({
          type: "EXPAND_BLOCK",
          payload: { blockId: a }
        });
      },
      switchMode: (a) => {
        y(a);
      },
      // Resize operations
      startResize: (a, g, k) => {
        const E = b.blocks[a];
        if (!E) return;
        const T = d(k), P = Object.values(b.blocks).filter(
          (H) => H.parentId === E.parentId
        ).sort(
          (H, G) => (H.order || 0) - (G.order || 0)
        ), f = P.findIndex((H) => H.id === a);
        let R = null;
        if (E.dividerPosition === "start" && f > 0 ? R = P[f - 1] : E.dividerPosition === "end" && f < P.length - 1 && (R = P[f + 1]), R && E.sizeUnit === "fr" && R.sizeUnit === "px") {
          console.warn(
            `Cannot resize fr block "${a}" when adjacent to px block "${R.id}". Fr blocks fill available space and should not be directly resized. Consider resizing the px block instead.`
          );
          return;
        }
        w({
          type: "START_RESIZE",
          payload: {
            blockId: a,
            dividerId: g,
            startPosition: T,
            initialSize: E.defaultSize || 0,
            initialAdjacentBlockId: R == null ? void 0 : R.id,
            initialAdjacentSize: R ? R.originalDefaultSize || R.defaultSize || 0 : void 0
          }
        }), document.body.style.userSelect = "none";
        const B = E.parentId ? b.blocks[E.parentId] : null, K = (B == null ? void 0 : B.direction) || "row";
        document.body.style.cursor = K === "row" ? "col-resize" : "row-resize";
      },
      updateResize: (a) => {
        if (!b.resize.isDragging || !b.resize.activeBlockId) return;
        const g = b.blocks[b.resize.activeBlockId];
        if (!g) return;
        const k = d(a), E = g.parentId ? b.blocks[g.parentId] : null, T = (E == null ? void 0 : E.direction) || "row", j = T === "row" ? k.x - b.resize.startPosition.x : k.y - b.resize.startPosition.y;
        if (g.sizeUnit === "px") {
          const P = document.querySelector(`[data-block-id="${b.resize.activeDividerId}"]`), R = ((P == null ? void 0 : P.getAttribute("data-block-divider-position")) || "end") === "start", B = hr(
            j,
            b.resize.initialSize,
            g.minSize,
            g.maxSize,
            R
          );
          w({
            type: "RESIZE_BLOCK",
            payload: { blockId: b.resize.activeBlockId, size: B }
          });
        } else if (g.sizeUnit === "fr") {
          const P = Object.values(b.blocks).filter(
            (N) => N.parentId === g.parentId
          ), f = P.filter((N) => N.sizeUnit === "fr"), R = g.parentId ? document.querySelector(`[data-block-id="${g.parentId}"]`) : document.querySelector('[data-block-id="root"]'), B = R ? T === "row" ? R.clientWidth : R.clientHeight : 1200, K = P.filter((N) => N.sizeUnit === "px").reduce((N, $) => {
            const Z = document.querySelector(`[data-block-id="${$.id}"]`);
            if (!Z) return N;
            const C = T === "row" ? Z.clientWidth : Z.clientHeight;
            return N + C;
          }, 0), G = Array.from(
            (R == null ? void 0 : R.querySelectorAll('[data-block-type="divider"]')) || []
          ).reduce((N, $) => {
            if (!($ instanceof HTMLElement)) return N;
            const Z = T === "row" ? $.clientWidth : $.clientHeight;
            return N + Z;
          }, 0), D = lt(B, K, G), W = f.reduce(
            (N, $) => N + ($.defaultSize || 1),
            0
          ), Y = W > 0 ? D / W : 0;
          if (Y === 0) return;
          const v = vr(j, Y), L = f.sort(
            (N, $) => (N.order || 0) - ($.order || 0)
          ), u = L.findIndex(
            (N) => N.id === b.resize.activeBlockId
          ), I = document.querySelector(`[data-block-id="${b.resize.activeDividerId}"]`), _ = (I == null ? void 0 : I.getAttribute("data-block-divider-position")) || "end";
          let A = null;
          if (_ === "start" && u > 0 ? A = L[u - 1] : _ === "end" && u < L.length - 1 && (A = L[u + 1]), A) {
            let N, $;
            N = v, $ = -v;
            const Z = 0.1, C = Math.max(
              Z,
              b.resize.initialSize + N
            ), F = Math.max(
              Z,
              (b.resize.initialAdjacentSize || 1) + $
            ), X = C - b.resize.initialSize, re = F - (b.resize.initialAdjacentSize || 1);
            Math.abs(X + re) < 0.01 && (w({
              type: "RESIZE_BLOCK",
              payload: {
                blockId: b.resize.activeBlockId,
                size: C
              }
            }), w({
              type: "RESIZE_BLOCK",
              payload: { blockId: A.id, size: F }
            }));
          }
        }
      },
      endResize: () => {
        w({ type: "END_RESIZE" }), document.body.style.userSelect = "", document.body.style.cursor = "";
      },
      // Persistence
      persistState: () => x(b),
      resetState: () => {
        w({ type: "RESET_STATE" }), c();
      }
    }),
    [r, b, p, h, x, c, y]
  );
  return Q(() => {
    if (l) {
      const a = Object.values(b.blocks);
      l(a);
    }
  }, [b.blocks, l]), /* @__PURE__ */ M.jsx(ct.Provider, { value: m, children: e });
}
function Se() {
  const e = zt(ct);
  if (!e)
    throw new Error("useGridContext must be used within a GridProvider");
  return e;
}
function dt() {
  const { state: e } = Se();
  return e;
}
function Sr() {
  const {
    resizeBlock: e,
    collapseBlock: t,
    expandBlock: o,
    switchMode: r,
    persistState: n,
    resetState: s
  } = Se();
  return {
    resizeBlock: e,
    collapseBlock: t,
    expandBlock: o,
    switchMode: r,
    persistState: n,
    resetState: s
  };
}
function ut() {
  const { startResize: e, updateResize: t, endResize: o, state: r } = Se();
  return {
    startResize: e,
    updateResize: t,
    endResize: o,
    isDragging: r.resize.isDragging,
    activeBlockId: r.resize.activeBlockId,
    activeDividerId: r.resize.activeDividerId
  };
}
function zr({
  blocks: e,
  containerRef: t,
  onSizeChange: o,
  direction: r = "row"
}) {
  const {
    startResize: n,
    updateResize: s,
    endResize: i,
    isDragging: l,
    activeBlockId: p,
    activeDividerId: h
  } = ut(), y = V(() => {
    if (!t.current) return 0;
    const m = t.current.getBoundingClientRect();
    return r === "column" ? m.width : m.height;
  }, [r]), b = V(() => {
    const m = y();
    if (m === 0) return 0;
    const a = e.filter((T) => T.sizeUnit === "px").reduce((T, j) => T + (j.defaultSize || 0), 0), g = e.filter((T) => T.dividerPosition !== "none").reduce((T, j) => T + (j.dividerSize || 8), 0), k = e.filter((T) => T.sizeUnit === "fr").reduce((T, j) => T + (j.defaultSize || 1), 0), E = lt(m, a, g);
    return k > 0 ? E / k : 0;
  }, [e, y]), w = V((m) => {
    const a = e.find((g) => g.id === m);
    a && a.defaultSize !== void 0 && (o == null || o(m, a.defaultSize));
  }, [e, o]), x = V((m) => {
    const a = e.find((g) => g.id === m);
    a && a.collapseTo !== void 0 && (o == null || o(m, a.collapseTo));
  }, [e, o]), c = V((m) => {
    const a = e.find((g) => g.id === m);
    a && a.defaultSize !== void 0 && (o == null || o(m, a.defaultSize));
  }, [e, o]), d = V((m) => {
    const a = e.find((g) => g.id === m);
    return !a || !a.collapseAt ? !1 : (a.defaultSize || 0) <= a.collapseAt;
  }, [e]);
  return Q(() => {
    const m = (E) => {
      E.preventDefault(), s(E);
    }, a = (E) => {
      E.preventDefault(), s(E);
    }, g = () => {
      i();
    }, k = () => {
      i();
    };
    if (l)
      return document.addEventListener("mousemove", m), document.addEventListener("mouseup", g), document.addEventListener("touchmove", a), document.addEventListener("touchend", k), () => {
        document.removeEventListener("mousemove", m), document.removeEventListener("mouseup", g), document.removeEventListener("touchmove", a), document.removeEventListener("touchend", k);
      };
  }, [l, s, i]), {
    // State
    isDragging: l,
    activeBlockId: p,
    activeDividerId: h,
    // Actions
    startResize: n,
    resetBlock: w,
    collapseBlock: x,
    expandBlock: c,
    // Utilities
    isBlockCollapsed: d,
    getContainerSize: y,
    calculatePixelsPerFr: b
  };
}
function Er({
  enabled: e = !0,
  blocks: t,
  onResizeBlock: o,
  onFocusBlock: r,
  onCollapseBlock: n,
  onExpandBlock: s,
  containerRef: i,
  stepSize: l = 10,
  largeStepSize: p = 50
}) {
  const h = V(() => {
    const d = document.activeElement;
    return (d == null ? void 0 : d.dataset.blockType) === "block" || (d == null ? void 0 : d.dataset.blockType) === "group" ? d : (d == null ? void 0 : d.closest('[data-block-type="block"], [data-block-type="group"]')) || null;
  }, []), y = V((d) => {
    if (!d) return null;
    const m = d.dataset.blockId;
    return t.find((a) => a.id === m) || null;
  }, [t]), b = V((d, m) => {
    if (!(i != null && i.current)) return null;
    const a = Array.from(
      i.current.querySelectorAll('[data-block-type="block"], [data-block-type="group"]')
    ), g = d.getBoundingClientRect(), k = {
      x: g.left + g.width / 2,
      y: g.top + g.height / 2
    };
    let E = a.filter((T) => {
      if (T === d) return !1;
      const j = T.getBoundingClientRect(), P = {
        x: j.left + j.width / 2,
        y: j.top + j.height / 2
      };
      switch (m) {
        case "up":
          return P.y < k.y;
        case "down":
          return P.y > k.y;
        case "left":
          return P.x < k.x;
        case "right":
          return P.x > k.x;
        default:
          return !1;
      }
    });
    return E.length === 0 ? null : (E.sort((T, j) => {
      const P = T.getBoundingClientRect(), f = j.getBoundingClientRect(), R = {
        x: P.left + P.width / 2,
        y: P.top + P.height / 2
      }, B = {
        x: f.left + f.width / 2,
        y: f.top + f.height / 2
      }, K = Math.sqrt(
        Math.pow(R.x - k.x, 2) + Math.pow(R.y - k.y, 2)
      ), H = Math.sqrt(
        Math.pow(B.x - k.x, 2) + Math.pow(B.y - k.y, 2)
      );
      return K - H;
    }), E[0]);
  }, [i]), w = V((d) => {
    if (!e) return;
    const m = h();
    if (!m) return;
    const a = y(m);
    if (!a) return;
    const g = d.ctrlKey || d.metaKey, k = d.shiftKey, E = k ? p : l;
    if (!g && !k)
      switch (d.key) {
        case "ArrowUp":
          d.preventDefault();
          const T = b(m, "up");
          T && (T.focus(), r == null || r(T.dataset.blockId || ""));
          break;
        case "ArrowDown":
          d.preventDefault();
          const j = b(m, "down");
          j && (j.focus(), r == null || r(j.dataset.blockId || ""));
          break;
        case "ArrowLeft":
          d.preventDefault();
          const P = b(m, "left");
          P && (P.focus(), r == null || r(P.dataset.blockId || ""));
          break;
        case "ArrowRight":
          d.preventDefault();
          const f = b(m, "right");
          f && (f.focus(), r == null || r(f.dataset.blockId || ""));
          break;
        case "Enter":
        case " ":
          d.preventDefault(), a.collapsible && (s == null || s(a.id));
          break;
        case "Escape":
          d.preventDefault(), m.blur();
          break;
      }
    if (g && o)
      switch (d.key) {
        case "ArrowUp":
          d.preventDefault(), o(a.id, -E);
          break;
        case "ArrowDown":
          d.preventDefault(), o(a.id, E);
          break;
        case "ArrowLeft":
          d.preventDefault(), o(a.id, -E);
          break;
        case "ArrowRight":
          d.preventDefault(), o(a.id, E);
          break;
      }
    if (g)
      switch (d.key) {
        case "Minus":
        case "-":
          d.preventDefault(), n == null || n(a.id);
          break;
        case "Plus":
        case "+":
        case "=":
          d.preventDefault(), s == null || s(a.id);
          break;
      }
  }, [
    e,
    h,
    y,
    b,
    o,
    r,
    n,
    s,
    l,
    p
  ]), x = V((d) => {
    if (!(i != null && i.current)) return;
    const m = i.current.querySelector(
      `[data-block-id="${d}"]`
    );
    m && (m.focus(), r == null || r(d));
  }, [i, r]), c = V(() => i != null && i.current ? Array.from(
    i.current.querySelectorAll(
      '[data-block-type="block"][tabindex], [data-block-type="group"][tabindex]'
    )
  ) : [], [i]);
  return Q(() => {
    if (e)
      return document.addEventListener("keydown", w), () => {
        document.removeEventListener("keydown", w);
      };
  }, [w, e]), {
    focusBlock: x,
    getFocusableBlocks: c,
    getFocusedBlock: h,
    isEnabled: e
  };
}
function Ar(e, t) {
  if (!t)
    return { targetId: e.id, position: "end" };
  const o = e.sizeUnit || "fr", r = t.sizeUnit || "fr";
  return o === "fr" && r === "px" ? { targetId: t.id, position: "start" } : o === "px" && r === "fr" ? { targetId: e.id, position: "end" } : { targetId: e.id, position: "end" };
}
function Tr(e, t, o, r, n) {
  return n || o === "none" ? !1 : o === "manual" ? !!r : o === "auto" ? t ? !1 : !n : !1;
}
function Ir(e, t, o, r) {
  var p;
  const { targetId: n, position: s } = Ar(e, t), i = {
    targetId: n,
    position: s,
    size: (r == null ? void 0 : r.defaultSize) || 8,
    className: r == null ? void 0 : r.defaultClassName,
    handle: r == null ? void 0 : r.defaultHandle
  }, l = (p = r == null ? void 0 : r.overrides) == null ? void 0 : p[e.id];
  if (l && Object.assign(i, l), typeof o == "object" && o !== null) {
    const h = o;
    Object.assign(i, h), h.position && h.position !== "auto" && (h.position === "start" ? (i.targetId = e.id, i.position = "start") : h.position === "end" && (i.targetId = e.id, i.position = "end"));
  }
  return i;
}
function Ne(e) {
  const t = e.props;
  return t.id ? {
    id: t.id,
    divider: t.divider,
    noDivider: t.noDivider
  } : null;
}
function jr(e, t, o) {
  return Ke.createElement(o, {
    key: `auto-divider-${t}`,
    targetId: e.targetId,
    position: e.position,
    size: e.size,
    className: e.className,
    handle: e.handle,
    "aria-label": e["aria-label"]
  });
}
function ft(e, t, o, r, n) {
  if (t !== "auto" || !n) {
    const h = be.toArray(e).filter(le).map((y) => {
      const b = Ne(y);
      if (!b) return null;
      const w = r == null ? void 0 : r[b.id];
      return {
        id: b.id,
        type: "block",
        sizeUnit: (w == null ? void 0 : w.sizeUnit) || "fr",
        size: (w == null ? void 0 : w.defaultSize) || 1
      };
    }).filter((y) => y !== null);
    return {
      children: e,
      templateItems: h
    };
  }
  const s = be.toArray(e), i = [], l = [];
  return s.forEach((p, h) => {
    if (!le(p)) {
      i.push(p);
      return;
    }
    const y = Ne(p);
    if (!y) {
      i.push(p);
      return;
    }
    i.push(p);
    const b = {
      id: y.id,
      type: "block",
      sizeUnit: "fr",
      defaultSize: 1
    };
    r != null && r[y.id] && Object.assign(b, r[y.id]), l.push({
      id: b.id,
      type: "block",
      sizeUnit: b.sizeUnit || "fr",
      size: b.defaultSize || 1
    });
    const w = h === s.length - 1, x = h < s.length - 1 ? s[h + 1] : null;
    let c = null;
    if (le(x)) {
      const a = Ne(x);
      a && (c = { id: a.id });
    }
    const d = c ? {
      id: c.id,
      type: "block",
      sizeUnit: "fr",
      defaultSize: 1
    } : null;
    if (d && (r != null && r[d.id]) && Object.assign(d, r[d.id]), Tr(
      b,
      w,
      t,
      y.divider,
      y.noDivider
    )) {
      const a = Ir(
        b,
        d,
        y.divider,
        o
      ), g = jr(
        a,
        `${y.id}-${h}`,
        n
      );
      i.push(g), l.push({
        id: `${y.id}-divider-${h}`,
        type: "divider",
        dividerSize: a.size
      });
    }
  }), {
    children: i,
    templateItems: l
  };
}
function pt(e, t, o, r, n) {
  return t !== "auto" ? e : be.map(e, (s) => {
    var h, y;
    if (!le(s))
      return s;
    const i = ((h = s.type) == null ? void 0 : h.displayName) || ((y = s.type) == null ? void 0 : y.name), l = i === "Block.Group" || i === "BlockGroup", p = i === "Block";
    if (l) {
      const b = ft(
        s.props.children,
        t,
        o,
        r,
        n
      );
      return Be(s, {
        ...s.props,
        children: b.children
      });
    } else if (p && be.toArray(s.props.children).some((w) => {
      var c, d;
      if (!le(w)) return !1;
      const x = ((c = w.type) == null ? void 0 : c.displayName) || ((d = w.type) == null ? void 0 : d.name);
      return x === "Block.Group" || x === "BlockGroup";
    })) {
      const w = pt(
        s.props.children,
        t,
        o,
        r,
        n
      );
      return Be(s, {
        ...s.props,
        children: w
      });
    }
    return s;
  });
}
const Rr = ({
  className: e,
  direction: t
}) => /* @__PURE__ */ M.jsx(
  "div",
  {
    className: te(
      "pretty-poly-divider-handle",
      t === "column" ? "w-[1px] h-full" : "w-full h-[1px]",
      "bg-border transition-colors",
      e
    )
  }
), $e = ee(
  ({
    targetId: e,
    position: t,
    size: o = 8,
    className: r,
    handle: n,
    "aria-label": s
  }, i) => {
    const l = fe(null), p = i || l, h = dt(), { startResize: y, isDragging: b, activeDividerId: w } = ut(), { supportsFeature: x } = Ce(), [c, d] = me(""), [m, a] = me("end"), g = V(() => {
      const G = l.current;
      if (!G) return;
      if (e && t && t !== "auto" && t !== "none") {
        e !== c && d(e), t !== m && a(t);
        return;
      }
      let U = e, D = t === "start" || t === "end" ? t : "end";
      if (e) {
        const W = document.querySelector(`[data-block-id="${e}"]`);
        W && (D = W.compareDocumentPosition(G) & Node.DOCUMENT_POSITION_FOLLOWING ? "start" : "end");
      } else {
        const W = G.previousElementSibling, Y = G.nextElementSibling, v = W == null ? void 0 : W.getAttribute("data-block-id"), L = Y == null ? void 0 : Y.getAttribute("data-block-id"), u = v ? h.blocks[v] : null, I = L ? h.blocks[L] : null;
        if (u && I)
          u.sizeUnit === "fr" && I.sizeUnit === "px" ? (U = L, D = "start") : (u.sizeUnit === "px" && I.sizeUnit, U = v, D = "end");
        else if (u)
          if (u.type === "group") {
            const _ = Object.values(h.blocks).filter((A) => A.parentId === v).sort((A, N) => (A.order || 0) - (N.order || 0)).filter((A) => A.type === "block" && (A.sizeUnit === "px" || A.sizeUnit === "fr"));
            _.length > 0 ? (U = _[_.length - 1].id, D = "end") : (U = v, D = "end");
          } else
            U = v, D = "end";
        else if (I)
          if (I.type === "group") {
            const _ = Object.values(h.blocks).filter((A) => A.parentId === L).sort((A, N) => (A.order || 0) - (N.order || 0)).filter((A) => A.type === "block" && (A.sizeUnit === "px" || A.sizeUnit === "fr"));
            _.length > 0 ? (U = _[0].id, D = "start") : (U = L, D = "start");
          } else
            U = L, D = "start";
      }
      U && U !== c && d(U), D !== m && a(D);
    }, [e, t, c, m, h.blocks]);
    Q(() => {
      g();
    }, [g]), Q(() => {
      g();
    }, [h.blocks]);
    const k = c ? h.blocks[c] : null;
    if (!k && c && console.warn(`Divider target block "${c}" not found`), !x("resizing"))
      return null;
    const T = k != null && k.parentId ? h.blocks[k.parentId] : null, j = ((T == null ? void 0 : T.type) === "group" ? T.direction : void 0) || "row", P = j === "column", f = b && c && w === `${c}-${m}-divider`, R = P ? "row-resize" : "col-resize", B = V((G) => {
      if (!c) return;
      G.preventDefault();
      const U = `${c}-${m}-divider`;
      y(c, U, G);
    }, [c, m, y]), K = V(() => {
      k == null || k.defaultSize;
    }, [k]), H = n || Rr;
    return /* @__PURE__ */ M.jsx(
      "div",
      {
        ref: p,
        className: te(
          "pretty-poly-divider",
          "flex items-center justify-center",
          "select-none touch-none transition-colors",
          "hover:bg-accent focus-visible:outline-2 focus-visible:outline-ring focus-visible:bg-accent",
          P ? "cursor-row-resize" : "cursor-col-resize",
          f && "pretty-poly-divider--dragging",
          m === "start" && "pretty-poly-divider--start",
          m === "end" && "pretty-poly-divider--end",
          r
        ),
        "data-block-id": c ? `${c}-${m}-divider` : "loading-divider",
        "data-block-type": "divider",
        "data-block-target": c || "",
        "data-block-direction": j,
        "data-block-divider-position": m,
        style: {
          [P ? "height" : "width"]: `${o}px`,
          cursor: R
        },
        role: "separator",
        "aria-label": s || `Resize ${c || "block"}`,
        "aria-valuenow": k == null ? void 0 : k.defaultSize,
        "aria-valuemin": k == null ? void 0 : k.minSize,
        "aria-valuemax": k == null ? void 0 : k.maxSize,
        tabIndex: 0,
        onMouseDown: B,
        onTouchStart: B,
        onDoubleClick: K,
        onKeyDown: (G) => {
          (G.key === "ArrowLeft" || G.key === "ArrowRight" || G.key === "ArrowUp" || G.key === "ArrowDown") && G.preventDefault();
        },
        children: /* @__PURE__ */ M.jsx(
          H,
          {
            className: te(
              "transition-colors hover:bg-foreground/20",
              f && "bg-foreground/30"
            ),
            direction: j
          }
        )
      }
    );
  }
);
$e.displayName = "Divider";
const mt = ee(
  ({ children: e, className: t, dividers: o = "manual", dividerConfig: r, "aria-label": n }, s) => {
    const i = fe(null), { state: l, resizeBlock: p, collapseBlock: h, expandBlock: y, switchMode: b, persistState: w, resetState: x } = Se(), c = l.resize.isDragging;
    At(s, () => ({
      resizeBlock: p,
      collapseBlock: h,
      expandBlock: y,
      switchMode: b,
      persistState: w,
      resetState: x,
      getState: () => l
    }), [p, h, y, b, w, x, l]);
    const d = J(() => Object.values(l.blocks).sort((T, j) => (T.order || 0) - (j.order || 0)), [l.blocks]), m = J(() => d.find((E) => !E.parentId), [d]);
    zr({
      blocks: d,
      containerRef: i,
      onSizeChange: p,
      direction: (m == null ? void 0 : m.direction) || "row"
    }), Er({
      enabled: !0,
      blocks: d,
      containerRef: i,
      onResizeBlock: (E, T) => {
        const j = l.blocks[E];
        if (j) {
          const P = j.defaultSize || 0, f = Math.max(0, P + T);
          p(E, f);
        }
      },
      onCollapseBlock: h,
      onExpandBlock: y
    });
    const a = J(() => {
      const E = ft(
        e,
        o,
        r,
        l.blocks,
        $e
      );
      return o === "auto" ? {
        children: pt(
          E.children,
          o,
          r,
          l.blocks,
          $e
        ),
        templateItems: E.templateItems
      } : E;
    }, [e, o, r, l.blocks]), { gridStyles: g, cssVariables: k } = J(() => {
      if (!m)
        return { gridStyles: "", cssVariables: "" };
      const E = d.reduce((f, R) => {
        if (R.id === "root") return f;
        const B = R.parentId || "root";
        return f[B] || (f[B] = []), f[B].push(R), f;
      }, {}), T = d.filter((f) => f.defaultSize !== void 0).map((f) => {
        const R = f.sizeUnit === "px" ? `${f.defaultSize}px` : `${f.defaultSize}fr`;
        return `--${m.id}-${f.id}-size: ${R};`;
      }).join(`
  `), j = (f, R = /* @__PURE__ */ new Set()) => {
        if (R.has(f))
          return console.warn(`Circular reference detected for parent: ${f}`), "";
        const B = new Set(R);
        B.add(f);
        const K = E[f] || [];
        if (K.length === 0) return "";
        const H = [...K].sort((v, L) => (v.order || 0) - (L.order || 0)), G = d.find((v) => v.id === f) || m, U = (G == null ? void 0 : G.direction) || "row";
        let D;
        if (o === "auto" && f === m.id)
          D = yr(a.templateItems, m.id);
        else {
          const v = H.map((L) => ({
            id: L.id,
            sizeUnit: L.sizeUnit || "fr",
            size: L.defaultSize || 1,
            dividerPosition: L.dividerPosition === "auto" ? "none" : L.dividerPosition || "none",
            dividerSize: L.dividerSize || (r == null ? void 0 : r.defaultSize) || 8
          }));
          D = gr(v, m.id);
        }
        const W = U === "column" ? "grid-template-rows" : "grid-template-columns";
        let Y = `
[data-grid-id="${m.id}"][data-block-id="${f}"] {
  display: grid;
  ${W}: ${D};
  ${U === "column" ? "grid-template-columns: 1fr;" : "grid-template-rows: 1fr;"}
}`;
        for (const v of H)
          v.type === "group" && (Y += j(v.id, B));
        return Y;
      }, P = j("root");
      return {
        cssVariables: `:root {
  ${T}
}`,
        gridStyles: P
      };
    }, [d, m, a, o, r]);
    return m ? /* @__PURE__ */ M.jsxs(M.Fragment, { children: [
      /* @__PURE__ */ M.jsxs("style", { type: "text/css", children: [
        k,
        g
      ] }),
      /* @__PURE__ */ M.jsx(
        "div",
        {
          ref: i,
          className: te(
            "pretty-poly-grid relative overflow-hidden",
            c && "pretty-poly-grid--dragging",
            t
          ),
          "data-grid-id": m.id,
          "data-block-id": m.id,
          "data-active-mode": l.activeMode,
          "aria-label": n || "Resizable grid layout",
          role: "application",
          children: a.children
        }
      )
    ] }) : (console.warn("No root block found in grid configuration"), null);
  }
);
mt.displayName = "GridInternal";
const Nr = ee(
  ({
    children: e,
    defaultLayout: t = [],
    modes: o,
    persist: r = !1,
    persistKey: n,
    onLayoutChange: s,
    onModeChange: i,
    className: l,
    dividers: p = "manual",
    dividerConfig: h,
    "aria-label": y
  }, b) => {
    const w = t.find((c) => !c.parentId), x = (w == null ? void 0 : w.id) || "root";
    return /* @__PURE__ */ M.jsx(
      kr,
      {
        blocks: t,
        modes: o,
        gridId: x,
        persist: r,
        persistKey: n,
        onLayoutChange: s,
        onModeChange: i,
        children: /* @__PURE__ */ M.jsx(
          mt,
          {
            ref: b,
            className: l,
            dividers: p,
            dividerConfig: h,
            "aria-label": y,
            children: e
          }
        )
      }
    );
  }
);
Nr.displayName = "Grid";
const bt = ee(
  ({ scrollMode: e = "vertical", className: t, children: o, "aria-label": r }, n) => {
    const s = {
      vertical: "overflow-y-auto overflow-x-hidden",
      horizontal: "overflow-x-auto overflow-y-hidden",
      both: "overflow-auto",
      none: "overflow-hidden"
    };
    return /* @__PURE__ */ M.jsx(
      "div",
      {
        ref: n,
        className: te(
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
const ht = ee(
  ({ position: e = "top", className: t, children: o, "aria-label": r }, n) => /* @__PURE__ */ M.jsx(
    "div",
    {
      ref: n,
      className: te(
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
ht.displayName = "Block.Header";
const gt = ee(
  ({ className: e, children: t, "aria-label": o }, r) => /* @__PURE__ */ M.jsx(
    "div",
    {
      ref: r,
      className: te(
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
gt.displayName = "Block.Footer";
const yt = ee(
  ({ left: e, center: t, right: o, className: r, "aria-label": n }, s) => /* @__PURE__ */ M.jsxs(
    "div",
    {
      ref: s,
      className: te(
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
        /* @__PURE__ */ M.jsx("div", { className: "flex items-center space-x-2 flex-shrink-0", children: e }),
        /* @__PURE__ */ M.jsx("div", { className: "flex items-center justify-center flex-1 px-4", children: t }),
        /* @__PURE__ */ M.jsx("div", { className: "flex items-center space-x-2 flex-shrink-0", children: o })
      ]
    }
  )
);
yt.displayName = "Block.Toolbar";
const vt = ee(
  ({
    tabs: e,
    activeTab: t,
    onTabChange: o,
    onTabClose: r,
    className: n,
    "aria-label": s,
    allowOverflow: i = !0
  }, l) => {
    const [p, h] = me(null), y = (x, c) => {
      c.preventDefault(), x.disabled || o(x.id);
    }, b = (x, c) => {
      c.preventDefault(), c.stopPropagation(), r && x.closable && r(x.id);
    }, w = (x, c) => {
      (c.key === "Enter" || c.key === " ") && (c.preventDefault(), x.disabled || o(x.id));
    };
    return /* @__PURE__ */ M.jsx(
      "div",
      {
        ref: l,
        className: ie(
          "pretty-poly-block-tabs",
          "flex items-center",
          "border-b border-gray-200",
          "bg-white",
          i ? "overflow-x-auto" : "overflow-x-hidden",
          n
        ),
        role: "tablist",
        "aria-label": s || "Block tabs",
        children: /* @__PURE__ */ M.jsx("div", { className: "flex items-center min-w-0", children: e.map((x) => {
          const c = x.id === t, d = p === x.id, m = x.icon;
          return /* @__PURE__ */ M.jsxs(
            "div",
            {
              className: ie(
                "flex items-center space-x-2 px-3 py-2 text-sm cursor-pointer",
                "border-b-2 transition-colors duration-150",
                "min-w-0 flex-shrink-0",
                // Prevent shrinking
                c ? "border-blue-500 text-blue-600 bg-blue-50" : "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50",
                x.disabled && "opacity-50 cursor-not-allowed",
                !i && "flex-1"
                // Equal width tabs when overflow disabled
              ),
              role: "tab",
              "aria-selected": c,
              "aria-disabled": x.disabled,
              tabIndex: x.disabled ? -1 : 0,
              onClick: (a) => y(x, a),
              onKeyDown: (a) => w(x, a),
              onMouseEnter: () => h(x.id),
              onMouseLeave: () => h(null),
              "data-tab-id": x.id,
              children: [
                m && /* @__PURE__ */ M.jsx(m, { className: "w-4 h-4 flex-shrink-0" }),
                /* @__PURE__ */ M.jsx("span", { className: "truncate min-w-0", children: x.label }),
                x.closable && r && /* @__PURE__ */ M.jsx(
                  "button",
                  {
                    className: ie(
                      "flex-shrink-0 w-4 h-4 rounded-sm hover:bg-gray-200",
                      "flex items-center justify-center",
                      "transition-colors duration-150",
                      d || c ? "opacity-100" : "opacity-0"
                    ),
                    onClick: (a) => b(x, a),
                    "aria-label": `Close ${x.label} tab`,
                    tabIndex: -1,
                    children: /* @__PURE__ */ M.jsx(
                      "svg",
                      {
                        className: "w-3 h-3",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /* @__PURE__ */ M.jsx(
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
            x.id
          );
        }) })
      }
    );
  }
);
vt.displayName = "Block.Tabs";
const Ue = ee(
  ({ position: e = "left", width: t = 48, className: o, children: r, "aria-label": n }, s) => /* @__PURE__ */ M.jsx(
    "div",
    {
      ref: s,
      className: ie(
        "pretty-poly-block-sidebar",
        "flex flex-col",
        "flex-shrink-0",
        // Don't shrink
        "h-full",
        // Full height
        "bg-gray-800",
        // VS Code-style dark background
        "border-gray-700",
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
Ue.displayName = "Block.Sidebar";
const xt = ee(
  ({
    icon: e,
    tooltip: t,
    active: o = !1,
    disabled: r = !1,
    badge: n,
    onClick: s,
    className: i,
    "aria-label": l
  }, p) => {
    const [h, y] = me(!1), b = () => {
      t && !r && y(!0);
    }, w = () => {
      y(!1);
    }, x = () => {
      !r && s && s();
    }, c = (d) => {
      (d.key === "Enter" || d.key === " ") && (d.preventDefault(), x());
    };
    return /* @__PURE__ */ M.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ M.jsxs(
        "button",
        {
          ref: p,
          className: ie(
            "pretty-poly-sidebar-item",
            "w-full h-12",
            // Fixed height for consistency
            "flex items-center justify-center",
            "relative",
            "transition-colors duration-150",
            "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset",
            // Active state
            o && "bg-gray-700 border-r-2 border-blue-500",
            // Hover state (when not disabled)
            !r && "hover:bg-gray-700",
            // Disabled state
            r && "opacity-50 cursor-not-allowed",
            // Default cursor
            !r && "cursor-pointer",
            i
          ),
          disabled: r,
          onClick: x,
          onKeyDown: c,
          onMouseEnter: b,
          onMouseLeave: w,
          "aria-label": l || t,
          "aria-pressed": o,
          tabIndex: r ? -1 : 0,
          children: [
            /* @__PURE__ */ M.jsx(
              e,
              {
                className: ie(
                  "w-5 h-5",
                  o ? "text-white" : "text-gray-400",
                  !r && "group-hover:text-white"
                )
              }
            ),
            n && /* @__PURE__ */ M.jsx("div", { className: "absolute -top-1 -right-1 min-w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center px-1", children: typeof n == "number" && n > 99 ? "99+" : n }),
            o && /* @__PURE__ */ M.jsx("div", { className: "absolute left-0 top-1/2 transform -translate-y-1/2 w-0.5 h-6 bg-blue-500" })
          ]
        }
      ),
      h && t && /* @__PURE__ */ M.jsx("div", { className: "absolute left-full ml-2 top-1/2 transform -translate-y-1/2 z-50", children: /* @__PURE__ */ M.jsxs("div", { className: "bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap", children: [
        t,
        /* @__PURE__ */ M.jsx("div", { className: "absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-900" })
      ] }) })
    ] });
  }
);
xt.displayName = "Block.Sidebar.Item";
const wt = ee(
  ({ className: e }, t) => /* @__PURE__ */ M.jsx(
    "div",
    {
      ref: t,
      className: ie(
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
wt.displayName = "Block.Sidebar.Spacer";
function Pr(e, t) {
  const o = e[t] || {}, { id: r, type: n, direction: s, children: i, className: l, divider: p, noDivider: h, "aria-label": y, ...b } = e;
  return {
    ...Object.fromEntries(
      Object.entries(b).filter(
        ([x]) => !["mobile", "tablet", "desktop", "dock", "grid", "stack", "tabs", "sidebar", "accordion", "divider", "noDivider"].includes(x)
      )
    ),
    ...o
  };
}
function Mr(e) {
  let t = !1;
  return be.forEach(e, (o) => {
    var r, n;
    if (le(o)) {
      const s = ((r = o.type) == null ? void 0 : r.displayName) || ((n = o.type) == null ? void 0 : n.name);
      s && (s === "Block.Header" || s === "Block.Content" || s === "Block.Footer" || s === "Block.Toolbar" || s === "Block.Tabs" || s === "Block.Sidebar") && (t = !0);
    }
  }), t;
}
function Or(e) {
  let t = !1;
  return be.forEach(e, (o) => {
    var r, n;
    le(o) && (((r = o.type) == null ? void 0 : r.displayName) || ((n = o.type) == null ? void 0 : n.name)) === "Block.Sidebar" && (t = !0);
  }), t;
}
const Le = ee(
  ({
    id: e,
    type: t = "block",
    direction: o = "row",
    children: r,
    className: n,
    divider: s,
    noDivider: i,
    "aria-label": l,
    ...p
  }, h) => {
    const { gridId: y } = Se(), b = dt(), { collapseBlock: w, expandBlock: x } = Sr(), { activeMode: c, currentLayoutType: d, supportsFeature: m } = Ce(), a = b == null ? void 0 : b.blocks[e], g = Pr({ id: e, type: t, direction: o, children: r, className: n, "aria-label": l, ...p }, c), k = J(() => Mr(r), [r]), E = J(() => Or(r), [r]), T = J(() => g.hidden ? !1 : d === "dock" ? !!(g.icon || g.label) : !0, [d, g]), j = J(() => {
      const f = [
        "pretty-poly-block",
        `pretty-poly-block--${t}`,
        `pretty-poly-block--mode-${c}`
      ];
      return a && (a.sizeUnit && f.push(`pretty-poly-block--${a.sizeUnit}`), a.collapsible && f.push("pretty-poly-block--collapsible"), a.collapsible && a.collapseAt && (a.size ?? a.defaultSize ?? 0) <= a.collapseAt && f.push("pretty-poly-block--collapsed")), d === "dock" && g.dockOrder !== void 0 && f.push(`pretty-poly-block--dock-order-${g.dockOrder}`), f;
    }, [t, c, a, d, g]), P = () => {
      a != null && a.collapsible && a.collapseAt && ((a.size ?? a.defaultSize ?? 0) <= a.collapseAt ? x(e) : w(e));
    };
    if (!T)
      return null;
    if (d === "dock") {
      const f = g.icon;
      return /* @__PURE__ */ M.jsxs(
        "div",
        {
          ref: h,
          className: te(
            ...j,
            "pretty-poly-dock-item",
            "flex flex-col items-center p-2 rounded-md transition-colors cursor-pointer min-w-12",
            "hover:bg-accent focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2",
            g.className,
            n
          ),
          "data-block-id": e,
          "data-block-type": t,
          "data-dock-order": g.dockOrder,
          "aria-label": l || g.label,
          role: "button",
          tabIndex: 0,
          style: g.style,
          children: [
            f && /* @__PURE__ */ M.jsx(f, { className: "pretty-poly-dock-icon w-6 h-6 mb-1" }),
            g.label && /* @__PURE__ */ M.jsx("span", { className: "pretty-poly-dock-label text-xs font-medium text-center", children: g.label })
          ]
        }
      );
    }
    return d === "tabs" ? /* @__PURE__ */ M.jsx(
      "div",
      {
        ref: h,
        className: te(
          ...j,
          "pretty-poly-tab-panel",
          "flex-1 overflow-auto",
          g.className,
          n
        ),
        "data-block-id": e,
        "data-block-type": t,
        "aria-label": l || g.tabLabel,
        role: "tabpanel",
        style: g.style,
        children: r
      }
    ) : /* @__PURE__ */ M.jsx(
      "div",
      {
        ref: h,
        className: te(
          ...j,
          "relative overflow-hidden",
          // Apply flex layout for structured content
          k && !E && "flex flex-col h-full",
          // Apply horizontal flex layout when sidebar is present
          k && E && "flex flex-row h-full",
          "transition-opacity duration-150",
          g.className,
          n
        ),
        "data-grid-id": y,
        "data-block-id": e,
        "data-block-type": t,
        "data-block-direction": o,
        "data-block-size-default": a == null ? void 0 : a.defaultSize,
        "data-block-size-unit": a == null ? void 0 : a.sizeUnit,
        "data-block-size-min": a == null ? void 0 : a.minSize,
        "data-block-size-max": a == null ? void 0 : a.maxSize,
        "data-block-collapse-at": a == null ? void 0 : a.collapseAt,
        "data-block-collapse-to": a == null ? void 0 : a.collapseTo,
        "data-block-divider-position": a == null ? void 0 : a.dividerPosition,
        "data-block-divider-size": a == null ? void 0 : a.dividerSize,
        "data-block-divider": s !== void 0 ? JSON.stringify(s) : void 0,
        "data-block-no-divider": i,
        "data-structured": k,
        "data-has-sidebar": E,
        "aria-label": l,
        role: t === "group" ? "group" : void 0,
        tabIndex: m("resizing") ? 0 : void 0,
        onDoubleClick: m("collapse") ? P : void 0,
        style: {
          ...g.style
          // CSS Grid area assignment handled by parent
        },
        children: r
      }
    );
  }
);
Le.displayName = "Block";
const kt = ee(
  (e, t) => /* @__PURE__ */ M.jsx(Le, { ref: t, ...e, type: "group" })
);
kt.displayName = "Block.Group";
Object.assign(Le, {
  Group: kt,
  Header: ht,
  Content: bt,
  Footer: gt,
  Toolbar: yt,
  Tabs: vt,
  Sidebar: Ue
});
Object.assign(Ue, {
  Item: xt,
  Spacer: wt
});
function Br(e, t, o) {
  const r = [];
  let n = e;
  const s = t.minSize ?? 0, i = t.maxSize ?? 1 / 0;
  if (e < s && (r.push(`Size ${e} is below minimum ${s}`), n = s), e > i && (r.push(`Size ${e} exceeds maximum ${i}`), n = i), n = pe(n, s, i), t.sizeUnit === "px" && t.collapsible && o !== void 0) {
    const l = t.collapseAt ?? 0, p = t.collapseTo ?? 0, h = t.defaultSize ?? n;
    n = br(
      n,
      o,
      l,
      p,
      h
    );
  }
  return {
    isValid: r.length === 0,
    adjustedValue: n,
    violations: r
  };
}
function Wr(e, t, o, r, n = 1) {
  const s = [];
  let i = o, l = r;
  const p = de(e.minSize ?? 0, e.sizeUnit, n), h = de(e.maxSize ?? 1 / 0, e.sizeUnit, n), y = de(t.minSize ?? 0, t.sizeUnit, n), b = de(t.maxSize ?? 1 / 0, t.sizeUnit, n), w = de(e.defaultSize ?? 0, e.sizeUnit, n), x = de(t.defaultSize ?? 0, t.sizeUnit, n), c = w + o, d = x + r;
  let m = pe(c, p, h), a = pe(d, y, b);
  i = m - w, l = a - x;
  const g = i + l;
  if (Math.abs(g) > 1e-3) {
    const T = Math.abs(i) < Math.abs(o), j = Math.abs(l) < Math.abs(r);
    if (T && !j) {
      const P = x - i;
      a = pe(P, y, b), l = a - x;
    } else if (j && !T) {
      const P = w - l;
      m = pe(P, p, h), i = m - w;
    }
    s.push("Zero-sum constraint violated, deltas adjusted");
  }
  const k = i + l;
  return {
    isValid: Math.abs(k) <= 1e-3,
    adjustedTargetDelta: i,
    adjustedAdjacentDelta: l,
    violations: s
  };
}
function de(e, t, o) {
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
function Vr(e, t) {
  const o = [], r = e.filter((s) => s.sizeUnit === "px").reduce((s, i) => s + (t[i.id] ?? i.defaultSize ?? 0), 0), n = e.filter((s) => s.sizeUnit === "fr").reduce((s, i) => s + (t[i.id] ?? i.defaultSize ?? 0), 0);
  return r < 0 && o.push("Total fixed size cannot be negative"), n <= 0 && e.some((s) => s.sizeUnit === "fr") && o.push("Total fr units must be positive"), e.forEach((s) => {
    const i = t[s.id] ?? s.defaultSize ?? 0, l = s.minSize ?? 0, p = s.maxSize ?? 1 / 0;
    l > p && o.push(`Block ${s.id}: minSize (${l}) > maxSize (${p})`), (i < l || i > p) && o.push(`Block ${s.id}: size ${i} violates constraints [${l}, ${p}]`);
  }), {
    isValid: o.length === 0,
    violations: o
  };
}
export {
  Le as Block,
  bt as BlockContent,
  gt as BlockFooter,
  kt as BlockGroup,
  ht as BlockHeader,
  Ue as BlockSidebar,
  xt as BlockSidebarItem,
  wt as BlockSidebarSpacer,
  vt as BlockTabs,
  yt as BlockToolbar,
  $e as Divider,
  Nr as Grid,
  kr as GridProvider,
  br as applyCollapseLogic,
  hr as calculateConstrainedSize,
  pe as clamp,
  te as cn,
  pr as createCustomAdapter,
  cr as defaultModes,
  Ur as findAdjacentBlock,
  Gr as frToPx,
  gr as generateGridTemplate,
  $r as getAllGridStates,
  lt as getFlexSpacePx,
  Re as getStorageAdapter,
  Cr as isCollapsed,
  Lr as isZeroSum,
  ur as loadGridState,
  he as localStorageAdapter,
  Te as memoryStorageAdapter,
  Dr as pxPerFr,
  vr as pxToFr,
  fr as removeGridState,
  dr as saveGridState,
  at as sessionStorageAdapter,
  Sr as useGridActions,
  Se as useGridContext,
  Er as useGridKeyboard,
  Ce as useGridMode,
  mr as useGridPersistence,
  zr as useGridResize,
  dt as useGridState,
  Br as validateBlockSize,
  Vr as validateLayoutIntegrity,
  Wr as validateTwoWayResize
};
