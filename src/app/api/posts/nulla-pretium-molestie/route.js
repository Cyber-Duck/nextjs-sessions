import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json(
        {
            'id': 3,
            'title': 'Nulla pretium molestie',
            'slug': 'nulla-pretium-molestie',
            'description': 'Fusce convallis orci at nulla feugiat, varius suscipit dui aliquam.',
            'content': '<p>Nullam sed sollicitudin diam. Etiam scelerisque, mauris id auctor vulputate, leo nisl tincidunt eros, in aliquet leo ante eu mi.</p> <p>Nullam sed sollicitudin diam. Etiam scelerisque, mauris id auctor vulputate, leo nisl tincidunt eros, in aliquet leo ante eu mi. Nullam sed sollicitudin diam. Etiam scelerisque, mauris id auctor vulputate, leo nisl tincidunt eros, in aliquet leo ante eu mi. Nullam sed sollicitudin diam. Etiam scelerisque, mauris id auctor vulputate, leo nisl tincidunt eros, in aliquet leo ante eu mi. Nullam sed sollicitudin diam. Etiam scelerisque, mauris id auctor vulputate, leo nisl tincidunt eros, in aliquet leo ante eu mi.</p>',
            'img': 'https://loremflickr.com/800/600/colorado',
            'date': '2023-05-19T13:05:34+00:00'
        }
    );
}
