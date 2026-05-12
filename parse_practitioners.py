import re
import json

def parse_practitioners(filepath
    with open(filepath, 'r') as f:
        text = f.read()

    practitioners = []
    
    # Split text into sections for each practitioner
    # Using 'Slug:' or 'URL:' as rough boundaries, but they aren't the start.
    # Usually "Meta Title" is near the start of each block.
    blocks = re.split(r'(?=Meta Title)', text)
    
    for block in blocks:
        if not block.strip(): continue
        
        p = {}
        
        # Meta Title
        title_match = re.search(r'Meta Title:?\s*(.+)', block, re.IGNORECASE)
        # Meta Description
        desc_match = re.search(r'Meta Description:?\s*(.+?)(?=\n\n|\nURL:|\nSlug:)', block, re.IGNORECASE | re.DOTALL)
        
        # Slug
        slug_match = re.search(r'(?:Slug|URL):?\s*https://flowergrid\.co\.uk/practitioner/([a-zA-Z0-9-]+)', block, re.IGNORECASE)
        
        if slug_match:
            p['slug'] = slug_match.group(1).strip()
        else:
            continue
            
        p['seo'] = {
            'title': title_match.group(1).strip() if title_match else '',
            'description': desc_match.group(1).strip().replace('\n', ' ') if desc_match else ''
        }
        
        # H1
        h1_match = re.search(r'H1:\s*(.+)', block)
        # Subtitle usually follows H1 or is marked
        subtitle_match = re.search(r'H1:.*?\n(.+)', block) 
        
        p['hero'] = {
            'name': h1_match.group(1).strip() if h1_match else '',
            'title': subtitle_match.group(1).strip() if subtitle_match else '',
            'subtitle': subtitle_match.group(1).strip() if subtitle_match else '',
            'description': '', # Will fill later
            'image': '' # Will fill later
        }
        
        practitioners.append(p)

    return practitioners

print(json.dumps(parse_practitioners("practitioner_content.txt"), indent=2))
