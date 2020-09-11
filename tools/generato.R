library(jsonlite)
library(readr)
library(magick)
library(dplyr)

data <- read_csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vS6F57nhMUGKEIJ_cZYvCdunhmLX3gWxtAK9eCm5gjRj8SpGjKttpevQyWuDn-5ixys_HouqFMJGl18/pub?gid=0&single=true&output=csv")

# ořízni fotky

for(i in data$f) {
  obr <- image_read(i)
  obr <- image_strip(obr)
  obr <- image_crop(obr, "201x201")
  obr <- image_resize(obr, "120")
  image_write(obr, paste0("../foto/", basename(i)), "jpg")
}

# udělej JSON

data <- data %>% select(1:7)
data$f <- basename(data$f)

write_json(data, path="../data/data.json", na="null")
