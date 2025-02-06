const library = [
    {
        _title: 'A1',
        _author: 'abc',
        _status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        _title: 'A2',
        _author: 'def',
        _status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        _title: 'A3',
        _author: 'ghi',
        _status: {
            own: true,
            reading: false,
            read: false
        }
    }
];

library[0]._status.read = true;
library[1]._status.read = true;
library[2]._status.read = true;

console.log(library);

const { _title: firstBook } = library[0];
console.log(firstBook);