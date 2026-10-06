import os
from PIL import Image, ImageChops

def get_white_bbox(img_path):
    try:
        img = Image.open(img_path).convert("RGB")
        bg = Image.new("RGB", img.size, (255, 255, 255))
        diff = ImageChops.difference(img, bg)
        bbox = diff.getbbox()
        return img.size, bbox
    except Exception as e:
        return None, str(e)

photos_dir = r'c:\Movies\Internship\RaiseIndia\raisengo\public\Photos'
for f in os.listdir(photos_dir):
    if f.endswith('.webp'):
        size, bbox = get_white_bbox(os.path.join(photos_dir, f))
        print(f"{f} - Size: {size}, BBox: {bbox}")
