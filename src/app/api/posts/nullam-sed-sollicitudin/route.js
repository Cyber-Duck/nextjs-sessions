import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json(
        {
            'id': 1,
            'title': 'Nullam sed sollicitudin',
            'slug': 'nullam-sed-sollicitudin',
            'description': 'Nullam sed sollicitudin diam. Etiam scelerisque, mauris id auctor vulputate, leo nisl tincidunt eros, in aliquet leo ante eu mi.',
            'content': 'Nullam sed sollicitudin diam. Etiam scelerisque, mauris id auctor vulputate, leo nisl tincidunt eros, in aliquet leo ante eu mi. Nullam sed sollicitudin diam. Etiam scelerisque, mauris id auctor vulputate, leo nisl tincidunt eros, in aliquet leo ante eu mi. Nullam sed sollicitudin diam. Etiam scelerisque, mauris id auctor vulputate, leo nisl tincidunt eros, in aliquet leo ante eu mi. Nullam sed sollicitudin diam. Etiam scelerisque, mauris id auctor vulputate, leo nisl tincidunt eros, in aliquet leo ante eu mi. Nullam sed sollicitudin diam. Etiam scelerisque, mauris id auctor vulputate, leo nisl tincidunt eros, in aliquet leo ante eu mi. ',
            'img': 'https://loremflickr.com/800/600/london',
            'date': '2023-05-19T13:05:34+00:00'
        }
    );
}
