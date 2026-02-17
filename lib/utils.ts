/**
 * @param tldr 
 * @returns 
 */
export function extractTldrText(tldr: any): string {
    if (!tldr) return '';
    if (typeof tldr === 'string') return tldr;

    if (tldr.blocks && Array.isArray(tldr.blocks)) {
        return tldr.blocks.map((block: any) => {
            if (block.type === 'paragraph' || block.type === 'header') {
                return block.data.text;
            }
            if (block.type === 'list') {
                return block.data.items.join(' ');
            }
            return '';
        }).join(' ')
            .replace(/<[^>]*>?/gm, '')
            .replace(/&nbsp;/g, ' ')
            .replace(/\u00A0/g, ' ')
            .trim();
    }

    return '';
}

/**
 * @param content - Editor.js OutputData
 * @returns Array of image URLs
 */
export function extractImageUrls(content: any): string[] {
    if (!content || !content.blocks || !Array.isArray(content.blocks)) return [];

    return content.blocks
        .filter((block: any) => block.type === 'image' && block.data?.file?.url)
        .map((block: any) => block.data.file.url);
}

/**
 * @param path - Image path
 * @returns Full image URL
 */
export function getImageUrl(path: string): string {
    const baseUrl = process.env.NEXT_PUBLIC_IMGURL || '';
    if (!path) return '';
    if (path.startsWith('http') || path.startsWith('data:')) return path;

    // Ensure baseUrl ends with / and path doesn't start with / to avoid //
    const cleanBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
    const cleanPath = path.startsWith('/') ? path : `/${path}`;

    return `${cleanBase}${cleanPath}`;
}
