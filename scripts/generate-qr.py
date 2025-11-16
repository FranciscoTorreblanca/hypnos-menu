import qrcode
from qrcode.image.styledpil import StyledPilImage
from qrcode.image.styles.moduledrawers.pil import RoundedModuleDrawer

MENU_URL = "https://hypnos-menu.netlify.app/"
qr = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_H)
qr.add_data(MENU_URL)

img = qrcode.make(MENU_URL)
img_rounded = qr.make_image(image_factory=StyledPilImage, module_drawer=RoundedModuleDrawer())

img.save("QR.png")
img_rounded.save("QR_ROUNDED.png")
