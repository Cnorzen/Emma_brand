import "./index.css";

const Contact = () => {
  return (
    <div>
      <div className="container mt-5">
        <h2 className="text-center">Liên Hệ Chúng Tôi</h2>
        <p className="mt-4 text-center mx-auto contact-text">
          Hãy liên hệ với chúng tôi để có được sự hỗ trợ
        </p>
        <div className="row mt-5">
          <div className="col-lg-4 cold-sm-12">
            <div className="d-flex">
              <div>
                <img src="/image/page_6_phone.svg" />
              </div>
              <div style={{ marginLeft: "20px" }}>
                <h4 className="mt-3">Số Liên Hệ</h4>
                <h5 className="mt-4">0912345678</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 cold-sm-12">
            <div className="d-flex">
              <div>
                <img src="/image/page_6_email.svg" />
              </div>
              <div style={{ marginLeft: "20px" }}>
                <h4 className="mt-3">Mail</h4>
                <h5 className="mt-4">support@Emmafashion.com</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 cold-sm-12">
            <div className="d-flex">
              <div>
                <img src="/image/page_6_location.svg" />
              </div>
              <div style={{ marginLeft: "20px" }}>
                <h4 className="mt-3">Địa chỉ của chúng tôi</h4>
                <h5 className="mt-4">
                  Tòa nhà FPT Polytechnic, phố Trịnh Văn Bô, phường Phương Canh,
                  quận Nam Từ Liêm, TP Hà Nội
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      {/* phần bản đồ*/}

      <section className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Visit Our Location
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="mt-16 lg:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.861924320462!2d105.7402342151451!3d21.036894192863796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134533c78c6c8a3%3A0xc808f34a3066c3b7!2sFPT%20Polytechnic%20H%C3%A0%20N%E1%BB%99i!5e0!3m2!1sen!2s!4v1624275977595!5m2!1sen!2s"
                  width="100%"
                  height="480"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
              <div>
                <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                  <div className="px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Our Address
                    </h3>
                    <p className="mt-1 text-gray-600">
                      FPT Polytechnic, Trịnh Văn Bô, Hà Nội, Vietnam
                    </p>
                  </div>
                  <div className="border-t border-gray-200 px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                    <p className="mt-1 text-gray-600">
                      Monday - Friday: 9am - 5pm
                    </p>
                    <p className="mt-1 text-gray-600">Saturday: 10am - 4pm</p>
                    <p className="mt-1 text-gray-600">Sunday: Closed</p>
                  </div>
                  <div className="border-t border-gray-200 px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Contact
                    </h3>
                    <p className="mt-1 text-gray-600">
                      Email: support@Emmafashion.com
                    </p>
                    <p className="mt-1 text-gray-600">Phone: 0912345678</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phần biểu mẫu lời nhắn */}

      <form
        onSubmit={(event) => {
          event.preventDefault();
          alert("biểu mẫu đã được gửi thành công");
        }}
      >
        <div className="contact-form bg-zinc-50 mx-auto">
          <h3 className="pt-5 px-5 pb-3">Viết cho chúng tôi một tin nhắn</h3>
          <div className="row mx-5 d-flex justify-content-between">
            <div className="p-0 mt-5 col-xl-5 col-lg-12">
              <h5 className="contact-item-text" htmlFor="fname">
                Họ Và Tên
              </h5>
              <div>
                <input
                  className="contact-input mt-4"
                  placeholder="Họ và tên của bạn"
                  id="fname"
                  name="fname"
                  type="text"
                  min="5"
                  max="40"
                />
              </div>
            </div>
            <div className="p-0 mt-5 col-xl-5 col-lg-12">
              <h5 className="contact-item-text" htmlFor="eadress">
                Địa chỉ Email
              </h5>
              <div>
                <input
                  className="contact-input mt-4"
                  placeholder="Email của bạn"
                  id="eadress"
                  name="eadress"
                  type="email"
                  min="5"
                  max="40"
                />
              </div>
            </div>
          </div>
          <div className="row mx-5 d-flex justify-content-between">
            <div className="p-0 mt-5 col-xl-5 col-lg-12">
              <h5 className="contact-item-text" htmlFor="number">
                Số điện thoại
              </h5>
              <div>
                <input
                  className="contact-input mt-4"
                  placeholder="Số điện thoại của bạn"
                  id="number"
                  name="number"
                  type="tel"
                  min="5"
                  max="40"
                />
              </div>
            </div>
          </div>
          <h5 className="mt-3 mx-5 contact-item-text" htmlFor="message">
            Lời Tin Nhắn
          </h5>
          <div className="mx-5">
            <input
              className="mt-4 contact-message"
              type="text"
              placeholder="Viết cho chúng tôi ở đây"
              id="message"
              name="message"
              min="5"
              max="250"
            />
          </div>
          <div className="row mx-5 mt-5">
            <div className="col-lg-6 col-md-12 p-0 d-flex align-items-center mt-4">
              <input type="checkbox" className="contact-checkbox" />
              <div className="mx-3">Chấp nhận các điều khoản và điều kiện</div>
            </div>
            <div className="col-lg-6 col-md-12 p-0 mt-3 d-flex justify-content-end">
              <button
                className="text-white text-uppercase button-bg-pink-text-white btn-contact"
                type="submit"
              >
                Gửi
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
