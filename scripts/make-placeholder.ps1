# One-off helper: generates flat-fill placeholder images at exact pixel
# dimensions so layout doesn't shift when real assets replace them. Not part
# of the app - safe to delete once real photography/work images are in.
Add-Type -AssemblyName System.Drawing

function New-Placeholder {
    param(
        [string]$Path,
        [int]$Width,
        [int]$Height,
        [string]$Label
    )

    $bmp = New-Object System.Drawing.Bitmap($Width, $Height)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias

    $fill = [System.Drawing.ColorTranslator]::FromHtml('#F2EFE7')
    $line = [System.Drawing.ColorTranslator]::FromHtml('#DFD9CC')
    $ink = [System.Drawing.ColorTranslator]::FromHtml('#5A615C')

    $g.Clear($fill)
    $pen = New-Object System.Drawing.Pen($line, 2)
    $g.DrawRectangle($pen, 1, 1, $Width - 2, $Height - 2)

    $fontSize = [Math]::Max(14, [Math]::Round($Width / 40))
    $font = New-Object System.Drawing.Font('Arial', $fontSize)
    $brush = New-Object System.Drawing.SolidBrush($ink)
    $text = "$Label`n$Width x $Height"
    $format = New-Object System.Drawing.StringFormat
    $format.Alignment = [System.Drawing.StringAlignment]::Center
    $format.LineAlignment = [System.Drawing.StringAlignment]::Center
    $rect = New-Object System.Drawing.RectangleF(0, 0, $Width, $Height)
    $g.DrawString($text, $font, $brush, $rect, $format)

    $bmp.Save($Path, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $bmp.Dispose()
    Write-Output "Wrote $Path"
}

New-Placeholder -Path 'public/work/projects/project-01.png' -Width 1200 -Height 900 -Label 'Work placeholder 01'
New-Placeholder -Path 'public/work/projects/project-02.png' -Width 1200 -Height 900 -Label 'Work placeholder 02'
New-Placeholder -Path 'public/work/projects/project-03.png' -Width 1200 -Height 900 -Label 'Work placeholder 03'

New-Placeholder -Path 'public/team/faik.png' -Width 800 -Height 1000 -Label 'Faik - photo placeholder'
New-Placeholder -Path 'public/team/rashid.png' -Width 800 -Height 1000 -Label 'Rashid - photo placeholder'

New-Placeholder -Path 'public/work/showcase/before.png' -Width 1200 -Height 1600 -Label 'Before - plain itinerary'
New-Placeholder -Path 'public/work/showcase/after.png' -Width 1200 -Height 1600 -Label 'After - designed itinerary'
New-Placeholder -Path 'public/work/showcase/page-02.png' -Width 1200 -Height 1600 -Label 'Day-by-day spread'
New-Placeholder -Path 'public/work/showcase/page-03.png' -Width 1200 -Height 1600 -Label 'Inclusions page'
New-Placeholder -Path 'public/work/showcase/page-04.png' -Width 1200 -Height 1600 -Label 'Pricing page'
