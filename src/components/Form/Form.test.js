import { fireEvent, render, screen } from "@testing-library/react"
import Form from './index';
import userEvent from "@testing-library/user-event";

test('Koşulların onaylanmasına göre buto aktifliği',async()=> {
// test için formu ekjrana basma
    render(<Form/>)

    // tıklsma olayları user kullanımı
    const user= userEvent.setup

    const orderBtn=screen.getByRole('button')
    const checkBox= screen.getByRole('checkbox')

    // buton başlangıçta inaktif olmalı
    expect(orderBtn).toBeDisabled();

    // checkbox başlangıcta tıksix olacak kontrolu
    expect(checkBox).not.toBeChecked()

    // checkbox tıkla ve buton aktif et
    await userEvent.click(checkBox)
    expect(orderBtn).toBeEnabled()
    
    // check tick kaldır ve inaktif kontrol et
    await userEvent.click(checkBox)
    expect(orderBtn).toBeDisabled();

    // hover olayı ile ilgili


})

test('onayla butonu hover oldu zaman bildirim çıkarma', async()=> {

    // arka planden formu render etme
    render(<Form/>)

    // tıklama olayları için user kururlumu
    const user=userEvent.setup()

    // gerekli elemanları çek
    const checkBox= screen.getByRole('checkbox')
    const button= screen.getByRole('button')

    // checkbox tıkla
    await userEvent.hover(checkBox)

    // butonun üstüne mouse götürme
    fireEvent.mouseEnter(button)

    //  açılan yazıyı test etme
    const popup= screen.getByText('Size Gerçekten', {exact:false})
//  yazını  açıldığını kontrol etme
expect(popup).toHaveStyle({ visibility: 'hidden' });
    

// mouse butonda yaırma
fireEvent.mouseLeave(button)

// popu gözğkmeyece

expect(popup).not.toBeVisible

})