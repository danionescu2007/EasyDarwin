webpackJsonp([4], {
  '6zJH': function(t, e, r) {
    'use strict';
    r.d(e, 'a', function() {
      return n;
    });
    r.d(e, 'b', function() {
      return s;
    });
    var n = function() {
      var t = this;
      var e = t.$createElement;
      var r = t._self._c || e;
      return r('div', { staticClass: 'container-fluid no-padding' }, [
        r(
          'div',
          { staticClass: 'col-lg-offset-2 col-lg-8 no-padding server-info' },
          [
            r('div', { staticClass: 'box box-widget' }, [
              t._m(0),
              t._v(' '),
              r(
                'div',
                { staticClass: 'box-body table-responsive no-padding' },
                [
                  r('table', { staticClass: 'table table-striped' }, [
                    r('tbody', [
                      r('tr', [
                        r('td', { staticStyle: { width: '20%' } }, [
                          t._v('Hardware information'),
                        ]),
                        t._v(' '),
                        r('td', [
                          r('span', { attrs: { id: 'hardware-info' } }, [
                            t._v(t._s(t.serverInfo.Hardware)),
                          ]),
                        ]),
                      ]),
                      t._v(' '),
                      r('tr', [
                        r('td', [t._v('Interface version')]),
                        t._v(' '),
                        r('td', [
                          r('span', { attrs: { id: 'interface-info' } }, [
                            t._v(t._s(t.serverInfo.InterfaceVersion)),
                          ]),
                        ]),
                      ]),
                      t._v(' '),
                      r('tr', [
                        r('td', [t._v('Uptime')]),
                        t._v(' '),
                        r('td', [
                          r('span', { attrs: { id: 'running-time-info' } }, [
                            t._v(
                              t._s(t.runningTime || t.serverInfo.RunningTime)
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(' '),
                      r('tr', [
                        r('td', [t._v('Software version')]),
                        t._v(' '),
                        r('td', [
                          r('span', { attrs: { id: 'software-info' } }, [
                            t._v(t._s("v8.1.0351 (Platform/Linux)")),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]
              ),
            ]),
          ]
        ),
      ]);
    };
    var s = [
      function() {
        var t = this;
        var e = t.$createElement;
        var r = t._self._c || e;
        return r('div', { staticClass: 'box-header' }, [
          r('h3', [
            r('i', { staticClass: 'fa fa-support' }),
            t._v(' System Information'),
          ]),
        ]);
      },
    ];
  },
  '83xz': function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: true });
    var n =
      Object.assign ||
      function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = arguments[e];
          for (var n in r) {
            if (Object.prototype.hasOwnProperty.call(r, n)) {
              t[n] = r[n];
            }
          }
        }
        return t;
      };
    var s = r('EcfS');
    var a = r('LNpW');
    var i = (function() {
      var t = a;
      if (t && t.__esModule) {
        return t;
      } else {
        return { default: t };
      }
    })();
    e.default = {
      data: function() {
        return { timer: 0, runningTime: '' };
      },
      computed: n({}, s.mapState(['serverInfo'])),
      mounted: function() {
        var t = this;
        this.timer = setInterval(function() {
          if (t.serverInfo && t.serverInfo.StartUpTime) {
            var e = i.default(t.serverInfo.StartUpTime, 'YYYY-MM-DD HH:mm:ss');
            var r = i.default();
            var n = i.default.duration(r.diff(e));
            t.runningTime =
              parseInt(n.asDays()) +
              ' Days ' +
              n.hours() +
              ' Hours ' +
              n.minutes() +
              ' Mins ' +
              n.seconds() +
              ' Secs';
          }
        }, 1e3);
      },
      beforeDestroy: function() {
        if (this.timer) {
          clearInterval(this.timer);
          this.timer = 0;
        }
      },
      methods: {},
    };
  },
  sZXX: function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: true });
    var n = r('83xz');
    var s = r.n(n);
    for (var a in n) {
      if (a !== 'default') {
        (function() {
          var t = a;
          r.d(e, t, function() {
            return n[t];
          });
        })();
      }
    }
    var i = r('6zJH');
    var o = r('PrYt');
    var f = Object(o.a)(s.a, i.a, i.b, false, null, null, null);
    e.default = f.exports;
  },
});
