const Handlebars = require('handlebars');

module.exports = {
    sum: (a, b) => a + b,
    sortable: (field, sort) => {
        let sortType = field === sort.column ? sort.type : 'default';

        let icons = {
            default: 'oi oi-elevator',
            asc: 'oi oi-sort-ascending',
            desc: 'oi oi-sort-descending',
        };

        let types = {
            default: 'desc',
            asc: 'desc',
            desc: 'asc',
        };

        let icon = icons[sortType];
        let type = types[sortType];

        let href = Handlebars.escapeExpression(
            `?_sort&column=${field}&type=${type}`,
        );
        let output = `<a href="${href}">
            <span class="${icon}"></span>
        </a>`;

        return new Handlebars.SafeString(output);
    },
};
