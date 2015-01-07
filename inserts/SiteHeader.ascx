<%@ Control Language="c#" AutoEventWireup="True" %>
<%@ Register TagPrefix="PFWeb" Namespace="PFWeb" Assembly="PFWeb" %>
<script language="C#" runat="server">
  string GetUserID(Pageflex.Ur.Storefront.Data.StorefrontAPI isini)
  {
    return isini.GetValue("SystemProperty", "LoggedOnUserID", null);
  }

  int GetShoppingCartCount()
  {
    Pageflex.Ur.Storefront.Data.StorefrontAPI isini =
      new Pageflex.Ur.Storefront.Data.StorefrontAPI();
    string userID = GetUserID(isini);
    string[] docsInCart = isini.GetListValue("UserListProperty", "DocumentsInShoppingCart", userID);
    return (docsInCart != null) ? docsInCart.Length : 0 ;
  }

  void Page_Load(object sender, EventArgs e)
  {
    if (!Page.IsPostBack)
    {
      int shoppingCount = GetShoppingCartCount();
      numCart.Text = shoppingCount.ToString();
      /// ItemOrItems.Text = (shoppingCount == 1) ? "item" : "items";
    }
  }

</script>
<link rel="shortcut icon" href="https://russellwealthstore.co.uk/Custom/Media/images/favicon.ico" />
<link rel="stylesheet" href="https://russellwealthstore.co.uk/Custom/Themes/Russell-Skinning/CSS/Site.css" type="text/css" media="screen" title="no title" charset="utf-8">
<header class="site-header">
  <img src="/Custom/Media/images/stripes.svg" alt="Russel Stripes"
       class="site-header__stripes"/>

  <a href="UserContentStart.aspx?category=1" class="site-header__store-logo">
    <img alt="The Marketing Store" src="/Custom/Media/images/logo-mstore.svg"/>
  </a>

  <nav class="site-header__nav">
    <a href="UserContentStart.aspx?category=1">Home</a>
    <a href="UserContentShoppingCart.aspx">My basket
      <span class="site-header__basket-num">
        <asp:Label id="numCart" CssClass="numCart" runat="server"/>
      </span>
    </a>
    <a href="UserContentOrders.aspx">My orders</a>
    <a href="UserContentProfile.aspx">My profile</a>
    <a href="Login.aspx?logout=1">Log out</a>

    <section class="site-header__search">
      <div>
        <div class="site-header__search-input">
          <a href="javascript:__doPostBack('btnSearch','')">GO</a>
        </div>
      </div>
    </section>
    <div>
    <a href="http://www.russellwealth.co.uk/" target="_new" class="site-header__russel-logo">
    <img class="site-header__russel-logo" alt="Russel Wealth Management"
    src="/Custom/Media/images/logo-russell-wm.svg" /></a>
    </div>
  </nav>
</header>
