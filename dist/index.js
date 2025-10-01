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
      for (var c in n)
        c !== "key" && (s[c] = n[c]);
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
    function e(d) {
      if (d == null) return null;
      if (typeof d == "function")
        return d.$$typeof === D ? null : d.displayName || d.name || null;
      if (typeof d == "string") return d;
      switch (d) {
        case f:
          return "Fragment";
        case l:
          return "Profiler";
        case a:
          return "StrictMode";
        case A:
          return "Suspense";
        case P:
          return "SuspenseList";
        case E:
          return "Activity";
      }
      if (typeof d == "object")
        switch (typeof d.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), d.$$typeof) {
          case u:
            return "Portal";
          case k:
            return (d.displayName || "Context") + ".Provider";
          case v:
            return (d._context.displayName || "Context") + ".Consumer";
          case j:
            var R = d.render;
            return d = d.displayName, d || (d = R.displayName || R.name || "", d = d !== "" ? "ForwardRef(" + d + ")" : "ForwardRef"), d;
          case T:
            return R = d.displayName || null, R !== null ? R : e(d.type) || "Memo";
          case g:
            R = d._payload, d = d._init;
            try {
              return e(d(R));
            } catch {
            }
        }
      return null;
    }
    function t(d) {
      return "" + d;
    }
    function o(d) {
      try {
        t(d);
        var R = !1;
      } catch {
        R = !0;
      }
      if (R) {
        R = console;
        var _ = R.error, I = typeof Symbol == "function" && Symbol.toStringTag && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return _.call(
          R,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          I
        ), t(d);
      }
    }
    function r(d) {
      if (d === f) return "<>";
      if (typeof d == "object" && d !== null && d.$$typeof === g)
        return "<...>";
      try {
        var R = e(d);
        return R ? "<" + R + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var d = H.A;
      return d === null ? null : d.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(d) {
      if (Y.call(d, "key")) {
        var R = Object.getOwnPropertyDescriptor(d, "key").get;
        if (R && R.isReactWarning) return !1;
      }
      return d.key !== void 0;
    }
    function c(d, R) {
      function _() {
        G || (G = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          R
        ));
      }
      _.isReactWarning = !0, Object.defineProperty(d, "key", {
        get: _,
        configurable: !0
      });
    }
    function p() {
      var d = e(this.type);
      return U[d] || (U[d] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), d = this.props.ref, d !== void 0 ? d : null;
    }
    function b(d, R, _, I, N, $, Z, L) {
      return _ = $.ref, d = {
        $$typeof: y,
        type: d,
        key: R,
        props: $,
        _owner: N
      }, (_ !== void 0 ? _ : null) !== null ? Object.defineProperty(d, "ref", {
        enumerable: !1,
        get: p
      }) : Object.defineProperty(d, "ref", { enumerable: !1, value: null }), d._store = {}, Object.defineProperty(d._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(d, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(d, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Z
      }), Object.defineProperty(d, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: L
      }), Object.freeze && (Object.freeze(d.props), Object.freeze(d)), d;
    }
    function h(d, R, _, I, N, $, Z, L) {
      var F = R.children;
      if (F !== void 0)
        if (I)
          if (W(F)) {
            for (I = 0; I < F.length; I++)
              m(F[I]);
            Object.freeze && Object.freeze(F);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(F);
      if (Y.call(R, "key")) {
        F = e(d);
        var X = Object.keys(R).filter(function(ve) {
          return ve !== "key";
        });
        I = 0 < X.length ? "{key: someKey, " + X.join(": ..., ") + ": ...}" : "{key: someKey}", B[F + I] || (X = 0 < X.length ? "{" + X.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          I,
          F,
          X,
          F
        ), B[F + I] = !0);
      }
      if (F = null, _ !== void 0 && (o(_), F = "" + _), i(R) && (o(R.key), F = "" + R.key), "key" in R) {
        _ = {};
        for (var re in R)
          re !== "key" && (_[re] = R[re]);
      } else _ = R;
      return F && c(
        _,
        typeof d == "function" ? d.displayName || d.name || "Unknown" : d
      ), b(
        d,
        F,
        $,
        N,
        n(),
        _,
        Z,
        L
      );
    }
    function m(d) {
      typeof d == "object" && d !== null && d.$$typeof === y && d._store && (d._store.validated = 1);
    }
    var x = Ke, y = Symbol.for("react.transitional.element"), u = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), v = Symbol.for("react.consumer"), k = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), P = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), E = Symbol.for("react.activity"), D = Symbol.for("react.client.reference"), H = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = Object.prototype.hasOwnProperty, W = Array.isArray, C = console.createTask ? console.createTask : function() {
      return null;
    };
    x = {
      react_stack_bottom_frame: function(d) {
        return d();
      }
    };
    var G, U = {}, q = x.react_stack_bottom_frame.bind(
      x,
      s
    )(), w = C(r(s)), B = {};
    we.Fragment = f, we.jsx = function(d, R, _, I, N) {
      var $ = 1e4 > H.recentlyCreatedOwnerStacks++;
      return h(
        d,
        R,
        _,
        !1,
        I,
        N,
        $ ? Error("react-stack-top-frame") : q,
        $ ? C(r(d)) : w
      );
    }, we.jsxs = function(d, R, _, I, N) {
      var $ = 1e4 > H.recentlyCreatedOwnerStacks++;
      return h(
        d,
        R,
        _,
        !0,
        I,
        N,
        $ ? Error("react-stack-top-frame") : q,
        $ ? C(r(d)) : w
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
      const c = i.split(De);
      return c[0] === "" && c.length !== 1 && c.shift(), Je(c, t) || Rt(i);
    },
    getConflictingClassGroupIds: (i, c) => {
      const p = o[i] || [];
      return c && r[i] ? [...p, ...r[i]] : p;
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
    validator: c
  }) => c(s))) == null ? void 0 : i.classGroupId;
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
    let i = 0, c = 0, p = 0, b;
    for (let u = 0; u < n.length; u++) {
      let f = n[u];
      if (i === 0 && c === 0) {
        if (f === _e) {
          s.push(n.slice(p, u)), p = u + Ot;
          continue;
        }
        if (f === "/") {
          b = u;
          continue;
        }
      }
      f === "[" ? i++ : f === "]" ? i-- : f === "(" ? c++ : f === ")" && c--;
    }
    const h = s.length === 0 ? n : n.substring(p), m = $t(h), x = m !== h, y = b && b > p ? b - p : void 0;
    return {
      modifiers: s,
      hasImportantModifier: x,
      baseClassName: m,
      maybePostfixModifierPosition: y
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
}), Gt = /\s+/, Lt = (e, t) => {
  const {
    parseClassName: o,
    getClassGroupId: r,
    getConflictingClassGroupIds: n,
    sortModifiers: s
  } = t, i = [], c = e.trim().split(Gt);
  let p = "";
  for (let b = c.length - 1; b >= 0; b -= 1) {
    const h = c[b], {
      isExternal: m,
      modifiers: x,
      hasImportantModifier: y,
      baseClassName: u,
      maybePostfixModifierPosition: f
    } = o(h);
    if (m) {
      p = h + (p.length > 0 ? " " + p : p);
      continue;
    }
    let a = !!f, l = r(a ? u.substring(0, f) : u);
    if (!l) {
      if (!a) {
        p = h + (p.length > 0 ? " " + p : p);
        continue;
      }
      if (l = r(u), !l) {
        p = h + (p.length > 0 ? " " + p : p);
        continue;
      }
      a = !1;
    }
    const v = s(x).join(":"), k = y ? v + Oe : v, j = k + l;
    if (i.includes(j))
      continue;
    i.push(j);
    const A = n(l, a);
    for (let P = 0; P < A.length; ++P) {
      const T = A[P];
      i.push(k + T);
    }
    p = h + (p.length > 0 ? " " + p : p);
  }
  return p;
};
function Ut() {
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
    const b = t.reduce((h, m) => m(h), e());
    return o = Ct(b), r = o.cache.get, n = o.cache.set, s = c, c(p);
  }
  function c(p) {
    const b = r(p);
    if (b)
      return b;
    const h = Lt(p, o);
    return n(p, h), h;
  }
  return function() {
    return s(Ut.apply(null, arguments));
  };
}
const K = (e) => {
  const t = (o) => o[e] || [];
  return t.isThemeGetter = !0, t;
}, Qe = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, et = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Wt = /^\d+\/\d+$/, Vt = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ft = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ht = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Yt = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, qt = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ce = (e) => Wt.test(e), O = (e) => !!e && !Number.isNaN(Number(e)), ne = (e) => !!e && Number.isInteger(Number(e)), Ie = (e) => e.endsWith("%") && O(e.slice(0, -1)), se = (e) => Vt.test(e), Kt = () => !0, Zt = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ft.test(e) && !Ht.test(e)
), tt = () => !1, Jt = (e) => Yt.test(e), Xt = (e) => qt.test(e), Qt = (e) => !S(e) && !z(e), er = (e) => ye(e, st, tt), S = (e) => Qe.test(e), ae = (e) => ye(e, nt, Zt), je = (e) => ye(e, nr, O), Ye = (e) => ye(e, rt, tt), tr = (e) => ye(e, ot, Xt), ze = (e) => ye(e, it, Jt), z = (e) => et.test(e), ke = (e) => ge(e, nt), rr = (e) => ge(e, ir), qe = (e) => ge(e, rt), or = (e) => ge(e, st), sr = (e) => ge(e, ot), Ee = (e) => ge(e, it, !0), ye = (e, t, o) => {
  const r = Qe.exec(e);
  return r ? r[1] ? t(r[1]) : o(r[2]) : !1;
}, ge = (e, t, o = !1) => {
  const r = et.exec(e);
  return r ? r[1] ? t(r[1]) : o : !1;
}, rt = (e) => e === "position" || e === "percentage", ot = (e) => e === "image" || e === "url", st = (e) => e === "length" || e === "size" || e === "bg-size", nt = (e) => e === "length", nr = (e) => e === "number", ir = (e) => e === "family-name", it = (e) => e === "shadow", ar = () => {
  const e = K("color"), t = K("font"), o = K("text"), r = K("font-weight"), n = K("tracking"), s = K("leading"), i = K("breakpoint"), c = K("container"), p = K("spacing"), b = K("radius"), h = K("shadow"), m = K("inset-shadow"), x = K("text-shadow"), y = K("drop-shadow"), u = K("blur"), f = K("perspective"), a = K("aspect"), l = K("ease"), v = K("animate"), k = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], j = () => [
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
  ], A = () => [...j(), z, S], P = () => ["auto", "hidden", "clip", "visible", "scroll"], T = () => ["auto", "contain", "none"], g = () => [z, S, p], E = () => [ce, "full", "auto", ...g()], D = () => [ne, "none", "subgrid", z, S], H = () => ["auto", {
    span: ["full", ne, z, S]
  }, ne, z, S], Y = () => [ne, "auto", z, S], W = () => ["auto", "min", "max", "fr", z, S], C = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], G = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], U = () => ["auto", ...g()], q = () => [ce, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...g()], w = () => [e, z, S], B = () => [...j(), qe, Ye, {
    position: [z, S]
  }], d = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], R = () => ["auto", "cover", "contain", or, er, {
    size: [z, S]
  }], _ = () => [Ie, ke, ae], I = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    b,
    z,
    S
  ], N = () => ["", O, ke, ae], $ = () => ["solid", "dashed", "dotted", "double"], Z = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], L = () => [O, Ie, qe, Ye], F = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    u,
    z,
    S
  ], X = () => ["none", O, z, S], re = () => ["none", O, z, S], ve = () => [O, z, S], Se = () => [ce, "full", ...g()];
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
        aspect: ["auto", "square", ce, S, z, a]
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
        columns: [O, S, z, c]
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
        object: A()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: P()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": P()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": P()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: T()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": T()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": T()
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
        basis: [ce, "full", "auto", c, ...g()]
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
        "grid-cols": D()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: H()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": Y()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": Y()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": D()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: H()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": Y()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": Y()
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
        "auto-cols": W()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": W()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: g()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": g()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": g()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...C(), "normal"]
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
        content: ["normal", ...C()]
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
        "place-content": C()
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
        p: g()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: g()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: g()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: g()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: g()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: g()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: g()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: g()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: g()
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
        "space-x": g()
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
        "space-y": g()
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
        w: [c, "screen", ...q()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          c,
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
          c,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [i]
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
          ...g()
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
        placeholder: w()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: w()
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
        decoration: w()
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
        indent: g()
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
        bg: B()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: d()
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
        bg: w()
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
        from: w()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: w()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: w()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: I()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": I()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": I()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": I()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": I()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": I()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": I()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": I()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": I()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": I()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": I()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": I()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": I()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": I()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": I()
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
        border: w()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": w()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": w()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": w()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": w()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": w()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": w()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": w()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": w()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: w()
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
        outline: w()
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
          h,
          Ee,
          ze
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: w()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", m, Ee, ze]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": w()
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
        ring: w()
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
        "ring-offset": w()
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
        "inset-ring": w()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", x, Ee, ze]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": w()
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
        "mask-linear-from": L()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": L()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": w()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": w()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": L()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": L()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": w()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": w()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": L()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": L()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": w()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": w()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": L()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": L()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": w()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": w()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": L()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": L()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": w()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": w()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": L()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": L()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": w()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": w()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": L()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": L()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": w()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": w()
      }],
      "mask-image-radial": [{
        "mask-radial": [z, S]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": L()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": L()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": w()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": w()
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
        "mask-radial-at": j()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [O]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": L()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": L()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": w()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": w()
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
        mask: B()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: d()
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
          y,
          Ee,
          ze
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": w()
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
        "border-spacing": g()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": g()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": g()
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
        ease: ["linear", "initial", l, z, S]
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
        animate: ["none", v, z, S]
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
        perspective: [f, z, S]
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
        translate: Se()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Se()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Se()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Se()
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
        accent: w()
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
        caret: w()
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
        fill: ["none", ...w()]
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
        stroke: ["none", ...w()]
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
    const u = {
      width: window.innerWidth,
      height: window.innerHeight,
      orientation: window.innerWidth > window.innerHeight ? "landscape" : "portrait"
    };
    o(u);
  }, []), i = J(() => {
    var f;
    if (r && e[r])
      return r;
    const u = Object.entries(e).filter(([a, l]) => {
      if (l.matcher)
        return l.matcher(t);
      const v = !l.minWidth || t.width >= l.minWidth, k = !l.maxWidth || t.width <= l.maxWidth;
      return v && k;
    });
    return u.sort(([, a], [, l]) => {
      const v = (a.minWidth ? 1 : 0) + (a.maxWidth ? 1 : 0);
      return (l.minWidth ? 1 : 0) + (l.maxWidth ? 1 : 0) - v;
    }), ((f = u[0]) == null ? void 0 : f[0]) || Object.keys(e)[0] || "desktop";
  }, [t, e, r]), c = J(() => e[i], [e, i]), p = J(() => (c == null ? void 0 : c.type) || "grid", [c]), b = V((u) => {
    if (u && !e[u]) {
      console.warn(`Mode "${u}" not found in configuration`);
      return;
    }
    n(u);
  }, [e]), h = V((u) => i === u, [i]), m = J(() => Object.keys(e), [e]), x = V((u) => {
    switch (p) {
      case "grid":
        return ["resizing", "dividers", "collapse"].includes(u);
      case "sidebar":
        return ["resizing", "collapse"].includes(u);
      case "tabs":
        return u === "tabs";
      case "dock":
        return u === "dock";
      case "stack":
      case "accordion":
        return !1;
      default:
        return !1;
    }
  }, [p]), y = J(() => {
    const u = Object.entries(e).map(([v, k]) => ({ name: v, ...k })).sort((v, k) => (v.breakpoint || 0) - (k.breakpoint || 0)), f = u.findIndex((v) => v.name === i), a = u[f + 1], l = u[f - 1];
    return {
      current: i,
      currentBreakpoint: (c == null ? void 0 : c.breakpoint) || 0,
      nextMode: a == null ? void 0 : a.name,
      nextBreakpoint: a == null ? void 0 : a.breakpoint,
      prevMode: l == null ? void 0 : l.name,
      prevBreakpoint: l == null ? void 0 : l.breakpoint,
      isSmallest: f === 0,
      isLargest: f === u.length - 1
    };
  }, [e, i, c]);
  return Q(() => {
    if (typeof window > "u") return;
    const u = () => s(), f = () => {
      setTimeout(s, 100);
    };
    return window.addEventListener("resize", u), window.addEventListener("orientationchange", f), () => {
      window.removeEventListener("resize", u), window.removeEventListener("orientationchange", f);
    };
  }, [s]), {
    // Current state
    viewport: t,
    activeMode: i,
    currentModeConfig: c,
    currentLayoutType: p,
    // Mode management
    setMode: b,
    isMode: h,
    availableModes: m,
    // Features and capabilities
    supportsFeature: x,
    breakpointInfo: y,
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
}, ue = /* @__PURE__ */ new Map(), Ae = {
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
      return typeof localStorage < "u" ? he : Ae;
    case "sessionStorage":
      return typeof sessionStorage < "u" ? at : Ae;
    case "memory":
    default:
      return Ae;
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
    else if (e === Ae) {
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
  const i = fe(null), c = fe(), p = fe(""), b = fe(!1);
  Q(() => {
    if (!t) {
      i.current = null;
      return;
    }
    typeof t == "function" ? i.current = pr(t) : t === "localStorage" ? i.current = Re("localStorage") : t === "sessionStorage" ? i.current = Re("sessionStorage") : i.current = Re("localStorage");
  }, [t]), Q(() => {
    if (!i.current || !t || typeof t == "function" || b.current)
      return;
    const u = ur(e, i.current);
    u && (r == null || r(u), b.current = !0);
  }, [e, t]);
  const h = V((u = o) => {
    if (!i.current || !t)
      return;
    const f = JSON.stringify(u);
    if (f !== p.current)
      try {
        dr(e, u, i.current), p.current = f;
      } catch (a) {
        console.warn("Failed to save grid state:", a);
      }
  }, [e, t, o]), m = V((u = o) => {
    c.current && clearTimeout(c.current), c.current = setTimeout(() => {
      h(u);
    }, s);
  }, [h, s, o]), x = V(() => {
    if (!(!i.current || !t || typeof t == "function"))
      try {
        fr(e, i.current), p.current = "";
      } catch (u) {
        console.warn("Failed to clear grid state:", u);
      }
  }, [e, t]), y = V((u = o) => {
    c.current && clearTimeout(c.current), h(u);
  }, [h, o]);
  return Q(() => {
    if (!(!n || !t))
      return m(o), () => {
        c.current && clearTimeout(c.current);
      };
  }, [o, n, t, m]), Q(() => {
    if (!t || typeof t == "function")
      return;
    const u = () => {
      y();
    };
    return window.addEventListener("beforeunload", u), () => {
      window.removeEventListener("beforeunload", u);
    };
  }, [y, t]), Q(() => () => {
    c.current && clearTimeout(c.current);
  }, []), {
    saveState: y,
    debouncedSave: m,
    clearState: x,
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
function yr(e, t) {
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
function gr(e, t) {
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
function Lr(e, t, o) {
  return o === "start" ? e > 0 ? t[e - 1] : null : e < t.length - 1 ? t[e + 1] : null;
}
function Ur(e, t, o = 1e-3) {
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
      const c = Object.fromEntries(
        Object.entries(e.blocks).map(([p, b]) => [
          p,
          {
            ...b,
            size: b.defaultSize
            // Reset to original defaultSize stored somewhere, or current defaultSize
          }
        ])
      );
      return {
        ...e,
        blocks: c,
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
  onLayoutChange: c
}) {
  const { activeMode: p, viewport: b, setMode: h } = Ce(o), [m, x] = Et(
    xr,
    wr(t, b, p)
  );
  Q(() => {
    x({
      type: "UPDATE_VIEWPORT",
      payload: { viewport: b }
    });
  }, [b]), Q(() => {
    const l = m.activeMode;
    p !== l && (x({
      type: "SWITCH_MODE",
      payload: { mode: p }
    }), i == null || i(p, l));
  }, [p, m.activeMode, i]);
  const { saveState: y, clearState: u } = mr({
    gridId: s || r,
    enabled: n,
    state: m,
    onStateLoad: (l) => {
      x({ type: "LOAD_STATE", payload: { state: l } });
    },
    autoSave: !0
  }), f = (l) => "touches" in l ? { x: l.touches[0].clientX, y: l.touches[0].clientY } : { x: l.clientX, y: l.clientY }, a = J(
    () => ({
      state: {
        ...m,
        activeMode: p,
        viewport: b
      },
      dispatch: x,
      // Grid operations
      resizeBlock: (l, v) => {
        x({
          type: "RESIZE_BLOCK",
          payload: { blockId: l, size: v }
        });
      },
      collapseBlock: (l) => {
        x({
          type: "COLLAPSE_BLOCK",
          payload: { blockId: l }
        });
      },
      expandBlock: (l) => {
        x({
          type: "EXPAND_BLOCK",
          payload: { blockId: l }
        });
      },
      switchMode: (l) => {
        h(l);
      },
      // Resize operations
      startResize: (l, v, k) => {
        const j = m.blocks[l];
        if (!j) return;
        const A = f(k), T = Object.values(m.blocks).filter(
          (Y) => Y.parentId === j.parentId
        ).sort(
          (Y, W) => (Y.order || 0) - (W.order || 0)
        ), g = T.findIndex((Y) => Y.id === l);
        let E = null;
        if (j.dividerPosition === "start" && g > 0 ? E = T[g - 1] : j.dividerPosition === "end" && g < T.length - 1 && (E = T[g + 1]), E && j.sizeUnit === "fr" && E.sizeUnit === "px") {
          console.warn(
            `Cannot resize fr block "${l}" when adjacent to px block "${E.id}". Fr blocks fill available space and should not be directly resized. Consider resizing the px block instead.`
          );
          return;
        }
        x({
          type: "START_RESIZE",
          payload: {
            blockId: l,
            dividerId: v,
            startPosition: A,
            initialSize: j.defaultSize || 0,
            initialAdjacentBlockId: E == null ? void 0 : E.id,
            initialAdjacentSize: E ? E.originalDefaultSize || E.defaultSize || 0 : void 0
          }
        }), document.body.style.userSelect = "none";
        const D = j.parentId ? m.blocks[j.parentId] : null, H = (D == null ? void 0 : D.direction) || "row";
        document.body.style.cursor = H === "row" ? "col-resize" : "row-resize";
      },
      updateResize: (l) => {
        if (!m.resize.isDragging || !m.resize.activeBlockId) return;
        const v = m.blocks[m.resize.activeBlockId];
        if (!v) return;
        const k = f(l), j = v.parentId ? m.blocks[v.parentId] : null, A = (j == null ? void 0 : j.direction) || "row", P = A === "row" ? k.x - m.resize.startPosition.x : k.y - m.resize.startPosition.y;
        if (v.sizeUnit === "px") {
          const T = document.querySelector(`[data-block-id="${m.resize.activeDividerId}"]`), E = ((T == null ? void 0 : T.getAttribute("data-block-divider-position")) || "end") === "start", D = hr(
            P,
            m.resize.initialSize,
            v.minSize,
            v.maxSize,
            E
          );
          x({
            type: "RESIZE_BLOCK",
            payload: { blockId: m.resize.activeBlockId, size: D }
          });
        } else if (v.sizeUnit === "fr") {
          const T = Object.values(m.blocks).filter(
            (N) => N.parentId === v.parentId
          ), g = T.filter((N) => N.sizeUnit === "fr"), E = v.parentId ? document.querySelector(`[data-block-id="${v.parentId}"]`) : document.querySelector('[data-block-id="root"]'), D = E ? A === "row" ? E.clientWidth : E.clientHeight : 1200, H = T.filter((N) => N.sizeUnit === "px").reduce((N, $) => {
            const Z = document.querySelector(`[data-block-id="${$.id}"]`);
            if (!Z) return N;
            const L = A === "row" ? Z.clientWidth : Z.clientHeight;
            return N + L;
          }, 0), W = Array.from(
            (E == null ? void 0 : E.querySelectorAll('[data-block-type="divider"]')) || []
          ).reduce((N, $) => {
            if (!($ instanceof HTMLElement)) return N;
            const Z = A === "row" ? $.clientWidth : $.clientHeight;
            return N + Z;
          }, 0), G = lt(D, H, W), U = g.reduce(
            (N, $) => N + ($.defaultSize || 1),
            0
          ), q = U > 0 ? G / U : 0;
          if (q === 0) return;
          const w = vr(P, q), B = g.sort(
            (N, $) => (N.order || 0) - ($.order || 0)
          ), d = B.findIndex(
            (N) => N.id === m.resize.activeBlockId
          ), R = document.querySelector(`[data-block-id="${m.resize.activeDividerId}"]`), _ = (R == null ? void 0 : R.getAttribute("data-block-divider-position")) || "end";
          let I = null;
          if (_ === "start" && d > 0 ? I = B[d - 1] : _ === "end" && d < B.length - 1 && (I = B[d + 1]), I) {
            let N, $;
            N = w, $ = -w;
            const Z = 0.1, L = Math.max(
              Z,
              m.resize.initialSize + N
            ), F = Math.max(
              Z,
              (m.resize.initialAdjacentSize || 1) + $
            ), X = L - m.resize.initialSize, re = F - (m.resize.initialAdjacentSize || 1);
            Math.abs(X + re) < 0.01 && (x({
              type: "RESIZE_BLOCK",
              payload: {
                blockId: m.resize.activeBlockId,
                size: L
              }
            }), x({
              type: "RESIZE_BLOCK",
              payload: { blockId: I.id, size: F }
            }));
          }
        }
      },
      endResize: () => {
        x({ type: "END_RESIZE" }), document.body.style.userSelect = "", document.body.style.cursor = "";
      },
      // Persistence
      persistState: () => y(m),
      resetState: () => {
        x({ type: "RESET_STATE" }), u();
      }
    }),
    [m, p, b, y, u, h]
  );
  return Q(() => {
    if (c) {
      const l = Object.values(m.blocks);
      c(l);
    }
  }, [m.blocks, c]), /* @__PURE__ */ M.jsx(ct.Provider, { value: a, children: e });
}
function Te() {
  const e = zt(ct);
  if (!e)
    throw new Error("useGridContext must be used within a GridProvider");
  return e;
}
function dt() {
  const { state: e } = Te();
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
  } = Te();
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
  const { startResize: e, updateResize: t, endResize: o, state: r } = Te();
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
    isDragging: c,
    activeBlockId: p,
    activeDividerId: b
  } = ut(), h = V(() => {
    if (!t.current) return 0;
    const a = t.current.getBoundingClientRect();
    return r === "column" ? a.width : a.height;
  }, [r]), m = V(() => {
    const a = h();
    if (a === 0) return 0;
    const l = e.filter((A) => A.sizeUnit === "px").reduce((A, P) => A + (P.defaultSize || 0), 0), v = e.filter((A) => A.dividerPosition !== "none").reduce((A, P) => A + (P.dividerSize || 8), 0), k = e.filter((A) => A.sizeUnit === "fr").reduce((A, P) => A + (P.defaultSize || 1), 0), j = lt(a, l, v);
    return k > 0 ? j / k : 0;
  }, [e, h]), x = V((a) => {
    const l = e.find((v) => v.id === a);
    l && l.defaultSize !== void 0 && (o == null || o(a, l.defaultSize));
  }, [e, o]), y = V((a) => {
    const l = e.find((v) => v.id === a);
    l && l.collapseTo !== void 0 && (o == null || o(a, l.collapseTo));
  }, [e, o]), u = V((a) => {
    const l = e.find((v) => v.id === a);
    l && l.defaultSize !== void 0 && (o == null || o(a, l.defaultSize));
  }, [e, o]), f = V((a) => {
    const l = e.find((v) => v.id === a);
    return !l || !l.collapseAt ? !1 : (l.defaultSize || 0) <= l.collapseAt;
  }, [e]);
  return Q(() => {
    const a = (j) => {
      j.preventDefault(), s(j);
    }, l = (j) => {
      j.preventDefault(), s(j);
    }, v = () => {
      i();
    }, k = () => {
      i();
    };
    if (c)
      return document.addEventListener("mousemove", a), document.addEventListener("mouseup", v), document.addEventListener("touchmove", l), document.addEventListener("touchend", k), () => {
        document.removeEventListener("mousemove", a), document.removeEventListener("mouseup", v), document.removeEventListener("touchmove", l), document.removeEventListener("touchend", k);
      };
  }, [c, s, i]), {
    // State
    isDragging: c,
    activeBlockId: p,
    activeDividerId: b,
    // Actions
    startResize: n,
    resetBlock: x,
    collapseBlock: y,
    expandBlock: u,
    // Utilities
    isBlockCollapsed: f,
    getContainerSize: h,
    calculatePixelsPerFr: m
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
  stepSize: c = 10,
  largeStepSize: p = 50
}) {
  const b = V(() => {
    const f = document.activeElement;
    return (f == null ? void 0 : f.dataset.blockType) === "block" || (f == null ? void 0 : f.dataset.blockType) === "group" ? f : (f == null ? void 0 : f.closest('[data-block-type="block"], [data-block-type="group"]')) || null;
  }, []), h = V((f) => {
    if (!f) return null;
    const a = f.dataset.blockId;
    return t.find((l) => l.id === a) || null;
  }, [t]), m = V((f, a) => {
    if (!(i != null && i.current)) return null;
    const l = Array.from(
      i.current.querySelectorAll('[data-block-type="block"], [data-block-type="group"]')
    ), v = f.getBoundingClientRect(), k = {
      x: v.left + v.width / 2,
      y: v.top + v.height / 2
    };
    let j = l.filter((A) => {
      if (A === f) return !1;
      const P = A.getBoundingClientRect(), T = {
        x: P.left + P.width / 2,
        y: P.top + P.height / 2
      };
      switch (a) {
        case "up":
          return T.y < k.y;
        case "down":
          return T.y > k.y;
        case "left":
          return T.x < k.x;
        case "right":
          return T.x > k.x;
        default:
          return !1;
      }
    });
    return j.length === 0 ? null : (j.sort((A, P) => {
      const T = A.getBoundingClientRect(), g = P.getBoundingClientRect(), E = {
        x: T.left + T.width / 2,
        y: T.top + T.height / 2
      }, D = {
        x: g.left + g.width / 2,
        y: g.top + g.height / 2
      }, H = Math.sqrt(
        Math.pow(E.x - k.x, 2) + Math.pow(E.y - k.y, 2)
      ), Y = Math.sqrt(
        Math.pow(D.x - k.x, 2) + Math.pow(D.y - k.y, 2)
      );
      return H - Y;
    }), j[0]);
  }, [i]), x = V((f) => {
    if (!e) return;
    const a = b();
    if (!a) return;
    const l = h(a);
    if (!l) return;
    const v = f.ctrlKey || f.metaKey, k = f.shiftKey, j = k ? p : c;
    if (!v && !k)
      switch (f.key) {
        case "ArrowUp":
          f.preventDefault();
          const A = m(a, "up");
          A && (A.focus(), r == null || r(A.dataset.blockId || ""));
          break;
        case "ArrowDown":
          f.preventDefault();
          const P = m(a, "down");
          P && (P.focus(), r == null || r(P.dataset.blockId || ""));
          break;
        case "ArrowLeft":
          f.preventDefault();
          const T = m(a, "left");
          T && (T.focus(), r == null || r(T.dataset.blockId || ""));
          break;
        case "ArrowRight":
          f.preventDefault();
          const g = m(a, "right");
          g && (g.focus(), r == null || r(g.dataset.blockId || ""));
          break;
        case "Enter":
        case " ":
          f.preventDefault(), l.collapsible && (s == null || s(l.id));
          break;
        case "Escape":
          f.preventDefault(), a.blur();
          break;
      }
    if (v && o)
      switch (f.key) {
        case "ArrowUp":
          f.preventDefault(), o(l.id, -j);
          break;
        case "ArrowDown":
          f.preventDefault(), o(l.id, j);
          break;
        case "ArrowLeft":
          f.preventDefault(), o(l.id, -j);
          break;
        case "ArrowRight":
          f.preventDefault(), o(l.id, j);
          break;
      }
    if (v)
      switch (f.key) {
        case "Minus":
        case "-":
          f.preventDefault(), n == null || n(l.id);
          break;
        case "Plus":
        case "+":
        case "=":
          f.preventDefault(), s == null || s(l.id);
          break;
      }
  }, [
    e,
    b,
    h,
    m,
    o,
    r,
    n,
    s,
    c,
    p
  ]), y = V((f) => {
    if (!(i != null && i.current)) return;
    const a = i.current.querySelector(
      `[data-block-id="${f}"]`
    );
    a && (a.focus(), r == null || r(f));
  }, [i, r]), u = V(() => i != null && i.current ? Array.from(
    i.current.querySelectorAll(
      '[data-block-type="block"][tabindex], [data-block-type="group"][tabindex]'
    )
  ) : [], [i]);
  return Q(() => {
    if (e)
      return document.addEventListener("keydown", x), () => {
        document.removeEventListener("keydown", x);
      };
  }, [x, e]), {
    focusBlock: y,
    getFocusableBlocks: u,
    getFocusedBlock: b,
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
  }, c = (p = r == null ? void 0 : r.overrides) == null ? void 0 : p[e.id];
  if (c && Object.assign(i, c), typeof o == "object" && o !== null) {
    const b = o;
    Object.assign(i, b), b.position && b.position !== "auto" && (b.position === "start" ? (i.targetId = e.id, i.position = "start") : b.position === "end" && (i.targetId = e.id, i.position = "end"));
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
    const b = be.toArray(e).filter(le).map((h) => {
      const m = Ne(h);
      if (!m) return null;
      const x = r == null ? void 0 : r[m.id];
      return {
        id: m.id,
        type: "block",
        sizeUnit: (x == null ? void 0 : x.sizeUnit) || "fr",
        size: (x == null ? void 0 : x.defaultSize) || 1
      };
    }).filter((h) => h !== null);
    return {
      children: e,
      templateItems: b
    };
  }
  const s = be.toArray(e), i = [], c = [];
  return s.forEach((p, b) => {
    if (!le(p)) {
      i.push(p);
      return;
    }
    const h = Ne(p);
    if (!h) {
      i.push(p);
      return;
    }
    i.push(p);
    const m = {
      id: h.id,
      type: "block",
      sizeUnit: "fr",
      defaultSize: 1
    };
    r != null && r[h.id] && Object.assign(m, r[h.id]), c.push({
      id: m.id,
      type: "block",
      sizeUnit: m.sizeUnit || "fr",
      size: m.defaultSize || 1
    });
    const x = b === s.length - 1, y = b < s.length - 1 ? s[b + 1] : null;
    let u = null;
    if (le(y)) {
      const l = Ne(y);
      l && (u = { id: l.id });
    }
    const f = u ? {
      id: u.id,
      type: "block",
      sizeUnit: "fr",
      defaultSize: 1
    } : null;
    if (f && (r != null && r[f.id]) && Object.assign(f, r[f.id]), Tr(
      m,
      x,
      t,
      h.divider,
      h.noDivider
    )) {
      const l = Ir(
        m,
        f,
        h.divider,
        o
      ), v = jr(
        l,
        `${h.id}-${b}`,
        n
      );
      i.push(v), c.push({
        id: `${h.id}-divider-${b}`,
        type: "divider",
        dividerSize: l.size
      });
    }
  }), {
    children: i,
    templateItems: c
  };
}
function pt(e, t, o, r, n) {
  return t !== "auto" ? e : be.map(e, (s) => {
    var b, h;
    if (!le(s))
      return s;
    const i = ((b = s.type) == null ? void 0 : b.displayName) || ((h = s.type) == null ? void 0 : h.name), c = i === "Block.Group" || i === "BlockGroup", p = i === "Block";
    if (c) {
      const m = ft(
        s.props.children,
        t,
        o,
        r,
        n
      );
      return Be(s, {
        ...s.props,
        children: m.children
      });
    } else if (p && be.toArray(s.props.children).some((x) => {
      var u, f;
      if (!le(x)) return !1;
      const y = ((u = x.type) == null ? void 0 : u.displayName) || ((f = x.type) == null ? void 0 : f.name);
      return y === "Block.Group" || y === "BlockGroup";
    })) {
      const x = pt(
        s.props.children,
        t,
        o,
        r,
        n
      );
      return Be(s, {
        ...s.props,
        children: x
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
    const c = fe(null), p = i || c, b = dt(), { startResize: h, isDragging: m, activeDividerId: x } = ut(), { supportsFeature: y } = Ce(), [u, f] = me(""), [a, l] = me("end"), v = V(() => {
      const W = c.current;
      if (!W) return;
      if (e && t && t !== "auto" && t !== "none") {
        e !== u && f(e), t !== a && l(t);
        return;
      }
      let C = e, G = t === "start" || t === "end" ? t : "end";
      if (e) {
        const U = document.querySelector(`[data-block-id="${e}"]`);
        U && (G = U.compareDocumentPosition(W) & Node.DOCUMENT_POSITION_FOLLOWING ? "start" : "end");
      } else {
        const U = W.previousElementSibling, q = W.nextElementSibling, w = U == null ? void 0 : U.getAttribute("data-block-id"), B = q == null ? void 0 : q.getAttribute("data-block-id"), d = w ? b.blocks[w] : null, R = B ? b.blocks[B] : null;
        if (d && R)
          d.sizeUnit === "fr" && R.sizeUnit === "px" ? (C = B, G = "start") : (d.sizeUnit === "px" && R.sizeUnit, C = w, G = "end");
        else if (d)
          if (d.type === "group") {
            const _ = Object.values(b.blocks).filter((I) => I.parentId === w).sort((I, N) => (I.order || 0) - (N.order || 0)).filter((I) => I.type === "block" && (I.sizeUnit === "px" || I.sizeUnit === "fr"));
            _.length > 0 ? (C = _[_.length - 1].id, G = "end") : (C = w, G = "end");
          } else
            C = w, G = "end";
        else if (R)
          if (R.type === "group") {
            const _ = Object.values(b.blocks).filter((I) => I.parentId === B).sort((I, N) => (I.order || 0) - (N.order || 0)).filter((I) => I.type === "block" && (I.sizeUnit === "px" || I.sizeUnit === "fr"));
            _.length > 0 ? (C = _[0].id, G = "start") : (C = B, G = "start");
          } else
            C = B, G = "start";
      }
      C && C !== u && f(C), G !== a && l(G);
    }, [e, t, u, a, b.blocks]);
    Q(() => {
      v();
    }, [v]), Q(() => {
      v();
    }, [b.blocks]);
    const k = u ? b.blocks[u] : null;
    if (!k && u && console.warn(`Divider target block "${u}" not found`), !y("resizing"))
      return null;
    const A = k != null && k.parentId ? b.blocks[k.parentId] : null, P = ((A == null ? void 0 : A.type) === "group" ? A.direction : void 0) || "row", T = P === "column", g = m && u && x === `${u}-${a}-divider`, E = T ? "row-resize" : "col-resize", D = V((W) => {
      if (!u) return;
      W.preventDefault();
      const C = `${u}-${a}-divider`;
      h(u, C, W);
    }, [u, a, h]), H = V(() => {
      k == null || k.defaultSize;
    }, [k]), Y = n || Rr;
    return /* @__PURE__ */ M.jsx(
      "div",
      {
        ref: p,
        className: te(
          "pretty-poly-divider",
          "flex items-center justify-center",
          "select-none touch-none transition-colors",
          "hover:bg-accent focus-visible:outline-2 focus-visible:outline-ring focus-visible:bg-accent",
          T ? "cursor-row-resize" : "cursor-col-resize",
          g && "pretty-poly-divider--dragging",
          a === "start" && "pretty-poly-divider--start",
          a === "end" && "pretty-poly-divider--end",
          r
        ),
        "data-block-id": u ? `${u}-${a}-divider` : "loading-divider",
        "data-block-type": "divider",
        "data-block-target": u || "",
        "data-block-direction": P,
        "data-block-divider-position": a,
        style: {
          [T ? "height" : "width"]: `${o}px`,
          cursor: E
        },
        role: "separator",
        "aria-label": s || `Resize ${u || "block"}`,
        "aria-valuenow": k == null ? void 0 : k.defaultSize,
        "aria-valuemin": k == null ? void 0 : k.minSize,
        "aria-valuemax": k == null ? void 0 : k.maxSize,
        tabIndex: 0,
        onMouseDown: D,
        onTouchStart: D,
        onDoubleClick: H,
        onKeyDown: (W) => {
          (W.key === "ArrowLeft" || W.key === "ArrowRight" || W.key === "ArrowUp" || W.key === "ArrowDown") && W.preventDefault();
        },
        children: /* @__PURE__ */ M.jsx(
          Y,
          {
            className: te(
              "transition-colors hover:bg-foreground/20",
              g && "bg-foreground/30"
            ),
            direction: P
          }
        )
      }
    );
  }
);
$e.displayName = "Divider";
const mt = ee(
  ({ children: e, className: t, dividers: o = "manual", dividerConfig: r, "aria-label": n }, s) => {
    const i = fe(null), { state: c, resizeBlock: p, collapseBlock: b, expandBlock: h, switchMode: m, persistState: x, resetState: y } = Te(), u = c.resize.isDragging;
    At(s, () => ({
      resizeBlock: p,
      collapseBlock: b,
      expandBlock: h,
      switchMode: m,
      persistState: x,
      resetState: y,
      getState: () => c
    }), [p, b, h, m, x, y, c]);
    const f = J(() => Object.values(c.blocks).sort((A, P) => (A.order || 0) - (P.order || 0)), [c.blocks]), a = J(() => f.find((j) => !j.parentId), [f]);
    zr({
      blocks: f,
      containerRef: i,
      onSizeChange: p,
      direction: (a == null ? void 0 : a.direction) || "row"
    }), Er({
      enabled: !0,
      blocks: f,
      containerRef: i,
      onResizeBlock: (j, A) => {
        const P = c.blocks[j];
        if (P) {
          const T = P.defaultSize || 0, g = Math.max(0, T + A);
          p(j, g);
        }
      },
      onCollapseBlock: b,
      onExpandBlock: h
    });
    const l = J(() => {
      const j = ft(
        e,
        o,
        r,
        c.blocks,
        $e
      );
      return o === "auto" ? {
        children: pt(
          j.children,
          o,
          r,
          c.blocks,
          $e
        ),
        templateItems: j.templateItems
      } : j;
    }, [e, o, r, c.blocks]), { gridStyles: v, cssVariables: k } = J(() => {
      if (!a)
        return { gridStyles: "", cssVariables: "" };
      const j = f.reduce((E, D) => {
        if (D.id === "root") return E;
        const H = D.parentId || "root";
        return E[H] || (E[H] = []), E[H].push(D), E;
      }, {}), A = f.filter((E) => E.defaultSize !== void 0).map((E) => {
        const D = E.sizeUnit === "px" ? `${E.defaultSize}px` : `${E.defaultSize}fr`;
        return `--${a.id}-${E.id}-size: ${D};`;
      }).join(`
  `), P = (E, D = /* @__PURE__ */ new Set()) => {
        if (D.has(E))
          return console.warn(`Circular reference detected for parent: ${E}`), "";
        const H = new Set(D);
        H.add(E);
        const Y = j[E] || [];
        if (Y.length === 0) return "";
        const W = [...Y].sort((B, d) => (B.order || 0) - (d.order || 0)), C = f.find((B) => B.id === E) || a, G = (C == null ? void 0 : C.direction) || "row";
        let U;
        if (o === "auto" && E === a.id)
          U = gr(l.templateItems, a.id);
        else {
          const B = W.map((d) => ({
            id: d.id,
            sizeUnit: d.sizeUnit || "fr",
            size: d.defaultSize || 1,
            dividerPosition: d.dividerPosition === "auto" ? "none" : d.dividerPosition || "none",
            dividerSize: d.dividerSize || (r == null ? void 0 : r.defaultSize) || 8
          }));
          U = yr(B, a.id);
        }
        const q = G === "column" ? "grid-template-rows" : "grid-template-columns";
        let w = `
[data-grid-id="${a.id}"][data-block-id="${E}"] {
  display: grid;
  ${q}: ${U};
  ${G === "column" ? "grid-template-columns: 1fr;" : "grid-template-rows: 1fr;"}
  height: 100%;
}`;
        for (const B of W)
          B.type === "group" && (w += P(B.id, H));
        return w;
      }, T = P("root");
      return {
        cssVariables: `:root {
  ${A}
}`,
        gridStyles: T + `
.pretty-poly-divider {
  background-color: #e5e7eb;
  cursor: col-resize;
}

.pretty-poly-divider[data-block-direction="column"] {
  cursor: row-resize;
}

.pretty-poly-divider--dragging {
  background-color: #3b82f6;
}`
      };
    }, [f, a, l, o, r]);
    return a ? /* @__PURE__ */ M.jsxs(M.Fragment, { children: [
      /* @__PURE__ */ M.jsxs("style", { type: "text/css", children: [
        k,
        v
      ] }),
      /* @__PURE__ */ M.jsx(
        "div",
        {
          ref: i,
          className: te(
            "pretty-poly-grid relative overflow-hidden",
            u && "pretty-poly-grid--dragging",
            t
          ),
          "data-grid-id": a.id,
          "data-block-id": a.id,
          "data-active-mode": c.activeMode,
          "aria-label": n || "Resizable grid layout",
          role: "application",
          children: l.children
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
    className: c,
    dividers: p = "manual",
    dividerConfig: b,
    "aria-label": h
  }, m) => /* @__PURE__ */ M.jsx(
    kr,
    {
      blocks: t,
      modes: o,
      persist: r,
      persistKey: n,
      onLayoutChange: s,
      onModeChange: i,
      children: /* @__PURE__ */ M.jsx(
        mt,
        {
          ref: m,
          className: c,
          dividers: p,
          dividerConfig: b,
          "aria-label": h,
          children: e
        }
      )
    }
  )
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
const yt = ee(
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
yt.displayName = "Block.Footer";
const gt = ee(
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
gt.displayName = "Block.Toolbar";
const vt = ee(
  ({
    tabs: e,
    activeTab: t,
    onTabChange: o,
    onTabClose: r,
    className: n,
    "aria-label": s,
    allowOverflow: i = !0
  }, c) => {
    const [p, b] = me(null), h = (y, u) => {
      u.preventDefault(), y.disabled || o(y.id);
    }, m = (y, u) => {
      u.preventDefault(), u.stopPropagation(), r && y.closable && r(y.id);
    }, x = (y, u) => {
      (u.key === "Enter" || u.key === " ") && (u.preventDefault(), y.disabled || o(y.id));
    };
    return /* @__PURE__ */ M.jsx(
      "div",
      {
        ref: c,
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
        children: /* @__PURE__ */ M.jsx("div", { className: "flex items-center min-w-0", children: e.map((y) => {
          const u = y.id === t, f = p === y.id, a = y.icon;
          return /* @__PURE__ */ M.jsxs(
            "div",
            {
              className: ie(
                "flex items-center space-x-2 px-3 py-2 text-sm cursor-pointer",
                "border-b-2 transition-colors duration-150",
                "min-w-0 flex-shrink-0",
                // Prevent shrinking
                u ? "border-blue-500 text-blue-600 bg-blue-50" : "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50",
                y.disabled && "opacity-50 cursor-not-allowed",
                !i && "flex-1"
                // Equal width tabs when overflow disabled
              ),
              role: "tab",
              "aria-selected": u,
              "aria-disabled": y.disabled,
              tabIndex: y.disabled ? -1 : 0,
              onClick: (l) => h(y, l),
              onKeyDown: (l) => x(y, l),
              onMouseEnter: () => b(y.id),
              onMouseLeave: () => b(null),
              "data-tab-id": y.id,
              children: [
                a && /* @__PURE__ */ M.jsx(a, { className: "w-4 h-4 flex-shrink-0" }),
                /* @__PURE__ */ M.jsx("span", { className: "truncate min-w-0", children: y.label }),
                y.closable && r && /* @__PURE__ */ M.jsx(
                  "button",
                  {
                    className: ie(
                      "flex-shrink-0 w-4 h-4 rounded-sm hover:bg-gray-200",
                      "flex items-center justify-center",
                      "transition-colors duration-150",
                      f || u ? "opacity-100" : "opacity-0"
                    ),
                    onClick: (l) => m(y, l),
                    "aria-label": `Close ${y.label} tab`,
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
            y.id
          );
        }) })
      }
    );
  }
);
vt.displayName = "Block.Tabs";
const Le = ee(
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
Le.displayName = "Block.Sidebar";
const xt = ee(
  ({
    icon: e,
    tooltip: t,
    active: o = !1,
    disabled: r = !1,
    badge: n,
    onClick: s,
    className: i,
    "aria-label": c
  }, p) => {
    const [b, h] = me(!1), m = () => {
      t && !r && h(!0);
    }, x = () => {
      h(!1);
    }, y = () => {
      !r && s && s();
    }, u = (f) => {
      (f.key === "Enter" || f.key === " ") && (f.preventDefault(), y());
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
          onClick: y,
          onKeyDown: u,
          onMouseEnter: m,
          onMouseLeave: x,
          "aria-label": c || t,
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
      b && t && /* @__PURE__ */ M.jsx("div", { className: "absolute left-full ml-2 top-1/2 transform -translate-y-1/2 z-50", children: /* @__PURE__ */ M.jsxs("div", { className: "bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap", children: [
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
  const o = e[t] || {}, { id: r, type: n, direction: s, children: i, className: c, divider: p, noDivider: b, "aria-label": h, ...m } = e;
  return {
    ...Object.fromEntries(
      Object.entries(m).filter(
        ([y]) => !["mobile", "tablet", "desktop", "dock", "grid", "stack", "tabs", "sidebar", "accordion", "divider", "noDivider"].includes(y)
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
const Ue = ee(
  ({
    id: e,
    type: t = "block",
    direction: o = "row",
    children: r,
    className: n,
    divider: s,
    noDivider: i,
    "aria-label": c,
    ...p
  }, b) => {
    const h = dt(), { collapseBlock: m, expandBlock: x } = Sr(), { activeMode: y, currentLayoutType: u, supportsFeature: f } = Ce(), a = h == null ? void 0 : h.blocks[e], l = Pr({ id: e, type: t, direction: o, children: r, className: n, "aria-label": c, ...p }, y), v = J(() => Mr(r), [r]), k = J(() => Or(r), [r]), j = J(() => l.hidden ? !1 : u === "dock" ? !!(l.icon || l.label) : !0, [u, l]), A = J(() => {
      const T = [
        "pretty-poly-block",
        `pretty-poly-block--${t}`,
        `pretty-poly-block--mode-${y}`
      ];
      return a && (a.sizeUnit && T.push(`pretty-poly-block--${a.sizeUnit}`), a.collapsible && T.push("pretty-poly-block--collapsible"), a.collapsible && a.collapseAt && (a.size ?? a.defaultSize ?? 0) <= a.collapseAt && T.push("pretty-poly-block--collapsed")), u === "dock" && l.dockOrder !== void 0 && T.push(`pretty-poly-block--dock-order-${l.dockOrder}`), T;
    }, [t, y, a, u, l]), P = () => {
      a != null && a.collapsible && a.collapseAt && ((a.size ?? a.defaultSize ?? 0) <= a.collapseAt ? x(e) : m(e));
    };
    if (!j)
      return null;
    if (u === "dock") {
      const T = l.icon;
      return /* @__PURE__ */ M.jsxs(
        "div",
        {
          ref: b,
          className: te(
            ...A,
            "pretty-poly-dock-item",
            "flex flex-col items-center p-2 rounded-md transition-colors cursor-pointer min-w-12",
            "hover:bg-accent focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2",
            l.className,
            n
          ),
          "data-block-id": e,
          "data-block-type": t,
          "data-dock-order": l.dockOrder,
          "aria-label": c || l.label,
          role: "button",
          tabIndex: 0,
          style: l.style,
          children: [
            T && /* @__PURE__ */ M.jsx(T, { className: "pretty-poly-dock-icon w-6 h-6 mb-1" }),
            l.label && /* @__PURE__ */ M.jsx("span", { className: "pretty-poly-dock-label text-xs font-medium text-center", children: l.label })
          ]
        }
      );
    }
    return u === "tabs" ? /* @__PURE__ */ M.jsx(
      "div",
      {
        ref: b,
        className: te(
          ...A,
          "pretty-poly-tab-panel",
          "flex-1 overflow-auto",
          l.className,
          n
        ),
        "data-block-id": e,
        "data-block-type": t,
        "aria-label": c || l.tabLabel,
        role: "tabpanel",
        style: l.style,
        children: r
      }
    ) : /* @__PURE__ */ M.jsx(
      "div",
      {
        ref: b,
        className: te(
          ...A,
          "relative overflow-hidden",
          // Apply flex layout for structured content
          v && !k && "flex flex-col h-full",
          // Apply horizontal flex layout when sidebar is present
          v && k && "flex flex-row h-full",
          "transition-opacity duration-150",
          l.className,
          n
        ),
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
        "data-structured": v,
        "data-has-sidebar": k,
        "aria-label": c,
        role: t === "group" ? "group" : void 0,
        tabIndex: f("resizing") ? 0 : void 0,
        onDoubleClick: f("collapse") ? P : void 0,
        style: {
          ...l.style
          // CSS Grid area assignment handled by parent
        },
        children: r
      }
    );
  }
);
Ue.displayName = "Block";
const kt = ee(
  (e, t) => /* @__PURE__ */ M.jsx(Ue, { ref: t, ...e, type: "group" })
);
kt.displayName = "Block.Group";
Object.assign(Ue, {
  Group: kt,
  Header: ht,
  Content: bt,
  Footer: yt,
  Toolbar: gt,
  Tabs: vt,
  Sidebar: Le
});
Object.assign(Le, {
  Item: xt,
  Spacer: wt
});
function Br(e, t, o) {
  const r = [];
  let n = e;
  const s = t.minSize ?? 0, i = t.maxSize ?? 1 / 0;
  if (e < s && (r.push(`Size ${e} is below minimum ${s}`), n = s), e > i && (r.push(`Size ${e} exceeds maximum ${i}`), n = i), n = pe(n, s, i), t.sizeUnit === "px" && t.collapsible && o !== void 0) {
    const c = t.collapseAt ?? 0, p = t.collapseTo ?? 0, b = t.defaultSize ?? n;
    n = br(
      n,
      o,
      c,
      p,
      b
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
  let i = o, c = r;
  const p = de(e.minSize ?? 0, e.sizeUnit, n), b = de(e.maxSize ?? 1 / 0, e.sizeUnit, n), h = de(t.minSize ?? 0, t.sizeUnit, n), m = de(t.maxSize ?? 1 / 0, t.sizeUnit, n), x = de(e.defaultSize ?? 0, e.sizeUnit, n), y = de(t.defaultSize ?? 0, t.sizeUnit, n), u = x + o, f = y + r;
  let a = pe(u, p, b), l = pe(f, h, m);
  i = a - x, c = l - y;
  const v = i + c;
  if (Math.abs(v) > 1e-3) {
    const A = Math.abs(i) < Math.abs(o), P = Math.abs(c) < Math.abs(r);
    if (A && !P) {
      const T = y - i;
      l = pe(T, h, m), c = l - y;
    } else if (P && !A) {
      const T = x - c;
      a = pe(T, p, b), i = a - x;
    }
    s.push("Zero-sum constraint violated, deltas adjusted");
  }
  const k = i + c;
  return {
    isValid: Math.abs(k) <= 1e-3,
    adjustedTargetDelta: i,
    adjustedAdjacentDelta: c,
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
    const i = t[s.id] ?? s.defaultSize ?? 0, c = s.minSize ?? 0, p = s.maxSize ?? 1 / 0;
    c > p && o.push(`Block ${s.id}: minSize (${c}) > maxSize (${p})`), (i < c || i > p) && o.push(`Block ${s.id}: size ${i} violates constraints [${c}, ${p}]`);
  }), {
    isValid: o.length === 0,
    violations: o
  };
}
export {
  Ue as Block,
  bt as BlockContent,
  yt as BlockFooter,
  kt as BlockGroup,
  ht as BlockHeader,
  Le as BlockSidebar,
  xt as BlockSidebarItem,
  wt as BlockSidebarSpacer,
  vt as BlockTabs,
  gt as BlockToolbar,
  $e as Divider,
  Nr as Grid,
  kr as GridProvider,
  br as applyCollapseLogic,
  hr as calculateConstrainedSize,
  pe as clamp,
  te as cn,
  pr as createCustomAdapter,
  cr as defaultModes,
  Lr as findAdjacentBlock,
  Gr as frToPx,
  yr as generateGridTemplate,
  $r as getAllGridStates,
  lt as getFlexSpacePx,
  Re as getStorageAdapter,
  Cr as isCollapsed,
  Ur as isZeroSum,
  ur as loadGridState,
  he as localStorageAdapter,
  Ae as memoryStorageAdapter,
  Dr as pxPerFr,
  vr as pxToFr,
  fr as removeGridState,
  dr as saveGridState,
  at as sessionStorageAdapter,
  Sr as useGridActions,
  Te as useGridContext,
  Er as useGridKeyboard,
  Ce as useGridMode,
  mr as useGridPersistence,
  zr as useGridResize,
  dt as useGridState,
  Br as validateBlockSize,
  Vr as validateLayoutIntegrity,
  Wr as validateTwoWayResize
};
