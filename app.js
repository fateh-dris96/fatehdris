function Ce(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: Ye } = Object.prototype,
  { getPrototypeOf: ce } = Object,
  W = ((e) => (t) => {
    const n = Ye.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  x = (e) => ((e = e.toLowerCase()), (t) => W(t) === e),
  $ = (e) => (t) => typeof t === e,
  { isArray: D } = Array,
  I = $("undefined");
function Ze(e) {
  return e !== null && !I(e) && e.constructor !== null && !I(e.constructor) && L(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Ne = x("ArrayBuffer");
function et(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? (t = ArrayBuffer.isView(e)) : (t = e && e.buffer && Ne(e.buffer)), t;
}
const tt = $("string"),
  L = $("function"),
  Pe = $("number"),
  K = (e) => e !== null && typeof e == "object",
  nt = (e) => e === !0 || e === !1,
  v = (e) => {
    if (W(e) !== "object") return !1;
    const t = ce(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
  },
  rt = x("Date"),
  st = x("File"),
  ot = x("Blob"),
  it = x("FileList"),
  at = (e) => K(e) && L(e.pipe),
  ct = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (L(e.append) && ((t = W(e)) === "formdata" || (t === "object" && L(e.toString) && e.toString() === "[object FormData]"))))
    );
  },
  lt = x("URLSearchParams"),
  [ut, dt, ft, ht] = ["ReadableStream", "Request", "Response", "Headers"].map(x),
  pt = (e) => (e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""));
function j(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, s;
  if ((typeof e != "object" && (e = [e]), D(e))) for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      o = i.length;
    let c;
    for (r = 0; r < o; r++) (c = i[r]), t.call(null, e[c], c, e);
  }
}
function Be(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    s;
  for (; r-- > 0; ) if (((s = n[r]), t === s.toLowerCase())) return s;
  return null;
}
const _ = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global,
  _e = (e) => !I(e) && e !== _;
function te() {
  const { caseless: e } = (_e(this) && this) || {},
    t = {},
    n = (r, s) => {
      const i = (e && Be(t, s)) || s;
      v(t[i]) && v(r) ? (t[i] = te(t[i], r)) : v(r) ? (t[i] = te({}, r)) : D(r) ? (t[i] = r.slice()) : (t[i] = r);
    };
  for (let r = 0, s = arguments.length; r < s; r++) arguments[r] && j(arguments[r], n);
  return t;
}
const mt = (e, t, n, { allOwnKeys: r } = {}) => (
    j(
      t,
      (s, i) => {
        n && L(s) ? (e[i] = Ce(s, n)) : (e[i] = s);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  yt = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  bt = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  gt = (e, t, n, r) => {
    let s, i, o;
    const c = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (s = Object.getOwnPropertyNames(e), i = s.length; i-- > 0; ) (o = s[i]), (!r || r(o, e, t)) && !c[o] && ((t[o] = e[o]), (c[o] = !0));
      e = n !== !1 && ce(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  wt = (e, t, n) => {
    (e = String(e)), (n === void 0 || n > e.length) && (n = e.length), (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  Et = (e) => {
    if (!e) return null;
    if (D(e)) return e;
    let t = e.length;
    if (!Pe(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  St = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && ce(Uint8Array)),
  Rt = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let s;
    for (; (s = r.next()) && !s.done; ) {
      const i = s.value;
      t.call(e, i[0], i[1]);
    }
  },
  Ot = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  Tt = x("HTMLFormElement"),
  At = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
      return r.toUpperCase() + s;
    }),
  pe = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  Lt = x("RegExp"),
  ke = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    j(n, (s, i) => {
      let o;
      (o = t(s, i, e)) !== !1 && (r[i] = o || s);
    }),
      Object.defineProperties(e, r);
  },
  xt = (e) => {
    ke(e, (t, n) => {
      if (L(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1) return !1;
      const r = e[n];
      if (L(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  Ct = (e, t) => {
    const n = {},
      r = (s) => {
        s.forEach((i) => {
          n[i] = !0;
        });
      };
    return D(e) ? r(e) : r(String(e).split(t)), n;
  },
  Nt = () => {},
  Pt = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  Q = "abcdefghijklmnopqrstuvwxyz",
  me = "0123456789",
  Fe = { DIGIT: me, ALPHA: Q, ALPHA_DIGIT: Q + Q.toUpperCase() + me },
  Bt = (e = 16, t = Fe.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function _t(e) {
  return !!(e && L(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const kt = (e) => {
    const t = new Array(10),
      n = (r, s) => {
        if (K(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[s] = r;
            const i = D(r) ? [] : {};
            return (
              j(r, (o, c) => {
                const d = n(o, s + 1);
                !I(d) && (i[c] = d);
              }),
              (t[s] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  Ft = x("AsyncFunction"),
  Dt = (e) => e && (K(e) || L(e)) && L(e.then) && L(e.catch),
  De = ((e, t) =>
    e
      ? setImmediate
      : t
      ? ((n, r) => (
          _.addEventListener(
            "message",
            ({ source: s, data: i }) => {
              s === _ && i === n && r.length && r.shift()();
            },
            !1
          ),
          (s) => {
            r.push(s), _.postMessage(n, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (n) => setTimeout(n))(typeof setImmediate == "function", L(_.postMessage)),
  Ut = typeof queueMicrotask < "u" ? queueMicrotask.bind(_) : (typeof process < "u" && process.nextTick) || De,
  a = {
    isArray: D,
    isArrayBuffer: Ne,
    isBuffer: Ze,
    isFormData: ct,
    isArrayBufferView: et,
    isString: tt,
    isNumber: Pe,
    isBoolean: nt,
    isObject: K,
    isPlainObject: v,
    isReadableStream: ut,
    isRequest: dt,
    isResponse: ft,
    isHeaders: ht,
    isUndefined: I,
    isDate: rt,
    isFile: st,
    isBlob: ot,
    isRegExp: Lt,
    isFunction: L,
    isStream: at,
    isURLSearchParams: lt,
    isTypedArray: St,
    isFileList: it,
    forEach: j,
    merge: te,
    extend: mt,
    trim: pt,
    stripBOM: yt,
    inherits: bt,
    toFlatObject: gt,
    kindOf: W,
    kindOfTest: x,
    endsWith: wt,
    toArray: Et,
    forEachEntry: Rt,
    matchAll: Ot,
    isHTMLForm: Tt,
    hasOwnProperty: pe,
    hasOwnProp: pe,
    reduceDescriptors: ke,
    freezeMethods: xt,
    toObjectSet: Ct,
    toCamelCase: At,
    noop: Nt,
    toFiniteNumber: Pt,
    findKey: Be,
    global: _,
    isContextDefined: _e,
    ALPHABET: Fe,
    generateString: Bt,
    isSpecCompliantForm: _t,
    toJSONObject: kt,
    isAsyncFn: Ft,
    isThenable: Dt,
    setImmediate: De,
    asap: Ut,
  };
function m(e, t, n, r, s) {
  Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    s && ((this.response = s), (this.status = s.status ? s.status : null));
}
a.inherits(m, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: a.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Ue = m.prototype,
  qe = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  qe[e] = { value: e };
});
Object.defineProperties(m, qe);
Object.defineProperty(Ue, "isAxiosError", { value: !0 });
m.from = (e, t, n, r, s, i) => {
  const o = Object.create(Ue);
  return (
    a.toFlatObject(
      e,
      o,
      function (d) {
        return d !== Error.prototype;
      },
      (c) => c !== "isAxiosError"
    ),
    m.call(o, e.message, t, n, r, s),
    (o.cause = e),
    (o.name = e.name),
    i && Object.assign(o, i),
    o
  );
};
const qt = null;
function ne(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function Ie(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ye(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (s, i) {
          return (s = Ie(s)), !n && i ? "[" + s + "]" : s;
        })
        .join(n ? "." : "")
    : t;
}
function It(e) {
  return a.isArray(e) && !e.some(ne);
}
const jt = a.toFlatObject(a, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function G(e, t, n) {
  if (!a.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = a.toFlatObject(n, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (y, p) {
      return !a.isUndefined(p[y]);
    }));
  const r = n.metaTokens,
    s = n.visitor || u,
    i = n.dots,
    o = n.indexes,
    d = (n.Blob || (typeof Blob < "u" && Blob)) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s)) throw new TypeError("visitor must be a function");
  function l(h) {
    if (h === null) return "";
    if (a.isDate(h)) return h.toISOString();
    if (!d && a.isBlob(h)) throw new m("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(h) || a.isTypedArray(h) ? (d && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h)) : h;
  }
  function u(h, y, p) {
    let g = h;
    if (h && !p && typeof h == "object") {
      if (a.endsWith(y, "{}")) (y = r ? y : y.slice(0, -2)), (h = JSON.stringify(h));
      else if ((a.isArray(h) && It(h)) || ((a.isFileList(h) || a.endsWith(y, "[]")) && (g = a.toArray(h))))
        return (
          (y = Ie(y)),
          g.forEach(function (R, C) {
            !(a.isUndefined(R) || R === null) && t.append(o === !0 ? ye([y], C, i) : o === null ? y : y + "[]", l(R));
          }),
          !1
        );
    }
    return ne(h) ? !0 : (t.append(ye(p, y, i), l(h)), !1);
  }
  const f = [],
    b = Object.assign(jt, { defaultVisitor: u, convertValue: l, isVisitable: ne });
  function E(h, y) {
    if (!a.isUndefined(h)) {
      if (f.indexOf(h) !== -1) throw Error("Circular reference detected in " + y.join("."));
      f.push(h),
        a.forEach(h, function (g, S) {
          (!(a.isUndefined(g) || g === null) && s.call(t, g, a.isString(S) ? S.trim() : S, y, b)) === !0 && E(g, y ? y.concat(S) : [S]);
        }),
        f.pop();
    }
  }
  if (!a.isObject(e)) throw new TypeError("data must be an object");
  return E(e), t;
}
function be(e) {
  const t = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function le(e, t) {
  (this._pairs = []), e && G(e, this, t);
}
const je = le.prototype;
je.append = function (t, n) {
  this._pairs.push([t, n]);
};
je.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, be);
      }
    : be;
  return this._pairs
    .map(function (s) {
      return n(s[0]) + "=" + n(s[1]);
    }, "")
    .join("&");
};
function Ht(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function He(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || Ht,
    s = n && n.serialize;
  let i;
  if ((s ? (i = s(t, n)) : (i = a.isURLSearchParams(t) ? t.toString() : new le(t, n).toString(r)), i)) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return e;
}
class ge {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({ fulfilled: t, rejected: n, synchronous: r ? r.synchronous : !1, runWhen: r ? r.runWhen : null }), this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    a.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Me = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
  Mt = typeof URLSearchParams < "u" ? URLSearchParams : le,
  vt = typeof FormData < "u" ? FormData : null,
  zt = typeof Blob < "u" ? Blob : null,
  Jt = { isBrowser: !0, classes: { URLSearchParams: Mt, FormData: vt, Blob: zt }, protocols: ["http", "https", "file", "blob", "url", "data"] },
  ue = typeof window < "u" && typeof document < "u",
  re = (typeof navigator == "object" && navigator) || void 0,
  Vt = ue && (!re || ["ReactNative", "NativeScript", "NS"].indexOf(re.product) < 0),
  Wt = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function",
  $t = (ue && window.location.href) || "http://localhost",
  Kt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, hasBrowserEnv: ue, hasStandardBrowserEnv: Vt, hasStandardBrowserWebWorkerEnv: Wt, navigator: re, origin: $t },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  T = { ...Kt, ...Jt };
function Gt(e, t) {
  return G(
    e,
    new T.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, s, i) {
          return T.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function Xt(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function Qt(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const s = n.length;
  let i;
  for (r = 0; r < s; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function ve(e) {
  function t(n, r, s, i) {
    let o = n[i++];
    if (o === "__proto__") return !0;
    const c = Number.isFinite(+o),
      d = i >= n.length;
    return (
      (o = !o && a.isArray(s) ? s.length : o),
      d
        ? (a.hasOwnProp(s, o) ? (s[o] = [s[o], r]) : (s[o] = r), !c)
        : ((!s[o] || !a.isObject(s[o])) && (s[o] = []), t(n, r, s[o], i) && a.isArray(s[o]) && (s[o] = Qt(s[o])), !c)
    );
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return (
      a.forEachEntry(e, (r, s) => {
        t(Xt(r), s, n, 0);
      }),
      n
    );
  }
  return null;
}
function Yt(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const H = {
  transitional: Me,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        s = r.indexOf("application/json") > -1,
        i = a.isObject(t);
      if ((i && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))) return s ? JSON.stringify(ve(t)) : t;
      if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t) || a.isReadableStream(t)) return t;
      if (a.isArrayBufferView(t)) return t.buffer;
      if (a.isURLSearchParams(t)) return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let c;
      if (i) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1) return Gt(t, this.formSerializer).toString();
        if ((c = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const d = this.env && this.env.FormData;
          return G(c ? { "files[]": t } : t, d && new d(), this.formSerializer);
        }
      }
      return i || s ? (n.setContentType("application/json", !1), Yt(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || H.transitional,
        r = n && n.forcedJSONParsing,
        s = this.responseType === "json";
      if (a.isResponse(t) || a.isReadableStream(t)) return t;
      if (t && a.isString(t) && ((r && !this.responseType) || s)) {
        const o = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t);
        } catch (c) {
          if (o) throw c.name === "SyntaxError" ? m.from(c, m.ERR_BAD_RESPONSE, this, null, this.response) : c;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: T.classes.FormData, Blob: T.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: "application/json, text/plain, */*", "Content-Type": void 0 } },
};
a.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  H.headers[e] = {};
});
const Zt = a.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  en = (e) => {
    const t = {};
    let n, r, s;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (o) {
            (s = o.indexOf(":")),
              (n = o.substring(0, s).trim().toLowerCase()),
              (r = o.substring(s + 1).trim()),
              !(!n || (t[n] && Zt[n])) && (n === "set-cookie" ? (t[n] ? t[n].push(r) : (t[n] = [r])) : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  we = Symbol("internals");
function q(e) {
  return e && String(e).trim().toLowerCase();
}
function z(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(z) : String(e);
}
function tn(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const nn = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Y(e, t, n, r, s) {
  if (a.isFunction(r)) return r.call(this, t, n);
  if ((s && (t = n), !!a.isString(t))) {
    if (a.isString(r)) return t.indexOf(r) !== -1;
    if (a.isRegExp(r)) return r.test(t);
  }
}
function rn(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function sn(e, t) {
  const n = a.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (s, i, o) {
        return this[r].call(this, t, s, i, o);
      },
      configurable: !0,
    });
  });
}
class A {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function i(c, d, l) {
      const u = q(d);
      if (!u) throw new Error("header name must be a non-empty string");
      const f = a.findKey(s, u);
      (!f || s[f] === void 0 || l === !0 || (l === void 0 && s[f] !== !1)) && (s[f || d] = z(c));
    }
    const o = (c, d) => a.forEach(c, (l, u) => i(l, u, d));
    if (a.isPlainObject(t) || t instanceof this.constructor) o(t, n);
    else if (a.isString(t) && (t = t.trim()) && !nn(t)) o(en(t), n);
    else if (a.isHeaders(t)) for (const [c, d] of t.entries()) i(d, c, r);
    else t != null && i(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = q(t)), t)) {
      const r = a.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n) return s;
        if (n === !0) return tn(s);
        if (a.isFunction(n)) return n.call(this, s, r);
        if (a.isRegExp(n)) return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = q(t)), t)) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Y(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function i(o) {
      if (((o = q(o)), o)) {
        const c = a.findKey(r, o);
        c && (!n || Y(r, r[c], c, n)) && (delete r[c], (s = !0));
      }
    }
    return a.isArray(t) ? t.forEach(i) : i(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      s = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || Y(this, this[i], i, t, !0)) && (delete this[i], (s = !0));
    }
    return s;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      a.forEach(this, (s, i) => {
        const o = a.findKey(r, i);
        if (o) {
          (n[o] = z(s)), delete n[i];
          return;
        }
        const c = t ? rn(i) : String(i).trim();
        c !== i && delete n[i], (n[c] = z(s)), (r[c] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      a.forEach(this, (r, s) => {
        r != null && r !== !1 && (n[s] = t && a.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[we] = this[we] = { accessors: {} }).accessors,
      s = this.prototype;
    function i(o) {
      const c = q(o);
      r[c] || (sn(s, o), (r[c] = !0));
    }
    return a.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
A.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.reduceDescriptors(A.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
a.freezeMethods(A);
function Z(e, t) {
  const n = this || H,
    r = t || n,
    s = A.from(r.headers);
  let i = r.data;
  return (
    a.forEach(e, function (c) {
      i = c.call(n, i, s.normalize(), t ? t.status : void 0);
    }),
    s.normalize(),
    i
  );
}
function ze(e) {
  return !!(e && e.__CANCEL__);
}
function U(e, t, n) {
  m.call(this, e ?? "canceled", m.ERR_CANCELED, t, n), (this.name = "CanceledError");
}
a.inherits(U, m, { __CANCEL__: !0 });
function Je(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new m(
          "Request failed with status code " + n.status,
          [m.ERR_BAD_REQUEST, m.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
          n.config,
          n.request,
          n
        )
      );
}
function on(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function an(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let s = 0,
    i = 0,
    o;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (d) {
      const l = Date.now(),
        u = r[i];
      o || (o = l), (n[s] = d), (r[s] = l);
      let f = i,
        b = 0;
      for (; f !== s; ) (b += n[f++]), (f = f % e);
      if (((s = (s + 1) % e), s === i && (i = (i + 1) % e), l - o < t)) return;
      const E = u && l - u;
      return E ? Math.round((b * 1e3) / E) : void 0;
    }
  );
}
function cn(e, t) {
  let n = 0,
    r = 1e3 / t,
    s,
    i;
  const o = (l, u = Date.now()) => {
    (n = u), (s = null), i && (clearTimeout(i), (i = null)), e.apply(null, l);
  };
  return [
    (...l) => {
      const u = Date.now(),
        f = u - n;
      f >= r
        ? o(l, u)
        : ((s = l),
          i ||
            (i = setTimeout(() => {
              (i = null), o(s);
            }, r - f)));
    },
    () => s && o(s),
  ];
}
const J = (e, t, n = 3) => {
    let r = 0;
    const s = an(50, 250);
    return cn((i) => {
      const o = i.loaded,
        c = i.lengthComputable ? i.total : void 0,
        d = o - r,
        l = s(d),
        u = o <= c;
      r = o;
      const f = {
        loaded: o,
        total: c,
        progress: c ? o / c : void 0,
        bytes: d,
        rate: l || void 0,
        estimated: l && c && u ? (c - o) / l : void 0,
        event: i,
        lengthComputable: c != null,
        [t ? "download" : "upload"]: !0,
      };
      e(f);
    }, n);
  },
  Ee = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  Se =
    (e) =>
    (...t) =>
      a.asap(() => e(...t)),
  ln = T.hasStandardBrowserEnv
    ? (function () {
        const t = T.navigator && /(msie|trident)/i.test(T.navigator.userAgent),
          n = document.createElement("a");
        let r;
        function s(i) {
          let o = i;
          return (
            t && (n.setAttribute("href", o), (o = n.href)),
            n.setAttribute("href", o),
            {
              href: n.href,
              protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
              host: n.host,
              search: n.search ? n.search.replace(/^\?/, "") : "",
              hash: n.hash ? n.hash.replace(/^#/, "") : "",
              hostname: n.hostname,
              port: n.port,
              pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
            }
          );
        }
        return (
          (r = s(window.location.href)),
          function (o) {
            const c = a.isString(o) ? s(o) : o;
            return c.protocol === r.protocol && c.host === r.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })(),
  un = T.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, s, i) {
          const o = [e + "=" + encodeURIComponent(t)];
          a.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()),
            a.isString(r) && o.push("path=" + r),
            a.isString(s) && o.push("domain=" + s),
            i === !0 && o.push("secure"),
            (document.cookie = o.join("; "));
        },
        read(e) {
          const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function dn(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function fn(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ve(e, t) {
  return e && !dn(t) ? fn(e, t) : t;
}
const Re = (e) => (e instanceof A ? { ...e } : e);
function F(e, t) {
  t = t || {};
  const n = {};
  function r(l, u, f) {
    return a.isPlainObject(l) && a.isPlainObject(u)
      ? a.merge.call({ caseless: f }, l, u)
      : a.isPlainObject(u)
      ? a.merge({}, u)
      : a.isArray(u)
      ? u.slice()
      : u;
  }
  function s(l, u, f) {
    if (a.isUndefined(u)) {
      if (!a.isUndefined(l)) return r(void 0, l, f);
    } else return r(l, u, f);
  }
  function i(l, u) {
    if (!a.isUndefined(u)) return r(void 0, u);
  }
  function o(l, u) {
    if (a.isUndefined(u)) {
      if (!a.isUndefined(l)) return r(void 0, l);
    } else return r(void 0, u);
  }
  function c(l, u, f) {
    if (f in t) return r(l, u);
    if (f in e) return r(void 0, l);
  }
  const d = {
    url: i,
    method: i,
    data: i,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: c,
    headers: (l, u) => s(Re(l), Re(u), !0),
  };
  return (
    a.forEach(Object.keys(Object.assign({}, e, t)), function (u) {
      const f = d[u] || s,
        b = f(e[u], t[u], u);
      (a.isUndefined(b) && f !== c) || (n[u] = b);
    }),
    n
  );
}
const We = (e) => {
    const t = F({}, e);
    let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: i, headers: o, auth: c } = t;
    (t.headers = o = A.from(o)),
      (t.url = He(Ve(t.baseURL, t.url), e.params, e.paramsSerializer)),
      c && o.set("Authorization", "Basic " + btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : "")));
    let d;
    if (a.isFormData(n)) {
      if (T.hasStandardBrowserEnv || T.hasStandardBrowserWebWorkerEnv) o.setContentType(void 0);
      else if ((d = o.getContentType()) !== !1) {
        const [l, ...u] = d
          ? d
              .split(";")
              .map((f) => f.trim())
              .filter(Boolean)
          : [];
        o.setContentType([l || "multipart/form-data", ...u].join("; "));
      }
    }
    if (T.hasStandardBrowserEnv && (r && a.isFunction(r) && (r = r(t)), r || (r !== !1 && ln(t.url)))) {
      const l = s && i && un.read(i);
      l && o.set(s, l);
    }
    return t;
  },
  hn = typeof XMLHttpRequest < "u",
  pn =
    hn &&
    function (e) {
      return new Promise(function (n, r) {
        const s = We(e);
        let i = s.data;
        const o = A.from(s.headers).normalize();
        let { responseType: c, onUploadProgress: d, onDownloadProgress: l } = s,
          u,
          f,
          b,
          E,
          h;
        function y() {
          E && E(), h && h(), s.cancelToken && s.cancelToken.unsubscribe(u), s.signal && s.signal.removeEventListener("abort", u);
        }
        let p = new XMLHttpRequest();
        p.open(s.method.toUpperCase(), s.url, !0), (p.timeout = s.timeout);
        function g() {
          if (!p) return;
          const R = A.from("getAllResponseHeaders" in p && p.getAllResponseHeaders()),
            O = {
              data: !c || c === "text" || c === "json" ? p.responseText : p.response,
              status: p.status,
              statusText: p.statusText,
              headers: R,
              config: e,
              request: p,
            };
          Je(
            function (B) {
              n(B), y();
            },
            function (B) {
              r(B), y();
            },
            O
          ),
            (p = null);
        }
        "onloadend" in p
          ? (p.onloadend = g)
          : (p.onreadystatechange = function () {
              !p || p.readyState !== 4 || (p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0)) || setTimeout(g);
            }),
          (p.onabort = function () {
            p && (r(new m("Request aborted", m.ECONNABORTED, e, p)), (p = null));
          }),
          (p.onerror = function () {
            r(new m("Network Error", m.ERR_NETWORK, e, p)), (p = null);
          }),
          (p.ontimeout = function () {
            let C = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
            const O = s.transitional || Me;
            s.timeoutErrorMessage && (C = s.timeoutErrorMessage), r(new m(C, O.clarifyTimeoutError ? m.ETIMEDOUT : m.ECONNABORTED, e, p)), (p = null);
          }),
          i === void 0 && o.setContentType(null),
          "setRequestHeader" in p &&
            a.forEach(o.toJSON(), function (C, O) {
              p.setRequestHeader(O, C);
            }),
          a.isUndefined(s.withCredentials) || (p.withCredentials = !!s.withCredentials),
          c && c !== "json" && (p.responseType = s.responseType),
          l && (([b, h] = J(l, !0)), p.addEventListener("progress", b)),
          d && p.upload && (([f, E] = J(d)), p.upload.addEventListener("progress", f), p.upload.addEventListener("loadend", E)),
          (s.cancelToken || s.signal) &&
            ((u = (R) => {
              p && (r(!R || R.type ? new U(null, e, p) : R), p.abort(), (p = null));
            }),
            s.cancelToken && s.cancelToken.subscribe(u),
            s.signal && (s.signal.aborted ? u() : s.signal.addEventListener("abort", u)));
        const S = on(s.url);
        if (S && T.protocols.indexOf(S) === -1) {
          r(new m("Unsupported protocol " + S + ":", m.ERR_BAD_REQUEST, e));
          return;
        }
        p.send(i || null);
      });
    },
  mn = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        s;
      const i = function (l) {
        if (!s) {
          (s = !0), c();
          const u = l instanceof Error ? l : this.reason;
          r.abort(u instanceof m ? u : new U(u instanceof Error ? u.message : u));
        }
      };
      let o =
        t &&
        setTimeout(() => {
          (o = null), i(new m(`timeout ${t} of ms exceeded`, m.ETIMEDOUT));
        }, t);
      const c = () => {
        e &&
          (o && clearTimeout(o),
          (o = null),
          e.forEach((l) => {
            l.unsubscribe ? l.unsubscribe(i) : l.removeEventListener("abort", i);
          }),
          (e = null));
      };
      e.forEach((l) => l.addEventListener("abort", i));
      const { signal: d } = r;
      return (d.unsubscribe = () => a.asap(c)), d;
    }
  },
  yn = function* (e, t) {
    let n = e.byteLength;
    if (!t || n < t) {
      yield e;
      return;
    }
    let r = 0,
      s;
    for (; r < n; ) (s = r + t), yield e.slice(r, s), (r = s);
  },
  bn = async function* (e, t) {
    for await (const n of gn(e)) yield* yn(n, t);
  },
  gn = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: r } = await t.read();
        if (n) break;
        yield r;
      }
    } finally {
      await t.cancel();
    }
  },
  Oe = (e, t, n, r) => {
    const s = bn(e, t);
    let i = 0,
      o,
      c = (d) => {
        o || ((o = !0), r && r(d));
      };
    return new ReadableStream(
      {
        async pull(d) {
          try {
            const { done: l, value: u } = await s.next();
            if (l) {
              c(), d.close();
              return;
            }
            let f = u.byteLength;
            if (n) {
              let b = (i += f);
              n(b);
            }
            d.enqueue(new Uint8Array(u));
          } catch (l) {
            throw (c(l), l);
          }
        },
        cancel(d) {
          return c(d), s.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  X = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function",
  $e = X && typeof ReadableStream == "function",
  wn =
    X &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  Ke = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  En =
    $e &&
    Ke(() => {
      let e = !1;
      const t = new Request(T.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    }),
  Te = 64 * 1024,
  se = $e && Ke(() => a.isReadableStream(new Response("").body)),
  V = { stream: se && ((e) => e.body) };
X &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !V[t] &&
        (V[t] = a.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new m(`Response type '${t}' is not supported`, m.ERR_NOT_SUPPORT, r);
            });
    });
  })(new Response());
const Sn = async (e) => {
    if (e == null) return 0;
    if (a.isBlob(e)) return e.size;
    if (a.isSpecCompliantForm(e)) return (await new Request(T.origin, { method: "POST", body: e }).arrayBuffer()).byteLength;
    if (a.isArrayBufferView(e) || a.isArrayBuffer(e)) return e.byteLength;
    if ((a.isURLSearchParams(e) && (e = e + ""), a.isString(e))) return (await wn(e)).byteLength;
  },
  Rn = async (e, t) => {
    const n = a.toFiniteNumber(e.getContentLength());
    return n ?? Sn(t);
  },
  On =
    X &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: s,
        cancelToken: i,
        timeout: o,
        onDownloadProgress: c,
        onUploadProgress: d,
        responseType: l,
        headers: u,
        withCredentials: f = "same-origin",
        fetchOptions: b,
      } = We(e);
      l = l ? (l + "").toLowerCase() : "text";
      let E = mn([s, i && i.toAbortSignal()], o),
        h;
      const y =
        E &&
        E.unsubscribe &&
        (() => {
          E.unsubscribe();
        });
      let p;
      try {
        if (d && En && n !== "get" && n !== "head" && (p = await Rn(u, r)) !== 0) {
          let O = new Request(t, { method: "POST", body: r, duplex: "half" }),
            N;
          if ((a.isFormData(r) && (N = O.headers.get("content-type")) && u.setContentType(N), O.body)) {
            const [B, M] = Ee(p, J(Se(d)));
            r = Oe(O.body, Te, B, M);
          }
        }
        a.isString(f) || (f = f ? "include" : "omit");
        const g = "credentials" in Request.prototype;
        h = new Request(t, {
          ...b,
          signal: E,
          method: n.toUpperCase(),
          headers: u.normalize().toJSON(),
          body: r,
          duplex: "half",
          credentials: g ? f : void 0,
        });
        let S = await fetch(h);
        const R = se && (l === "stream" || l === "response");
        if (se && (c || (R && y))) {
          const O = {};
          ["status", "statusText", "headers"].forEach((he) => {
            O[he] = S[he];
          });
          const N = a.toFiniteNumber(S.headers.get("content-length")),
            [B, M] = (c && Ee(N, J(Se(c), !0))) || [];
          S = new Response(
            Oe(S.body, Te, B, () => {
              M && M(), y && y();
            }),
            O
          );
        }
        l = l || "text";
        let C = await V[a.findKey(V, l) || "text"](S, e);
        return (
          !R && y && y(),
          await new Promise((O, N) => {
            Je(O, N, { data: C, headers: A.from(S.headers), status: S.status, statusText: S.statusText, config: e, request: h });
          })
        );
      } catch (g) {
        throw (
          (y && y(),
          g && g.name === "TypeError" && /fetch/i.test(g.message)
            ? Object.assign(new m("Network Error", m.ERR_NETWORK, e, h), { cause: g.cause || g })
            : m.from(g, g && g.code, e, h))
        );
      }
    }),
  oe = { http: qt, xhr: pn, fetch: On };
a.forEach(oe, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ae = (e) => `- ${e}`,
  Tn = (e) => a.isFunction(e) || e === null || e === !1,
  Ge = {
    getAdapter: (e) => {
      e = a.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const s = {};
      for (let i = 0; i < t; i++) {
        n = e[i];
        let o;
        if (((r = n), !Tn(n) && ((r = oe[(o = String(n)).toLowerCase()]), r === void 0))) throw new m(`Unknown adapter '${o}'`);
        if (r) break;
        s[o || "#" + i] = r;
      }
      if (!r) {
        const i = Object.entries(s).map(
          ([c, d]) => `adapter ${c} ` + (d === !1 ? "is not supported by the environment" : "is not available in the build")
        );
        let o = t
          ? i.length > 1
            ? `since :
` +
              i.map(Ae).join(`
`)
            : " " + Ae(i[0])
          : "as no adapter specified";
        throw new m("There is no suitable adapter to dispatch the request " + o, "ERR_NOT_SUPPORT");
      }
      return r;
    },
    adapters: oe,
  };
function ee(e) {
  if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)) throw new U(null, e);
}
function Le(e) {
  return (
    ee(e),
    (e.headers = A.from(e.headers)),
    (e.data = Z.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Ge.getAdapter(e.adapter || H.adapter)(e).then(
      function (r) {
        return ee(e), (r.data = Z.call(e, e.transformResponse, r)), (r.headers = A.from(r.headers)), r;
      },
      function (r) {
        return (
          ze(r) ||
            (ee(e),
            r && r.response && ((r.response.data = Z.call(e, e.transformResponse, r.response)), (r.response.headers = A.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const Xe = "1.7.7",
  de = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  de[e] = function (r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const xe = {};
de.transitional = function (t, n, r) {
  function s(i, o) {
    return "[Axios v" + Xe + "] Transitional option '" + i + "'" + o + (r ? ". " + r : "");
  }
  return (i, o, c) => {
    if (t === !1) throw new m(s(o, " has been removed" + (n ? " in " + n : "")), m.ERR_DEPRECATED);
    return (
      n && !xe[o] && ((xe[o] = !0), console.warn(s(o, " has been deprecated since v" + n + " and will be removed in the near future"))),
      t ? t(i, o, c) : !0
    );
  };
};
function An(e, t, n) {
  if (typeof e != "object") throw new m("options must be an object", m.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const i = r[s],
      o = t[i];
    if (o) {
      const c = e[i],
        d = c === void 0 || o(c, i, e);
      if (d !== !0) throw new m("option " + i + " must be " + d, m.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new m("Unknown option " + i, m.ERR_BAD_OPTION);
  }
}
const ie = { assertOptions: An, validators: de },
  P = ie.validators;
class k {
  constructor(t) {
    (this.defaults = t), (this.interceptors = { request: new ge(), response: new ge() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s;
        Error.captureStackTrace ? Error.captureStackTrace((s = {})) : (s = new Error());
        const i = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? i &&
              !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + i)
            : (r.stack = i);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}), (n = F(this.defaults, n));
    const { transitional: r, paramsSerializer: s, headers: i } = n;
    r !== void 0 &&
      ie.assertOptions(
        r,
        {
          silentJSONParsing: P.transitional(P.boolean),
          forcedJSONParsing: P.transitional(P.boolean),
          clarifyTimeoutError: P.transitional(P.boolean),
        },
        !1
      ),
      s != null &&
        (a.isFunction(s) ? (n.paramsSerializer = { serialize: s }) : ie.assertOptions(s, { encode: P.function, serialize: P.function }, !0)),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let o = i && a.merge(i.common, i[n.method]);
    i &&
      a.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (h) => {
        delete i[h];
      }),
      (n.headers = A.concat(o, i));
    const c = [];
    let d = !0;
    this.interceptors.request.forEach(function (y) {
      (typeof y.runWhen == "function" && y.runWhen(n) === !1) || ((d = d && y.synchronous), c.unshift(y.fulfilled, y.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function (y) {
      l.push(y.fulfilled, y.rejected);
    });
    let u,
      f = 0,
      b;
    if (!d) {
      const h = [Le.bind(this), void 0];
      for (h.unshift.apply(h, c), h.push.apply(h, l), b = h.length, u = Promise.resolve(n); f < b; ) u = u.then(h[f++], h[f++]);
      return u;
    }
    b = c.length;
    let E = n;
    for (f = 0; f < b; ) {
      const h = c[f++],
        y = c[f++];
      try {
        E = h(E);
      } catch (p) {
        y.call(this, p);
        break;
      }
    }
    try {
      u = Le.call(this, E);
    } catch (h) {
      return Promise.reject(h);
    }
    for (f = 0, b = l.length; f < b; ) u = u.then(l[f++], l[f++]);
    return u;
  }
  getUri(t) {
    t = F(this.defaults, t);
    const n = Ve(t.baseURL, t.url);
    return He(n, t.params, t.paramsSerializer);
  }
}
a.forEach(["delete", "get", "head", "options"], function (t) {
  k.prototype[t] = function (n, r) {
    return this.request(F(r || {}, { method: t, url: n, data: (r || {}).data }));
  };
});
a.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (i, o, c) {
      return this.request(F(c || {}, { method: t, headers: r ? { "Content-Type": "multipart/form-data" } : {}, url: i, data: o }));
    };
  }
  (k.prototype[t] = n()), (k.prototype[t + "Form"] = n(!0));
});
class fe {
  constructor(t) {
    if (typeof t != "function") throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](s);
      r._listeners = null;
    }),
      (this.promise.then = (s) => {
        let i;
        const o = new Promise((c) => {
          r.subscribe(c), (i = c);
        }).then(s);
        return (
          (o.cancel = function () {
            r.unsubscribe(i);
          }),
          o
        );
      }),
      t(function (i, o, c) {
        r.reason || ((r.reason = new U(i, o, c)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r);
      };
    return this.subscribe(n), (t.signal.unsubscribe = () => this.unsubscribe(n)), t.signal;
  }
  static source() {
    let t;
    return {
      token: new fe(function (s) {
        t = s;
      }),
      cancel: t,
    };
  }
}
function Ln(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function xn(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const ae = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(ae).forEach(([e, t]) => {
  ae[t] = e;
});
function Qe(e) {
  const t = new k(e),
    n = Ce(k.prototype.request, t);
  return (
    a.extend(n, k.prototype, t, { allOwnKeys: !0 }),
    a.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (s) {
      return Qe(F(e, s));
    }),
    n
  );
}
const w = Qe(H);
w.Axios = k;
w.CanceledError = U;
w.CancelToken = fe;
w.isCancel = ze;
w.VERSION = Xe;
w.toFormData = G;
w.AxiosError = m;
w.Cancel = w.CanceledError;
w.all = function (t) {
  return Promise.all(t);
};
w.spread = Ln;
w.isAxiosError = xn;
w.mergeConfig = F;
w.AxiosHeaders = A;
w.formToJSON = (e) => ve(a.isHTMLForm(e) ? new FormData(e) : e);
w.getAdapter = Ge.getAdapter;
w.HttpStatusCode = ae;
w.default = w;
window.axios = w;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
AOS.init();
document.addEventListener("DOMContentLoaded", function () {
  const e = document.querySelectorAll(".navbar-burger"),
    t = document.querySelectorAll(".navbar-menu");
  if (e.length && t.length)
    for (var n = 0; n < e.length; n++)
      e[n].addEventListener("click", function () {
        for (var i = 0; i < t.length; i++) t[i].classList.toggle("hidden");
      });
  const r = document.querySelectorAll(".navbar-close"),
    s = document.querySelectorAll(".navbar-backdrop");
  if (r.length)
    for (var n = 0; n < r.length; n++)
      r[n].addEventListener("click", function () {
        for (var o = 0; o < t.length; o++) t[o].classList.toggle("hidden");
      });
  if (s.length)
    for (var n = 0; n < s.length; n++)
      s[n].addEventListener("click", function () {
        for (var o = 0; o < t.length; o++) t[o].classList.toggle("hidden");
      });
});
function Cn() {
  const e = {
    home: document.querySelector("#home"),
    about: document.querySelector("#about"),
    portfolio: document.querySelector("#portfolio"),
    experience: document.querySelector("#experience"),
    contact: document.querySelector("#contact"),
  };
  window.addEventListener("scroll", () => {
    const t = window.scrollY + window.innerHeight / 2;
    for (const [n, r] of Object.entries(e)) {
      const s = r.getBoundingClientRect().top + window.scrollY,
        i = s + r.offsetHeight,
        o = document.querySelector(`a[href="#${n}"]`);
      t >= s && t < i
        ? (o.classList.add("text-indigo-600", "font-bold"), o.classList.remove("text-gray-400"))
        : (o.classList.remove("text-indigo-600", "font-bold"), o.classList.add("text-gray-400"));
    }
  });
}
Cn();
document.addEventListener("DOMContentLoaded", () => {
  const e = document.getElementById("theme-toggle"),
    t = document.documentElement,
    n = document.getElementById("moon"),
    r = document.getElementById("sun");
  localStorage.getItem("dark-mode") === "enabled"
    ? (t.classList.add("dark"), n.classList.add("hidden"), r.classList.remove("hidden"))
    : r.classList.add("hidden"),
    e.addEventListener("click", () => {
      t.classList.contains("dark")
        ? (t.classList.remove("dark"), localStorage.setItem("dark-mode", "disabled"), n.classList.remove("hidden"), r.classList.add("hidden"))
        : (t.classList.add("dark"), localStorage.setItem("dark-mode", "enabled"), n.classList.add("hidden"), r.classList.remove("hidden"));
    });
});
document.addEventListener("DOMContentLoaded", () => {
  const e = document.getElementById("theme-toggle2"),
    t = document.documentElement,
    n = document.getElementById("moon-icon"),
    r = document.getElementById("sun-icon");
  localStorage.getItem("dark-mode") === "enabled"
    ? (t.classList.add("dark"), n.classList.add("hidden"), r.classList.remove("hidden"))
    : r.classList.add("hidden"),
    e.addEventListener("click", () => {
      t.classList.contains("dark")
        ? (t.classList.remove("dark"), localStorage.setItem("dark-mode", "disabled"), n.classList.remove("hidden"), r.classList.add("hidden"))
        : (t.classList.add("dark"), localStorage.setItem("dark-mode", "enabled"), n.classList.add("hidden"), r.classList.remove("hidden"));
    });
});
