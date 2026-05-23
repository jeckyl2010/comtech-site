"""
Generate og-default.png for comtechconsulting.dk
1200x630, dark background, brand colours, wordmark, headline, tagline
"""

from PIL import Image, ImageDraw, ImageFont
import os, textwrap

W, H = 1200, 630
OUT = os.path.join(os.path.dirname(__file__), '../public/og-default.png')

BG      = (13,  13,  16)
ACCENT  = (83,  82, 204)
ACCENT2 = (99,  98, 220)
TEXT_1  = (244, 244, 245)
TEXT_2  = (161, 161, 170)
TEXT_3  = (100, 100, 112)
BORDER  = (42,  42,  53)

img  = Image.new('RGB', (W, H), BG)
draw = ImageDraw.Draw(img, 'RGBA')

# ── Fonts ─────────────────────────────────────────────────────────────────────
def load(size, bold=False):
    for p in [
        f'/System/Library/Fonts/Supplemental/{"Arial Bold" if bold else "Arial"}.ttf',
        '/System/Library/Fonts/Helvetica.ttc',
    ]:
        try: return ImageFont.truetype(p, size)
        except: pass
    return ImageFont.load_default()

f_wordmark = load(52, bold=True)
f_tech     = load(52)
f_headline = load(40, bold=True)
f_sub      = load(20)
f_tag      = load(13, bold=True)
f_stat_num = load(28, bold=True)
f_stat_lbl = load(14)
f_footer   = load(13)

# ── Column geometry ───────────────────────────────────────────────────────────
M       = 36          # frame margin
LEFT_X  = 76
LEFT_W  = 590         # max width for left column text
SPLIT_X = LEFT_X + LEFT_W + 40  # = 706
RIGHT_X = SPLIT_X + 40          # = 746

# ── Aurora blobs — well clear of text ────────────────────────────────────────
# Kept top-right but pushed fully into the right margin outside content area
for r in range(220, 0, -4):
    alpha = int(20 * (r / 220) ** 1.9)
    draw.ellipse([W - r, -r, W + r, r], fill=(*ACCENT, alpha))

# Bottom-left, below frame
for r in range(160, 0, -4):
    alpha = int(12 * (r / 160) ** 2.1)
    draw.ellipse([M - r, H - M - r, M + r, H - M + r], fill=(*ACCENT2, alpha))

# ── Border frame ──────────────────────────────────────────────────────────────
draw.rectangle([M, M, W - M, H - M], outline=(*BORDER, 200), width=1)
draw.rectangle([M, M, W - M, M + 3], fill=ACCENT)

# ── Right column tinted background panel ─────────────────────────────────────
draw.rectangle([SPLIT_X, M + 3, W - M, H - M],
               fill=(20, 20, 26, 200))
# Vertical rule on the left edge of right panel
draw.line([(SPLIT_X, M + 3), (SPLIT_X, H - M)], fill=(*BORDER, 220), width=1)

# ── Helper: measure text width ────────────────────────────────────────────────
def text_w(text, font):
    return int(draw.textlength(text, font=font))

# ── Wordmark — same baseline ──────────────────────────────────────────────────
Y0 = 88
draw.text((LEFT_X, Y0), 'COM', font=f_wordmark, fill=TEXT_1)
com_w = text_w('COM', f_wordmark)
draw.text((LEFT_X + com_w, Y0), '<tech>', font=f_tech, fill=ACCENT)

# ── Divider under wordmark ────────────────────────────────────────────────────
draw.line([(LEFT_X, 164), (SPLIT_X - 20, 164)], fill=(*BORDER, 220), width=1)

# ── Headline — hard-wrapped to fit LEFT_W ─────────────────────────────────────
# Fit text to column by wrapping at word boundaries
headline_words = 'Software architecture built for the places where it has to work.'.split()
lines, current = [], ''
for word in headline_words:
    test = (current + ' ' + word).strip()
    if text_w(test, f_headline) <= LEFT_W:
        current = test
    else:
        if current:
            lines.append(current)
        current = word
if current:
    lines.append(current)

hy = 188
line_h = 52
for line in lines:
    draw.text((LEFT_X, hy), line, font=f_headline, fill=TEXT_1)
    hy += line_h

# ── Subtitle ──────────────────────────────────────────────────────────────────
sub_y = hy + 18
draw.text((LEFT_X, sub_y),
    'Senior Software Architect & Technical Lead · Copenhagen',
    font=f_sub, fill=TEXT_2)

# ── Tags — tight below subtitle ───────────────────────────────────────────────
tags = ['Pharma', 'Finance', 'Energy', 'Azure', 'Regulated systems']
tx, ty = LEFT_X, sub_y + 36
px, py = 11, 5
for tag in tags:
    tw = text_w(tag, f_tag)
    bw = tw + px * 2
    bh = int(f_tag.size) + py * 2
    draw.rounded_rectangle([tx, ty, tx + bw, ty + bh],
                            radius=5,
                            fill=(*ACCENT, 36),
                            outline=(*ACCENT, 110), width=1)
    draw.text((tx + px, ty + py), tag, font=f_tag, fill=(*ACCENT2, 255))
    tx += bw + 8

# ── Right column stats — vertically centred in panel ─────────────────────────
stats = [
    ('30 years',      'of industry experience'),
    ('8 industries',  'from pharma to public sector'),
    ('Direct contact','no account managers'),
]
stat_block_h = len(stats) * (28 + 22) + (len(stats) - 1) * 22
panel_top    = M + 3
panel_bot    = H - M
ry = panel_top + (panel_bot - panel_top - stat_block_h) // 2

rw = W - M - RIGHT_X   # available right column width

for num, label in stats:
    # Centre each stat in the right column
    nw = text_w(num, f_stat_num)
    lw = text_w(label, f_stat_lbl)
    nx = RIGHT_X + (rw - nw) // 2
    lx = RIGHT_X + (rw - lw) // 2
    draw.text((nx, ry), num, font=f_stat_num, fill=TEXT_1)
    draw.text((lx, ry + 34), label, font=f_stat_lbl, fill=TEXT_2)
    ry += 28 + 34 + 22

# ── Centered footer ───────────────────────────────────────────────────────────
footer = 'comtechconsulting.dk'
fw = text_w(footer, f_footer)
draw.text(((W - fw) // 2, H - 60), footer, font=f_footer, fill=TEXT_3)

# ── Save ─────────────────────────────────────────────────────────────────────
os.makedirs(os.path.dirname(os.path.abspath(OUT)), exist_ok=True)
img.save(OUT, 'PNG', optimize=True)
print(f'Saved: {os.path.abspath(OUT)}  ({W}x{H})')
