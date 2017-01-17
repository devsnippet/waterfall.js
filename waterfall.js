(factory => {
    let root = (typeof self === 'object' && self.self === self && self) ||
        (typeof global === 'object' && global.global === global && global);
    if (typeof define === 'function' && define.amd) {
        define([], () => {
            root.Waterfall = factory();
        });
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.Waterfall = factory();
    }
})(() => {
    let _ctn = null, _space = [20, 20], _data, _selector, _keep_css = false;
    let Waterfall = {

        init (container, selector, config = {}) {
            _ctn = container;
            _keep_css = config.keep_css || false;
            _selector = selector;
            _space = config.space || _space;
            _data = null;
            if (!_keep_css) {
                _ctn.style.position = 'relative';
            }
            _ctn.style.padding = '0';
            Waterfall.fall();
        },

        fall (cache) {
            if (!_ctn) return;
            let box = _ctn.querySelector(_selector);
            if (!box) return;

            let _box_w = box.offsetWidth + _space[1] * 2;
            if (!cache || !_data) {
                _data = [];
                _data.count = 0;
                let _ctn_w = _ctn.offsetWidth;
                _ctn_w = Math.max(_ctn_w, _box_w);
                let _cols = Math.floor(_ctn_w / _box_w);
                let _margin = (_ctn_w - _box_w * _cols) / 2;
                for (let i = 0; i < _cols; i++) {
                    let _col_data = {
                        left: _margin + i * _box_w,
                        top: 0,
                    };
                    _data.push(_col_data);
                }
            }

            let boxs = [].slice.call(_ctn.querySelectorAll(_selector));

            boxs.forEach((box, index) => {
                if (index < _data.count) return;
                let min_top = +Infinity, col_index;
                _data.forEach((_col_data, col) => {
                    if (_col_data.top < min_top) {
                        min_top = _col_data.top;
                        col_index = col;
                    }
                });
                let col_data = _data[col_index];
                _data.count++;
                box.style.position = 'absolute';
                box.style.margin = '0';
                box.style.top = col_data.top + _space[0] + 'px';
                box.style.left = col_data.left + _space[1] + 'px';
                col_data.top += box.offsetHeight + _space[0] * 2;
            });

            let _ctn_h = 0;
            _data.forEach((_col_data) => {
                if (_col_data.top > _ctn_h) {
                    _ctn_h = _col_data.top;
                }
            });
            if (!_keep_css) {
                _ctn.style.height = _ctn_h + 'px';
            }
        },

        reset () {
            if (!_ctn) return;
            _data = null;
            [].slice.call(_ctn.querySelectorAll(_selector)).forEach(elem => {
                elem.parentNode.removeChild(elem);
            });
        }
    };

    return Waterfall;

});



