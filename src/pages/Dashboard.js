import SideNavbar from '../components/SideNavbar';
import '../styles/Dashboard.scss';
import icon from '../images/8bit-shark.jpg';

export default function Dashboard() {
  return (
    <>
    <div className="dashboard-container">
      <SideNavbar />
      <div className="dashboard-page">
        <section className="user-page">
          <div className="user-icon">
            <div className="u-icon">
              <img src={icon} alt=''/>
            </div>
          </div>
          <div className="user-info">
            <h3>Niko Soriano</h3>
            <p>@kaizenics</p>
            <p>Level 100 • Prowess</p>
            <div className="progress-bar-1">
              <div className="progress-1"></div>
            </div>
            <div className="progress-bar-2">
              <div className="progress-2"></div>
            </div>
          </div>
        </section>

        <section className="task-page">
          <div className="profile-icon">
          </div>
          <div className="task-info">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget ultrices arcu. Etiam malesuada mi eu urna consectetur mollis. Vestibulum sit amet suscipit libero. Praesent ultricies massa id ipsum sodales mollis. Etiam et sagittis odio. Nullam sed nisi id lorem commodo porttitor non nec velit. Cras blandit, nisi vel vehicula finibus, lorem lorem pharetra purus, in luctus turpis elit eget tellus. Nullam eget elementum dolor. Sed posuere mauris at rhoncus congue. Nam euismod est vel nibh finibus, ut vehicula ex egestas. Sed posuere est lacinia sem aliquam, id vehicula dui lobortis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In tincidunt molestie enim, a mattis ipsum venenatis et.

Pellentesque nec pharetra augue. Quisque eu nibh eget felis gravida sodales quis ut nunc. Curabitur eu lorem dui. In sed feugiat nibh, hendrerit eleifend augue. Donec facilisis libero ac ipsum interdum, sit amet sollicitudin mauris facilisis. Cras laoreet rhoncus elementum. Suspendisse accumsan tincidunt imperdiet. Aenean condimentum, risus nec tempus dapibus, metus odio consectetur magna, ac luctus felis eros vitae risus. Sed gravida ex non nulla elementum, at laoreet metus euismod.

Nam vulputate ante aliquam augue ultrices euismod id non tellus. Vestibulum et pellentesque lacus, quis lacinia libero. Suspendisse et purus at magna elementum posuere et a orci. Curabitur mollis quis metus quis egestas. Morbi tincidunt ipsum a nibh malesuada, at suscipit justo ultricies. Sed vel accumsan eros, ac blandit enim. Quisque faucibus viverra imperdiet. Donec vitae ligula quis augue dignissim laoreet sit amet eget erat. Morbi nec tellus ultricies, semper elit at, consequat ante. Etiam varius in justo ut viverra. Nam maximus nunc mi, a suscipit mi euismod eget. Morbi fermentum enim volutpat dolor laoreet, vel ornare leo porttitor. Proin nisl nisi, ultrices non risus ut, condimentum rutrum lectus. Ut vitae viverra diam.

Aliquam a odio laoreet, tincidunt dui ac, luctus risus. Integer dictum massa justo, malesuada egestas ipsum tempus sodales. Maecenas in nibh nec lacus ultricies dignissim ut et velit. Mauris elementum libero eget dui interdum condimentum. Nulla libero risus, blandit a nisl sit amet, tincidunt ornare justo. Integer tincidunt metus nec neque tristique vehicula. Integer ac nibh nibh. Morbi eu massa congue, pellentesque diam non, tristique odio. Maecenas vitae diam eu neque mattis sagittis nec interdum diam. Vestibulum congue ligula nec metus lacinia, et aliquet sem laoreet.

Aliquam vestibulum risus id lectus molestie accumsan. Suspendisse lectus nisi, hendrerit et viverra quis, egestas a elit. Cras iaculis nisi sed mi sollicitudin, eget elementum enim dignissim. Donec fermentum a massa quis porta. Sed non elementum nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque eget nunc lectus.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget ultrices arcu. Etiam malesuada mi eu urna consectetur mollis. Vestibulum sit amet suscipit libero. Praesent ultricies massa id ipsum sodales mollis. Etiam et sagittis odio. Nullam sed nisi id lorem commodo porttitor non nec velit. Cras blandit, nisi vel vehicula finibus, lorem lorem pharetra purus, in luctus turpis elit eget tellus. Nullam eget elementum dolor. Sed posuere mauris at rhoncus congue. Nam euismod est vel nibh finibus, ut vehicula ex egestas. Sed posuere est lacinia sem aliquam, id vehicula dui lobortis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In tincidunt molestie enim, a mattis ipsum venenatis et.

Pellentesque nec pharetra augue. Quisque eu nibh eget felis gravida sodales quis ut nunc. Curabitur eu lorem dui. In sed feugiat nibh, hendrerit eleifend augue. Donec facilisis libero ac ipsum interdum, sit amet sollicitudin mauris facilisis. Cras laoreet rhoncus elementum. Suspendisse accumsan tincidunt imperdiet. Aenean condimentum, risus nec tempus dapibus, metus odio consectetur magna, ac luctus felis eros vitae risus. Sed gravida ex non nulla elementum, at laoreet metus euismod.

Nam vulputate ante aliquam augue ultrices euismod id non tellus. Vestibulum et pellentesque lacus, quis lacinia libero. Suspendisse et purus at magna elementum posuere et a orci. Curabitur mollis quis metus quis egestas. Morbi tincidunt ipsum a nibh malesuada, at suscipit justo ultricies. Sed vel accumsan eros, ac blandit enim. Quisque faucibus viverra imperdiet. Donec vitae ligula quis augue dignissim laoreet sit amet eget erat. Morbi nec tellus ultricies, semper elit at, consequat ante. Etiam varius in justo ut viverra. Nam maximus nunc mi, a suscipit mi euismod eget. Morbi fermentum enim volutpat dolor laoreet, vel ornare leo porttitor. Proin nisl nisi, ultrices non risus ut, condimentum rutrum lectus. Ut vitae viverra diam.

Aliquam a odio laoreet, tincidunt dui ac, luctus risus. Integer dictum massa justo, malesuada egestas ipsum tempus sodales. Maecenas in nibh nec lacus ultricies dignissim ut et velit. Mauris elementum libero eget dui interdum condimentum. Nulla libero risus, blandit a nisl sit amet, tincidunt ornare justo. Integer tincidunt metus nec neque tristique vehicula. Integer ac nibh nibh. Morbi eu massa congue, pellentesque diam non, tristique odio. Maecenas vitae diam eu neque mattis sagittis nec interdum diam. Vestibulum congue ligula nec metus lacinia, et aliquet sem laoreet.

Aliquam vestibulum risus id lectus molestie accumsan. Suspendisse lectus nisi, hendrerit et viverra quis, egestas a elit. Cras iaculis nisi sed mi sollicitudin, eget elementum enim dignissim. Donec fermentum a massa quis porta. Sed non elementum nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque eget nunc lectus.</p>
          </div>
        </section>
      </div>
    </div>
    </>
  );
}
