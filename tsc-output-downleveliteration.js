var tslib_1 = a;
function serialAsyncMap(collection, fn) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var result, collection_1, collection_1_1, item, _a, _b, e_1_1, e_1, _c;
        return tslib_1.__generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    result = [];
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 6, 7, 8]);
                    collection_1 = tslib_1.__values(collection), collection_1_1 = collection_1.next();
                    _d.label = 2;
                case 2:
                    if (!!collection_1_1.done) return [3 /*break*/, 5];
                    item = collection_1_1.value;
                    _b = (_a = result).push;
                    return [4 /*yield*/, fn(item)];
                case 3:
                    _b.apply(_a, [_d.sent()]);
                    _d.label = 4;
                case 4:
                    collection_1_1 = collection_1.next();
                    return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 8];
                case 6:
                    e_1_1 = _d.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 8];
                case 7:
                    try {
                        if (collection_1_1 && !collection_1_1.done && (_c = collection_1["return"])) _c.call(collection_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/, result];
            }
        });
    });
}
exports.serialAsyncMap = serialAsyncMap;
