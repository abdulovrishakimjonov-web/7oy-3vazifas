import React, { useState } from 'react'

const Catalog = () => {
  const [formData, setFormData] = useState({
    clientNumber: '',
    inn: '',
    legalAddress: '',
    actualAddress: '',
    directorFullName: '',
    hasEmail: '',
    emailAddress: '',
    locality: '',
    deliveryAddress: '',
    deliveryType: 'pickup',
    paymentType: '',
    bankBin: '',
    notes: '',
    returnReason: '',
    volume: '',
    source: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleDownload = () => {
    console.log('Download survey')
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-t-lg shadow-sm p-4 mb-1">
          <h1 className="text-xl font-semibold text-gray-800">Анкета дистрибьюторам</h1>
        </div>

        {/* Main Form */}
        <div className="bg-red-600 p-8 rounded-lg shadow-lg">
          <div className="bg-white rounded-lg p-6 mb-6">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <div className="bg-red-600 text-white px-8 py-3 rounded-full">
                <span className="text-2xl font-bold">PRAVI</span>
              </div>
            </div>

            <h2 className="text-center text-xl font-semibold mb-6 text-gray-800">
              Анкета дистрибьюторам ТМ Pravi
            </h2>

            <form onSubmit={handleSubmit}>
              {/* Client Number and INN */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    № клиента-продаж <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="clientNumber"
                    value={formData.clientNumber}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    Название компании <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="inn"
                    value={formData.inn}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
                  />
                </div>
              </div>

              {/* Legal Address */}
              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-1">
                  Юридический адрес компании, ИНН
                </label>
                <input
                  type="text"
                  name="legalAddress"
                  value={formData.legalAddress}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
                />
              </div>

              {/* Actual Address */}
              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-1">
                  ФИО (Ответственное лицо, должность, Контакты)
                </label>
                <input
                  type="text"
                  name="actualAddress"
                  value={formData.actualAddress}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
                />
              </div>

              {/* Director Full Name */}
              <div className="mb-6">
                <label className="block text-sm text-gray-700 mb-1">
                  ФИО Директора, Контакты
                </label>
                <input
                  type="text"
                  name="directorFullName"
                  value={formData.directorFullName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
                />
              </div>

              {/* Email and Delivery Section */}
              <div className="bg-gray-200 p-4 rounded-lg mb-6">
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {/* Has Email */}
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      Электро. п/д Есть?
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="hasEmail"
                          value="yes"
                          checked={formData.hasEmail === 'yes'}
                          onChange={handleChange}
                          className="mr-1"
                        />
                        <span className="text-sm">Да</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="hasEmail"
                          value="no"
                          checked={formData.hasEmail === 'no'}
                          onChange={handleChange}
                          className="mr-1"
                        />
                        <span className="text-sm">Нет</span>
                      </label>
                    </div>
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">
                      Отправка эл. счётов?
                    </label>
                    <input
                      type="email"
                      name="emailAddress"
                      value={formData.emailAddress}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
                    />
                  </div>

                  {/* Locality */}
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">
                      Провинциальна область,Район
                    </label>
                    <input
                      type="text"
                      name="locality"
                      value={formData.locality}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  {/* Delivery Address */}
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">
                      Уточненная информация о доставке (адресные названия улиц, км)
                    </label>
                    <input
                      type="text"
                      name="deliveryAddress"
                      value={formData.deliveryAddress}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
                    />
                  </div>

                  {/* Delivery Type */}
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      С чего доставить товар?
                    </label>
                    <div className="space-y-1">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="deliveryType"
                          value="pickup"
                          checked={formData.deliveryType === 'pickup'}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <span className="text-sm">ФОР / Ранмох</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="deliveryType"
                          value="forfait"
                          checked={formData.deliveryType === 'forfait'}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <span className="text-sm">ФОР/Фрт</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="deliveryType"
                          value="pravi533"
                          checked={formData.deliveryType === 'pravi533'}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <span className="text-sm">Pravi533/ 533</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Payment Type and Bank */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">
                      Метод оплаты (наличный / безналичным)
                    </label>
                    <input
                      type="text"
                      name="paymentType"
                      value={formData.paymentType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">
                      Обслуживаемый ИП, Реквизиты банька
                    </label>
                    <input
                      type="text"
                      name="bankBin"
                      value={formData.bankBin}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Fields */}
              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-1">
                  Планирование взятые на заметку
                </label>
                <input
                  type="text"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-1">
                  Отправка
                </label>
                <input
                  type="text"
                  name="returnReason"
                  value={formData.returnReason}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-1">
                  Объема
                </label>
                <input
                  type="text"
                  name="volume"
                  value={formData.volume}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm text-gray-700 mb-1">
                  Источник
                </label>
                <input
                  type="text"
                  name="source"
                  value={formData.source}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-gray-800 text-white px-8 py-2 rounded hover:bg-gray-900 transition-colors flex items-center gap-2"
                >
                  ОТПРАВИТЬ
                  <span>→</span>
                </button>
              </div>
            </form>
          </div>

          {/* Download Survey Section */}
          <div className="bg-gray-300 rounded-lg p-4 flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Скачать анкету</h3>
              <p className="text-xs text-gray-600">
                Если не открывается автоматически, нажмите кнопку для загрузки анкеты
              </p>
            </div>
            <button
              onClick={handleDownload}
              className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors flex items-center gap-2"
            >
              СКАЧАТЬ
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Catalog