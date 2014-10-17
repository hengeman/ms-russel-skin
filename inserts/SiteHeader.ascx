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
      ItemOrItems.Text = (shoppingCount == 1) ? "item" : "items";
    }
  }
</script>
<span>
  <asp:Label id="numCart" CssClass="numCart" runat="server"/>
</span>
<span>
  <asp:Label id="ItemOrItems" runat="server"/>
</span>

<PFWeb:LinkButton id="btnViewCart" name="btnViewCart" runat="server" Layout="nested" CssClass="siteButton" UseTrueLink="true" Link="UserContentShoppingCart.aspx" Text="View Your Basket" />

<PFWeb:LinkButton id="btnViewOrder" name="btnViewOrder" runat="server" Layout="nested" CssClass="siteButton" UseTrueLink="true" Link="UserContentOrders.aspx" Text="View Your Orders" />

<PFWeb:LinkButton id="btnViewProfile" name="btnViewProfile" runat="server" Layout="nested" CssClass="siteButton" UseTrueLink="true" Link="UserContentProfile.aspx" Text="View Your Profile" />
