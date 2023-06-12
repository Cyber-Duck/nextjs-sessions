import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json(
        {
            'id': 2,
            'title': 'Quisque ut nulla ac',
            'slug': 'quisque-ut-nulla-ac',
            'description': 'Proin vehicula, velit ac aliquam faucibus, quam tortor placerat ipsum, vel mollis turpis ante ac augue.',
            'content': 'Nullam sed sollicitudin diam. Etiam scelerisque, mauris id auctor vulputate, leo nisl tincidunt eros, in aliquet leo ante eu mi. Nullam sed sollicitudin diam. Etiam scelerisque, mauris id auctor vulputate, leo nisl tincidunt eros, in aliquet leo ante eu mi. Nullam sed sollicitudin diam. Etiam scelerisque, mauris id auctor vulputate, leo nisl tincidunt eros, in aliquet leo ante eu mi. Nullam sed sollicitudin diam. Etiam scelerisque, mauris id auctor vulputate, leo nisl tincidunt eros, in aliquet leo ante eu mi. Nullam sed sollicitudin diam. Etiam scelerisque, mauris id auctor vulputate, leo nisl tincidunt eros, in aliquet leo ante eu mi. ',
            'img': 'https://loremflickr.com/800/600/porto',
            'date': '2023-05-19T13:05:34+00:00'
        }
    );
}
