from PIL import Image
from collections import deque

src = r"c:\Users\admin\Desktop\Shekinah\public\site-assets\assets\images\logo-shekinah-full.png"
dst = r"c:\Users\admin\Desktop\Shekinah\public\site-assets\assets\images\logo-shekinah-transparent.png"

im = Image.open(src).convert("RGBA")
w, h = im.size
px = im.load()

def is_bg(p):
    r, g, b, a = p
    return r > 235 and g > 235 and b > 235

# Flood fill from all edges to remove only the connected outer white background
visited = [[False] * w for _ in range(h)]
q = deque()
for x in range(w):
    for y in (0, h - 1):
        if is_bg(px[x, y]):
            q.append((x, y))
            visited[y][x] = True
for y in range(h):
    for x in (0, w - 1):
        if is_bg(px[x, y]) and not visited[y][x]:
            q.append((x, y))
            visited[y][x] = True

while q:
    x, y = q.popleft()
    r, g, b, a = px[x, y]
    px[x, y] = (r, g, b, 0)
    for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
        nx, ny = x + dx, y + dy
        if 0 <= nx < w and 0 <= ny < h and not visited[ny][nx] and is_bg(px[nx, ny]):
            visited[ny][nx] = True
            q.append((nx, ny))

# Soften anti-aliased edge pixels: scale alpha by darkness for near-white leftovers touching transparency
im.save(dst)
print("saved", dst)
