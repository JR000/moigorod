points = [
    (96, 1),
    (95, 46),
    (1, 46),
    (1, 300),
    (208, 300),
    (208, 1)
]

w, h = 1064, 649

nw, nh = 100, 100
if (w > h):
    nh *= (h / w)
else:
    nw *= (w / h)

for x, y in points:
    print(x / w * nw, y / h * nh)