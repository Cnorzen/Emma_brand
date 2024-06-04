import './index.css';

const SuccessStory = () => {

    const data = {
        title: 'Chung tay hỗ trợ quyên góp quần áo vải vóc: Ánh Sáng ấm áp cho trẻ em đặc biệt khó khăn tại Vùng núi sâu xa',
        description: 'Trong vùng núi sâu, Emma hợp tác nhóm "Chung Tay Hỗ Trợ" cùng nhau tài trợ quyên góp quần áo đã mang lại sự ánh sáng ấm áp cho trẻ em bằng những món quà nhỏ và tình yêu thương. Hành động này không chỉ là sự quyên góp vật chất, mà còn là biểu tượng của lòng nhân ái và hy vọng. Cùng nhau, chúng ta đã tạo ra những khoảnh khắc ý nghĩa và ấm áp, gửi đi thông điệp rằng không ai phải đối mặt với cuộc sống một mình.',
        totalFounded: '326',
        author: {
            name: 'Nguyễn Kim Dét ',
            city: 'Ho Chi Minh City, Viet Nam'
        }
    }

    return (
        <div className="container success_story">
            <div className="row pb-5">
                <div className="col-lg-6 col-md-12">
                    <div className='title-title'>
                        <h4 className="text-uppercase text-success">Câu Chuyện Emma Store</h4>
                        <h2 className="mt-4 title-title">Đọc Câu chuyện cùng Emma</h2>
                        <p className="mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p className="mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p className="mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 d-flex align-items-center success_story__button-col">  
                <div className="col-lg-15 col-md-12">
                    <img src="../image/Rectangle 4295.png" style={{ width: '100%' }} alt="#" />
                </div>
                </div>
            </div>
            <div className="row mt-5 d-flex align-items-center">
                <div className="col-lg-6 col-md-12">
                    <img src="../image/le-tan-OLuTnePDR14-unsplash.jpg" style={{ width: '100%' }} alt="#" />
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className='title-title'>
                        <h3 className="">{data.title}</h3>
                        <p className="mt-4">{data.description}</p>
                        <h2 className="mt-4 text-success success-story-founded">{data.totalFounded}</h2>
                        <h5 className="mt-2">Tổng số người hỗ trợ và ủng hộ quyên góp</h5>
                    </div>
                    <div className="mt-5">
                        <div className="d-flex title">
                            <div className='mx-2'>
                                <div>
                                    <h5>{data.author.name}</h5>
                                </div>
                                <div className="author-city">{data.author.city}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SuccessStory;