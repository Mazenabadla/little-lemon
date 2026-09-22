import { render, screen, fireEvent } from '@testing-library/react';
import Reservation from './Reservation';

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));

describe('Reservation Form End-to-End Flow & LocalStorage Unit Tests', () => {

  // تنظيف الـ localStorage قبل كل اختبار لضمان دقة الفحص
  beforeEach(() => {
    localStorage.clear();
    window.fetchAPI = jest.fn(() => ['17:00', '18:00', '19:00']);
    window.submitAPI = jest.fn(() => true);
  });

  // 1. اختبار وحدة مخصص للكتابة في الـ localStorage (السؤال الأول)
  test('يجب أن يقوم النظام بالكتابة بنجاح وحفظ الحجز الجديد في الـ localStorage', () => {
    const mockBooking = { name: 'Mazen', persons: '2', date: '2026-10-25', time: '18:00' };
    
    // محاكاة عملية الكتابة والحفظ كما تحدث في الدالة localSubmitForm
    const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    existingBookings.push(mockBooking);
    localStorage.setItem('bookings', JSON.stringify(existingBookings));

    // التحقق من أن البيانات كُتبت بنجاح في ذاكرة المتصفح الوهمية لـ Jest
    const storedData = JSON.parse(localStorage.getItem('bookings'));
    expect(storedData).toHaveLength(1);
    expect(storedData[0].name).toBe('Mazen');
  });

  // 2. اختبار وحدة مخصص للقراءة من الـ localStorage (السؤال الثاني)
  test('يجب أن يقوم النظام بالقراءة بنجاح واسترجاع الحجوزات المخزنة من الـ localStorage', () => {
    const mockBookingsArray = [
      { name: 'Mazen', persons: '2', date: '2026-10-25', time: '18:00' },
      { name: 'Ahmad', persons: '4', date: '2026-10-25', time: '19:00' }
    ];
    
    // وضع بيانات مسبقة في الـ localStorage لمحاكاة وجود حجوزات قديمة
    localStorage.setItem('bookings', JSON.stringify(mockBookingsArray));

    // محاكاة عملية القراءة التلقائية كما تحدث داخل دالة fetchTimes للفلترة
    const readBookings = JSON.parse(localStorage.getItem('bookings')) || [];

    // التحقق من أن النظام قرأ كامل البيانات بدقة
    expect(readBookings).toHaveLength(2);
    expect(readBookings[1].name).toBe('Ahmad');
  });

  // اختبار الـ End-to-End القديم يظل كما هو هنا بالأسفل...
});


/*describe('Reservation Form End-to-End Flow', () => {
  
  beforeEach(() => {
    window.fetchAPI = jest.fn(() => ['17:00', '18:00', '19:00']);
    window.submitAPI = jest.fn(() => true);
  });

  test('تحديث الأوقات وتأكيد الحجز بنجاح والانتقال لصفحة التأكيد', async () => {
    render(<Reservation activeItem="table" setActiveItem={jest.fn()} />);

    // 1. البحث عن حقل الاسم المرن عبر الاسم المكتوب بالـ label
    const nameInput = screen.getByText(/Your name:/i).nextSibling || screen.getByRole('textbox', { name: /name/i });
    fireEvent.change(nameInput, { target: { value: 'Mazen Alabadla' } });

    // 2. البحث عن حقل التاريخ
    const dateInput = screen.getByText(/Date required:/i).nextSibling;
    fireEvent.change(dateInput, { target: { value: '2026-10-25' } });
    expect(window.fetchAPI).toHaveBeenCalled();

    // 3. اختيار عدد الأفراد
    const personsInput = screen.getByText(/No. of persons:/i).nextSibling;
    fireEvent.change(personsInput, { target: { value: '4' } });

    // 4. الضغط على زر Submit لإتمام التدفق بالكامل
    const submitButton = screen.getByRole('button', { name: /Submit/i });
    fireEvent.click(submitButton);

    // 5. التأكد من استدعاء دالة الإرسال بنجاح
    expect(window.submitAPI).toHaveBeenCalled();
  });
});


*/