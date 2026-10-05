// 1. الدالة المحلية لإرسال البيانات وحفظها في الـ localStorage
  /*const localSubmitForm = (formData) => {
    const isConfirmed = window.submitAPI(formData);
    if (isConfirmed) {
      const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
      existingBookings.push(formData);
      localStorage.setItem('bookings', JSON.stringify(existingBookings));
      
      // التوجيه لصفحة التأكيد مع البيانات
      navigate('/confirmed', { state: { bookingDetails: formData } }); 
    }
  };
  */

  //    const localSubmitForm = (formData) => {
  //   const isConfirmed = window.submitAPI(formData);
  //   if (isConfirmed) {
  //     const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
  //     existingBookings.push(formData);
  //     localStorage.setItem('bookings', JSON.stringify(existingBookings));
      
  //     if (typeof fetchTimes === 'function') {
  //       fetchTimes(formData.date);
  //     }

  //     navigate('/confirmed', { state: { bookingDetails: formData } }); 
  //   }
  // };


  // const handleFormSubmit = submitForm || localSubmitForm;

  // const fetchTimes = async (date) => {
  //   try {
  //     const times = await fetchAPI(date); 
  //     const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
      
  //     const bookedTimesForDate = storedBookings
  //       .filter(booking => booking.date === date)
  //       .map(booking => booking.time);
      
  //     const filteredTimes = times.filter(time => !bookedTimesForDate.includes(time));
  //     setAvailableTimes(filteredTimes);

  //     if (filteredTimes.length > 0) {
  //       setInputData(prev => ({ ...prev, time: filteredTimes[0] }));
  //     } else {
  //       setInputData(prev => ({ ...prev, time: '' }));
  //     }
  //   } catch (error) {
  //     console.error("Error fetching times:", error);
  //   }
  // };

  
  
  
  // useEffect(() => {
  //   if (inputData.date) {
  //     fetchTimes(inputData.date);
  //   }
  // }, [inputData.date]);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setInputData({ ...inputData, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
    
  //   const finalTime = inputData.time || availableTimes[0];
  //   const finalData = { ...inputData, time: finalTime };

  //   if (!finalData.time) {
  //     alert("لا توجد أوقات متاحة لهذا اليوم!");
  //     return;
  //   }

  //   setSubmittedData(finalData);
  //   setOpenModal(true);
  //   handleFormSubmit(finalData); 
   // set  Active Item(null); 
  // // };