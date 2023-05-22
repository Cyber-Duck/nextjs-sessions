import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json([
        {
            'id': 1,
            'title': 'Nullam sed sollicitudin',
            'slug': 'nullam-sed-sollicitudin',
            'description': 'Nullam sed sollicitudin diam. Etiam scelerisque, mauris id auctor vulputate, leo nisl tincidunt eros, in aliquet leo ante eu mi.',
            'img': 'https://loremflickr.com/320/240/london',
            'date': '2023-05-19T13:05:34+00:00'
        },
        {
            'id': 2,
            'title': 'Quisque ut nulla ac',
            'slug': '/quisque-ut-nulla-ac',
            'description': 'Proin vehicula, velit ac aliquam faucibus, quam tortor placerat ipsum, vel mollis turpis ante ac augue.',
            'img': 'https://loremflickr.com/320/240/porto',
            'date': '2023-04-24T11:34:22+00:00'
        },
        {
            'id': 3,
            'title': 'Nulla pretium molestie',
            'slug': '/nulla-pretium-molestie',
            'description': 'Fusce convallis orci at nulla feugiat, varius suscipit dui aliquam.',
            'img': 'https://loremflickr.com/320/240/colorado',
            'date': '2023-02-06T05:05:53+00:00'
        }
    ]);
}
