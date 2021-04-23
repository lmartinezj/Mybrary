// Plugins can be registered with FilePond using the registerPlugin method
FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginFileEncode
)

// Set aspect ratio for the drop area to make the drop area take the same space as the book cover.
FilePond.setOptions({ 
    stylePanelAspectRatio: 150 / 100,
    imageResizeTargetWidth: 100,
    imageResizeTargetHeight: 150
})

//Turn all file input elements into ponds
FilePond.parse(document.body);