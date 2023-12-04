import userEvent from "@testing-library/user-event";
import Scoops from "./index";
import { render, screen } from "@testing-library/react";

test("API den gelen her bir çeşit için ekrana bir karrt basılır. ", async () => {
  // test emke istediğin elemanı ekrana basma
  render(<Scoops />);

  /*

    ! test ortamında secicilerin kullanılması

    komut-get [alabileceği şeyler- all]
    getByRole

   - komutu neye göre belirlersin?
   *get => elamanlar başlang. varsa
   *find => ne zman ekrana geleceği belli değilse. api gibi 
   *query -> dom da yoks ve  koşul dönüyorsa

   not: find metodu asyn old için bu yapıyla kullanılma.
    */

  const images = await screen.findAllByRole("img");

  expect(images).toHaveLength(4);
});

test("çeşit ekleme işleminin toplam fiyata yanısması", async () => {
  render(<Scoops />);

  const user = userEvent.setup();

  //   toplam fiyata erişme
  const total = screen.getByRole("heading", { name: /Çeşitler ücreti/i });

  //   butona erişme
  const buttons = await screen.findAllByRole("button", { name: "Ekle" });
  // bir tane çeşit ele ve fiyatını kontrol et
  await user.click(buttons[0]);
  expect(total).toHaveTextContent("20");

  // iki çeşit ekle ve kontrol et
  await user.dblClick(buttons[1]);
  expect(total).toHaveTextContent("60");
});

test("çeşit sıfırlama işleminin toplama yansıması", async () => {
  render(<Scoops />);

  const user = userEvent.setup();

  const total = screen.getByRole("heading", {
    name: /Çeşitler Ücreti/i,
  });

  const delButtons = await screen.findAllByRole("button", { name: "Sıfırla" });
  const addButtons = await screen.findAllByRole("button", { name: "Ekle" });

  // 2 farklı çeşit ekleme
  //2 Farklı Çeşit Ekletme
  await user.click(addButtons[2]);
  await user.dblClick(addButtons[3]);
  expect(total).toHaveTextContent(60);

  // sepette bir tane olan çeidi silme ve toplamınkontorl et

  await user.click(delButtons[2]);
  expect(total).toHaveTextContent(40);

  await user.click(delButtons[3])
expect(total).toHaveTextContent(0)
});
