import cv2
import numpy as np

img = cv2.imread('hehe.jpg')
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

kernel_size = 5
blur_gray = cv2.GaussianBlur(gray, (kernel_size, kernel_size), 0)

edges = cv2.Canny(blur_gray, 50, 250)

lines = cv2.HoughLinesP(edges, 1, np.pi / 180, 30, np.array([]), maxLineGap=20)
print(lines)

for line in lines:
    x1, y1, x2, y2 = line[0]
    cv2.line(img, (x1, y1), (x2, y2), (0, 0, 255), 1)



# Show the result
cv2.imshow("Line Detection", img)
cv2.waitKey(0)