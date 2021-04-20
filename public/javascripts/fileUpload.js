// Plugins can be registered with FilePond using the registerPlugin method
FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginFileEncode
)

//Turn all file input elements into ponds
FilePond.parse(document.body);