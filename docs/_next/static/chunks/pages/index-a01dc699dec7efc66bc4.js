_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [8],
  {
    '/EDR': function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return t('QeBL');
        },
      ]);
    },
    QeBL: function (e, n, t) {
      'use strict';
      t.r(n);
      var r = t('BGKE'),
        o = t('wx14'),
        c = t('YFqc'),
        a = t.n(c);
      var i = { name: 'e23o9g', styles: 'padding:10px' },
        s = { name: '5r9nha', styles: 'font-size:32px' };
      n.default = function (e) {
        var n = Object(o.a)({}, e);
        return Object(r.b)('main', {
          children: Object(r.c)('div', {
            css: i,
            children: [
              Object(r.b)('h1', { css: s, children: 'Project Setup' }),
              Object(r.c)('p', {
                children: [
                  'Props from _app.tsx: ',
                  Object(r.b)('strong', { children: JSON.stringify(n) }),
                ],
              }),
              Object(r.c)('p', {
                children: [
                  'page process env: ',
                  Object(r.b)('strong', { children: 'TEST_PAGE_VAR' }),
                ],
              }),
              Object(r.b)('br', {}),
              Object(r.b)(a.a, {
                href: '/1',
                children: Object(r.b)('a', { children: '1' }),
              }),
            ],
          }),
        });
      };
    },
    YFqc: function (e, n, t) {
      e.exports = t('cTJO');
    },
    cTJO: function (e, n, t) {
      'use strict';
      var r = t('J4zp'),
        o = t('284h');
      (n.__esModule = !0), (n.default = void 0);
      var c = o(t('q1tI')),
        a = t('elyg'),
        i = t('nOHt'),
        s = t('vNVm'),
        u = {};
      function l(e, n, t, r) {
        if (e && (0, a.isLocalURL)(n)) {
          e.prefetch(n, t, r).catch(function (e) {
            0;
          });
          var o =
            r && 'undefined' !== typeof r.locale ? r.locale : e && e.locale;
          u[n + '%' + t + (o ? '%' + o : '')] = !0;
        }
      }
      var f = function (e) {
        var n = !1 !== e.prefetch,
          t = (0, i.useRouter)(),
          o = (t && t.pathname) || '/',
          f = c.default.useMemo(
            function () {
              var n = (0, a.resolveHref)(o, e.href, !0),
                t = r(n, 2),
                c = t[0],
                i = t[1];
              return {
                href: c,
                as: e.as ? (0, a.resolveHref)(o, e.as) : i || c,
              };
            },
            [o, e.href, e.as]
          ),
          d = f.href,
          p = f.as,
          v = e.children,
          h = e.replace,
          b = e.shallow,
          g = e.scroll,
          y = e.locale;
        'string' === typeof v && (v = c.default.createElement('a', null, v));
        var E = c.Children.only(v),
          _ = E && 'object' === typeof E && E.ref,
          m = (0, s.useIntersection)({ rootMargin: '200px' }),
          O = r(m, 2),
          w = O[0],
          j = O[1],
          L = c.default.useCallback(
            function (e) {
              w(e),
                _ &&
                  ('function' === typeof _
                    ? _(e)
                    : 'object' === typeof _ && (_.current = e));
            },
            [_, w]
          );
        (0, c.useEffect)(
          function () {
            var e = j && n && (0, a.isLocalURL)(d),
              r = 'undefined' !== typeof y ? y : t && t.locale,
              o = u[d + '%' + p + (r ? '%' + r : '')];
            e && !o && l(t, d, p, { locale: r });
          },
          [p, d, j, y, n, t]
        );
        var M = {
          ref: L,
          onClick: function (e) {
            E.props &&
              'function' === typeof E.props.onClick &&
              E.props.onClick(e),
              e.defaultPrevented ||
                (function (e, n, t, r, o, c, i, s) {
                  ('A' !== e.currentTarget.nodeName ||
                    (!(function (e) {
                      var n = e.currentTarget.target;
                      return (
                        (n && '_self' !== n) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) &&
                      (0, a.isLocalURL)(t))) &&
                    (e.preventDefault(),
                    null == i && (i = r.indexOf('#') < 0),
                    n[o ? 'replace' : 'push'](t, r, {
                      shallow: c,
                      locale: s,
                      scroll: i,
                    }).then(function (e) {
                      e && i && document.body.focus();
                    }));
                })(e, t, d, p, h, b, g, y);
          },
          onMouseEnter: function (e) {
            (0, a.isLocalURL)(d) &&
              (E.props &&
                'function' === typeof E.props.onMouseEnter &&
                E.props.onMouseEnter(e),
              l(t, d, p, { priority: !0 }));
          },
        };
        if (e.passHref || ('a' === E.type && !('href' in E.props))) {
          var R = 'undefined' !== typeof y ? y : t && t.locale,
            N = (0, a.getDomainLocale)(
              p,
              R,
              t && t.locales,
              t && t.domainLocales
            );
          M.href =
            N ||
            (0, a.addBasePath)((0, a.addLocale)(p, R, t && t.defaultLocale));
        }
        return c.default.cloneElement(E, M);
      };
      n.default = f;
    },
    vNVm: function (e, n, t) {
      'use strict';
      var r = t('J4zp'),
        o = t('TqRt');
      (n.__esModule = !0),
        (n.useIntersection = function (e) {
          var n = e.rootMargin,
            t = e.disabled || !i,
            o = (0, c.useRef)(),
            u = (0, c.useState)(!1),
            l = r(u, 2),
            f = l[0],
            d = l[1],
            p = (0, c.useCallback)(
              function (e) {
                o.current && (o.current(), (o.current = void 0)),
                  t ||
                    f ||
                    (e &&
                      e.tagName &&
                      (o.current = (function (e, n, t) {
                        var r = (function (e) {
                            var n = e.rootMargin || '',
                              t = s.get(n);
                            if (t) return t;
                            var r = new Map(),
                              o = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var n = r.get(e.target),
                                    t =
                                      e.isIntersecting ||
                                      e.intersectionRatio > 0;
                                  n && t && n(t);
                                });
                              }, e);
                            return (
                              s.set(
                                n,
                                (t = { id: n, observer: o, elements: r })
                              ),
                              t
                            );
                          })(t),
                          o = r.id,
                          c = r.observer,
                          a = r.elements;
                        return (
                          a.set(e, n),
                          c.observe(e),
                          function () {
                            a.delete(e),
                              c.unobserve(e),
                              0 === a.size && (c.disconnect(), s.delete(o));
                          }
                        );
                      })(
                        e,
                        function (e) {
                          return e && d(e);
                        },
                        { rootMargin: n }
                      )));
              },
              [t, n, f]
            );
          return (
            (0, c.useEffect)(
              function () {
                i ||
                  f ||
                  (0, a.default)(function () {
                    return d(!0);
                  });
              },
              [f]
            ),
            [p, f]
          );
        });
      var c = t('q1tI'),
        a = o(t('0G5g')),
        i = 'undefined' !== typeof IntersectionObserver;
      var s = new Map();
    },
  },
  [['/EDR', 0, 2, 1, 3]],
]);
