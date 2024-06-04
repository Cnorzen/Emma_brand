import Footer from "../Footer";
import Header from "../Header";
import DontMiss from "../contentBlocks/DontMiss";
import SyNews from "../contentBlocks/SyNews";

export const LatestNews = () => {
  // page Tin tức

  const news = [
    {
      title:
        "Những kiểu mẫu làm từ tái chế và những chất liệu thừa - tương lai của thời trang bắt đầu từ bây giờ.",
      description:
        "Trái đất không có đủ nguyên liệu tự nhiên để chu cấp cho mọi thứ chúng ta làm, nhất là vào lúc này. Cho nên chúng ta phải thay đổi cách vận hành từ trước đến giờ, và đổi mới. Thời trang là một trong những ngành gây ô nhiễm nhất trên thế giới và cũng là một trong những ngành sử dụng nhiều nước nhất. Bằng việc đầu tư vào các giải pháp công nghệ mới, chúng tôi mong muốn thay đổi cách chúng tôi sản xuất, sử dụng và thải bỏ quần áo. Không còn những chiếc quần jean rách nát trong thùng rác gia đình và không còn sự phụ thuộc nặng nề vào các loại vải cần nhiều nước. Thay vào đó, chúng tôi muốn tránh lãng phí và để nguyên liệu luân chuyển. ",
      author: "Nguyen Thao Anh",
      image: "/image/Rectangle 2.png",
      date: "4/03/2024",
    },
    {
      title: "Những xu hướng đáng để theo dõi? Tái chế và tái tạo.",
      description:
        "Đây là một sự thật không mấy thú vị: Ngày nay, chưa đến 1% nguyên liệu được sử dụng để sản xuất quần áo được tái chế mỗi năm. Điều này có nghĩa là hàng ngàn tấn hàng dệt cuối cùng sẽ bị chôn lấp. Bằng cách tái sử dụng hoặc tái chế thời trang, chúng ta có thể thay đổi điều đó.",
      author: "Luu Kim Det",
      date: "20/04/2024",
      image: "/image/Rectangle 39.png",
    },
    {
      title: "Thời trang mang lại sự công bằng? Đương nhiên!",
      description:
        "Giống như nhiều thương hiệu thời trang, chúng tôi không sở hữu các nhà máy sản xuất quần áo. Nhưng chúng tôi muốn tất cả những người tham gia sản xuất ra sản phẩm của mình có một môi trường làm việc an toàn, công bằng và bình đẳng. Mục tiêu là đảm bảo các giá trị của chúng tôi được tôn trọng trong mọi bước đi, ở mọi quốc gia và bởi mọi nhà cung cấp. Vậy chúng tôi làm được điều này bằng cách nào? Bất kỳ nhà cung cấp nào làm việc với chúng tôi đều phải ký Sustainability Commitment, đây là một bộ tiêu chuẩn liên quan đến tiền lương công bằng, điều kiện làm việc tốt, phúc lợi về động vật, v.v. Điều này là không thể thương lượng.",
      author: "Tran Ngoc Duc",
      date: "14/05/2024",
      image: "/image/Rectangle 38.png",
    },
    {
      title:
        "Những kiểu mẫu làm từ tái chế và những chất liệu thừa - tương lai của thời trang bắt đầu từ bây giờ.",
      description:
        "Trái đất không có đủ nguyên liệu tự nhiên để chu cấp cho mọi thứ chúng ta làm, nhất là vào lúc này. Cho nên chúng ta phải thay đổi cách vận hành từ trước đến giờ, và đổi mới. Thời trang là một trong những ngành gây ô nhiễm nhất trên thế giới và cũng là một trong những ngành sử dụng nhiều nước nhất. Bằng việc đầu tư vào các giải pháp công nghệ mới, chúng tôi mong muốn thay đổi cách chúng tôi sản xuất, sử dụng và thải bỏ quần áo. Không còn những chiếc quần jean rách nát trong thùng rác gia đình và không còn sự phụ thuộc nặng nề vào các loại vải cần nhiều nước. Thay vào đó, chúng tôi muốn tránh lãng phí và để nguyên liệu luân chuyển. ",
      author: "Nguyen Thao Anh",
      image: "/image/Rectangle 2.png",
      date: "4/03/2024",
    },
    {
      title: "Những xu hướng đáng để theo dõi? Tái chế và tái tạo.",
      description:
        "Đây là một sự thật không mấy thú vị: Ngày nay, chưa đến 1% nguyên liệu được sử dụng để sản xuất quần áo được tái chế mỗi năm. Điều này có nghĩa là hàng ngàn tấn hàng dệt cuối cùng sẽ bị chôn lấp. Bằng cách tái sử dụng hoặc tái chế thời trang, chúng ta có thể thay đổi điều đó.",
      author: "Luu Kim Det",
      date: "20/04/2024",
      image: "/image/Rectangle 39.png",
    },
    {
      title: "Thời trang mang lại sự công bằng? Đương nhiên!",
      description:
        "Giống như nhiều thương hiệu thời trang, chúng tôi không sở hữu các nhà máy sản xuất quần áo. Nhưng chúng tôi muốn tất cả những người tham gia sản xuất ra sản phẩm của mình có một môi trường làm việc an toàn, công bằng và bình đẳng. Mục tiêu là đảm bảo các giá trị của chúng tôi được tôn trọng trong mọi bước đi, ở mọi quốc gia và bởi mọi nhà cung cấp. Vậy chúng tôi làm được điều này bằng cách nào? Bất kỳ nhà cung cấp nào làm việc với chúng tôi đều phải ký Sustainability Commitment, đây là một bộ tiêu chuẩn liên quan đến tiền lương công bằng, điều kiện làm việc tốt, phúc lợi về động vật, v.v. Điều này là không thể thương lượng.",
      author: "Tran Ngoc Duc",
      date: "14/05/2024",
      image: "/image/Rectangle 38.png",
    },
  ];

  return (
    <section>
      <Header />
      <SyNews news={news} />
      <br />
      <DontMiss />
      <Footer />
    </section>
  );
};
