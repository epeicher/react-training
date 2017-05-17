'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyInput = function (_React$Component) {
    _inherits(MyInput, _React$Component);

    function MyInput() {
        _classCallCheck(this, MyInput);

        var _this = _possibleConstructorReturn(this, (MyInput.__proto__ || Object.getPrototypeOf(MyInput)).call(this));

        _this.state = { textValue: '' };
        return _this;
    }

    _createClass(MyInput, [{
        key: 'handleChange',
        value: function handleChange(e) {
            var txt = e.target.value;

            this.setState({ textValue: txt });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('input', { type: 'text', placeholder: 'hola caracola',
                    onChange: function onChange(e) {
                        return _this2.handleChange(e);
                    },
                    value: this.state.textValue
                }),
                _react2.default.createElement(
                    'h2',
                    null,
                    'El valor es: ',
                    this.state.textValue
                )
            );
        }
    }]);

    return MyInput;
}(_react2.default.Component);

var Footer = function Footer() {
    return _react2.default.createElement(
        'small',
        null,
        'Footer soy yo maderfacquer'
    );
};

var Header = function Header(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h1',
            null,
            'Hello World my name is ',
            props.name,
            ' and surname is ',
            props.surn
        ),
        _react2.default.createElement('input', { type: 'button', onClick: function onClick(e) {
                props.onClickedButton('petete');
            }, value: 'Soy un button' })
    );
};

var Container = function Container() {

    function handleClick(e) {
        alert('me han clickado');
        console.log('evento', e);
    }

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(Header, { name: 'Johnie', surn: 'McCarthie', onClickedButton: function onClickedButton(e) {
                handleClick(e);
            } }),
        _react2.default.createElement(Footer, null),
        _react2.default.createElement(MyInput, null)
    );
};

_reactDom2.default.render(_react2.default.createElement(Container, null), document.getElementById('root'));
