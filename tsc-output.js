function serialAsyncMap(collection, fn) {
    return __awaiter(this, void 0, void 0, function () {
        var result, _i, collection_1, item, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    result = [];
                    _i = 0, collection_1 = collection;
                    _c.label = 1;
                case 1:
                    if (!(_i < collection_1.length)) return [3 /*break*/, 4];
                    item = collection_1[_i];
                    _b = (_a = result).push;
                    return [4 /*yield*/, fn(item)];
                case 2:
                    _b.apply(_a, [_c.sent()]);
                    _c.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/, result];
            }
        });
    });
}