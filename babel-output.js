var _asyncToGenerator=a,regeneratorRuntime=a;
var serialAsyncMap = exports.serialAsyncMap = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(collection, fn) {
        var result, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        result = [];
                        _iteratorNormalCompletion = true;
                        _didIteratorError = false;
                        _iteratorError = undefined;
                        _context.prev = 4;
                        _iterator = collection[Symbol.iterator]();

                    case 6:
                        if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                            _context.next = 16;
                            break;
                        }

                        item = _step.value;
                        _context.t0 = result;
                        _context.next = 11;
                        return fn(item);

                    case 11:
                        _context.t1 = _context.sent;

                        _context.t0.push.call(_context.t0, _context.t1);

                    case 13:
                        _iteratorNormalCompletion = true;
                        _context.next = 6;
                        break;

                    case 16:
                        _context.next = 22;
                        break;

                    case 18:
                        _context.prev = 18;
                        _context.t2 = _context["catch"](4);
                        _didIteratorError = true;
                        _iteratorError = _context.t2;

                    case 22:
                        _context.prev = 22;
                        _context.prev = 23;

                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }

                    case 25:
                        _context.prev = 25;

                        if (!_didIteratorError) {
                            _context.next = 28;
                            break;
                        }

                        throw _iteratorError;

                    case 28:
                        return _context.finish(25);

                    case 29:
                        return _context.finish(22);

                    case 30:
                        return _context.abrupt("return", result);

                    case 31:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this, [[4, 18, 22, 30], [23,, 25, 29]]);
    }));

    return function serialAsyncMap(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();
