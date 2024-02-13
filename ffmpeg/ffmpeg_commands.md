**Save the frame at second 666 in a grayscale image**
ffmpeg -ss 666 -i 01.mkv -vf format=gray -frames:v 1 out_%03d.png

**Starting at second 666, save 3 seconds of video**
ffmpeg -i 01.mkv -ss 666 -t 3 -c:v copy -c:a copy output_video.mp4

**Scale a video to 1024 pixels wide, keeping the aspect ratio**
ffmpeg -i input_video.mp4 -vf "scale=1024:-1" -c:a copy output_video.mp4

**Create a palette from a given video**
ffmpeg -i 01.mp4 -vf palettegen palette.png

**Apply a palette to a given video**
ffmpeg -i 01.mp4 -i palette.png -filter_complex "[0:v][1:v]paletteuse" -c:a copy output_video.gif
