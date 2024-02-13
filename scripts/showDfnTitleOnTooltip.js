document.addEventListener('DOMContentLoaded', function () {
  // Get all <dfn> tags
  const dfnTags = document.querySelectorAll('dfn');

  // Function to show tooltip with title content at cursor coordinates
  function showTooltip(event) {

    const accentColor = '#edca51';

    function cleanUp() {
      // First, remove any existing tooltips
      const existingTooltip = document.querySelector('div[role="tooltip"]');
      if (existingTooltip) {
        document.body.removeChild(existingTooltip);
      }

      // Find all the dfn tags and remove the red style if it exists
      dfnTags.forEach(function (dfn) {
        dfn.style.backgroundColor = '';
        dfn.style.borderRadius = '';
      });
    }

    cleanUp();

    // Create tooltip element
    const tooltip = document.createElement('div');
    tooltip.textContent = this.title;
    tooltip.style.position = 'fixed';
    tooltip.style.backgroundColor = accentColor;
    tooltip.style.padding = '14px';
    tooltip.style.left = '0px';
    tooltip.style.bottom = '0px';
    tooltip.style.borderRadius = '8px';
    tooltip.style.margin = '8px';
    tooltip.role = 'tooltip';
    tooltip.style.width = 'calc(100% - 16px)';
    tooltip.style.boxSizing = 'border-box';

    // Append tooltip to body
    document.body.appendChild(tooltip);

    // Add inline style to the clicked dfn element
    this.style.backgroundColor = accentColor;
    this.style.borderRadius = '4px';

    function removeTooltip() {
      document.removeEventListener('click', removeTooltip);
      // Remove the tooltip if its a node of the body
      if (document.body.contains(tooltip)) {
        document.body.removeChild(tooltip);
      }
      cleanUp();
    }

    // Add a listener to remove the tooltip when clicked outside of it or dfn tags
    document.addEventListener('click', () => removeTooltip());
  }

  // Add click event listener
  dfnTags.forEach(function (dfn) {
    dfn.addEventListener('click', function (event) {
      // Prevent the click event from triggering the hover event
      event.stopPropagation();
      showTooltip.call(this, event);
    });
  });
});