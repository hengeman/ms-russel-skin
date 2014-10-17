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
<header class="site-header">
  <img class="site-header__store-logo" src="http://FIXME" alt="The Marketing Store"/>

  <a href="UserContentStart.aspx">Home</a>
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

  <img class="site-header__russel-logo" src="http://FIXME" alt="Russel Wealth Management" />
</header>
